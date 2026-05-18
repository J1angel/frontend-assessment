# Frontend Assessment Starter

Next.js assessment boilerplate with **TypeScript**, **GSAP**, **SCSS**, and **Recharts**.

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- [GSAP](https://gsap.com/) + ScrollTrigger
- SCSS modules + shared tokens
- [Recharts](https://recharts.org/)

## Getting started

```bash
cd frontend-assessment
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/                      # layout.tsx, page.tsx
├── components/sections/      # HeroSection (GSAP), ChartSection (Recharts)
├── hooks/                    # usePrefersReducedMotion
├── lib/gsap/                 # register plugins, defaults
├── lib/charts/               # mock chart data
├── styles/                   # _variables, _mixins, _breakpoints, globals
└── types/
```

## Before you code

1. Open Figma and fill in **[PLANNING.md](./PLANNING.md)** (or record a short walkthrough).
2. Update design tokens in `src/styles/_variables.scss`.
3. Replace placeholder sections with your Figma sections (duplicate `HeroSection` / `ChartSection` folders).

## Adding a new section

1. Create `src/components/sections/YourSection/`
2. Add `YourSection.tsx`, `YourSection.module.scss`, `index.ts`
3. Import in `src/app/page.tsx`
4. Use `"use client"` only when using GSAP or Recharts

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Run production build |
| `npm run lint` | ESLint |

## Figma

https://www.figma.com/design/D8ImoTwY3hHlyQwN04EJFG/Frontend?node-id=0-1&p=f
