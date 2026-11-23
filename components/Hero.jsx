"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const SLIDES = [
  { src: "/images/hero-school.webp", alt: "The School Of Unified Healing shala among the rice fields of Ubud", position: "center 40%" },
  { src: "/images/hero-shala-circle.webp", alt: "Students gathered in a healing circle inside the Anahata Shala", position: "center 60%" },
  { src: "/images/hero-fire-circle.webp", alt: "A community gathering around the fire circle at sunset", position: "center 45%" },
];

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const frames = gsap.utils.toArray(".hero-frame", root.current);
      if (reduceMotion || frames.length < 2) {
        gsap.set(frames, { opacity: 0 });
        gsap.set(frames[0], { opacity: 1 });
        return;
      }
      gsap.set(frames, { opacity: 0 });
      gsap.set(frames[0], { opacity: 1 });
      // one wrapper per frame is zoomed; crossfades use opacity only
      frames.forEach((frame, i) => {
        gsap.fromTo(frame.querySelector(".hero-zoom"),
          { scale: 1 },
          { scale: 1.04, duration: 10, ease: "sine.inOut", delay: i * 6, force3D: true });
      });
      const tl = gsap.timeline({ repeat: -1 });
      for (let i = 0; i < frames.length; i++) {
        const next = (i + 1) % frames.length;
        tl.to(frames[next], { opacity: 1, duration: 1.6, ease: "sine.inOut" }, i * 6 + 4.4)
          .to(frames[i], { opacity: 0, duration: 1.6, ease: "sine.inOut" }, i * 6 + 4.4);
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="home-hero" ref={root}>
      <div className="hero-media" aria-hidden="true">
        {SLIDES.map((slide) => (
          <div className="hero-frame" key={slide.src}>
            <div className="hero-zoom">
              <img src={slide.src} alt="" style={{ objectPosition: slide.position }} fetchPriority="high" />
            </div>
          </div>
        ))}
        <div className="hero-shade" />
      </div>
      <div className="hero-content container">
        <h1>Join our sacred space of transformative healing</h1>
        <p>
          A non-profit spiritual school in the rice fields of Ubud, Bali. Over 30 community
          classes every week, deep immersions, trainings and a community that welcomes everyone.
        </p>
        <div className="btn-row">
          <Link className="btn btn-gold" href="/enrollment" prefetch={false}>Join the school</Link>
          <Link className="btn btn-outline-light" href="/classes" prefetch={false}>Explore classes</Link>
        </div>
      </div>
      <div className="hero-facts container">
        <div className="fact-line">
          <span><i />30+ free classes weekly after enrollment</span>
          <span><i />30 volunteer teachers</span>
          <span><i />Non-profit, community-run</span>
        </div>
      </div>
    </section>
  );
}
