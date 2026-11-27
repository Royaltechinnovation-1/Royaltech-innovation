import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Check,
  Cloud,
  Code2,
  Database,
  LayoutDashboard,
  LockKeyhole,
  MapPin,
  Plug,
  ShieldCheck,
} from "lucide-react";
import {
  analyticsItems,
  benefits,
  coreServices,
  environments,
  faqs,
  features,
  industries,
  integrationItems,
  processItems,
  processSteps,
  relatedLinks,
  securityItems,
  technologyGroups,
  whyChoose,
  workflowSteps,
} from "./data";
import { FaqAccordion, ScrollReveal, TabShowcase } from "./interactions";
import {
  CheckItem,
  Dot,
  Eyebrow,
  IconCta,
  PrimaryCta,
  SectionHeading,
  TagList,
} from "./ui";
import {
  AnalyticsVisual,
  BenefitsVisual,
  CtaVisual,
  CustomErpVisual,
  EcosystemVisual,
  EnvironmentVisual,
  FeatureVisual,
  FinanceVisual,
  HeroVisual,
  HrVisual,
  IndustriesVisual,
  IntegrationVisual,
  IntroVisual,
  InventoryVisual,
  ProcessMiniVisual,
  SecurityVisual,
  SupplyChainVisual,
  TechnologyVisual,
  WhyVisual,
  WorkflowMiniVisual,
  WorkflowProcessVisual,
  industryIcons,
} from "./visuals";
import "./erp-solutions.css";

const serviceVisuals = {
  "custom-erp-development": <CustomErpVisual />,
  "inventory-management": <InventoryVisual />,
  "hr-management-systems": <HrVisual />,
  "finance-management-systems": <FinanceVisual />,
  "supply-chain-management": <SupplyChainVisual />,
} as const;

function Breadcrumbs() {
  return (
    <nav className="erp-breadcrumb" aria-label="Breadcrumb">
      <div className="erp-container">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/services">Services</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">ERP Solutions</li>
        </ol>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="erp-hero" id="top" aria-labelledby="erp-hero-title">
      <div className="erp-hero-bg" aria-hidden="true" />
      <div className="erp-container erp-hero-inner">
        <div className="erp-hero-copy">
          <div className="erp-hero-badge"><span className="erp-badge-pulse" />ERP SOFTWARE DEVELOPMENT</div>
          <h1 id="erp-hero-title">Custom ERP Solutions to Connect and Manage Your Business</h1>
          <p className="erp-hero-lead">
            RoyalTech Innovation develops custom ERP software, inventory management systems, HR management
            solutions, finance management applications, and supply chain systems designed to streamline
            business operations and connect essential business processes.
          </p>
          <div className="erp-hero-keywords" aria-label="Custom ERP Development · Inventory Management · HR Management · Finance Management · Supply Chain Management">
            <span>Custom ERP Development</span>
            <span className="erp-keyword-dot" aria-hidden="true">·</span>
            <span>Inventory Management</span>
            <span className="erp-keyword-dot" aria-hidden="true">·</span>
            <span>HR Management</span>
            <span className="erp-keyword-dot" aria-hidden="true">·</span>
            <span>Finance Management</span>
            <span className="erp-keyword-dot" aria-hidden="true">·</span>
            <span>Supply Chain Management</span>
          </div>
          <div className="erp-hero-actions">
            <PrimaryCta service="Custom ERP Development" source="erp-hero-primary">Build Your Custom ERP</PrimaryCta>
            <PrimaryCta variant="outline" service="ERP Consultation" source="erp-hero-secondary">Discuss Your Business Requirements</PrimaryCta>
          </div>
          <div className="erp-hero-meta">
            <span><Check size={14} /> Custom ERP modules and connected business systems</span>
            <span><Check size={14} /> Inventory, finance, HR, procurement and supply chain workflows</span>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="erp-container erp-hero-bottom">
        <span className="erp-scroll-cue"><i /> Scroll to explore</span>
        <span>ERP Software Development · Business Management Software · Enterprise Resource Planning</span>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="erp-section erp-intro-section" id="introduction" aria-labelledby="erp-intro-title">
      <div className="erp-container erp-intro-layout">
        <div className="erp-intro-copy" data-reveal>
          <SectionHeading
            id="erp-intro-title"
            eyebrow="Introduction"
            title="Connect Your Business Operations With One Integrated ERP System"
          />
          <p>
            Businesses often manage inventory, finance, employees, procurement, sales, operations, and reporting
            across multiple applications and workflows.
          </p>
          <p>
            An Enterprise Resource Planning system helps businesses organize these processes through connected
            software modules, centralized information, structured workflows, and integrated business operations.
          </p>
          <p>
            At RoyalTech Innovation, we develop custom ERP solutions tailored to business requirements,
            operational processes, management needs, industry workflows, and software architecture.
          </p>
          <p>
            From custom ERP development and inventory management to HR management, finance management, and
            supply chain management, we build ERP solutions designed around how your business operates.
          </p>
          <div className="erp-intro-points">
            <CheckItem>Custom ERP software and enterprise application development</CheckItem>
            <CheckItem>Inventory, HR, finance and procurement management modules</CheckItem>
            <CheckItem>Supply chain workflows and business process management</CheckItem>
            <CheckItem>Business dashboards, reporting and ERP integrations</CheckItem>
          </div>
          <div className="erp-hero-actions">
            <PrimaryCta service="Custom ERP Development" source="erp-intro">Talk to an ERP Engineer</PrimaryCta>
            <PrimaryCta variant="quiet" href="/services/software-development" source="erp-intro-software">Explore Custom Software</PrimaryCta>
          </div>
        </div>
        <div className="erp-intro-visual-wrap" data-reveal><IntroVisual /></div>
      </div>
    </section>
  );
}

