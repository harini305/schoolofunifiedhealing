# 09 — Phase 2 Recommendations

## Proposed structure (7 pages)

| Page | Source routes | Notes |
|---|---|---|
| Home | `/` | Hero (100svh) + join steps + this week's schedule (real text, not image) + class announcements + mission + support teaser + testimonials |
| About | `/about-our-community` | Mission/service/impact + reviews (curated static set from Google, unless SociableKIT kept) |
| Facilitators | `/about-the-founders` | Founders + 28 teacher cards with photos/bios |
| Classes | `/classes` | Weekly schedule as data (day → class, time, teacher) + class descriptions with benefits/contraindications. Replace 20k px of text columns with compact designed sections |
| Enrollment | `/enrollment` + `/enrollment-form` | Pricing + how-it-works + enrollment form (new backend needed) |
| Events & Trainings | `/deepimmersionevent` + `/trainings` | Current events with booking links (Megatix) + trainings |
| Venue & Restaurant | `/venuehire` | Shala hire + Sunset Restaurant menu + fire circle + shop + directions |
| Support | `/support-us` (+ merged `/contact` content) | 5 ways + contact block; fix the broken restaurant button |
| Store | `/store` + 17 products | Only if owner keeps commerce (see open question); otherwise drop |

Dropped: `/blog` + 4 demo posts, `/about-the-school` (404), `/home` duplicate (redirect to `/`).

## Mandatory design requirements for Phase 2 (from brief)

**Typography**
- Exactly **two** font families site-wide: **Alice** (headings — matches the logo's serif character; it is effectively the logo font) + **Almarai** (body/UI). Both OFL, self-hosted (Google Fonts CDN times out on this machine).
- One consistent responsive type scale; no italics, no tiny text; hierarchy via weight/size, never a third font.

**Visual design**
- Professional hand-designed look; consistent widths/margins; **32px section gaps**; no eyebrow text, no numbering ornaments, no generic AI-template sections.
- Keep the brand palette: gold `#F9D649`, dark `#1C1C1C`, light `#FAFAFA`, red accent from logo artwork (sparingly).
- Every screen filled; no empty white space; hero exactly 100svh; last section + footer fit one screen; compact footer.

**Content**
- Preserve all facts in `03-content-inventory.md`; keep class safety ("who should avoid") notes; keep typos documented but confirm corrections with owner first.
- Class names/times become real text (transcribe from posters in `original-assets/`); keep poster art only where it works as imagery.

**Images & performance**
- Use only originals from `original-assets/` (128 files); compress/resize locally (53 files >1 MB); replace the 2 Unsplash images with real photos.
- Next.js config: merge `images: { unoptimized: true }` into existing config; lazy-load below-the-fold; modern formats where practical.

**Links & integrations**
- All buttons/links stay internal (per house rule 11); external: Megatix booking links, GoFundMe donate, Google Maps, socials, WhatsApp.
- Enrollment/newsletter forms need a new backend (Squarespace forms don't exist off-platform).
- Blog: omit unless owner asks; if included, ≤10 images initially, no invented posts.

## Suggested build stack

Next.js (App Router) + React + JavaScript + GSAP/ScrollTrigger, per the brief. Dev server on a free port (3000/3100 are usually taken — check with `netstat -ano | findstr :<port>`; start from PowerShell). Deploy: GitHub `harini305` + Vercel (CLI user `harinivs132005-1343`, team `harini-658e`) — only after explicit approval.
