import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { CAPABILITY_DOMAINS, EXPERTISE, HERO_NOTES, INTRO_POINTS, SERVICES, type ConsultingService } from "@/data/it-consulting-page";
import { ConsultButton, Reveal } from "./client";
import { IntroVisual } from "./HeroVisuals";
import { InfraVisual, ProcessFlowVisual, StrategyVisual, TechVisual, TransformVisual } from "./ServiceVisuals";

/** Shared copy block used by each service. */
function ServiceCopy({ s, headingId, children }: { s: ConsultingService; headingId: string; children?: React.ReactNode }) {
  return (
    <>
      <span className="ic-num" aria-hidden="true">
        {s.num}
      </span>
      <span className="ic-eyebrow">{s.short}</span>
      <h3 id={headingId} className="ic-h3">
        {s.title}
      </h3>
      {s.description.map((p, i) => (
        <p key={i} className={i === 0 ? "ic-lead" : "ic-body"}>
          {p}
        </p>
      ))}
      {children}
    </>
  );
}

function ServiceCta({ s, className = "ic-btn ic-btn--primary ic-btn--lg" }: { s: ConsultingService; className?: string }) {
  return (
    <div className="ic-cta-row">
      <ConsultButton service={s.ctaService} className={className}>
        {s.cta} <FaArrowRight aria-hidden="true" />
      </ConsultButton>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 1. Hero                                                             */
/* ------------------------------------------------------------------ */

export function Hero() {
  return (
    <section className="ic-sec ic-hero ic-dark" aria-labelledby="ic-h1">
      <div className="ic-hero-bg" aria-hidden="true">
        <Image
          src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1600/v1795778943/Gemini_Generated_Image_bi94mobi94mobi94.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="ic-hero-bg-img"
        />
        <div className="ic-hero-bg-shade" />
      </div>
      <div className="ic-grid-bg" aria-hidden="true" />
      <div className="ic-wrap ic-hero-grid">
        <div className="ic-hero-copy">
          <nav aria-label="Breadcrumb" className="ic-crumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li aria-current="page">IT Consulting</li>
            </ol>
          </nav>

          <h1 id="ic-h1" className="ic-h1">
            <span className="ic-eyebrow ic-eyebrow--pill">
              IT Consulting &amp; Technology Strategy<span className="ic-sr">: </span>
            </span>
            <span className="ic-h1-main">
              Technology Strategy That <em>Moves Your Business Forward</em>
            </span>
          </h1>

          <p className="ic-lead ic-hero-lead">
            We help businesses make smarter technology decisions, modernize operations, optimize processes, and build scalable
            digital foundations through strategic IT consulting and technology solutions.
          </p>

          <ul className="ic-expertise" aria-label="Consulting expertise">
            {EXPERTISE.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="ic-cta-row">
            <ConsultButton service="IT Consulting" className="ic-btn ic-btn--primary ic-btn--lg">
              Discuss Your Business Goals <FaArrowRight aria-hidden="true" />
            </ConsultButton>
            <a href="#services" className="ic-btn ic-btn--ghost ic-btn--lg">
              Explore Consulting Services
            </a>
          </div>

          <ul className="ic-hero-notes">
            {HERO_NOTES.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Introduction                                                     */
/* ------------------------------------------------------------------ */

export function Intro() {
  return (
    <section id="overview" className="ic-sec ic-light" aria-labelledby="ic-intro-h">
      <div className="ic-wrap ic-split">
        <Reveal>
          <div className="ic-copy">
            <span className="ic-eyebrow">IT consulting company</span>
            <h2 id="ic-intro-h" className="ic-h2">
              Technology Decisions That Create Business Value
            </h2>
            <p className="ic-lead">
              Technology plays a critical role in how modern businesses operate, grow, compete, and serve their customers.
            </p>
            <p className="ic-body">
              At RoyalTech Innovation, we help businesses evaluate their technology needs, identify opportunities for improvement,
              plan digital initiatives, and implement practical solutions aligned with their business objectives.
            </p>
            <p className="ic-body">
              Our IT consulting approach combines business understanding, technical expertise, strategic planning, and operational
              improvement to help organizations make confident technology decisions.
            </p>
            <p className="ic-body">
              As an IT consulting company in Mohali, we work with startups, SMEs and growing enterprises across Chandigarh, Punjab
              and beyond, and our consultants are backed by in-house teams for{" "}
              <Link href="/services/website-development">website development</Link> and{" "}
              <Link href="/services/software-development">custom software development</Link> when a recommendation is ready to
              be built.
            </p>
            <ul className="ic-points">
              {INTRO_POINTS.map((p) => (
                <li key={p.title}>
                  <span className="ic-points-t">{p.title}</span>
                  <span className="ic-points-s">{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="ic-split-visual">
            <IntroVisual />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Services: overview index + five service blocks                   */
/* ------------------------------------------------------------------ */

export function Services() {
  const [s1, s2, s3, s4, s5] = SERVICES;
  return (
    <section id="services" aria-labelledby="ic-services-h">
      {/* overview */}
      <div className="ic-sec ic-tint ic-sec--tight-bottom">
        <div className="ic-wrap">
          <Reveal>
            <div className="ic-index-head">
              <div>
                <span className="ic-eyebrow">Our IT consulting services</span>
                <h2 id="ic-services-h" className="ic-h2">
                  Technology Consulting Solutions for Growing Businesses
                </h2>
              </div>
              <p className="ic-lead">
                Five connected IT consulting services, from strategy and planning to infrastructure and everyday operations. Use one
                on its own, or combine them into a single technology programme.
              </p>
            </div>
          </Reveal>
          <ol className="ic-index" aria-label="IT consulting service categories">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="ic-index-row">
                  <span className="ic-index-n" aria-hidden="true">
                    {s.num}
                  </span>
                  <span className="ic-index-t">{s.short}</span>
                  <span className="ic-index-s">{s.blurb}</span>
                  <span className="ic-index-go" aria-hidden="true">
                    <FaArrowRight />
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* 01 IT strategy & planning: white, visual right */}
      <article id={s1.id} className="ic-sec ic-light ic-scroll" aria-labelledby={`${s1.id}-h`}>
        <div className="ic-wrap ic-split">
          <Reveal>
            <div className="ic-copy">
              <ServiceCopy s={s1} headingId={`${s1.id}-h`}>
                <ul className="ic-list">
                  {s1.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <p className="ic-note">
                  This IT strategy consulting feeds directly into the <a href="#technology-roadmap">technology roadmap</a> and, where
                  needed, our <Link href="/services/software-development">custom software development</Link> team.
                </p>
                <ServiceCta s={s1} />
              </ServiceCopy>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="ic-split-visual">
              <StrategyVisual />
            </div>
          </Reveal>
        </div>
      </article>

      {/* 02 Digital transformation: navy, full-width panorama */}
      <article id={s2.id} className="ic-sec ic-navy ic-dark ic-scroll" aria-labelledby={`${s2.id}-h`}>
        <div className="ic-grid-bg ic-grid-bg--soft" aria-hidden="true" />
        <div className="ic-wrap">
          <Reveal>
            <div className="ic-dt-head">
              <div className="ic-copy">
                <ServiceCopy s={s2} headingId={`${s2.id}-h`}>
                  <ServiceCta s={s2} className="ic-btn ic-btn--primary ic-btn--lg" />
                </ServiceCopy>
              </div>
              <ul className="ic-chipgrid" aria-label="Digital transformation consulting services">
                {s2.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <TransformVisual />
          </Reveal>
          <p className="ic-note ic-note--center">
            Looking for digital transformation consulting in Chandigarh or Mohali? We pair strategy with{" "}
            <Link href="/services#business-automation">business automation</Link> and{" "}
            <Link href="/services/crm">CRM solutions</Link> delivery.
          </p>
        </div>
      </article>

      {/* 03 Technology consulting: tint, visual left */}
      <article id={s3.id} className="ic-sec ic-tint ic-scroll" aria-labelledby={`${s3.id}-h`}>
        <div className="ic-wrap ic-split ic-split--rev">
          <Reveal>
            <div className="ic-copy">
              <ServiceCopy s={s3} headingId={`${s3.id}-h`}>
                <ul className="ic-tags" aria-label="Technology consulting services">
                  {s3.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <p className="ic-note">
                  As a technology consulting company we stay vendor-neutral, and we can follow through with{" "}
                  <Link href="/services/mobile-app-development">mobile app development</Link> or{" "}
                  <Link href="/services#erp-dev">ERP solutions</Link> if you choose to build.
                </p>
                <ServiceCta s={s3} />
              </ServiceCopy>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="ic-split-visual">
              <TechVisual />
            </div>
          </Reveal>
        </div>
      </article>

      {/* 04 IT infrastructure: white, dark architecture panel */}
      <article id={s4.id} className="ic-sec ic-light ic-scroll" aria-labelledby={`${s4.id}-h`}>
        <div className="ic-wrap ic-split ic-split--wide-visual">
          <Reveal>
            <div className="ic-copy">
              <ServiceCopy s={s4} headingId={`${s4.id}-h`}>
                <ol className="ic-spec" aria-label="IT infrastructure consulting services">
                  {s4.items.map((i, n) => (
                    <li key={i}>
                      <span aria-hidden="true">{String(n + 1).padStart(2, "0")}</span>
                      {i}
                    </li>
                  ))}
                </ol>
                <p className="ic-note">
                  Searching for IT infrastructure consulting in Mohali? Our local team plans{" "}
                  <Link href="/services#cloud-devops">cloud and technology services</Link> around how your business actually
                  operates.
                </p>
                <ServiceCta s={s4} />
              </ServiceCopy>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="ic-split-visual ic-split-visual--panel">
              <InfraVisual />
            </div>
          </Reveal>
        </div>
      </article>

      {/* 05 Business process optimization: tint, header + four-stage flow */}
      <article id={s5.id} className="ic-sec ic-tint ic-scroll" aria-labelledby={`${s5.id}-h`}>
        <div className="ic-wrap">
          <Reveal>
            <div className="ic-bpo-head">
              <div className="ic-copy">
                <ServiceCopy s={s5} headingId={`${s5.id}-h`} />
              </div>
              <div className="ic-bpo-side">
                <ul className="ic-list ic-list--one">
                  {s5.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ProcessFlowVisual />
          </Reveal>
          <div className="ic-bpo-foot">
            <p className="ic-note">
              Our business process optimization services work hand in hand with{" "}
              <Link href="/services#business-automation">business automation</Link> and the{" "}
              <Link href="/services/crm">CRM</Link> you already use.
            </p>
            <ServiceCta s={s5} />
          </div>
        </div>
      </article>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Capabilities                                                     */
/* ------------------------------------------------------------------ */

export function Capabilities() {
  return (
    <section id="capabilities" className="ic-sec ic-navy ic-dark" aria-labelledby="ic-cap-h">
      <div className="ic-grid-bg ic-grid-bg--soft" aria-hidden="true" />
      <div className="ic-wrap">
        <Reveal>
          <div className="ic-sec-head ic-sec-head--center">
            <span className="ic-eyebrow">IT consulting capabilities</span>
            <h2 id="ic-cap-h" className="ic-h2">
              Strategic Expertise Across Your Technology Ecosystem
            </h2>
            <p className="ic-lead">
              We bring together business understanding, technology expertise, strategic planning, and operational insight to help
              organizations make better technology decisions. These technology advisory services connect six areas of the business.
            </p>
          </div>
        </Reveal>

        <div className="ic-cap">
          <div className="ic-cap-rail" aria-hidden="true">
            <i className="ic-line" />
          </div>
          {CAPABILITY_DOMAINS.map((d, i) => (
            <Reveal key={d.id} delay={i * 70} className="ic-cap-col-wrap">
              <div className="ic-cap-col">
                <div className="ic-cap-node" aria-hidden="true">
                  {i + 1}
                </div>
                <h3 className="ic-cap-t">{d.label}</h3>
                <ul>
                  {d.items.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="ic-cap-flow" aria-hidden="true">
          Business Strategy → Technology → Infrastructure → Software → Automation → Operations
        </p>
      </div>
    </section>
  );
}
