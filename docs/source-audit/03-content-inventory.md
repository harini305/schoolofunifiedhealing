# 03 — Content Inventory

Full verbatim text is in `data/site-content.json` (per page: headings, text blocks, buttons). This file lists what **must be preserved** in the rebuild and where it came from.

## Business facts (preserve exactly)

| Fact | Value | Source |
|---|---|---|
| Business name | School Of Unified Healing | global |
| Email | heartofsouh@gmail.com | footer/contact |
| WhatsApp | +62 81330900052 (wa.me/6281330900052) | footer/contact |
| Location | Ubud, Bali — "heart of the rice fields", scooter/walking access only; Google Maps: https://maps.app.goo.gl/W8Wdj2dyYctzAQYC9 | footer/home |
| Enrollment prices | Day Pass FREE (new students only) · IDR 200,000 / 1 week · IDR 300,000 / 2 months · IDR 800,000 / 6 months. Enrollment free for Balinese community | /enrollment |
| Class model | After one-time enrollment: 30+ classes/week FREE, unlimited | /home, /enrollment |
| Sign-in rules | Enroll ≥30 min before first class; sign-in opens 15 min before class; strictly no entry 10 min after start | /home (CLASS ANNOUNCEMENT) |
| Training example | "Creating Sacred Vibrational Architecture" w/ Lisa — Sun–Tue Nov 29–Dec 1, 18:00–20:00, IDR 3.5M, Q&A support 1 month, creditable to vibration medicine mastery program | /trainings |
| Venue hire | Anahata Shala, evenings after 5.30pm until late; optional vegan/vegetarian all-you-can-eat buffet | /venuehire |
| Volunteer rule | Minimum 2 months commitment; teachers give 1 class/week free; contact coordinator Nuri via heartofsouh@gmail.com | /teachwithus |
| Socials | Instagram @unifiedhealingbali · facebook.com/p/Unified-Healing-Bali-61553035089627 · youtube.com/@UnifiedHealingBali | footer |
| Donations | GoFundMe: gofundme.com/f/help-us-strengthen-expand-our-community-offerings | nav/footer/support |
| Reviews link | g.page/r/Cc2WJv5x9_aFEAE/review ("Write a review") | /about-our-community |

## Homepage copy (verbatim essentials)

- Hero: "Join our sacred space of transformative healing experiences, classes, and community events."
- "Unlimited Access, Real Impact."
- Join steps: (1) complimentary Day Pass for new students; (2) ENROLL — small registration fee sustains the nonprofit school; NO FEES after enrollment, 30+ classes/week free; (3) ELEVATE — start transforming today.
- Impact statements: 30+ volunteer teachers; thousands reached who couldn't afford healing elsewhere; safe sacred space to reconnect and overcome blocks.
- "Support Our Mission" section text (see JSON).
- 3 testimonials: Robert ("If youre looking to work on yourself… perfect spot! Great staff, great vibes and great energy!"), Andrés ("A heavenly place. A must visit…"), Ahsen ("Everyone needs to experience the classes at this place & this community once in their lives…"). *(sic — original typos preserved in JSON)*

## Classes content

- 34 class descriptions across Mon–Sun (Hatha Yoga, Om Chanting, Singing Bowls, Five Elements, sensual/sacral movement, Vinyasa, Ikigai, shamanic drum journey, Loto's story class, free movement/ecstatic, conscious relationships, womb wisdom, breathwork, Yin, Kundalini + crystal bowls, ancestral constellations, somatic shaking, five-elements dance w/ live DJ, 75-min breathwork journey, **Dadar Gulung food description (likely misplaced content!)**, Laughter Yoga, chakra energy flow, Kundalini Activation, Power Yoga, Tantric Meditation, Astrology, NOMOS compatibility, somatic touch/boundaries, Family Constellations). Each with "Benefits" and "Who should avoid this class" sections — **this safety content must be preserved**.
- Class names/times/teachers exist **only inside poster images** (e.g. "Hatha Yoga — With Oksana — Every Monday 08.00am–09.15am"). OCR/manual transcription from the poster graphics is needed in Phase 2 if classes become real text.

## Facilitators content

- Founders: **Kefah Bates** (Founder & Visionary), **David Graham** (Co-Founder & Visionary) — full bios in JSON.
- 28 teachers with bios + external contact links: Aviva Kovalenko, Loto Vazquez, Lisa Ascher, Zineb El Gharbaoui, Sea, Daria, Umut, Adrian Bajenaru, I Made Suparta, Kogie, Oksana St John, Anna Burmistrova, Tracey Jarvis, Matt Laing, Sophie Satori, Subba Sattvic, Audilia Kanaan, Marnie Hodgson, Scarlett, Koné, Daniel Alchemy, Siddha Yogi Raj, Rutger, Chie Miyagawa, Dave Pastanella, Eya Shaman, Karina Loyko, Sandra Medina, Valeria Serafim.

## Restaurant menu (venuehire) — 7 categories with prices

Smoothie Bowls (65K–75K), Mains (60K–80K: Butternut Feta, Curry Dhal Bowl, Vegetarian Burrito, Falafel Bowl, Dal Makani, Nasi Goreng, Gado-Gado, Rainbow Bowl, Avocado Salsa on Toast, Mie Goreng, Tempe Wrap), Sides (5K–35K), Longevity Tonics, Desserts, Teas, Drinks. Full text in JSON.

## Store products

17 products with descriptions + prices (IDR 180,000 ×15, IDR 222,000 ×2). Full descriptions in JSON.

## Content issues found (do NOT silently fix)

- "Dadar Gulung" food description sits between Friday classes on /classes — looks like misfiled content (belongs to a cooking class or the restaurant?). **Owner question.**
- Typos in original: "Tempe Warp", "develpoments", "Enhanses", "Dal Makani", "brake free", "If youre looking…", "…adaptations for your practice.escription goes here" (visible template leftover on /classes Yin class). Documented, not corrected.
- Blog = 100% demo filler; no real articles to preserve.
- "Rise in Light" marquee on /venuehire duplicates its heading (h1 twice).
- SEO: no meta descriptions on any page; titles follow "X — School Of Unified Healing".
