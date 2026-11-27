"use client";

import "@/styles/services-showcase.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { useFormModal } from "@/components/FormModal";
import {
  CAPABILITIES,
  CAPABILITY_FLOW,
  DASHBOARD_TYPES,
  FAQS,
  HERO_LEAD,
  HERO_PILLARS,
  HERO_SUB,
  INDUSTRIES,
  INTEGRATION_ITEMS,
  INTEGRATION_NODES,
  INTRO_PARAGRAPHS,
  PERFORMANCE_ITEMS,
  PREDICTIVE_ITEMS,
  PROCESS,
  QUALITY_ITEMS,
  QUALITY_STEPS,
  RELATED_LINKS,
  REPORTING_ITEMS,
  SEO_H1,
  OVERVIEW_CARDS,
  OVERVIEW_EYEBROW,
  OVERVIEW_SUB,
  OVERVIEW_TITLE,
  SERVICES,
  TECH_CATEGORIES,
  TECH_FLOW,
  VISUAL_ITEMS,
  WHY,
  WORK_STAGES,
  type BiService,
} from "@/data/business-intelligence-page";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = node;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    el.classList.add("bx-pre");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("bx-in");
          io.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [node]);

  return (
    <div ref={setNode} className={className}>
      {children}
    </div>
  );
}

