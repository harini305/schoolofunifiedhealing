"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const footer = document.querySelector(".site-footer");
    const setFooterH = () => {
      if (footer) {
        document.documentElement.style.setProperty("--footer-h", `${footer.offsetHeight}px`);
      }
    };
    setFooterH();
    window.addEventListener("resize", setFooterH);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (!reduceMotion) {
        const items = gsap.utils.toArray("[data-reveal]");
        items.forEach((el) => {
          gsap.from(el, {
            y: 26,
            opacity: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });
        // failsafe: nothing may stay invisible
        const failsafe = window.setTimeout(() => {
          gsap.set("[data-reveal]", { clearProps: "opacity,transform" });
        }, 4000);
        return () => window.clearTimeout(failsafe);
      }
    });

    return () => {
      ctx.revert();
      window.removeEventListener("resize", setFooterH);
    };
  }, [pathname]);

  return null;
}
