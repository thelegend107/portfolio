---
name: Moe Ayoub Portfolio
description: Still Motion Cue portfolio — professional letterhead on a living atmospheric field
colors:
  onyx: "#0C0C0E"
  royal: "#3E63D6"
  neon: "#A100E8"
  neon-dark: "#E46BFF"
  ink: "#0C0C0E"
  paper: "#F4F5F7"
  basin-depth: "#10182C"
  basin-current: "#1A2748"
  basin-dilute: "#5C6A82"
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
    backgroundColor: "#3E63D6"
    textColor: "#FFFFFF"
    typography: "{typography.lead}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "#FFFFFF"
  hero-cue:
    backgroundColor: "{colors.neon}"
---

# Design System: Moe Ayoub Portfolio

## Overview

**Creative North Star: "Still Motion Cue"**

The first viewport is a calm professional letterhead on a living atmospheric film: the name is the artwork, neon titles it, a short neon cue breathes once, and soft ambient video washes behind. No photographic basin plate, no hard royal geometry band. Recruiters should feel intentional craft—not a stacked resume card wall.

Density stays gallery-air: generous section gaps, one job per band, no hero card grid. Motion is ambient film drift, the neon cue, scroll parallax, and section reveal. Reduced-motion freezes all of it.

**Key Characteristics:**
- First viewport: oversized name, neon title, neon cue hairline, support, Email + Resume
- Ambient background film (`/hero-atmosphere.mp4`) under a soft ground wash
- First viewport names AgTerra (now) and Raven (prior) in plain words
- Royal blue as the Email CTA; neon purple as the title and the cue only
- Outfit display + DM Sans body (no serif, no Inter/Space Grotesk defaults)
- Light paper / dark onyx grounds share the same three-hue grammar

## Colors

Three hues. Onyx is the field. Royal blue does the work. Neon purple is the interruption: the title and the cue, not the buttons.

### Onyx
- **Onyx** (`#0C0C0E`): Primary text and dark ground.

### Royal
- **Royal blue** (`#3E63D6`): Email CTA, focus, nav rule, AgTerra name on light. Dark theme lifts AgTerra to `#5B7CFA` so it stays readable on onyx.

### Neon
- **Neon purple** (`#A100E8` light, `#E46BFF` dark): “Full-Stack Engineer”, link hover, the hero cue, and the ground bloom. It is the color that should feel out of place.

### Neutral
- **Paper** (`#F4F5F7`): Light ground, lifted from onyx rather than a fourth hue.
- **Basin Depth** (`#10182C`): Onyx mixed with royal; glass and dye structure.
- **Basin Current** (`#1A2748`): Mid filament.
- **Basin Dilute** (`#5C6A82`): Softened edges.
- **On-action** (`#FFFFFF`): Text on the royal CTA.

### Roles (CSS vars)
- `--color-muted` / `--color-faint`: cool-tinted secondary text
- `--color-hairline` / `--color-shell-glow`: separators and glass inset

### Named Rules
**The Dye Budget Rule.** Royal blue owns the action. Neon purple owns the title and the cue. Neither becomes a page-wide wash.

## Typography

**Display Font:** Outfit  
**Body Font:** DM Sans

**Character:** Soft geometric sans for names and section titles; quiet humanist sans for reading. No Times-adjacent serifs; no Inter / Space Grotesk defaults.

### Hierarchy
- **Display** (600, clamp ~3–5.75rem on the hero, 1.06): Hero name as the artwork.
- **Title** (600, clamp ~1.75–2.4rem, 1.18): Section and company headings.
- **Lead** (500, clamp ~1.2–1.5rem): Role line and CTA label weight.
- **Body** (400, 1.0625rem, ~1.68, max ~60ch): Experience bullets and about copy.
### Named Rules
**No Eyebrows.** Never place an uppercase wide-tracking kicker above a heading.

## Layout

Max width `max-w-7xl`, horizontal padding `px-3` / `md:px-6`, vertical section rhythm `gap-16` / `md:gap-24`. Hero breaks out of that padding as a single full-viewport stage: letterhead copy over ambient film.

## Elevation & Depth

Mostly tonal: paper/onyx ground against soft atmospheric film. CTA lifts slightly on hover with royal-tinted shadow; no multi-layer card stacks in the hero.

### Shadow Vocabulary
- **CTA hover** (`0 12px 28px -14px rgba(62, 99, 214, 0.65)`): Feedback only.

## Shapes

Small radii on controls (`rounded-md`). Prefer soft rectangles over pills. The hero cue is a short rounded hairline, never a badge.

## Components

### Iconography
UI chrome uses one authored stroke set (`components/icons/InkIcon.tsx`): 16×16 viewBox, 1.6 stroke, round caps/joins, `currentColor`. Actions: arrow, menu, close, sun/moon, external, download, mail. Brand/tech marks in the footer stay Simple Icons at a matched optical size. No mixed icon packs for chrome; no emoji/unicode glyphs.

### Primary CTA (`InkCta`)
Solid royal blue `#3E63D6`, Outfit medium, drawn SVG arrow (no unicode). Pointer tracks a soft radial highlight.

### Hero atmosphere
Full-bleed ambient film fills a sticky Apple-style track (`object-fit: cover` across the whole stage). On wide viewports the letterhead is a left rail (~half the stage) with a measure ladder: monumental name, then a lede+CTA group at readable measure, while the film blooms on the right. Letterhead enters with staggered transform/opacity only (no blur or scale) and stays sharp through the pin. Role line and cue use neon; royal stays on Email / AgTerra emphasis (`at&nbsp;` keeps the employer on the same wrap unit). Film holds the poster until `loadeddata`, then crossfades in; scroll parallax is film-only (~140vh track, full-viewport sticky stage under the frosted header, ~78ms lerp) with a one-shot “Scroll” hint. Film is desaturated; phone and desktop share petal `object-position: 68% 42%` with a lighter mobile bottom wash. Identity has no phone `14ch` cap. Header frost uses unprefixed `backdrop-filter`. Sections rise in ~560ms. Reduced-motion collapses the track, hides film/hint, and freezes motion. No photographic plate and no project dyes in the hero.

### Header
Sticky solid paper/ink; centered logo; uppercase Outfit nav.

### Experience rows
Hairline top border, two-column meta/body on desktop; AgTerra first, then Raven — headings carry the employers, no Current/Prior labels.

## Do's and Don'ts

**Do**
- Lead the first viewport with the name as the artwork and keep color on role, cue, and Email
- Keep AgTerra first and Raven material in Experience
- Freeze hero atmosphere and cue under `prefers-reduced-motion`

**Don't**
- Put equal project cards, a logo wall, a photo plate, or a hard royal band in the hero
- Use serif display, Inter, or Space Grotesk as defaults
- Invent metrics, employers, or product claims beyond PRODUCT.md / LinkedIn / repo data
