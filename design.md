# Asafeeson.dev Design System

**Status:** reverse-engineered baseline  
**Scope:** one-page personal portfolio and future portfolio surfaces  
**Implementation:** Svelte 5 + SvelteKit 2 + Tailwind CSS 4

This document captures the visual and interaction system already present in the codebase. It is a source-of-truth for extending the site, not a request to redesign the current page.

## 1. Design direction

### Character

- **Monochrome, editorial, and direct.** Black, white, and restrained gray do most of the work.
- **Sharp geometric structure.** Sections are separated by space and rectangular blocks, not rounded containers or decorative effects.
- **One signal accent.** Yellow marks emphasis, action, and editorial hierarchy. Orange is reserved for theme-specific interaction feedback.
- **Human proof over decoration.** Grayscale photography and concrete project/client content carry personality.
- **Engineering confidence.** Typography uses weight contrast and whitespace rather than visual noise.

### Reference alignment

The implementation aligns with these UI/UX Pro Max reference records:

- **Exaggerated Minimalism:** high-contrast black/white, oversized type, one accent, generous negative space.
- **Swiss Modernism 2.0:** rational spacing, grid/container discipline, asymmetric balance, minimal decoration.
- **Minimal & Direct:** concise service-portfolio structure, one primary contact intent, fast-loading presentation.
- **Minimalist Portfolio typography:** a single sans family with weight variation rather than a decorative font stack.

These are references for design intent. Existing project tokens and components take precedence over generic recommendations.

### Signature detail

**Yellow editorial title bars and inline highlight blocks** are the recognizable motif. Use them for section headers and one key phrase, not as a repeated decoration on every element.

## 2. Design principles

1. **One focal point per section.** Establish it with scale, weight, or whitespace before adding color.
2. **Space before structure.** Use proximity and alignment before adding borders or cards.
3. **One accent per visual context.** Yellow is the brand signal; other saturated colors belong only to technical content where the color has meaning.
4. **Weight creates hierarchy.** Raleway light/regular text is paired with bold/black emphasis.
5. **Rectangles are intentional.** Do not round every surface or add a card wrapper when spacing already groups the content.
6. **Content stays concrete.** Prefer named projects, services, technologies, people, and response expectations over generic claims.
7. **Motion is feedback, not decoration.** Keep interaction transitions short and never let motion block input.
8. **Accessibility is part of the visual system.** Contrast, focus, semantic HTML, target size, and reduced motion are required states.

## 3. Source of truth and implementation boundaries

| Concern                                       | Source of truth                                                             |
| --------------------------------------------- | --------------------------------------------------------------------------- |
| Global theme tokens and Tailwind theme        | `src/routes/layout.css`                                                     |
| Page composition and section order            | `src/routes/+page.svelte`                                                   |
| Header, navigation, mobile menu, theme toggle | `src/lib/components/HeaderRoot.svelte`, `Menu.svelte`, `ModeToggler.svelte` |
| Section composition primitives                | `src/lib/components/ui/section/`                                            |
| Button contract                               | `src/lib/components/ui/Button.svelte`                                       |
| Footer composition                            | `src/lib/components/Footer.svelte`, `src/lib/components/ui/footer/`         |
| Canonical testimonials                        | `src/lib/testimonials.ts`                                                   |
| Image and SVG assets                          | `src/lib/assets/`                                                           |
| Localization plumbing                         | `messages/`, `project.inlang/`, `src/hooks*.ts`                             |

Extend `layout.css` and the existing primitives before creating a parallel token file or component abstraction. Keep local state in components; do not introduce a global store for visual behavior.

## 4. Color system

### 4.1 Primitive tokens currently in use

| Token           | Value                 | Role                                                                   |
| --------------- | --------------------- | ---------------------------------------------------------------------- |
| `yellow-accent` | `#FFEA00`             | Primary brand signal; section bars, highlighted copy                   |
| `orange-accent` | `#ff8f00`             | Dark-theme interaction signal; active testimonial dot and theme toggle |
| `light-gray`    | `#f4f4f4`             | Colored section surface in the explicit theme                          |
| `footer-bg`     | `#1c1c1c`             | Footer surface                                                         |
| `dark-bg`       | `#1c1c1c`             | Dark page/section surface                                              |
| `dark-accent`   | `#303030`             | Dark inactive indicator surface                                        |
| `icon-fill`     | `#000000` / `#FFFFFF` | SVG icon fill in light/dark mode                                       |
| `black`         | `#000000`             | Ink, inverse surfaces, dark content blocks                             |
| `white`         | `#FFFFFF`             | Paper, inverse text, light content blocks                              |

