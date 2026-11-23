import Link from "next/link";
import PageHero from "@/components/PageHero";
import events from "@/data/events.json";

export const metadata = {
  title: "Deep Immersions, Events & Trainings",
  description: "Deep immersion workshops, full moon gatherings and multi-day trainings at the School Of Unified Healing in Ubud, Bali.",
};

const TRAINING = {
  name: "Creating Sacred Vibrational Architecture",
  facilitator: "Lisa Ascher",
  date: "Sunday – Tuesday, 29th November – 1st December",
  time: "18.00–20.00",
  price: "IDR 3.5 million",
  booking: "https://megatix.co.id/events/creating-sacred-vibrational-architecture",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Deep immersions & events"
        intro="Longer, carefully held journeys into breath, movement, ceremony and self-inquiry — plus multi-day trainings with our senior facilitators."
      />

      <section className="section">
        <div className="container events-list">
          {events.map((e) => (
            <article className="event-card" key={e.id} data-reveal>
              <div className="event-poster">
                <img src={`/images/${posterFile(e.poster)}`} alt={`${e.name} event poster`} loading="lazy" />
              </div>
              <div className="event-body">
                <h2>{e.name}</h2>
                <div className="event-meta">
                  <span>{e.date}</span>
                  <span>{e.time}</span>
                  <span>{e.price || "Price via booking link"}</span>
                </div>
                <p>{e.description}</p>
                {e.facilitator ? <p className="small muted">Facilitated by {e.facilitator}</p> : null}
                {e.flow ? (
                  <details>
                    <summary>Event flow</summary>
                    <ul className="small" style={{ marginTop: 10, display: "grid", gap: 6 }}>
                      {e.flow.map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  </details>
                ) : null}
                <details>
                  <summary>Good to know</summary>
                  <ul className="small" style={{ marginTop: 10, display: "grid", gap: 8 }}>
                    {e.notes.map((n) => <li key={n}>{n}</li>)}
                  </ul>
                </details>
                <div className="btn-row" style={{ marginTop: 18 }}>
                  <a className="btn btn-dark" href={e.booking} target="_blank" rel="noopener noreferrer">
                    Book on Megatix
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section cream">
        <div className="container">
          <div className="split-head" data-reveal>
            <h2>Trainings</h2>
            <p>Multi-day programmes for deeper study. Every body and every level of experience is welcome.</p>
          </div>
          <article className="event-card training-card" data-reveal>
            <div className="event-poster">
              <img src="/images/training-lisa.webp" alt="Creating Sacred Vibrational Architecture training with Lisa Ascher" loading="lazy" />
            </div>
            <div className="event-body">
              <h3>{TRAINING.name}</h3>
              <div className="event-meta">
                <span>{TRAINING.date}</span>
                <span>{TRAINING.time}</span>
                <span>{TRAINING.price}</span>
              </div>
              <p>
                This training offers practical tools to create, inhabit and stabilize a sacred space —
                within yourself and around you. Explore the foundations of sacred space through the
                Medicine Wheel, moon cycles and grounding; develop your inner architecture through deep
                listening, classical Hatha yoga and pranayama; and discover energetic anatomy, the yoga
                of sound and vibration as tools for maintaining clarity, integrity and presence.
              </p>
              <p className="small muted">Facilitated by {TRAINING.facilitator}, shamanic and quantum healing practitioner, yoga and freediving instructor.</p>
              <details>
                <summary>Learning outcomes</summary>
                <ul className="small" style={{ marginTop: 10, display: "grid", gap: 6 }}>
                  <li>Create and intentionally structure a sacred space</li>
                  <li>Ground and stabilize yourself</li>
                  <li>Listen deeply and cultivate presence</li>
                  <li>Tools that help calm and stabilize the mind</li>
                  <li>Tools for energetic ecology</li>
                </ul>
              </details>
              <details>
                <summary>Training structure</summary>
                <ul className="small" style={{ marginTop: 10, display: "grid", gap: 8 }}>
                  <li><strong>Day 1 — The Sacred Dimension:</strong> what makes a space sacred, and how to consciously create an environment that supports presence, healing and transformation.</li>
                  <li><strong>Day 2 — Becoming the Pillar:</strong> the architecture within — presence, deep listening, grounding and awareness, with meditation and conscious movement.</li>
                  <li><strong>Day 3 — Energetic Integrity &amp; Ecology:</strong> energetic anatomy, the yoga of sound, and cultivating presence through sound and vibration.</li>
                </ul>
              </details>
              <p className="small" style={{ marginTop: 12 }}>
                Follow-up support: Q&amp;A available for 1 month. This module can be credited toward the full vibration medicine mastery program.
              </p>
              <div className="btn-row" style={{ marginTop: 18 }}>
                <a className="btn btn-dark" href={TRAINING.booking} target="_blank" rel="noopener noreferrer">
                  Discover the training on Megatix
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section closing fit-footer">
        <div className="closing-bg">
          <img src="/images/mandala-meditation.webp" alt="" loading="lazy" />
        </div>
        <div className="container fit-body">
          <h2>Come as you are</h2>
          <p>No choreography, no performance, no judgment. Just an invitation to slow down, listen inward and gather in ceremony with our community.</p>
          <div className="btn-row">
            <a className="btn btn-gold" href="/classes" prefetch={false}>Join a weekly class first</a>
          </div>
        </div>
      </section>
    </>
  );
}

function posterFile(poster) {
  const map = {
    "Option_1.1__282_29.png": "event-full-moon.webp",
    "daniel_-_fri_27.png": "event-ikigai.webp",
    "dave-_sat_28.png": "event-ecstatic-breathwork.webp",
    "eya-_dec_5__283_29.png": "event-dvara.webp",
    "eya-_dec_5__281_29__281_29.png": "event-sensual-dance.webp",
  };
  return map[poster];
}
