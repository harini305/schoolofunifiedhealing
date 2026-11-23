#!/usr/bin/env python3
"""Optimize original assets into public/images as WebP (originals untouched)."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "docs/source-audit/original-assets"
OUT = ROOT / "public/images"
OUT.mkdir(parents=True, exist_ok=True)

# output name: (source file, max width, quality)
IMAGES = {
    # logos
    "logo-horizontal.png": ("logo-08.png", 1000, 90),
    "logo-stacked.png": ("logo-05.png", 640, 90),
    # heroes / large photos
    "hero-school.webp": ("souh.jpg", 1920, 82),
    "hero-shala-circle.webp": ("WhatsApp_Image_2024-08-16_at_10.31.04.jpeg", 1920, 82),
    "hero-fire-circle.webp": ("2023-10-11.jpg", 1920, 82),
    "shala-sound-healing.webp": ("ll.jpg", 1227, 82),
    "students-group.webp": ("1.jpg", 677, 85),
    "teachers-group.webp": ("PHOTO-2025-11-13-09-12-11.jpg", 1200, 82),
    "mandala-sunset.webp": ("DSC02400.jpg", 1400, 82),
    "mandala-meditation.webp": ("PHOTO-2025-11-03-18-02-20.jpg", 1200, 82),
    "restaurant-view.webp": ("2024-01-16__283_29.jpg", 1000, 82),
    "restaurant-food.webp": ("2024-01-16__281_29.jpg", 1000, 82),
    "fire-circle-night.webp": ("2023-10-11__283_29.jpg", 1000, 82),
    "healing-shop.webp": ("2024-04-23.jpg", 1200, 82),
    "terrace-ricefields.webp": ("IMG_4937.jpg", 1400, 82),
    "shala-session.webp": ("IMG_3952.jpg", 1400, 82),
    "shala-yoga-class.webp": ("IMG_8721.jpg", 1400, 82),
    "sound-bowls-class.webp": ("k.jpg", 1482, 82),
    "community-circle.webp": ("WhatsApp_Image_2025-08-27_at_19.27.00__281_29.jpg", 1400, 82),
    "community-workshop.webp": ("82465659_1726044111598644_r.jpeg", 1200, 82),
    "community-meditation.webp": ("IMG_050FCD0A8EE2-1.jpeg", 1200, 82),
    "community-creative.webp": ("IMG_C20548829B46-1.jpeg", 1200, 82),
    "ricefield-fire-circle.webp": ("IMG_3929.jpg", 1400, 82),
    "community-men.webp": ("2024-03-25.jpg", 1200, 82),
    "training-lisa.webp": ("Lisa_-_Training.png", 1000, 82),
    # event posters (official artwork)
    "event-full-moon.webp": ("Option_1.1__282_29.png", 1000, 85),
    "event-ikigai.webp": ("daniel_-_fri_27.png", 1000, 85),
    "event-ecstatic-breathwork.webp": ("dave-_sat_28.png", 1000, 85),
    "event-dvara.webp": ("eya-_dec_5__283_29.png", 1000, 85),
    "event-sensual-dance.webp": ("eya-_dec_5__281_29__281_29.png", 1000, 85),
}

# teacher portraits (600px wide)
import json
teachers = json.loads((ROOT / "data/teachers.json").read_text(encoding="utf-8"))
for t in teachers:
    slug = t["name"].lower().replace(" ", "-").replace("é", "e")
    t["slug"] = slug
    IMAGES[f"teacher-{slug}.webp"] = (t["image"], 640, 80)

total_in = total_out = 0
for out_name, (src_name, width, q) in IMAGES.items():
    src = SRC / src_name
    if not src.exists():
        print("MISSING:", src_name)
        continue
    im = Image.open(src)
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    dest = OUT / out_name
    if out_name.endswith(".png"):
        im.save(dest, optimize=True)
    else:
        im.convert("RGB").save(dest, "WEBP", quality=q, method=6)
    total_in += src.stat().st_size
    total_out += dest.stat().st_size

(ROOT / "data/teachers.json").write_text(json.dumps(teachers, indent=1, ensure_ascii=False), encoding="utf-8")
print(f"optimized {len(list(OUT.iterdir()))} files: {total_in/1e6:.1f} MB -> {total_out/1e6:.1f} MB")
