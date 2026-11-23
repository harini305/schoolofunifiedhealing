# 06 — Functionality & Dependencies

| Feature | Where | Status | Notes for Phase 2 |
|---|---|---|---|
| Main navigation | Global header | **Functionality verified** | 10 links + Donate. Transparent over hero. Mobile: burger → full-screen overlay (verified live at 390px) |
| Newsletter signup | Every page (footer block) | **Observed; submission unverified** | Squarespace newsletter block, single email field, "We respect your privacy." Captcha: reCAPTCHA Enterprise. Backend delivery not testable |
| Enrollment form | /enrollment-form | **Fields verified live; submission unverified** | Squarespace form block. Fields: First Name, Last Name, Email (required), "Sign up for news and updates" checkbox (pre-checked), Age, Gender (required radio: Male/Female/Other), How Did You Hear About Us? (select), Do You Currently Live in Bali, or Are You Visiting? (select), Which Country Are You From? (text), Your Healing Practice Experience (text), How Often Do You Engage in Holistic Practices? (select), liability-confirmation checkbox, Submit. Note: form submits to Squarespace — needs replacement (e.g. Formspree, email service, or static mailto/WhatsApp flow) in Next.js |
| Online class booking | Mentioned on /enrollment ("pre-book our classes online… access given on enrollment") | **Unverified** | No booking UI visible publicly; likely member-only or manual. Owner question |
| Store checkout | /store + 17 product pages | **Product data verified; checkout NOT executed** | Squarespace Commerce (IDR pricing, cart). Requires decision: keep commerce (needs new platform e.g. Stripe/LemonSqueezy/WhatsApp order) or convert to enquiry |
| Deep Immersion booking | /deepimmersionevent | **Observed (external)** | "BOOK HERE" → megatix.co.id event pages (5 events). External dependency retained as link |
| Training booking | /trainings | **Observed** | "Click Here to Discover more about the Training" → megatix.co.id/events/creating-sacred-vibrational-architecture |
| Google Reviews widget | /about-our-community | **Observed (renders live)** | SociableKIT widget, embed-id `25475283`. Third-party JS. Phase 2: either re-embed or use static curated reviews |
| PDF flipbook | /about-our-community | **Observed** | iframe → pdfflipbook.com ("Connect. Transform. Heal." document). Third-party dependency; confirm whether to keep |
| Donate | Nav + footer + /support-us | **Observed (external link)** | GoFundMe campaign link |
| Google Maps | Footer | **Observed (external link)** | maps.app.goo.gl short link; no embedded map |
| WhatsApp float | Every page | **Observed** | Green floating button → wa.me/6281330900052 |
| Cookie banner | Every page | **Verified live** | Squarespace built-in banner ("Accept all" / "Manage cookies") |
| Directions video | Mentioned on /home | **Broken** | "watch our directions video HERE" links to /about-the-school → 404. No video found embedded anywhere on the site (likely on their YouTube) |
| SociableKIT / GoFundMe / Megatix / pdfflipbook | — | External SaaS dependencies | All degrade gracefully if removed; none are self-hosted |
| reCAPTCHA Enterprise | Forms | Observed | Google site key present; needed if forms are kept |

**Compromised-content check:** no spam/gambling redirects or injected content found on any page.
