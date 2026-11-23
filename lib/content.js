export const SITE = {
  name: "School Of Unified Healing",
  email: "heartofsouh@gmail.com",
  whatsappNumber: "6281330900052",
  whatsappDisplay: "+62 813 3090 0052",
  location: "Ubud, Bali — in the heart of the rice fields",
  mapsUrl: "https://maps.app.goo.gl/W8Wdj2dyYctzAQYC9",
  donateUrl: "https://www.gofundme.com/f/help-us-strengthen-expand-our-community-offerings",
  instagramUrl: "https://www.instagram.com/unifiedhealingbali",
  facebookUrl: "https://www.facebook.com/p/Unified-Healing-Bali-61553035089627/",
  youtubeUrl: "https://www.youtube.com/@UnifiedHealingBali",
  reviewsUrl: "https://g.page/r/Cc2WJv5x9_aFEAE/review",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/events", label: "Events & Trainings" },
  { href: "/enrollment", label: "Enrollment" },
  { href: "/contact", label: "Contact & Visit" },
];

export function whatsappLink(message) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
