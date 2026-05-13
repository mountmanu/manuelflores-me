# manuelflores.me

Personal portfolio site for Manuel Flores — Sales Engineer for LATAM expansion.

Standalone Next.js app, intentionally decoupled from the internal pm-job-tracker dashboard (now deprecated). This site is what recruiters, hiring managers, and future Areté Black prospects see when they Google "Manuel Flores".

## Stack

- **Next.js 15** (App Router, React 19, TypeScript strict)
- **Tailwind 4** (CSS-first config via `@theme`)
- **next/font** (EB Garamond + Inter, self-hosted)
- **framer-motion** (entrance animations only)
- **lucide-react** (icons)

No Supabase, no Drizzle, no shadcn, no dashboard infrastructure. The site is a pure static + ISR landing that compiles to ~80KB JS and deploys cleanly on Vercel.

## Routes

| Path | Description |
|---|---|
| `/` | English landing — primary surface for US-based recruiters |
| `/es` | Spanish mirror — full parity with EN content |
| `/sitemap.xml`, `/robots.txt` | SEO with `hreflang` alternates EN/ES |

## Content

Single source of truth lives in `src/data/landing-content.ts`. Both `/` and `/es` import from this file; numbers (revenue, deployments, etc.) cannot drift across language variants by construction.

To edit copy, modify `landingEn` or `landingEs` and rebuild.

## Setup

```bash
cd site
npm install
npm run dev          # http://localhost:3000
npm run build
npm run typecheck
npm run lint
```

## Structure

```
site/
├─ src/
│  ├─ app/
│  │  ├─ page.tsx               EN landing
│  │  ├─ es/page.tsx            ES landing
│  │  ├─ layout.tsx             Root + fonts
│  │  ├─ globals.css            Editorial design system
│  │  ├─ not-found.tsx          404
│  │  ├─ sitemap.ts             SEO sitemap with hreflang
│  │  └─ robots.ts              Robots policy
│  ├─ components/
│  │  ├─ Nav.tsx                Sticky editorial nav, URL-based i18n
│  │  ├─ LandingPage.tsx        Server component, full landing
│  │  └─ Reveal.tsx             Framer Motion fade-up wrapper
│  └─ data/
│     └─ landing-content.ts     EN + ES content, single source of truth
├─ public/
│  └─ images/manuel.jpg         Founder portrait (you add this)
├─ package.json
├─ next.config.ts
├─ postcss.config.mjs
├─ tsconfig.json
└─ eslint.config.mjs
```

## Brand

- **Palette:** Paper `#FAFAF7` · Ink `#0A0A08` · Soft `#F2F1ED` · Mute `#6B6B65` · Line `#E3E2DC`
- **Typography:** EB Garamond (display) · Inter (body)
- **Tone:** Editorial, not startup. Mirrors the visual language of `arete.business`.

The whole site is light editorial — no dark mode, no theme toggle, no scoped overrides. One tone, one voice.

## Migration notes

This site replaces the public landing previously served from `pm-job-tracker/src/app/page.tsx` (deprecated). The migration removed:

- The Yesenia easter egg modal (private gesture, not for public consumption).
- The Dashboard link in nav (internal tool, not for recruiters).
- shadcn dependencies (Badge, Card, Button → native Tailwind).
- The dark vibrant palette (purple gradients, glass cards, neon accents).
- The localStorage-based EN/ES toggle (replaced with URL-based i18n).

What carried over: the 8 project cards, the proof points ($75K+, 7 deployments, bilingual), the experience timeline, the skill groups.

For the demo pages (`/demos/visionguard`, `/demos/loansight`), see pm-job-tracker until they are migrated in a future iteration.

## Sibling — the job-hunt skill

The folder this site lives in (`manuelflores-me/`) also hosts the Claude job-hunt skill (`SKILL.md` + `assets/` + `references/`). The skill and the site are independent — the skill informs Claude when running triage / CV tailoring / outreach / interview prep, while the site is what end users see in their browser. Keep both in sync if you update revenue, deployment count, or vertical taxonomy.

## Deploy

```bash
npm run build
```

Recommended: Vercel auto-deploy from `main`. Set `NEXT_PUBLIC_SITE_URL` to `https://manuelflores.me` in production env vars.

## License

© Manuel Flores. All rights reserved.
