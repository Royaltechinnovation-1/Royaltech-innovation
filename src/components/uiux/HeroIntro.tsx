import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { HERO_SERVICES, INTRO_POINTS, SERVICES, type DesignServiceId } from "@/data/uiux-page";
import { Reveal } from "@/components/mobile-app/client";
import { UxQuoteButton } from "./Interactive";

export function Hero() {
  return (
    <section className="ma-sec ma-hero ma-dark ux-hero" aria-labelledby="ux-h1">
      <div className="ux-hero-bg" aria-hidden="true">
        <Image
          src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1600/v1795782000/Gemini_Generated_Image_4unj54unj54unj54.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="ux-hero-bg-img"
        />
        <div className="ux-hero-bg-shade" />
      </div>
      <div className="ma-grid-bg" aria-hidden="true" />
      <div className="ma-wrap ma-hero-grid ux-hero-grid">
        <div className="ma-hero-copy">
          <nav aria-label="Breadcrumb" className="ma-crumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li aria-current="page">UI/UX Design</li>
            </ol>
          </nav>

          <h1 id="ux-h1" className="ma-h1">
            <span className="ma-eyebrow">
              UI/UX Design &amp; Digital Product Experiences<span className="ma-sr">: </span>
            </span>
            <span className="ma-h1-main">
              Designing Digital Experiences <em>People Love to Use</em>
            </span>
          </h1>

          <p className="ma-lead ma-hero-lead">
            We design intuitive, visually engaging, and user-centered digital experiences that help businesses connect with their
            audience, simplify interactions, and turn ideas into meaningful digital products.
          </p>

          <ul className="ma-expertise" aria-label="Our design services">
            {HERO_SERVICES.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <div className="ma-cta-row">
            <UxQuoteButton service="UI/UX Design" title="Discuss Your Design Project" className="ma-btn ma-btn--primary ma-btn--lg">
              Discuss Your Design Project <FaArrowRight aria-hidden="true" />
            </UxQuoteButton>
            <a href="#solutions" className="ma-btn ma-btn--ghost ma-btn--lg">
              Explore Our Designs
            </a>
          </div>

          <ul className="ma-hero-notes">
            <li>Research-led design</li>
            <li>Websites, apps &amp; dashboards</li>
            <li>Developer-ready handoff</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section id="overview" className="ma-sec ma-light" aria-labelledby="ux-intro-h">
      <div className="ma-wrap ma-split ux-intro">
        <Reveal>
          <div className="ma-intro-copy">
            <span className="ma-eyebrow">UI/UX design company</span>
            <h2 id="ux-intro-h" className="ma-h2 ma-h2--xl">
              Great Design Goes Beyond Visuals
            </h2>
            <p className="ma-lead">Every successful digital product begins with understanding its users.</p>
            <p className="ma-body">
              At RoyalTech Innovation, we combine user research, design thinking, visual creativity, and usability principles to
              create digital experiences that are intuitive, engaging, and aligned with business objectives.
            </p>
            <p className="ma-body">
              From websites and mobile applications to dashboards and digital products, our UI/UX design process focuses on making
              complex interactions simple, creating meaningful user journeys, and designing interfaces that users enjoy interacting
              with.
            </p>
            <p className="ma-body">
              As a UI/UX design company in Mohali, our UI UX designers work with businesses across Chandigarh, Punjab and beyond,
              delivering user experience design services that connect smoothly with{" "}
              <Link href="/services/website-development">website development</Link> and{" "}
              <Link href="/services/mobile-app-development">mobile app development</Link>.
            </p>
            <ul className="ma-points">
              {INTRO_POINTS.map((p) => (
                <li key={p.title}>
                  <span className="ma-points-t">{p.title}</span>
                  <span className="ma-points-s">{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="ma-split-visual ux-intro-visual">
            <figure className="ux-intro-figure">
              <Image
                src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1600/v1795782508/Gemini_Generated_Image_uqoaisuqoaisuqoa.png"
                alt="RoyalTech Innovation Behance portfolio showing selected design projects"
                width={3168}
                height={1344}
                unoptimized
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="ux-intro-img"
              />
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Small CSS-drawn thumbnails for the services index. */
function ServiceThumb({ id }: { id: DesignServiceId }) {
  return (
    <span className={`ux-thumb ux-thumb--${id}`} aria-hidden="true">
      {id === "ui-ux" && (
        <>
          <i className="bar" />
          <i className="hero" />
          <i className="a" />
          <i className="b" />
        </>
      )}
      {id === "mobile" && (
        <>
          <i className="ph p1" />
          <i className="ph p2" />
          <i className="ph p3" />
        </>
      )}
      {id === "dashboard" && (
        <>
          <i className="side" />
          <i className="k" />
          <i className="k" />
          <i className="chart" />
        </>
      )}
      {id === "prototyping" && (
        <>
          <i className="wf" />
          <i className="arr" />
          <i className="hf" />
        </>
      )}
      {id === "product" && (
        <>
          <i className="l1" />
          <i className="l2" />
          <i className="l3" />
        </>
      )}
    </span>
  );
}

export function Overview() {
  return (
    <section id="solutions" className="ma-sec ma-tint ux-overview" aria-labelledby="ux-ov-h">
      <div className="ma-wrap ux-ov">
        <Reveal>
          <div className="ux-ov-head">
            <span className="ma-eyebrow">Our UI/UX design services</span>
            <h2 id="ux-ov-h" className="ma-h2 ma-h2--xl">
              UI/UX Design Solutions for Every Digital Experience
            </h2>
            <p className="ma-lead">
              As a UI UX design company, RoyalTech Innovation brings five connected design services under one roof: websites,
              mobile apps, dashboards, wireframes and prototypes, and complete digital products.
            </p>
            <p className="ma-note">
              Not sure where to start? Our team can recommend the right mix of{" "}
              <Link href="#wireframing-prototyping">wireframing and prototyping</Link>,{" "}
              <Link href="#digital-product-design">product design</Link> and <Link href="#ux-audit">UX audits</Link> for your goals.
            </p>
          </div>
        </Reveal>

        <ol className="ux-ov-list">
          {SERVICES.map((s, i) => (
            <li key={s.id}>
              <Reveal delay={i * 60}>
                <a href={`#${s.anchor}`} className="ux-ov-row">
                  <span className="ux-ov-n">{s.num}</span>
                  <span className="ux-ov-main">
                    <span className="ux-ov-t">{s.short}</span>
                    <span className="ux-ov-s">{s.blurb}</span>
                  </span>
                  <ServiceThumb id={s.id} />
                  <span className="ux-ov-go" aria-hidden="true">
                    <FaArrowRight />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
