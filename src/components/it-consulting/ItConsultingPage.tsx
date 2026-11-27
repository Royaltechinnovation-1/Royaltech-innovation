import "@/styles/services-showcase.css";
import "@/styles/it-consulting.css";
import { Capabilities, Hero, Intro, Services } from "./SectionsA";
import {
  Approach,
  Assessment,
  DigitalStrategy,
  EcosystemSection,
  Faq,
  FinalCta,
  Industries,
  InfrastructureSection,
  OperationsSection,
  ProcessSection,
  RoadmapSection,
  Why,
} from "./SectionsB";

/**
 * /services/it-consulting: a white / blue / navy page where every section has its own composition.
 * Background rhythm: navy hero, white intro, tint / white / navy / tint / white / tint services, navy capabilities,
 * white approach, tint transformation, navy roadmap, white architecture, tint operations, navy ecosystem,
 * white industries, tint why, navy process, white assessment, tint FAQ, blue final CTA.
 */
export default function ItConsultingPage({ rootClass = "" }: { rootClass?: string }) {
  return (
    <div className={`svx-root ic-root ${rootClass}`.trim()}>
      <Hero />
      <Intro />
      <Services />
      <Capabilities />
      <Approach />
      <DigitalStrategy />
      <RoadmapSection />
      <InfrastructureSection />
      <OperationsSection />
      <EcosystemSection />
      <Industries />
      <Why />
      <ProcessSection />
      <Assessment />
      <Faq />
      <FinalCta />
    </div>
  );
}
