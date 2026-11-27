import "@/styles/services-showcase.css";
import "@/styles/mobile-app.css";
import "@/styles/uiux.css";
import "@/styles/mk-mock.css";
import "@/styles/mk.css";
import { Hero, Intro, Overview } from "./HeroIntro";
import { Faq, Industries } from "./Interactive";
import { ServiceAds, ServiceContent, ServiceEmail, ServiceSeo, ServiceSocial } from "./ServiceSections";
import {
  Analytics,
  Capabilities,
  ContentStrategy,
  EmailAutomation,
  FinalCta,
  Organic,
  Paid,
  Process,
  SocialStrategy,
  Strategy,
  Why,
} from "./Sections";

/**
 * /services/digital-marketing. Same RoyalTech design language as the other service pages (it reuses the
 * `ma-*` tokens, buttons, device frames and the browser frame) with its own `mk-*` compositions.
 * Background rhythm: navy hero → white → tint → white → tint → navy → white → tint → navy → white →
 * tint → white → navy → tint → white → navy → white → navy → tint → white → blue.
 */
export default function MkPage({ rootClass = "" }: { rootClass?: string }) {
  return (
    <div className={`svx-root ma-root ux-root mk-root ${rootClass}`.trim()}>
      <Hero />
      <Intro />
      <Overview />
      <ServiceSeo />
      <ServiceSocial />
      <ServiceAds />
      <ServiceContent />
      <ServiceEmail />
      <Capabilities />
      <Strategy />
      <Organic />
      <SocialStrategy />
      <Paid />
      <ContentStrategy />
      <EmailAutomation />
      <Analytics />
      <Industries />
      <Why />
      <Process />
      <Faq />
      <FinalCta />
    </div>
  );
}
