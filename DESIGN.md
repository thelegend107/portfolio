---
name: Moe Ayoub Portfolio
description: Suminagashi ink basin portfolio — work as currents, identity in the still margin
colors:
  primary: "#5356FF"
  secondary: "#0B60B0"
  ink: "#0A0A0B"
  paper: "#F4F4F2"
  basin-depth: "#0A1A33"
  basin-current: "#1E2D4A"
  basin-dilute: "#606D80"
typography:
  display:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 3.8vw + 1.35rem, 4rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.8vw + 1rem, 2.4rem)"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 0.5vw + 1.05rem, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.28
    letterSpacing: "-0.02em"
  body:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.68
  kicker:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    letterSpacing: "0.1em"
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  basin: "1.25rem"
spacing:
  section: "5rem"
  page-x: "0.75rem"
components:
  button-primary:
    backgroundColor: "{colors.basin-depth}"
    textColor: "#FFFFFF"
    typography: "{typography.lead}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "#FFFFFF"
  dye-stain:
    backgroundColor: "feathered paper scrim over ink"
    textColor: "{colors.basin-depth}"
    rounded: "0.65rem"
    padding: "0.45rem 0.85rem"
---

# Design System: Moe Ayoub Portfolio

## Overview

**Creative North Star: "Ink Basin"**

The site is a suminagashi field: project work moves as indigo–navy currents in a living basin; name, title, and contact sit in a still paper margin. Recruiters should feel intentional craft in the first viewport—not a stacked resume card wall.

Density stays gallery-air: generous section gaps, one job per band, no hero card grid. Motion is reserved for filament shear inside the basin (pointer + scroll); labels stay mostly still. Reduced-motion freezes the marble.

**Key Characteristics:**
- Split first viewport: still margin + living basin plate
- First viewport names AgTerra (now) and Raven (prior) in plain words
- Brand indigo as the Email CTA and dye accents
- Outfit display + DM Sans body (no serif, no Inter/Space Grotesk defaults)
- Light paper / dark ink themes share the same basin grammar (`ink-basin-plate.webp` / `ink-basin-plate-dark.webp`)

## Colors

Paper ground with deep basin inks; brand accents appear as dilute dye, not purple gradients. Neutrals are cool-mixed with basin hues (not generic gray).

### Primary
- **Brand Indigo** (`#5356FF`): Title, Email CTA, focus rings, dye hover, experience bullets.

### Secondary
- **Depth Blue** (`#0B60B0`): AgTerra name accent in the hero, dye-stain scrim tint, shell inset glow, meta separators.

### Neutral
- **Ink** (`#0A0A0B`): Primary text and dark surfaces.
- **Paper** (`#F4F4F2`): Page ground and light plate stock.
- **Basin Depth** (`#0A1A33`): Dominant ink bloom; dye stain type on light.
- **Basin Current** (`#1E2D4A`): Mid filament layer; muted-text mix.
- **Basin Dilute** (`#606D80`): Softened ink edges; faint meta type mix.
- **On-action** (`#FFFFFF`): Text/icons on solid primary CTA fill.

### Roles (CSS vars)
- `--color-muted` / `--color-faint`: cool-tinted secondary text
- `--color-hairline` / `--color-shell-glow`: separators and basin inset
- Dark plate: `ink-basin-plate-dark.webp` (indigo–navy, not inverted gold)

### Named Rules
**The Dye Budget Rule.** Brand indigo and secondary blue appear as accents inside the basin or as the title/CTA fill—not as page-wide washes or decorative glass.

## Typography

**Display Font:** Outfit  
**Body Font:** DM Sans

**Character:** Soft geometric sans for names and section titles; quiet humanist sans for reading. No Times-adjacent serifs; no Inter / Space Grotesk defaults.

### Hierarchy
- **Display** (600, clamp ~2.6–4rem, 1.06): Hero name.
- **Title** (600, clamp ~1.75–2.4rem, 1.18): Section and company headings.
- **Lead** (500, clamp ~1.2–1.5rem): Role line and CTA label weight.
- **Body** (400, 1.0625rem, ~1.68, max ~60ch): Experience bullets and about copy.
### Named Rules
**No Eyebrows.** Never place an uppercase wide-tracking kicker above a heading.

## Layout

Max width `max-w-7xl`, horizontal padding `px-3` / `md:px-6`, vertical section rhythm `gap-20` / `md:gap-24`. Hero is a two-column grid on large screens (`~34%` margin / remainder basin); stacked on small screens with basin `min-h-[420px]`.

## Elevation & Depth

Mostly tonal: paper vs basin fill, inset highlight on the basin shell, soft ambient shadow under the shell. Project names sit as dye stains in the current (feathered scrim + text-shadow, no paper chip). CTA lifts slightly on hover with indigo-tinted shadow; no multi-layer card stacks in the hero.

### Shadow Vocabulary
- **Basin shell** (`0 18px 40px -28px rgba(10, 26, 51, 0.28)` + inset highlight): Contains the ink field.
- **Dye stain**: Feathered paper/ink scrim + soft text halo for readability; no drop shadow card.
- **CTA hover** (`0 12px 28px -14px rgba(83, 86, 255, 0.65)`): Feedback only.

## Shapes

Small radii on controls (`rounded-md`); basin uses `1.25rem` rounding. Prefer soft rectangles over pills.

## Components

### Iconography
UI chrome uses one authored stroke set (`components/icons/InkIcon.tsx`): 16×16 viewBox, 1.6 stroke, round caps/joins, `currentColor`. Actions: arrow, menu, close, sun/moon, external, download, mail. Brand/tech marks in the footer stay Simple Icons at a matched optical size. No mixed icon packs for chrome; no emoji/unicode glyphs.

### Primary CTA (`InkCta`)
Solid brand indigo `#5356FF`, Outfit medium, drawn SVG arrow (no unicode). Pointer tracks a soft radial highlight.

### Dye stain
Project name set in the ink as a dye region: feathered scrim, soft text halo, no paper chip or drop shadow. Links into Projects. Pointer and scroll shear filament layers inside the plate; labels stay mostly still. Reduced-motion freezes to the still plate.

### Header
Sticky solid paper/ink; centered logo; uppercase Outfit nav.

### Experience rows
Hairline top border, two-column meta/body on desktop; AgTerra first, then Raven — headings carry the employers, no Current/Prior labels.

## Do's and Don'ts

**Do**
- Lead the first viewport with the living basin beside still identity type
- Keep AgTerra first and Raven material in Experience
- Freeze basin motion under `prefers-reduced-motion`

**Don't**
- Put equal project cards or a logo wall in the hero
- Use serif display, Inter, or Space Grotesk as defaults
- Invent metrics, employers, or product claims beyond PRODUCT.md / LinkedIn / repo data
- Open a PR until the owner approves
