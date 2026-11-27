import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { SERVICES, type DesignService } from "@/data/uiux-page";
import { Abs, FloatCard, Phone } from "@/components/mobile-app/Phone";
import { Reveal } from "@/components/mobile-app/client";
import {
  AnalyticsScreen,
  AuthScreen,
  BookingScreen,
  BusinessScreen,
  EcommerceScreen,
  PaymentScreen,
} from "@/components/mobile-app/Screens";
import { AppDash, AppSaas } from "./Apps";
import { UxQuoteButton, WireCompare } from "./Interactive";
import { Cursor, PalettePanel, PersonaCard, ProcessArt } from "./Panels";
import { Browser, SiteLanding, SiteMobile, WireScreen } from "./Sites";

const byId = (id: DesignService["id"]) => SERVICES.find((s) => s.id === id)!;

function Copy({
  s,
  headId,
  children,
  chips = false,
}: {
  s: DesignService;
  headId: string;
  children?: ReactNode;
  chips?: boolean;
}) {
  return (
    <>
      <span className="ux-num">
        <b>{s.num}</b>
        {s.tag}
      </span>
      <h3 id={headId} className="ma-h3 ma-h3--xl">
        {s.heading}
      </h3>
      {s.description.map((p, i) => (
        <p key={p} className={i === 0 ? "ma-lead" : "ma-body"}>
          {p}
        </p>
      ))}
      {children}
      {chips ? (
        <ul className="ma-tech-chips" aria-label={`${s.short} deliverables`}>
          {s.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      ) : (
        <ul className="ma-list" aria-label={`${s.short} deliverables`}>
          {s.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      )}
      <p className="ma-note">{s.local}</p>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* 01 UI/UX design: large website showcase with annotated hotspots     */
/* ------------------------------------------------------------------ */
export function ServiceUiUx() {
  const s = byId("ui-ux");
  return (
    <section id={s.anchor} className="ma-sec ma-light ux-scroll-m" aria-labelledby="ux-s1-h">
      <div className="ma-wrap ux-svc ux-svc--wide">
        <Reveal>
          <div className="ux-svc-copy">
            <Copy s={s} headId="ux-s1-h" />
            <div className="ma-cta-row">
              <UxQuoteButton service="UI/UX Design" className="ma-btn ma-btn--primary ma-btn--lg">
                {s.cta} <FaArrowRight aria-hidden="true" />
              </UxQuoteButton>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="ux-svc-visual">
            <div className="ma-stage" style={{ aspectRatio: "1 / 0.82" }}>
              <span className="ma-blob" aria-hidden="true" />
              <Abs l={0} t={4} w={88} z={2} float={0}>
                <Browser url="northwind.studio" label="Large website UI/UX design showcase with navigation, hero, call to action and feature sections">
                  <SiteLanding />
                </Browser>
              </Abs>
              <Abs l={70} t={30} w={29} z={4} float={1}>
                <Phone variant="ios" label="Responsive mobile layout of the same website on an iPhone">
                  <SiteMobile />
                </Phone>
              </Abs>
              <Abs l={9} t={6} z={6}>
                <span className="ux-pin" aria-hidden="true">
                  <b>1</b>Clear navigation
                </span>
              </Abs>
              <Abs l={19} t={41} z={6}>
                <span className="ux-pin" aria-hidden="true">
                  <b>2</b>One focused action
                </span>
              </Abs>
              <Abs l={14} t={59} z={6}>
                <span className="ux-pin" aria-hidden="true">
                  <b>3</b>Readable hierarchy
                </span>
              </Abs>
              <Abs l={-2} b={-1} w={34} z={5} float={2}>
                <FloatCard tone="light" title="Responsive layout" text="Adapts from desktop to mobile" dot="blue" />
              </Abs>
              <Abs l={36} b={-3} w={30} z={5} float={1}>
                <FloatCard tone="light" title="Accessible by design" text="Contrast and focus states" dot="green" />
              </Abs>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 02 Mobile app UI/UX: a fan of four different app interfaces         */
/* ------------------------------------------------------------------ */
export function ServiceMobileUx() {
  const s = byId("mobile");
  return (
    <section id={s.anchor} className="ma-sec ma-tint" aria-labelledby="ux-s2-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ux-svc-top">
            <div>
              <span className="ux-num">
                <b>{s.num}</b>
                {s.tag}
              </span>
              <h3 id="ux-s2-h" className="ma-h3 ma-h3--xl">
                {s.heading}
              </h3>
            </div>
            <div>
              {s.description.map((p, i) => (
                <p key={p} className={i === 0 ? "ma-lead" : "ma-body"}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="ux-fan-scroll">
            <div className="ma-stage ux-fan" style={{ aspectRatio: "1.72 / 1" }}>
              <Abs l={2} t={9} w={21} z={2} float={1}>
                <Phone className="ux-fan-phone ux-fan-phone--login" variant="ios" label="Login and onboarding screen of a mobile app on an iPhone">
                  <Image
                    src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_900/v1795782984/Screenshot_2026-11-27_at_6.04.57_PM.png"
                    alt="Login and onboarding screen of a mobile app"
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="ux-fan-shot"
                  />
                </Phone>
              </Abs>
              <Abs l={26} t={0} w={22} z={3} float={0}>
                <Phone className="ux-fan-phone ux-fan-phone--catalogue" variant="ios" label="Ecommerce home screen with product browsing and bottom navigation on an iPhone">
                  <Image
                    src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_900/v1795782984/Screenshot_2026-11-27_at_6.05.30_PM.png"
                    alt="Course catalogue screen of a mobile app"
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="ux-fan-shot"
                  />
                </Phone>
              </Abs>
              <Abs l={52} t={11} w={21} z={2} float={2}>
                <Phone className="ux-fan-phone ux-fan-phone--dashboard" variant="android" label="Business app profile and account screen on an Android phone">
                  <Image
                    src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_900/v1795782985/Screenshot_2026-11-27_at_6.05.49_PM.png"
                    alt="Learner dashboard screen of a mobile app"
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="ux-fan-shot"
                  />
                </Phone>
              </Abs>
              <Abs l={76} t={3} w={22} z={3} float={1}>
                <Phone className="ux-fan-phone ux-fan-phone--progress" variant="ios" tone="dark" label="Analytics dashboard mobile application screen on an iPhone">
                  <Image
                    src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_900/v1795782985/Screenshot_2026-11-27_at_6.06.05_PM.png"
                    alt="Course progress dashboard screen of a mobile app"
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="ux-fan-shot"
                  />
                </Phone>
              </Abs>
              {[
                [2, "Login & onboarding"],
                [26, "Ecommerce home"],
                [52, "Profile & business"],
                [76, "Dashboard"],
              ].map(([l, t]) => (
                <Abs key={t} l={l as number} b={0} w={22} z={4}>
                  <span className="ma-cap">{t}</span>
                </Abs>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="ux-svc-foot">
            <ul className="ma-list" aria-label={`${s.short} deliverables`}>
              {s.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
            <div>
              <p className="ma-note ux-note-top">{s.local}</p>
              <div className="ma-cta-row">
                <UxQuoteButton service="Mobile App UI/UX Design" className="ma-btn ma-btn--primary ma-btn--lg">
                  {s.cta} <FaArrowRight aria-hidden="true" />
                </UxQuoteButton>
                <Link href="/services/mobile-app-development" className="ma-btn ma-btn--outline ma-btn--lg">
                  Mobile App Development
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 03 Dashboard design: copy + deliverables above a full-width dashboard */
/* ------------------------------------------------------------------ */
export function ServiceDashboard() {
  const s = byId("dashboard");
  return (
    <section id={s.anchor} className="ma-sec ma-navy ma-dark" aria-labelledby="ux-s3-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ux-svc-top ux-svc-top--dark">
            <div>
              <span className="ux-num">
                <b>{s.num}</b>
                {s.tag}
              </span>
              <h3 id="ux-s3-h" className="ma-h3 ma-h3--xl">
                {s.heading}
              </h3>
              {s.description.map((p, i) => (
                <p key={p} className={i === 0 ? "ma-lead" : "ma-body"}>
                  {p}
                </p>
              ))}
            </div>
            <div>
              <ul className="ma-list" aria-label={`${s.short} deliverables`}>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <p className="ma-note">
                {s.local} See also our <Link href="/services/crm">CRM solutions</Link> and{" "}
                <Link href="/services/software-development">custom software development</Link>.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="ux-dash-wrap">
            <div className="ma-stage ux-dash-stage" style={{ aspectRatio: "16 / 10.5" }}>
              <span className="ux-dash-glow" aria-hidden="true" />
              <Abs l={0} t={0} w={100} z={2}>
                <AppDash />
              </Abs>
              <Abs l={2} t={64} z={6}>
                <span className="ux-pin ux-pin--dark" aria-hidden="true">
                  <b>1</b>Sidebar navigation
                </span>
              </Abs>
              <Abs l={62} t={18.5} z={6}>
                <span className="ux-pin ux-pin--dark" aria-hidden="true">
                  <b>2</b>KPI cards
                </span>
              </Abs>
              <Abs l={33} t={44.5} z={6}>
                <span className="ux-pin ux-pin--dark" aria-hidden="true">
                  <b>3</b>Charts &amp; graphs
                </span>
              </Abs>
              <Abs l={36} t={80.5} z={6}>
                <span className="ux-pin ux-pin--dark" aria-hidden="true">
                  <b>4</b>Data tables
                </span>
              </Abs>
              <Abs l={52} t={9.5} z={6}>
                <span className="ux-pin ux-pin--dark" aria-hidden="true">
                  <b>5</b>Filters
                </span>
              </Abs>
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="ma-cta-row ma-cta-row--center">
            <UxQuoteButton service="Dashboard Design" className="ma-btn ma-btn--primary ma-btn--lg">
              {s.cta} <FaArrowRight aria-hidden="true" />
            </UxQuoteButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 04 Wireframing & prototyping: compare slider + five-stage pipeline  */
/* ------------------------------------------------------------------ */
const PIPE_STAGES = ["Rough sketch", "User flow", "Wireframe", "High-fidelity UI", "Interactive prototype"];

export function ServiceWireframing() {
  const s = byId("prototyping");
  return (
    <section id={s.anchor} className="ma-sec ma-light" aria-labelledby="ux-s4-h">
      <div className="ma-wrap">
        <div className="ma-split ux-svc ux-svc--even">
          <Reveal>
            <div className="ux-svc-copy">
              <Copy s={s} headId="ux-s4-h" />
              <div className="ma-cta-row">
                <UxQuoteButton service="Wireframing & Prototyping" className="ma-btn ma-btn--primary ma-btn--lg">
                  {s.cta} <FaArrowRight aria-hidden="true" />
                </UxQuoteButton>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <WireCompare />
          </Reveal>
        </div>

        <Reveal delay={60}>
          <div className="ux-pipe-wrap">
            <p className="ux-pipe-title" id="ux-pipe-h">
              From rough sketch to interactive prototype
            </p>
            <ol className="ux-pipe" aria-labelledby="ux-pipe-h">
              <li>
                <span className="ux-pipe-k">
                  <b>01</b>
                  {PIPE_STAGES[0]}
                </span>
                <div className="ux-fr ux-fr--idea" aria-hidden="true">
                  <b>App idea</b>
                  <span className="q">Who is it for?</span>
                  <span className="q">What problem does it solve?</span>
                  <span className="q">What does success look like?</span>
                  <i className="sk" />
                </div>
              </li>
              <li>
                <span className="ux-pipe-k">
                  <b>02</b>
                  {PIPE_STAGES[1]}
                </span>
                <div className="ux-fr ux-fr--flow" aria-hidden="true">
                  <ProcessArt kind="strategy" />
                  <span className="cap">Screens &amp; decisions</span>
                </div>
              </li>
              <li>
                <span className="ux-pipe-k">
                  <b>03</b>
                  {PIPE_STAGES[2]}
                </span>
                <div className="ux-fr-phone">
                  <Phone variant="ios" label="Low-fidelity grayscale wireframe of a mobile app screen">
                    <WireScreen />
                  </Phone>
                </div>
              </li>
              <li>
                <span className="ux-pipe-k">
                  <b>04</b>
                  {PIPE_STAGES[3]}
                </span>
                <div className="ux-fr-phone">
                  <Phone variant="ios" label="Polished high-fidelity mobile app design">
                    <EcommerceScreen />
                  </Phone>
                </div>
              </li>
              <li>
                <span className="ux-pipe-k">
                  <b>05</b>
                  {PIPE_STAGES[4]}
                </span>
                <div className="ux-fr-phone ux-fr-phone--hot">
                  <Phone variant="ios" label="Interactive prototype of a booking app with a tappable hotspot">
                    <BookingScreen />
                  </Phone>
                  <span className="ux-hot" aria-hidden="true" />
                  <Cursor label="Tap to preview" className="ux-hot-cursor" />
                </div>
              </li>
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 05 Product design: dark product scene with connected components     */
/* ------------------------------------------------------------------ */
export function ServiceProduct() {
  const s = byId("product");
  return (
    <section id={s.anchor} className="ma-sec ma-navy ma-dark ux-product" aria-labelledby="ux-s5-h">
      <div className="ma-grid-bg" aria-hidden="true" />
      <div className="ma-wrap ma-split ux-svc ux-svc--even">
        <Reveal>
          <div className="ux-svc-copy">
            <Copy s={s} headId="ux-s5-h" chips />
            <div className="ma-cta-row">
              <UxQuoteButton service="Product Design" className="ma-btn ma-btn--primary ma-btn--lg">
                {s.cta} <FaArrowRight aria-hidden="true" />
              </UxQuoteButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="ma-split-visual ux-prod-visual">
            <div className="ma-stage" style={{ aspectRatio: "1 / 0.98" }}>
              <span className="ux-prod-glow" aria-hidden="true" />
              <svg className="ma-links" viewBox="0 0 100 98" preserveAspectRatio="none" aria-hidden="true">
                <path d="M14 10 C14 22 24 24 30 30" />
                <path d="M82 8 C82 22 74 24 68 30" className="mid" />
                <path d="M12 92 C14 80 24 76 32 70" />
                <path d="M76 92 C74 82 70 78 66 72" className="mid" />
              </svg>
              <Abs l={4} t={14} w={84} z={2} float={0}>
                <AppSaas />
              </Abs>
              <Abs l={64} t={38} w={25} z={4} float={1}>
                <Phone variant="ios" tone="dark" label="Product dashboard mobile app screen on an iPhone">
                  <AnalyticsScreen />
                </Phone>
              </Abs>
              <Abs l={76} t={55} w={25} z={3} float={2}>
                <Phone variant="android" label="Checkout flow mobile app screen on an Android phone">
                  <PaymentScreen />
                </Phone>
              </Abs>
              <Abs l={-2} t={0} w={30} z={6} float={2}>
                <FloatCard tone="navy" title="Product discovery" text="Goals, users, scope" dot="cyan" />
              </Abs>
              <Abs r={0} t={0} w={30} z={6} float={1}>
                <FloatCard tone="navy" title="UX strategy" text="Journeys & priorities" dot="blue" />
              </Abs>
              <Abs l={-1} b={0} w={31} z={6} float={1}>
                <PersonaCard className="up--dark" />
              </Abs>
              <Abs l={31} b={-1} w={26} z={6} float={0}>
                <PalettePanel className="up--dark" />
              </Abs>
              <Abs r={2} b={0} w={28} z={6} float={2}>
                <FloatCard tone="navy" title="Design system" text="Reusable components" dot="green" />
              </Abs>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}