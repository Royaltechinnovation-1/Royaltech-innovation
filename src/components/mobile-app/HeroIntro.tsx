import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { EXPERTISE, INTRO_POINTS } from "@/data/mobile-app-page";
import { Abs, FloatCard, Phone } from "./Phone";
import { QuoteButton, Reveal } from "./client";
import { AnalyticsScreen, BookingScreen, BusinessScreen, ChatScreen, EcommerceScreen } from "./Screens";

export function Hero() {
  return (
    <section className="ma-sec ma-hero ma-dark" aria-labelledby="ma-h1">
      <div className="ma-grid-bg" aria-hidden="true" />
      <div className="ma-wrap ma-hero-grid">
        <div className="ma-hero-copy">
          <nav aria-label="Breadcrumb" className="ma-crumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li aria-current="page">Mobile App Development</li>
            </ol>
          </nav>

          <h1 id="ma-h1" className="ma-h1">
            <span className="ma-eyebrow">
              Mobile App Development<span className="ma-sr">: </span>
            </span>
            <span className="ma-h1-main">
              Mobile Applications Designed to <em>Move Your Business Forward</em>
            </span>
          </h1>

          <p className="ma-lead ma-hero-lead">
            We build powerful, intuitive, and scalable mobile applications that connect businesses with customers, simplify
            operations, and unlock new digital opportunities.
          </p>

          <ul className="ma-expertise" aria-label="Our expertise">
            {EXPERTISE.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="ma-cta-row">
            <QuoteButton service="Mobile App Development" className="ma-btn ma-btn--primary ma-btn--lg">
              Discuss Your App Idea <FaArrowRight aria-hidden="true" />
            </QuoteButton>
            <a href="#solutions" className="ma-btn ma-btn--ghost ma-btn--lg">
              Explore Our Solutions
            </a>
          </div>

          <ul className="ma-hero-notes">
            <li>Idea to App Store</li>
            <li>Native &amp; cross-platform</li>
            <li>Support after launch</li>
          </ul>
        </div>

        <div className="ma-hero-visual">
          <div className="ma-stage ma-hv" style={{ aspectRatio: "1 / 0.98" }}>
            <span className="ma-hv-glow" aria-hidden="true" />
            <Abs l={0} t={17} w={29} z={1} rot="rotateY(20deg) rotateZ(-3deg)" float={1}>
              <Phone variant="android" tone="dark" label="Business analytics dashboard app on an Android phone">
                <AnalyticsScreen />
              </Phone>
            </Abs>
            <Abs l={30.5} t={1} w={39} z={3} rot="rotateY(-6deg)" float={0}>
              <Phone variant="ios" label="Ecommerce shopping app on an iPhone">
                <EcommerceScreen />
              </Phone>
            </Abs>
            <Abs l={71} t={15} w={29} z={2} rot="rotateY(-20deg) rotateZ(3deg)" float={2}>
              <Phone variant="ios" label="Appointment booking app on an iPhone">
                <BookingScreen />
              </Phone>
            </Abs>
            <Abs l={-3} t={8} w={34} z={5} float={2}>
              <FloatCard title="Order confirmed" text="Your order is on its way" dot="green" />
            </Abs>
            <Abs r={-2} b={8} w={36} z={5} float={1}>
              <FloatCard title="Appointment reminder" text="Tomorrow at 10:30 AM" dot="cyan" />
            </Abs>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section id="overview" className="ma-sec ma-light" aria-labelledby="ma-intro-h">
      <div className="ma-wrap ma-split">
        <Reveal>
          <div className="ma-intro-copy">
            <span className="ma-eyebrow">Mobile app development company</span>
            <h2 id="ma-intro-h" className="ma-h2">
              Transform Your Ideas Into Powerful Mobile Experiences
            </h2>
            <p className="ma-lead">
              Mobile applications have become an essential part of how modern businesses connect with customers, deliver
              services, and manage operations.
            </p>
            <p className="ma-body">
              At RoyalTech Innovation, we develop mobile applications that combine intuitive user experiences, reliable
              functionality, modern technology, and scalable architecture.
            </p>
            <p className="ma-body">
              From business applications and ecommerce apps to custom enterprise solutions, we help turn your ideas into
              practical digital products designed for real-world use.
            </p>
            <p className="ma-body">
              As a mobile app development company in Mohali, we work with businesses across Punjab, Chandigarh and beyond.
              Pair your app with a fast <Link href="/services/website-development">website</Link> and a thoughtful{" "}
              <Link href="/services/ui-ux-design">UI/UX design</Link> to give customers one connected experience.
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
          <div className="ma-split-visual">
            <div className="ma-stage" style={{ aspectRatio: "1 / 0.95" }}>
              <span className="ma-blob" aria-hidden="true" />
              <Abs l={6} t={3} w={43} z={2} rot="rotateZ(-5deg)" float={0}>
                <Phone variant="ios" label="Business app home screen on an iPhone">
                  <BusinessScreen />
                </Phone>
              </Abs>
              <Abs l={46} t={14} w={43} z={3} rot="rotateZ(5deg)" float={1}>
                <Phone variant="android" label="In-app support chat on an Android phone">
                  <ChatScreen />
                </Phone>
              </Abs>
              <Abs l={-2} b={10} w={38} z={5} float={2}>
                <FloatCard tone="light" title="Payment received" text="Secure checkout complete" dot="green" />
              </Abs>
              <Abs r={-3} t={4} w={34} z={5} float={2}>
                <FloatCard tone="light" title="New message" text="Support replied" dot="blue" />
              </Abs>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
