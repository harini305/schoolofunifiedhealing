import Link from "next/link";
import PageHero from "@/components/PageHero";
import people from "@/data/teachers.json";
import { SITE } from "@/lib/content";

export const metadata = {
  title: "About Our Community",
  description: "Our mission, our founders and the 30 volunteer teachers behind the School Of Unified Healing in Ubud, Bali.",
};

export default function AboutPage() {
  const founders = people.filter((p) => p.founder);
  const teachers = people.filter((p) => !p.founder);

  return (
    <>
      <PageHero
        title="Community is at the heart of everything we do"
        intro="We believe that true healing happens when we come together, support one another, and grow as a collective."
      />

      <section className="section">
        <div className="container grid-2 welcome-split">
          <div data-reveal>
            <h2>Our mission, <span className="accent">our service</span></h2>
            <p>
              Our mission is to provide the space, resources and practices that facilitate personal
              growth and healing. We address the rising demand for accessible and consistent
              holistic health support, regardless of financial or economic status.
            </p>
            <p>
              Our goal is to educate individuals on the nature of healing and how integrating the
              dimensions of the self leads us to live fulfilling and healthy lives. All profit is
              reinvested back into the growth of our organisation and our social programs, and our
              aim is for our schools to become self-sustainable through the cafe, shop and resources.
            </p>
            <p>
              Empowering our community to inquire into the potential of their self and ignite their
              connection to their true nature creates the radical shift we wish to see in the world.
            </p>
          </div>
          <div className="overlap-pair" data-reveal>
            <div className="frame frame-arch img-hover photo-a">
              <img src="/images/community-circle.webp" alt="A community circle inside the shala" width="1400" height="933" />
            </div>
            <div className="frame img-hover photo-b">
              <img src="/images/community-meditation.webp" alt="Students in a guided meditation" width="1200" height="900" />
            </div>
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="container pin-split">
          <div className="pin-aside" data-reveal>
            <h2>The impact of our community</h2>
            <p>Our community is more than a gathering of individuals — it is a living, breathing network of souls on a journey toward healing and transformation.</p>
            <div className="frame frame-arch img-hover support-photo">
              <img src="/images/community-workshop.webp" alt="A creative community workshop at the school" width="1200" height="800" loading="lazy" />
            </div>
          </div>
          <div className="notice-list" data-reveal>
            <div className="notice"><h3>30 free classes each week</h3><p>Making healing accessible to all, every week of the year.</p></div>
            <div className="notice"><h3>A safe, sacred space</h3><p>For individuals to reconnect with themselves and find peace.</p></div>
            <div className="notice"><h3>Deep immersions and workshops</h3><p>Helping people awaken their inner power, heal past wounds and discover new paths forward.</p></div>
            <div className="notice"><h3>A platform for devotional service</h3><p>Our facilitators and volunteers share from a place of service, fostering the personal benefits of unconditional giving.</p></div>
            <div className="notice"><h3>Support for every journey</h3><p>A supportive, empowering environment where everyone is welcomed and encouraged to grow — free from judgment, with opportunities for growth, connection and like-minded friendship.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split-head" data-reveal>
            <h2>Meet our founders</h2>
            <p>They dedicated their lives to sharing truth, healing and the nature of how we embody the true spirit self.</p>
          </div>
          <div className="founder-grid" data-reveal>
            {founders.map((f) => (
              <article className="founder-card" key={f.name}>
                <div className="frame img-hover founder-photo">
                  <img src={`/images/teacher-${f.slug}.webp`} alt={f.name} width="640" height="800" loading="lazy" />
                </div>
                <div>
                  <h3>{f.name}</h3>
                  <p className="teacher-role">{f.role}</p>
                  <p className="small">{f.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="container">
          <div className="split-head" data-reveal>
            <h2>Meet our teachers</h2>
            <p>Each of our teachers volunteers their time for free every week. Together we stand committed to offering accessible and consistent healing practices to all our community.</p>
          </div>
          <div className="teacher-grid" data-reveal>
            {teachers.map((t) => (
              <article className="teacher-card" key={t.name}>
                <div className="teacher-photo">
                  <img src={`/images/teacher-${t.slug}.webp`} alt={t.name} width="640" height="736" loading="lazy" />
                </div>
                <div className="teacher-info">
                  <h3>{t.name}</h3>
                  <p className="teacher-role">{t.role}</p>
                  <details>
                    <summary>Read bio</summary>
                    <p className="bio">{t.bio}</p>
                  </details>
                  {t.contact ? (
                    <a className="teacher-contact" href={t.contact} target="_blank" rel="noopener noreferrer">
                      Contact {t.name.split(" ")[0]}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2 welcome-split">
          <div data-reveal>
            <h2>Teach with us &amp; <span className="accent">make a difference</span></h2>
            <p>
              The School of Unified Healing is more than a spiritual center; it is a living community
              where giving and receiving create a natural flow of healing. Join over 30 teachers who
              each give one class a week for free, and experience the abundance of gratitude and joy
              that devotional service creates.
            </p>
            <p>
              We provide a platform for teachers to meet, network, build community and develop their
              teachings in a caring and sensitive way. Please note we ask for a minimum of 2 months
              for you to volunteer with us.
            </p>
            <p>
              To find out about visas and further information, email our teacher coordinator Nuri at{" "}
              <a className="text-link" href={`mailto:${SITE.email}?subject=Teaching with the School Of Unified Healing`}>{SITE.email}</a>.
            </p>
          </div>
          <div className="frame frame-arch img-hover volunteer-photo" data-reveal>
            <img src="/images/teachers-group.webp" alt="The volunteer teachers of the School Of Unified Healing" width="1200" height="1600" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section gold-band fit-footer">
        <div className="container fit-body">
          <h2>Join our community</h2>
          <p style={{ maxWidth: "52ch" }}>
            A judgment-free, heart-centered environment where you can fully be yourself. Meet
            like-minded people, grow with our free classes and workshops, and find the support you
            need on your spiritual journey.
          </p>
          <div className="btn-row">
            <Link className="btn btn-dark" href="/enrollment" prefetch={false}>Join the school</Link>
            <Link className="btn btn-outline" href="/classes" prefetch={false}>See this week&apos;s classes</Link>
          </div>
        </div>
      </section>
    </>
  );
}
