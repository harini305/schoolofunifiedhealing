import Link from "next/link";
import Hero from "@/components/Hero";
import ScheduleTabs from "@/components/ScheduleTabs";
import { SITE, whatsappLink } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container grid-2 welcome-split">
          <div data-reveal>
            <h2>Connect. Transform. <span className="accent">Heal.</span></h2>
            <p>
              Community is at the heart of everything we do. We believe that true healing happens
              when we come together, support one another, and grow as a collective.
            </p>
            <p>
              Our mission is to provide the space, resources and practices that facilitate personal
              growth and healing — with over 30 teachers volunteering their time every week, so that
              healing stays accessible to everyone, regardless of financial means.
            </p>
            <div className="btn-row">
              <Link className="btn btn-dark" href="/about" prefetch={false}>Our mission</Link>
            </div>
          </div>
          <div className="overlap-pair" data-reveal>
            <div className="frame frame-arch img-hover photo-a">
              <img src="/images/shala-sound-healing.webp" alt="A sound healing session with singing bowls inside the shala" width="1227" height="818" />
            </div>
            <div className="frame img-hover photo-b">
              <img src="/images/students-group.webp" alt="Students gathered after a community class" width="677" height="508" />
            </div>
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="container">
          <div className="split-head" data-reveal>
            <h2>How to join our class program</h2>
            <p>Unlimited access, real impact. One enrollment supports the whole school.</p>
          </div>
          <div className="steps" data-reveal>
            <div className="step">
              <h3>Try a free Day Pass</h3>
              <p>New student? Enjoy a complimentary Day Pass to our community classes before you enroll.</p>
            </div>
            <div className="step">
              <h3>Enroll once</h3>
              <p>A small one-time registration fee sustains our non-profit school — keeping it operational, paying our staff and maintaining the shala.</p>
            </div>
            <div className="step">
              <h3>Join 30+ classes a week, free</h3>
              <p>Once enrolled there are no class tuition fees. Try as many classes as you want, with no further payment. Enrollment is free for our Balinese community.</p>
            </div>
          </div>
          <div className="btn-row" style={{ marginTop: 22 }} data-reveal>
            <Link className="btn btn-gold" href="/enrollment" prefetch={false}>See enrollment options</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split-head" data-reveal>
            <h2>This week&apos;s schedule</h2>
            <p>Choose a day to see every class, its time and its teacher. All community classes are free after enrollment.</p>
          </div>
          <ScheduleTabs />
        </div>
      </section>

      <section className="section cream">
        <div className="container grid-2">
          <div data-reveal>
            <h2>Good to know before class</h2>
            <p>
              We are in the heart of the rice fields, with only scooter access or a short walk from
              the main road. Leave plenty of time to find us on your first visit.
            </p>
            <div className="btn-row">
              <a className="btn btn-outline" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
            </div>
          </div>
          <div className="notice-list" data-reveal>
            <div className="notice">
              <h3>Enrolling</h3>
              <p>If you are new to the school, please enroll no less than 30 minutes before joining a class.</p>
            </div>
            <div className="notice">
              <h3>Signing in</h3>
              <p>Sign-in starts 15 minutes before class. Please arrive early or on time — strictly no entrance 10 minutes after the class has started.</p>
            </div>
            <div className="notice">
              <h3>Directions</h3>
              <p>Scooter or walking access only through the rice fields. Watch our community videos on YouTube for a feel of the school.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section gold-band">
        <div className="container mission-band" data-reveal>
          <h2>We are founded upon non-profit spiritual values, driven by the belief that true healing comes from giving and receiving with an open heart.</h2>
          <div className="mission-points">
            <p>We have built a vibrant community of 30-plus teachers who volunteer their time for free to serve others every week.</p>
            <p>Thousands of people have accessed transformative healing experiences, many of whom would not have had the financial means to do so elsewhere.</p>
            <p>We have created a safe, sacred space where individuals can reconnect with themselves, overcome past blocks and discover new paths forward.</p>
          </div>
          <div className="btn-row">
            <Link className="btn btn-dark" href="/about" prefetch={false}>About our community</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container pin-split">
          <div className="pin-aside" data-reveal>
            <h2>Support our mission</h2>
            <p>
              Every contribution keeps our free classes running and allows us to offer healing to
              all. There are many ways you can support our school.
            </p>
            <div className="frame frame-arch img-hover support-photo">
              <img src="/images/ricefield-fire-circle.webp" alt="The fire circle among the rice fields of the school" width="1400" height="933" loading="lazy" />
            </div>
          </div>
          <div className="support-list" data-reveal>
            <div className="support-item">
              <h3>Donate</h3>
              <p>Your contributions directly sustain our ability to offer free classes, events and healing spaces for the community.</p>
              <a className="btn btn-gold" href={SITE.donateUrl} target="_blank" rel="noopener noreferrer">Donate on GoFundMe</a>
            </div>
            <div className="support-item">
              <h3>Dine &amp; support</h3>
              <p>Every meal at our Sunset Restaurant nourishes you and supports our staff and the school.</p>
              <Link className="text-link" href="/contact" prefetch={false}>See the restaurant menu</Link>
            </div>
            <div className="support-item">
              <h3>Shop &amp; support</h3>
              <p>Purchases from our healing shop support local artisans and the school&apos;s mission.</p>
              <Link className="text-link" href="/contact" prefetch={false}>Visit the shop</Link>
            </div>
            <div className="support-item">
              <h3>Give your time</h3>
              <p>Can you give one class a week? Sharing your time and talent helps us thrive.</p>
              <Link className="text-link" href="/about" prefetch={false}>Teach with us</Link>
            </div>
            <div className="support-item">
              <h3>Spread the word</h3>
              <p>Share our work with friends and on social media, or pass on the gift of healing by sharing your gratitude with another.</p>
              <a className="text-link" href={SITE.reviewsUrl} target="_blank" rel="noopener noreferrer">Write a review</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="container">
          <div className="split-head" data-reveal>
            <h2>When the heart of our community speaks</h2>
            <a className="text-link" href={SITE.reviewsUrl} target="_blank" rel="noopener noreferrer">How was your experience? Write a review</a>
          </div>
          <div className="grid-3" data-reveal>
            <div className="quote-card">
              <blockquote>“If youre looking to work on yourself, meet other like minded souls, eat delicious food whilst being surrounded by nature... This is the perfect spot! Great staff, great vibes and great energy!”</blockquote>
              <cite>Robert</cite>
            </div>
            <div className="quote-card">
              <blockquote>“A heavenly place. A must visit if you are in the area and want to heal and nurture your body and soul. They have a class for everyone, and most of them are donation based.”</blockquote>
              <cite>Andrés</cite>
            </div>
            <div className="quote-card">
              <blockquote>“Everyone needs to experience the classes at this place &amp; this community once in their lives. The instructors are professionals so they guide you in the class and make sure you feel comfortable, trying to create a safe zone for attendees.”</blockquote>
              <cite>Ahsen</cite>
            </div>
          </div>
        </div>
      </section>

      <section className="section closing fit-footer">
        <div className="closing-bg">
          <img src="/images/mandala-sunset.webp" alt="" loading="lazy" />
        </div>
        <div className="container fit-body">
          <h2>Unlimited access, real impact.</h2>
          <p>
            Start your healing journey today. Try a complimentary Day Pass, enroll once, and join a
            community built on giving and receiving with an open heart.
          </p>
          <div className="btn-row">
            <Link className="btn btn-gold" href="/enrollment" prefetch={false}>Join the school</Link>
            <a className="btn btn-outline-light" href={whatsappLink("Hello School Of Unified Healing, I would like to visit and try a Day Pass.")} target="_blank" rel="noopener noreferrer">Ask about a Day Pass</a>
          </div>
        </div>
      </section>
    </>
  );
}
