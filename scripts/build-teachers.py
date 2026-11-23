#!/usr/bin/env python3
"""Generate data/teachers.json + events.json from Phase 1 extraction."""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data"

d = json.load(open(ROOT / "docs/source-audit/raw/extracted/about-the-founders.json", encoding="utf-8"))

TEACHERS = [
    ("Aviva Kovalenko", "IMG_6481.jpeg"),
    ("Loto Vazquez", "WhatsApp_Image_2024-11-15_at_10.59.00.jpeg"),
    ("Lisa Ascher", "WhatsApp_Image_2025-08-04_at_11.29.37.jpeg"),
    ("Zineb El Gharbaoui", "WhatsApp_Image_2025-11-12_at_20.05.59.jpeg"),
    ("Sea", "WhatsApp_Image_2025-11-04_at_11.40.37.jpeg"),
    ("Daria", "Daria.jpg"),
    ("Umut", "Umut.jpeg"),
    ("Adrian Bajenaru", "WhatsApp_Image_2026-03-24_at_16.58.33.jpeg"),
    ("I Made Suparta", "IMG_5863__281_29.jpg"),
    ("Kogie", "WhatsApp_Image_2026-06-04_at_12.30.55.jpeg"),
    ("Oksana St John", "Bali_Ubud_Oksana_profile_photo_00376.jpg"),
    ("Anna Burmistrova", "WhatsApp_Image_2025-06-13_at_12.01.07.jpg"),
    ("Tracey Jarvis", "WhatsApp_Image_2025-06-14_at_14.33.52.jpg"),
    ("Matt Laing", "WhatsApp_Image_2025-10-10_at_15.39.49.jpg"),
    ("Sophie Satori", "WhatsApp_Image_2026-08-14_at_09.06.31.jpeg"),
    ("Subba Sattvic", "Subba.jpeg"),
    ("Audilia Kanaan", "WhatsApp_Image_2025-07-27_at_10.44.12.jpeg"),
    ("Marnie Hodgson", "WhatsApp_Image_2026-08-09_at_07.51.29.jpg"),
    ("Scarlett", "WhatsApp_Image_2026-08-30_at_08.43.11.jpg"),
    ("Koné", "WhatsApp_Image_2026-09-07_at_15.24.57.jpeg"),
    ("Daniel Alchemy", "WhatsApp_Image_2026-05-26_at_11.37.53.jpeg"),
    ("Siddha Yogi Raj", "WhatsApp_Image_2026-05-10_at_10.38.31.jpeg"),
    ("Rutger", "WhatsApp_Image_2026-09-24_at_01.19.18.jpg"),
    ("Chie Miyagawa", "WhatsApp_Image_2026-10-08_at_10.29.42.jpeg"),
    ("Dave Pastanella", "WhatsApp_Image_2026-10-04_at_08.44.56__281_29.jpeg"),
    ("Eya Shaman", "WhatsApp_Image_2026-04-11_at_15.20.24.jpg"),
    ("Karina Loyko", "WhatsApp_Image_2026-10-11_at_12.04.11.jpeg"),
    ("Sandra Medina", "WhatsApp_Image_2026-10-18_at_08.57.52.jpeg"),
    ("Valeria Serafim", "WhatsApp_Image_2026-10-12_at_23.01.12.jpeg"),
]
FOUNDERS = [
    ("Kefah Bates", "Founder & Visionary", "WhatsApp_Image_2024-10-13_at_11.55.18.jpeg"),
    ("David Graham", "Co-Founder & Visionary", "WhatsApp_Image_2024-10-13_at_11.55.20.jpeg"),
]

blocks = d["text_blocks"]
contacts = {}
for e in d["external_links"]:
    m = re.match(r"Contact (\w+) Here", e["label"])
    if m:
        contacts[m.group(1).lower()] = e["href"]

def bio_for(name):
    first = name.split()[0]
    # combined block starts with the full name followed by bio text
    cands = [b for b in blocks if b.startswith(name + " ") and len(b) > len(name) + 20]
    if cands:
        return max(cands, key=len)[len(name):].strip()
    # single-name teachers like "Sea Sea is an artist..."
    for b in blocks:
        if b.startswith(first + " ") and len(b) > 60 and first.lower() in ("sea", "daria", "umut", "kog"):
            pass
    return ""

people = []
for name, role, img in FOUNDERS:
    bio = bio_for(name)
    people.append({"name": name, "role": role, "image": img, "bio": bio, "contact": None, "founder": True})
for name, img in TEACHERS:
    first = name.split()[0].lower()
    bio = bio_for(name)
    if not bio:
        # fallback: longest block that starts with first name + space
        first_name = name.split()[0]
        cands = [b for b in blocks if b.startswith(first_name + " ") and len(b) > 60]
        if cands:
            bio = max(cands, key=len)[len(first_name):].strip()
    people.append({"name": name, "role": "Volunteer Teacher", "image": img, "bio": bio,
                   "contact": contacts.get(first), "founder": False})

(OUT / "teachers.json").write_text(json.dumps(people, indent=1, ensure_ascii=False), encoding="utf-8")
missing = [p["name"] for p in people if not p["bio"]]
print("teachers:", len(people), "| missing bios:", missing)
print("no contact:", [p["name"] for p in people if not p["founder"] and not p["contact"]])
