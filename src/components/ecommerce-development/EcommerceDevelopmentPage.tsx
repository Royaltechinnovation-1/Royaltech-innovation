import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  Code2,
  Layers3,
  LockKeyhole,
  MapPin,
  Plug,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
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
  BenefitsVisual,
  B2bB2cVisual,
  BusinessModelVisual,
  CtaVisual,
  FeatureFlowVisual,
  FeatureVisual,
  HeroVisual,
  IndustriesVisual,
  IntegrationEcosystemVisual,
  IntroVisual,
  MarketplaceVisual,
  OnlineStoreVisual,
  PaymentVisual,
  ProcessMiniVisual,
  SecurityVisual,
  ShoppingCartVisual,
  TechnologyVisual,
  UxJourneyVisual,
  WhyVisual,
  WorkflowMiniVisual,
  industryIcons,
} from "./visuals";
import "./ecommerce-development.css";

const serviceVisuals = {
  "online-store-development": <OnlineStoreVisual />,
  "multi-vendor-marketplace": <MarketplaceVisual />,
  "b2b-b2c-solutions": <B2bB2cVisual />,
  "shopping-cart-development": <ShoppingCartVisual />,
  "payment-gateway-integration": <PaymentVisual />,
} as const;

function Breadcrumbs() {
  return (
    <nav className="ec-breadcrumb" aria-label="Breadcrumb">
      <div className="ec-container">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/services">Services</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">E-commerce Development</li>
        </ol>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="ec-hero" id="top" aria-labelledby="ec-hero-title">
      <div className="ec-hero-bg" aria-hidden="true" />
      <div className="ec-container ec-hero-inner">
        <div className="ec-hero-copy">
          <div className="ec-hero-badge"><span className="ec-badge-pulse" />ECOMMERCE DEVELOPMENT &amp; DIGITAL COMMERCE</div>
          <h1 id="ec-hero-title">Build Powerful E-commerce Experiences for Your Business</h1>
          <p className="ec-hero-lead">
            RoyalTech Innovation develops custom ecommerce websites, online stores, multi-vendor marketplaces,
            B2B and B2C ecommerce platforms, shopping cart experiences, and payment integrations designed
            around your business requirements.
          </p>
          <div className="ec-hero-keywords" aria-label="Ecommerce development services">
            <span>Ecommerce Website Development</span>
            <span>Online Store Development</span>
            <span>Multi-Vendor Marketplace</span>
            <span>B2B &amp; B2C Ecommerce</span>
            <span>Shopping Cart Development</span>
            <span>Payment Gateway Integration</span>
          </div>
          <div className="ec-hero-actions">
            <PrimaryCta service="Online Store Development" source="ecommerce-hero-primary">Build Your Online Store</PrimaryCta>
            <PrimaryCta variant="outline" service="Ecommerce Development Consultation" source="ecommerce-hero-secondary">Discuss Your Ecommerce Project</PrimaryCta>
          </div>
          <div className="ec-hero-meta">
            <span><Check size={14} /> Storefronts designed around your products</span>
            <span><Check size={14} /> Checkout and integrations defined with your team</span>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="ec-container ec-hero-bottom">
        <span className="ec-scroll-cue"><i /> Scroll to explore</span>
        <span>Ecommerce Development Company · Online Stores · Marketplaces · Payment Integrations</span>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="ec-section ec-intro-section" id="introduction" aria-labelledby="ec-intro-title">
      <div className="ec-container ec-intro-layout">
        <div className="ec-intro-copy" data-reveal>
          <SectionHeading
            id="ec-intro-title"
            eyebrow="Introduction"
            title="Create a Seamless Digital Shopping Experience"
          />
          <p>
            Modern ecommerce businesses need more than a website. They need a digital storefront that connects
            product discovery, shopping experiences, customer interactions, order management, payments and
            business operations.
          </p>
          <p>
            RoyalTech Innovation develops custom ecommerce solutions tailored to business requirements,
            product structures, customer journeys, sales models, operational workflows and digital commerce
            objectives.
          </p>
          <p>
            From online store development and marketplace platforms to B2B/B2C ecommerce, shopping cart
            development and payment gateway integration, we build ecommerce solutions designed around your
            business.
          </p>
          <div className="ec-intro-points">
            <CheckItem>Storefronts, product catalogs and product pages</CheckItem>
            <CheckItem>Shopping cart and checkout workflow development</CheckItem>
            <CheckItem>Marketplace, wholesale and customer account structures</CheckItem>
            <CheckItem>Payment, CRM, ERP, inventory and shipping integrations</CheckItem>
          </div>
          <div className="ec-hero-actions">
            <PrimaryCta service="Ecommerce Development" source="ecommerce-intro">Talk to an Ecommerce Engineer</PrimaryCta>
            <PrimaryCta variant="quiet" href="/services/website-development" source="ecommerce-intro-website">Explore Website Development</PrimaryCta>
          </div>
        </div>
        <div className="ec-intro-visual-wrap" data-reveal>
          <IntroVisual />
        </div>
      </div>
    </section>
  );
}

