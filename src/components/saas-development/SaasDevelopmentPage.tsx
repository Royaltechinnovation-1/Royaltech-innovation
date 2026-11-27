import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Building2,
  Check,
  Cloud,
  Code2,
  Database,
  Layers3,
  LockKeyhole,
  MapPin,
  Plug,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  analyticsItems,
  benefits,
  businessModels,
  coreServices,
  faqs,
  features,
  industries,
  integrationItems,
  processSteps,
  relatedLinks,
  securityItems,
  technologyGroups,
  uxItems,
  whyChoose,
  workflowSteps,
} from "./data";
import { FaqAccordion, ScrollReveal, TabShowcase } from "./interactions";
import {
  CheckItem,
  Dot,
  Eyebrow,
  FlowSteps,
  IconCta,
  PrimaryCta,
  SectionHeading,
  TagList,
} from "./ui";
import {
  AnalyticsVisual,
  ArchitectureVisual,
  BenefitsVisual,
  BusinessModelVisual,
  CtaVisual,
  CustomSaasVisual,
  FeatureFlowVisual,
  FeatureVisual,
  HeroVisual,
  IndustriesVisual,
  IntegrationEcosystemVisual,
  IntegrationVisual,
  IntroVisual,
  MultiTenantVisual,
  ProcessMiniVisual,
  ProductDevVisual,
  SecurityVisual,
  SubscriptionVisual,
  UxJourneyVisual,
  WhyVisual,
  WorkflowMiniVisual,
  industryIcons,
} from "./visuals";
import "./saas-development.css";

const serviceVisuals = {
  "custom-saas-development": <CustomSaasVisual />,
  "saas-product-development": <ProductDevVisual />,
  "subscription-management": <SubscriptionVisual />,
  "multi-tenant-applications": <MultiTenantVisual />,
  "saas-integration": <IntegrationVisual />,
} as const;

function Breadcrumbs() {
  return (
    <nav className="sd-breadcrumb" aria-label="Breadcrumb">
      <div className="sd-container">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/services">Services</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">SaaS Development</li>
        </ol>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="sd-hero" id="top" aria-labelledby="sd-hero-title">
      <div className="sd-hero-bg" aria-hidden="true" />
      <div className="sd-container sd-hero-inner">
        <div className="sd-hero-copy">
          <div className="sd-hero-badge"><span className="sd-badge-pulse" />SAAS PLATFORM DEVELOPMENT</div>
          <h1 id="sd-hero-title">Build Scalable SaaS Platforms Designed Around Your Business</h1>
          <p className="sd-hero-lead">
            RoyalTech Innovation develops custom SaaS platforms, software products, subscription management
            systems, multi-tenant applications and SaaS integrations designed around your product, users and
            business requirements.
          </p>
          <div className="sd-hero-keywords" aria-label="SaaS development services">
            <span>Custom SaaS Development</span>
            <span>SaaS Product Development</span>
            <span>Subscription Management</span>
            <span>Multi-Tenant Applications</span>
            <span>SaaS Integration</span>
            <span>SaaS Dashboards</span>
            <span>Cloud Software Platforms</span>
          </div>
          <div className="sd-hero-actions">
            <PrimaryCta service="Custom SaaS Development" source="saas-hero-primary">Build Your SaaS Platform</PrimaryCta>
            <PrimaryCta variant="outline" service="SaaS Consultation" source="saas-hero-secondary">Discuss Your SaaS Product</PrimaryCta>
          </div>
          <div className="sd-hero-meta">
            <span><Check size={14} /> Scope defined with your team</span>
            <span><Check size={14} /> Architecture aligned to requirements</span>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="sd-container sd-hero-bottom">
        <span className="sd-scroll-cue"><i /> Scroll to explore</span>
        <span>SaaS Development Company · Custom SaaS Platforms · Multi-Tenant SaaS Applications</span>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="sd-section sd-intro-section" id="introduction" aria-labelledby="sd-intro-title">
      <div className="sd-container sd-intro-layout">
        <div className="sd-intro-copy" data-reveal>
          <SectionHeading
            id="sd-intro-title"
            eyebrow="Introduction"
            title="Custom SaaS Development & Scalable Software Platforms"
          />
          <p>
            A SaaS platform brings application functionality, user accounts, business workflows, data,
            subscriptions and administration into one cloud-based software environment.
          </p>
          <p>
            RoyalTech Innovation plans and builds SaaS applications around product requirements, user journeys,
            business models and integration needs. We define the architecture and functionality with your team
            before development begins.
          </p>
          <p>
            From an initial MVP to a multi-organization platform, we develop application modules, dashboards,
            role-based access, subscription workflows and connected services that support the way your product
            is used.
          </p>
          <div className="sd-intro-points">
            <CheckItem>Product planning and SaaS architecture</CheckItem>
            <CheckItem>Application modules, dashboards and user roles</CheckItem>
            <CheckItem>Subscription and billing workflow development</CheckItem>
            <CheckItem>Multi-tenant structures and API integrations</CheckItem>
          </div>
          <div className="sd-hero-actions">
            <PrimaryCta service="SaaS Development" source="saas-intro">Talk to a SaaS Engineer</PrimaryCta>
            <PrimaryCta variant="quiet" href="/services/software-development" source="saas-intro-software">Explore Custom Software Development</PrimaryCta>
          </div>
        </div>
        <div className="sd-intro-visual-wrap" data-reveal>
          <IntroVisual />
        </div>
      </div>
    </section>
  );
}

