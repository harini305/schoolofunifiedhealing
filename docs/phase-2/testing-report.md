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

### QA artifacts (not site bugs)
Lazy-loaded images appear blank in some early full-page screenshots; forcing eager loads confirmed all images render correctly. Dev-mode "N" badge is Next.js tooling.

### Not testable here
Megatix checkout, GoFundMe donation, actual email delivery of the enrollment mailto handoff (depends on the visitor's email client).
