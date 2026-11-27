import Link from "next/link";
import {
  ArrowRight,
  Check,
  Cloud,
  Code2,
  Database,
  LayoutDashboard,
  LockKeyhole,
  MapPin,
  Plug,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import {
  analyticsItems,
  automationItems,
  benefits,
  coreServices,
  environments,
  faqs,
  features,
  industries,
  integrationItems,
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
  AutomationVisual,
  BenefitsVisual,
  CrmIntegrationServiceVisual,
  CtaVisual,
  CustomCrmVisual,
  CustomerVisual,
  EnvironmentVisual,
  FeatureVisual,
  HeroVisual,
  IndustriesVisual,
  IntegrationEcosystemVisual,
  IntroVisual,
  LeadVisual,
  ProcessMiniVisual,
  SalesVisual,
  SecurityVisual,
  WhyVisual,
  WorkflowMiniVisual,
  industryIcons,
} from "./visuals";
import "./crm-development.css";

const serviceVisuals = {
  "custom-crm-development": <CustomCrmVisual />,
  "sales-management-systems": <SalesVisual />,
  "lead-management-systems": <LeadVisual />,
  "customer-management-systems": <CustomerVisual />,
  "crm-integration": <CrmIntegrationServiceVisual />,
} as const;

function Breadcrumbs() {
  return (
    <nav className="crm-breadcrumb" aria-label="Breadcrumb">
      <div className="crm-container">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/services">Services</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">CRM Development</li>
        </ol>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="crm-hero" id="top" aria-labelledby="crm-hero-title">
      <div className="crm-hero-bg" aria-hidden="true" />
      <div className="crm-container crm-hero-inner">
        <div className="crm-hero-copy">
          <div className="crm-hero-badge"><span className="crm-badge-pulse" />CRM SOFTWARE DEVELOPMENT</div>
          <h1 id="crm-hero-title">Custom CRM Solutions Built Around Your Business</h1>
          <p className="crm-hero-lead">
            RoyalTech Innovation develops custom CRM software, sales management systems, lead management
            platforms, customer management solutions, and CRM integrations designed to streamline business
            processes and strengthen customer relationships.
          </p>
          <div className="crm-hero-keywords" aria-label="Custom CRM Development · Sales Management · Lead Management · Customer Management · CRM Integration">
            <span>Custom CRM Development</span>
            <span className="crm-keyword-dot" aria-hidden="true">·</span>
            <span>Sales Management</span>
            <span className="crm-keyword-dot" aria-hidden="true">·</span>
            <span>Lead Management</span>
            <span className="crm-keyword-dot" aria-hidden="true">·</span>
            <span>Customer Management</span>
            <span className="crm-keyword-dot" aria-hidden="true">·</span>
            <span>CRM Integration</span>
          </div>
          <div className="crm-hero-actions">
            <PrimaryCta service="Custom CRM Development" source="crm-hero-primary">Build Your Custom CRM</PrimaryCta>
            <PrimaryCta variant="outline" service="CRM Consultation" source="crm-hero-secondary">Discuss Your Requirements</PrimaryCta>
          </div>
          <div className="crm-hero-meta">
            <span><Check size={14} /> Custom CRM modules and connected customer systems</span>
            <span><Check size={14} /> Leads, sales pipelines, customers and workflow automation</span>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="crm-container crm-hero-bottom">
        <span className="crm-scroll-cue"><i /> Scroll to explore</span>
        <span>CRM Software Development · Sales Management Systems · Customer Relationship Management</span>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="crm-section crm-intro-section" id="introduction" aria-labelledby="crm-intro-title">
      <div className="crm-container crm-intro-layout">
        <div className="crm-intro-copy" data-reveal>
          <SectionHeading
            id="crm-intro-title"
            eyebrow="Introduction"
            title="Manage Leads, Customers, and Sales From One Connected Platform"
          />
          <p>
            Managing customer relationships, sales activities, leads, follow-ups, and business interactions
            across multiple platforms can make daily operations difficult.
          </p>
          <p>
            A custom CRM system helps businesses organize customer information, streamline sales workflows,
            manage leads, track interactions, and improve visibility across their sales processes.
          </p>
          <p>
            At RoyalTech Innovation, we develop customized CRM solutions designed around your business
            structure, operational requirements, sales processes, customer journeys, and growth objectives.
          </p>
          <p>
            From custom CRM development and sales management systems to lead management, customer management,
            and CRM integration, we build solutions tailored to how your business operates.
          </p>
          <div className="crm-intro-points">
            <CheckItem>Custom CRM software and customer management platforms</CheckItem>
            <CheckItem>Sales pipeline, lead tracking and deal management modules</CheckItem>
            <CheckItem>Follow-up workflows and customer interaction history</CheckItem>
            <CheckItem>CRM dashboards, reporting and business system integrations</CheckItem>
          </div>
          <div className="crm-hero-actions">
            <PrimaryCta service="Custom CRM Development" source="crm-intro">Talk to a CRM Engineer</PrimaryCta>
            <PrimaryCta variant="quiet" href="/services/software-development" source="crm-intro-software">Explore Custom Software</PrimaryCta>
          </div>
        </div>
        <div className="crm-intro-visual-wrap" data-reveal><IntroVisual /></div>
      </div>
    </section>
  );
}

function CoreServices() {
  return (
    <section className="crm-section crm-services-section is-dark" id="services" aria-labelledby="crm-services-title">
      <div className="crm-container">
        <SectionHeading
          id="crm-services-title"
          eyebrow="Our Core CRM Solutions"
          title="CRM Solutions Designed for Your Business Operations"
          description="We develop CRM applications designed to organize customer information, manage sales activities, track leads, support follow-up workflows, and connect relevant business systems."
          light
          center
        />
        <div className="crm-service-list">
          {coreServices.map((service, index) => (
            <article
              className={`crm-service-block crm-service-${service.id}${index % 2 ? " is-reverse" : ""}`}
              id={service.id}
              key={service.id}
              data-reveal
            >
              <div className="crm-service-copy">
                <div className="crm-service-meta">
                  <span className="crm-service-number">{service.number} / 05</span>
                  <span className="crm-service-category">{service.category}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <TagList items={service.items} light />
                <div className="crm-service-cta">
                  <PrimaryCta service={service.category} source={`crm-${service.id}`}>{service.cta}</PrimaryCta>
                </div>
              </div>
              <div className="crm-service-visual">{serviceVisuals[service.id]}</div>
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
      <div className="crm-feature-panel">
        <div className="crm-feature-copy">
          <Eyebrow>CRM Feature</Eyebrow>
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
          <div className="crm-feature-metric"><span>{feature.metric}</span><strong>Defined in scope</strong></div>
          <IconCta service={feature.title} source={`crm-feature-${feature.id}`}>Discuss this feature</IconCta>
        </div>
        <div className="crm-feature-visual-wrap"><FeatureVisual id={feature.id} /></div>
      </div>
    ),
  }));

  return (
    <section className="crm-section crm-features-section" id="features" aria-labelledby="crm-features-title">
      <div className="crm-container">
        <SectionHeading
          id="crm-features-title"
          eyebrow="CRM Software Features"
          title="Powerful CRM Features for Your Business"
          description="Explore CRM functionality that can be planned around your customer records, sales processes, lead workflows, reporting requirements, and business applications."
        />
        <div data-reveal><TabShowcase items={items} label="CRM software features" /></div>
      </div>
    </section>
  );
}

function Environments() {
  const items = environments.map((environment) => ({
    id: environment.id,
    label: environment.label,
    content: (
      <div className="crm-environment-panel">
        <div className="crm-environment-copy">
          <Eyebrow>Business requirement</Eyebrow>
          <h3>{environment.title}</h3>
          <p>{environment.text}</p>
          <div className="crm-environment-dashboard"><span className="crm-mono">{environment.dashboard}</span><Dot tone="green" /></div>
          <PrimaryCta service={environment.label} source={`crm-environment-${environment.id}`}>Discuss your CRM</PrimaryCta>
        </div>
        <div className="crm-environment-visual"><EnvironmentVisual id={environment.id} /></div>
      </div>
    ),
  }));

  return (
    <section className="crm-section crm-environments-section" id="business-requirements" aria-labelledby="crm-environments-title">
      <div className="crm-container">
        <SectionHeading
          id="crm-environments-title"
          eyebrow="CRM for Different Business Requirements"
          title="CRM Solutions Built Around Different Business Models"
          description="Different businesses manage leads, sales, customer interactions, and operational workflows differently. We develop CRM solutions tailored to business requirements, customer journeys, sales processes, and operational structures."
        />
        <div data-reveal><TabShowcase items={items} label="CRM solution types" variant="solutions" /></div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="crm-section crm-how-section" id="how-it-works" aria-labelledby="crm-how-title">
      <div className="crm-container">
        <SectionHeading
          id="crm-how-title"
          eyebrow="How Our CRM System Works"
          title="From Customer Enquiry to Business Relationship"
          description="A CRM system connects customer information, lead activities, sales workflows, and reporting through configured modules. The architecture and functionality depend on business requirements, user roles, data structures, and integrations."
        />
        <ol className="crm-workflow" data-reveal>
          {workflowSteps.map((step) => (
            <li className="crm-workflow-step" key={step.number}>
              <div className="crm-workflow-top"><span className="crm-step-number">{step.number}</span><WorkflowMiniVisual kind={step.visual} /></div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="crm-section-foot-cta">
          <span>Need help defining your CRM workflow?</span>
          <IconCta service="CRM Consultation" source="crm-how-cta">Request a CRM discussion</IconCta>
        </div>
      </div>
    </section>
  );
}

function DashboardsAnalytics() {
  return (
    <section className="crm-section crm-analytics-section is-dark" id="dashboards" aria-labelledby="crm-analytics-title">
      <div className="crm-container">
        <div className="crm-analytics-layout">
          <div className="crm-analytics-copy" data-reveal>
            <SectionHeading
              id="crm-analytics-title"
              eyebrow="CRM Dashboards & Analytics"
              title="Understand Your Sales and Customer Performance"
              description="CRM dashboards provide centralized visibility into relevant sales activities, lead status, customer information, business performance, and operational metrics. We develop CRM dashboards tailored to reporting requirements, user roles, business workflows, and management objectives."
              light
            />
            <TagList items={analyticsItems} light />
            <PrimaryCta service="CRM Dashboard Development" source="crm-analytics">Build a CRM dashboard</PrimaryCta>
            <p className="crm-note-light">All figures shown in the dashboard mockup are illustrative sample data.</p>
          </div>
          <div data-reveal><AnalyticsVisual /></div>
        </div>
      </div>
    </section>
  );
}

function WorkflowAutomation() {
  return (
    <section className="crm-section crm-automation-section" id="automation" aria-labelledby="crm-automation-title">
      <div className="crm-container">
        <SectionHeading
          id="crm-automation-title"
          eyebrow="CRM Workflow Automation"
          title="Streamline CRM Workflows and Repetitive Business Tasks"
          description="CRM workflow automation helps businesses streamline configured activities, improve workflow consistency, manage follow-ups, organize processes, and reduce repetitive administrative tasks. We develop CRM workflow functionality tailored to business requirements, sales processes, operational workflows, and automation needs."
        />
        <div className="crm-automation-wrap" data-reveal><AutomationVisual /></div>
        <div className="crm-workflow-tags" data-reveal>
          <TagList items={automationItems} />
          <PrimaryCta service="CRM Workflow Automation" source="crm-automation">Plan your CRM workflows</PrimaryCta>
        </div>
      </div>
    </section>
  );
}

function IntegrationEcosystem() {
  return (
    <section className="crm-section crm-integrations-section" id="integrations" aria-labelledby="crm-integrations-title">
      <div className="crm-container">
        <SectionHeading
          id="crm-integrations-title"
          eyebrow="CRM Integration Ecosystem"
          title="Connect Your CRM With Your Business Ecosystem"
          description="CRM integrations can connect customer management systems with relevant business applications, platforms, websites, communication tools, databases, and operational systems. We develop integrations according to technical requirements, data flows, business workflows, and integration architecture."
        />
        <div className="crm-integrations-layout" data-reveal>
          <div className="crm-integrations-copy">
            <TagList items={integrationItems} />
            <div className="crm-integration-highlight"><Plug size={18} /><span>Integration scope is agreed around the applications, APIs, permissions and data flows available in your business environment.</span></div>
            <PrimaryCta service="CRM Integration" source="crm-integrations">Plan your CRM integrations</PrimaryCta>
          </div>
          <div><IntegrationEcosystemVisual /></div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="crm-section crm-industries-section is-dark" id="industries" aria-labelledby="crm-industries-title">
      <div className="crm-container">
        <SectionHeading
          id="crm-industries-title"
          eyebrow="Industries We Serve"
          title="Custom CRM Development for Different Industries"
          description="CRM software can be shaped around the customer workflows of different industries, from real estate and retail to education, healthcare and professional services."
          light
        />
        <div className="crm-industries-layout" data-reveal>
          <div className="crm-industry-list">
            {industries.map((industry, index) => (
              <div className="crm-industry-row" key={industry.name}>
                <span className="crm-industry-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="crm-industry-icon">{industryIcons[industry.icon]}</span>
                <div><h3>{industry.name}</h3><p>{industry.text}</p></div>
              </div>
            ))}
          </div>
          <div className="crm-industries-side">
            <IndustriesVisual />
            <div className="crm-industries-aside">
              <CheckItem>Customer records, contact information and interaction history</CheckItem>
              <CheckItem>Lead tracking, qualification and follow-up workflows</CheckItem>
              <CheckItem>Sales pipelines, deal management and reporting</CheckItem>
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
    <section className="crm-section crm-why-section" id="why-royaltech" aria-labelledby="crm-why-title">
      <div className="crm-container">
        <div className="crm-why-layout">
          <div className="crm-why-copy" data-reveal>
            <SectionHeading
              id="crm-why-title"
              eyebrow="Why RoyalTech Innovation"
              title="Your Technology Partner for Custom CRM Solutions"
              description="We focus on practical CRM software: understanding customer workflows, planning the right modules, developing clear interfaces and connecting relevant systems."
            />
            <div className="crm-why-list">
              {whyChoose.map((item) => (
                <div className="crm-why-item" key={item.number}>
                  <span>{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="crm-why-visual-wrap" data-reveal><WhyVisual /></div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="crm-section crm-process-section is-dark" id="process" aria-labelledby="crm-process-title">
      <div className="crm-container">
        <SectionHeading
          id="crm-process-title"
          eyebrow="Our CRM Development Process"
          title="From Business Requirements to Custom CRM Software"
          description="Every engagement follows a clear path from discovery and requirements through architecture, design, development, testing, deployment and maintenance."
          light
        />
        <ol className="crm-process-timeline" data-reveal>
          {processSteps.map((step) => (
            <li className="crm-process-step" key={step.number}>
              <div className="crm-process-node"><span>{step.number}</span></div>
              <ProcessMiniVisual kind={step.visual} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="crm-section-foot-cta crm-section-foot-cta-dark">
          <span>Have a CRM project that needs review?</span>
          <IconCta service="CRM Consultation" source="crm-process-cta">Request a project discussion</IconCta>
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
    <section className="crm-section crm-tech-section" id="technologies" aria-labelledby="crm-tech-title">
      <div className="crm-container">
        <SectionHeading
          id="crm-tech-title"
          eyebrow="CRM Technology & Architecture"
          title="Built With Modern Software Development Technologies"
          description="We develop CRM software using suitable frontend technologies, backend frameworks, databases, APIs, cloud infrastructure, and software architecture selected according to project requirements."
        />
        <div className="crm-tech-grid" data-reveal>
          {technologyGroups.map((group, index) => (
            <div className="crm-tech-card" key={group.title}>
              <div className="crm-tech-card-head"><span className="crm-tech-card-icon">{icons[index]}</span><h3>{group.title}</h3></div>
              <p className="crm-tech-note">{group.note}</p>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="crm-note">Technology choices are confirmed during discovery. We do not claim certifications, partnerships or technologies that have not been verified for your project.</p>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section className="crm-section crm-security-section is-dark" id="security" aria-labelledby="crm-security-title">
      <div className="crm-container">
        <div className="crm-security-layout">
          <div className="crm-security-copy" data-reveal>
            <SectionHeading
              id="crm-security-title"
              eyebrow="CRM Software Security & Data Management"
              title="Develop CRM Systems With Data Management in Mind"
              description="CRM software manages important customer, business, sales, and operational information. We plan CRM applications around appropriate access controls, data structures, application security considerations, user roles, integration requirements, and data management needs."
              light
            />
            <ul className="crm-security-list">
              {securityItems.map((item) => <li key={item}><LockKeyhole size={14} /> {item}</li>)}
            </ul>
            <div className="crm-security-highlight"><ShieldCheck size={18} /><span>Access, permissions and data structures are defined to the agreed project scope and platform requirements.</span></div>
            <p className="crm-note-light">No absolute security claim or certification is implied.</p>
          </div>
          <div data-reveal><SecurityVisual /></div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="crm-section crm-benefits-section" id="benefits" aria-labelledby="crm-benefits-title">
      <div className="crm-container">
        <SectionHeading
          id="crm-benefits-title"
          eyebrow="CRM Benefits for Businesses"
          title="Improve Visibility Across Your Sales and Customer Operations"
          description="A well-planned CRM system brings customer information, leads, sales workflows and reporting into a connected digital environment."
        />
        <div data-reveal><BenefitsVisual /></div>
        <ul className="crm-benefit-grid" data-reveal>
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
    <section className="crm-section crm-faq-section is-dark" id="faq" aria-labelledby="crm-faq-title">
      <div className="crm-container crm-faq-layout">
        <div className="crm-faq-intro" data-reveal>
          <SectionHeading
            id="crm-faq-title"
            eyebrow="FAQ"
            title="Frequently Asked Questions About CRM Development"
            description="Clear answers about custom CRM development, modules, integrations, implementation timelines and CRM maintenance."
            light
          />
          <div className="crm-faq-help">
            <span className="crm-faq-help-icon"><Workflow size={18} /></span>
            <h3>Still have a question?</h3>
            <p>Tell us about your sales process, customer data and existing systems. We will outline a practical next step based on your requirements.</p>
            <PrimaryCta service="Custom CRM Development" source="crm-faq">Talk to our team</PrimaryCta>
          </div>
        </div>
        <div data-reveal><FaqAccordion items={faqs} /></div>
      </div>
    </section>
  );
}

function RelatedServices() {
  return (
    <section className="crm-section crm-related-section" aria-labelledby="crm-related-title">
      <div className="crm-container">
        <SectionHeading
          id="crm-related-title"
          eyebrow="Related Services"
          title="Custom CRM Development Solutions for Modern Businesses"
          description="CRM platforms work best when connected to the wider software, web, mobile, AI and consulting ecosystem around them."
        />
        <div className="crm-related-grid">
          {relatedLinks.map((link) => (
            <Link href={link.href} className="crm-related-link" key={link.label}>
              <span>{link.label}</span>
              <small>{link.note}</small>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="crm-related-extra">
          <Link href="/services/erp-solutions">ERP Solutions</Link>
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
    <section className="crm-section crm-final-cta" id="contact" aria-labelledby="crm-final-title">
      <div className="crm-cta-bg" aria-hidden="true" />
      <div className="crm-container crm-final-cta-inner">
        <div className="crm-final-cta-copy">
          <Eyebrow light>Start a Conversation</Eyebrow>
          <h2 id="crm-final-title">Ready to Build a CRM Around Your Business?</h2>
          <p>
            Whether you need custom CRM software, sales management systems, lead management solutions,
            customer management applications, or CRM integrations, RoyalTech Innovation can help you plan
            and develop a CRM solution tailored to your business.
          </p>
          <div className="crm-hero-actions">
            <PrimaryCta variant="light" service="Custom CRM Development" source="crm-final-primary">Start Your CRM Project</PrimaryCta>
            <PrimaryCta variant="outline" service="CRM Consultation" source="crm-final-secondary">Discuss Your Requirements</PrimaryCta>
          </div>
          <div className="crm-final-contact">
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

export default function CrmDevelopmentPage() {
  return (
    <div className="crm-page">
      <ScrollReveal />
      <Breadcrumbs />
      <Hero />
      <Introduction />
      <CoreServices />
      <Features />
      <Environments />
      <HowItWorks />
      <DashboardsAnalytics />
      <WorkflowAutomation />
      <IntegrationEcosystem />
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
