import { OpenFormButton } from "@/components/FormModal";
import Image from "next/image";
import Link from "next/link";
import "@/styles/portfolio.css";

const stats = [
  {
    value: "100+",
    label: "Projects Delivered",
    icon: "M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M5 9h14v10.5A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5V9Z",
  },
  {
    value: "50+",
    label: "Happy Clients",
    icon: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.5 19c.8-2.2 2.5-3.4 4.5-3.4s3.7 1.2 4.5 3.4M14.5 15.6c1.2 0 2.5.5 3.5 1.4.8.7 1.3 1.5 1.5 2",
  },
  {
    value: "1.5+",
    label: "Years of Experience",
    icon: "M12 3.5 13.8 9H19l-4.2 3.2 1.6 5.3L12 14.8 7.6 17.5 9.2 12.2 5 9h5.2L12 3.5Z",
  },
];

const works = [
  {
    title: "Custom Web Development Showcase",
    text: "SEO-ready websites built with React, Next.js, Node.js, and PHP—fast, secure, and made to convert.",
    tags: ["React", "Next.js", "Node.js", "PHP"],
    image: "/pfo-web-dev.jpg",
    alt: "Custom web development project by RoyalTech Innovation",
    tone: "mint",
    icon: "M8 8 4.5 12 8 16M16 8l3.5 4L16 16",
    href: "https://www.behance.net/gallery/258029873/Web-Development",
    external: true,
  },
  {
    title: "Mobile App UI/UX Design Case Studies",
    text: "iOS and Android UI/UX that feels simple, looks premium, and keeps users coming back.",
    tags: ["iOS", "Android", "UI/UX"],
    image: "/pfo-app-design.jpg",
    alt: "Mobile app UI UX design portfolio by RoyalTech Innovation",
    tone: "cream",
    icon: "M8 3.5h8A1.5 1.5 0 0 1 17.5 5v14A1.5 1.5 0 0 1 16 20.5H8A1.5 1.5 0 0 1 6.5 19V5A1.5 1.5 0 0 1 8 3.5Zm4 14.2h.01",
    href: "/contact",
    external: false,
  },
  {
    title:"Logo Design & Brand Identity Showcase",
    text: "Clear logos and brand identity systems that stay sharp on web, print, and social.",
    tags: ["Branding", "Vector", "Identity"],
    image: "/pfo-logo-design.jpg",
    alt: "Logo design and brand identity project by RoyalTech Innovation",
    tone: "sky",
    icon: "M7 18c3-5 5-8 10-12M9.5 8.5c1.2-1.2 2.8-1.8 4.2-1.2 1.6.7 2.3 2.4 1.6 4-.8 1.8-3.2 3.6-5.3 4.7",
    href: "https://www.behance.net/gallery/258031185/branding",
    external: true,
  },
  {
    title: "Custom CRM & Software Development Portfolio",
    text: "Custom CRM systems for leads, pipelines, and customer data—built to fit how your sales team works.",
    tags: ["CRM", "Automation", "Dashboards"],
    image: "/svc-mock-crm.jpg",
   alt: "Custom CRM software dashboard developed by RoyalTech Innovation",
    tone: "sage",
    icon: "M8 7h8v3H8V7Zm-2 5h12v7H6v-7Zm4 2.5h4",
    href: "https://www.behance.net/gallery/258128517/CRM-Developement",
    external: true,
  },
];

export default function PortfolioPageContent() {
  return (
    <div className="pfo">
      <section className="pfo-hero" aria-label="Our work">
        <div className="pfo-hero-bg" aria-hidden="true">
          <Image
            // src="/pfo-hero-bg.jpg"
            src="https://res.cloudinary.com/ugqc5gb8/image/upload/v1794645108/potfoliio_top_image.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="pfo-shell pfo-hero-grid">
          <div className="pfo-hero-copy">
            <p className="pfo-eyebrow">Our Work</p>
            <h1>
              Transforming Ideas{" "}
              <span className="pfo-accent">into Reality</span>
            </h1>
            <p className="pfo-hero-lead">
             Explore our portfolio of successful web development, mobile app, CRM, and branding projects. RoyalTech Innovation delivers scalable, high-performance IT solutions that drive digital growth.
            </p>

            <div className="pfo-stats" role="list">
              {stats.map((stat) => (
                <div key={stat.label} className="pfo-stat" role="listitem">
                  <span className="pfo-stat-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                      <path
                        d={stat.icon}
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pfo-work" aria-labelledby="pfo-work-heading">
        <div className="pfo-shell">
          <div className="pfo-work-head">
            <p className="pfo-eyebrow">Our Services</p>
           <h2 id="pfo-work-heading">
  Featured Projects & Digital Solutions Showcase
</h2>
            <p className="pfo-work-lead">
  Explore RoyalTech Innovation&apos;s web development projects,
  mobile app UI/UX designs, brand identity solutions, and
  custom CRM software developed to help businesses innovate,
  grow, and scale.
</p>
          </div>

          <div className="pfo-work-list">
            {works.map((work, index) => (
              <article
                key={work.title}
                className={`pfo-card tone-${work.tone}${index % 2 === 1 ? " is-flip" : ""}`}
              >
                <div className="pfo-card-media">
                  <Image
                    src={work.image}
                    alt={work.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 48vw"
                  />
                </div>

                <div className="pfo-card-copy">
                  <span className="pfo-card-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                      <path
                        d={work.icon}
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h3>{work.title}</h3>
                  <p>{work.text}</p>
                  <div className="pfo-tags">
                    {work.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {work.external ? (
                    <a
                      className="pfo-card-cta"
                      href={work.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${work.title} project on Behance`}
                    >
                      <span aria-hidden="true">→</span>
                    </a>
                  ) : (
                    <Link
                      className="pfo-card-cta"
                      href={work.href}
                      aria-label={`Learn more about ${work.title}`}
                    >
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pfo-book" aria-labelledby="pfo-book-heading">
        <div className="pfo-book-bg" aria-hidden="true">
          <Image
            src="https://res.cloudinary.com/ugqc5gb8/image/upload/v1794651259/1234.png"
            alt=""
            fill
            sizes="100vw"
          />
        </div>
        <div className="pfo-shell pfo-book-grid">
          <div className="pfo-book-copy">
            <p className="pfo-eyebrow pfo-eyebrow-light">Let&apos;s Work Together</p>
            <h2 id="pfo-book-heading">
              Ready to Build Your{" "}
              <span className="pfo-accent">Next Project?</span>
              {" "}Book a Free Tech Consultation
            </h2>
            <p>
              Inspired by our portfolio? Book a free consultation with
              RoyalTech Innovation to discuss your project requirements,
              development strategy, estimated timeline, and the right
              technology solutions for your business.
            </p>
            <div className="pfo-book-actions">
              <OpenFormButton
                className="pfo-call-btn"
                title="Book a Consultant"
                source="portfolio-book"
              >
                Book a Consultant <span aria-hidden="true">→</span>
              </OpenFormButton>
              <a className="pfo-call-btn pfo-call-btn-ghost" href="tel:+918679016505">
                Call Now <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
