# Design System

## Typography (exactly two families, self-hosted)
- **Alice** (`--font-alice`) — all headings (h1–h3), class names, prices, quotes. Chosen because it echoes the logo's elegant serif wordmark (the logo font is baked into the logo image; Alice is the original site's heading font and its closest match).
- **Almarai** (`--font-almarai`, 400/700) — body, nav, buttons, forms, menu, footer.
- Scale: h1 `clamp(2.5rem→4rem)`, h2 `clamp(1.9rem→2.6rem)`, h3 `clamp(1.3rem→1.65rem)`, body 17px (16px mobile), small 14px, nav 16px. No italics, no third font.

## Colors
| Token | Value | Use |
|---|---|---|
| `--gold` | #F9D649 | CTA buttons, mission band, arch outlines, accents (controlled) |
| `--ink` | #1C1C1C | Dark sections, footer, text buttons |
| `--paper` | #FAFAFA | Page background |
| `--cream` | #F5EFDF | Alternating section background |
| `--gold-deep` | #8A6A12 | Accent text on light backgrounds (AA contrast) |
| `--ember` | #F0523D | Form validation errors only |
| `--text` / `--muted` | #33302A / #6E6759 | Body text |
| WhatsApp green | #25D366 | WhatsApp float only |

## Layout tokens
- `--section-gap: 32px` applied as **equal 32px top and bottom padding** on every section (verified with computed styles).
- Header: 84px desktop / 68px mobile. Transparent over home hero, solid elsewhere, hides at footer.
- Container 1280px, narrow 880px, gutter `clamp(20px, 4vw, 56px)`. Full-width sections, no side gutters.
- Radius 6px; image treatments vary by section: rectangular frames with offset gold borders, organic blob masks, oval portraits, and two-image `collage-duo` compositions. The lotus arch remains only as a single accent, avoiding repeated image placement.
- Footer: dark ink, 3-column row + thin base line (~164px measured), measured into `--footer-h` by JS.

## Fit-to-footer
Every page's last section uses `.fit-footer { min-height: calc(100svh - var(--footer-h)) }` with a flex `.fit-body` that centers content. Verified 0px overflow at 6 desktop heights on all 6 pages. Mobile keeps natural height.

## Motion (GSAP + ScrollTrigger)
- Hero: 3-photo crossfade (opacity only) + 1.04 wrapper zoom over 10s, `sine.inOut`, `force3D` — no per-image transforms, no visibility toggles (no shake).
- `data-reveal` fade-up 26px once per element at 88% viewport, 4s failsafe, disabled under `prefers-reduced-motion`.
- Hover: cards lift 4px, images scale 1.03. Pinned asides use CSS `position: sticky` (released before the footer).
- No marquees, custom cursors, scroll indicators or entrance-everything animations.

## Forms
Enrollment form: 11 fields from the original (names, email, updates checkbox, age, gender radios, 3 selects, country, experience textarea, liability checkbox) with inline errors, accessible labels, and an honest mailto handoff to `heartofsouh@gmail.com` (no fake success; backend pending).