function Lead({
  service,
  title,
  className = "bx-btn bx-btn--primary",
  children,
}: {
  service: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  const { openForm } = useFormModal();
  return (
    <button type="button" className={className} onClick={() => openForm({ title, source: "business-intelligence-page", service })}>
      {children}
    </button>
  );
}

const Arrow = () => (
  <svg className="bx-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

function Bars({ heights }: { heights: number[] }) {
  return (
    <div className="bx-bars" aria-hidden="true">
      {heights.map((h, i) => (
        <span key={i} style={{ height: `${h}%` }} />
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="bx-hero bx-hero--photo" aria-labelledby="bx-h1">
      <div className="bx-hero-bg" aria-hidden="true">
        <Image
          src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1600/v1795784764/Futuristic_Blue_Analytics_Presentation.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="bx-hero-bg-img"
        />
        <div className="bx-hero-bg-shade" />
      </div>
      <div className="bx-wrap bx-hero-grid">
        <div className="bx-hero-copy">
          <nav aria-label="Breadcrumb" className="bx-crumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">AI-Powered Business Intelligence</li>
            </ol>
          </nav>
          <p className="bx-eyebrow">
            <span className="bx-pulse" aria-hidden="true" />
            AI-powered business intelligence
          </p>
          <h1 id="bx-h1" className="bx-h1">
            {SEO_H1}
          </h1>
          <p className="bx-hero-sub">{HERO_SUB}</p>
          <p className="bx-lead">{HERO_LEAD}</p>
          <ul className="bx-pills">
            {HERO_PILLARS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="bx-cta-row">
            <a href="#services-overview" className="bx-btn bx-btn--primary bx-btn--lg">
              Explore BI Solutions
              <Arrow />
            </a>
            <Lead service="Hero" title="Discuss Your Business Requirements" className="bx-btn bx-btn--ghost bx-btn--lg">
              Discuss Your Business Requirements
            </Lead>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bx-section bx-section--white">
      <div className="bx-wrap bx-split">
        <Reveal className="bx-stack">
          <p className="bx-kicker">Reporting that people can use</p>
          <h2 className="bx-h2">Make Your Business Data More Valuable</h2>
          <div className="bx-prose">
            {INTRO_PARAGRAPHS.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="bx-related">
            This work is dashboards, reports, and the measures behind them. Connecting an API, generating content, or running a task agent are different services:{" "}
            {RELATED_LINKS.map((link, i) => (
              <span key={link.href}>
                {i > 0 ? ", " : null}
                <Link href={link.href}>{link.label}</Link>
              </span>
            ))}
            . Machine learning products and ERP systems are scoped separately when that is the requirement.
          </p>
        </Reveal>
        <Reveal className="bx-panel">
          <p>What a view is made of</p>
          <ul>
            <li>
              <b>Sources</b>
              <span>Only the systems in the project</span>
            </li>
            <li>
              <b>Measures</b>
              <span>KPIs with an agreed definition</span>
            </li>
            <li>
              <b>Charts</b>
              <span>Comparisons a person can read</span>
            </li>
            <li>
              <b>Report</b>
              <span>A pack that can be reviewed</span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceVisual({ id }: { id: string }) {
  if (id === "ai-data-analytics") {
    return (
      <figure className="bx-svc-figure">
        <Image
          src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1400/v1795785989/Gemini_Generated_Image_51im7x51im7x51im.png"
          alt="Monitor showing an analytics dashboard with revenue trends, sales performance, customer segmentation and recent transactions"
          width={2752}
          height={1536}
          unoptimized
          sizes="(min-width: 960px) 50vw, 100vw"
          className="bx-svc-img"
        />
      </figure>
    );
  }
  if (id === "bi-dashboards") {
    return (
      <figure className="bx-svc-figure">
        <Image
          src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1400/v1795786109/Screenshot_2026-11-27_at_6.58.03_PM.png"
          alt="Monitor showing a business intelligence dashboard with revenue overview, sales comparison, customer demographics and profit and loss charts"
          width={1166}
          height={694}
          unoptimized
          sizes="(min-width: 960px) 50vw, 100vw"
          className="bx-svc-img"
        />
      </figure>
    );
  }
  if (id === "automated-reporting") {
    return (
      <figure className="bx-svc-figure">
        <Image
          src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1400/v1795786245/Screenshot_2026-11-27_at_7.00.04_PM.png"
          alt="Diagram of data sources feeding an AI analytics engine, a sales dashboard, and an automated report preview with PDF and Excel export"
          width={1334}
          height={570}
          unoptimized
          sizes="(min-width: 960px) 50vw, 100vw"
          className="bx-svc-img"
        />
      </figure>
    );
  }
  if (id === "predictive-insights") {
    return (
      <figure className="bx-svc-figure">
        <Image
          src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1400/v1795786337/Gemini_Generated_Image_c7stqvc7stqvc7st.png"
          alt="Curved monitor showing a predictive analytics dashboard with a revenue forecast chart, customer behavior views and risk indicators"
          width={2752}
          height={1536}
          unoptimized
          sizes="(min-width: 960px) 50vw, 100vw"
          className="bx-svc-img"
        />
      </figure>
    );
  }
  if (id === "data-visualization") {
    return (
      <figure className="bx-svc-figure">
        <Image
          src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1400/v1795786510/Gemini_Generated_Image_y6oivyy6oivyy6oi.png"
          alt="Analytics dashboard with a regional performance map, KPI cards, a sales breakdown donut, and revenue and engagement charts"
          width={2752}
          height={1536}
          unoptimized
          sizes="(min-width: 960px) 50vw, 100vw"
          className="bx-svc-img"
        />
      </figure>
    );
  }
  return (
    <div className="bx-visual">
      <p>The same data, shown three ways</p>
      <div className="bx-viz">
        <Bars heights={[50, 70, 40, 85]} />
        <div className="bx-line" aria-hidden="true" />
        <ul>
          <li>Compare</li>
          <li>Trend</li>
          <li>Mix</li>
        </ul>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div id="services-overview">
      <section className="bx-section bx-section--tint">
        <div className="bx-wrap">
          <Reveal className="bx-sec-head bx-sec-head--center">
            <p className="bx-kicker">{OVERVIEW_EYEBROW}</p>
            <h2 className="bx-h2">{OVERVIEW_TITLE}</h2>
            <p className="bx-sub">{OVERVIEW_SUB}</p>
          </Reveal>
          <ul className="bx-ov-grid">
            {OVERVIEW_CARDS.map((card) => (
              <li key={card.title} className="bx-ov-card">
                <Reveal>
                  <span className="bx-ov-badge">{card.badge}</span>
                  <h3 className="bx-ov-title">{card.title}</h3>
                  <p className="bx-ov-copy">{card.copy}</p>
                  <ul className="bx-ov-tags">
                    {card.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {SERVICES.map((service) => (
        <ServiceBlock key={service.id} service={service} />
      ))}
    </div>
  );
}

function ServiceBlock({ service }: { service: BiService }) {
  const dark = service.tone === "dark";
  return (
    <section id={service.id} className={`bx-section bx-svc${dark ? " bx-svc--dark" : " bx-section--white"}`}>
      <div className={`bx-wrap bx-svc-grid${service.visualFirst ? " bx-svc-grid--visual" : ""}`}>
        <Reveal className="bx-stack">
          <p className="bx-kicker">
            {service.number} · {service.eyebrow}
          </p>
          <h3 className="bx-h3">{service.title}</h3>
          <div className="bx-prose">
            {service.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="bx-tiles">
            {service.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Lead service={service.service} title={service.cta} className={dark ? "bx-btn bx-btn--cyan" : "bx-btn bx-btn--primary"}>
            {service.cta}
            <Arrow />
          </Lead>
        </Reveal>
        <Reveal>
          <ServiceVisual id={service.id} />
        </Reveal>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="bx-section bx-section--navy">
      <div className="bx-wrap">
        <Reveal className="bx-sec-head">
          <p className="bx-kicker bx-kicker--cyan">What sits around the chart</p>
          <h2 className="bx-h2">More Than Dashboards. Intelligent Business Insights.</h2>
          <p className="bx-sub">
            We combine business analytics, data visualization, software development, reporting automation, and data integration to develop business intelligence solutions. An AI summary is added when it helps someone read the measures.
          </p>
        </Reveal>
        <ol className="bx-flow">
          {CAPABILITY_FLOW.map((node) => (
            <li key={node.step}>
              <span>{node.step}</span>
              <b>{node.title}</b>
              <p>{node.text}</p>
            </li>
          ))}
        </ol>
        <ul className="bx-cap-list">
          {CAPABILITIES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="bx-section bx-section--white">
      <div className="bx-wrap">
        <Reveal className="bx-sec-head">
          <p className="bx-kicker">How a reporting build runs</p>
          <h2 className="bx-h2">From Business Data to Actionable Insights</h2>
          <p className="bx-sub">AI-powered business intelligence organizes, analyzes, and visualizes the information in scope so people can report, monitor, and plan.</p>
        </Reveal>
        <ol className="bx-stages">
          {WORK_STAGES.map((stage, i) => (
            <li key={stage.title}>
              <Reveal className="bx-stage">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function SplitSection({
  id,
  kicker,
  title,
  text,
  items,
  children,
  flip,
  tint,
}: {
  id?: string;
  kicker: string;
  title: string;
  text: string;
  items: string[];
  children: ReactNode;
  flip?: boolean;
  tint?: boolean;
}) {
  return (
    <section id={id} className={`bx-section ${tint ? "bx-section--tint" : "bx-section--white"}`}>
      <div className={`bx-wrap bx-split bx-split--top${flip ? " bx-split--flip" : ""}`}>
        <Reveal className="bx-stack">
          <p className="bx-kicker">{kicker}</p>
          <h2 className="bx-h2">{title}</h2>
          <p className="bx-prose-p">{text}</p>
          <ul className="bx-tiles">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}

function DeepDives() {
  return (
    <>
      <SplitSection
        id="performance"
        tint
        kicker="Performance"
        title="Monitor Performance. Understand Trends. Make Informed Decisions."
        text="Business performance analytics helps organizations look at KPIs, operational trends, and the activity they already record. We build those views around the measures and the reporting rhythm you define."
        items={PERFORMANCE_ITEMS}
      >
        <figure className="bx-svc-figure">
          <Image
            src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1200/v1795786824/Screenshot_2026-11-27_at_7.09.58_PM.png"
            alt="Office desk with a monitor showing a business performance dashboard with sales trends, regional breakdown and KPI gauges"
            width={1064}
            height={866}
            unoptimized
            sizes="(min-width: 960px) 50vw, 100vw"
            className="bx-svc-img"
          />
        </figure>
      </SplitSection>
      <SplitSection
        id="custom-dashboards"
        flip
        kicker="Custom dashboards"
        title="Business Intelligence Dashboards Designed Around Your Business"
        text="Different teams need different numbers. We design dashboards around your KPIs, the people who will open them, and the sources those numbers come from. The layout stays readable: filters, a few primary measures, and the charts that explain them."
        items={DASHBOARD_TYPES}
      >
        <div className="bx-visual">
          <p>Three views, one definition of each KPI</p>
          <ul className="bx-deck">
            <li>Executive summary</li>
            <li>Sales detail</li>
            <li>Operations status</li>
          </ul>
        </div>
      </SplitSection>
      <SplitSection
        id="reporting"
        tint
        kicker="Reporting"
        title="Streamline Business Reporting With Intelligent Workflows"
        text="Automated reporting reduces the repeated work of assembling the same pack. We build the workflow around your sources, the template, and who should see the file."
        items={REPORTING_ITEMS}
      >
        <div className="bx-visual">
          <p>Schedule → generate → review</p>
          <ol className="bx-steps-mini">
            <li>Monday pack from sales and finance fields</li>
            <li>KPI summary in the agreed sections</li>
            <li>Export after a person checks it</li>
          </ol>
        </div>
      </SplitSection>
      <SplitSection
        id="forecasts"
        flip
        kicker="Planning views"
        title="Discover Trends Before They Become Business Challenges"
        text="A predictive view uses history and a suitable model to show a possible range. It is for planning. It is not a promise of the next period’s result. The dataset and the question are agreed before a model is used."
        items={PREDICTIVE_ITEMS}
      >
        <figure className="bx-svc-figure">
          <Image
            src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1400/v1795788204/-wObYFaVnAaB_Yxfb4sXIk_IaRPye1f0RAUMFh0hQggMLaXt4x2OQtGOa3LU3WOJOTESxkDc4_Go12ddMBCPudjok8rRm4fg5guBYABUENlB3yEEBMN9JZ3fVErB1bAJX-fIlIciuUbQUVSO9EvRj_qcsl2x7TU5IVGptzKDeLLnn6e0C-27IkdHbkk5vE4l.jpg"
            alt="Dark monitor on a desk showing a forecast chart with a historical trend and a forward range band, alongside funnel and KPI panels"
            width={1672}
            height={941}
            unoptimized
            sizes="(min-width: 960px) 50vw, 100vw"
            className="bx-svc-img"
          />
        </figure>
      </SplitSection>
      <SplitSection
        id="visualization"
        tint
        kicker="Visualization"
        title="Make Your Business Information Clear, Interactive, and Meaningful"
        text="Charts, comparisons, and filters make a table easier to discuss. We choose the visual for the question: a trend, a mix, or a comparison, not a chart for its own sake."
        items={VISUAL_ITEMS}
      >
        <figure className="bx-svc-figure">
          <Image
            src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1400/v1795788343/Screenshot_2026-11-27_at_7.35.15_PM.png"
            alt="Desk with a monitor showing a business dashboard with donut charts, bar charts, a world map and a recent activity list"
            width={1514}
            height={1234}
            unoptimized
            sizes="(min-width: 960px) 50vw, 100vw"
            className="bx-svc-img"
          />
        </figure>
      </SplitSection>
    </>
  );
}

function Integrations() {
  return (
    <section id="integrations" className="bx-section bx-section--navy">
      <div className="bx-wrap bx-split bx-split--top">
        <Reveal className="bx-stack">
          <p className="bx-kicker bx-kicker--cyan">Data connections</p>
          <h2 className="bx-h2">Connect Your Business Data Into One Intelligent Ecosystem</h2>
          <p className="bx-sub">
            A dashboard is useful when it can read the systems that already hold the records. We connect the sources in scope through an API, a database, or another path the project can use. A system is included when that path exists and the scope covers it.
          </p>
          <ul className="bx-tiles bx-tiles--on-dark">
            {INTEGRATION_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="bx-nodes">
          <ul>
            {INTEGRATION_NODES.map((name) => (
              <li key={name} className={name === "Dashboard" ? "core" : ""}>
                {name}
              </li>
            ))}
          </ul>
          <small>An architecture sketch. Each box is connected only when the project includes it.</small>
        </Reveal>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section id="technology" className="bx-section bx-section--white">
      <div className="bx-wrap">
        <Reveal className="bx-sec-head">
          <p className="bx-kicker">Chosen for the data you have</p>
          <h2 className="bx-h2">Built With Modern Analytics &amp; Business Intelligence Technologies</h2>
          <p className="bx-sub">
            We develop business intelligence solutions using the analytics approach, visualization, and integration method that fit the sources and the reports. A tool is used when it fits the project.
          </p>
        </Reveal>
        <ol className="bx-pipe">
          {TECH_FLOW.map((step, i) => (
            <li key={step} className={i === 3 ? "core" : ""}>
              {step}
            </li>
          ))}
        </ol>
        <div className="bx-tech">
          {TECH_CATEGORIES.map((category) => (
            <Reveal key={category.title}>
              <div className="bx-tech-card">
                <h3>{category.title}</h3>
                <ul>
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="bx-section bx-section--tint">
      <div className="bx-wrap">
        <Reveal className="bx-sec-head">
          <p className="bx-kicker">Industries</p>
          <h2 className="bx-h2">AI Business Intelligence Across Industries</h2>
          <p className="bx-sub">Examples of the reporting this work usually supports. They are planning notes, not a claim that every measure is already on a dashboard.</p>
        </Reveal>
        <div className="bx-ind">
          {INDUSTRIES.map((industry) => (
            <Reveal key={industry.name}>
              <article>
                <h3>{industry.name}</h3>
                <p>{industry.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="bx-section bx-section--white">
      <div className="bx-wrap bx-split bx-split--top">
        <Reveal className="bx-stack">
          <p className="bx-kicker">Why RoyalTech Innovation</p>
          <h2 className="bx-h2">Your Partner for Intelligent Business Analytics</h2>
          <figure className="bx-svc-figure">
            <Image
              src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1200/v1795787921/image.png"
              alt="Business analyst presenting KPI charts on a holographic dashboard in a modern office"
              width={1536}
              height={1024}
              unoptimized
              sizes="(min-width: 960px) 50vw, 100vw"
              className="bx-svc-img"
            />
          </figure>
          <p className="bx-prose-p">
            RoyalTech Innovation is a business intelligence company in Mohali and works with teams in Chandigarh and across Punjab. A dashboard starts from the question and the data, then the chart.
          </p>
          <div className="bx-aside">
            <small>How a number gets on screen</small>
            <p>Each KPI has a definition, a source, and a person who can check it against that source.</p>
          </div>
        </Reveal>
        <div className="bx-why">
          {WHY.map((item) => (
            <Reveal key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="bx-section bx-section--tint">
      <div className="bx-wrap">
        <Reveal className="bx-sec-head bx-sec-head--center">
          <p className="bx-kicker">Delivery</p>
          <h2 className="bx-h2">From Business Data to Intelligent Business Solutions</h2>
          <p className="bx-sub">Eight stages from the first reporting conversation to a dashboard that can be maintained.</p>
        </Reveal>
        <ol className="bx-steps">
          {PROCESS.map((step, i) => (
            <li key={step.title}>
              <Reveal className="bx-step">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Quality() {
  return (
    <section id="quality" className="bx-section bx-section--white">
      <div className="bx-wrap bx-split bx-split--top">
        <Reveal className="bx-stack">
          <p className="bx-kicker">Data quality</p>
          <h2 className="bx-h2">Build Business Intelligence Solutions Around Reliable Data</h2>
          <p className="bx-prose-p">
            Business intelligence depends on relevant data, a clear KPI definition, and a check against the source. We plan the project around those requirements rather than treating a chart as proof on its own.
          </p>
          <ul className="bx-tiles">
            {QUALITY_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <ol className="bx-quality">
            {QUALITY_STEPS.map((step, i) => (
              <li key={step}>
                <span>{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bx-section bx-section--tint">
      <div className="bx-wrap bx-wrap--narrow">
        <Reveal className="bx-sec-head bx-sec-head--center">
          <p className="bx-kicker">Questions</p>
          <h2 className="bx-h2">Frequently Asked Questions About AI Business Intelligence</h2>
        </Reveal>
        <div className="bx-acc">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className={`bx-acc-i${isOpen ? " on" : ""}`}>
                <h3>
                  <button type="button" id={`bx-faq-q-${i}`} aria-expanded={isOpen} aria-controls={`bx-faq-a-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                    <span>
                      {i + 1}. {faq.q}
                    </span>
                    <span className="bx-acc-ic" aria-hidden="true" />
                  </button>
                </h3>
                <div id={`bx-faq-a-${i}`} role="region" aria-labelledby={`bx-faq-q-${i}`} className="bx-acc-p" inert={!isOpen}>
                  <div>
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bx-section bx-final-wrap">
      <div className="bx-wrap">
        <Reveal className="bx-final">
          <div>
            <span className="bx-final-tag">Start with the report you rebuild by hand</span>
            <h2>Ready to Make Smarter Decisions With Your Business Data?</h2>
            <p>
              Whether you need AI data analytics, custom business intelligence dashboards, automated reporting, predictive insights, or data visualization, RoyalTech Innovation can help you plan and develop the right solution for your business.
            </p>
            <div className="bx-cta-row">
              <Lead service="Final CTA" title="Start Your BI Project" className="bx-btn bx-btn--cyan bx-btn--lg">
                Start Your BI Project
                <Arrow />
              </Lead>
              <Lead service="Final CTA" title="Discuss Your Business Requirements" className="bx-btn bx-btn--outline bx-btn--lg">
                Discuss Your Business Requirements
              </Lead>
            </div>
          </div>
          <figure className="bx-final-figure">
            <Image
              src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_900/v1795787718/Untitled_design_2.png"
              alt="Illustrated AI business analyst avatar with the RoyalTech logo"
              width={1002}
              height={1230}
              unoptimized
              sizes="(min-width: 960px) 40vw, 80vw"
              className="bx-final-img"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export default function BusinessIntelligencePage({ rootClass = "" }: { rootClass?: string }) {
  return (
    <div className={`svx-root bx-root ${rootClass}`.trim()}>
      <Hero />
      <Intro />
      <Services />
      <Capabilities />
      <HowItWorks />
      <DeepDives />
      <Integrations />
      <Technology />
      <Industries />
      <Why />
      <Process />
      <Quality />
      <Faq />
      <FinalCta />
    </div>
  );
}
