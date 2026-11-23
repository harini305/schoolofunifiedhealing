# Phase 2 — Implementation Plan

**Project:** School Of Unified Healing rebuild (D:\unifiedhealingbali61) · Stack: Next.js 15 App Router, JavaScript, React, GSAP + ScrollTrigger, plain CSS · `images: { unoptimized: true }`

## Source of truth
Phase 1 audit in `docs/source-audit/` (all 35 routes audited, 128 original assets downloaded). No business facts invented; open questions tracked in `pending-owner-decisions.md`.

## Page structure (6 pages + 404)
Home · About · Classes · Events & Trainings · Enrollment · Contact & Visit. Store not built (pending owner decision — catalogue preserved in the audit). Blog demo posts dropped. Broken `/about-the-school` not recreated.

## Design system
- **Fonts (2, self-hosted):** Alice (headings — echoes the logo's serif wordmark) + Almarai (body/UI). WOFF2 in `public/fonts`, loaded via `next/font/local`.
- **Palette:** gold `#F9D649` (controlled accent), ink `#1C1C1C`, paper `#FAFAFA`, cream `#F5EFDF`, gold-deep `#8A6A12` (readable accent text), ember `#F0523D` (form errors only).
- **Tokens:** `--section-gap: 32px`, header 84px (68px mobile), footer measured in JS, container 1280px, type scale with `clamp()`.
- **Signature:** lotus-arch photo masks with offset gold outline (echoing the logo), cinematic 3-photo crossfade hero, weekly-schedule day-tab explorer, pinned asides on long sections, fit-to-footer closing sections on every page.

## Data
- `data/classes.json` — 33 classes with day/time/teacher transcribed from the original poster graphics + verbatim descriptions/benefits/contraindications.
- `data/events.json` — 5 events with verified dates/prices + Megatix links.
- `data/teachers.json` — 2 founders + 29 teachers with bios, portraits, contact links.
- `data/menu.json` — full restaurant menu (10 categories) + tax note.

## Images
61 optimized WebP/PNG files in `public/images` (27.8 MB → 8.3 MB). Originals untouched in `docs/source-audit/original-assets` (gitignored). Two Unsplash stock images excluded; the Squarespace stock `Rectangle_25.jpg` excluded.

## Components
Header (transparent→solid, hides at footer, accessible mobile overlay) · Footer (compact, dark) · WhatsAppFloat (hides at footer) · ScrollEffects (GSAP reveals, reduced-motion + failsafe, footer-h measurement) · Hero (opacity-only crossfade, wrapper zoom) · PageHero (text-only inner heading) · ScheduleTabs (day tabs + accordions) · EnrollmentForm (validation + mailto handoff).

## Verification
`npm run build` passes (all static). Browser QA: all pages at 1440/768/390/320, footer-fit measured 0px overflow at 1920/1536/1440/1366/1280/1024, schedule + form + mobile menu interaction tests. Details in `testing-report.md`.
