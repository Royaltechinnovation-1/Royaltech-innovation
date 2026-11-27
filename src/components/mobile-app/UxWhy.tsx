import Link from "next/link";
import { DESIGN_ITEMS, WHY } from "@/data/mobile-app-page";
import { Abs, FloatCard, Phone } from "./Phone";
import { Reveal } from "./client";
import { DesignScreen, NotificationsScreen } from "./Screens";

/** Wireframe → prototype → final UI across a wide stage, plus a small design-system card. */
export function DesignSection() {
  return (
    <section id="ui-ux-design" className="ma-sec ma-tint" aria-labelledby="ma-ux-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-ux-head">
            <div>
              <span className="ma-eyebrow">Mobile UI/UX design</span>
              <h2 id="ma-ux-h" className="ma-h2">
                Beautiful Interfaces. Seamless Experiences.
              </h2>
            </div>
            <div className="ma-ux-copy">
              <p className="ma-lead">Great mobile applications are built around the people who use them.</p>
              <p className="ma-body">
                We focus on intuitive navigation, thoughtful interactions, accessible layouts, and user-centered design to
                create mobile experiences that feel natural, engaging, and easy to use.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="ma-ux-scroll">
            <div className="ma-stage ma-ux-stage" style={{ aspectRatio: "2.1 / 1" }}>
              <svg className="ma-ux-arrows" viewBox="0 0 100 48" preserveAspectRatio="none" aria-hidden="true">
                <path d="M22.5 22 C24 17 26 17 27.5 22" />
                <path d="M47.5 22 C49 17 51 17 52.5 22" />
                <path d="M72.5 22 C74 17 76 17 77.5 22" />
              </svg>
              <Abs l={3} t={8} w={19} z={2} float={0}>
                <Phone variant="ios" label="Low-fidelity wireframe of a mobile app screen">
                  <DesignScreen level={1} />
                </Phone>
              </Abs>
              <Abs l={28} t={4} w={19} z={2} float={1}>
                <Phone variant="ios" label="Mid-fidelity prototype of the same mobile app screen">
                  <DesignScreen level={2} />
                </Phone>
              </Abs>
              <Abs l={53} t={0} w={19} z={3} float={2}>
                <Phone variant="ios" label="Final polished UI of the same mobile app screen">
                  <DesignScreen level={3} />
                </Phone>
              </Abs>
              <Abs l={3} b={1} w={19} z={4}>
                <span className="ma-cap">01 · Wireframe</span>
              </Abs>
              <Abs l={28} b={1} w={19} z={4}>
                <span className="ma-cap">02 · Prototype</span>
              </Abs>
              <Abs l={53} b={1} w={19} z={4}>
                <span className="ma-cap ma-cap--on">03 · Final UI</span>
              </Abs>
              <Abs l={79} t={8} w={20} z={3} float={1}>
                <div className="ma-styleguide" aria-hidden="true">
                  <div className="ma-sg-k">Design system</div>
                  <div className="ma-sg-aa">Aa</div>
                  <div className="ma-sg-sw">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="ma-sg-row">
                    <span className="ma-sg-btn" />
                    <span className="ma-sg-btn ghost" />
                  </div>
                </div>
              </Abs>
              <Abs l={76} b={8} w={24} z={5} float={2}>
                <FloatCard tone="light" title="User journey mapped" text="Discover, browse, checkout" dot="cyan" />
              </Abs>
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <ul className="ma-ux-items">
            {DESIGN_ITEMS.map((d, i) => (
              <li key={d}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {d}
              </li>
            ))}
          </ul>
          <p className="ma-note ma-note--center">
            Looking for a design-only engagement or a refresh? Explore our{" "}
            <Link href="/services/ui-ux-design">UI/UX design services</Link>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** Editorial layout: oversized heading and device on the left, numbered principles on the right. */
export function WhySection() {
  return (
    <section id="why-royaltech" className="ma-sec ma-navy ma-dark" aria-labelledby="ma-why-h">
      <div className="ma-grid-bg" aria-hidden="true" />
      <div className="ma-wrap ma-why">
        <Reveal>
          <div className="ma-why-lead">
            <span className="ma-eyebrow">Why choose RoyalTech Innovation</span>
            <h2 id="ma-why-h" className="ma-h2 ma-h2--xl">
              Your Trusted Partner for Mobile App Development
            </h2>
            <p className="ma-lead">
              From our base in Mohali, we deliver mobile app development services in Chandigarh and across Punjab, India and
              overseas, with a team that treats your app like its own product.
            </p>
            <div className="ma-why-device" aria-hidden="true">
              <div className="ma-stage" style={{ aspectRatio: "1 / 0.8" }}>
                <Abs l={22} t={0} w={44} z={2} float={0}>
                  <Phone variant="ios" tone="dark" label="Notifications screen of a mobile app">
                    <NotificationsScreen />
                  </Phone>
                </Abs>
                <Abs r={0} t={26} w={40} z={4} float={2}>
                  <FloatCard tone="glass" title="Build ready for review" text="Shared with your team" dot="green" />
                </Abs>
              </div>
            </div>
          </div>
        </Reveal>

        <ol className="ma-why-list">
          {WHY.map((item, i) => (
            <li key={item.title} className="ma-why-item">
              <Reveal delay={(i % 2) * 80}>
                <span className="ma-why-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="ma-why-t">{item.title}</h3>
                <p className="ma-why-p">{item.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
