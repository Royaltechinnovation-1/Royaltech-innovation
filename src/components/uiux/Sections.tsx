import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaBell,
  FaCalendar,
  FaCartShopping,
  FaChartLine,
  FaEnvelope,
  FaGear,
  FaHeart,
  FaHouse,
  FaImage,
  FaLocationDot,
  FaLock,
  FaMagnifyingGlass,
  FaPhone,
  FaUser,
} from "react-icons/fa6";
import {
  CONTACT,
  INDUSTRIES,
  PROCESS,
  RELATED_LINKS,
  SYSTEM_ITEMS,
  WHY,
} from "@/data/uiux-page";
import { Abs, FloatCard, Phone } from "@/components/mobile-app/Phone";
import { Reveal } from "@/components/mobile-app/client";
import { EcommerceScreen } from "@/components/mobile-app/Screens";
import { ToolsEcosystem, UxQuoteButton } from "./Interactive";
import { BRAND_COLORS, IndustryPreview, PalettePanel, ProcessArt, TypePanel } from "./Panels";
import { Browser, SiteLanding } from "./Sites";

/* ------------------------------------------------------------------ */
/* 10 Process: six illustrated stages on a timeline                    */
/* ------------------------------------------------------------------ */
export function Process() {
  return (
    <section id="design-process" className="ma-sec ma-tint" aria-labelledby="ux-pr-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-sec-head ma-sec-head--center">
            <span className="ma-eyebrow">UI/UX design process</span>
            <h2 id="ux-pr-h" className="ma-h2 ma-h2--xl">
              From Ideas to Intuitive Digital Experiences
            </h2>
            <p className="ma-lead">
              A clear, seven-stage workflow that watches your design evolve, from first research to organized files your
              developers can build from.
            </p>
          </div>
        </Reveal>

        <ol className="ux-proc">
          {PROCESS.map((p, i) => (
            <li key={p.num}>
              <Reveal delay={i * 70}>
                <div className="ux-proc-card">
                  <span className="ux-proc-n">{p.num}</span>
                  <div className="ux-proc-art">
                    <ProcessArt kind={p.visual} />
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <ul>
                    {p.activities.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 11 Tools                                                            */
/* ------------------------------------------------------------------ */
export function Tools() {
  return (
    <section id="design-tools" className="ma-sec ma-navy ma-dark" aria-labelledby="ux-tl-h">
      <div className="ma-grid-bg" aria-hidden="true" />
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-sec-head ma-sec-head--center">
            <span className="ma-eyebrow">Tools &amp; design technologies</span>
            <h2 id="ux-tl-h" className="ma-h2 ma-h2--xl">
              Designed With Modern Creative Tools
            </h2>
            <p className="ma-lead">
              We use modern design tools to create, collaborate, prototype, and deliver professional digital experiences.
            </p>
          </div>
        </Reveal>
        <ToolsEcosystem />
        <p className="ma-note ma-note--center">
          Hover or focus a tool to see where it fits in the workspace. Our Figma UI UX design files are built for smooth{" "}
          <Link href="/services/website-development">website</Link> and{" "}
          <Link href="/services/mobile-app-development">app</Link> development.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 12 Design systems: a realistic design-system board                  */
/* ------------------------------------------------------------------ */
const ICONS = [FaHouse, FaMagnifyingGlass, FaBell, FaUser, FaGear, FaHeart, FaCartShopping, FaChartLine, FaCalendar, FaEnvelope, FaLock, FaImage];

function DesignBoard() {
  return (
    <div className="ub" role="img" aria-label="Design system board showing typography, color palette, buttons, form inputs, cards, navigation, icons, responsive layouts and design tokens">
      <div className="ub-in" aria-hidden="true">
        <div className="ub-bar">
          <b>Northwind · Design system</b>
          <span>v1.0</span>
        </div>
        <div className="ub-grid">
          <div className="ub-p ub-type">
            <span className="ub-k">Typography</span>
            <div className="ub-aa">Aa</div>
            <b>Inter</b>
            <div className="ub-scale">
              <span style={{ fontSize: "1.9rem", fontWeight: 800 }}>Display</span>
              <span style={{ fontSize: "1.3rem", fontWeight: 700 }}>Heading</span>
              <span style={{ fontSize: "1rem", fontWeight: 600 }}>Subheading</span>
              <span style={{ fontSize: "0.85rem" }}>Body copy for readable interfaces.</span>
              <span style={{ fontSize: "0.7rem", opacity: 0.6 }}>Caption · Overline</span>
            </div>
          </div>

          <div className="ub-p ub-color">
            <span className="ub-k">Color</span>
            <div className="ub-brand">
              {BRAND_COLORS.map((c) => (
                <span key={c.hex}>
                  <i style={{ background: c.hex }} />
                  <em>{c.name}</em>
                  <small>{c.hex}</small>
                </span>
              ))}
            </div>
            <div className="ub-ramp">
              {["#eff6ff", "#dbeafe", "#93c5fd", "#60a5fa", "#2563eb", "#1d4ed8", "#1e3a8a"].map((c) => (
                <i key={c} style={{ background: c }} />
              ))}
            </div>
            <div className="ub-ramp ub-ramp--n">
              {["#f8fafc", "#e2e8f0", "#94a3b8", "#64748b", "#334155", "#0f172a", "#020617"].map((c) => (
                <i key={c} style={{ background: c }} />
              ))}
            </div>
          </div>

          <div className="ub-p ub-btn">
            <span className="ub-k">Buttons</span>
            <span className="ub-b p">Primary</span>
            <span className="ub-b s">Secondary</span>
            <span className="ub-b o">Outline</span>
            <span className="ub-b g">Ghost</span>
            <span className="ub-b d">Disabled</span>
          </div>

          <div className="ub-p ub-input">
            <span className="ub-k">Form inputs</span>
            <div className="ub-fields">
              <label>
                Full name
                <span>Enter your name</span>
              </label>
              <label>
                Email
                <span className="focus">name@company.com</span>
                <small>We&apos;ll never share your email.</small>
              </label>
              <label>
                Service
                <span className="select">UI/UX Design</span>
              </label>
            </div>
            <div className="ub-ctl">
              <span className="ub-check on" />
              <span className="ub-check" />
              <span className="ub-radio on" />
              <span className="ub-radio" />
              <span className="ub-toggle on">
                <i />
              </span>
              <span className="ub-toggle">
                <i />
              </span>
            </div>
          </div>

          <div className="ub-p ub-card">
            <span className="ub-k">Cards</span>
            <div className="ub-cardx">
              <i />
              <b>Product title</b>
              <span>Short supporting description.</span>
              <em>Learn more</em>
            </div>
          </div>

          <div className="ub-p ub-navp">
            <span className="ub-k">Navigation</span>
            <div className="ub-topnav">
              <i />
              <span>Home</span>
              <span className="on">Work</span>
              <span>About</span>
              <em>Contact</em>
            </div>
            <div className="ub-tabsx">
              <span className="on">Overview</span>
              <span>Details</span>
              <span>Reviews</span>
            </div>
            <div className="ub-crumbx">
              Home <i>/</i> Work <i>/</i> <b>Case study</b>
            </div>
          </div>

          <div className="ub-p ub-icons">
            <span className="ub-k">Icons</span>
            <div className="ub-icon-grid">
              {ICONS.map((Icon, i) => (
                <span key={i}>
                  <Icon />
                </span>
              ))}
            </div>
          </div>

          <div className="ub-p ub-resp">
            <span className="ub-k">Responsive layouts</span>
            <div className="ub-devs">
              <span className="dk">
                <i />
                <i />
                <i />
              </span>
              <span className="tb">
                <i />
                <i />
              </span>
              <span className="mb">
                <i />
                <i />
              </span>
            </div>
          </div>

          <div className="ub-p ub-tok">
            <span className="ub-k">Design tokens</span>
            <div className="ub-tok-row">
              <span className="sp">
                {[4, 8, 12, 16, 24, 32].map((n) => (
                  <i key={n} style={{ width: n, height: n }} />
                ))}
                <em>Spacing</em>
              </span>
              <span className="rd">
                {[4, 8, 12, 20].map((n) => (
                  <i key={n} style={{ borderRadius: n }} />
                ))}
                <em>Radius</em>
              </span>
              <span className="sh">
                {[1, 2, 3].map((n) => (
                  <i key={n} className={`s${n}`} />
                ))}
                <em>Elevation</em>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DesignSystems() {
  return (
    <section id="design-systems" className="ma-sec ma-light" aria-labelledby="ux-ds-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ux-ds-head">
            <div>
              <span className="ma-eyebrow">Design systems</span>
              <h2 id="ux-ds-h" className="ma-h2 ma-h2--xl">
                Consistent Design. Scalable Experiences.
              </h2>
            </div>
            <div>
              <p className="ma-lead">
                A well-structured design system helps maintain consistency, simplify design decisions, and create scalable digital
                products.
              </p>
              <p className="ma-body">
                We build reusable UI components, typography systems, color palettes, design guidelines, and interface patterns that
                support efficient product development.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ul className="ux-ds-items" aria-label="Design system deliverables">
            {SYSTEM_ITEMS.map((s, i) => (
              <li key={s}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <DesignBoard />
        </Reveal>

        <p className="ma-note ma-note--center">
          Design system development pairs with our <Link href="/services/website-development">website development</Link> and{" "}
          <Link href="/services/software-development">custom software</Link> teams so components are built exactly as designed.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 14 Why RoyalTech: editorial rows + handoff inspector                */
/* ------------------------------------------------------------------ */
function Inspector() {
  return (
    <div className="ux-insp" role="img" aria-label="Developer handoff inspector showing a button component with spacing measurements and design specifications">
      <div className="ux-insp-in" aria-hidden="true">
        <div className="ux-insp-canvas">
          <span className="ux-insp-btn">
            <i className="pad l" />
            Get started
            <i className="pad r" />
            <em className="mh">48</em>
            <em className="mw">160</em>
          </span>
        </div>
        <div className="ux-insp-panel">
          <span className="ub-k">Inspect · Button / Primary</span>
          {[
            ["Width", "160 px"],
            ["Height", "48 px"],
            ["Padding", "12 / 24"],
            ["Radius", "12 px"],
            ["Font", "Inter 600 / 16"],
            ["Fill", "Brand gradient"],
          ].map(([k, v]) => (
            <div key={k} className="ux-insp-row">
              <span>{k}</span>
              <b>{v}</b>
            </div>
          ))}
          <div className="ux-insp-sw">
            <i style={{ background: "#2563eb" }} />
            <i style={{ background: "#22d3ee" }} />
            <span>#2563EB → #22D3EE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Why() {
  return (
    <section id="why-royaltech" className="ma-sec ma-navy ma-dark" aria-labelledby="ux-wy-h">
      <div className="ma-wrap">
        <div className="ux-why-head">
          <Reveal>
            <div>
              <span className="ma-eyebrow">Why choose RoyalTech Innovation</span>
              <h2 id="ux-wy-h" className="ma-h2 ma-h2--xl">
                Designing With Purpose. Creating With Impact.
              </h2>
              <p className="ma-lead">
                Working with a UI UX design agency should feel collaborative and clear. Our UI UX designers in Mohali partner with
                clients across Chandigarh, Punjab and beyond, from first sketch to developer handoff.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Inspector />
          </Reveal>
        </div>

        <ol className="ux-why-list">
          {WHY.map((w, i) => (
            <li key={w.title}>
              <Reveal delay={(i % 4) * 50}>
                <div className="ux-why-row">
                  <span className="ux-why-n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 15 Industries: asymmetric mosaic with interface previews            */
/* ------------------------------------------------------------------ */
export function Industries() {
  return (
    <section id="industries" className="ma-sec ma-light" aria-labelledby="ux-in-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-sec-head">
            <span className="ma-eyebrow">Industries we serve</span>
            <h2 id="ux-in-h" className="ma-h2 ma-h2--xl">
              Digital Experiences Across Industries
            </h2>
            <p className="ma-lead">
              Every sector has its own users and workflows. Our UI UX design services adapt to the way your industry works, from an
              ecommerce storefront to a healthcare portal or a SaaS dashboard.
            </p>
          </div>
        </Reveal>

        <ul className="ux-ind">
          {INDUSTRIES.map((ind, i) => (
            <li key={ind.name} className={`ux-ind-i ${ind.span}`}>
              <Reveal delay={(i % 4) * 50} className="ux-ind-reveal">
                <div className="ux-ind-card">
                  {ind.photo ? (
                    <Image
                      src={ind.photo}
                      alt=""
                      width={1024}
                      height={1024}
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="ux-ind-photo"
                    />
                  ) : (
                    <IndustryPreview kind={ind.kind} />
                  )}
                  <h3>{ind.name}</h3>
                  <p>{ind.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 17 Final CTA                                                        */
/* ------------------------------------------------------------------ */
export function FinalCta() {
  return (
    <section id="start-your-design" className="ma-sec ma-blue ma-dark ma-cta" aria-labelledby="ux-cta-h">
      <div className="ma-grid-bg" aria-hidden="true" />
      <div className="ma-wrap ma-split">
        <Reveal>
          <div className="ma-cta-copy">
            <h2 id="ux-cta-h" className="ma-h2 ma-h2--xl">
              {"Let's Create an Experience Worth Remembering"}
            </h2>
            <p className="ma-lead">
              {
                "Whether you're building a website, launching a mobile application, creating a dashboard, or developing a digital product, our design team is ready to transform your vision into an intuitive and visually compelling experience."
              }
            </p>
            <div className="ma-cta-row">
              <UxQuoteButton service="UI/UX Design" className="ma-btn ma-btn--white ma-btn--lg">
                Start Your Design Project <FaArrowRight aria-hidden="true" />
              </UxQuoteButton>
              <Link href="/contact" className="ma-btn ma-btn--ghost ma-btn--lg">
                Talk to Our Design Team
              </Link>
            </div>

            <address className="ma-contact">
              <p>
                Looking for a UI/UX design company in Chandigarh or Mohali? RoyalTech Innovation works with startups and
                businesses across Punjab, India and overseas.
              </p>
              <ul>
                <li>
                  <FaPhone aria-hidden="true" />
                  <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                </li>
                <li>
                  <FaEnvelope aria-hidden="true" />
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </li>
                <li>
                  <FaLocationDot aria-hidden="true" />
                  <span>{CONTACT.address}</span>
                </li>
              </ul>
            </address>

            <nav className="ma-related" aria-label="Related services">
              <span className="ma-related-k">Related services</span>
              <ul>
                {RELATED_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="ma-split-visual">
            <div className="ma-stage" style={{ aspectRatio: "1 / 0.98" }}>
              <span className="ma-cta-light" aria-hidden="true" />
              <Abs l={0} t={12} w={84} z={2} float={0}>
                <Browser url="northwind.studio" label="Laptop displaying a polished website UI design">
                  <SiteLanding />
                </Browser>
              </Abs>
              <Abs l={68} t={26} w={29} z={4} float={1}>
                <Phone variant="ios" label="Smartphone displaying a polished mobile app UI design">
                  <EcommerceScreen />
                </Phone>
              </Abs>
              <Abs l={-3} t={-2} w={26} z={6} float={2}>
                <TypePanel />
              </Abs>
              <Abs l={-2} b={4} w={34} z={6} float={1}>
                <PalettePanel />
              </Abs>
              <Abs r={0} t={4} w={32} z={6} float={0}>
                <FloatCard tone="light" title="Design approved" text="Ready for handoff" dot="green" />
              </Abs>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
