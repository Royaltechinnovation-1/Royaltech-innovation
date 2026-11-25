"use client";

import { OpenFormButton } from "@/components/FormModal";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavLink = {
  href: string;
  label: string;
  submenu?: { href: string; label: string }[];
};

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
  // { href: "/crm", label: "CRM" },
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
  "/services/crm",
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
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

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
    setMobileSubmenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileSubmenuOpen(false);
  };

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
              {links.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href + "/"));

                if (link.submenu) {
                  return (
                    <li key={`${link.href}-${link.label}`} className="nav-item-dropdown">
                      <div className="nav-dropdown-trigger">
                        <Link
                          className={`nav-link${isActive ? " is-active" : ""}`}
                          href={link.href}
                          onClick={closeMenu}
                        >
                          <span>{link.label}</span>
                          <svg
                            className="nav-dropdown-arrow"
                            viewBox="0 0 10 6"
                            width="9"
                            height="6"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M1 1L5 5L9 1"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                        <button
                          type="button"
                          className={`nav-mobile-toggle${mobileSubmenuOpen ? " is-open" : ""}`}
                          aria-label="Toggle Services submenu"
                          aria-expanded={mobileSubmenuOpen}
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileSubmenuOpen((prev) => !prev);
                          }}
                        >
                          <svg
                            viewBox="0 0 10 6"
                            width="11"
                            height="7"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M1 1L5 5L9 1"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className={`nav-dropdown-menu${mobileSubmenuOpen ? " is-mobile-open" : ""}`}>
                        <ul className="nav-dropdown-list">
                          {link.submenu.map((sub) => (
                            <li key={sub.label}>
                              <Link
                                className={`nav-dropdown-item${pathname === sub.href ? " is-active" : ""}`}
                                href={sub.href}
                                onClick={closeMenu}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={`${link.href}-${link.label}`}>
                    <Link
                      className={`nav-link${isActive ? " is-active" : ""}`}
                      href={link.href}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
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
