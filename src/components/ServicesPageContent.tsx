import { OpenFormButton } from "@/components/FormModal";
import GoogleReviews from "@/components/GoogleReviews";
import Image from "next/image";
import Link from "next/link";
import "@/styles/home.css";
import "@/styles/services.css";

const heroFeatures = [
  {
    title: "Modern Solutions",
    icon: "M5 16.5 10 11l3.2 3.2L19 8M15.5 8H19v3.5",
  },
  {
    title: "Scalable Growth",
    icon: "M4 19h16M7 16V10M12 16V7M17 16V4",
  },
  {
    title: "Dedicated Support",
    icon: "M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z",
  },
];

const services = [
  {
    title: "Website Development",
    lead: "SEO-ready business websites that convert",
    description:
      "RoyalTech Innovation builds fast, secure, and search-optimised websites for startups, SMEs, and enterprises. From marketing sites and landing pages to e-commerce stores, every build is engineered for Core Web Vitals, mobile usability, and long-term SEO growth.",
    image: "/home-services/web development.png",
    stack: "/svc-mock-projects.jpg",
    accent: "#9ec9c0",
    alt: "RoyalTech Innovation SEO-ready website development",
    points: [
      "SEO-ready business websites and high-converting landing pages",
      "E-commerce stores with secure checkout and product workflows",
      "Responsive, accessible builds with speed optimisation",
      "CMS setup, forms, analytics, and ongoing website care",
    ],
    link: "#",
    ctaText: "Explore Website Development",
  },
  {
    title: "Software Development",
    lead: "Custom software, ERP & CRM built around your operations",
    description:
      "We design and develop custom business software that replaces spreadsheets and disconnected tools. RoyalTech Innovation delivers ERP modules, CRM platforms, and workflow automation so your teams work faster with clearer data and scalable processes.",
    image: "/home-services/Software Development.jpg",
    stack: "/svc-mock-lms.jpg",
    accent: "#b7cfc8",
    alt: "RoyalTech Innovation custom software ERP and CRM systems",
    points: [
      "Custom business software tailored to your workflows",
      "ERP and CRM systems for sales, ops, and customer data",
      "Workflow automation, APIs, and third-party integrations",
      "Secure architecture, dashboards, and role-based access",
    ],
    link: "#",
    ctaText: "Explore Software Development",
  },
  {
    title: "Mobile App Development",
    lead: "Android & iOS apps that customers love to use",
    description:
      "Launch customer-facing and internal mobile products with RoyalTech Innovation. We build Android and iOS apps with clean UX, secure APIs, and reliable performance—so your brand stays useful in your customers’ pockets every day.",
    image: "/home-services/App Development.jpg",
    stack: "/svc-mock-web.jpg",
    accent: "#a8c4bb",
    alt: "RoyalTech Innovation Android and iOS mobile app development",
    points: [
      "Native and cross-platform Android & iOS development",
      "Customer apps, booking flows, and engagement features",
      "Secure API integrations with web and backend systems",
      "App Store / Play Store readiness and post-launch updates",
    ],
    link: "#",
    ctaText: "Explore App Development",
  },
  {
    title: "Digital Marketing & SEO",
    lead: "Organic ranking, paid reach, and measurable leads",
    description:
      "Grow qualified traffic and enquiries with RoyalTech Innovation’s SEO and digital marketing services. We connect technical SEO, content, social media, and paid ads so your brand ranks on Google, stays visible, and turns searches into customers.",
    image: "/digital-marketing-seo.png",
    stack: "/svc-mock-why.jpg",
    accent: "#c5d6b0",
    alt: "RoyalTech Innovation digital marketing and SEO services",
    points: [
      "Technical SEO, keyword research, and content optimisation",
      "Local SEO and Google Business Profile growth support",
      "Google Ads, Meta Ads, and PPC campaign management",
      "Social media, creatives, and lead-generation funnels",
    ],
    link: "#",
    ctaText: "Explore Digital Marketing",
  },
  {
    title: "UI/UX & Graphic Design",
    lead: "Product design and brand creatives that feel premium",
    description:
      "Our design team crafts interfaces and brand visuals that make products clearer and campaigns stronger. RoyalTech Innovation covers UI/UX for web and apps plus graphic design—logos, posters, and campaign creatives—aligned to your brand and conversion goals.",
    image: "/home-services/UI UX Design.jpg",
    stack: "/svc-mock-marketing.jpg",
    accent: "#d9e4c8",
    alt: "RoyalTech Innovation UI UX and graphic design work",
    points: [
      "Product and website UI/UX with conversion-focused flows",
      "Wireframes, prototypes, and design systems",
      "Brand identity, logos, and marketing creatives",
      "Posters, social creatives, and campaign visual assets",
    ],
    link: "#",
    ctaText: "Explore UI/UX Design",
  },
  {
    title: "IT Consulting",
    lead: "Technology advisory for digital transformation",
    description:
      "Need a clear roadmap before you build? RoyalTech Innovation provides IT consulting and technology advisory for digital transformation—helping you choose the right stack, plan scalable architecture, and invest with confidence across India, the UK, and the UAE.",
    // image: "/home-services/IT Consulting 1.png",
    image: "/it consultant.jpeg",
    stack: "/svc-mock-crm.jpg",
    accent: "#e2ebc8",
    alt: "RoyalTech Innovation IT consulting and digital transformation",
    points: [
      "Digital transformation roadmap and opportunity mapping",
      "Technology stack advisory and vendor-neutral guidance",
      "Scalable architecture and security planning",
      "Delivery planning, risk review, and growth priorities",
    ],
    link: "#",
    ctaText: "Explore IT Consulting",
  },
  {
    title: "CRM Software",
    lead: "SMART CUSTOMER RELATIONSHIP MANAGEMENT",
    description:
      "Looking to manage leads, customers, and sales more efficiently? RoyalTech Innovation provides custom CRM software development and customer relationship management solutions that help businesses streamline lead management, automate sales processes, track customer interactions, and build stronger customer relationships .",
    // image: "/home-services/IT Consulting 1.png",
    image: "/it consultant.jpeg",
    stack: "/svc-mock-crm.jpg",
    accent: "#e2ebc8",
    alt: "RoyalTech Innovation IT consulting and digital transformation",
    points: [
      "Smart lead management and customer data centralization",
      "Sales pipeline tracking and automated follow-ups",
      "Customer interaction management and communication tracking",
      "Real-time CRM analytics, reporting, and workflow automation",
    ],
    link: "/services/crm",
    ctaText: "Explore CRM Software",
  },
];

