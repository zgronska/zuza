# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site (Astro 7, Tailwind CSS v4, view transitions, deployed on Vercel with `@vercel/analytics`). Static output, no test suite. Package manager is pnpm.

## Commands

- `pnpm dev` — dev server at `localhost:4321`. Per AGENTS.md, start it in the background with `astro dev --background`; manage it with `astro dev status|logs|stop`.
- `pnpm build` / `pnpm preview` — static build to `dist/` and serve it.
- `pnpm check` — `astro check` (types for `.astro` and `.ts`).
- `pnpm lint` / `pnpm lint:fix` — ESLint (includes jsx-a11y rules).
- `pnpm format:check` / `pnpm format` — Prettier (astro and tailwind plugins).

## Architecture

- **Atomic design** under `src/components/`: pages compose `organisms/`, which compose `molecules/` and `atoms/`. `ThemeScript.astro` (runs before first paint, keeps `theme-color` in sync) and `StructuredData.astro` (JSON-LD `Person`/`WebSite`) sit at the top level.
- **`src/layouts/Layout.astro`** is the single shell: head, fonts (`<Font>` from `astro:assets`, configured in `astro.config.mjs`), `ClientRouter` (view transitions), `ThemeScript`, `Header`, `<main>` with the fade page transition, `Footer`. Pages pass `description`, `title` (omit on home: the title becomes "Zuza Gronska — <job title>"), optional `background` (`dots` | `stripes`) and `noindex` (drops the canonical; used by `404.astro`).
- **Content**: `src/content.config.ts` defines `skills` and `work` collections loaded with `file()` from `src/content/*.json`. Entries are ordered by an `order` field (see `utils/sortByOrder.ts`). `tone` is one of `primary | accent | highlight`.
- **Tones**: colour variants come from the shared map in `src/utils/toneClasses.ts`; each component narrows it to the tones it supports. Add new colour variants there rather than per component.
- **Site constants** (author, nav, social links, contact details) live in `src/consts.ts`. The CV is `public/Zuza_Gronska_CV.pdf` (`CV_HREF`).
- **Styling**: Tailwind v4 via the Vite plugin, no config file. Design tokens and dark values are in `src/styles/theme.css` (`@theme`); custom utilities (`site-container`, `text-label`, `focus-ring`, …) in `utilities.css`; entry is `global.css`. Design system is "Hardline": hard offset shadows, thick borders.
- **Theme**: dark mode is the `[data-theme='dark']` attribute on `<html>` (the `dark:` variant targets it), not a media query class. `ThemeScript` applies the `localStorage` choice, else the system preference; it is only saved when the toggle is used.
- **View transitions**: `ClientRouter` swaps pages without reload, so scripts and state must survive `astro:after-swap` (Layout sets `data-client-navigated` on `<html>` there).

## Gotchas

- Restart the dev server after changing `content.config.ts`; a running server can serve an empty or stale collection.
- A Tailwind class used only in a newly created file may not apply in dev; save `src/styles/global.css` to force a rescan. Production builds always scan everything.
- URLs have no trailing slash: `build.format: 'file'` emits `about.html` and `vercel.json` (`cleanUrls`) serves it at `/about`. At build time `Astro.url.pathname` is `/about.html`, so normalise it with `utils/getPagePath.ts` before comparing or building URLs.
- `site` is `https://www.zuza.dev`; the apex redirects to www, so never build absolute URLs on `zuza.dev`.
