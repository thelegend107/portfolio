# Design System Master: Moe Ayoub Portfolio

Synthesized from **ui-ux-pro-max**, **design-taste-frontend**, and **impeccable** (Experience mode), constrained by PRODUCT.md brand commitments and the redesign brief.

## Design Read

Reading this as: **redesign-overhaul** of a **developer portfolio** for **recruiters / hiring managers**, with a **modern, clean, confident** language, leaning toward **Swiss minimalism + locked brand purple/blue**, not glassmorphism or logo-wall heroics.

## Mode (impeccable)

**Experience** - the work (integrations + case studies) leads from the first viewport; chrome recedes.

## Dials (design-taste · Portfolio / Developer)

| Dial | Value | Reason |
|------|-------|--------|
| `DESIGN_VARIANCE` | **6** | Clean/professional; asymmetric split OK, not artsy chaos |
| `MOTION_INTENSITY` | **5** | Standard scroll/hover reveals; honor reduced motion |
| `VISUAL_DENSITY` | **4** | Spacious but scannable for hiring evaluation |

## Pattern (ui-ux-pro-max)

**Portfolio Grid** adapted for integration positioning:

1. Hero (name + positioning + primary CTA)
2. Experience timeline
3. Project case studies (problem / built / stack / links)
4. Skills by strength (trimmed groups, not 29 logos)
5. About (short)
6. Contact

Primary CTA: Contact / Email. Secondary: View resume. One label per intent site-wide.

## Style

**Minimalism & Swiss Style** (ui-ux-pro-max match). Brief explicitly retires heavy glass and the wave background.

- Grid-based, high contrast, essential elements only
- Subtle hover 200-250ms; sharp or soft 1px borders; shadows only when hierarchy needs them
- No neon glows, no AI-purple mesh gradients, no three equal feature cards

## Brand-locked color (PRODUCT.md beats search defaults)

| Role | Token | Hex |
|------|-------|-----|
| Accent primary | `--color-primary` | `#5356FF` |
| Accent secondary | `--color-secondary` | `#0B60B0` |
| Light ground | `--color-light` | `#F4F4F2` (soft off-white; not pure `#fff`) |
| Dark ground | `--color-dark` | `#0A0A0B` (off-black; not pure `#000`) |
| Muted text light | | zinc-600 family |
| Muted text dark | | zinc-400 family |
| Border | | zinc-300 / zinc-700 |

Single accent lock: `#5356FF` for CTAs and emphasis; `#0B60B0` for secondary links/chips only.

## Typography

- Keep **Geist Sans** (already in project; design-taste prefers Geist over Inter).
- Optional mono for stack chips / timestamps: Geist Mono if added; otherwise system mono sparingly for data only.
- Display: `text-4xl md:text-5xl lg:text-6xl tracking-tight`, max ~6 words per hero line pair.
- Body: `text-base leading-relaxed max-w-[65ch]`.

## Shape

One radius system: **12px** cards/panels, **9999** pills for chips, **8px** buttons. No mixed random radii.

## Motion

- Signature: short stagger on case-study / skill enter (`opacity` + `y`, ~400ms, ease-out).
- No scroll hijack, no marquee, no perpetual loops.
- `prefers-reduced-motion: reduce` → final state, no entrance animation.

## Stack notes (ui-ux-pro-max · nextjs)

- `next/image` for all images; local `/public/projects/*` preferred over signed Supabase URLs.
- `next/font` only (Geist already).
- `remotePatterns` for remaining remote hosts (new Supabase ref, IFS, worldvectorlogo, etc.).

## Accessibility floor (ui-ux-pro-max + brief fixes)

- Semantic `h1`/`h2`/`h3`
- Selectable text (no `select-none` on body)
- Icon buttons: native `<button>` + `aria-label`, 44px min hit target
- Meaningful `alt` text
- Friendly errors (never raw Postgrest messages)
- No-flash theme script that does not hide `body`

## Anti-patterns (skills + brief)

- Glass / wave as page chrome
- 29-logo skill wall
- Eyebrow over every section (max ~1 per 3 sections; prefer none)
- Em-dashes in copy
- Invented metrics / employers / dates
- Centering everything when variance allows a left-led split hero