function CoreServices() {
  return (
    <section className="erp-section erp-services-section is-dark" id="services" aria-labelledby="erp-services-title">
      <div className="erp-container">
        <SectionHeading
          id="erp-services-title"
          eyebrow="Our Core ERP Solutions"
          title="Integrated ERP Solutions Designed Around Your Business"
          description="We develop ERP applications designed to organize business operations, connect departments, manage information, and support the way your organization works."
          light
          center
        />
        <div className="erp-service-list">
          {coreServices.map((service, index) => (
            <article
              className={`erp-service-block erp-service-${service.id}${index % 2 ? " is-reverse" : ""}`}
              id={service.id}
              key={service.id}
              data-reveal
            >
              <div className="erp-service-copy">
                <div className="erp-service-meta">
                  <span className="erp-service-number">{service.number} / 05</span>
                  <span className="erp-service-category">{service.category}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <TagList items={service.items} light />
                <div className="erp-service-cta">
                  <PrimaryCta service={service.category} source={`erp-${service.id}`}>{service.cta}</PrimaryCta>
                </div>
              </div>
              <div className="erp-service-visual">{serviceVisuals[service.id]}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = features.map((feature) => ({
    id: feature.id,
    label: feature.title,
    content: (
      <div className="erp-feature-panel">
        <div className="erp-feature-copy">
          <Eyebrow>ERP Module</Eyebrow>
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
          <div className="erp-feature-metric"><span>{feature.metric}</span><strong>Defined in scope</strong></div>
          <IconCta service={feature.title} source={`erp-feature-${feature.id}`}>Discuss this module</IconCta>
        </div>
        <div className="erp-feature-visual-wrap"><FeatureVisual id={feature.id} /></div>
      </div>
    ),
  }));

  return (
    <section className="erp-section erp-features-section" id="modules" aria-labelledby="erp-features-title">
      <div className="erp-container">
        <SectionHeading
          id="erp-features-title"
          eyebrow="ERP Modules & Features"
          title="Powerful ERP Modules for Connected Business Operations"
          description="Explore ERP functionality that can be planned around your departments, business information, operational workflows, and management requirements."
        />
        <div data-reveal><TabShowcase items={items} label="ERP modules and features" /></div>
        <div className="erp-feature-flow-wrap" data-reveal><EcosystemVisual /></div>
      </div>
    </section>
  );
}

function Environments() {
  const items = environments.map((environment) => ({
    id: environment.id,
    label: environment.label,
    content: (
      <div className="erp-environment-panel">
        <div className="erp-environment-copy">
          <Eyebrow>Business requirement</Eyebrow>
          <h3>{environment.title}</h3>
          <p>{environment.text}</p>
          <div className="erp-environment-dashboard"><span className="erp-mono">{environment.dashboard}</span><Dot tone="green" /></div>
          <PrimaryCta service={environment.label} source={`erp-environment-${environment.id}`}>Discuss your ERP</PrimaryCta>
        </div>
        <div className="erp-environment-visual"><EnvironmentVisual id={environment.id} /></div>
      </div>
    ),
  }));

  return (
    <section className="erp-section erp-environments-section" id="business-requirements" aria-labelledby="erp-environments-title">
      <div className="erp-container">
        <SectionHeading
          id="erp-environments-title"
          eyebrow="Business Requirements"
          title="ERP Solutions Built Around Your Business Operations"
          description="Every business has different operational requirements, processes, management needs, and workflows. We develop ERP solutions tailored to business structures, operational activities, industry requirements, and management processes."
        />
        <div data-reveal><TabShowcase items={items} label="ERP solution types" variant="solutions" /></div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="erp-section erp-how-section" id="how-it-works" aria-labelledby="erp-how-title">
      <div className="erp-container">
        <SectionHeading
          id="erp-how-title"
          eyebrow="How an ERP System Works"
          title="Connect Business Processes Through One ERP Ecosystem"
          description="An ERP system connects relevant business processes, operational information, and management workflows through integrated software modules. The architecture and functionality depend on business requirements, module selection, data structures, integrations, and operational workflows."
        />
        <ol className="erp-workflow" data-reveal>
          {workflowSteps.map((step) => (
            <li className="erp-workflow-step" key={step.number}>
              <div className="erp-workflow-top"><span className="erp-step-number">{step.number}</span><WorkflowMiniVisual kind={step.visual} /></div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="erp-section-foot-cta">
          <span>Need help defining your ERP architecture?</span>
          <IconCta service="ERP Architecture Consultation" source="erp-how-cta">Request an ERP discussion</IconCta>
        </div>
      </div>
    </section>
  );
}

function DashboardsAnalytics() {
  return (
    <section className="erp-section erp-analytics-section is-dark" id="dashboards" aria-labelledby="erp-analytics-title">
      <div className="erp-container">
        <div className="erp-analytics-layout">
          <div className="erp-analytics-copy" data-reveal>
            <SectionHeading
              id="erp-analytics-title"
              eyebrow="ERP Dashboards & Business Analytics"
              title="Get a Clear View of Your Business Performance"
              description="ERP dashboards provide centralized visibility into relevant business information, operational activities, financial metrics, inventory, workforce, and business processes. We develop ERP dashboards tailored to management requirements, business metrics, user roles, reporting needs, and operational objectives."
              light
            />
            <TagList items={analyticsItems} light />
            <PrimaryCta service="ERP Dashboard Development" source="erp-analytics">Build an ERP dashboard</PrimaryCta>
            <p className="erp-note-light">All figures shown in the dashboard mockup are illustrative sample data.</p>
          </div>
          <div data-reveal><AnalyticsVisual /></div>
        </div>
      </div>
    </section>
  );
}

function WorkflowProcess() {
  return (
    <section className="erp-section erp-process-workflow-section" id="business-process" aria-labelledby="erp-workflow-title">
      <div className="erp-container">
        <SectionHeading
          id="erp-workflow-title"
          eyebrow="ERP Workflow & Business Process Management"
          title="Streamline Business Processes With Connected ERP Workflows"
          description="ERP workflow functionality helps businesses organize operational activities, process requirements, transactions, approvals, business rules, and relevant departmental workflows. We develop ERP workflow solutions tailored to business requirements, operational structure, business processes, and software functionality."
        />
        <div className="erp-workflow-process-wrap" data-reveal><WorkflowProcessVisual /></div>
        <div className="erp-workflow-tags" data-reveal>
          <TagList items={processItems} />
          <PrimaryCta service="ERP Workflow Development" source="erp-workflow">Plan your ERP workflows</PrimaryCta>
        </div>
      </div>
    </section>
  );
}

function Integrations() {
  return (
    <section className="erp-section erp-integrations-section" id="integrations" aria-labelledby="erp-integrations-title">
      <div className="erp-container">
        <SectionHeading
          id="erp-integrations-title"
          eyebrow="ERP Integration Ecosystem"
          title="Connect Your ERP With Your Business Applications"
          description="ERP integration connects relevant enterprise systems, applications, databases, business platforms, and operational tools to support connected workflows and information management. We develop ERP integrations according to business requirements, technical architecture, data flows, operational processes, and integration needs."
        />
        <div className="erp-integrations-layout" data-reveal>
          <div className="erp-integrations-copy">
            <TagList items={integrationItems} />
            <div className="erp-integration-highlight"><Plug size={18} /><span>Integration scope is agreed around the applications, APIs, permissions and data flows available in your business environment.</span></div>
            <PrimaryCta service="ERP Integration" source="erp-integrations">Plan your ERP integrations</PrimaryCta>
          </div>
          <div><IntegrationVisual /></div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="erp-section erp-industries-section is-dark" id="industries" aria-labelledby="erp-industries-title">
      <div className="erp-container">
        <SectionHeading
          id="erp-industries-title"
          eyebrow="Industries We Serve"
          title="Custom ERP Development for Different Industries"
          description="ERP software can be shaped around the operational requirements of different industries, from manufacturing and retail to healthcare, construction and professional services."
          light
        />
        <div className="erp-industries-layout" data-reveal>
          <div className="erp-industry-list">
            {industries.map((industry, index) => (
              <div className="erp-industry-row" key={industry.name}>
                <span className="erp-industry-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="erp-industry-icon">{industryIcons[industry.icon]}</span>
                <div><h3>{industry.name}</h3><p>{industry.text}</p></div>
              </div>
            ))}
          </div>
          <div className="erp-industries-side">
            <IndustriesVisual />
            <div className="erp-industries-aside">
              <CheckItem>Inventory, finance and workforce information</CheckItem>
              <CheckItem>Procurement and supply chain workflows</CheckItem>
              <CheckItem>Business reporting and management dashboards</CheckItem>
              <CheckItem>Integration with relevant business applications</CheckItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="erp-section erp-why-section" id="why-royaltech" aria-labelledby="erp-why-title">
      <div className="erp-container">
        <div className="erp-why-layout">
          <div className="erp-why-copy" data-reveal>
            <SectionHeading
              id="erp-why-title"
              eyebrow="Why RoyalTech Innovation"
              title="Your Technology Partner for Custom ERP Solutions"
              description="We focus on practical ERP software: understanding business workflows, planning the right modules, developing user-friendly interfaces and connecting relevant systems."
            />
            <div className="erp-why-list">
              {whyChoose.map((item) => (
                <div className="erp-why-item" key={item.number}>
                  <span>{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="erp-why-visual-wrap" data-reveal><WhyVisual /></div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="erp-section erp-process-section is-dark" id="process" aria-labelledby="erp-process-title">
      <div className="erp-container">
        <SectionHeading
          id="erp-process-title"
          eyebrow="Our ERP Development Process"
          title="From Business Requirements to Custom ERP Software"
          description="Every engagement follows a clear path from discovery and requirements through architecture, design, development, testing, deployment and maintenance."
          light
        />
        <ol className="erp-process-timeline" data-reveal>
          {processSteps.map((step) => (
            <li className="erp-process-step" key={step.number}>
              <div className="erp-process-node"><span>{step.number}</span></div>
              <ProcessMiniVisual kind={step.visual} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="erp-section-foot-cta erp-section-foot-cta-dark">
          <span>Have an ERP project that needs review?</span>
          <IconCta service="ERP Consultation" source="erp-process-cta">Request a project discussion</IconCta>
        </div>
      </div>
    </section>
  );
}

function Technologies() {
  const icons = [
    <LayoutDashboard size={17} key="frontend" />,
    <Code2 size={17} key="backend" />,
    <Database size={17} key="database" />,
    <Plug size={17} key="api" />,
    <Cloud size={17} key="cloud" />,
    <LockKeyhole size={17} key="security" />,
  ];
  return (
    <section className="erp-section erp-tech-section" id="technologies" aria-labelledby="erp-tech-title">
      <div className="erp-container">
        <SectionHeading
          id="erp-tech-title"
          eyebrow="ERP Technology & Architecture"
          title="Built With Modern Enterprise Software Technologies"
          description="We develop ERP systems using suitable frontend technologies, backend frameworks, databases, APIs, cloud infrastructure, software architecture, and integration approaches selected according to business requirements."
        />
        <div className="erp-tech-ecosystem-wrap" data-reveal><TechnologyVisual /></div>
        <div className="erp-tech-grid" data-reveal>
          {technologyGroups.map((group, index) => (
            <div className="erp-tech-card" key={group.title}>
              <div className="erp-tech-card-head"><span className="erp-tech-card-icon">{icons[index]}</span><h3>{group.title}</h3></div>
              <p className="erp-tech-note">{group.note}</p>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="erp-note">Technology choices are confirmed during discovery. We do not claim certifications, partnerships or technologies that have not been verified for your project.</p>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section className="erp-section erp-security-section is-dark" id="security" aria-labelledby="erp-security-title">
      <div className="erp-container">
        <div className="erp-security-layout">
          <div className="erp-security-copy" data-reveal>
            <SectionHeading
              id="erp-security-title"
              eyebrow="ERP Security & Data Management"
              title="Develop ERP Systems With Business Data Management in Mind"
              description="ERP systems manage important business, financial, operational, employee, inventory, and organizational information. We plan ERP applications around appropriate access controls, user roles, data structures, application security considerations, integrations, and business data management requirements."
              light
            />
            <ul className="erp-security-list">
              {securityItems.map((item) => <li key={item}><LockKeyhole size={14} /> {item}</li>)}
            </ul>
            <div className="erp-security-highlight"><ShieldCheck size={18} /><span>Access, permissions and data structures are defined to the agreed project scope and platform requirements.</span></div>
            <p className="erp-note-light">No absolute security claim or certification is implied.</p>
          </div>
          <div data-reveal><SecurityVisual /></div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="erp-section erp-benefits-section" id="benefits" aria-labelledby="erp-benefits-title">
      <div className="erp-container">
        <SectionHeading
          id="erp-benefits-title"
          eyebrow="ERP Benefits for Businesses"
          title="Improve Visibility Across Your Business Operations"
          description="A well-planned ERP system brings business information, modules, workflows and reporting into a connected digital environment."
        />
        <div data-reveal><BenefitsVisual /></div>
        <ul className="erp-benefit-grid" data-reveal>
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
    <section className="erp-section erp-faq-section is-dark" id="faq" aria-labelledby="erp-faq-title">
      <div className="erp-container erp-faq-layout">
        <div className="erp-faq-intro" data-reveal>
          <SectionHeading
            id="erp-faq-title"
            eyebrow="FAQ"
            title="Frequently Asked Questions About ERP Development"
            description="Clear answers about custom ERP development, modules, integrations, implementation timelines and ERP maintenance."
            light
          />
          <div className="erp-faq-help">
            <span className="erp-faq-help-icon"><Boxes size={18} /></span>
            <h3>Still have a question?</h3>
            <p>Tell us about your departments, systems and workflows. We will outline a practical next step based on your requirements.</p>
            <PrimaryCta service="Custom ERP Development" source="erp-faq">Talk to our team</PrimaryCta>
          </div>
        </div>
        <div data-reveal><FaqAccordion items={faqs} /></div>
      </div>
    </section>
  );
}

function RelatedServices() {
  return (
    <section className="erp-section erp-related-section" aria-labelledby="erp-related-title">
      <div className="erp-container">
        <SectionHeading
          id="erp-related-title"
          eyebrow="Related Services"
          title="Custom ERP Solutions for Integrated Business Management"
          description="ERP platforms work best when connected to the wider software, web, mobile, AI and consulting ecosystem around them."
        />
        <div className="erp-related-grid">
          {relatedLinks.map((link) => (
            <Link href={link.href} className="erp-related-link" key={link.label}>
              <span>{link.label}</span>
              <small>{link.note}</small>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="erp-related-extra">
          <Link href="/services/crm-development">CRM Development</Link>
          <Link href="/services/ecommerce-development">Ecommerce Development</Link>
          <Link href="/services/software-development">Custom Software Development</Link>
          <Link href="/services/it-consulting">IT Consulting</Link>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="erp-section erp-final-cta" id="contact" aria-labelledby="erp-final-title">
      <div className="erp-cta-bg" aria-hidden="true" />
      <div className="erp-container erp-final-cta-inner">
        <div className="erp-final-cta-copy">
          <Eyebrow light>Start a Conversation</Eyebrow>
          <h2 id="erp-final-title">Ready to Connect Your Business With a Custom ERP Solution?</h2>
          <p>
            Whether you need custom ERP software, inventory management systems, HR management applications,
            finance management solutions, or supply chain management software, RoyalTech Innovation can help
            you plan and develop an ERP solution tailored to your business.
          </p>
          <div className="erp-hero-actions">
            <PrimaryCta variant="light" service="Custom ERP Development" source="erp-final-primary">Start Your ERP Project</PrimaryCta>
            <PrimaryCta variant="outline" service="ERP Consultation" source="erp-final-secondary">Discuss Your Requirements</PrimaryCta>
          </div>
          <div className="erp-final-contact">
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

export default function ErpSolutionsPage() {
  return (
    <div className="erp-page">
      <ScrollReveal />
      <Breadcrumbs />
      <Hero />
      <Introduction />
      <CoreServices />
      <Features />
      <Environments />
      <HowItWorks />
      <DashboardsAnalytics />
      <WorkflowProcess />
      <Integrations />
      <Industries />
      <WhyChoose />
      <Process />
      <Technologies />
      <Security />
      <Benefits />
      <FaqSection />
      <RelatedServices />
      <FinalCta />
    </div>
  );
}
