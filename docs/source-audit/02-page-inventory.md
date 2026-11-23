# 02 — Page Inventory

All 35 sitemap routes. Recommendation column: **implement** / **merge** / **drop** / **owner decision**.

## Main pages

| Route | Title | Purpose | Sections (original order) | Recommendation |
|---|---|---|---|---|
| `/` + `/home` | School Of Unified Healing | Homepage | Hero (shala photo, "Join our sacred space…") → "Unlimited Access, Real Impact." (join steps 1–3 + photo) → "This Week's Schedule" (schedule **image**) → CLASS ANNOUNCEMENT (enrolling / signing in / directions notes) → gold mission strip (3 statements + Our Mission btn) → "Support Our Mission" (text + Learn More) → 3 testimonials → Newsletter → footer | Implement (redesign) |
| `/about-our-community` | About Our Community | Mission, impact, community, reviews | Hero ("Community is at the heart…") → "Connect. Transform. Heal." + PDF flipbook embed → "Our Mission, Our Service" (6 h4 statements) → "The Impact of Our Community" (5 points) → big statement h1 → "Join Our Community" (4 reasons) → "Learn More About Teaching With Us" → "When the Heart of Our Community Speaks" + "How was your experience?" (SociableKIT Google reviews grid + Write a review btn) → Newsletter → footer | Implement |
| `/about-the-founders` | Facilitators | Founders + teacher directory | "Meet Our Founders" (Kefah Bates, David Graham — photos + bios) → "Meet Our Teachers" (28 teacher cards, photo + bio + external contact link each) → Newsletter → footer | Implement |
| `/classes` | Community Classes | Weekly class program | Hero (group photo) → per-day sections Mon 23 – Sun 29 Nov: class poster **images** + "Description" text blocks (34 classes) → Newsletter → footer. Page is ~20,000px tall, mostly text columns with large empty gaps | Implement (redesign as real text/data) |
| `/enrollment` | Enrollment | Pricing + join process | Hero "Join the School Of Unified Healing" → intro → dark pricing panel (Day Pass Free* / 200K 1 wk / 300K 2 mo / 800K 6 mo, *new students only) → "How It Works" (3 numbered cards) → Newsletter → footer | Implement |
| `/enrollment-form` | Enrollment Form | Student enrollment form | "Student Enrollment Form" + "All Sections Must Be Filled. Thank You" + Squarespace form (see 06) → Newsletter → footer | Implement |
| `/deepimmersionevent` | Deep Immersions And Events | Paid workshops/events | Hero (flower mandala) → intro line → "Deep Immersion & Event Schedule" (schedule **image**) → 5 event poster graphics each with "Details & Booking" accordion (date/time/cost + BOOK HERE → megatix) → Newsletter → footer | Implement |
| `/trainings` | Trainings | Multi-day trainings | H1 Trainings → "Training Schedule": one active training (Creating Sacred Vibrational Architecture w/ Lisa, Sun–Tue Nov 29–Dec 1, 18:00–20:00, IDR 3.5M, booking → megatix) + details → Newsletter → footer | Implement |
| `/venuehire` | Venue Hire | Shala hire + restaurant | Hero "A Sanctuary Space for Healing and Connection" → "Anahata Shala — The Heart of Healing" (hire evenings after 5.30pm, optional vegan buffet) → Sunset Restaurant: "Nourishment for the Soul", "We proudly support local farmers", "Where Flavor Meets Wellness" → "Our Healing Vegan/vegetarian Menu" (7 categories with prices) → "Our Fire Circle — A Place of Transformation" → "Our Healing Shop" → "Directions — We are in the Heart of the Rice Fields" → "Rise in Light" marquee → Newsletter → footer | Implement (consider splitting: Venue Hire vs Restaurant/Menu) |
| `/teachwithus` | Volunteer | Recruit volunteer teachers | "Teach with us & make a difference." → intro → 3 value cards (Devotional Service / Discover Yourself / Connect And Be Supported) → community line → visa/contact note (email Nuri, heartofsouh@gmail.com) → "*minimum of 2 months" → Newsletter → footer | Implement |
| `/support-us` | Support | 5 ways to contribute | H1 "Collective Power, Collective Impact" → "5 ways to Contribute": Donate (GoFundMe) / Dine & Support (**broken** btn → /about-the-school) / Shop & Support / Give Your Time (→ /teachwithus) / Spread the Word / Gratitude in Action → Newsletter → footer | Implement |
| `/contact` | Contact | Contact details | "Contact Us": heartofsouh@gmail.com, WhatsApp +62 81330900052 → Newsletter → footer. Very thin page | Merge into footer/contact section, or keep as slim page |

## Store

| Route | Title | Recommendation |
|---|---|---|
| `/store` | "Deep Immersion & Events" (store grid) | Implement as on-site shop grid (17 products) |
| `/store/p/*` (17 products) | Workshop/event ticket pages, IDR 180K (15) / 222K (2) | Owner decision: keep store in rebuild (needs checkout solution) or link out. Product data preserved in `data/site-content.json` |

Products: Attract Abundance With The Power Of Reiki; Awaken And Align: A Chakra Activation Workshop; Awaken Your Power: Kundalini Activation; Be Magnet For Abundance: Tune Your Brain To The Right Frequency; Call Your Power Back: A Tantric Immersion Experience; Call Your Power Back: Journey Through The Chakra Workshop; Ego vs Soul: Understanding Your Inner World; Family Constellation; Harmony Within: A Somatic Journey…; Heart Awakening: Inner Connection To Embrace Self-Love; Inner Child Healing: A Shamanic Journey To Wholeness With Holly Baade; Inner Child Healing: The Power Of Ancestors; Letting Go Workshop; Mandala Journey Immersion; New Moon Heart Songs Circle With Sound Healing (222K); Spiral Of Light: Walk Into Your Manifestation (222K); The Art Of Contact Dance For Beginners.

## Blog

| Route | Status | Recommendation |
|---|---|---|
| `/blog` + 4 posts (`blog-post-title-one-hpzbe` … `four-ep54l`) | **Squarespace demo filler** ("It all begins with an idea…"). No real content. | **Drop** (or leave out of nav). Do not carry demo posts into the rebuild |

## Legacy / broken

| Route | Status |
|---|---|
| `/about-the-school` | **404**, but linked from homepage ("directions video HERE") and support-us ("Sunshine Restaurant" button). Owner question: restore page or retarget links |

## Shared components (every page)

- Transparent header over hero; nav: About, Enrollment, Community Classes, Deep Immersions And Events, Trainings, Facilitators, Venue Hire, Teach With Us, Support, Contact + gold **Donate** button (→ GoFundMe, external). Mobile: burger → full-screen white overlay, large serif links.
- Newsletter block: "Subscribe To Our Newsletter" + email field + Sign Up.
- Mission strip: "We are founded upon nonprofit spiritual values driven by the belief that true healing comes from giving and receiving with an open heart." + DONATE / OUR MISSION buttons.
- Footer: Location (Google Maps btn), Contact (WhatsApp +62 81330900052, heartofsouh@gmail.com), social icons (Instagram, Facebook, YouTube).
