import {
  Activity,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Cloud,
  Cpu,
  Factory,
  GitBranch,
  GraduationCap,
  HeartPulse,
  Landmark,
  Lightbulb,
  LockKeyhole,
  MapPin,
  Network,
  Server,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  benefits,
  capabilities,
  coreServices,
  devopsItems,
  faqs,
  industries,
  infrastructureWorkflow,
  migrationItems,
  monitoringItems,
  processSteps,
  relatedLinks,
  securityItems,
  solutionGroups,
  technologyGroups,
  whyChoose,
} from "./data";
import { FaqAccordion, ScrollReveal, TabShowcase } from "./interactions";
import {
  CheckItem,
  Dot,
  Eyebrow,
  FlowSteps,
  IconCta,
  IllustrationNote,
  PrimaryCta,
  SectionHeading,
  TagList,
} from "./ui";
import {
  AppDevVisual,
  BenefitsVisual,
  CapabilityVisual,
  CtaVisual,
  DevOpsVisual,
  HeroVisual,
  IndustriesVisual,
  InfrastructureVisual,
  IntroVisual,
  MigrationJourneyVisual,
  MigrationVisual,
  MonitoringVisual,
  PipelineVisual,
  ProcessMiniVisual,
  SecurityVisual,
  ServerVisual,
  SolutionVisual,
  TechEcosystemVisual,
  WhyVisual,
  WorkflowMiniVisual,
} from "./visuals";

const industryIcons: Record<string, ReactNode> = {
  healthcare: <HeartPulse size={17} />,
  education: <GraduationCap size={17} />,
  retail: <ShoppingBag size={17} />,
  "real-estate": <Building2 size={17} />,
  finance: <Landmark size={17} />,
  logistics: <Truck size={17} />,
  manufacturing: <Factory size={17} />,
  hr: <UsersRound size={17} />,
  startup: <Lightbulb size={17} />,
  professional: <BriefcaseBusiness size={17} />,
  ecommerce: <Store size={17} />,
  enterprise: <Network size={17} />,
};

const serviceVisuals: Record<string, ReactNode> = {
  "cloud-infrastructure": <InfrastructureVisual />,
  "cloud-migration": <MigrationVisual />,
  "cloud-application-development": <AppDevVisual />,
  "cicd-deployment": <PipelineVisual />,
  "server-management": <ServerVisual />,
};