function CoreServices() {
  return (
    <section className="sd-section sd-services-section is-dark" id="services" aria-labelledby="sd-services-title">
      <div className="sd-container">
        <SectionHeading
          id="sd-services-title"
          eyebrow="Our Core SaaS Services"
          title="Complete SaaS Development Solutions for Modern Products"
          description="We develop custom SaaS platforms, SaaS products, subscription management systems, multi-tenant applications and integrations tailored to your requirements."
          light
          center
        />
        <div className="sd-service-list">
          {coreServices.map((service, index) => (
            <article
              className={`sd-service-block sd-service-${service.id}${index % 2 ? " is-reverse" : ""}`}
              id={service.id}
              key={service.id}
              data-reveal
            >
              <div className="sd-service-copy">
                <div className="sd-service-meta">
                  <span className="sd-service-number">{service.number} / 05</span>
                  <span className="sd-service-category">{service.category}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <TagList items={service.items} light />
                <div className="sd-service-cta">
                  <PrimaryCta service={service.category} source={`saas-${service.id}`}>{service.cta}</PrimaryCta>
                </div>
              </div>
              <div className="sd-service-visual">{serviceVisuals[service.id]}</div>
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
      <div className="sd-feature-panel">
        <div className="sd-feature-copy">
          <Eyebrow>Functionality</Eyebrow>
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
          <div className="sd-feature-metric">
            <span>{feature.metric}</span>
            <strong>Included in scope</strong>
          </div>
          <IconCta service={feature.title} source={`saas-feature-${feature.id}`}>Discuss this feature</IconCta>
        </div>
        <div className="sd-feature-visual-wrap">
          <FeatureVisual id={feature.id} />
        </div>
      </div>
    ),
  }));

  return (
    <section className="sd-section sd-features-section" id="features" aria-labelledby="sd-features-title">
      <div className="sd-container">
        <SectionHeading
          id="sd-features-title"
          eyebrow="Features & Functionality"
          title="Build the Functionality Your SaaS Product Needs"
          description="Select the modules and capabilities relevant to your product. Each feature is defined during discovery and developed to match your users, workflows and application architecture."
        />
        <div data-reveal><TabShowcase items={items} label="SaaS platform features" /></div>
        <div className="sd-feature-flow-wrap" data-reveal><FeatureFlowVisual /></div>
      </div>
    </section>
  );
}

