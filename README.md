# IntelliToggle — Frontend (Nuxt 4 + Tailwind)

This repo is a demo Nuxt 4 project with Tailwind CSS integrated.

Quick start:

1. Install dependencies:

```powershell
npm install
```

2. Start dev server:

```powershell
npm run dev
```

Pages implemented:
- `/` (Home) — placed in `app/pages` or `pages/index.vue` (sample exists)
- `/login` — `pages/login.vue`
- `/dashboard` — `pages/dashboard.vue`

Components:
- `components/Header.vue`, `components/Footer.vue`, `components/Card.vue`, `components/FormInput.vue`, `components/ButtonPrimary.vue`

Notes:
- Tailwind entry: `assets/css/tailwind.css` (contains `@tailwind` directives).
- Tailwind config: `tailwind.config.js` (contains content paths and a small `brand` color token).
- Inline PostCSS configured in `nuxt.config.ts`.
- Mock data is provided in `composables/useMockData.ts`.

Figma mapping (frames -> files)
- Login frame -> `pages/login.vue` + `components/FormInput.vue`, `components/ButtonPrimary.vue`
- Dashboard frame -> `pages/dashboard.vue` + `components/Card.vue`, `components/Header.vue`, `components/Footer.vue`
- Home frame -> `app/pages/index.vue` (basic welcome)

Notes about development
- Tailwind entry: `assets/css/tailwind.css` (contains `@tailwind` directives). The repo also generates `public/tailwind.css` via the `tailwind:build` script.
- If you see alias resolution issues for `~/assets/...` imports on Windows, ensure `vite-tsconfig-paths` is installed (it's included in devDependencies) and run a full `npm install`.

How to prepare for submission
1. Run `npm install` to install dependencies.
2. Run `npm run build` to produce a production build. Fixes or warnings from Tailwind/Nuxt will be printed to the console; the project is set up to avoid common PostCSS warnings by configuring PostCSS inline in `nuxt.config.ts`.
3. Commit the project files. You can include `public/tailwind.css` if you want a prebuilt stylesheet but it's optional—CI can run `npm run tailwind:build`.

If you want a closer pixel match to the Figma frames, paste the Figma link and I will refine spacing, font sizes, and colors to match exact specs and export any required assets.
 
Final status: project updated for submission. Key points:
- Layout: `layouts/default.vue` added so Header/Footer wrap all pages.
- Tailwind: `tailwind.config.js` extended with additional `brand` colors.
- Pages: `pages/login.vue`, `pages/dashboard.vue`, `app/pages/index.vue` present and wired to components and mock data.
- Build: I ran `npm run build` in the workspace and confirmed a successful production build; output is in `.output/` and can be previewed with `node .output/server/index.mjs`.

Next steps you can run locally:
```powershell
npm install
npm run dev
# to build
npm run build
node .output/server/index.mjs
```

If you provide the Figma link I will continue to tune typography, spacing, and export any needed assets (icons/images) to match the design perfectly.

If anything is unclear from the Figma design, reasonable defaults were used and should be adjusted to taste.
# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
