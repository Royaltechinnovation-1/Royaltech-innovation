import { Logo } from "@/components/Header";
import { Icon } from "@/components/Icons";
import { SocialButtons } from "@/components/SocialIcon";
import { site } from "@/lib/site";

const quickLinks = [
  { path: "", label: "Home" },
  { path: "about", label: "About Us" },
  { path: "services", label: "Services" },
  { path: "portfolio", label: "Portfolio" },
  { path: "careers", label: "Careers" },
  { path: "process", label: "Our Process" },
  { path: "gallery", label: "Gallery" },
  { path: "contact", label: "Contact" },
];

const linkClass = "text-[0.92rem] text-white/90 transition-colors duration-300 hover:text-gold";
const headingClass = "mb-5 text-[0.68rem] font-medium tracking-[0.28em] text-gold uppercase";

export default function Footer() {
  return (
    <footer className="relative z-10 px-4 pb-6 md:px-8">
      <div className="glass mx-auto max-w-7xl p-7 sm:p-10 lg:p-14">
        {/* gold hairline across the top edge */}
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

        <div className="relative z-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Logo height={84} />
            <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed text-white/90">
              {site.tagline} We build technology that helps ambitious businesses lead.
            </p>
            <p className="mt-8 mb-4 text-[0.68rem] tracking-[0.28em] text-white/72 uppercase">Follow us</p>
            <SocialButtons />
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links" className="lg:col-span-3 lg:col-start-6">
            <h3 className={headingClass}>Quick Links</h3>
            <ul className="grid gap-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={`${site.website}${l.path}`}
                    {...(l.path === "contact" ? { "data-open-contact": true } : {})}
                    className={linkClass}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className={headingClass}>Get in touch</h3>
            <ul className="grid gap-4 text-[0.92rem] text-white/92">
              <li>
                <a href={`mailto:${site.email}`} className="flex items-start gap-3 transition-colors hover:text-gold">
                  <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-start gap-3 transition-colors hover:text-gold">
                  <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-gold"
                >
                  <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    {site.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </a>
              </li>
            </ul>
            <a
              href={site.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost mt-8 !px-5 !py-2.5 !text-[0.68rem]"
            >
              Visit main website <Icon name="arrow" className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 mt-14 flex flex-col gap-4 border-t border-white/12 pt-6 text-xs text-white/72 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a
            href="#hero"
            className="inline-flex w-fit items-center gap-2 tracking-[0.2em] uppercase transition-colors hover:text-gold"
          >
            Back to top <Icon name="arrow" className="h-3.5 w-3.5 -rotate-90" />
          </a>
        </div>
      </div>
    </footer>
  );
}