The first seven tokens are declared in `@theme` or as CSS custom properties in `src/routes/layout.css`. `black` and `white` are Tailwind primitives used directly by existing components.

### 4.2 Semantic mapping

Use these meanings when extending the system. The values mirror current behavior; they are not a second runtime token file.

| Semantic role           | Light mode               | Dark mode             |
| ----------------------- | ------------------------ | --------------------- |
| Page canvas             | `white`                  | `dark-bg` (`#1c1c1c`) |
| Muted section           | `light-gray` (`#f4f4f4`) | `dark-bg` (`#1c1c1c`) |
| Inverse block           | `black`                  | `black`               |
| Primary text            | `black`                  | `white`               |
| Text on inverse         | `white`                  | `white`               |
| Brand emphasis          | `yellow-accent`          | `yellow-accent`       |
| Interaction emphasis    | `orange-accent`          | `orange-accent`       |
| Inactive dark indicator | n/a                      | `dark-accent`         |
| Icon fill               | `black`                  | `white`               |

### 4.3 Usage rules

- Keep the page overwhelmingly neutral. Yellow should mark a focal phrase, section-header block, or primary action—not every link or card.
- Use black text on yellow. The current yellow is a high-luminance signal and must not carry small white text.
- Use white text on black and dark-bg surfaces. Re-check body-sized muted text in dark mode; do not assume gray is readable.
- Blue and red currently appear on technology labels in `SectionHowIDo.svelte`. Treat these as **content-owned brand colors**, not global UI accents. Do not use them for navigation, layout, or primary actions.
- Do not add gradients, neon glows, glass surfaces, or color-coded status UI without a concrete semantic need.
- For new semantic states, add explicit text/icon labels. Color alone never communicates status.

## 5. Typography

### 5.1 Family

- **Primary family:** `Raleway`, loaded from Google Fonts in `src/routes/layout.css`.
- **Fallback:** `sans-serif`.
- **System rule:** use one family and let weight create contrast. Do not add a second display family for visual interest.

### 5.2 Weight roles

| Role    | Weight | Current usage                                                        |
| ------- | -----: | -------------------------------------------------------------------- |
| Light   |    300 | Hero subheading, service/technology items, supporting editorial copy |
| Regular |    400 | Body copy and default text                                           |
| Medium  |    500 | Buttons and selected utility text                                    |
| Bold    |    700 | Lead labels, subheads, service headings, footer headings             |
| Black   |    900 | Name emphasis, section emphasis, selected keywords                   |

Use `font-black` sparingly. It is the emphasis layer, not the default heading weight.

### 5.3 Type ladder

The current page uses a compact Tailwind ladder. Keep new content on these steps rather than inventing adjacent sizes.

| Token / Tailwind size | Pixel size | Role                                    | Typical line-height |
| --------------------- | ---------: | --------------------------------------- | ------------------- |
| `text-sm`             |       14px | Header tagline, compact footer copy     | normal              |
| `text-base`           |       16px | Body copy, descriptions                 | `leading-relaxed`   |
| `text-lg`             |       18px | Lead copy, contact intro                | `leading-relaxed`   |
| `text-xl`             |       20px | Hero supporting line, project tagline   | relaxed             |
| `text-2xl`            |       24px | Hero subheading, service/stack headings | tight/normal        |
| `text-4xl`            |       36px | Mobile section heading and hero name    | `leading-tight`     |
| `text-5xl`            |       48px | Tablet/desktop section heading          | `leading-tight`     |
| `text-6xl`            |       60px | Large desktop section heading           | `leading-tight`     |

### 5.4 Typographic rules

