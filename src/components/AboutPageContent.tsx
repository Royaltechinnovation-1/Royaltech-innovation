"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import PageHero from "@/components/PageHero";

const ABOUT_VIDEO = "/about-video.mp4";

const goals = [
  {
    title: "Fit",
    text: "We do not force a template onto your business. Every solution is shaped around your workflows, team size, budget, and growth stage—so the technology feels natural to adopt and easy to maintain.",
  },
  {
    title: "Presence",
    text: "A stronger digital presence means the right people can find you, trust you, and take action. We build websites, apps, and campaigns that communicate clearly and convert interest into measurable results.",
  },
  {
    title: "Efficiency",
    text: "Manual work and disconnected tools slow teams down. We design software and automation that remove friction from daily operations so your people can focus on customers, decisions, and growth.",
  },
  {
    title: "Partnership",
    text: "You always know where the project stands. We keep scope, timelines, and progress visible—from discovery through launch—so there are fewer surprises and better decisions along the way.",
  },
  {
    title: "Access",
    text: "Growing businesses deserve reliable technology without enterprise complexity or unnecessary cost. We keep solutions practical, secure, and affordable while still meeting professional quality standards.",
  },
  {
    title: "Progress",
    text: "Digital transformation should feel manageable. We help you adopt modern tools thoughtfully—prioritising what matters now, documenting what we build, and leaving room for the next stage of growth.",
  },
];

const values = [
  {
    title: "Innovation",
    text: "We look for better ways to solve real problems—not novelty for its own sake.",
  },
  {
    title: "Integrity",
    text: "We communicate honestly about what is possible, what it costs, and what it will take.",
  },
  {
    title: "Quality",
    text: "We care about craft: clean delivery, usable experiences, and systems that hold up in production.",
  },
  {
    title: "Transparency",
    text: "Scope, progress, and risks stay visible so you can plan with confidence.",
  },
  {
    title: "Customer satisfaction",
    text: "Success is measured by outcomes your team and customers can feel after launch.",
  },
  {
    title: "Teamwork",
    text: "We work with your stakeholders as partners—aligned on goals, accountable on delivery.",
  },
];

const approach = [
  {
    title: "Discover",
    text: "We learn your goals, constraints, users, and current systems so priorities are clear before any build begins.",
  },
  {
    title: "Plan & design",
    text: "We map timelines, architecture, experience, and budget into a roadmap you can review and approve.",
  },
  {
    title: "Build & test",
    text: "We develop with modern practices, then check quality, performance, and usability across real devices.",
  },
  {
    title: "Launch & support",
    text: "We deploy carefully, train your team where needed, and stay available as requirements evolve.",
  },
];

