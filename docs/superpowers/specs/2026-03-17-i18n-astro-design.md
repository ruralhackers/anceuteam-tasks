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
All UI text: site title, subtitle, back link label, frequency section headings (weekly / biweekly / monthly / situational), footer text. Also includes a `pageTitlePerson` template string used for person page `<title>` tags (e.g. `"Bari · Anceu Coliving"`).

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
    situational: Task[]   // tasks triggered by conditions (e.g. rain forecast)
  }
}

interface Task {
  name: string
  time: string    // display string as-is from source, e.g. "30 min", "60 min × 5 = 5h/sem", "—"
  desc?: string
  when?: string
}
```

**Time field:** `time` is a display-only string — not parsed or computed. Strings are kept as-is from the source data. Section totals (e.g. "Total semanal: 12h 30min") are also plain strings stored directly in the data, not computed at runtime.

Types are defined once in `types.ts` and imported by all three data files.

---

## Routing

Astro's built-in `i18n` config is **not used** — routing is handled manually via the directory structure below. This avoids conflicts with the non-standard default-language-at-root setup and keeps the implementation straightforward.

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
Receives `lang` (current language) and `slug` (current page slug, e.g. `"bari"`, or `""` for home). Generates correct URL for each language:
- ES: `slug ? `/${slug}` : "/"`
- EN: `slug ? `/en/${slug}` : "/en/"`
- GL: `slug ? `/gl/${slug}` : "/gl/"`

Home pages pass `slug=""` to avoid `/en/undefined`.

### Layout
Ports the existing CSS from `index.html`: CSS custom properties for colors, Outfit + JetBrains Mono fonts via Google Fonts, responsive breakpoints. Accepts `title` and `lang` props.

Sets `<html lang="es|en|gl">` from the `lang` prop.

Emits `<link rel="alternate" hreflang="...">` tags for each language variant of the current page (SEO).

**Page titles:**
- Home: `ui.siteTitle` (e.g. "Anceu Coliving · Tareas del equipo")
- Person page: person name + site name (e.g. "Bari · Anceu Coliving"), composed in the page file and passed as `title` prop

---

## Styling

- Ported directly from current `index.html` — no visual redesign
- CSS custom properties: `--bari`, `--se`, `--carmen`, `--rosabel` color scheme preserved
- Fonts: Outfit (sans-serif), JetBrains Mono (monospace)
- Responsive: single-column on mobile (<600px), grid on wider screens

---

## Deployment

- `astro.config.mjs`: `output: 'static'`, `site` set to production URL (to be filled in, required for correct `hreflang` URLs)
- `netlify.toml`: `[build]` section with `command = "npm run build"` and `publish = "dist"`; the legacy `index.html` at repo root is not in `dist/` and is not served
- No SSR adapter needed — purely static output
- Legacy `index.html` stays at repo root for reference only; Netlify serves from `dist/` so it is never reachable

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
└── index.html   (legacy — kept for reference, not served by Netlify)
```

---

## Out of Scope

- No search functionality in initial Astro port (can be added later)
- No CMS integration
- No server-side rendering
