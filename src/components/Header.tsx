"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

const heroOverlayPaths = new Set(["/", "/about", "/services", "/contact"]);

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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="nav-backdrop" hidden={!menuOpen} onClick={closeMenu} />
      <header
        className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-open" : ""}`}
        id="top"
      >
        <div className="header-inner">
          <Link
            className="brand"
            href="/"
            aria-label="RoyalTech Innovation home"
            onClick={closeMenu}
          >
            <Image
              className="brand-mark"
              src="/logo-mark.jpg"
              alt=""
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
                  <Link className="nav-link" href={link.href} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="nav-mobile-only">
                <Link
                  className="btn btn-soft btn-sm nav-quote"
                  href="tel:+918570871522"
                  onClick={closeMenu}
                >
                  Call Now
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <Link className="btn btn-soft btn-sm" href="tel:+918570871522">
              Call Now
            </Link>
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