export default function AboutPageContent() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!playing) return;
    const video = videoRef.current;
    if (video) void video.play().catch(() => undefined);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPlaying(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [playing]);

  return (
    <div className="ap">
      <PageHero
        kicker="About Us"
        title="Technology that moves your business forward"
        lead="RoyalTech Innovation is an emerging IT solutions company and digital transformation partner. We help startups, SMEs, and established organisations design, build, and scale practical technology—with clear delivery, reliable systems, and solutions shaped around how your team actually works."
        image="/hero-about.jpg"
        imageAlt="Modern RoyalTech Innovation workplace"
        primaryHref="/contact"
        primaryLabel="Talk to us"
        secondaryHref="/services"
        secondaryLabel="Our services"
      />

      <section className="ap-section">
        <div className="ap-wrap ap-split">
          <div className="ap-copy">
            <p className="ap-kicker">Who we are</p>
            <h2>Your partner in digital transformation</h2>
            <p>
              RoyalTech Innovation exists to make technology useful for growing
              businesses. We are not here to sell tools for the sake of tools.
              We start with your commercial goals, then design and deliver
              digital solutions that fit real operations—so adoption is smoother
              and outcomes are easier to measure.
            </p>
            <p>
              Our work spans websites and e-commerce, custom software and
              automation, mobile apps, digital marketing, UI/UX and brand
              design, and IT consulting. You can engage us for a single
              capability or combine several under one accountable partner.
            </p>
            <p>
              We support clients across India, the UK, and the UAE—helping teams
              strengthen digital presence, reduce operational friction, and grow
              with systems they can rely on every day.
            </p>
          </div>

          <div className={`ap-media${playing ? " is-playing" : ""}`}>
            {playing ? (
              <video
                ref={videoRef}
                className="ap-video"
                src={ABOUT_VIDEO}
                autoPlay
                controls
                loop
                playsInline
                preload="auto"
              />
            ) : (
              <Image
                src="/about-hero.jpg"
                alt="RoyalTech Innovation workplace"
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
                className="ap-image"
                priority
              />
            )}
            {!playing ? (
              <button
                className="ap-watch"
                type="button"
                onClick={() => setPlaying(true)}
              >
                Watch
              </button>
            ) : (
              <button
                className="ap-close"
                type="button"
                onClick={() => setPlaying(false)}
              >
                Close
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="ap-section ap-section-alt">
        <div className="ap-wrap">
          <div className="ap-section-head">
            <p className="ap-kicker">Mission &amp; Vision</p>
            <h2>Why we exist—and where we are going</h2>
            <p className="ap-section-intro">
              Our mission keeps every project grounded in business outcomes. Our
              vision keeps us focused on becoming the partner clients trust for
              long-term digital progress.
            </p>
          </div>
          <div className="ap-two">
            <article className="ap-panel">
              <h3>Our Mission</h3>
              <p className="ap-panel-line">Built around your business.</p>
              <p>
                Deliver customised technology solutions that strengthen digital
                presence, make day-to-day work more efficient, and support
                sustainable growth—without unnecessary complexity, lock-in, or
                generic templates that ignore how your organisation operates.
              </p>
              <ul className="ap-list">
                <li>Customised technology solutions for real workflows</li>
                <li>Stronger websites, apps, and brand presence</li>
                <li>More efficient day-to-day operations</li>
                <li>Growth that can scale with your team</li>
              </ul>
            </article>
            <article className="ap-panel">
              <h3>Our Vision</h3>
              <p className="ap-panel-line">A trusted partner, wherever you are.</p>
              <p>
                Become a trusted global technology partner known for innovative,
                reliable IT solutions and meaningful digital transformation—
                supporting businesses of every size as they modernise, compete,
                and expand across markets.
              </p>
              <ul className="ap-list">
                <li>Trusted technology partner across regions</li>
                <li>Innovative and dependable IT delivery</li>
                <li>Transformation that creates lasting value</li>
                <li>Long-term relationships beyond launch day</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="ap-section">
        <div className="ap-wrap">
          <div className="ap-section-head">
            <p className="ap-kicker">Our goals</p>
            <h2>Six goals that guide every engagement</h2>
            <p className="ap-section-intro">
              These goals keep projects focused on outcomes you can feel in the
              business—not just features on a checklist or slides in a deck.
            </p>
          </div>
          <div className="ap-goals">
            {goals.map((goal, index) => (
              <article key={goal.title} className="ap-goal">
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{goal.title}</h3>
                <p>{goal.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-section ap-section-alt">
        <div className="ap-wrap">
          <div className="ap-section-head">
            <p className="ap-kicker">Our approach</p>
            <h2>Business first. Technology second.</h2>
            <p className="ap-section-intro">
              Every engagement follows a clear path so startups, SMEs, and
              established organisations get dependable delivery without
              unnecessary complexity.
            </p>
          </div>
          <div className="ap-goals ap-approach">
            {approach.map((item, index) => (
              <article key={item.title} className="ap-goal">
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-section">
        <div className="ap-wrap ap-split ap-split-reverse">
          <div className="ap-copy">
            <p className="ap-kicker">Our values</p>
            <h2>Principles we work by, every day</h2>
            <p>
              How we show up matters as much as what we build. These values
              shape discovery workshops, design decisions, development quality,
              and the way we support you after go-live.
            </p>
            <div className="ap-value-grid">
              {values.map((value) => (
                <article key={value.title} className="ap-value">
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="ap-portrait">
            <Image
              src="/about-working-with-client.jpg"
              alt="RoyalTech Innovation team working with a client"
              width={720}
              height={720}
              className="ap-portrait-image"
            />
            <div className="ap-portrait-meta">
              <h3>Working with clients</h3>
              <p>
                Side-by-side collaboration—listening first, shaping the plan
                together, and delivering with clarity from kickoff to launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ap-cta">
        <div className="ap-wrap ap-cta-inner">
          <h2>Ready to build with a partner you can trust?</h2>
          <p>
            Tell us what you are trying to achieve—a new website, custom
            software, a mobile app, marketing support, or a broader digital
            transformation plan. We will help you define the right scope and a
            clear next step.
          </p>
          <div className="ap-cta-actions">
            <Link className="btn btn-soft" href="/contact">
              Request a Quote
            </Link>
            <Link className="ap-link-btn" href="/services">
              Explore our services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
