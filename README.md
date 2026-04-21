# louischang0126.github.io

Personal website for Louis (Chia-Jui) Chang. Vue 3 + TypeScript + Vite, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build

```bash
npm run build     # type-check + production build → dist/
npm run preview   # preview dist/ locally
```

## How to replace placeholder images

Every image is rendered through `src/components/ImagePlaceholder.vue`. When the file at the given `src` path doesn't exist, the component shows a dashed gray box with the exact path you need to fill. Drop the real file at that path and it replaces the placeholder automatically — no code changes needed.

Paths used:

- `public/profile.jpg` — Hero avatar
- `public/projects/<id>.jpg` — one per project card (`safmc`, `garmin-hazard`, `garmin-detection`, `umi`, `meichu`, `make-ntu`, `church-bot`, `built-year`, `macro-kbd`)
- `public/publications/yearguessr.png` — YearCLIP teaser figure
- `public/awards/*.jpg` — optional, currently unused

## Content

All text content lives in `src/data/*.ts`. Every translatable field is `{ en, zh }`. The Chinese versions are a best-effort translation — review `src/data/profile.ts`, `projects.ts`, `experience.ts`, etc. and refine as you like.

## Deploy

Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and publishes to Pages. One-time setup in the repo:

1. Create the GitHub repo named **`LouisChang0126.github.io`** (exact casing of your username).
2. Settings → Pages → **Source: GitHub Actions**.
3. Push — the first build takes ~1 min and the site goes live at `https://louischang0126.github.io/`.