function BusinessModels() {
  const items = businessModels.map((model) => ({
    id: model.id,
    label: model.label,
    content: (
      <div className="sd-model-panel">
        <div className="sd-model-copy">
          <Eyebrow>Business model</Eyebrow>
          <h3>{model.title}</h3>
          <p>{model.text}</p>
          <div className="sd-model-dashboard"><span className="sd-mono">{model.dashboard}</span><Dot tone="green" /></div>
          <PrimaryCta service={model.label} source={`saas-model-${model.id}`}>Discuss your requirement</PrimaryCta>
        </div>
        <div className="sd-model-visual"><BusinessModelVisual id={model.id} /></div>
      </div>
    ),
  }));

  return (
    <section className="sd-section sd-models-section" id="business-models" aria-labelledby="sd-models-title">
      <div className="sd-container">
        <SectionHeading
          id="sd-models-title"
          eyebrow="Business Models"
          title="SaaS Platforms Built Around Different Business Models"
          description="A SaaS application can support business operations, recurring subscriptions, startup products, multiple organizations, customer portals or custom product functionality."
        />
        <div data-reveal><TabShowcase items={items} label="SaaS business models" variant="solutions" /></div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="sd-section sd-how-section" id="how-it-works" aria-labelledby="sd-how-title">
      <div className="sd-container">
        <SectionHeading
          id="sd-how-title"
          eyebrow="How a SaaS Platform Works"
          title="Connect Users, Applications, Data and Subscriptions"
          description="A SaaS platform connects authentication, organization management, application functionality, data processing, billing workflows, integrations and administration in one structured architecture."
        />
        <ol className="sd-workflow" data-reveal>
          {workflowSteps.map((step) => (
            <li className="sd-workflow-step" key={step.number}>
              <div className="sd-workflow-top">
                <span className="sd-step-number">{step.number}</span>
                <WorkflowMiniVisual kind={step.visual} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="sd-section-foot-cta">
          <span>Need help defining your SaaS architecture?</span>
          <IconCta service="SaaS Architecture" source="saas-how-cta">Request an architecture discussion</IconCta>
        </div>
      </div>
    </section>
  );
}

function DashboardsAnalytics() {
  return (
    <section className="sd-section sd-analytics-section is-dark" id="dashboards" aria-labelledby="sd-analytics-title">
      <div className="sd-container">
        <div className="sd-analytics-layout">
          <div className="sd-analytics-copy" data-reveal>
            <SectionHeading
              id="sd-analytics-title"
              eyebrow="Dashboards & Analytics"
              title="See the Information That Matters in Your SaaS Platform"
              description="SaaS dashboards provide visibility into application activity, users, product usage, subscriptions, workflows and business information. We develop reporting views around the information your team and customers need."
              light
            />
            <TagList items={analyticsItems} light />
            <PrimaryCta service="SaaS Dashboards" source="saas-analytics">Build custom dashboards</PrimaryCta>
            <p className="sd-note-light">All figures shown in the dashboard mockup are illustrative sample data.</p>
          </div>
          <div data-reveal><AnalyticsVisual /></div>
        </div>
      </div>
    </section>
  );
}

function UserExperience() {
  return (
    <section className="sd-section sd-ux-section" id="ui-ux" aria-labelledby="sd-ux-title">
      <div className="sd-container">
        <SectionHeading
          id="sd-ux-title"
          eyebrow="UI/UX Design"
          title="Design SaaS Interfaces People Can Use With Confidence"
          description="We design application dashboards, navigation, onboarding, customer portals, settings and user journeys around the tasks your users perform."
        />
        <div className="sd-ux-journey-wrap" data-reveal><UxJourneyVisual /></div>
        <div className="sd-ux-layout" data-reveal>
          <div className="sd-ux-copy">
            <h3>Interface work included in SaaS product development</h3>
            <TagList items={uxItems} />
            <FlowSteps steps={["Sign up", "Onboarding", "Dashboard", "Features", "Settings", "Subscription", "Support"]} compact />
            <PrimaryCta service="SaaS UI/UX Design" source="saas-ux">Plan your product experience</PrimaryCta>
          </div>
          <div className="sd-ux-highlight">
            <Sparkles size={18} />
            <p>User journeys, wireframes and responsive layouts are defined with your team before application development begins.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Integrations() {
  return (
    <section className="sd-section sd-integrations-section" id="integrations" aria-labelledby="sd-integrations-title">
      <div className="sd-container">
        <SectionHeading
          id="sd-integrations-title"
          eyebrow="Integrations & Connectivity"
          title="Connect Your SaaS Platform With the Tools You Use"
          description="We connect SaaS applications with APIs, business software, payment services, CRM and ERP systems, cloud services and third-party platforms according to the access and documentation available."
        />
        <div className="sd-integrations-layout" data-reveal>
          <div className="sd-integrations-copy">
            <TagList items={integrationItems} />
            <div className="sd-integration-highlight"><Plug size={18} /><span>Integration scope is agreed around the systems, permissions and data exchange your product requires.</span></div>
            <PrimaryCta service="SaaS Integration" source="saas-integrations">Plan your integrations</PrimaryCta>
          </div>
          <div><IntegrationEcosystemVisual /></div>
        </div>
      </div>
    </section>
  );
}

function Technologies() {
  const icons = [<Layers3 size={17} key="frontend" />, <Code2 size={17} key="backend" />, <Database size={17} key="database" />, <Cloud size={17} key="cloud" />, <Plug size={17} key="api" />, <Boxes size={17} key="architecture" />];
  return (
    <section className="sd-section sd-tech-section is-dark" id="technologies" aria-labelledby="sd-tech-title">
      <div className="sd-container">
        <SectionHeading
          id="sd-tech-title"
          eyebrow="Technologies & Architecture"
          title="Build Your SaaS Product on an Architecture That Fits"
          description="We define frontend interfaces, backend services, databases, APIs, cloud infrastructure and integration layers around product requirements rather than assuming a platform in advance."
          light
        />
        <div className="sd-tech-ecosystem-wrap" data-reveal><ArchitectureVisual /></div>
        <div className="sd-tech-grid" data-reveal>
          {technologyGroups.map((group, index) => (
            <div className="sd-tech-card" key={group.title}>
              <div className="sd-tech-card-head">
                <span className="sd-tech-card-icon">{icons[index]}</span>
                <h3>{group.title}</h3>
              </div>
              <p className="sd-tech-note">{group.note}</p>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="sd-note-light">Technology choices are confirmed during discovery. We do not assume a platform, certification or partnership that has not been agreed for your project.</p>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="sd-section sd-industries-section" id="industries" aria-labelledby="sd-industries-title">
      <div className="sd-container">
        <SectionHeading
          id="sd-industries-title"
          eyebrow="Industries"
          title="SaaS Platforms for Different Industries"
          description="Application modules, workflows, user roles, portals and integrations can be shaped around the requirements of each industry."
        />
        <div className="sd-industries-layout" data-reveal>
          <div className="sd-industry-list">
            {industries.map((industry, index) => (
              <div className="sd-industry-row" key={industry.name}>
                <span className="sd-industry-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="sd-industry-icon">{industryIcons[industry.icon]}</span>
                <div>
                  <h3>{industry.name}</h3>
                  <p>{industry.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="sd-industries-side">
            <IndustriesVisual />
            <div className="sd-industries-aside">
              <CheckItem>Customer and admin portals</CheckItem>
              <CheckItem>Multi-organization structures</CheckItem>
              <CheckItem>Subscription workflows</CheckItem>
              <CheckItem>Business system integrations</CheckItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="sd-section sd-why-section is-dark" id="why-royaltech" aria-labelledby="sd-why-title">
      <div className="sd-container">
        <div className="sd-why-layout">
          <div className="sd-why-copy" data-reveal>
            <SectionHeading
              id="sd-why-title"
              eyebrow="Why RoyalTech Innovation"
              title="Your Technology Partner for SaaS Platform Development"
              description="We focus on practical product work: understanding your business, defining the architecture, designing usable interfaces and developing application functionality that can evolve."
              light
            />
            <div className="sd-why-list">
              {whyChoose.map((item) => (
                <div className="sd-why-item" key={item.number}>
                  <span>{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="sd-why-visual-wrap" data-reveal><WhyVisual /></div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="sd-section sd-process-section" id="process" aria-labelledby="sd-process-title">
      <div className="sd-container">
        <SectionHeading
          id="sd-process-title"
          eyebrow="Development Process"
          title="From SaaS Idea to Launch and Ongoing Development"
          description="Every engagement follows a clear path from discovery and requirements through architecture, design, development, testing, deployment and maintenance."
        />
        <ol className="sd-process-timeline" data-reveal>
          {processSteps.map((step) => (
            <li className="sd-process-step" key={step.number}>
              <div className="sd-process-node"><span>{step.number}</span></div>
              <ProcessMiniVisual kind={step.visual} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="sd-section-foot-cta">
          <span>Have a product idea that needs review?</span>
          <IconCta service="SaaS Consultation" source="saas-process-cta">Request a product discussion</IconCta>
        </div>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section className="sd-section sd-security-section" id="security" aria-labelledby="sd-security-title">
      <div className="sd-container">
        <div className="sd-security-layout">
          <div className="sd-security-copy" data-reveal>
            <SectionHeading
              id="sd-security-title"
              eyebrow="Security & Data Management"
              title="Plan Access, Permissions and Data Management From the Start"
              description="SaaS applications require considered authentication, role-based permissions, tenant data structures, validation rules, API access and database management. We define these controls with your team according to the agreed project scope."
            />
            <ul className="sd-security-list">
              {securityItems.map((item) => (
                <li key={item}><LockKeyhole size={14} /> {item}</li>
              ))}
            </ul>
            <div className="sd-security-highlight"><ShieldCheck size={18} /><span>Tenant data and configuration separation is achieved through deliberate architecture, data models and access controls agreed for the project.</span></div>
            <p className="sd-note">Controls and permissions are defined to the agreed scope. No absolute security guarantee is implied.</p>
          </div>
          <div data-reveal><SecurityVisual /></div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="sd-section sd-benefits-section is-dark" id="benefits" aria-labelledby="sd-benefits-title">
      <div className="sd-container">
        <SectionHeading
          id="sd-benefits-title"
          eyebrow="Benefits"
          title="Build a Platform That Supports Your Product and Business"
          description="A well-planned SaaS application centralizes functionality, users and administration while supporting subscriptions, integrations and future development."
          light
        />
        <div data-reveal><BenefitsVisual /></div>
        <ul className="sd-benefit-grid" data-reveal>
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
    <section className="sd-section sd-faq-section" id="faq" aria-labelledby="sd-faq-title">
      <div className="sd-container sd-faq-layout">
        <div className="sd-faq-intro" data-reveal>
          <SectionHeading
            id="sd-faq-title"
            eyebrow="FAQ"
            title="Frequently Asked Questions About SaaS Development"
            description="Clear answers about custom SaaS development, product planning, subscriptions, multi-tenant applications, integrations, timelines and support."
          />
          <div className="sd-faq-help">
            <span className="sd-faq-help-icon"><Building2 size={18} /></span>
            <h3>Still have a question?</h3>
            <p>Tell us about your product and business model. We will outline a practical next step based on your requirements.</p>
            <PrimaryCta service="SaaS Development" source="saas-faq">Talk to our team</PrimaryCta>
          </div>
        </div>
        <div data-reveal><FaqAccordion items={faqs} /></div>
      </div>
    </section>
  );
}

function RelatedServices() {
  return (
    <section className="sd-section sd-related-section" aria-labelledby="sd-related-title">
      <div className="sd-container">
        <SectionHeading id="sd-related-title" eyebrow="Related Services" title="SaaS Development Alongside Your Digital Products" description="SaaS platforms work best when connected to the wider software, web, mobile and design ecosystem around them." />
        <div className="sd-related-grid">
          {relatedLinks.map((link) => (
            <Link href={link.href} className="sd-related-link" key={link.label}>
              <span>{link.label}</span>
              <small>{link.note}</small>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="sd-related-extra">
          <Link href="/services#saas-platforms">SaaS Platform Development</Link>
          <Link href="/services#ai-integration">AI Integration &amp; API Solutions</Link>
          <Link href="/services#erp-dev">ERP Solutions</Link>
          <Link href="/services/cloud-devops">Cloud &amp; DevOps</Link>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="sd-section sd-final-cta" id="contact" aria-labelledby="sd-final-title">
      <div className="sd-cta-bg" aria-hidden="true" />
      <div className="sd-container sd-final-cta-inner">
        <div className="sd-final-cta-copy">
          <Eyebrow light>Start a Conversation</Eyebrow>
          <h2 id="sd-final-title">Ready to Build Your SaaS Platform?</h2>
          <p>
            Whether you need custom SaaS development, a SaaS product MVP, subscription management, a
            multi-tenant application or SaaS integration, RoyalTech Innovation can help you plan and build a
            solution tailored to your business and product requirements.
          </p>
          <div className="sd-hero-actions">
            <PrimaryCta variant="light" service="SaaS Development" source="saas-final-primary">Start Your SaaS Project</PrimaryCta>
            <PrimaryCta variant="outline" service="SaaS Consultation" source="saas-final-secondary">Discuss Your Product Idea</PrimaryCta>
          </div>
          <div className="sd-final-contact">
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

export default function SaasDevelopmentPage() {
  return (
    <div className="sd-page">
      <ScrollReveal />
      <Breadcrumbs />
      <Hero />
      <Introduction />
      <CoreServices />
      <Features />
      <BusinessModels />
      <HowItWorks />
      <DashboardsAnalytics />
      <UserExperience />
      <Integrations />
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
