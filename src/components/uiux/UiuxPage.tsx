import "@/styles/services-showcase.css";
import "@/styles/mobile-app.css";
import "@/styles/uiux.css";
import { Hero, Intro, Overview } from "./HeroIntro";
import { Faq } from "./Interactive";
import { ServiceDashboard, ServiceMobileUx, ServiceProduct, ServiceUiUx, ServiceWireframing } from "./ServiceSections";
import { DesignSystems, FinalCta, Industries, Process, Tools, Why } from "./Sections";
import { Audit, Capabilities, Responsive, UiVsUx } from "./Sections2";

/**
 * /services/ui-ux-design. Same RoyalTech design language as the other service pages (it reuses the
 * `ma-*` tokens, buttons and device frames) with its own `ux-*` compositions.
 * Background rhythm: navy hero → white → tint → white → tint → navy → white → navy → white → tint →
 * white → navy → white → navy → white → tint → white → tint → blue.
 */
export default function UiuxPage({ rootClass = "" }: { rootClass?: string }) {
  return (
    <div className={`svx-root ma-root ux-root ${rootClass}`.trim()}>
      <Hero />
      <Intro />
      <Overview />
      <ServiceUiUx />
      <ServiceMobileUx />
      <ServiceDashboard />
      <ServiceWireframing />
      <ServiceProduct />
      <Capabilities />
      <Process />
      <DesignSystems />
      <Tools />
      <Industries />
      <Why />
      <Audit />
      <Responsive />
      <UiVsUx />
      <Faq />
      <FinalCta />
    </div>
  );
}
