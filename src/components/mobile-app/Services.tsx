import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { SiAndroid, SiApple, SiFlutter, SiReact } from "react-icons/si";
import { SERVICES, type ServiceBlock } from "@/data/mobile-app-page";
import { Abs, FloatCard, Phone } from "./Phone";
import { QuoteButton, Reveal } from "./client";
import {
  AnalyticsScreen,
  AuthScreen,
  BookingScreen,
  BusinessScreen,
  EcommerceScreen,
  PaymentScreen,
  TrackingScreen,
  UpdateScreen,
} from "./Screens";
import { CustomWindow, MaintWindow } from "./Windows";

const byId = (id: string) => SERVICES.find((s) => s.id === id)!;

function ServiceCopy({ s, note, ctaClass = "ma-btn ma-btn--primary" }: { s: ServiceBlock; note?: React.ReactNode; ctaClass?: string }) {
  return (
    <div className="ma-svc-copy">
      <span className="ma-svc-num" aria-hidden="true">
        {s.num}
      </span>
      <h3 id={`${s.id}-h`} className="ma-h3">
        {s.title}
      </h3>
      {s.description.map((p) => (
        <p key={p} className="ma-lead ma-svc-p">
          {p}
        </p>
      ))}
      {s.tech ? (
        <ul className="ma-tech-chips" aria-label={`${s.short} technologies`}>
          {s.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      ) : null}
      <ul className="ma-list">
        {s.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {note ? <p className="ma-note">{note}</p> : null}
      <div className="ma-cta-row">
        <QuoteButton service={s.ctaService} className={ctaClass}>
          {s.cta} <FaArrowRight aria-hidden="true" />
        </QuoteButton>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Overview + six sections                                              */
/* ------------------------------------------------------------------ */

export function SolutionsOverview() {
  const [s1, s2, s3, s4, s5, s6] = SERVICES;
  return (
    <section id="solutions" className="ma-sec ma-tint ma-sec--tight-bottom" aria-labelledby="ma-sol-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-sec-head">
            <span className="ma-eyebrow">Our mobile app development services</span>
            <h2 id="ma-sol-h" className="ma-h2">
              Mobile App Development Solutions for Every Business Need
            </h2>
            <p className="ma-lead">
              Whether you need Android app development, iOS app development, a cross-platform product or a fully custom
              platform, our mobile application development services cover design, engineering, launch and long-term support.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="ma-bento">
            <a href={`#${s1.id}`} className="ma-bento-card b1">
              <span className="ma-bento-num">{s1.num}</span>
              <span className="ma-bento-t">{s1.short}</span>
              <span className="ma-bento-s">{s1.blurb}</span>
              <span className="ma-bento-go">
                Explore <FaArrowRight aria-hidden="true" />
              </span>
              <span className="ma-bento-phone" aria-hidden="true">
                <Phone variant="ios" label="Business app preview">
                  <BusinessScreen />
                </Phone>
              </span>
            </a>
            <a href={`#${s2.id}`} className="ma-bento-card b2">
              <span className="ma-bento-num">{s2.num}</span>
              <span className="ma-bento-t">{s2.short}</span>
              <span className="ma-bento-s">{s2.blurb}</span>
              <span className="ma-bento-go">
                Explore <FaArrowRight aria-hidden="true" />
              </span>
              <span className="ma-bento-logo ma-bento-logo--android" aria-hidden="true">
                <SiAndroid />
              </span>
            </a>
            <a href={`#${s3.id}`} className="ma-bento-card b3">
              <span className="ma-bento-num">{s3.num}</span>
              <span className="ma-bento-t">{s3.short}</span>
              <span className="ma-bento-s">{s3.blurb}</span>
              <span className="ma-bento-go">
                Explore <FaArrowRight aria-hidden="true" />
              </span>
              <span className="ma-bento-logo ma-bento-logo--ios" aria-hidden="true">
                <SiApple />
              </span>
            </a>
            <a href={`#${s4.id}`} className="ma-bento-card b4">
              <span className="ma-bento-num">{s4.num}</span>
              <span className="ma-bento-t">{s4.short}</span>
              <span className="ma-bento-s">{s4.blurb}</span>
              <span className="ma-bento-go">
                Explore <FaArrowRight aria-hidden="true" />
              </span>
              <span className="ma-bento-marks" aria-hidden="true">
                <SiReact />
                <SiFlutter />
              </span>
            </a>
            <a href={`#${s5.id}`} className="ma-bento-card b5">
              <span className="ma-bento-num">{s5.num}</span>
              <span className="ma-bento-t">{s5.short}</span>
              <span className="ma-bento-s">{s5.blurb}</span>
              <span className="ma-bento-go">
                Explore <FaArrowRight aria-hidden="true" />
              </span>
              <span className="ma-bento-bars" aria-hidden="true">
                {[38, 62, 48, 80, 58, 92, 70].map((n, i) => (
                  <i key={i} style={{ height: `${n}%` }} />
                ))}
              </span>
            </a>
            <a href={`#${s6.id}`} className="ma-bento-card b6">
              <span className="ma-bento-num">{s6.num}</span>
              <span className="ma-bento-t">{s6.short}</span>
              <span className="ma-bento-s">{s6.blurb}</span>
              <span className="ma-bento-go">
                Explore <FaArrowRight aria-hidden="true" />
              </span>
              <span className="ma-bento-ver" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 01 · Mobile App Development: tinted, text left, fanned devices right. */
export function ServiceMobileApp() {
  const s = byId("mobile-app-development");
  return (
    <section id={s.id} className="ma-sec ma-tint ma-sec--tight-top ma-scroll" aria-labelledby={`${s.id}-h`}>
      <div className="ma-wrap ma-split">
        <Reveal>
          <ServiceCopy
            s={s}
            note={
              <>
                Not sure where to start? Our <Link href="/services/it-consulting">IT consulting</Link> team can help shape your app roadmap.
              </>
            }
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="ma-split-visual">
            <div className="ma-stage" style={{ aspectRatio: "1 / 0.98" }}>
              <span className="ma-blob" aria-hidden="true" />
              <Abs l={2} t={20} w={30} z={1} rot="rotateY(18deg) rotateZ(-3deg)" float={1}>
                <Phone variant="ios" label="Appointment booking app on an iPhone">
                  <BookingScreen />
                </Phone>
              </Abs>
              <Abs l={31} t={2} w={39} z={3} rot="rotateY(-4deg)" float={0}>
                <Phone variant="ios" label="Business mobile app on an iPhone">
                  <BusinessScreen />
                </Phone>
              </Abs>
              <Abs l={69} t={18} w={30} z={2} rot="rotateY(-18deg) rotateZ(3deg)" float={2}>
                <Phone variant="android" label="On-demand tracking app on an Android phone">
                  <TrackingScreen />
                </Phone>
              </Abs>
              <Abs l={-2} b={6} w={36} z={5} float={2}>
                <FloatCard tone="light" title="Order placed" text="Confirmation sent" dot="green" />
              </Abs>
              <Abs r={-2} t={4} w={34} z={5} float={1}>
                <FloatCard tone="light" title="Provider assigned" text="On the way" dot="blue" />
              </Abs>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 02 · Android: visual left, spotlight panel with Android devices. */
export function ServiceAndroid() {
  const s = byId("android-app-development");
  return (
    <section id={s.id} className="ma-sec ma-light ma-scroll" aria-labelledby={`${s.id}-h`}>
      <div className="ma-wrap ma-split ma-split--rev">
        <Reveal>
          <ServiceCopy s={s} />
        </Reveal>
        <Reveal delay={120}>
          <div className="ma-split-visual">
            <div className="ma-spot ma-spot--android">
              <div className="ma-stage" style={{ aspectRatio: "1 / 0.94" }}>
                <Abs l={7} t={9} w={36} z={2} rot="rotateZ(-6deg)" float={1}>
                  <Phone variant="android" tone="dark" label="Analytics dashboard in dark theme on an Android phone">
                    <AnalyticsScreen />
                  </Phone>
                </Abs>
                <Abs l={34} t={3} w={42} z={3} rot="rotateZ(2deg)" float={0}>
                  <Phone variant="android" label="Ecommerce app in light theme on an Android phone">
                    <EcommerceScreen />
                  </Phone>
                </Abs>
                <Abs l={68} t={20} w={29} z={2} rot="rotateZ(7deg)" float={2}>
                  <Phone variant="android" label="Sign-in screen on an Android phone">
                    <AuthScreen />
                  </Phone>
                </Abs>
                <Abs l={2} b={5} w={40} z={5} float={2}>
                  <FloatCard tone="navy" title="Deployment assistance" text="Google Play submission" dot="green" />
                </Abs>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 03 · iOS: minimal, centred layout on white with a row of iPhones. */
export function ServiceIos() {
  const s = byId("ios-app-development");
  return (
    <section id={s.id} className="ma-sec ma-ios ma-scroll" aria-labelledby={`${s.id}-h`}>
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-ios-head">
            <span className="ma-svc-num" aria-hidden="true">
              {s.num}
            </span>
            <h3 id={`${s.id}-h`} className="ma-h3 ma-h3--xl">
              {s.title}
            </h3>
            {s.description.map((p) => (
              <p key={p} className="ma-lead">
                {p}
              </p>
            ))}
            <ul className="ma-tech-chips ma-tech-chips--center" aria-label="iOS technologies">
              {s.tech?.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="ma-ios-stage">
            <div className="ma-stage" style={{ aspectRatio: "1.9 / 1" }}>
              <Abs l={14} t={10} w={21} z={1} rot="rotateZ(-3deg)" float={1}>
                <Phone variant="ios" label="Sign-in screen on an iPhone">
                  <AuthScreen />
                </Phone>
              </Abs>
              <Abs l={39} t={0} w={22} z={3} float={0}>
                <Phone variant="ios" label="Ecommerce app on an iPhone">
                  <EcommerceScreen />
                </Phone>
              </Abs>
              <Abs l={65} t={10} w={21} z={1} rot="rotateZ(3deg)" float={2}>
                <Phone variant="ios" label="Secure checkout screen on an iPhone">
                  <PaymentScreen />
                </Phone>
              </Abs>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <ul className="ma-ios-grid">
            {s.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="ma-cta-row ma-cta-row--center">
            <QuoteButton service={s.ctaService}>
              {s.cta} <FaArrowRight aria-hidden="true" />
            </QuoteButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 04 · Cross-platform: blue gradient, same app on Android and iOS joined by a shared codebase. */
export function ServiceCross() {
  const s = byId("cross-platform-app-development");
  return (
    <section id={s.id} className="ma-sec ma-blue ma-dark ma-scroll" aria-labelledby={`${s.id}-h`}>
      <div className="ma-grid-bg" aria-hidden="true" />
      <div className="ma-wrap ma-split">
        <Reveal>
          <ServiceCopy s={s} ctaClass="ma-btn ma-btn--white" />
        </Reveal>
        <Reveal delay={120}>
          <div className="ma-split-visual">
            <div className="ma-stage" style={{ aspectRatio: "1 / 0.96" }}>
              <svg className="ma-links" viewBox="0 0 100 96" preserveAspectRatio="none" aria-hidden="true">
                <path d="M50 11 C50 22 26 20 25 30" />
                <path d="M50 11 C50 22 74 20 75 30" />
                <path className="mid" d="M40 62 C46 56 54 68 60 62" />
              </svg>
              <Abs l={30} t={0} w={40} z={4}>
                <span className="ma-node">One codebase</span>
              </Abs>
              <Abs l={4} t={14} w={38} z={2} rot="rotateZ(-3deg)" float={1}>
                <Phone variant="android" label="The same ecommerce app running on an Android phone">
                  <EcommerceScreen />
                </Phone>
              </Abs>
              <Abs l={58} t={14} w={38} z={2} rot="rotateZ(3deg)" float={2}>
                <Phone variant="ios" label="The same ecommerce app running on an iPhone">
                  <EcommerceScreen />
                </Phone>
              </Abs>
              <Abs l={5} b={4} w={22} z={5}>
                <span className="ma-tag">Android</span>
              </Abs>
              <Abs r={5} b={4} w={22} z={5}>
                <span className="ma-tag ma-tag--r">iOS</span>
              </Abs>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 05 · Custom: dark navy, backend dashboard + device mockups. */
export function ServiceCustom() {
  const s = byId("custom-mobile-app-development");
  return (
    <section id={s.id} className="ma-sec ma-navy ma-dark ma-scroll" aria-labelledby={`${s.id}-h`}>
      <div className="ma-wrap ma-split ma-split--rev">
        <Reveal>
          <ServiceCopy
            s={s}
            note={
              <>
                Connecting to systems you already use? See our <Link href="/services/crm">CRM solutions</Link> and{" "}
                <Link href="/services/software-development">custom software development</Link>.
              </>
            }
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="ma-split-visual">
            <div className="ma-stage" style={{ aspectRatio: "1 / 0.86" }}>
              <span className="ma-hv-glow" aria-hidden="true" />
              <Abs l={0} t={4} w={88} z={1} float={0}>
                <CustomWindow />
              </Abs>
              <Abs l={62} t={28} w={25} z={3} rot="rotateZ(3deg)" float={1}>
                <Phone variant="ios" tone="dark" label="Business analytics app on an iPhone">
                  <AnalyticsScreen />
                </Phone>
              </Abs>
              <Abs l={42} t={46} w={22} z={2} rot="rotateZ(-4deg)" float={2}>
                <Phone variant="android" label="Booking app on an Android phone">
                  <BookingScreen />
                </Phone>
              </Abs>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 06 · Maintenance: white, release manager next to a phone with update notifications. */
export function ServiceMaintenance() {
  const s = byId("app-maintenance-support");
  return (
    <section id={s.id} className="ma-sec ma-light ma-scroll" aria-labelledby={`${s.id}-h`}>
      <div className="ma-wrap ma-split">
        <Reveal>
          <ServiceCopy
            s={s}
            note={
              <>
                Ready to reach more users? Pair your launch with <Link href="/services/digital-marketing">digital marketing &amp; SEO</Link>.
              </>
            }
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="ma-split-visual">
            <div className="ma-stage" style={{ aspectRatio: "1 / 0.86" }}>
              <span className="ma-blob" aria-hidden="true" />
              <Abs r={0} t={4} w={80} z={1} float={0}>
                <MaintWindow />
              </Abs>
              <Abs l={4} t={20} w={32} z={3} rot="rotateZ(-4deg)" float={1}>
                <Phone variant="ios" label="App update notifications on an iPhone">
                  <UpdateScreen />
                </Phone>
              </Abs>
              <Abs r={-1} b={2} w={38} z={5} float={2}>
                <FloatCard tone="light" title="Update available" text="Ready for review" dot="amber" />
              </Abs>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
