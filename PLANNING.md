# Frontend Assessment — Planning Document

**Figma:** https://www.figma.com/design/D8ImoTwY3hHlyQwN04EJFG/Frontend?node-id=0-1&p=f

---

## 1. Overview

| Item | Your notes |
|------|------------|
| Goal | Build a responsive marketing page from Figma using Next.js, GSAP scroll/motion, and Recharts—demonstrating layout fidelity, animation craft, and chart integration. |
| Time budget (5 days) | ~5 days: Day 1 audit + tokens; Days 2–3 layout/responsive; Day 4 GSAP + charts; Day 5 polish, reduced-motion, build/lint. |
| Sections in Figma (list all 4) | 1. **Advice / Glow-up** (hero, before/after, CTA path) 2. **Facial analysis** (portrait + metric cards/charts) 3. **FAQs** (accordion) 4. **Research** (sticky video, research cards, “vain” scroll story) |
| Sections you will build (min. 2) | **All 4** — `AdviceSection`, `FacialAnalysisSection`, `FaqsSection`, `ResearchSection` (see `src/app/page.tsx`). |
| Out of scope | Full CMS/auth; real API data; Advice section on `< lg` (currently `hidden lg:block`); live Recharts in facial cards if Figma uses static art only; glassmorphism on research headline (explored, removed). |

---

## 2. Design inventory

### Tokens (from Figma → implemented in Tailwind)

> **Note:** This repo uses **Tailwind v4 `@theme`** in `src/styles/tailwind.css`, not `src/styles/_variables.scss`. Map Figma tokens there.

| Token | Figma value | Tailwind / CSS (`src/styles/tailwind.css`) |
|-------|-------------|-----------------------------------------------|
| Background | White / light sections | `bg-white` (Advice, FAQs); dark overlays on Research video |
| Surface | Cards, pills | `bg-white/10`, `backdrop-blur` on research/vain cards |
| Text | Primary / muted | `--color-qoves-dark` `#233137`, `--color-qoves-body` `#515255`, `--color-qoves-muted` `#9aaeb5`, `--color-qoves-label` `#798f97` |
| Accent | Borders, labels | `--color-qoves-border` `rgb(205 219 225 / 60%)`, `#F2F2F2` borders at 20% on dark UI |
| Font family | PP Neue Montreal + Zagma Mono | `--font-pp-neue` (local OTF), `--font-zagma` (F37 Zagma Mono Trial) |
| Container max width | 1360px | `max-w-[1360px]`; tablet column `md:max-lg:w-[736px]` |

### Breakpoints

| Name | Width | Notes |
|------|-------|-------|
| xs | 375px | Smallest designed mobile (headlines 24/28, card typography) |
| md | 768px | Tablet; column width 736px; borders/dividers from here up |
| lg | 1440px | Desktop layout; Advice section visible; facial grid |
| xl | 1920px | Wide desktop; grid overlays, spacing tweaks |

### Assets to export

- [x] Icons (SVG) — e.g. `ArrowIcon`, FAQ icons
- [x] Images — `/public/images/` (facial, before/after, card chart PNGs)
- [x] Logos — Qoves wordmark in copy / brand spans
- [x] Video — `/public/video/landing-video.mp4` (Research sticky background)

---

## 3. Scope decision

| Section | Shows GSAP? | Shows Recharts? | Hours est. | Build? |
|---------|-------------|-----------------|------------|--------|
| Advice / Glow-up | Yes — path snake on CTA (`PathSnakeAnimation`) | No | 8–10h | **Yes** |
| Facial analysis | Yes — header/portrait scale on scroll (`useFacialAnalysisAnimations`) | Yes — chart components in `charts/` (optional vs static PNGs in `AnalysisCards`) | 12–16h | **Yes** |
| FAQs | No (CSS grid accordion + `usePrefersReducedMotion`) | No | 4–6h | **Yes** |
| Research | Yes — sticky video + headline fade on scroll (`useVainHeadlineFade`) | No | 10–14h | **Yes** |

**Rationale for chosen sections:**

- **Advice** — Clear GSAP moment (animated path/snake) and strong desktop hero layout.
- **Facial analysis** — Satisfies Recharts requirement; scroll-driven GSAP; hardest responsive grid (xs / md / lg / xl).
- **FAQs** — Accessible accordion, typography, bordered 1360px column—fast win for polish.
- **Research** — Scroll storytelling (sticky media, overlapping cards, headline fade)—shows ScrollTrigger comfort.

Building all four exceeds the minimum of two and matches the full page in Figma.

---

## 4. Architecture

### Folder structure (this repo)

```
src/
├── app/                    # layout.tsx, page.tsx
├── components/
│   ├── sections/           # One folder per Figma section
│   │   ├── AdviceSection/
│   │   ├── FacialAnalysisSection/
│   │   │   └── charts/     # Recharts (BellCurve, Bar, Composed, etc.)
│   │   ├── FaqsSection/
│   │   └── ResearchSection/
│   └── ui/                 # Shared buttons, icons
├── hooks/                  # usePrefersReducedMotion, useFacialAnalysisAnimations, useVainHeadlineFade
├── lib/
│   ├── gsap/               # Plugin registration, defaults
│   ├── charts/             # mockData (starter); facial data in chart components
│   ├── research/           # vainCards, researchCards copy
│   └── faqs/               # FAQ content
├── styles/tailwind.css     # @theme tokens, breakpoints, base
└── types/
```

