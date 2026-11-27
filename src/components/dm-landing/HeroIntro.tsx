import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaEnvelope } from "react-icons/fa6";
import { HERO_NOTES, HERO_SERVICES, INTRO_POINTS, SERVICES, type MarketingServiceId } from "@/data/mk-page";
import { Reveal } from "@/components/mobile-app/client";
import { DmQuoteButton } from "./Interactive";

export function Hero() {
  return (
    <section className="ma-sec ma-hero ma-dark ux-hero mk-hero" aria-labelledby="mk-h1">
      <div className="mk-hero-bg" aria-hidden="true">
        <Image
          src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1600/v1795779975/Gemini_Generated_Image_2t3yuz2t3yuz2t3y.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="mk-hero-bg-img"
        />
        <div className="mk-hero-bg-shade" />
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
              <li aria-current="page">Digital Marketing</li>
            </ol>
          </nav>

          <h1 id="mk-h1" className="ma-h1">
            <span className="ma-eyebrow">
              Digital Marketing &amp; Online Growth<span className="ma-sr">: </span>
            </span>
            <span className="ma-h1-main">
              Digital Marketing Strategies That <em>Drive Business Growth</em>
            </span>
          </h1>

          <p className="ma-lead ma-hero-lead">
            We help businesses grow their online visibility, attract the right audience, generate qualified leads, and build
            lasting digital connections through strategic digital marketing solutions.
          </p>

          <ul className="ma-expertise mk-expertise" aria-label="Our digital marketing services">
            {HERO_SERVICES.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <div className="ma-cta-row">
            <DmQuoteButton service="Digital Marketing" title="Grow Your Business" className="ma-btn ma-btn--primary ma-btn--lg">
              Grow Your Business <FaArrowRight aria-hidden="true" />
            </DmQuoteButton>
            <a href="#solutions" className="ma-btn ma-btn--ghost ma-btn--lg">
              Explore Our Services
            </a>
          </div>

          <ul className="ma-hero-notes">
            {HERO_NOTES.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section id="overview" className="ma-sec ma-light" aria-labelledby="mk-intro-h">
      <div className="ma-wrap ma-split ux-intro">
        <Reveal>
          <div className="ma-intro-copy">
            <span className="ma-eyebrow">Digital marketing company</span>
            <h2 id="mk-intro-h" className="ma-h2 ma-h2--xl">
              Grow Your Business With Strategic Digital Marketing
            </h2>
            <p className="ma-lead">
              In today&apos;s competitive digital landscape, having an online presence is only the beginning. Businesses need
              the right strategies to reach their audience, build trust, increase visibility, and generate meaningful
              opportunities.
            </p>
            <p className="ma-body">
              At RoyalTech Innovation, we combine data-driven strategies, creative marketing, and digital expertise to help
              businesses strengthen their online presence and achieve sustainable growth.
            </p>
            <p className="ma-body">
              From search engine optimization and social media marketing to paid advertising, content marketing, and email
              campaigns, we create marketing strategies tailored to your business goals and audience.
            </p>
            <p className="ma-body">
              As a digital marketing company in Mohali, we work with businesses across Chandigarh, Punjab and beyond, and pair
              marketing with a fast, search-friendly <Link href="/services/website-development">website</Link> and clear{" "}
              <Link href="/services/ui-ux-design">UI/UX design</Link> so campaigns land on pages built to convert.
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
          <div className="ma-split-visual mk-intro-visual">
          <figure className="mk-intro-figure">
            <Image
              src="/images/digital-marketing-intro.png"
              alt="RoyalTech digital marketing strategy visual"
              width={1200}
              height={1026}
              unoptimized
              sizes="(min-width: 1024px) 46rem, 100vw"
              className="mk-intro-img-el"
            />
          </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services overview: five expanding channel strips                    */
/* ------------------------------------------------------------------ */

function StripArt({ id }: { id: MarketingServiceId }) {
  if (id === "seo")
    return (
      <span className="mk-sa mk-sa--seo" aria-hidden="true">
        <i className="q" />
        <i className="r hi" />
        <i className="r" />
        <i className="r s" />
      </span>
    );
  if (id === "social")
    return (
      <span className="mk-sa mk-sa--social mk-ig" aria-hidden="true">
        <span className="mk-ig-phone">
          <span className="mk-ig-top">
            <span className="mk-ig-av">RT</span>
            <span className="mk-ig-id">
              <span className="mk-ig-handle">royaltechinnovat</span>
              <span className="mk-ig-url">instagram.com/royaltechinnovat</span>
            </span>
          </span>
          <span className="mk-ig-cta">Follow</span>
          <span className="mk-ig-grid">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </span>
        </span>
      </span>
    );
  if (id === "ads")
    return (
      <span className="mk-sa mk-sa--ads" aria-hidden="true">
        <i className="tag">Ad</i>
        <i className="b b1" />
        <i className="b b2" />
        <i className="b b3" />
        <i className="b b4" />
      </span>
    );
  if (id === "content")
    return (
      <span className="mk-sa mk-sa--content" aria-hidden="true">
        <i className="h" />
        <i className="l" />
        <i className="l s" />
        <i className="img" />
      </span>
    );
  return (
    <span className="mk-sa mk-sa--email" aria-hidden="true">
      <FaEnvelope />
      <i className="dot" />
    </span>
  );
}

export function Overview() {
  return (
    <section id="solutions" className="ma-sec ma-tint" aria-labelledby="mk-ov-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-sec-head ma-sec-head--center">
            <span className="ma-eyebrow">Our digital marketing services</span>
            <h2 id="mk-ov-h" className="ma-h2 ma-h2--xl">
              Digital Marketing Solutions for Modern Businesses
            </h2>
            <p className="ma-lead">
              As a full-service digital marketing agency, we bring five connected channels together under one strategy, so each
              one supports the others. Choose a service to jump straight to it.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ol className="mk-strips">
            {SERVICES.map((s) => (
              <li key={s.id} className="mk-strip-li">
                <a href={`#${s.anchor}`} className={`mk-strip mk-strip--${s.id}`}>
                  <span className="mk-strip-top">
                    <span className="mk-strip-n">{s.num}</span>
                    <span className="mk-strip-go" aria-hidden="true">
                      <FaArrowRight />
                    </span>
                  </span>
                  <StripArt id={s.id} />
                  <span className="mk-strip-t">{s.short}</span>
                  <span className="mk-strip-b">{s.blurb}</span>
                </a>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={120}>
          <p className="ma-note ma-note--center">
            Need help choosing? Our team will recommend the right mix of SEO, social media, paid ads, content and email for your
            goals and budget.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
