# Zuza Gronska — portfolio

Personal portfolio site built with Astro, Tailwind CSS v4 and Astro view transitions. The design system is "Hardline": hard offset shadows, thick borders, a warm cream and near-black palette with orange, periwinkle and yellow accents, and a light and dark theme.

## Commands

Run from the project root.

| Command             | Action                                                   |
| :------------------ | :------------------------------------------------------- |
| `pnpm install`      | Install dependencies                                     |
| `pnpm dev`          | Start the dev server at `localhost:4321`                 |
| `pnpm build`        | Build the static site to `./dist/`                       |
| `pnpm preview`      | Serve the production build locally                       |
| `pnpm check`        | Type-check `.astro` and `.ts` files with `astro check`   |
| `pnpm lint`         | Lint with ESLint, including jsx-a11y accessibility rules |
| `pnpm format:check` | Check formatting with Prettier                           |

## Structure

```text
src/
├── components/
│   ├── atoms/        Smallest building blocks: Button, Badge, Heading, Text…
│   ├── molecules/    Atoms combined: Card, PageHeading, MediaFrame, ThemeToggle…
│   ├── organisms/    Page sections: Header, MobileMenu, Hero, Timeline, Footer…
│   └── ThemeScript.astro   Sets the theme before first paint
├── content/          skills.json and work.json
├── layouts/          Layout.astro: head, header, page transition, footer
├── pages/            One file per route: /, /about, /skills, /work, /contact
├── styles/
│   ├── theme.css     Design tokens (@theme), dark theme values, keyframes
│   ├── base.css      Page defaults
│   ├── utilities.css Custom utilities: site-container, text-label, focus-ring…
│   └── view-transitions.css
├── utils/            Small shared helpers, including the tone class map
├── consts.ts         Site author, nav, social links, contact details
└── content.config.ts Content collection schemas
```

Components follow atomic design: pages compose organisms, organisms compose molecules and atoms. Colour variants come from the shared map in `src/utils/toneClasses.ts`; each component narrows it to the tones it supports.

## Editing content

- **Skills:** `src/content/skills.json`. Cards are shown by `order`. The bento grid works out wide and narrow cards from position, and an odd last card spans the full row.
- **Work history:** `src/content/work.json`, newest first by `order`. Mark the current job with `"current": true`.
- **Links and contact details:** `src/consts.ts`.
- **CV:** replace `public/cv.pdf`.

## Theme

`ThemeScript.astro` applies a saved choice from `localStorage`, otherwise the system preference. The choice is only saved when the theme toggle is used. Dark values live under `[data-theme='dark']` in `theme.css`, and the `dark:` variant targets the same attribute.

## Development notes

- Start the dev server in the background with `astro dev --background`; manage it with `astro dev status`, `astro dev logs` and `astro dev stop`.
- Restart the dev server after changing `content.config.ts`. A running server can keep serving an empty or stale collection.
- If a Tailwind class used only in a newly created file has no effect in dev, save `src/styles/global.css` to make the dev server rescan. Production builds always scan every file.
