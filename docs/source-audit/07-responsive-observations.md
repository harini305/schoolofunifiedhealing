# 07 — Responsive Observations

Tested with Chrome (agent-browser) at **1440×900**, **768×1024**, **390×844**. Screenshots in `screenshots/`.

## Desktop (1440)

- Transparent header over hero images; nav in one row, gold "Donate" pill right.
- Hero = full-viewport photo with large serif headline overlay (gold/white).
- Content max-width ~1400px with 4vw page padding (theme values).
- Classes page: 3-column class cards; page extremely long (~20,500px) with large empty gaps between day sections.
- Facilitators: founders as 2 large cards, teachers in a 3-column card grid with name overlays.
- Store: 2-column large product posters.
- Footer: 3–4 column layout (newsletter / contact / location / mission) — moderate height.

## Tablet (768)

- Header collapses to burger menu; hero text scales down; sections stack to 1–2 columns.
- Schedule image scales down proportionally (becomes hard to read).

## Mobile (390)

- Full-screen white nav overlay with large serif links, gold stacked logo top-left, X close (verified).
- All sections stack single-column; gold mission strip and testimonials stack fine.
- **Schedule image unreadable** (full timetable squeezed to ~350px wide) — the single biggest mobile content failure.
- Footer stacks vertically; stacked logo-05 shown; newsletter + contact + location + mission + buttons.
- Cookie banner occupies bottom band until accepted.
- No horizontal overflow observed on homepage.

## Limitations

- Interactive hover/animation states: global animations are disabled on the original site, so nothing to record.
- Very long pages (classes ~20k px) were inspected via full-page screenshots; fine text detail at 1440 verified via native-resolution crops (class cards legible).
