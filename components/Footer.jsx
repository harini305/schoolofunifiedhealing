import Link from "next/link";
import { NAV, SITE, whatsappLink } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/images/emblem.png" alt="School Of Unified Healing lotus emblem" width="52" height="52" />
          <div>
            <strong>School Of Unified Healing</strong>
            <p>A non-profit spiritual school in the rice fields of Ubud, Bali.</p>
          </div>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} prefetch={false}>
              {item.label}
            </Link>
          ))}
          <a href={SITE.donateUrl} target="_blank" rel="noopener noreferrer">Donate</a>
          <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">Google Maps</a>
        </nav>
        <div className="footer-contact">
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={whatsappLink("Hello School Of Unified Healing")} target="_blank" rel="noopener noreferrer">
            WhatsApp {SITE.whatsappDisplay}
          </a>
          <div className="footer-social">
            <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href={SITE.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H16.8V4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9V10H8v3h2.7v8h2.8z" />
              </svg>
            </a>
            <a href={SITE.youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2C2 8.9 2 12 2 12s0 3.1.4 4.8a2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.2V8.8L15.5 12 10 15.2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-base">
        <span>© {new Date().getFullYear()} School Of Unified Healing</span>
        <span>Connect. Transform. Heal.</span>
      </div>
    </footer>
  );
}