- Display headings use tight leading and a clear weight contrast; avoid adding several intermediate sizes.
- Body copy stays at 16–18px with approximately 1.5–1.65 line-height.
- Keep prose near `65ch` when a new text block is not already constrained by the section layout.
- Use `text-wrap: balance` for headings and `text-wrap: pretty` for paragraphs where supported.
- Keep emphasis inside the same Raleway family. Use weight, not color multiplication, to highlight meaning.
- Normalize new visible copy to sentence case unless a short label intentionally uses the existing mixed-case brand voice.

## 6. Spacing and layout

### 6.1 Spacing scale

The implementation follows a practical 4/8-based scale. These are the preferred values for future work.

| Token      | Value | Current examples                               |
| ---------- | ----: | ---------------------------------------------- |
| `space-1`  |   4px | icon/label micro spacing                       |
| `space-2`  |   8px | tag row gaps, compact internal gaps            |
| `space-4`  |  16px | mobile container padding, body group gaps      |
| `space-6`  |  24px | contact grid gap, stacked content              |
| `space-8`  |  32px | section content gaps, header/nav gaps          |
| `space-10` |  40px | carousel control separation on medium layouts  |
| `space-12` |  48px | footer padding, section heading offset/margins |
| `space-16` |  64px | default section vertical padding               |
| `space-20` |  80px | larger contact/testimonial section padding     |

Invariant: **within-group spacing < between-group spacing < between-section spacing**. Prefer `gap` for sibling layout and keep section padding visibly larger than component padding.

### 6.2 Container

- Use the existing `container mx-auto` primitive.
- `Section.Content` applies `px-4` on small screens and removes that padding at `md`.
- Header content uses `px-8` below `sm`, then the shared container width.
- Do not stretch long-form copy across ultra-wide screens; add a readable `max-w-*` constraint.

### 6.3 Page composition

The production page is a vertical narrative:

1. Header and identity
2. Hero and primary contact action
3. Supporting CTA
4. What I do
5. How I do / technology proof
6. Projects
7. About me
8. Services
9. Clients and collaborations
10. Contact
11. Testimonials
12. Footer

Each section should answer one question or move the visitor toward contact. Keep the existing order unless information architecture is intentionally revised.

### 6.4 Responsive behavior

The current Tailwind breakpoints are content-driven in practice:

| Range               | Behavior                                                      |
| ------------------- | ------------------------------------------------------------- |
| `<640px` (`sm`)     | Stacked content, mobile header controls, compact padding      |
| `640–767px`         | More horizontal room; hero may place text and image in a row  |
| `768–1023px` (`md`) | Two-column service/contact patterns where content supports it |
| `1024px+` (`lg`)    | Desktop navigation, hero split, project two-column layout     |

Observed layouts:

- Hero content: column → row at `sm`; the section root remains a vertical wrapper.
- Projects: one column → two columns at `lg`.
- Services: one column → two columns at `md`.
- Contact methods: one column → three columns at `md`.
- Navigation: mobile overlay below `lg`; desktop nav at `lg`.
- Theme toggle: visible in the header from `sm`; available inside the mobile menu.

For new components, let content determine the breakpoint. Preserve feature parity on mobile. Use `min-h-[44px]` hit areas for controls even when the visible glyph is smaller. Use `dvh` rather than `h-screen` for new full-viewport mobile surfaces.

## 7. Shape, borders, and depth

### Radii

The visual language is mostly sharp:

| Role                 |                     Value | Guidance                                         |
| -------------------- | ------------------------: | ------------------------------------------------ |
| Default block        |                     `0px` | Section blocks, inverse panels, content surfaces |
| Small control radius |      `6px` (`rounded-md`) | Logo frame, menu items                           |
| Full control         | `9999px` (`rounded-full`) | Theme toggle only                                |
| Hover transformation |                     `0px` | Logo intentionally becomes square on hover       |

Do not introduce a universal card radius. If a new control needs a radius, choose it by role and keep child radii smaller than the parent.

### Borders

- Default border: 1px, black in light mode and white in dark mode.
- Current examples: buttons, theme toggle, testimonial panel.
- Use borders to clarify an interaction boundary, not to outline every section.
- Keep border width stable across states so hover/active feedback does not shift layout.

### Shadows

No shadow system is part of the baseline. Existing depth is primarily created with color blocks, contrast, and whitespace. A new shadow must earn its place; prefer a subtle two-layer shadow or a crisp border ring, and replace black shadows with a light ring on dark surfaces.

