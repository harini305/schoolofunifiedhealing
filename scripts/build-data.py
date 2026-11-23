#!/usr/bin/env python3
"""Build app data files from the Phase 1 extraction + poster transcription."""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
tb = json.load(open(ROOT / "docs/source-audit/raw/extracted/classes.json", encoding="utf-8"))["text_blocks"]
OUT = ROOT / "data"
OUT.mkdir(exist_ok=True)

def split_desc(idx):
    raw = tb[idx]
    raw = re.sub(r"^Description\s+", "", raw).strip()
    # fix the known template leftover in the Yin text (documented in audit 08)
    raw = raw.replace("adaptations for your practice.escription goes here", "adaptations for your practice.")
    benefits, avoid = "", ""
    m = re.search(r"\bWho [Ss]hould [Aa]void", raw)
    if m:
        avoid = raw[m.start():].strip()
        raw = raw[:m.start()].strip()
    b = re.search(r"\bBenefits:\s*", raw)
    if b:
        benefits = raw[b.start():].strip()
        raw = raw[:b.start()].strip()
    # cooking class uses "Who should avoid eating"
    return {"description": raw, "benefits": benefits, "avoid": avoid}

# id, day, name, teacher, time, tagline (from poster), text-block index
CLASSES = [
    ("hatha-yoga", "Monday", "Hatha Yoga", "Oksana", "08.00–09.15", "Asana, pranayama, meditation and embodied awareness", 1),
    ("om-chanting", "Monday", "Om Chanting", "Shevaun", "10.00–11.15", "The transformational power of Om to activate self-healing", 6),
    ("singing-bowls", "Monday", "Singing Bowls", "Artem", "12.00–13.15", "Connect with your higher self and divine light through sound", 11),
    ("heading-back-home", "Monday", "Heading Back Home", "Valeria", "14.00–15.15", "A journey through yoga and Ayurveda", 15),
    ("sensual-healing-dance", "Monday", "Sensual Healing Dance", "Eya", "16.00–17.15", "An immersive journey honouring the sacral chakra", 29),
    ("rooted-balance-flow", "Tuesday", "Rooted Balance Flow", "Chie", "08.00–09.15", "A mindful Vinyasa flow", 34),
    ("ikigai", "Tuesday", "Ikigai — Find Your Life Purpose", "Daniel", "10.00–11.15", "A path to clarity and meaningful work", 38),
    ("shamanic-drum", "Tuesday", "Tantric Connection & Shamanic Drum Journey", "Sandra", "12.00–13.15", "Reconnect with your heart and journey beyond the mind", 45),
    ("freedom-hacking", "Tuesday", "The Freedom Hacking Method", "Loto", "14.00–15.15 (every 2 weeks)", "Four hacks with four stories, from monk to philanthropist", 53),
    ("yoga-ecstatic-dance", "Wednesday", "From Yoga to Ecstatic Dance", "Helena", "08.00–09.15", "An embodied journey through breath, awareness and movement", 58),
    ("conscious-relationship", "Wednesday", "Conscious Relationship", "Avi", "10.00–11.15", "Why we struggle in love — and how awareness changes everything", 67),
    ("ancestral-womb", "Wednesday", "The Ancestral Womb", "Zineb", "12.00–13.15", "A lineage of creation", 70),
    ("breath-work-sea", "Wednesday", "Breath-Work", "Sea", "14.00–15.15", "Feel alive again", 76),
    ("yin-wed", "Wednesday", "Yin — Surrender & Soften", "Sophie", "16.00–17.15", "Slow down, soften and turn inward", 80),
    ("kundalini-crystal", "Thursday", "Kundalini Yoga & Crystal Sound Healing", "Tracey", "08.00–09.15", "Kundalini yoga, sacred mantra and crystal bowl sound healing", 85),
    ("ancestral-healing", "Thursday", "Ancestral Healing", "Laura", "10.00–11.15", "A Family Constellations experience", 89),
    ("somatic-shaking", "Thursday", "Nervous System Rewire Through Somatic Shaking", "Adrian", "12.00–13.15", "Your body already has the blueprint", 93),
    ("kundalini-dance", "Thursday", "Kundalini Dance", "Audilia", "16.00–17.15", "An alchemical dance journey through the seven chakras, with a live DJ set", 100),
    ("cooking-class", "Thursday", "Cooking Class — Dadar Gulung", "Ketut", "18.00–finish", "The Indonesian coconut pancake", 114),
    ("joyful-living", "Friday", "Joyful Living Yoga", "Made", "08.00–09.15", "Laughter yoga — instantly lowers cortisol and calms the nervous system", 119),
    ("kundalini-7-chakras", "Friday", "Kundalini Yoga for the 7 Chakras", "Karina", "10.00–11.15", "Asanas, meditation, pranayam and mantra", 123),
    ("survival-to-soul", "Friday", "Survival to Soul", "Charlotte", "12.00–13.15", "Kundalini activation and quantum energy healing", 127),
    ("breathwork-dave", "Friday", "Breathwork — A Journey Back to Yourself", "Dave", "17.00–18.15", "A 75-minute experiential breathwork journey", 107),
    ("power-yoga", "Saturday", "Power Yoga", "Marnie", "08.00–10.15", "A dynamic, Vinyasa-style yoga practice", 137),
    ("tantric-meditation", "Saturday", "Tantric Meditation", "Aviva", "10.00–11.15", "Presence, mantra, breath and moments for inner inquiry", 141),
    ("astrology", "Saturday", "Astrology & Archetypes", "Umut", "12.00–13.15", "A meditative journey through creation", 146),
    ("conscious-conversations", "Saturday", "Conscious Conversations — NOMOS: Are We Aligned?", "Anne", "15.00–16.00", "A free NOMOS compatibility experience in Ubud", 152),
    ("yin-sat", "Saturday", "Yin — Surrender & Soften", "Sophie", "17.00–18.15", "Slow down, soften and turn inward", 80),
    ("vinyasa-kundalini-sun", "Sunday", "Vinyasa & Kundalini Yoga for the 7 Chakras", "Karina", "08.00–09.15", "Asanas, meditation, pranayam and mantra", 123),
    ("somatic-journey", "Sunday", "A Somatic Journey", "Anna", "10.00–11.15", "Coming home to the living body", 162),
    ("family-constellations", "Sunday", "Family Constellations", "Rutger", "12.00–13.15", "Explore the deeper layers behind our emotions", 168),
    ("joyful-living-sun", "Sunday", "Joyful Living Yoga", "Made", "14.00–15.15", "Laughter yoga — instantly lowers cortisol and calms the nervous system", 119),
    ("heading-back-home-sun", "Sunday", "Heading Back Home", "Valeria", "16.00–17.15", "A journey through yoga and Ayurveda", 15),
]

classes = []
for cid, day, name, teacher, time, tagline, idx in CLASSES:
    parts = split_desc(idx)
    classes.append({"id": cid, "day": day, "name": name, "teacher": teacher,
                    "time": time, "tagline": tagline, **parts})

(OUT / "classes.json").write_text(json.dumps(classes, indent=1, ensure_ascii=False), encoding="utf-8")
print("classes:", len(classes))
empty = [c["id"] for c in classes if not c["description"]]
print("missing descriptions:", empty)
noavoid = [c["id"] for c in classes if not c["avoid"]]
print("no avoid-note:", noavoid)
