# zeel.github.io

Personal portfolio site — React + Vite, deployed to GitHub Pages.
Design imported from the Claude Design project "Frontend Developer Portfolio Site".

## Run locally

```bash
npm install
npm run dev      # dev server with hot reload
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Editing the site

| What you want to change | Where |
| --- | --- |
| Any text: intro, jobs, projects, skills, education, links | [src/data/content.js](src/data/content.js) |
| Hide the phone number / projects section | `flags` in [src/data/content.js](src/data/content.js) |
| Colors, fonts, spacing tokens, shared classes (`.btn`, `.card`, `.tag`) | [src/styles/design-system.css](src/styles/design-system.css) |
| Page layout, section styles, responsive breakpoints | [src/styles/portfolio.css](src/styles/portfolio.css) |
| Section markup / structure | [src/components/](src/components/) |
| Photo / resume | Replace `public/photo.jpg` / `public/Zeel-Shah-Resume.pdf` |
| Meta tags, title, favicon | [index.html](index.html), `public/favicon.svg` |

Section numbers (01–05) are written directly in each component in
[src/components/](src/components/).

## Deploying

Pushing to `master` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
which builds the site and publishes it to GitHub Pages.

One-time setup: in the repo's **Settings → Pages**, set **Source** to
**GitHub Actions** (instead of "Deploy from a branch").