function CoreServices() {
  return (
    <section className="ec-section ec-services-section is-dark" id="services" aria-labelledby="ec-services-title">
      <div className="ec-container">
        <SectionHeading
          id="ec-services-title"
          eyebrow="Our Core E-commerce Development Services"
          title="Complete E-commerce Development Solutions for Your Business"
          description="We develop ecommerce websites and digital commerce platforms designed to support product discovery, customer experiences, online transactions, marketplace operations and business requirements."
          light
          center
        />
        <div className="ec-service-list">
          {coreServices.map((service, index) => (
            <article
              className={`ec-service-block ec-service-${service.id}${index % 2 ? " is-reverse" : ""}`}
              id={service.id}
              key={service.id}
              data-reveal
            >
              <div className="ec-service-copy">
                <div className="ec-service-meta">
                  <span className="ec-service-number">{service.number} / 05</span>
                  <span className="ec-service-category">{service.category}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <TagList items={service.items} light />
                <div className="ec-service-cta">
                  <PrimaryCta service={service.category} source={`ecommerce-${service.id}`}>{service.cta}</PrimaryCta>
                </div>
              </div>
              <div className="ec-service-visual">{serviceVisuals[service.id]}</div>
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
      <div className="ec-feature-panel">
        <div className="ec-feature-copy">
          <Eyebrow>Functionality</Eyebrow>
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
          <div className="ec-feature-metric">
            <span>{feature.metric}</span>
            <strong>Defined in scope</strong>
          </div>
          <IconCta service={feature.title} source={`ecommerce-feature-${feature.id}`}>Discuss this feature</IconCta>
        </div>
        <div className="ec-feature-visual-wrap">
          <FeatureVisual id={feature.id} />
        </div>
      </div>
    ),
  }));

  return (
    <section className="ec-section ec-features-section" id="features" aria-labelledby="ec-features-title">
      <div className="ec-container">
        <SectionHeading
          id="ec-features-title"
          eyebrow="E-commerce Features & Functionality"
          title="Powerful Features for Modern E-commerce Websites"
          description="Explore the store functionality we can plan and develop around your products, customers, checkout workflows and operations. Every capability is defined during discovery."
        />
        <div data-reveal><TabShowcase items={items} label="Ecommerce platform features" /></div>
        <div className="ec-feature-flow-wrap" data-reveal><FeatureFlowVisual /></div>
      </div>
    </section>
  );
}

