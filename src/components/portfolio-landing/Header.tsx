"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = { href: string; label: string; submenu?: { href: string; label: string }[] };

/** Same pages (and order) as the main site header, so visitors can move around the whole site from here. */
const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    submenu: [
      { href: "/services/crm", label: "CRM Software" },
      { href: "/services/website-development", label: "Website Development" },
      { href: "/services/software-development", label: "Software Development" },
      { href: "/services/mobile-app-development", label: "Mobile App Development" },
      { href: "/services/digital-marketing", label: "Digital Marketing & SEO" },
      { href: "/services/ui-ux-design", label: "UI/UX & Graphic Design" },
      { href: "/services/it-consulting", label: "IT Consulting" },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careers", label: "Careers" },
  { href: "/process", label: "Our Process" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

/** Full RoyalTech logo. Pass `height` (px) to fix the size; otherwise it scales with the header. */
export function Logo({ className = "", height }: { className?: string; height?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/portfolio/brand/royaltech-logo.png"
      alt="RoyalTech Innovation"
      style={height ? { height, width: "auto" } : undefined}
      className={`block w-auto select-none ${height ? "" : "h-12 md:h-16"} ${className}`}
      draggable={false}
    />
  );
}

const linkBase = "text-[0.7rem] tracking-[0.16em] uppercase transition-colors hover:text-gold";

export default function Header() {
  const pathname = usePathname();
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
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"));

  const closeMenu = () => {
    setOpen(false);
    document.documentElement.style.overflow = "";
  };

  /* "Start a project" opens the contact pop-up (and closes the mobile menu first). */
  const openContact = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    window.dispatchEvent(new Event("contact:open"));
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? "border-b border-white/10 bg-black/30 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between gap-6 px-6 md:px-10">
          <Link href="/" onClick={closeMenu} aria-label="RoyalTech Innovation home" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
            {links.map((l) =>
              l.submenu ? (
                <div key={l.href} className="group relative">
                  <Link
                    href={l.href}
                    aria-haspopup="true"
                    className={`${linkBase} inline-flex items-center gap-1.5 py-6 ${isActive(l.href) ? "text-gold" : "text-white/75"}`}
                  >
                    {l.label}
                    <svg viewBox="0 0 10 6" className="h-1.5 w-2 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <ul className="invisible absolute top-full left-1/2 w-64 -translate-x-1/2 translate-y-2 rounded-2xl border border-white/15 bg-[#03060d]/90 p-2 opacity-0 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {l.submenu.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          className="block rounded-xl px-4 py-2.5 text-[0.78rem] text-white/80 transition-colors hover:bg-white/10 hover:text-gold"
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`${linkBase} ${isActive(l.href) ? "text-gold" : "text-white/75"}`}
                >
                  {l.label}
                </Link>
              ),
            )}
          </nav>

          <a href="#contact" onClick={openContact} className="lp-btn lp-btn-ghost hidden shrink-0 !py-2.5 !text-[0.7rem] xl:inline-flex">
            Start a project
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="relative z-50 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 bg-white/5 backdrop-blur xl:hidden"
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
        className={`fixed inset-0 z-40 overflow-y-auto bg-black/80 px-8 pt-24 pb-10 backdrop-blur-2xl transition-all duration-500 xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-md flex-col">
          {links.map((l, i) => (
            <li
              key={l.href}
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
              className={`border-b border-white/10 transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              <Link
                href={l.href}
                onClick={closeMenu}
                className={`display block py-3.5 text-2xl transition-colors hover:text-gold ${isActive(l.href) ? "text-gold" : ""}`}
              >
                {l.label}
              </Link>
              {l.submenu && (
                <ul className="mb-3 grid gap-0.5 pl-4">
                  {l.submenu.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} onClick={closeMenu} className="block py-1.5 text-[0.95rem] text-white/70 transition-colors hover:text-gold">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="mx-auto max-w-md">
          <a href="#contact" onClick={openContact} className="lp-btn lp-btn-gold mt-8 self-start">
            Start a project
          </a>
        </div>
      </div>
    </>
  );
}
