import { OpenFormButton } from "@/components/FormModal";
import Image from "next/image";
import Link from "next/link";
import "@/styles/process.css";

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We start by understanding your goals, audience, and business needs. Through detailed discussions and research, we gather insights, analyze requirements, and define the right strategy for your project.",
    checks: ["Business Analysis", "Audience Research", "Requirement Gathering"],
    image: "/op-step-discover.jpg",
    alt: "RoyalTech Innovation discovery workshop and project consultation",
    icon: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm8 2-3.6-3.6",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "We create a clear roadmap and craft intuitive designs that bring your ideas to life. Our team focuses on user experience, functionality, and brand consistency to ensure the best possible outcome.",
    checks: [
      "Project Planning",
      "Wireframes & UI/UX Design",
      "Technology Stack Selection",
    ],
    image: "/op-step-design.jpg",
    alt: "RoyalTech Innovation planning and UI UX design on desktop",
    icon: "M5 19l9.5-9.5M12.5 7.5 16.5 11.5M14.2 5.8l2-2a1.5 1.5 0 0 1 2.1 0l1.9 1.9a1.5 1.5 0 0 1 0 2.1l-2 2",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "We build your solution using modern technologies, following clean code practices and industry standards. Rigorous testing ensures a smooth, secure, and high-performing product.",
    checks: [
      "Frontend & Backend Development",
      "Quality Assurance & Testing",
      "Performance Optimization",
    ],
    image: "/op-step-develop.jpg",
    alt: "RoyalTech Innovation development and testing in code editor",
    icon: "M8 8 4.5 12 8 16M16 8l3.5 4L16 16",
  },
  {
    number: "04",
    title: "Deployment & Support",
    description:
      "We launch your product and provide ongoing support to keep it running smoothly. We also offer updates, maintenance, and improvements as your business grows.",
    checks: [
      "Live Deployment",
      "Training & Handover",
      "Ongoing Support & Maintenance",
    ],
    image: "/op-step-deploy.jpg",
    alt: "RoyalTech Innovation product launch dashboard and support",
    icon: "M5 15.5c2.2-1.2 4.2-.4 6.5-1.8 2.5-1.5 4-4 7-4.4M15.2 6.8 20 11l-3.8 3.5",
  },
];

const benefits = [
  {
    title: "Tailored To Your Business",
    text: "Software shaped around your workflows—not generic templates.",
  },
  {
    title: "Scalable & Future-Ready",
    text: "Start lean today, grow users and features without rebuilding.",
  },
  {
    title: "Smarter & More Efficient",
    text: "Automate handoffs and reports so your team focuses on real work.",
  },
  {
    title: "Seamless Integration",
    text: "Connect the tools you already use into one clear flow.",
  },
  {
    title: "Clear From Day One",
    text: "Scope, timeline, and next steps stay visible from discovery to launch.",
  },
  {
    title: "Support After Launch",
    text: "Fixes, improvements, and guidance after go-live—not a handoff and goodbye.",
  },
];

const techStack = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Sass",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "FastAPI",
      "PHP",
      "Laravel",
      "Java",
      "Spring Boot",
      "REST APIs",
      "GraphQL",
      ".NET",
    ],
  },
  {
    title: "Mobile",
    items: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "iOS",
      "Android",
      "Expo",
      "Firebase",
    ],
  },
  {
    title: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "SQLite",
      "Firebase Firestore",
      "Prisma",
      "Supabase",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Vercel",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "Nginx",
      "Linux",
    ],
  },
  {
    title: "Design & Marketing",
    items: [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "SEO Tools",
      "Google Analytics",
      "Google Ads",
      "Meta Ads",
      "HubSpot",
      "Mailchimp",
    ],
  },
];

const industries = [
  {
    title: "Healthcare",
    image: "/op-ind-healthcare.jpg",
    alt: "Healthcare software solutions",
  },
  {
    title: "Finance",
    image: "/op-ind-finance.jpg",
    alt: "Finance and banking software solutions",
  },
  {
    title: "E-Commerce",
    image: "/op-ind-ecommerce.jpg",
    alt: "E-commerce digital solutions",
  },
  {
    title: "Education",
    image: "/op-ind-education.jpg",
    alt: "Education technology solutions",
  },
  {
    title: "Manufacturing",
    image: "/op-ind-manufacturing.jpg",
    alt: "Manufacturing software solutions",
  },
  {
    title: "Logistics",
    image: "/op-ind-logistics.jpg",
    alt: "Logistics and supply chain solutions",
  },
];

const stats = [
  { label: "Projects", value: "24", change: "+12%" },
  { label: "Clients", value: "18", change: "+8%" },
  { label: "Growth", value: "92%", change: "+20%" },
];

const bars = [35, 48, 40, 65, 55, 78, 92, 72, 100];
const activity = ["Project completed", "New client added", "Report ready"];

