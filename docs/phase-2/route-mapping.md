# Route Mapping

| Original route | New destination | Status |
|---|---|---|
| `/` and `/home` | `/` | Rebuilt |
| `/about-our-community` | `/about` | Consolidated (story, mission, impact, reviews → testimonials on home; volunteer → about) |
| `/about-the-founders` | `/about` | Consolidated (founders + teachers) |
| `/classes` | `/classes` | Rebuilt as real text schedule (33 classes) |
| `/deepimmersionevent` | `/events` | Consolidated |
| `/trainings` | `/events` | Consolidated |
| `/enrollment` | `/enrollment` | Rebuilt (pricing + how it works) |
| `/enrollment-form` | `/enrollment` (form section) | Consolidated |
| `/venuehire` | `/contact` | Consolidated (venue hire, restaurant + menu, fire circle, shop, directions) |
| `/teachwithus` | `/about` (volunteer section) | Consolidated |
| `/support-us` | `/` (support our mission section) | Consolidated |
| `/contact` | `/contact` | Rebuilt |
| `/store` + 17 `/store/p/*` | — | **Pending owner decision** (not built; catalogue preserved in audit `data/site-content.json`) |
| `/blog` + 4 demo posts | — | Removed (Squarespace demo filler) |
| `/about-the-school` | — | Not recreated (was 404 on original) |

Legacy-redirect suggestion for deployment (not yet configured): `/home`, `/about-our-community`, `/about-the-founders`, `/deepimmersionevent`, `/trainings`, `/enrollment-form`, `/venuehire`, `/teachwithus`, `/support-us` → their new destinations.
