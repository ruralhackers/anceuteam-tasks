# Design: Multilingual Astro Site (EN / ES / GL)

**Date:** 2026-03-17
**Status:** Approved
**Project:** anceuteam-tasks

---

## Overview

Convert the current single-file `index.html` team task dashboard into a fresh Astro static site with full trilingual support: Spanish (ES, default), English (EN), and Galician (GL). All content — UI labels and task data — is translated in every language.

---

## Data Structure

All translatable content lives in three data files, one per language:

```
src/data/
├── types.ts      # Shared TypeScript interfaces
├── es.ts         # Spanish content (default)
├── en.ts         # English content
└── gl.ts         # Galician content
```

Each data file exports two objects:

### `ui` — Interface strings
All UI text: site title, subtitle, search placeholder, back link label, frequency section headings (weekly / biweekly / monthly), total time labels, footer text.

### `people` — Task data
Array of person objects with shape:
```ts
interface Person {
  id: string           // "bari" | "se" | "carmen" | "rosabel"
  name: string
  initial: string
  color: string        // CSS variable name e.g. "bari"
  summary: string      // Short summary shown on home card
  tasks: {
    weekly: Task[]
    biweekly: Task[]
    monthly: Task[]
  }
}

interface Task {
  name: string
  time: string         // e.g. "30 min"
  desc?: string
  when?: string
}
```

Types are defined once in `types.ts` and imported by all three data files.

---

## Routing

Six thin page files. ES at root, EN under `/en/`, GL under `/gl/`:

```
src/pages/
├── index.astro              → /           (ES home)
├── [person].astro           → /bari etc.  (ES person pages)
├── en/
│   ├── index.astro          → /en/        (EN home)
│   └── [person].astro       → /en/bari    (EN person pages)
└── gl/
    ├── index.astro          → /gl/        (GL home)
    └── [person].astro       → /gl/bari    (GL person pages)
```

Each page file is ~10 lines: imports its language's data, passes `{ people, ui, lang }` to shared components. `[person].astro` uses `getStaticPaths()` to generate one route per person from the data array.

---

## Components

```
src/components/
├── LangSwitcher.astro   # ES / EN / GL toggle buttons
├── PersonCard.astro     # Home screen card (avatar, name, summary)
└── TaskItem.astro       # Task row (name, time, desc, when)

src/layouts/
└── Layout.astro         # Base shell: HTML, fonts, CSS variables, header
```

### LangSwitcher
Receives `lang` (current language) and `path` (current page slug, e.g. `"bari"`). Generates correct URL for each language:
- ES: `/${path}` (or `/` for home)
- EN: `/en/${path}` (or `/en/` for home)
- GL: `/gl/${path}` (or `/gl/` for home)

### Layout
Ports the existing CSS from `index.html`: CSS custom properties for colors, Outfit + JetBrains Mono fonts via Google Fonts, responsive breakpoints. Accepts `title` and `lang` props.

---

## Styling

- Ported directly from current `index.html` — no visual redesign
- CSS custom properties: `--bari`, `--se`, `--carmen`, `--rosabel` color scheme preserved
- Fonts: Outfit (sans-serif), JetBrains Mono (monospace)
- Responsive: single-column on mobile (<600px), grid on wider screens

---

## Deployment

- `astro.config.mjs`: `output: 'static'`, `site` set to production URL
- `netlify.toml`: standard static build config (`npm run build`, publish `dist/`)
- No SSR adapter needed — purely static output

---

## File Structure Summary

```
anceuteam-tasks/
├── astro.config.mjs
├── netlify.toml
├── package.json
├── tsconfig.json
├── src/
│   ├── data/
│   │   ├── types.ts
│   │   ├── es.ts
│   │   ├── en.ts
│   │   └── gl.ts
│   ├── components/
│   │   ├── LangSwitcher.astro
│   │   ├── PersonCard.astro
│   │   └── TaskItem.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── [person].astro
│       ├── en/
│       │   ├── index.astro
│       │   └── [person].astro
│       └── gl/
│           ├── index.astro
│           └── [person].astro
├── public/
└── index.html   (legacy — kept for reference, not served)
```

---

## Out of Scope

- No search functionality in initial Astro port (can be added later)
- No CMS integration
- No server-side rendering