function Breadcrumbs() {
  return (
    <nav className="cd-breadcrumb" aria-label="Breadcrumb">
      <div className="cd-container">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/services">Services</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Cloud &amp; DevOps</li>
        </ol>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="cd-hero" id="top" aria-labelledby="cd-hero-title">
      <div className="cd-hero-bg" aria-hidden="true" />
      <div className="cd-container cd-hero-inner">
        <div className="cd-hero-copy">
          <div className="cd-hero-badge"><span className="cd-badge-pulse" />CLOUD COMPUTING &amp; DEVOPS SOLUTIONS</div>
          <h1 id="cd-hero-title">Build, Deploy &amp; Scale Your Applications With Cloud &amp; DevOps Solutions</h1>
          <p className="cd-hero-lead">
            RoyalTech Innovation delivers cloud infrastructure, cloud migration, cloud application development, CI/CD automation, deployment solutions, and server management designed around your business and application requirements.
          </p>
          <div className="cd-hero-keywords" aria-label="Cloud and DevOps services">
            <span>Cloud Computing Services</span>
            <span>Cloud Infrastructure</span>
            <span>Cloud Migration</span>
            <span>DevOps Services</span>
            <span>Cloud Application Development</span>
            <span>CI/CD Automation</span>
            <span>Server Management</span>
          </div>
          <div className="cd-hero-actions">
            <PrimaryCta service="Cloud Infrastructure" source="cloud-devops-hero-primary">Build Your Cloud Infrastructure</PrimaryCta>
            <PrimaryCta variant="outline" service="DevOps Services" source="cloud-devops-hero-secondary">Discuss Your DevOps Project</PrimaryCta>
          </div>
          <div className="cd-hero-meta">
            <span><Check size={14} /> Scope defined with your team</span>
            <span><Check size={14} /> Configuration aligned to requirements</span>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="cd-container cd-hero-bottom">
        <span className="cd-scroll-cue"><i /> Scroll to explore</span>
        <span>Cloud Computing Company in Mohali · Cloud Services Company in Chandigarh · Cloud Infrastructure Company in Punjab</span>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="cd-section cd-intro-section" id="introduction" aria-labelledby="cd-intro-title">
      <div className="cd-container cd-intro-layout">
        <div className="cd-intro-copy" data-reveal>
          <SectionHeading
            id="cd-intro-title"
            eyebrow="Introduction"
            title="Reliable Cloud Infrastructure & Modern DevOps Engineering"
          />
          <p>
            Modern applications require reliable infrastructure, efficient deployment workflows, appropriate cloud architecture, application monitoring, and ongoing operational management.
          </p>
          <p>
            RoyalTech Innovation provides cloud and DevOps solutions designed around application requirements, infrastructure needs, business workflows, deployment processes, and technical objectives.
          </p>
          <p>
            From cloud infrastructure and migration to application development, CI/CD automation, deployment, and server management, we help businesses establish and maintain their technology environments.
          </p>
          <div className="cd-intro-points">
            <CheckItem>Cloud infrastructure and environment setup</CheckItem>
            <CheckItem>Application migration and modernization</CheckItem>
            <CheckItem>CI/CD automation and deployment workflows</CheckItem>
            <CheckItem>Server management and monitoring</CheckItem>
          </div>
          <div className="cd-hero-actions">
            <PrimaryCta service="Cloud & DevOps" source="cloud-devops-intro">Talk to a Cloud Engineer</PrimaryCta>
            <PrimaryCta variant="quiet" href="/services/software-development" source="cloud-devops-intro-software">Explore Custom Software Development</PrimaryCta>
          </div>
        </div>
        <div className="cd-intro-visual-wrap" data-reveal>
          <IntroVisual />
        </div>
      </div>
    </section>
  );
}

