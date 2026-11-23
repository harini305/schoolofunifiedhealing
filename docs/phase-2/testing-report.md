# Testing Report

Dev server: http://localhost:3417 · Build: `npm run build` ✅ all 7 routes static, no errors.

## Browser QA (Chrome via agent-browser)

### Footer-fit (signature rule)
Measured `lastSection.height + footer.height − innerHeight` on all 6 pages at 1920×1080, 1536×864, 1440×900, 1366×768, 1280×720, 1024×768.
**Result: 36/36 measurements = 0px overflow.** Last section + footer fill exactly one viewport everywhere.

### Responsive
- 1440: full-page screenshots inspected for all 6 pages; native-resolution crops checked (hero, support, teachers, closing).
- 768: home full-page verified; sections stack correctly.
- 390: all pages verified; **0px horizontal overflow** on all 6 pages.
- 320: **0px horizontal overflow** on all 6 pages.

### Interactions (tested, not assumed)
- Schedule: Monday → Wednesday tab switch shows correct classes; accordion opens description/benefits/contraindications. ✅
- Mobile menu: opens with logo + close X, navigates to /about and closes. ✅
- Form: empty submit shows all 7 required-field errors; filled valid form opens mailto and shows the honest status message. ✅
- Header hides at footer (`tucked`), WhatsApp hides at footer. ✅
- Event/teacher accordions render. ✅

### Issues found and fixed
1. Donate button white-on-gold (nav color override) → fixed with `.main-nav .header-cta a { color: var(--ink) }`.
2. Classes closing section stacked instead of split (`.fit-body` overrode flex direction) → fixed with `.classes-closing.fit-body`.
3. Mobile menu close button trapped behind overlay (z-index stacking context) → fixed with `.site-header.menu-open { z-index: 130 }`.
4. Hero facts line cramped behind WhatsApp float at 390px → third fact hidden on small screens, smaller type.
5. Footer compacted (186px → 164px).

### Correction round 2 — section-by-section alignment and spacing review
1. **Overlapping collage images** were measured crossing into the next section's heading (home +31px, about +12px). Replaced absolute-positioned overlaps with two-column `collage-duo` layouts; re-measured clearances are now **−42px home and −92px about** (no overlap).
2. **Repeated arch image treatment** replaced with varied rectangular, organic blob, oval and collage compositions across home, about, classes, enrollment and contact.
3. **Empty space under pinned images** filled: support photo now 480px, impact 340px, contact aside 230px; enrollment aside redesigned with two photos plus a submission-process card.
4. **Teacher grid** changed from 4 to 5 columns on wide screens (4/3/2 responsively), shortening the page and avoiding a mostly empty final row.
5. **Event posters were cropped** by `object-fit: cover`; now displayed uncropped with `object-fit: contain`, alternating left/right placement and vertically centered content. Training uses its own placement.
6. **Mobile event layout** corrected to a single column after the new desktop grid overrode the mobile rule; all posters and text verified readable at 390px.
7. Contact fire circle and healing shop redesigned as alternating feature splits; restaurant uses an organic image shape.
8. Re-verified after the redesign: **36/36 footer-fit checks = 0px overflow**, **0px horizontal overflow on all 6 pages at 390px and 320px**, and `npm run build` passes.

### QA artifacts (not site bugs)
Lazy-loaded images appear blank in some early full-page screenshots; forcing eager loads confirmed all images render correctly. Dev-mode "N" badge is Next.js tooling.

### Not testable here
Megatix checkout, GoFundMe donation, actual email delivery of the enrollment mailto handoff (depends on the visitor's email client).
