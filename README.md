# zeel.github.io

Personal portfolio site, live at **https://zeelshah.com** — Next.js (App Router, static export), deployed to GitHub Pages.
Design imported from the Claude Design project "Frontend Developer Portfolio Site".

## Run locally

```bash
npm install
npm run dev      # dev server with hot reload at http://localhost:3000
npm run build    # static export into out/
npm run preview  # serve the exported out/ folder locally
```

## Editing the site

| What you want to change | Where |
| --- | --- |
| Any text: intro, jobs, projects, skills, education, links | [src/data/content.js](src/data/content.js) |
| Hide the phone number / projects section | `flags` in [src/data/content.js](src/data/content.js) |
| Colors, fonts, spacing tokens, shared classes (`.btn`, `.card`, `.tag`) | [src/styles/design-system.css](src/styles/design-system.css) |
| Page layout, section styles, responsive breakpoints | [src/styles/portfolio.css](src/styles/portfolio.css) |
| Section markup / structure | [src/components/](src/components/) |
| Section order | [src/app/page.jsx](src/app/page.jsx) |
| Page title, meta / social tags, font loading | [src/app/layout.jsx](src/app/layout.jsx) |
| Site URL used by SEO tags, sitemap and robots.txt | `profile.url` in [src/data/content.js](src/data/content.js) |
| Structured data for search engines (JSON-LD), canonical URL | [src/app/page.jsx](src/app/page.jsx) |
| `sitemap.xml` / `robots.txt` | [src/app/sitemap.js](src/app/sitemap.js), [src/app/robots.js](src/app/robots.js) |
| Photo / resume / favicon | Replace the file in `public/` (`photo.jpg`, `Zeel-Shah-Resume.pdf`, `favicon.svg`) |

Section numbers (01–05) are written directly in each component in
[src/components/](src/components/).

The site is a static export (`output: 'export'` in [next.config.mjs](next.config.mjs)),
so features that need a running server — Route Handlers, Server Actions, Proxy
(middleware), and the default `next/image` optimization — aren't available on
GitHub Pages.

## Deploying

Pushing to `master` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
which runs `next build` and publishes the exported `out/` folder to GitHub Pages.
(The repo's **Settings → Pages → Source** must stay set to **GitHub Actions**.)

The custom domain `zeelshah.com` is registered at Namecheap. Its DNS has four
A records and four AAAA records on `@` pointing at GitHub Pages, plus a `www`
CNAME to `zeel.github.io`. The domain itself is set in the repo's
**Settings → Pages → Custom domain**, so no `CNAME` file is needed.
`zeel.github.io` redirects to it automatically.

Keep the `_github-pages-challenge-zeel` TXT record at Namecheap: it keeps the
domain verified on the GitHub account, so no one else can attach `zeelshah.com`
to their own GitHub Pages site. Also keep the `google-site-verification=…` TXT
record on `@`: it verifies the domain in Google Search Console, where the
sitemap is submitted.
