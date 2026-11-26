"use client";

import { useEffect, useState } from "react";
import { scrollToTarget } from "@/lib/lenis";

const links = [
  { href: "#technology", label: "Technology" },
  { href: "#about", label: "Company" },
  { href: "#services", label: "Services" },
  { href: "#ai", label: "AI" },
  { href: "#projects", label: "Projects" },
  { href: "#why", label: "Why Us" },
];

/** Full RoyalTech logo. Pass `height` (px) to fix the size; otherwise it scales with the header. */
export function Logo({ className = "", height }: { className?: string; height?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/royaltech-logo.png"
      alt="RoyalTech Innovation"
      style={height ? { height, width: "auto" } : undefined}
      className={`block w-auto select-none ${height ? "" : "h-12 md:h-16"} ${className}`}
      draggable={false}
    />
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  /* "Start a project" opens the contact pop-up (and closes the mobile menu first). */
  const openContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.documentElement.style.overflow = "";
    window.dispatchEvent(new Event("contact:open"));
  };

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    document.documentElement.style.overflow = "";
    scrollToTarget(href);
  };

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "border-b border-white/10 bg-black/30 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#hero" onClick={(e) => go(e, "#hero")} aria-label="RoyalTech Innovation — home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="text-[0.72rem] tracking-[0.22em] text-white/70 uppercase transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" onClick={openContact} className="btn btn-ghost hidden !py-2.5 !text-[0.7rem] lg:inline-flex">
          Start a project
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/5 backdrop-blur lg:hidden"
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 h-px w-5 bg-white transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-px w-5 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-px w-5 bg-white transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

    </header>

    {/* Mobile / tablet menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-black/70 px-8 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={(e) => go(e, l.href)}
            style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            className={`display border-b border-white/10 py-4 text-3xl transition-all duration-500 hover:text-gold ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {l.label}
          </a>
        ))}
        <a href="#contact" onClick={openContact} className="btn btn-gold mt-8 self-start">
          Start a project
        </a>
      </div>
    </>
  );
}
