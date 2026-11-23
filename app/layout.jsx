import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollEffects from "@/components/ScrollEffects";

const alice = localFont({
  src: "../public/fonts/alice-latin.woff2",
  weight: "400",
  variable: "--font-alice",
  display: "swap",
});

const almarai = localFont({
  src: [
    { path: "../public/fonts/almarai-400.woff2", weight: "400" },
    { path: "../public/fonts/almarai-700.woff2", weight: "700" },
  ],
  variable: "--font-almarai",
  display: "swap",
});

export const metadata = {
  title: {
    default: "School Of Unified Healing — Ubud, Bali",
    template: "%s | School Of Unified Healing",
  },
  description:
    "A non-profit spiritual healing school in the rice fields of Ubud, Bali. Over 30 free community classes every week, deep immersion events, trainings, venue hire and a healing vegan restaurant.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${alice.variable} ${almarai.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ScrollEffects />
      </body>
    </html>
  );
}
