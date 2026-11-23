import Link from "next/link";
import PageHero from "@/components/PageHero";
import EnrollmentForm from "@/components/EnrollmentForm";

export const metadata = {
  title: "Enrollment",
  description: "Join the School Of Unified Healing: try a free Day Pass, enroll once and access over 30 community classes every week for free in Ubud, Bali.",
};

const PRICES = [
  { name: "Day Pass", price: "Free*", note: "For new students only", items: ["Try our community classes before you enroll", "Meet the teachers and the community", "No commitment"] },
  { name: "1 Week", price: "IDR 200,000", note: "One-time enrollment", items: ["Unlimited classes for your stay", "Over 30 classes every week", "No class tuition fees after enrolling"], featured: false },
  { name: "2 Months", price: "IDR 300,000", note: "One-time enrollment", items: ["Two months of unlimited classes", "Over 30 classes every week", "Supports our non-profit school"], featured: true },
  { name: "6 Months", price: "IDR 800,000", note: "One-time enrollment", items: ["Six months of unlimited classes", "Over 30 classes every week", "The deepest way to support the school"], featured: false },
];

export default function EnrollmentPage() {
  return (
    <>
      <PageHero
        title="Join the School Of Unified Healing"
        intro="Your path to inner growth begins with one step. Enroll once and gain unlimited access to our community classes — your contribution sustains our non-profit school."
      />

      <section className="section">
        <div className="container">
          <div className="price-grid" data-reveal>
            {PRICES.map((p) => (
              <div className={`price-card${p.featured ? " featured" : ""}`} key={p.name}>
                <h3>{p.name}</h3>
                <div className="price">{p.price}</div>
                <div className="price-note">{p.note}</div>
                <ul>
                  {p.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="small muted" style={{ marginTop: 16 }} data-reveal>
            *Applicable for new students only. Enrollment is free for our Balinese community.
          </p>
          <div className="enroll-fund" data-reveal>
            <h3>Where your contribution goes</h3>
            <p>
              Our enrollment fee is a sacred energy exchange: a not-for-profit model where 100% of
              profit is reinvested into school projects. This fund directly sustains:
            </p>
            <ul>
              <li>Keeping our school operational</li>
              <li>Salaries for our dedicated team of staff</li>
              <li>Purchasing and maintaining essential shala equipment</li>
              <li>Maintenance and running costs of the building and grounds</li>
              <li>Educational resources for healing and empowerment</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="container">
          <div className="split-head" data-reveal>
            <h2>How it works</h2>
            <p>A simple one-time enrollment when you arrive at the school.</p>
          </div>
          <div className="steps" data-reveal>
            <div className="step">
              <h3>When you arrive</h3>
              <p>Let our friendly staff know you would like to enroll. If you have not enrolled yet, please arrive at least 30 minutes before joining a class.</p>
            </div>
            <div className="step">
              <h3>Choose your level</h3>
              <p>Choose the enrollment level that suits your stay. Your contribution supports a model that prioritizes service over profit, with all proceeds reinvested into community programs and future schools.</p>
            </div>
            <div className="step">
              <h3>Receive your welcome email</h3>
              <p>Your unlimited healing journey starts now. Access over 30 classes a week — and once enrolled you can pre-book classes online, with access to our booking system given on enrollment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container pin-split">
          <div className="pin-aside" data-reveal>
            <h2>Student enrollment form</h2>
            <p>All sections marked * must be filled. Thank you — we warmly welcome you to our heart-centered community.</p>
            <div className="enroll-aside-media">
              <div className="frame frame-oval img-hover enroll-aside-main">
                <img src="/images/hero-shala-circle.webp" alt="Students seated in a circle inside the shala" width="1200" height="800" loading="lazy" />
              </div>
              <div className="enroll-process">
                <strong>After you submit</strong>
                <p>Your email app opens with the completed enrollment. Review the details and press send to finish.</p>
              </div>
              <div className="frame frame-rect img-hover enroll-aside-secondary">
                <img src="/images/shala-yoga-class.webp" alt="A community yoga class inside the shala" width="1400" height="933" loading="lazy" />
              </div>
            </div>
          </div>
          <div data-reveal>
            <EnrollmentForm />
          </div>
        </div>
      </section>

      <section className="section gold-band fit-footer">
        <div className="container fit-body">
          <h2>Your unlimited healing journey starts now</h2>
          <p style={{ maxWidth: "50ch" }}>
            Not sure yet? Come and try a complimentary Day Pass first — meet the teachers, feel the
            space, and join a class before you decide.
          </p>
          <div className="btn-row">
            <Link className="btn btn-dark" href="/classes" prefetch={false}>See this week&apos;s schedule</Link>
            <Link className="btn btn-outline" href="/contact" prefetch={false}>Plan your visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
