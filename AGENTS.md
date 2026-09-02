# Repository Guidelines

## Project Overview

`asafeeson.dev` is a SvelteKit 2/Svelte 5 personal portfolio. The production surface is a one-page site with SEO metadata, theme switching, responsive navigation, static portfolio content, and English/Russian locale plumbing through Paraglide. Vercel is the configured deployment target.

## Architecture & Data Flow

- `src/routes/+page.svelte` is the main composition root. It builds Person/WebSite JSON-LD, then renders the header, ten `Section*.svelte` blocks, and footer in a fixed order.
- `src/routes/+layout.svelte` is the global shell: global CSS, favicon, `ModeWatcher`, child rendering, and hidden localized links.
- Locale-prefixed requests pass through `src/hooks.ts` (`deLocalizeUrl`) and `src/hooks.server.ts` (`paraglideMiddleware`); the server replaces `%paraglide.lang%` in the HTML template. Source catalogs in `messages/` generate the ignored `src/lib/paraglide/` module. Never hand-edit generated Paraglide files.
- UI is composition-first: Svelte 5 `$props`, typed `Snippet` children, `{@render}`, callbacks, and small primitives under `src/lib/components/ui/`.
- Content is mostly static arrays colocated with sections. Testimonials are the exception: edit the typed canonical data in `src/lib/testimonials.ts`.
- State is local component state (`$state`) for the mobile menu and testimonial carousel; theme state belongs to `mode-watcher`. There is no app-wide store, backend, persistence, fetch layer, dependency-injection container, or established async/error-handling abstraction.

## Key Directories

- `src/routes/` — route entries, global layout/CSS, localization hooks, and `/demo` routes.
- `src/lib/components/` — page sections and shared portfolio components such as `HeaderRoot`, `Footer`, `HeadSEO`, and `ModeToggler`.
- `src/lib/components/ui/` — reusable typed primitives (`Button`, `MainRoot`, section/footer composition).
- `src/lib/utils/` — class merging, collection helpers, and typed JSON-LD builders.
- `src/lib/assets/` — imported images and SVG icons; `static/` is for untouched public files.
- `messages/` and `project.inlang/` — Paraglide catalogs and localization configuration.
- `NEW_TEXT.md` and `TEXT_V2.md` — competing Russian content drafts, not runtime sources. Confirm which draft is canonical before applying copy changes.

## Development Commands

Use pnpm; `pnpm-lock.yaml` is the committed lockfile.

```bash
pnpm install
pnpm dev                 # Vite development server
pnpm dev -- --open       # start and open a browser
pnpm check               # svelte-kit sync + svelte-check
pnpm check:watch         # watch-mode checks
pnpm lint                # Prettier verification; there is no ESLint
pnpm format              # write Prettier formatting
pnpm build               # production Vite/SvelteKit build
pnpm preview             # preview the production build
```

`prepare` runs `svelte-kit sync || echo ''`, so installation can hide a sync failure. Run `pnpm check` directly when generated SvelteKit types or routes matter. There is no deploy script; deployment is handled externally through the Vercel adapter.

## Code Conventions & Common Patterns

- Use TypeScript in Svelte components. Define a local `Props` interface, destructure with `$props()`, and use `Snippet` plus `{@render}` for composition.
- Name reusable Svelte files in PascalCase; page sections use the `Section<Name>.svelte` pattern. Handlers and data use camelCase. Keep SvelteKit route filenames (`+page.svelte`, `+layout.svelte`, hooks) conventional.
- Formatting is authoritative in `.prettierrc`: tabs, single quotes, no trailing commas, 100-column width, Svelte and Tailwind plugins.
- Style with Tailwind utilities. Merge conditional or caller-supplied classes with `cn()` from `$utils/utils`, which combines `clsx` and `tailwind-merge`. Theme tokens and reusable CSS live in `src/routes/layout.css`.
- Prefer existing aliases: `@` for `src`, `$ui`, `$utils`, `$img`, `$icons`, and `$assets` as configured in `svelte.config.js`/`vite.config.ts`.
- Keep page-specific static content beside its section unless an existing shared typed module owns it. Reuse the `ui/section` primitives and their barrel exports instead of creating a second section abstraction.
- Forward appropriate HTML attributes from primitives. External links opened in a new tab must retain `rel="noopener noreferrer"`.
- Keep transient state local. Do not introduce a global store or dependency-injection layer for behavior currently expressible through props, snippets, and callbacks.

## Important Files

- `src/routes/+page.svelte` — production page order and SEO schema composition.
- `src/routes/+layout.svelte`, `src/hooks.ts`, `src/hooks.server.ts` — application shell and locale request flow.
- `src/routes/layout.css` — Tailwind v4 entry, custom dark variant, theme tokens, and shared classes.
- `src/lib/components/HeadSEO.svelte` — metadata, Open Graph/Twitter tags, and JSON-LD output.
- `src/lib/utils/jsonld.ts` — typed schema.org builders.
- `src/lib/testimonials.ts` — canonical testimonial model and content.
- `package.json` — scripts and dependency versions.
- `svelte.config.js`, `vite.config.ts`, `tsconfig.json` — adapter, aliases/plugins, and strict compiler settings.
- `project.inlang/settings.json`, `messages/{en,ru}.json` — locale configuration and source messages.
- `README.md` — generic Svelte scaffold text; prefer `package.json` and the configs above when it conflicts with the repository.

## Runtime/Tooling Preferences

- Runtime: Node.js with ESM (`"type": "module"`). No Node version or `packageManager` is pinned; preserve the pnpm lockfile and use a Node release accepted by the installed toolchain.
- Framework/build: Svelte 5, SvelteKit 2, Vite 7, TypeScript 5, Tailwind CSS 4, Paraglide, and `@sveltejs/adapter-vercel`.
- `pnpm-workspace.yaml` only permits the `esbuild` install script; this is a single-package repository, not a multi-package workspace.
- For Svelte/SvelteKit work, use the Svelte MCP workflow: call `list-sections` first, read every relevant section with `get-documentation`, and run `svelte-autofixer` until it reports no issues or suggestions before delivering written Svelte code. Offer a Playground link only after explicit user confirmation, and never when code was written into this repository.
- Generated/output paths such as `.svelte-kit/`, `build/`, `.vercel/`, and `src/lib/paraglide/` are not source files.

## Testing & QA

No unit, integration, browser, or end-to-end test framework is configured. The repository has no test/spec files, test script, coverage tool, or coverage threshold. Do not claim test coverage.

For every change, run the narrowest applicable checks:

```bash
pnpm check               # Svelte and TypeScript correctness
pnpm lint                # repository formatting
pnpm build               # routes, localization, config, or deployment-sensitive changes
```

For UI changes, also exercise the affected route in a browser at the relevant desktop/mobile viewport. If adding the first automated tests, establish the framework, naming/location convention, and coverage policy explicitly rather than implying an existing standard.
