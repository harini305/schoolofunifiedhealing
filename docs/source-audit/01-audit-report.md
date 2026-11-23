# 01 — Audit Report

## Website overview

**School Of Unified Healing** is a non-profit spiritual healing school in the rice fields of Ubud, Bali (scooter/walking access only from the main road). The site is a Squarespace 7.1 brochure site with:

- a weekly community-class program (30+ free classes after a one-time enrollment fee);
- paid "Deep Immersion" events and multi-day Trainings (booked externally via Megatix);
- a Squarespace Commerce store selling past workshop/event tickets (17 products, IDR 180,000–222,000);
- facilitator profiles (2 founders + 28 teachers);
- venue hire for the Anahata Shala + a vegan/vegetarian restaurant menu;
- volunteer ("Teach With Us"), support/donation (GoFundMe), and contact pages.

Brand tagline themes: "Connect. Transform. Heal.", nonprofit spiritual values, giving/receiving with an open heart.

## Technology

- Squarespace 7.1 (template `5c5a519771c10ba3470d8101`), transparent header tweak enabled.
- Fonts loaded from Google Fonts CDN: **Alice** + **Almarai** (both SIL OFL — safe to self-host in Phase 2).
- Site CSS: single generated `site.css` (1.29 MB) + empty `custom.css` (no custom code).
- Global animations disabled (`tweak-global-animations-enabled: false`).
- No announcement bar. Cookie consent banner active ("Accept all" / "Manage cookies").
- reCAPTCHA Enterprise present (form spam protection).
- Google Maps render key present; maps linked externally rather than embedded.
- Timezone: Asia/Jakarta (WIB).

## Key structural observations

1. **The weekly schedule is an image.** Homepage "This Week's Schedule" embeds `schedule Nov 23 - 29.png` — a full timetable graphic, replaced weekly. Unreadable on mobile. Class names/times/teachers exist **only inside these graphics**, never as text.
2. **Class cards are baked graphics.** On `/classes`, each class is a pre-designed poster image (teacher photo + class title + day/time + "Community Offering" text), followed by a plain-text "Description" block. 34 classes in the audited week (Mon 23 – Sun 29 November).
3. **Deep Immersion events** follow the same pattern: a schedule image + poster graphics with "Details & Booking" accordions; booking leaves the site to megatix.co.id.
4. **Blog is Squarespace demo filler.** All 4 posts are the stock "Blog Post Title One–Four / It all begins with an idea" placeholder content. No real articles exist.
5. **Reviews** on `/about-our-community` come from a SociableKIT Google Reviews widget (embed-id `25475283`), plus a "Write a review" link to Google. Homepage shows 3 static hand-picked testimonials (Robert, Andrés, Ahsen).
6. **Broken link:** two CTAs point to `/about-the-school` which returns 404.
7. Footer, newsletter block and "founded upon nonprofit spiritual values…" mission strip are **identical on every page**.

## Coverage record

See `README.md` for the full coverage table. Summary: all 35 sitemap routes fetched (HTTP 200) and parsed; key pages also verified live in a browser at 1440/768/390 with interaction checks (mobile nav, cookie banner, enrollment form, store grid). Form backends and checkout flows were inspected but not executed. No inaccessible pages besides the 404 noted above; no firewall/crawl blocks encountered.