function BusinessModels() {
  const items = businessModels.map((model) => ({
    id: model.id,
    label: model.label,
    content: (
      <div className="ec-model-panel">
        <div className="ec-model-copy">
          <Eyebrow>Business requirement</Eyebrow>
          <h3>{model.title}</h3>
          <p>{model.text}</p>
          <div className="ec-model-dashboard"><span className="ec-mono">{model.dashboard}</span><Dot tone="green" /></div>
          <PrimaryCta service={model.label} source={`ecommerce-model-${model.id}`}>Discuss your store</PrimaryCta>
        </div>
        <div className="ec-model-visual"><BusinessModelVisual id={model.id} /></div>
      </div>
    ),
  }));

  return (
    <section className="ec-section ec-models-section" id="business-models" aria-labelledby="ec-models-title">
      <div className="ec-container">
        <SectionHeading
          id="ec-models-title"
          eyebrow="Business Requirements"
          title="E-commerce Solutions Tailored to Your Business Model"
          description="Different businesses require different online selling experiences, product structures, customer workflows, pricing models, ecommerce functionality and operational processes."
        />
        <div data-reveal><TabShowcase items={items} label="Ecommerce business models" variant="solutions" /></div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="ec-section ec-how-section" id="how-it-works" aria-labelledby="ec-how-title">
      <div className="ec-container">
        <SectionHeading
          id="ec-how-title"
          eyebrow="How an E-commerce Platform Works"
          title="Connect Product Discovery, Shopping, Payments, and Orders"
          description="An ecommerce platform connects product information, customer experiences, shopping cart functionality, checkout, payment processing, order management and relevant business workflows through integrated digital applications."
        />
        <ol className="ec-workflow" data-reveal>
          {workflowSteps.map((step) => (
            <li className="ec-workflow-step" key={step.number}>
              <div className="ec-workflow-top">
                <span className="ec-step-number">{step.number}</span>
                <WorkflowMiniVisual kind={step.visual} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="ec-section-foot-cta">
          <span>Need help defining your ecommerce workflow?</span>
          <IconCta service="Ecommerce Platform Architecture" source="ecommerce-how-cta">Request a commerce discussion</IconCta>
        </div>
      </div>
    </section>
  );
}

function DashboardsAnalytics() {
  return (
    <section className="ec-section ec-analytics-section is-dark" id="dashboards" aria-labelledby="ec-analytics-title">
      <div className="ec-container">
        <div className="ec-analytics-layout">
          <div className="ec-analytics-copy" data-reveal>
            <SectionHeading
              id="ec-analytics-title"
              eyebrow="Dashboards & Analytics"
              title="Get a Clear View of Your Online Store Performance"
              description="Ecommerce dashboards provide visibility into relevant store information, orders, products, customer activity, sales data, inventory and business operations. We develop dashboards around the information your team needs."
              light
            />
            <TagList items={analyticsItems} light />
            <PrimaryCta service="Ecommerce Dashboard Development" source="ecommerce-analytics">Build a store dashboard</PrimaryCta>
            <p className="ec-note-light">All figures shown in the dashboard mockup are illustrative sample data.</p>
          </div>
          <div data-reveal><AnalyticsVisual /></div>
        </div>
      </div>
    </section>
  );
}

function UserExperience() {
  return (
    <section className="ec-section ec-ux-section" id="ui-ux" aria-labelledby="ec-ux-title">
      <div className="ec-container">
        <SectionHeading
          id="ec-ux-title"
          eyebrow="E-commerce UX & Customer Journey"
          title="Create Smooth and Intuitive Shopping Experiences"
          description="Ecommerce user experiences influence how customers explore products, understand product information, navigate stores, interact with shopping carts and complete checkout workflows."
        />
        <div className="ec-ux-journey-wrap" data-reveal><UxJourneyVisual /></div>
        <div className="ec-ux-layout" data-reveal>
          <div className="ec-ux-copy">
            <h3>Interface work included in ecommerce development</h3>
            <TagList items={uxItems} />
            <FlowSteps steps={["Homepage", "Discover", "Product", "Cart", "Checkout", "Confirmation"]} compact />
            <PrimaryCta service="Ecommerce UI/UX Design" source="ecommerce-ux">Plan your shopping experience</PrimaryCta>
          </div>
          <div className="ec-ux-highlight">
            <Sparkles size={18} />
            <p>Storefront layouts, product pages, cart and checkout journeys are designed around your brand, products and supported devices.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Integrations() {
  return (
    <section className="ec-section ec-integrations-section" id="integrations" aria-labelledby="ec-integrations-title">
      <div className="ec-container">
        <SectionHeading
          id="ec-integrations-title"
          eyebrow="E-commerce Integrations"
          title="Connect Your E-commerce Platform With Business Applications"
          description="Ecommerce integrations connect online stores and marketplace platforms with relevant payment systems, business applications, inventory software, CRM platforms, shipping services, APIs and operational tools."
        />
        <div className="ec-integrations-layout" data-reveal>
          <div className="ec-integrations-copy">
            <TagList items={integrationItems} />
            <div className="ec-integration-highlight"><Plug size={18} /><span>Integration scope is agreed around the services, permissions, documentation and data exchange available for your business.</span></div>
            <PrimaryCta service="Ecommerce Integration" source="ecommerce-integrations">Plan your integrations</PrimaryCta>
          </div>
          <div><IntegrationEcosystemVisual /></div>
        </div>
      </div>
    </section>
  );
}

function Technologies() {
  const icons = [
    <Store size={17} key="storefront" />,
    <ShoppingBag size={17} key="platform" />,
    <Layers3 size={17} key="custom" />,
    <Code2 size={17} key="web" />,
    <Plug size={17} key="integrations" />,
  ];
  return (
    <section className="ec-section ec-tech-section is-dark" id="technologies" aria-labelledby="ec-tech-title">
      <div className="ec-container">
        <SectionHeading
          id="ec-tech-title"
          eyebrow="E-commerce Platforms & Technologies"
          title="Build Your E-commerce Store With the Right Technology"
          description="We develop ecommerce websites and digital commerce platforms using suitable technologies, frameworks, ecommerce platforms, APIs, databases and application architecture selected according to business requirements."
          light
        />
        <div className="ec-tech-ecosystem-wrap" data-reveal><TechnologyVisual /></div>
        <div className="ec-tech-grid" data-reveal>
          {technologyGroups.map((group, index) => (
            <div className="ec-tech-card" key={group.title}>
              <div className="ec-tech-card-head">
                <span className="ec-tech-card-icon">{icons[index]}</span>
                <h3>{group.title}</h3>
              </div>
              <p className="ec-tech-note">{group.note}</p>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="ec-note-light">Platform options and technology choices are confirmed during discovery. We do not assume an official certification or partnership that has not been agreed for your project.</p>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="ec-section ec-industries-section" id="industries" aria-labelledby="ec-industries-title">
      <div className="ec-container">
        <SectionHeading
          id="ec-industries-title"
          eyebrow="Industries We Serve"
          title="E-commerce Development for Different Industries"
          description="Product catalogs, storefronts, customer journeys and operational workflows can be shaped around the requirements of each industry."
        />
        <div className="ec-industries-layout" data-reveal>
          <div className="ec-industry-list">
            {industries.map((industry, index) => (
              <div className="ec-industry-row" key={industry.name}>
                <span className="ec-industry-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="ec-industry-icon">{industryIcons[industry.icon]}</span>
                <div>
                  <h3>{industry.name}</h3>
                  <p>{industry.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ec-industries-side">
            <IndustriesVisual />
            <div className="ec-industries-aside">
              <CheckItem>Product presentation and catalogs</CheckItem>
              <CheckItem>Customer accounts and ordering</CheckItem>
              <CheckItem>Marketplace and wholesale workflows</CheckItem>
              <CheckItem>Payment and operational integrations</CheckItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="ec-section ec-why-section is-dark" id="why-royaltech" aria-labelledby="ec-why-title">
      <div className="ec-container">
        <div className="ec-why-layout">
          <div className="ec-why-copy" data-reveal>
            <SectionHeading
              id="ec-why-title"
              eyebrow="Why RoyalTech Innovation"
              title="Your Technology Partner for E-commerce Development"
              description="We focus on practical commerce work: understanding your products, planning the shopping journey, developing the store and connecting the systems your business uses."
              light
            />
            <div className="ec-why-list">
              {whyChoose.map((item) => (
                <div className="ec-why-item" key={item.number}>
                  <span>{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="ec-why-visual-wrap" data-reveal><WhyVisual /></div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="ec-section ec-process-section" id="process" aria-labelledby="ec-process-title">
      <div className="ec-container">
        <SectionHeading
          id="ec-process-title"
          eyebrow="E-commerce Development Process"
          title="From Business Idea to Online Store"
          description="Every engagement follows a clear path from discovery and requirements through architecture, design, development, testing, deployment and maintenance."
        />
        <ol className="ec-process-timeline" data-reveal>
          {processSteps.map((step) => (
            <li className="ec-process-step" key={step.number}>
              <div className="ec-process-node"><span>{step.number}</span></div>
              <ProcessMiniVisual kind={step.visual} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="ec-section-foot-cta">
          <span>Have an ecommerce idea that needs review?</span>
          <IconCta service="Ecommerce Development Consultation" source="ecommerce-process-cta">Request a project discussion</IconCta>
        </div>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section className="ec-section ec-security-section" id="security" aria-labelledby="ec-security-title">
      <div className="ec-container">
        <div className="ec-security-layout">
          <div className="ec-security-copy" data-reveal>
            <SectionHeading
              id="ec-security-title"
              eyebrow="Security & Data Management"
              title="Develop E-commerce Platforms With Responsible Data Management"
              description="Ecommerce applications manage customer information, product records, order information, transactions, user accounts and relevant business data. We plan platforms around appropriate access controls, application architecture, payment integration requirements, user permissions and data management."
            />
            <ul className="ec-security-list">
              {securityItems.map((item) => (
                <li key={item}><LockKeyhole size={14} /> {item}</li>
              ))}
            </ul>
            <div className="ec-security-highlight"><ShieldCheck size={18} /><span>Access, permissions and data structures are defined to the agreed project scope and platform requirements.</span></div>
            <p className="ec-note">No absolute security claim or certification is implied.</p>
          </div>
          <div data-reveal><SecurityVisual /></div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="ec-section ec-benefits-section is-dark" id="benefits" aria-labelledby="ec-benefits-title">
      <div className="ec-container">
        <SectionHeading
          id="ec-benefits-title"
          eyebrow="Benefits of E-commerce Development"
          title="Create Better Online Shopping and Business Experiences"
          description="A well-planned commerce platform brings product discovery, shopping, checkout, payments, orders and reporting into a connected digital experience."
          light
        />
        <div data-reveal><BenefitsVisual /></div>
        <ul className="ec-benefit-grid" data-reveal>
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
    <section className="ec-section ec-faq-section" id="faq" aria-labelledby="ec-faq-title">
      <div className="ec-container ec-faq-layout">
        <div className="ec-faq-intro" data-reveal>
          <SectionHeading
            id="ec-faq-title"
            eyebrow="FAQ"
            title="Frequently Asked Questions About E-commerce Development"
            description="Clear answers about online store development, marketplaces, B2B/B2C platforms, shopping carts, payment integrations, platforms and project planning."
          />
          <div className="ec-faq-help">
            <span className="ec-faq-help-icon"><Building2 size={18} /></span>
            <h3>Still have a question?</h3>
            <p>Tell us about your products and selling model. We will outline a practical next step based on your requirements.</p>
            <PrimaryCta service="Ecommerce Development" source="ecommerce-faq">Talk to our team</PrimaryCta>
          </div>
        </div>
        <div data-reveal><FaqAccordion items={faqs} /></div>
      </div>
    </section>
  );
}

function RelatedServices() {
  return (
    <section className="ec-section ec-related-section" aria-labelledby="ec-related-title">
      <div className="ec-container">
        <SectionHeading id="ec-related-title" eyebrow="Related Services" title="Custom E-commerce Development Solutions for Modern Businesses" description="Ecommerce platforms work best when connected to the wider web, software, mobile, design, marketing and operations ecosystem around them." />
        <div className="ec-related-grid">
          {relatedLinks.map((link) => (
            <Link href={link.href} className="ec-related-link" key={link.label}>
              <span>{link.label}</span>
              <small>{link.note}</small>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="ec-related-extra">
          <Link href="/services/website-development">Website Development</Link>
          <Link href="/services/crm-development">CRM Development</Link>
          <Link href="/services/it-consulting">IT Consulting</Link>
          <Link href="/services/saas-development">SaaS Development</Link>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="ec-section ec-final-cta" id="contact" aria-labelledby="ec-final-title">
      <div className="ec-cta-bg" aria-hidden="true" />
      <div className="ec-container ec-final-cta-inner">
        <div className="ec-final-cta-copy">
          <Eyebrow light>Start a Conversation</Eyebrow>
          <h2 id="ec-final-title">Ready to Build Your Online Store?</h2>
          <p>
            Whether you need ecommerce website development, an online store, a multi-vendor marketplace, B2B or
            B2C ecommerce solutions, shopping cart development or payment gateway integration, RoyalTech
            Innovation can help you plan and develop a digital commerce platform tailored to your business.
          </p>
          <div className="ec-hero-actions">
            <PrimaryCta variant="light" service="Ecommerce Development" source="ecommerce-final-primary">Start Your E-commerce Project</PrimaryCta>
            <PrimaryCta variant="outline" service="Ecommerce Development Consultation" source="ecommerce-final-secondary">Discuss Your Requirements</PrimaryCta>
          </div>
          <div className="ec-final-contact">
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

export default function EcommerceDevelopmentPage() {
  return (
    <div className="ec-page">
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