export default function ProcessPageContent() {
  return (
    <div className="opx">
      <section className="opx-hero" aria-label="Digital solutions">
        <div className="opx-hero-bg" aria-hidden="true">
          <Image
            src="/op-hero-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="opx-shell opx-hero-grid">
          <div className="opx-hero-copy">
            <p className="opx-badge">Digital Innovation &amp; Technology</p>
            <h1>Tailored Digital Solutions for Your Business Needs</h1>
            <p>
              Transform your ideas into powerful digital experiences. RoyalTech
              Innovation builds scalable, custom software that helps your
              business grow.
            </p>
            <div className="opx-hero-actions">
              <OpenFormButton
                className="opx-btn opx-btn-lime"
                title="Book a Free Consultation"
                source="process-hero"
              >
                Book a Free Consultation <span aria-hidden="true">→</span>
              </OpenFormButton>
              <a className="opx-btn opx-btn-ghost" href="#process">
                Explore Process
              </a>
            </div>
          </div>

          <div className="opx-dash-wrap">
            <div className="opx-dash" aria-hidden="true">
              <div className="opx-dash-top">
                <div>
                  <Image src="/logo-mark.jpg" alt="" width={36} height={36} />
                  <span>
                    <strong>RoyalTech</strong>
                    <small>Business Dashboard</small>
                  </span>
                </div>
                <em>Live</em>
              </div>
              <h2>Welcome back!</h2>
              <p>Here&apos;s your business overview.</p>
              <div className="opx-dash-stats">
                {stats.map((item) => (
                  <div key={item.label}>
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                    <span>↑ {item.change}</span>
                  </div>
                ))}
              </div>
              <div className="opx-dash-split">
                <div>
                  <strong>Performance Overview</strong>
                  <div className="opx-bars">
                    {bars.map((height, index) => (
                      <i key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                  <div className="opx-months">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>May</span>
                    <span>Jul</span>
                  </div>
                </div>
                <div>
                  <strong>Recent Activity</strong>
                  <ul>
                    {activity.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="opx-dash-banner">
                <div>
                  <strong>Innovation meets technology</strong>
                  <small>Smart solutions for growing businesses</small>
                </div>
                <span>Explore →</span>
              </div>
            </div>
            <aside className="opx-float">
              <small>Trusted by businesses</small>
              <strong>Smart Digital Future</strong>
            </aside>
          </div>
        </div>
      </section>

      <section className="op-flow" id="process" aria-labelledby="op-flow-heading">
        <div className="op-flow-shell">
          <div className="op-flow-head">
            <p className="op-flow-badge">Process</p>
            <h2 id="op-flow-heading">A Simple &amp; Effective Process</h2>
            <p>
              From first conversation to launch and support—RoyalTech Innovation
              follows a clear path that keeps projects on track.
            </p>
          </div>

          <div className="op-timeline">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`op-flow-step${index % 2 === 1 ? " is-flip" : ""}`}
              >
                <div className="op-flow-media">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 900px) 90vw, 40vw"
                  />
                </div>

                <span className="op-flow-marker" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                    <path
                      d={step.icon}
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <div className="op-flow-copy">
                  <span className="op-flow-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                      <path
                        d={step.icon}
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h3>
                    <span>{step.number}</span>
                    {step.title}
                  </h3>
                  <p>{step.description}</p>
                  <ul className="op-flow-checks">
                    {step.checks.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-why" aria-labelledby="opx-why-heading">
        <div className="opx-shell">
          <div className="opx-section-head">
            <p className="opx-badge">Why Choose Us</p>
            <h2 id="opx-why-heading">Why Choose Custom Software?</h2>
            <p>
              Off-the-shelf tools ask your team to adapt. Custom software from
              RoyalTech Innovation follows how you sell, serve, and grow.
            </p>
          </div>
          <div className="opx-why-grid">
            {benefits.map((item, index) => (
              <article key={item.title} className="opx-why-card">
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-ind" aria-labelledby="opx-ind-heading">
        <div className="opx-shell">
          <div className="opx-section-head">
            <p className="opx-badge">Our Expertise</p>
            <h2 id="opx-ind-heading">Custom software for every industry</h2>
            <p>
              Tailored digital solutions for the unique needs of different
              industries.
            </p>
          </div>
          <div className="opx-ind-panel">
            <div className="opx-ind-list">
              {industries.slice(0, 3).map((item) => (
                <Link key={item.title} href="/contact" className="opx-ind-card">
                  <span className="opx-ind-thumb">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={56}
                      height={56}
                    />
                  </span>
                  <strong>{item.title}</strong>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>

            <div className="opx-ind-media">
              <Image
                src="/op-industries.jpg"
                alt="RoyalTech Innovation custom software for healthcare, finance, ecommerce, education, manufacturing, and logistics"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>

            <div className="opx-ind-list">
              {industries.slice(3).map((item) => (
                <Link key={item.title} href="/contact" className="opx-ind-card">
                  <span className="opx-ind-thumb">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={56}
                      height={56}
                    />
                  </span>
                  <strong>{item.title}</strong>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="opx-tech" aria-labelledby="opx-tech-heading">
        <div className="opx-tech-bg" aria-hidden="true">
          <Image src="/op-tech-bg.jpg" alt="" fill sizes="100vw" />
        </div>
        <div className="opx-shell opx-tech-inner">
          <div className="opx-section-head opx-tech-head">
            <p className="opx-badge opx-badge-light">Our Tools</p>
            <h2 id="opx-tech-heading">Technology Stack We Use</h2>
            <p>
              From frontend to cloud—RoyalTech Innovation builds with modern,
              proven technologies across every layer of your product.
            </p>
          </div>

          <div className="opx-tech-grid">
            {techStack.map((group) => (
              <article key={group.title} className="opx-tech-card">
                <h3>{group.title}</h3>
                <div className="opx-tech-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-cta" aria-labelledby="opx-cta-heading">
        <div className="opx-shell opx-cta-inner">
          <div>
            <p className="opx-badge opx-badge-light">Let&apos;s Build</p>
            <h2 id="opx-cta-heading">
              Ready to start your{" "}
              <span className="opx-accent">next project?</span>
            </h2>
            <p>
              Book a free consultation with RoyalTech Innovation—we&apos;ll map
              scope, timeline, and the fastest path to launch.
            </p>
          </div>
          <div className="opx-cta-actions">
            <OpenFormButton
              className="opx-btn opx-btn-lime"
              title="Book a Consultant"
              source="process-cta"
            >
              Book a Consultant <span aria-hidden="true">→</span>
            </OpenFormButton>
            <a className="opx-btn opx-btn-ghost-light" href="tel:+918679016505">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
