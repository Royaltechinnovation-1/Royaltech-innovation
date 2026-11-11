"use client";

import { OpenFormButton } from "@/components/FormModal";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careers", label: "Careers" },
  { href: "/process", label: "Our Process" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const heroOverlayPaths = new Set([
  "/",
  "/about",
  "/services",
  "/contact",
  "/careers",
  "/process",
  "/portfolio",
  "/gallery",
  "/privacy",
  "/terms",
]);

export default function Header() {
  const pathname = usePathname();
  const overlaysHero = heroOverlayPaths.has(pathname);
  const [scrolled, setScrolled] = useState(!overlaysHero);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!overlaysHero) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlaysHero]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div
        className={`nav-backdrop${menuOpen ? " is-visible" : ""}`}
        hidden={!menuOpen}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <header
        className={`site-header${scrolled || menuOpen ? " is-scrolled" : ""}${menuOpen ? " is-open" : ""}`}
        id="top"
      >
        <div className={`header-shell${menuOpen ? " is-open" : ""}`}>
          <Link
            className="brand"
            href="/"
            aria-label="RoyalTech Innovation home"
            onClick={closeMenu}
          >
            <Image
              className="brand-mark"
              src="/logo-mark.jpg"
              alt="RoyalTech Innovation logo"
              width={58}
              height={58}
              priority
            />
            <span className="brand-name">
              RoyalTech <span>Innovation</span>
            </span>
          </Link>

          <nav className={`nav${menuOpen ? " is-open" : ""}`} aria-label="Primary">
            <ul className="nav-list">
              {links.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    className={`nav-link${pathname === link.href ? " is-active" : ""}`}
                    href={link.href}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="nav-mobile-only">
                <OpenFormButton
                  className="btn btn-soft btn-sm nav-quote"
                  title="Get a Quote"
                  source="header-mobile"
                  onClick={closeMenu}
                >
                  Get a Quote
                </OpenFormButton>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <OpenFormButton
              className="btn btn-soft btn-sm"
              title="Get a Quote"
              source="header"
            >
              Get a Quote
            </OpenFormButton>
            <button
              className={`menu-btn${menuOpen ? " is-open" : ""}`}
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