## 8. Component contracts

### Section primitives

`$ui/section` is the layout vocabulary:

- `Section.Root`: semantic `<section>`, optional `colored` variant, forwards HTML attributes.
- `Section.Content`: centered container with responsive horizontal padding.
- `Section.Header`: yellow rectangular title block with responsive heading scale.

Use these primitives instead of creating section-specific wrappers. A section header may contain one black-weight emphasis span.

### Buttons and links

`$ui/Button.svelte` exposes an anchor-based API:

- `variant="base"`: black text/border on light surfaces; white text/border on dark surfaces; hover inverts the surface.
- `variant="inverse"`: white text/border on black surfaces; hover becomes white with black text.
- Horizontal padding is approximately twice vertical padding (`px-8 py-3`).
- External destinations require `target="_blank"` and `rel="noopener noreferrer"`.
- Keep one primary contact label across a context. The canonical intent is **Get in touch**; **Go to website** is reserved for project destinations.
- New interactive buttons must expose visible keyboard focus and a hit area of at least 44px.

### Header and navigation

- Logo stays top-left and links home.
- Desktop navigation is a horizontal list of five anchor links.
- Mobile navigation is a full-screen overlay with an explicit open/close button and `aria-expanded` state.
- Theme toggle is an icon control with a visible screen-reader label.
- Keep navigation labels concise. Do not shrink type to avoid overflow.

### Services and technology lists

Services use icon + title + short description, arranged in a two-column grid from `md`. Technology lists use typographic weight plus occasional brand-colored labels. Do not turn every service into an identical rounded card.

### Project block

A project pairs a real logo/image and tagline with descriptive copy and one external CTA. Use a two-column split from `lg`, stack on smaller screens, and keep image aspect ratios intentional.

### Contact cards

Contact methods are direct external links with an icon, label, and clear hover inversion. Every icon-only meaning must have an accessible name; decorative icons beside visible labels should be hidden from the accessibility tree.

### Testimonial carousel

The carousel has previous/next buttons, one visible quote, and dot navigation. Controls are disabled during the 300ms transition guard. Future changes must preserve keyboard access, a visible current state, and a reduced-motion path.

### Footer

Footer uses a dark inverse surface, a centered container, and a three-column layout from `md`: identity, quick links, and social links. External social links retain `rel="noopener noreferrer"`; icon-only links retain `aria-label`.

## 9. Iconography and imagery

- Use the existing SVG asset/component set in `src/lib/assets/icons` and `src/lib/components/icons`.
- Keep icon sizing on the current 24–32px family unless the component contract requires otherwise.
- Use `currentColor` or the `icon-fill` theme token so icons follow light/dark mode.
- Never use emoji as structural UI icons.
- Use grayscale treatment for personal photography where the current composition calls for it.
- Preserve meaningful `alt` text for photos and logos. Use empty alt text only for genuinely decorative images.
- Do not invent product screenshots from decorative rectangles; use the real asset or the real component.

## 10. Motion system

### Current motion inventory

- Button and menu color transitions.
- Logo radius/shape transition.
- Theme toggle icon scale/rotation swap with press scale feedback.
- Mobile menu fade: 300ms with a 250ms delay.
- Testimonial opacity change: 300ms; state guard prevents rapid changes.
- Client logo opacity hover feedback.

### Canonical motion tokens for new work

| Token           | Value | Use                                          |
| --------------- | ----: | -------------------------------------------- |
| `motion-fast`   | 120ms | color, opacity, focus, hover acknowledgement |
| `motion-base`   | 200ms | toggle, menu, small state change             |
| `motion-medium` | 280ms | panel or drawer transition                   |
| `motion-slow`   | 400ms | full-screen/mobile sheet transition only     |

Use an ease-out curve for entrances and interaction feedback. Name transition properties explicitly; do not add new `transition-all`. Keep exit motion around 75% of enter duration.

### Reduced motion

Every new animation must respect `prefers-reduced-motion: reduce`. The reduced path should preserve the final state and essential feedback, usually by removing transform/entrance motion while keeping a fast focus or opacity acknowledgement. Do not add scroll-jacking, parallax, bounce, or continuous decorative loops.