function CoreServices() {
  return (
    <section className="cd-section cd-services-section is-dark" id="services" aria-labelledby="cd-services-title">
      <div className="cd-container">
        <SectionHeading
          id="cd-services-title"
          eyebrow="Our Core Cloud & DevOps Services"
          title="Complete Cloud & DevOps Solutions for Modern Businesses"
          description="We provide cloud infrastructure, cloud migration, cloud application development, deployment automation, and server management services tailored to business and technical requirements."
          light
          center
        />
        <div className="cd-service-list">
          {coreServices.map((service, index) => (
            <article
              className={`cd-service-block cd-service-${service.id}${index % 2 ? " is-reverse" : ""}`}
              id={service.id}
              key={service.id}
              data-reveal
            >
              <div className="cd-service-copy">
                <div className="cd-service-meta">
                  <span className="cd-service-number">{service.number} / 05</span>
                  <span className="cd-service-category">{service.category}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <TagList items={service.items} light />
                <div className="cd-service-cta">
                  <PrimaryCta service={service.category} source={`cloud-devops-${service.id}`}>{service.cta}</PrimaryCta>
                </div>
              </div>
              <div className="cd-service-visual">{serviceVisuals[service.id]}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = capabilities.map((capability) => ({
    id: capability.id,
    label: capability.label,
    content: (
      <div className="cd-capability-panel">
        <div className="cd-capability-copy">
          <Eyebrow>Capability</Eyebrow>
          <h3>{capability.label}</h3>
          <p>{capability.description}</p>
          <ul className="cd-capability-detail">
            {capability.detail.map((detail) => (
              <li key={detail}><Check size={14} /> {detail}</li>
            ))}
          </ul>
          <div className="cd-capability-metric">
            <span>{capability.metricLabel}</span>
            <strong>{capability.metricValue}</strong>
          </div>
          <IconCta service="Cloud & DevOps" source={`cloud-devops-capability-${capability.id}`}>Discuss this capability</IconCta>
        </div>
        <div className="cd-capability-visual">
          <CapabilityVisual id={capability.id} />
          <IllustrationNote />
        </div>
      </div>
    ),
  }));

  return (
    <section className="cd-section cd-capabilities-section" id="capabilities" aria-labelledby="cd-capabilities-title">
      <div className="cd-container">
        <SectionHeading
          id="cd-capabilities-title"
          eyebrow="What We Configure"
          title="Cloud & DevOps Capabilities for Modern Applications"
          description="From architecture and provisioning through automation, monitoring and maintenance, our capabilities cover the practical work behind cloud application environments."
        />
        <div data-reveal>
          <TabShowcase items={items} label="Cloud and DevOps capabilities" />
        </div>
      </div>
    </section>
  );
}

function BusinessSolutions() {
  const items = solutionGroups.map((solution) => ({
    id: solution.id,
    label: solution.label,
    content: (
      <div className="cd-solution-panel">
        <div className="cd-solution-copy">
          <Eyebrow>Business need</Eyebrow>
          <h3>{solution.title}</h3>
          <p>{solution.description}</p>
          <div className="cd-solution-dashboard"><span className="cd-mono">{solution.dashboard}</span><Dot tone="green" /></div>
          <PrimaryCta service={solution.label} source={`cloud-devops-solution-${solution.id}`}>Discuss your requirement</PrimaryCta>
        </div>
        <div className="cd-solution-visual"><SolutionVisual id={solution.id} /><IllustrationNote /></div>
      </div>
    ),
  }));

  return (
    <section className="cd-section cd-solutions-section" id="business-needs" aria-labelledby="cd-solutions-title">
      <div className="cd-container">
        <SectionHeading
          id="cd-solutions-title"
          eyebrow="Business Fit"
          title="Cloud Solutions Tailored to Your Business & Applications"
          description="Different businesses require different cloud infrastructure, application environments, deployment workflows, server configurations, migration strategies, and operational requirements. We develop cloud and DevOps solutions tailored to business objectives, application requirements, infrastructure needs, workloads, software architecture, and deployment environments."
        />
        <div data-reveal><TabShowcase items={items} label="Cloud solutions by business need" variant="solutions" /></div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="cd-section cd-how-section" id="how-it-works" aria-labelledby="cd-how-title">
      <div className="cd-container">
        <SectionHeading
          id="cd-how-title"
          eyebrow="How It Works"
          title="Connect Applications, Infrastructure & Cloud Services"
          description="Cloud infrastructure connects application environments, compute resources, databases, storage, networking, deployment workflows, monitoring, and operational services through an architecture designed around application requirements."
        />
        <ol className="cd-workflow" data-reveal>
          {infrastructureWorkflow.map((step) => (
            <li className="cd-workflow-step" key={step.number}>
              <div className="cd-workflow-top">
                <span className="cd-step-number">{step.number}</span>
                <WorkflowMiniVisual kind={step.visual} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="cd-section-foot-cta">
          <span>Need help deciding where to start?</span>
          <IconCta service="Cloud Consultation" source="cloud-devops-how-cta">Request a cloud architecture review</IconCta>
        </div>
      </div>
    </section>
  );
}

function Monitoring() {
  return (
    <section className="cd-section cd-monitoring-section is-dark" id="monitoring" aria-labelledby="cd-monitoring-title">
      <div className="cd-container">
        <div className="cd-monitoring-layout">
          <div className="cd-monitoring-copy" data-reveal>
            <SectionHeading
              id="cd-monitoring-title"
              eyebrow="Visibility & Operations"
              title="Monitor Your Cloud Infrastructure & Application Environments"
              description="Cloud monitoring dashboards provide visibility into relevant infrastructure resources, server environments, application status, system information, deployment environments, operational metrics, and application performance. We configure monitoring and dashboard functionality according to infrastructure requirements, application environments, operational needs, monitoring scope, and supported systems."
              light
            />
            <TagList items={monitoringItems} light />
            <PrimaryCta service="Cloud Monitoring" source="cloud-devops-monitoring">Configure monitoring dashboards</PrimaryCta>
            <p className="cd-note-light">All figures shown in the dashboard mockup are illustrative sample data.</p>
          </div>
          <div data-reveal><MonitoringVisual /></div>
        </div>
      </div>
    </section>
  );
}

function DevOpsWorkflows() {
  return (
    <section className="cd-section cd-devops-section" id="devops" aria-labelledby="cd-devops-title">
      <div className="cd-container">
        <SectionHeading
          id="cd-devops-title"
          eyebrow="Delivery Automation"
          title="Improve Application Delivery With DevOps Automation"
          description="DevOps practices connect development workflows, testing processes, deployment environments, infrastructure configuration, software releases, monitoring, and operational requirements. We configure DevOps workflows and CI/CD processes according to application architecture, development requirements, deployment environments, testing needs, infrastructure, and project scope."
        />
        <div className="cd-devops-layout" data-reveal>
          <div className="cd-devops-copy">
            <TagList items={devopsItems} />
            <div className="cd-devops-flow-labels">
              <FlowSteps steps={["Development", "Version control", "Build", "Test", "Staging", "Production", "Monitoring"]} compact />
            </div>
            <PrimaryCta service="CI/CD & Deployment" source="cloud-devops-devops">Automate application delivery</PrimaryCta>
          </div>
          <div className="cd-devops-visual"><DevOpsVisual /></div>
        </div>
      </div>
    </section>
  );
}

function MigrationModernization() {
  return (
    <section className="cd-section cd-modernization-section" id="migration" aria-labelledby="cd-migration-title">
      <div className="cd-container">
        <SectionHeading
          id="cd-migration-title"
          eyebrow="Migration & Modernization"
          title="Modernize Existing Applications With Cloud Migration"
          description="Cloud migration involves planning and moving relevant applications, infrastructure, databases, services, and workloads into suitable cloud environments according to application requirements, architecture, compatibility, business objectives, and project scope. We support cloud migration planning, application migration, infrastructure migration, database migration, deployment, testing, and relevant post-migration activities."
        />
        <div className="cd-modernization-layout" data-reveal>
          <div className="cd-modernization-visual"><MigrationJourneyVisual /></div>
          <div className="cd-modernization-copy">
            <TagList items={migrationItems} />
            <div className="cd-modernization-highlight"><ShieldCheck size={18} /><span>Assessment, planning, testing and post-migration validation are defined with your team before execution.</span></div>
            <PrimaryCta service="Cloud Migration" source="cloud-devops-migration">Plan a migration assessment</PrimaryCta>
          </div>
        </div>
      </div>
    </section>
  );
}

function Technologies() {
  return (
    <section className="cd-section cd-tech-section is-dark" id="technologies" aria-labelledby="cd-tech-title">
      <div className="cd-container">
        <SectionHeading
          id="cd-tech-title"
          eyebrow="Technology Ecosystem"
          title="Build Your Cloud Environment With the Right Technology"
          description="We configure cloud environments, application infrastructure, deployment workflows, server systems, databases, APIs, monitoring, and relevant technology services according to business requirements, application architecture, infrastructure needs, and project scope."
          light
        />
        <div className="cd-tech-ecosystem-wrap" data-reveal><TechEcosystemVisual /></div>
        <div className="cd-tech-grid" data-reveal>
          {technologyGroups.map((group, index) => (
            <div className="cd-tech-card" key={group.title}>
              <div className="cd-tech-card-head">
                <span className="cd-tech-card-icon">{index === 0 ? <Cloud size={17} /> : index === 1 ? <Server size={17} /> : index === 2 ? <Cpu size={17} /> : index === 3 ? <GitBranch size={17} /> : index === 4 ? <Activity size={17} /> : <Network size={17} />}</span>
                <h3>{group.title}</h3>
              </div>
              <p className="cd-tech-note">{group.note}</p>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="cd-note-light">Technology choices are confirmed during discovery. We do not assume a platform, certification or partnership that has not been agreed for your project.</p>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="cd-section cd-industries-section" id="industries" aria-labelledby="cd-industries-title">
      <div className="cd-container">
        <SectionHeading
          id="cd-industries-title"
          eyebrow="Industries"
          title="Cloud & DevOps Solutions for Different Industries"
          description="Cloud infrastructure, application hosting, migration, deployment automation, server management, and cloud operations can be shaped around the systems each industry relies on."
        />
        <div className="cd-industries-layout" data-reveal>
          <div className="cd-industry-list">
            {industries.map((industry, index) => (
              <div className="cd-industry-row" key={industry.name}>
                <span className="cd-industry-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="cd-industry-icon">{industryIcons[industry.icon]}</span>
                <div>
                  <h3>{industry.name}</h3>
                  <p>{industry.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cd-industries-side"><IndustriesVisual /><div className="cd-industries-aside"><CheckItem>Application hosting environments</CheckItem><CheckItem>Cloud migration planning</CheckItem><CheckItem>Deployment automation</CheckItem><CheckItem>Server monitoring & maintenance</CheckItem></div></div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="cd-section cd-why-section is-dark" id="why-royaltech" aria-labelledby="cd-why-title">
      <div className="cd-container">
        <div className="cd-why-layout">
          <div className="cd-why-copy" data-reveal>
            <SectionHeading
              id="cd-why-title"
              eyebrow="Why RoyalTech Innovation"
              title="Your Technology Partner for Cloud & DevOps Solutions"
              description="We focus on practical infrastructure work: understanding your application, configuring the right environment, automating the delivery path and keeping the environment observable."
              light
            />
            <div className="cd-why-list">
              {whyChoose.map((item) => (
                <div className="cd-why-item" key={item.number}>
                  <span>{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="cd-why-visual-wrap" data-reveal><WhyVisual /></div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="cd-section cd-process-section" id="process" aria-labelledby="cd-process-title">
      <div className="cd-container">
        <SectionHeading
          id="cd-process-title"
          eyebrow="Delivery Process"
          title="From Cloud Architecture to Deployment & Operations"
          description="Every engagement follows a clear path from discovery and assessment through architecture, configuration, automation, validation, launch and ongoing operations."
        />
        <ol className="cd-process-timeline" data-reveal>
          {processSteps.map((step) => (
            <li className="cd-process-step" key={step.number}>
              <div className="cd-process-node"><span>{step.number}</span></div>
              <ProcessMiniVisual kind={step.visual} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="cd-section-foot-cta">
          <span>Have an existing environment that needs review?</span>
          <IconCta service="Infrastructure Assessment" source="cloud-devops-process-cta">Request an infrastructure assessment</IconCta>
        </div>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section className="cd-section cd-security-section" id="security" aria-labelledby="cd-security-title">
      <div className="cd-container">
        <div className="cd-security-layout">
          <div className="cd-security-copy" data-reveal>
            <SectionHeading
              id="cd-security-title"
              eyebrow="Security & Operations"
              title="Configure Cloud Infrastructure With Security & Operational Considerations"
              description="Cloud infrastructure and application environments require appropriate access controls, server configuration, network architecture, authentication, application permissions, infrastructure monitoring, data management, and relevant security considerations. We plan and configure infrastructure according to application requirements, technical scope, operational needs, supported systems, and appropriate security practices."
            />
            <ul className="cd-security-list">
              {securityItems.map((item) => (
                <li key={item}><LockKeyhole size={14} /> {item}</li>
              ))}
            </ul>
            <p className="cd-note">Access, permissions and controls are defined to the agreed scope. No absolute security or uptime guarantee is implied.</p>
          </div>
          <div data-reveal><SecurityVisual /></div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="cd-section cd-benefits-section is-dark" id="benefits" aria-labelledby="cd-benefits-title">
      <div className="cd-container">
        <SectionHeading
          id="cd-benefits-title"
          eyebrow="Benefits"
          title="Modernize Infrastructure & Improve Application Delivery"
          description="Practical improvements come from organizing environments, documenting workflows and making infrastructure visible to the people who manage it."
          light
        />
        <div data-reveal><BenefitsVisual /></div>
        <ul className="cd-benefit-grid" data-reveal>
          {benefits.map((benefit) => (
            <li key={benefit.title}><CheckItem><strong>{benefit.title}</strong> — {benefit.text}</CheckItem></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="cd-section cd-faq-section" id="faq" aria-labelledby="cd-faq-title">
      <div className="cd-container cd-faq-layout">
        <div className="cd-faq-intro" data-reveal>
          <SectionHeading
            id="cd-faq-title"
            eyebrow="FAQ"
            title="Frequently Asked Questions About Cloud & DevOps"
            description="Clear answers about cloud computing services, infrastructure, migration, application development, CI/CD and server management."
          />
          <div className="cd-faq-help">
            <span className="cd-faq-help-icon"><Cloud size={18} /></span>
            <h3>Still have a question?</h3>
            <p>Tell us about your application and infrastructure. We will outline a practical next step based on your requirements.</p>
            <PrimaryCta service="Cloud & DevOps" source="cloud-devops-faq">Talk to our team</PrimaryCta>
          </div>
        </div>
        <div data-reveal><FaqAccordion items={faqs} /></div>
      </div>
    </section>
  );
}

function RelatedServices() {
  return (
    <section className="cd-section cd-related-section" aria-labelledby="cd-related-title">
      <div className="cd-container">
        <SectionHeading id="cd-related-title" eyebrow="Related Services" title="Cloud & DevOps Alongside Your Digital Products" description="Infrastructure works best when it is connected to the applications and business systems built on it." />
        <div className="cd-related-grid">
          {relatedLinks.map((link) => (
            <Link href={link.href} className="cd-related-link" key={link.label}>
              <span>{link.label}</span>
              <small>{link.note}</small>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="cd-related-extra">
          <Link href="/services#ai-integration">AI Integration &amp; API Solutions</Link>
          <Link href="/services#ai-agents">AI Agents &amp; Workflow Automation</Link>
          <Link href="/services#erp-dev">ERP Solutions</Link>
          <Link href="/services/ecommerce-development">E-commerce Development</Link>
          <Link href="/services/saas-development">SaaS Platform Development</Link>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="cd-section cd-final-cta" id="contact" aria-labelledby="cd-final-title">
      <div className="cd-cta-bg" aria-hidden="true" />
      <div className="cd-container cd-final-cta-inner">
        <div className="cd-final-cta-copy">
          <Eyebrow light>Start a Conversation</Eyebrow>
          <h2 id="cd-final-title">Ready to Modernize Your Cloud Infrastructure?</h2>
          <p>
            Whether you need cloud infrastructure, cloud migration, cloud application development, CI/CD automation, deployment solutions, or server management, RoyalTech Innovation can help you plan and implement solutions tailored to your business and application requirements.
          </p>
          <div className="cd-hero-actions">
            <PrimaryCta variant="light" service="Cloud & DevOps" source="cloud-devops-final-primary">Start Your Cloud Project</PrimaryCta>
            <PrimaryCta variant="outline" service="Infrastructure Consultation" source="cloud-devops-final-secondary">Discuss Your Infrastructure</PrimaryCta>
          </div>
          <div className="cd-final-contact">
            <a href="tel:+918679016505">+91 86790 16505</a>
            <a href="mailto:info@royaltechinnovation.co.in">info@royaltechinnovation.co.in</a>
            <span><MapPin size={14} /> CP 67, Mohali, Punjab</span>
          </div>
        </div>
        <CtaVisual />
      </div>
    </section>
  );
}

export default function CloudDevopsPage() {
  return (
    <div className="cd-page">
      <ScrollReveal />
      <Breadcrumbs />
      <Hero />
      <Introduction />
      <CoreServices />
      <Capabilities />
      <BusinessSolutions />
      <HowItWorks />
      <Monitoring />
      <DevOpsWorkflows />
      <MigrationModernization />
      <Technologies />
      <Industries />
      <WhyChoose />
      <Process />
      <Security />
      <Benefits />
      <FaqSection />
      <RelatedServices />
      <FinalCta />
    </div>
  );
}
