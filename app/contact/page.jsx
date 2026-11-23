import Link from "next/link";
import menu from "@/data/menu.json";
import { SITE, whatsappLink } from "@/lib/content";

export const metadata = {
  title: "Contact & Visit",
  description: "Find the School Of Unified Healing in the rice fields of Ubud, Bali. Contact details, venue hire, the Sunset Restaurant menu, fire circle and healing shop.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section contact-top">
        <div className="container pin-split">
          <div className="pin-aside" data-reveal>
            <h1>Contact us</h1>
            <p>
              We would love to hear from you — whether you are planning your first visit, asking
              about classes, or hiring our space.
            </p>
            <div className="contact-cards">
              <a className="contact-card" href={`mailto:${SITE.email}`}>
                <strong>Email</strong>
                <span>{SITE.email}</span>
              </a>
              <a className="contact-card" href={whatsappLink("Hello School Of Unified Healing")} target="_blank" rel="noopener noreferrer">
                <strong>WhatsApp</strong>
                <span>{SITE.whatsappDisplay}</span>
              </a>
              <a className="contact-card" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
                <strong>Location</strong>
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
          <div data-reveal>
            <h2>In the heart of the rice fields</h2>
            <p>
              Our space is nestled in the middle of vibrant rice fields, offering the ultimate
              connection to nature. We are accessible by scooter or by walking from the main road —
              leave plenty of time to find us on your first visit.
            </p>
            <div className="frame frame-arch img-hover visit-photo">
              <img src="/images/terrace-ricefields.webp" alt="Relaxing on the terrace overlooking the rice fields" width="1400" height="1264" />
            </div>
            <div className="venue-note">
              <h3>Hire the Anahata Shala</h3>
              <p>
                A sanctuary space for healing and connection. Our beautiful Anahata Shala is infused
                with the energy of the heart chakra — a serene, welcoming environment for yoga,
                meditation, workshops and events.
              </p>
              <p>
                The shala is available for hire during evenings after 5.30pm until late. You can
                complement your event with a special vegan/vegetarian all-you-can-eat buffet.
              </p>
              <a className="btn btn-dark" href={whatsappLink("Hello School Of Unified Healing, I would like to enquire about hiring the Anahata Shala.")} target="_blank" rel="noopener noreferrer">
                Enquire about venue hire
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="container grid-2 welcome-split">
          <div className="frame frame-arch img-hover restaurant-photo" data-reveal>
            <img src="/images/restaurant-view.webp" alt="The Sunset Restaurant overlooking the rice fields" width="1000" height="1266" loading="lazy" />
          </div>
          <div data-reveal>
            <h2>Sunset Restaurant</h2>
            <p>
              Nourishment for the soul. Our restaurant offers a carefully curated selection of
              healing vegan and vegetarian foods, using fresh, organic ingredients that promote
              health and vitality. We proudly support local farmers.
            </p>
            <p>
              Whether you are enjoying a post-class meal or soaking in the beautiful surroundings,
              every dish is a celebration of nature&apos;s gifts. Every meal also supports our staff
              and keeps the school vibrant.
            </p>
            <div className="frame img-hover restaurant-food">
              <img src="/images/restaurant-food.webp" alt="A smoothie bowl and coffee at the Sunset Restaurant" width="1000" height="1266" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: 28 }} data-reveal>
          <h3>Our healing vegan &amp; vegetarian menu</h3>
          <div className="menu-cats">
            {menu.categories.map((cat) => (
              <div className="menu-cat" key={cat.name}>
                <h3>{cat.name}</h3>
                {cat.items.map((item) => (
                  <div className="menu-item" key={item.name}>
                    <div>
                      <div className="menu-name">{item.name}</div>
                      {item.desc ? <div className="menu-desc">{item.desc}</div> : null}
                    </div>
                    <div className="menu-price">{item.price}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="small muted" style={{ marginTop: 14 }}>{menu.taxNote}</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div data-reveal>
            <h2>Our fire circle</h2>
            <h3>A place of transformation</h3>
            <p>
              Hire our fire circle for your gathering, where warmth and wisdom come together.
              Whether during evening events or spontaneous community gatherings, the fire serves as
              a sacred space for sharing, releasing and connecting.
            </p>
            <div className="frame img-hover small-photo">
              <img src="/images/fire-circle-night.webp" alt="A ceremony around the fire circle at night" width="1000" height="1266" loading="lazy" />
            </div>
          </div>
          <div data-reveal>
            <h2>Our healing shop</h2>
            <h3>Products for mind, body and spirit</h3>
            <p>
              A carefully selected range of products to support your journey toward wellness — from
              handcrafted crystals and healing tools to locally made wellness products, each item
              supporting local artisans and the school.
            </p>
            <div className="frame img-hover small-photo">
              <img src="/images/healing-shop.webp" alt="Locally made soaps in the healing shop" width="1200" height="900" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section gold-band fit-footer">
        <div className="container fit-body">
          <h2>Come experience the harmony of our space</h2>
          <p style={{ maxWidth: "50ch" }}>
            Where healing, nourishment and nature unite to create a sanctuary for transformation.
            We look forward to welcoming you.
          </p>
          <div className="btn-row">
            <Link className="btn btn-dark" href="/enrollment" prefetch={false}>Join the school</Link>
            <a className="btn btn-outline" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
          </div>
        </div>
      </section>
    </>
  );
}
