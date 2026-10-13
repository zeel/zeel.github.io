import Anthropic from '@anthropic-ai/sdk'
import { buildSystemPrompt } from './prompt.js'

const MODEL = 'claude-opus-5-5'
const MAX_MESSAGES = 16 // 8 visitor questions per conversation
const MAX_QUESTION_CHARS = 600
const MAX_ANSWER_CHARS = 4000

const SYSTEM_PROMPT = buildSystemPrompt()

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get('Origin') ?? ''
    const allowedOrigins = (env.ALLOWED_ORIGINS ?? '').split(',').map((o) => o.trim())
    const cors = allowedOrigins.includes(origin)
      ? { 'Access-Control-Allow-Origin': origin, Vary: 'Origin' }
      : null

    if (request.method === 'OPTIONS') {
      if (!cors) return new Response(null, { status: 403 })
      return new Response(null, {
        status: 204,
        headers: {
          ...cors,
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
        },
      })
    }
    if (request.method !== 'POST') return json({ error: 'Not found' }, 404, cors)
    if (!cors) return json({ error: 'Origin not allowed' }, 403, cors)

    if (env.CHAT_RATE_LIMITER) {
      const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown'
      const { success } = await env.CHAT_RATE_LIMITER.limit({ key: ip })
      if (!success) {
        return json({ error: "You're sending messages quickly. Please wait a minute and try again." }, 429, cors)
      }
    }

    let body
    try {
      body = await request.json()
    } catch {
      return json({ error: 'Invalid request' }, 400, cors)
    }
    const messages = validateMessages(body?.messages)
    if (typeof messages === 'string') return json({ error: messages }, 400, cors)

    const { readable, writable } = new TransformStream()
    ctx.waitUntil(streamAnswer(env, messages, writable))
    return new Response(readable, {
      headers: {
        ...cors,
        'Content-Type': 'application/x-ndjson; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    })
  },
}

// Returns a clean messages array, or an error string to show the visitor.
function validateMessages(messages) {
  if (!Array.isArray(messages) || messages.length === 0) return 'Invalid request'
  if (messages.length > MAX_MESSAGES) return 'This chat is getting long. Please start a new one.'
  for (const m of messages) {
    if (!m || (m.role !== 'user' && m.role !== 'assistant') || typeof m.content !== 'string') {
      return 'Invalid request'
    }
    if (!m.content.trim()) return 'Invalid request'
    const limit = m.role === 'user' ? MAX_QUESTION_CHARS : MAX_ANSWER_CHARS
    if (m.content.length > limit) return 'That message is too long. Please shorten it.'
  }
  if (messages[0].role !== 'user' || messages.at(-1).role !== 'user') return 'Invalid request'
  return messages.map(({ role, content }) => ({ role, content }))
}

// Streams the answer as newline-delimited JSON events:
// {type:"text", text} chunks, then {type:"done", stop_reason} or {type:"error", message}.
async function streamAnswer(env, messages, writable) {
  const writer = writable.getWriter()
  const encoder = new TextEncoder()
  const send = (event) => writer.write(encoder.encode(`${JSON.stringify(event)}\n`))

  try {
    const client = new Anthropic({
      apiKey: env.ANTHROPIC_API_KEY,
      baseURL: env.ANTHROPIC_BASE_URL || undefined,
      maxRetries: 1,
    })
    const stream = client.beta.messages.stream({
      model: MODEL,
      max_tokens: 2048,
      // If a safety classifier declines, the API retries on Anthropic's
      // recommended fallback model within the same stream. Remove both lines
      // if MODEL is changed to one without server-side fallback.
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      output_config: { effort: 'low' },
      cache_control: { type: 'ephemeral' },
      system: SYSTEM_PROMPT,
      messages,
    })

    for await (const event of stream) {
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
        await send({ type: 'text', text: event.delta.text })
      }
    }
    const final = await stream.finalMessage()
    await send({ type: 'done', stop_reason: final.stop_reason })
  } catch (err) {
    console.error('twin: request failed', err?.status ?? '', err?.message ?? err)
    const message =
      err instanceof Anthropic.RateLimitError
        ? "I'm getting a lot of questions right now. Please try again in a minute."
        : "Sorry, I couldn't answer that right now. Please try again, or email me."
    await send({ type: 'error', message }).catch(() => {})
  } finally {
    await writer.close().catch(() => {})
  }
}

function json(data, status, cors) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...(cors ?? {}), 'Content-Type': 'application/json' },
  })
}
