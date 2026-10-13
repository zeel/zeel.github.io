'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { profile, twin } from '../data/content'
import Corners from './Corners'

const apiUrl = process.env.NEXT_PUBLIC_TWIN_API_URL || twin.apiUrl
const MAX_MESSAGES = 16
const FAILED_REPLY = "Sorry, I couldn't answer that right now. Please try again, or email me."
const REFUSED_REPLY = "I can't help with that one. Ask me about my work, projects or skills instead."
const LINK_PATTERN = /(https?:\/\/[^\s]+[^\s.,;:!?)]|[\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g

// Errors whose message is safe and useful to show the visitor.
class ChatError extends Error {}

export default function TwinChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')
  const listRef = useRef(null)
  const inputRef = useRef(null)
  const launcherRef = useRef(null)
  const wasOpen = useRef(false)

  useEffect(() => {
    if (open) inputRef.current?.focus()
    else if (wasOpen.current) launcherRef.current?.focus()
    wasOpen.current = open
  }, [open])

  useEffect(() => {
    const list = listRef.current
    if (list) list.scrollTop = list.scrollHeight
  }, [messages, pending, error])

  if (!apiUrl) return null

  const full = messages.length >= MAX_MESSAGES
  const waitingForFirstWord = pending && !messages.at(-1)?.content

  function startOver() {
    setMessages([])
    setError('')
    inputRef.current?.focus()
  }

  async function ask(question) {
    const text = question.trim()
    if (!text || pending || full) return

    const previous = messages
    const history = [...previous, { role: 'user', content: text }]
    setMessages([...history, { role: 'assistant', content: '' }])
    setInput('')
    setError('')
    setPending(true)

    let answer = ''
    const showAnswer = (content) =>
      setMessages((current) => [...current.slice(0, -1), { role: 'assistant', content }])

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      })
      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null)
        throw new ChatError(data?.error || FAILED_REPLY)
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      for (;;) {
        const { value, done } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop()
        for (const line of lines) {
          if (!line) continue
          const event = JSON.parse(line)
          if (event.type === 'text') {
            answer += event.text
            showAnswer(answer)
          } else if (event.type === 'done' && event.stop_reason === 'refusal') {
            answer = REFUSED_REPLY
            showAnswer(answer)
          } else if (event.type === 'done' && event.stop_reason === 'max_tokens') {
            answer += '…'
            showAnswer(answer)
          } else if (event.type === 'error') {
            throw new ChatError(event.message)
          }
        }
      }
      if (!answer) throw new ChatError(FAILED_REPLY)
    } catch (err) {
      if (!answer) {
        setMessages(previous)
        setInput(text)
      }
      setError(err instanceof ChatError ? err.message : FAILED_REPLY)
    } finally {
      setPending(false)
    }
  }

  if (!open) {
    return (
      <button
        ref={launcherRef}
        type="button"
        className="twin-launcher blueprint"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        <ChatIcon />
        Ask my AI twin
        <Corners />
      </button>
    )
  }

  return (
    <div
      className="twin-panel blueprint"
      role="dialog"
      aria-label={`Chat with ${profile.name}'s AI twin`}
      onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
    >
      <div className="twin-header">
        <Image className="twin-avatar" src={profile.photo} alt="" width={40} height={40} />
        <div className="twin-title">
          <span className="twin-name">{profile.name.split(' ')[0]}&apos;s AI twin</span>
          <span className="twin-subtitle">Answers from my resume · can make mistakes</span>
        </div>
        <button
          type="button"
          className="twin-icon-btn"
          onClick={startOver}
          disabled={!messages.length || pending}
          aria-label="Start a new chat"
          title="New chat"
        >
          ↺
        </button>
        <button
          type="button"
          className="twin-icon-btn"
          onClick={() => setOpen(false)}
          aria-label="Close chat"
          title="Close"
        >
          ×
        </button>
      </div>

      <div className="twin-messages" ref={listRef} aria-live="polite">
        <p className="twin-msg twin-msg--assistant">{twin.greeting}</p>
        {messages.length === 0 && (
          <div className="twin-suggestions">
            {twin.suggestedQuestions.map((q) => (
              <button key={q} type="button" className="tag tag-outline twin-chip" onClick={() => ask(q)}>
                {q}
              </button>
            ))}
          </div>
        )}
        {messages.map((m, i) =>
          m.content ? (
            <p key={i} className={`twin-msg twin-msg--${m.role}`}>
              {linkify(m.content)}
            </p>
          ) : null,
        )}
        {waitingForFirstWord && (
          <p className="twin-msg twin-msg--assistant twin-typing" aria-label="Typing">
            <span />
            <span />
            <span />
          </p>
        )}
        {error && (
          <p className="twin-error" role="alert">
            {error}
          </p>
        )}
        {full && (
          <p className="twin-note">
            This chat is getting long.{' '}
            <button type="button" className="twin-link-btn" onClick={startOver}>
              Start a new one
            </button>
          </p>
        )}
      </div>

      <form
        className="twin-form"
        onSubmit={(e) => {
          e.preventDefault()
          ask(input)
        }}
      >
        <textarea
          ref={inputRef}
          className="twin-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              ask(input)
            }
          }}
          placeholder="Ask about my work, skills, projects…"
          aria-label="Your question"
          rows={1}
          maxLength={600}
          disabled={full}
        />
        <button type="submit" className="btn btn-primary twin-send" disabled={pending || full || !input.trim()}>
          Send
        </button>
      </form>
      <Corners />
    </div>
  )
}

function linkify(text) {
  return text.split(LINK_PATTERN).map((part, i) => {
    if (i % 2 === 0) return part
    const isUrl = part.startsWith('http')
    return (
      <a key={i} href={isUrl ? part : `mailto:${part}`} target={isUrl ? '_blank' : undefined} rel="noreferrer">
        {part}
      </a>
    )
  })
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 5h16v11H9l-5 4z" />
    </svg>
  )
}