### Component tree (per section you build)

**Section: AdviceSection**

```
AdviceSection/
├── AdviceSection.tsx
├── BeforeAfterBlock.tsx
├── Actions.tsx
├── GlowUpButton.tsx
├── PathSnakeAnimation.tsx   # GSAP
└── index.ts
```

**Section: FacialAnalysisSection**

```
FacialAnalysisSection/
├── FacialAnalysisSection.tsx  # "use client" — GSAP
├── AnalysisCards.tsx          # layout; PNG or <BellCurveChart /> etc.
├── charts/                    # Recharts + ChartCard shell
└── index.ts
```

**Section: FaqsSection**

```
FaqsSection/
├── FaqsSection.tsx
├── FaqHeading.tsx
├── FaqAccordion.tsx
├── FaqCollapsiblePanel.tsx
└── index.ts
```

**Section: ResearchSection**

```
ResearchSection/
├── ResearchSection.tsx        # "use client" — video + reduced motion
├── ResearchContent.tsx
├── ResearchCards.tsx
├── VainContent.tsx              # "use client" — scroll fade
├── VainHeadlineCopy.tsx
└── index.ts
```

---

## 5. Animation plan (GSAP)

| Element | Trigger | Animation | Plugin |
|---------|---------|-------------|--------|
| Facial header | Scroll (section) | scale 0.94 → 1 | ScrollTrigger |
| Facial portrait | Scroll (section) | scale (paired with header) | ScrollTrigger |
| Advice CTA path | In view / active | Snake along SVG path | — (timeline) |
| Research headline | Scroll (cards layer) | opacity 1 → 0 scrub | ScrollTrigger |
| FAQ panels | Click | height via CSS grid (not GSAP) | — |

**Reduced motion:** `usePrefersReducedMotion` disables GSAP tweens and uses static layout (see hooks on Research, Facial, Advice path).

**Cleanup:** Prefer `gsap.context()` + `ctx.revert()` in new hooks; existing hooks kill ScrollTriggers in `useEffect` return.

---

## 6. Charts plan (Recharts)

| Chart | Type | Data source | File |
|-------|------|-------------|------|
| Bell curve | Area + reference lines | inline / mock in component | `charts/BellCurveChart.tsx` |
| Half block | Bar | mock | `charts/HalfBlockChart.tsx` |
| Facial thirds | Bar | mock | `charts/FacialThirdsChart.tsx` |
| Eyes | Composed (bar + line) | mock | `charts/EyesChart.tsx` |
| Asymmetrical | Bar | mock | `charts/AsymmetricalChart.tsx` |
| Scatter | Scatter | mock | `charts/ScatterChart.tsx` |

**Current implementation:** `AnalysisCards.tsx` uses **exported PNGs** from Figma for pixel-perfect layout; Recharts components are built and can be swapped in per card where interaction is required for the assessment.

**Data shape:**

```ts
{ label: string; value: number }[]
// or time series: { date: string; value: number }[]
```

Use `ResponsiveContainer` + shared `chartTheme.ts` / `rechartsShared.tsx`.

---

## 7. Implementation schedule

| Day | Tasks |
|-----|-------|
| 1 | Figma audit; fill this doc; add `@theme` tokens + fonts; page order in `page.tsx` |
| 2 | Facial + FAQs — layout, responsive columns, borders |
| 3 | Research — sticky video, cards, vain scroll; Advice desktop block |
| 4 | GSAP hooks; wire or swap Recharts; `usePrefersReducedMotion` everywhere |
| 5 | QA all breakpoints (xs/md/lg/xl); `npm run build` + lint; README + Loom |

---

## 8. Quality checklist

- [ ] Matches Figma spacing/type on desktop + mobile
- [ ] Design tokens in `src/styles/tailwind.css` (`@theme`)
- [ ] GSAP cleaned up (`gsap.context` + `revert` or explicit `kill()` on unmount)
- [ ] `prefers-reduced-motion` respected
- [ ] Charts responsive (`ResponsiveContainer`) if using live Recharts
- [ ] No console errors; `npm run build` passes
- [ ] Side borders: pair `border-x` + `border-[#F2F2F2]/20` on same breakpoint (avoid default black border)
- [ ] xs: hide section dividers (`border-t`, `border-l` on cards) where designed

---

## 9. Risks & mitigations

| Risk | Mitigation |
|------|------------|
| Complex scroll scene (Research vain) | Sticky headline + negative margin cards layer; scrub opacity only; avoid pin unless needed |
| Chart labels overflow on mobile | Static PNGs on xs; live charts from `md`/`lg`; rotate or shorten ticks |
| Border color looks black | Always pair width utilities with `border-[#F2F2F2]/20` on the same breakpoint |
| Advice hidden on mobile | Confirm with design: intentional `lg:block` or add responsive mobile hero |
| Tailwind vs SCSS in brief | Document that tokens live in `tailwind.css`; ignore stale `_variables.scss` references in starter README |