const whyPoints = [
  {
    title: "Skilled & Experienced Team",
    text: "Creative minds, technical experts.",
    icon: "M9 10a2.6 2.6 0 1 0 0-5.2A2.6 2.6 0 0 0 9 10Zm6 0a2.6 2.6 0 1 0 0-5.2A2.6 2.6 0 0 0 15 10ZM4.8 19c.7-2.4 2.5-3.6 4.2-3.6s3.5 1.2 4.2 3.6M14.8 15.4c1.1 0 2.3.4 3.2 1.3.7.7 1.1 1.5 1.3 2.3",
  },
  {
    title: "Custom Solutions",
    text: "Tailored to your goals specifically.",
    icon: "M12 3.5 4.5 7v5.2c0 4.1 3 7.1 7.5 8.8 4.5-1.7 7.5-4.7 7.5-8.8V7L12 3.5Z",
  },
  {
    title: "On-Time Delivery",
    text: "We value your time and meet deadlines.",
    icon: "M12 7v5.2l3.2 1.8M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z",
  },
  {
    title: "Long-Term Partnership",
    text: "Your growth is our biggest success.",
    icon: "M7 17 17 7M11 7h6v6M7 17a2.1 2.1 0 1 0 .01 0",
  },
];

const steps = [
  {
    num: "01",
    title: "Discover",
    text: "Understand your goals, users, and requirements.",
    image: "/svc-step-discover.jpg",
  },
  {
    num: "02",
    title: "Plan",
    text: "Create strategy, design, and project roadmap.",
    image: "/svc-step-plan.jpg",
  },
  {
    num: "03",
    title: "Build",
    text: "Develop and refine robust, scalable solutions.",
    image: "/svc-step-build.jpg",
  },
  {
    num: "04",
    title: "Test",
    text: "QA, performance checks, and polish before go-live.",
    image: "/svc-step-test.jpg",
  },
  {
    num: "05",
    title: "Launch",
    text: "Deliver, deploy, and support for long-term success.",
    image: "/svc-step-launch.jpg",
  },
];

