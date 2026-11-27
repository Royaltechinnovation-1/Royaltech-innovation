import { OpenFormButton } from "@/components/FormModal";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import { FaAws, FaCss3Alt, FaJava } from "react-icons/fa";
import {
  SiAndroid,
  SiAngular,
  SiBootstrap,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiFramer,
  SiGit,
  SiGithubactions,
  SiGo,
  SiGoogleads,
  SiGoogleanalytics,
  SiGooglecloud,
  SiGraphql,
  SiHtml5,
  SiHubspot,
  SiIos,
  SiJavascript,
  SiJenkins,
  SiKotlin,
  SiKubernetes,
  SiLaravel,
  SiLinux,
  SiMailchimp,
  SiMeta,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiSass,
  SiShopify,
  SiSpringboot,
  SiSqlite,
  SiSupabase,
  SiSvelte,
  SiSwift,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVuedotjs,
  SiWordpress,
} from "react-icons/si";
import { TbBrandAdobeXd } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import "@/styles/process.css";

const steps = [
  {
    number: "01",
    title: "Discovery & Requirements Analysis",
    description:
      "Our project discovery starts with business analysis to understand your goals and audience. Through focused discussions, we complete requirement gathering and define the right strategy for your project.",
    checks: ["Business Analysis", "Audience Research", "Requirement Gathering"],
    image: "/op-step-discover.jpg",
    alt: "RoyalTech Innovation discovery workshop and project consultation",
    icon: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm8 2-3.6-3.6",
  },
  {
    number: "02",
    title: "Project Planning & UI/UX Design",
    description:
      "Our agile planning creates a clear roadmap, while wireframing and UI/UX prototyping shape intuitive user experiences. We also guide technology selection to fit your goals and project requirements.",
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
    title: "Full-Stack Development & Quality Assurance",
    description:
      "Our team delivers frontend development and backend development through full-stack coding with modern technologies and clean code practices. QA testing helps ensure your product is smooth, secure, and high-performing.",
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
    title: "	Software Deployment & Ongoing Support",
    description:
      "We manage software deployment and product launch, then provide maintenance and technical support to keep your product running smoothly as your business grows.",
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

type Tech = { name: string; Icon: IconType; color: string };

/* Real logos in their brand colours. Row one: front end, mobile, design and marketing. */
const techRowOne: Tech[] = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "Vue.js", Icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Angular", Icon: SiAngular, color: "#DD0031" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Sass", Icon: SiSass, color: "#CC6699" },
  { name: "Redux", Icon: SiRedux, color: "#764ABC" },
  { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
  { name: "Svelte", Icon: SiSvelte, color: "#FF3E00" },
  { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },
  { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
  { name: "Swift", Icon: SiSwift, color: "#F05138" },
  { name: "Kotlin", Icon: SiKotlin, color: "#7F52FF" },
  { name: "Android", Icon: SiAndroid, color: "#3DDC84" },
  { name: "iOS", Icon: SiIos, color: "#000000" },
  { name: "Expo", Icon: SiExpo, color: "#000020" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Adobe XD", Icon: TbBrandAdobeXd, color: "#FF61F6" },
  { name: "Photoshop", Icon: DiPhotoshop, color: "#31A8FF" },
  { name: "Illustrator", Icon: DiIllustrator, color: "#FF9A00" },
  { name: "Shopify", Icon: SiShopify, color: "#7AB55C" },
  { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
  { name: "Google Analytics", Icon: SiGoogleanalytics, color: "#E37400" },
  { name: "Google Ads", Icon: SiGoogleads, color: "#4285F4" },
  { name: "Meta Ads", Icon: SiMeta, color: "#0467DF" },
  { name: "HubSpot", Icon: SiHubspot, color: "#FF7A59" },
  { name: "Mailchimp", Icon: SiMailchimp, color: "#241C15" },
];

/* Row two: back end, databases, cloud and DevOps. */
const techRowTwo: Tech[] = [
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", Icon: SiExpress, color: "#000000" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Django", Icon: SiDjango, color: "#092E20" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "Java", Icon: FaJava, color: "#E76F00" },
  { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
  { name: ".NET", Icon: SiDotnet, color: "#512BD4" },
  { name: "Go", Icon: SiGo, color: "#00ADD8" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Redis", Icon: SiRedis, color: "#FF4438" },
  { name: "SQLite", Icon: SiSqlite, color: "#003B57" },
  { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
  { name: "Supabase", Icon: SiSupabase, color: "#3FCF8E" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4" },
  { name: "Azure", Icon: VscAzure, color: "#0078D4" },
  { name: "Vercel", Icon: SiVercel, color: "#000000" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
  { name: "Nginx", Icon: SiNginx, color: "#009639" },
  { name: "Linux", Icon: SiLinux, color: "#1F2937" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Jenkins", Icon: SiJenkins, color: "#D24939" },
  { name: "Terraform", Icon: SiTerraform, color: "#844FBA" },
];

/* One row of logos. The list is repeated once so the loop has no gap; the copy is hidden from assistive tech. */
function TechRow({ items, reverse = false }: { items: Tech[]; reverse?: boolean }) {
  // About 55px per second, whatever the row length.
  const style = { "--opx-marquee-time": `${Math.round(items.length * 2.6)}s` } as CSSProperties;
  return (
    <div className={`opx-marquee${reverse ? " opx-marquee-rtl" : ""}`} style={style}>
      <ul className="opx-marquee-track">
        {[...items, ...items].map(({ name, Icon, color }, index) => (
          <li
            key={`${name}-${index}`}
            className="opx-tech-tile"
            aria-hidden={index >= items.length ? true : undefined}
          >
            <Icon style={{ color }} aria-hidden="true" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const industries = [
  {
    title: "Healthcare",
    image: "/op-ind-healthcare.jpg",
    alt: "Healthcare Software Solutions",
  },
  {
    title: "Finance",
    image: "/op-ind-finance.jpg",
    alt: "FinTech Software Development",
  },
  {
    title: "E-Commerce",
    image: "/op-ind-ecommerce.jpg",
    alt: "E-Commerce Development Solutions",
  },
  {
    title: "Education",
    image: "/op-ind-education.jpg",
    alt: "Education Management Software",
  },
  {
    title: "Manufacturing",
    image: "/op-ind-manufacturing.jpg",
    alt: "Manufacturing Software Solutions",
  },
  {
    title: "Logistics",
    image: "/op-ind-logistics.jpg",
    alt: "Logistics & Supply Chain Software",
  },
  {
    title: "Real Estate",
    image: "/op-ind-realestate.jpg",
    alt: "Real Estate & Property Management Software",
  },
  {
    title: "Travel & Hospitality",
    image: "/op-ind-travel.jpg",
    alt: "Travel, Tourism & Hospitality Software",
  },
  {
    title: "Automotive",
    image: "/op-ind-automotive.jpg",
    alt: "Automotive & Mobility Software Solutions",
  },
  {
    title: "Agriculture",
    image: "/op-ind-agriculture.jpg",
    alt: "Agriculture & AgriTech Software Solutions",
  },
  {
    title: "Media & Entertainment",
    image: "/op-ind-media.jpg",
    alt: "Media & Entertainment Software Platforms",
  },
  {
    title: "Energy & Utilities",
    image: "/op-ind-energy.jpg",
    alt: "Energy & Utilities Software Solutions",
  },
];


const heroFeatures = [
  {
    title: "Agile Delivery",
    icon: "M5 16.5 10 11l3.2 3.2L19 8M15.5 8H19v3.5",
  },
  {
    title: "Four Clear Steps",
    icon: "M4 19h16M7 16V10M12 16V7M17 16V4",
  },
  {
    title: "Support After Launch",
    icon: "M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z",
  },
];

export default function ProcessPageContent() {
  return (
    <div className="opx">
      <section className="opx-hero" aria-label="Digital solutions">
        <div className="opx-hero-bg" aria-hidden="true">
          <Image
            src="/process/process-hero-new.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="opx-shell opx-hero-grid">
          <div className="opx-hero-copy">
            <p className="opx-badge">Digital Innovation &amp; Technology</p>
            <h1>
              Our Software Development <span className="opx-accent">Process &amp; Methodology</span>
            </h1>
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
            <div className="opx-hero-features">
              {heroFeatures.map((feature) => (
                <div key={feature.title} className="opx-hero-feature">
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
        </div>
      </section>

      <section className="op-flow" id="process" aria-labelledby="op-flow-heading">
        <div className="op-flow-shell">
          <div className="op-flow-head">
            <p className="op-flow-badge">Process</p>
            <h2 id="op-flow-heading">
              Our 4-Step Custom Software Development Methodology
            </h2>
            <p>
  RoyalTech Innovation follows a structured agile software
  development workflow, combining strategic planning,
  UI/UX design, full-stack development, quality assurance,
  and deployment to deliver reliable digital solutions.
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
  Custom software development helps businesses streamline
  operations, automate workflows, and build scalable digital
  solutions tailored to their requirements. RoyalTech Innovation
  develops flexible software that supports long-term business growth.
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
            <h2 id="opx-ind-heading">  Custom Software Development Solutions Across Industries</h2>
            <p>
              Tailored digital solutions for the unique needs of different
              industries.
            </p>
          </div>
        </div>

        {/* A strip of industry pictures that glides from left to right. The list is
            repeated once so the loop has no gap; the copy is hidden from assistive tech. */}
        <div className="opx-marquee" role="group" aria-label="Industries we build software for">
          <ul className="opx-marquee-track">
            {[...industries, ...industries].map((item, index) => {
              const isCopy = index >= industries.length;
              return (
                <li key={`${item.title}-${index}`} aria-hidden={isCopy ? true : undefined}>
                  <Link
                    href="/contact"
                    className="opx-ind-tile"
                    tabIndex={isCopy ? -1 : undefined}
                  >
                    <Image
                      src={item.image}
                      alt={isCopy ? "" : item.alt}
                      fill
                      sizes="(max-width: 640px) 70vw, 304px"
                    />
                    <span className="opx-ind-tile-shade" aria-hidden="true" />
                    <strong>{item.title}</strong>
                    <span className="opx-ind-tile-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="opx-tech" aria-labelledby="opx-tech-heading">
        <div className="opx-shell opx-tech-inner">
          <div className="opx-section-head opx-tech-head">
            <p className="opx-badge opx-badge-light">Our Tools</p>
            <h2 id="opx-tech-heading">Technology Stack We Use</h2>
            <p>
              From frontend to cloud—RoyalTech Innovation builds with modern,
              proven technologies across every layer of your product.
            </p>
          </div>
        </div>

        {/* Two rows of real logos, gliding in opposite directions. */}
        <div className="opx-tech-rows" role="group" aria-label="Technologies we build with">
          <TechRow items={techRowOne} />
          <TechRow items={techRowTwo} reverse />
        </div>
      </section>

      <section className="opx-cta" aria-labelledby="opx-cta-heading">
        <div className="opx-shell opx-cta-inner">
          <div className="opx-cta-copy">
            <p className="opx-badge opx-badge-light">Let&apos;s Build</p>
            <h2 id="opx-cta-heading">
              Ready to start your{" "}
              <span className="opx-accent">next project?</span>
            </h2>
            <p>
              Book a free consultation with RoyalTech Innovation—we&apos;ll map
              scope, timeline, and the fastest path to launch.
            </p>
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
          <div className="opx-cta-media">
            <Image
              src="https://res.cloudinary.com/ugqc5gb8/image/upload/v1795732740/Untitled_Design_1.png"
              alt="RoyalTech Innovation project dashboard on a laptop with code, settings and cloud icons"
              width={728}
              height={478}
              sizes="(max-width: 900px) 90vw, 46vw"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
