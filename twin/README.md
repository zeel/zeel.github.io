# AI twin backend

The "Ask my AI twin" chat on zeelshah.com is answered by Claude through this
small Cloudflare Worker. GitHub Pages can't run server code or keep an API key
secret, so the Worker holds the Anthropic API key and streams answers back to
the chat window.

- **Knowledge:** the system prompt is built from `src/data/content.js` (profile,
  experience, projects, skills, education, plus the extra `twin.facts`). The twin
  is told to answer only from that, speak in first person, and send anything it
  doesn't know (salary, availability, …) to email.
- **Model:** `claude-opus-5-5` at low effort, with prompt caching and server-side
  refusal fallback enabled ([src/index.js](src/index.js)).
- **Abuse limits:** requests only from zeelshah.com (and localhost), 8 messages per
  minute per visitor IP, 600-character questions, 8 questions per conversation,
  2,048 output tokens per answer.

## One-time setup

1. **Anthropic API key.** In the [Claude Console](https://console.anthropic.com),
   create a workspace for the twin and set a **monthly spend limit** on it (for
   example $10–20). That limit caps your bill even if someone abuses the chat.
   Then create an API key in that workspace.
2. **Cloudflare account.** Sign up for free at [cloudflare.com](https://dash.cloudflare.com/sign-up).
3. **Deploy**, from this `twin/` folder:

   ```bash
   npm install
   npx wrangler login
   npx wrangler secret put ANTHROPIC_API_KEY
   npm run deploy
   ```

   `wrangler login` opens your browser to authorize Cloudflare; `secret put`
   asks you to paste the API key (it's stored encrypted in Cloudflare, never in
   this repo). `deploy` prints the Worker's URL, like
   `https://zeel-twin.<your-subdomain>.workers.dev`.
4. **Turn the chat on.** Put that URL in `twin.apiUrl` in
   [src/data/content.js](../src/data/content.js), then commit and push. The
   "Ask my AI twin" button appears once the site redeploys.

## Day to day

- **After editing `content.js`**, run `npm run deploy` here too: the site
  redeploys on push, but the twin only learns new facts when the Worker does.
- **Watch live logs:** `npx wrangler tail`. Usage and cost are in the Claude Console.
- **Change the greeting or suggested questions:** `twin` in `content.js`.

## Cost

Claude Opus 5.5 costs $4 per million input tokens and $20 per million output
tokens, and cached input (the ~1,700-token profile) is read at $0.20 per million.
A typical answer costs roughly 1–2 cents, so 1,000 answers a month is about $10–15.

For about a fortieth of that, set `MODEL` in [src/index.js](src/index.js) to
`claude-haiku-5-5` and delete the `betas` and `fallbacks` lines (Haiku 5.5 has no
server-side fallback); answers will be a little less polished.

## Local development

Create `twin/.dev.vars` (gitignored) with `ANTHROPIC_API_KEY=…` and run
`npm run dev` (Worker on http://localhost:8787). To point the local site at it,
create `.env.local` in the repo root with
`NEXT_PUBLIC_TWIN_API_URL=http://localhost:8787` and run `npm run dev` there.
Local requests use your real key and cost money like production ones.
