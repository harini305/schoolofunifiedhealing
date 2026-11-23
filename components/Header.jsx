"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [tucked, setTucked] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector(".site-footer");
    if (!footer) return;
    const io = new IntersectionObserver(
      ([entry]) => setTucked(entry.isIntersecting),
      { rootMargin: `-${84}px 0px 0px 0px` }
    );
    io.observe(footer);
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const solid = !isHome || scrolled || open;

  return (
    <>
      <header className={`site-header${solid ? " solid" : ""}${tucked && !open ? " tucked" : ""}${open ? " menu-open" : ""}`}>
        <div className="header-inner">
          <Link href="/" className="header-logo" prefetch={false} aria-label="School Of Unified Healing — home">
            <img src="/images/emblem.png" alt="" width="46" height="46" />
            <span className="logo-text">
              School of
              <small>UNIFIED HEALING</small>
            </span>
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <span className="header-cta">
              <a className="btn btn-gold" href={SITE.donateUrl} target="_blank" rel="noopener noreferrer">
                Donate
              </a>
            </span>
          </nav>
          <button
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </header>
      <div className={`mobile-menu${open ? " open" : ""}`} aria-hidden={!open}>
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} prefetch={false} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            {item.label}
          </Link>
        ))}
        <a className="btn btn-gold" href={SITE.donateUrl} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
          Donate
        </a>
      </div>
    </>
  );
}
