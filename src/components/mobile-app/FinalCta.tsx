import Link from "next/link";
import { FaArrowRight, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { CONTACT, RELATED_LINKS } from "@/data/mobile-app-page";
import { Abs, FloatCard, Phone } from "./Phone";
import { QuoteButton, Reveal } from "./client";
import { AnalyticsScreen, EcommerceScreen } from "./Screens";

export function FinalCta() {
  return (
    <section id="start-your-app" className="ma-sec ma-blue ma-dark ma-cta" aria-labelledby="ma-cta-h">
      <div className="ma-grid-bg" aria-hidden="true" />
      <div className="ma-wrap ma-split">
        <Reveal>
          <div className="ma-cta-copy">
            <h2 id="ma-cta-h" className="ma-h2 ma-h2--xl">
              {"Have an App Idea? Let's Bring It to Life."}
            </h2>
            <p className="ma-lead">
              {
                "Whether you're launching a new mobile product, digitizing your business, or improving an existing application, our team is ready to help turn your vision into a powerful digital experience."
              }
            </p>

            <div className="ma-cta-row">
              <QuoteButton service="Mobile App Development" className="ma-btn ma-btn--white ma-btn--lg">
                Start Your App Project <FaArrowRight aria-hidden="true" />
              </QuoteButton>
              <Link href="/contact" className="ma-btn ma-btn--ghost ma-btn--lg">
                Talk to Our Development Team
              </Link>
            </div>

            <address className="ma-contact">
              <p>
                Looking for a mobile app development company in Chandigarh or Mohali? RoyalTech Innovation works with clients
                across Punjab, India and overseas.
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
            <div className="ma-stage" style={{ aspectRatio: "1 / 1.04" }}>
              <span className="ma-cta-light" aria-hidden="true" />
              <Abs l={4} t={14} w={38} z={1} rot="rotateZ(-6deg)" float={1}>
                <Phone variant="android" tone="dark" label="Business dashboard app on an Android phone">
                  <AnalyticsScreen />
                </Phone>
              </Abs>
              <Abs l={30} t={0} w={46} z={3} rot="rotateZ(3deg)" float={0}>
                <Phone variant="ios" label="Beautiful ecommerce mobile app on an iPhone">
                  <EcommerceScreen />
                </Phone>
              </Abs>
              <Abs r={0} b={14} w={40} z={5} float={2}>
                <FloatCard tone="light" title="Your app is live" text="Share it with your customers" dot="green" />
              </Abs>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
