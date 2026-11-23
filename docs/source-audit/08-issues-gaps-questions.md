# 08 — Issues, Gaps & Questions for the Owner

## Broken / dead

1. **`/about-the-school` → 404**, yet linked from:
   - homepage CLASS ANNOUNCEMENT: "watch our directions video HERE";
   - /support-us: "Sunshine Restaurant" button.
   → Owner decision: restore the page, or retarget links (directions video likely lives on YouTube @UnifiedHealingBali; restaurant content actually lives on /venuehire).

## Content problems on the original

2. **Class names/times only exist inside poster graphics** — not as text. Bad for accessibility, SEO, mobile, and weekly updates. Phase 2 should make the schedule and classes real text/data (and transcribe the current posters).
3. **"Dadar Gulung" food description** sits between Friday classes on /classes — apparently misfiled (cooking class? menu item?). → Owner question.
4. **Blog is 100% Squarespace demo filler** (4 posts, "Blog Post Title One–Four"). No real articles. Recommend dropping; → owner confirm.
5. Visible typos (keep documented, ask before fixing): "Tempe Warp", "Dal Makani", "develpoments", "Enhanses", "brake free", "If youre looking", "…practice.escription goes here" (template leftover in Yin class text).
6. **2 Unsplash stock images** in use: `unsplash-image-EwKXn5CapA4.jpg` on /enrollment, `franco-antonio-giovanella-...-unsplash.jpg` on /support-us. Rebuild should prefer the school's real photos.
7. No meta descriptions on any page; thin SEO metadata overall.
8. "Rise in Light" marquee duplicates its own H1 on /venuehire (h1 "Rise in Light" + "Rise in Light Rise in Light").
9. /contact is nearly empty (email + WhatsApp only) — merge candidate.
10. Store page H2 says "Deep Immersion & Events" — duplicates the events page name; confusing.

## Unverifiable / needs owner input

11. **Class pre-booking system** mentioned on /enrollment ("access to our booking system is given on enrollment") — not publicly visible. What system? (Owner question.)
12. **Enrollment form backend** — Squarespace forms; where do submissions go (email? Google Sheet?) and must the new site replicate them? (Owner question.)
13. **Store checkout** — keep e-commerce in the rebuild (needs new checkout provider) or convert products to enquiry/WhatsApp order? (Owner decision.)
14. **SociableKIT Google Reviews** — paid third-party widget; keep subscription and re-embed, or switch to curated static reviews? (Owner decision.)
15. **pdfflipbook.com embed** on /about-our-community ("Connect. Transform. Heal." document) — keep? Source PDF available? (Owner question.)
16. Schedule image changes weekly — who updates it, and should Phase 2 provide an editable weekly schedule (data file / CMS) instead? (Owner question.)
17. Teacher contact links point to personal Instagrams/Linktrees — confirm all 28 are current.

## Risks

- 53 of 128 images are >1 MB (several 2 MB); Phase 2 must compress/resize (planned: local pipeline, `images: { unoptimized: true }` + pre-compressed assets).
- Class/event posters contain baked-in text — if reused as-is they conflict with the "two fonts" rule; decide per image (use as-is as artwork vs. recreate as real text).