## 11. Accessibility contract

### Existing strengths

- Semantic `header`, `nav`, `main`, `section`, and `footer` structure.
- Meaningful `alt` text on current photos and project imagery.
- Accessible labels and `aria-expanded` on mobile menu controls.
- Labels on carousel controls and testimonial dots.
- Native `<button>` and `<a>` elements for interaction.
- `rel="noopener noreferrer"` on current external links.

### Required hardening for future changes

- Add a skip link and a stable `id` on the main content region before expanding the shell.
- Add explicit `:focus-visible` styles with sufficient contrast; never remove the native outline without a replacement.
- Expand hamburger, theme, carousel, and dot controls to at least 44×44px without changing the visual glyph size.
- Prefer `100dvh` for the mobile menu and ensure focus is not hidden behind the overlay.
- Add `aria-controls` where a control owns a panel. Consider `aria-current` for the active navigation target.
- Provide a polite live-region or equivalent announcement when the visible testimonial changes if the carousel remains interactive.
- Ensure normal text reaches at least 4.5:1 contrast in both themes; verify yellow/black and muted dark-theme text independently.
- Never rely on color alone for active, selected, success, warning, or error states.
- Preserve keyboard access for every swipe, hover, or carousel behavior.

## 12. Content and localization rules

- Primary voice: precise, practical, confident, human.
- Explain value through outcomes and constraints, not hype.
- Keep CTA intent consistent: use one contact label for repeated contact actions.
- Design for English and Russian expansion. Do not lock important copy into fixed widths or `whitespace-nowrap` unless the phrase is deliberately treated as an atomic label.
- Preserve locale plumbing through Paraglide. Do not edit generated `src/lib/paraglide/` files.
- Test headings, nav labels, and CTA blocks with longer Russian strings before accepting a layout change.

## 13. Do / do not

| Do                                                                      | Do not                                                                 |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Reuse `Section.Root`, `Section.Content`, `Section.Header`, and `Button` | Create a second section or button abstraction                          |
| Use black/white/gray with yellow as the primary signal                  | Add a second competing accent to the page chrome                       |
| Use Raleway weight contrast and generous spacing                        | Mix unrelated typefaces or generate a size for every small distinction |
| Keep surfaces mostly rectangular and flat                               | Wrap every section in a rounded card                                   |
| Use real SVG icons and meaningful labels                                | Use emoji or unlabeled icon buttons                                    |
| Specify transform/opacity/color transitions                             | Add `transition-all`, bounce, or persistent scroll motion              |
| Verify both light and dark modes                                        | Treat dark mode as inverted light mode without contrast checks         |
| Make mobile a stacked, complete version of desktop                      | Hide core content or rely on swipe-only discovery                      |
| Preserve external-link security attributes                              | Open external links in new tabs without `noopener noreferrer`          |

## 14. Change checklist

Before adding or changing a visual component:

- [ ] Which existing primitive or token does this reuse?
- [ ] What is the single focal point?
- [ ] Is the color structural, semantic, or content-owned?
- [ ] Does the component work at mobile, tablet, and desktop widths?
- [ ] Is the smallest interactive target at least 44×44px?
- [ ] Is keyboard focus visible and in the correct order?
- [ ] Does dark mode preserve hierarchy and contrast?
- [ ] Does reduced motion preserve the final state?
- [ ] Do English and Russian text lengths fit without clipping?
- [ ] Are external links and icon labels complete?

## 15. Known baseline gaps

These are documented implementation gaps, not hidden redesign requirements:

1. Global semantic tokens are only partially formalized; most components still consume Tailwind utility primitives directly.
2. `transition-all` appears in existing components and should be replaced with explicit properties when those components are next touched.
3. Focus-visible styling and a skip link are not yet explicit in the current shell.
4. Some icon and carousel controls are visually smaller than the 44px target floor.
5. The mobile overlay uses `h-screen`; new viewport-filling work should use dynamic viewport units.
6. The current testimonial carousel has visual transition state but no explicit live announcement.
7. Technology badges include blue/red content accents outside the neutral-plus-yellow brand palette.

Address these gaps when modifying the affected surface; do not introduce unrelated refactors solely to make this document look complete.
