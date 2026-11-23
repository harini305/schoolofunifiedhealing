# 05 — Brand Reference

## Logo

- `original-assets/logo-08.png` (2500×732) — horizontal: gold circle + lotus emblem (gold petals, red center accents) + "School of Unified Healing" wordmark in white serif. Used in header on dark/photo backgrounds.
- `original-assets/logo-05.png` (1551×1889) — stacked: emblem above "School of / Unified / Healing" wordmark in dark serif. Used in footer/mobile.
- **Logo wordmark typeface:** a high-contrast Didone-style serif (Bodoni/Playfair-like, thin hairlines, ball terminals on 'f'). Not a webfont on the site — the logo is an image. The site's heading font **Alice** is its closest in-use companion and should become font #1 in Phase 2 (per the two-font rule, the logo font must be one of the two; Alice matches the logo's elegant serif character and is already the site's heading font).
- Emblem colors: gold `#E8A812`–`#F0B429` range + red `#E4351E` accents (sampled from artwork; estimate).

## Typography (verified from generated site.css)

| Role | Font | Weight | Style | Letter-spacing | Line-height |
|---|---|---|---|---|---|
| Headings | **Alice** | 400 | normal | −0.02em | 1.2 |
| Body | **Alice** | 400 | normal | 0 | 1.5 |
| Meta/nav/buttons/labels | **Almarai** | 400 | normal | 0 | 1.5 |

Type scale (base 16px): H1 4rem · H2 2.8rem · H3 2.2rem · H4 1.6rem · large 1.4rem · body 1rem · small 0.9rem.

Fonts come from Google Fonts (both SIL Open Font License — self-host both in Phase 2; fonts.googleapis.com times out on this machine at runtime).

- **Alice**: soft old-style serif with a slightly whimsical, spiritual character (single weight 400).
- **Almarai**: clean geometric sans (Arabic/Latin), used for UI text.

## Colors (verified from site.css theme variables unless marked estimate)

| Role | Value | Source |
|---|---|---|
| Accent (gold/yellow) | **#F9D649** (hsl 48.07, 93.62%, 63.14%) | `--accent-hsl` — CTA buttons, gold sections, highlights |
| Dark / near-black | **#1C1C1C** (hsl 0, 0%, 10.98%) | `--darkAccent-hsl` — dark sections, footer bg |
| Lightest bg | **#FAFAFA** (hsl 0, 0%, 98.04%) | `--white-hsl` |
| Darkest | **#000000** | `--black-hsl` |
| Dark text grays | #272727, #3E3E3E | frequent in site.css |
| Light borders/backgrounds | #F6F6F6, #E7E7E7, #E4E4E4 | frequent in site.css |
| Red-orange | #F0523D | 11 uses in site.css (secondary accent — visible in logo artwork accents; exact placement varies) |
| WhatsApp green | #25D366 / #1EBD5A | floating WhatsApp button only (third-party element) |

Section themes observed: white sections, black sections, and full gold ("light-bold"/accent) sections. Header is transparent over heroes.

## Visual identity notes

- **Tone:** warm, spiritual, community-driven; gold = sacred/sunlight, black = grounding, generous photography of real people/place.
- **Photography:** real photos of the shala, rice fields, teachers, classes, food. Class/event promo cards are pre-designed graphics with lime-green/yellow display type baked in (Canva-style) — these carry the class names/times.
- **Shape language:** mostly rectangular images; the classes page has an organic wave divider between hero and content; teachers grid uses uniform portrait cards with name overlays.
- **Iconography:** standard social icons; WhatsApp float button (green circle, bottom-right).
- **Marquee:** "Rise in Light" scrolling text banner (venuehire).
- No custom CSS; all styling is stock Squarespace theme configuration.
