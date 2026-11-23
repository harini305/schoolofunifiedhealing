# Source Audit — School Of Unified Healing (unifiedhealingbali.com)

**Phase 1 audit, completed 2025-11-23. No code written, nothing redesigned, nothing pushed or deployed.**

- Original site: https://www.unifiedhealingbali.com/ (Squarespace 7.1, template id `5c5a519771c10ba3470d8101`)
- Business: **School Of Unified Healing** — non-profit spiritual healing school in Ubud, Bali. ~30 volunteer teachers, 30+ free community classes per week, paid enrollment model, deep immersion events, trainings, venue hire (Anahata Shala), vegan/vegetarian Sunset Restaurant, healing shop.
- Canonical homepage: `/home` (also served at `/`).

## Files in this audit

| File | Contents |
|---|---|
| `01-audit-report.md` | Full audit findings, coverage record, site overview |
| `02-page-inventory.md` | All 35 routes, page-by-page sections, implement / merge / drop recommendations |
| `03-content-inventory.md` | Content preservation reference (what must survive the rebuild) |
| `04-assets-manifest.csv` | 128 original assets: local file, original URL, pages used, size |
| `05-brand-reference.md` | Fonts, colors, logo, visual identity |
| `06-functionality-and-dependencies.md` | Forms, booking, widgets, third-party integrations |
| `07-responsive-observations.md` | Desktop 1440 / tablet 768 / mobile 390 findings |
| `08-issues-gaps-questions.md` | Broken links, inconsistencies, owner questions |
| `09-phase-2-recommendations.md` | Suggested site structure + mandatory design rules for the rebuild |
| `data/site-content.json` | Structured verbatim text of all 35 pages |
| `original-assets/` | 128 downloaded original images (98.8 MB), unmodified |
| `screenshots/` | Full-page screenshots (see `screenshots/INDEX.md`) |
| `raw/` | Raw HTML of every page + extraction scripts/JSON (evidence) |

## Coverage record

**Fully inspected (19):** `/` (= `/home`), `/about-our-community`, `/about-the-founders`, `/classes`, `/contact`, `/deepimmersionevent`, `/enrollment`, `/enrollment-form`, `/store`, `/support-us`, `/teachwithus`, `/trainings`, `/venuehire`, `/blog`, 4 blog posts, plus `robots.txt`, `sitemap.xml`.

**Store products (17):** all product pages fetched and parsed (name, price, description, image from JSON-LD). Live grid verified in browser.

**Live browser verification (Chrome via agent-browser):** homepage 1440/768/390, mobile nav overlay, enrollment form fields, store grid, classes page layout, SociableKIT reviews widget, cookie banner.

**Partially verified / unverifiable:**
- Squarespace form **submissions** (newsletter, enrollment form) — fields documented, backend delivery not testable without submitting real data.
- Squarespace **Commerce checkout** for store products — product data verified; the actual payment flow was not executed.
- Megatix booking pages — linked but not audited (external platform).
- GoFundMe donation page — external, not audited.
- Google Reviews widget content is loaded live by SociableKIT — only visually verified, text not archived per-review.

**Broken routes found:** `/about-the-school` → 404 (linked from homepage "directions video HERE" and support-us "Sunshine Restaurant" button). See `08-issues-gaps-questions.md`.
