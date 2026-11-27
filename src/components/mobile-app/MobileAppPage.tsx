import "@/styles/services-showcase.css";
import "@/styles/mobile-app.css";
import { Compare, PerformanceSection } from "./ComparePerformance";
import { Faq } from "./Faq";
import { FinalCta } from "./FinalCta";
import { Hero, Intro } from "./HeroIntro";
import { Industries, Process } from "./ProcessIndustries";
import {
  ServiceAndroid,
  ServiceCross,
  ServiceCustom,
  ServiceIos,
  ServiceMaintenance,
  ServiceMobileApp,
  SolutionsOverview,
} from "./Services";
import { Features, Technologies } from "./TechFeatures";
import { DesignSection, WhySection } from "./UxWhy";

/**
 * /services/mobile-app-development: a white / blue / navy page where every section has its own
 * composition. Background rhythm: navy hero → white → tint → white → white → blue → navy → white
 * → navy → white → tint → white → navy → white → tint → navy → white → blue.
 */
export default function MobileAppPage({ rootClass = "" }: { rootClass?: string }) {
  return (
    <div className={`svx-root ma-root ${rootClass}`.trim()}>
      <Hero />
      <Intro />
      <SolutionsOverview />
      <ServiceMobileApp />
      <ServiceAndroid />
      <ServiceIos />
      <ServiceCross />
      <ServiceCustom />
      <ServiceMaintenance />
      <Technologies />
      <Features />
      <DesignSection />
      <Process />
      <WhySection />
      <Industries />
      <Compare />
      <PerformanceSection />
      <Faq />
      <FinalCta />
    </div>
  );
}
