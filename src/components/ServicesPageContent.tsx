import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const services = [
  {
    title: "UI/UX Design",
    image: "/service-design-olive.jpg",
    text: "Great products feel simple because the experience was designed with care. We map how your users think, then craft interfaces and brand systems that guide them clearly—from first visit to completed action.",
    detail:
      "Whether you need a new product UI, a website redesign, or a consistent design system, we focus on clarity, accessibility, and a visual language that feels like your business—not a generic template.",
    points: [
      "User research, journeys, and information architecture",
      "Wireframes, interactive prototypes, and UI kits",
      "Brand-aligned visual systems and design handoff",
    ],
  },
  {
    title: "Web Development",
    image: "/service-dev-olive.jpg",
    text: "Your website should work as hard as your team does. We build fast, mobile-ready business sites and e-commerce experiences that load quickly, communicate clearly, and support the goals behind your brand.",
    detail:
      "From marketing sites and landing pages to custom web applications, we prioritise performance, SEO fundamentals, and maintainable code so your digital presence stays reliable as you grow.",
    points: [
      "Corporate, product, and campaign websites",
      "E-commerce and conversion-focused builds",
      "Responsive design, speed, and technical SEO basics",
    ],
  },
  {
    title: "App Development",
    image: "/service-app.jpg",
    text: "Mobile is often where customers and teams spend the most time. We design and develop Android, iOS, and cross-platform apps that feel smooth, stay stable, and support real usage after launch.",
    detail:
      "We help you move from concept to store-ready product—defining features, building for performance, testing across devices, and planning updates so the app continues to improve with feedback.",
    points: [
      "Native and cross-platform mobile apps",
      "Product discovery through MVP and full release",
      "Testing, launch support, and iterative updates",
    ],
  },
  {
    title: "Software Development",
    image: "/service-software.jpg",
    text: "Custom software should reduce work, not create more of it. We build internal tools, portals, and business systems around your processes—so teams move faster with fewer manual steps and fewer disconnected spreadsheets.",
    detail:
      "From workflow automation to management platforms and integrations, we focus on usable interfaces, clean architecture, and documentation your team can operate with confidence.",
    points: [
      "Custom business tools and admin portals",
      "Automation, APIs, and system integrations",
      "Scalable architecture and handover documentation",
    ],
  },
  {
    title: "Digital Marketing",
    image: "/service-marketing.jpg",
    text: "Visibility only matters if it brings the right audience. We plan and run SEO, social, and paid campaigns with clear messaging—so you attract qualified interest and can track what is working.",
    detail:
      "We align creative, channels, and measurement around your commercial goals: more leads, stronger brand recall, or better conversion—reporting in language your team can act on.",
    points: [
      "SEO, content, and on-page improvements",
      "Social media and paid acquisition campaigns",
      "Lead tracking, analytics, and performance reviews",
    ],
  },
  {
    title: "IT Consulting",
    image: "/services-collab.jpg",
    text: "The right technology decision can save months of rework. We help you evaluate systems, plan roadmaps, and improve processes—so investments match your stage, budget, and operational reality.",
    detail:
      "Whether you need a digital strategy, tool selection support, or guidance on automation and infrastructure priorities, we provide practical recommendations and implementation paths you can trust.",
    points: [
      "Technology roadmaps and priority planning",
      "System selection and vendor evaluation support",
      "Process improvement and automation guidance",
    ],
  },
];

const process = [
  {
    title: "Clarify the outcome",
    text: "We define what success looks like—leads, efficiency, launch date, or user adoption—before recommending a stack or scope.",
  },
  {
    title: "Shape the right mix",
    text: "Design, development, marketing, and consulting can stand alone or work together. We recommend only what moves the goal forward.",
  },
  {
    title: "Deliver with visibility",
    text: "You get clear milestones, reviews, and communication so progress stays visible and decisions stay easy.",
  },
  {
    title: "Support after launch",
    text: "Go-live is not the finish line. We help with training, iteration, and ongoing improvements as your needs evolve.",
  },
];

export default function ServicesPageContent() {
  return (
    <div className="ap">
      <PageHero
        kicker="Services"
        title="End-to-end digital solutions for growing businesses"
        lead="From UI/UX design and web development to mobile apps, custom software, digital marketing, and IT consulting—RoyalTech Innovation brings the capabilities you need under one partner, with delivery shaped around your goals, budget, and the way your team works."
        image="/hero-services.jpg"
        imageAlt="Digital workspace representing RoyalTech services"
        primaryHref="/contact"
        primaryLabel="Request a Quote"
        secondaryHref="/about"
        secondaryLabel="About us"
      />

      <section className="ap-section">
        <div className="ap-wrap ap-split">
          <div className="ap-copy">
            <p className="ap-kicker">What we deliver</p>
            <h2>Practical technology, clear commercial outcomes</h2>
            <p>
              Many businesses end up with disconnected vendors, unclear scope,
              and tools that look good in demos but struggle in daily use. We
              take a different approach: start with the business problem, then
              design and deliver the technology that solves it.
            </p>
            <p>
              You can engage us for one service—such as a website redesign or an
              internal tool—or combine design, build, marketing, and consulting
              in a single engagement. Either way, you work with one accountable
              team focused on results you can measure.
            </p>
            <p>
              Our clients include startups validating an idea, SMEs modernising
              operations, and growing organisations that need reliable digital
              systems across India, the UK, and the UAE.
            </p>
          </div>
          <div className="ap-media">
            <Image
              src="/services-hero.jpg"
              alt="RoyalTech Innovation services"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className="ap-image"
              priority
            />
          </div>
        </div>
      </section>

      <section className="ap-section ap-section-alt">
        <div className="ap-wrap">
          <div className="ap-section-head">
            <p className="ap-kicker">How we engage</p>
            <h2>A simple path from idea to impact</h2>
            <p className="ap-section-intro">
              Whether you need a focused project or a broader digital programme,
              our delivery stays transparent and business-led.
            </p>
          </div>
          <div className="ap-goals ap-approach">
            {process.map((item, index) => (
              <article key={item.title} className="ap-goal">
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-section">
        <div className="ap-wrap">
          <div className="ap-section-head">
            <p className="ap-kicker">Our services</p>
            <h2>Six capabilities. One accountable partner.</h2>
            <p className="ap-section-intro">
              Explore each service in detail—or ask us to recommend the right
              mix for your current stage and goals.
            </p>
          </div>

          <div className="ap-services">
            {services.map((service, index) => (
              <article key={service.title} className="ap-service">
                <div className="ap-service-media">
                  <Image
                    src={service.image}
                    alt=""
                    width={720}
                    height={480}
                    className="ap-service-image"
                  />
                </div>
                <div className="ap-service-body">
                  <span className="ap-service-num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <p>{service.detail}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <Link className="ap-service-link" href="/contact">
                    Discuss this service <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-cta">
        <div className="ap-wrap ap-cta-inner">
          <h2>Not sure which service you need first?</h2>
          <p>
            Share your goals, timeline, and constraints. We will recommend a
            practical starting point—whether that is design, a website, an app,
            custom software, marketing support, or consulting—and outline what
            delivery could look like.
          </p>
          <div className="ap-cta-actions">
            <Link className="btn btn-soft" href="/contact">
              Request a Quote
            </Link>
            <Link className="ap-link-btn" href="/about">
              Learn about RoyalTech
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