export default function ServicesPageContent() {
  return (
    <div className="svc-page">
      <section className="svc-hero" aria-label="RoyalTech Innovation services">
        <div className="svc-hero-media" aria-hidden="true">
          <Image
            src="/svc-mock-hero.jpg"
            alt="services-hero"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="svc-hero-shade" aria-hidden="true" />
        <div className="svc-hero-inner">
          <h1>
            IT Services and Digital Solutions by{" "}
            <em>RoyalTech Innovation</em>
          </h1>
          <p className="svc-hero-lead">
            Powerful websites, intuitive apps, design, and marketing — built for
            the way your team works.
          </p>
          <div className="svc-hero-actions">
            <OpenFormButton
              className="svc-btn svc-btn-lime"
              title="Book a Free Consultation"
              source="services-hero"
            >
              Book a Free Consultation
            </OpenFormButton>
            <a className="svc-btn svc-btn-ghost" href="#services-grid">
              Explore Our Services
            </a>
          </div>
          <div className="svc-hero-features">
            {heroFeatures.map((feature) => (
              <div key={feature.title} className="svc-hero-feature">
                <span aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                    <path
                      d={feature.icon}
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <strong>{feature.title}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-best" id="services-grid" aria-labelledby="services-best-heading">
        <div className="svc-shell">
          <div className="svc-best-head">
            <p className="svc-eyebrow">Services We Offer</p>
            <h2 id="services-best-heading">What We Do Best</h2>
            <p>
              RoyalTech Innovation delivers end-to-end IT and digital
              services—website development, custom software, mobile apps,
              SEO &amp; digital marketing, UI/UX &amp; graphic design, and IT
              consulting—for startups, SMEs, and enterprises.
            </p>
          </div>

          <div className="svc-offer-list">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`svc-offer${index % 2 === 1 ? " is-flip" : ""}`}
                aria-labelledby={`svc-offer-${index}`}
              >
                <div className="svc-offer-visual">
                  {/* <div
                    className="svc-offer-stack svc-offer-stack-back"
                    style={{ background: service.accent }}
                    aria-hidden="true"
                  >
                    <Image
                      src={service.stack}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 90vw, 40vw"
                    />
                  </div> */}
                  <div className="svc-offer-stack svc-offer-stack-front">
                    {/* <div className="svc-offer-chrome" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div> */}
                    <div className="svc-offer-shot">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 900px) 90vw, 40vw"
                      />
                    </div>
                  </div>
                </div>

                <div className="svc-offer-copy">
                  <p className="svc-offer-lead">{service.lead}</p>
                  <h2 id={`svc-offer-${index}`}>{service.title}</h2>
                  <p>{service.description}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {service.link ? (
                    <Link
                      href={service.link}
                      className="svc-btn svc-btn-lime svc-offer-cta"
                    >
                      {service.ctaText }
                      <span aria-hidden="true">→</span>
                    </Link>
                  ) : (
                    <OpenFormButton
                      className="svc-btn svc-btn-lime svc-offer-cta"
                      title={`Talk to RoyalTech · ${service.title}`}
                      source="services-card"
                      service={service.title}
                    >
                      {service.ctaText || "Talk to RoyalTech"}{" "}
                      <span aria-hidden="true">→</span>
                    </OpenFormButton>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-why" aria-labelledby="services-why-heading">
        <div className="svc-shell svc-why-grid">
          <div className="svc-why-copy">
            <p className="svc-eyebrow">Our Difference</p>
            <h2 id="services-why-heading">Why Choose Us</h2>
            <p>
              <strong>Your success is our priority.</strong> We combine
              strategy, design, and technology to deliver solutions that create
              real business value—and stay useful as you grow.
            </p>
            <div className="svc-why-points">
              {whyPoints.map((point) => (
                <article key={point.title} className="svc-why-point">
                  <span aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" >
                      <path
                        d={point.icon}
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <strong>{point.title}</strong>
                    <p>{point.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="svc-why-actions">
              <OpenFormButton
                className="svc-btn svc-btn-forest"
                title="Let's Build Something Great"
                source="services-why"
              >
                Let&apos;s Build Something Great
              </OpenFormButton>
            </div>
          </div>

          <div className="svc-why-visual">
            <Image
              // src="https://res.cloudinary.com/dfzokfvbm/image/upload/v1794312267/remove_the_backgroud_b3e01168_o3m5bi.png"
              src="/CP-67.png"
              alt="RoyalTech Innovation Why Choose Us visual"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              priority={false}
            />
          </div>
        </div>
      </section>

      <section className="svc-approach" aria-labelledby="services-approach-heading">
        <div className="svc-shell">
          <div className="svc-approach-head">
            <p className="svc-eyebrow">Our Process</p>
            <h2 id="services-approach-heading">
              Our Approach – From Idea to Impact
            </h2>
            <p>
              A clear five-step process that takes your idea from discovery to
              launch with confidence.
            </p>
          </div>
          <div className="svc-steps">
            {steps.map((step) => (
              <article key={step.num} className="svc-step">
                <div className="svc-step-media">
                  <Image
                    src={step.image}
                    alt={`${step.title} stage of RoyalTech Innovation's project delivery process`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 20vw"
                  />
                </div>
                <span className="svc-step-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="svc-approach-actions">
            <Link className="svc-btn svc-btn-forest" href="/process">
              View Our Process
            </Link>
          </div>
        </div>
      </section>

      <GoogleReviews />

      <section className="svc-cta" aria-labelledby="services-cta-heading">
        <div className="svc-cta-card">
          <div className="svc-cta-bg" aria-hidden="true">
            <Image
              src="/svc-cta-desk.jpg"
              alt=""
              fill
              priority={false}
              sizes="100vw"
            />
          </div>
          <div className="svc-cta-copy">
            <h2 id="services-cta-heading">Ready to Build Your Next Big Idea?</h2>
            <p>
              Get in touch with us today and let&apos;s create something amazing
              together.
            </p>
            <div className="svc-cta-actions">
              <OpenFormButton
                className="svc-btn svc-btn-lime"
                title="Get a Free Consultation"
                source="services-cta"
              >
                Get a Free Consultation
              </OpenFormButton>
              <Link className="svc-btn svc-btn-ghost" href="/contact">
                Contact Us
              </Link>
              <Link className="svc-btn svc-btn-ghost" href="/portfolio">
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
