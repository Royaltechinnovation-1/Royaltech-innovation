"use client";

import "@/styles/services-showcase.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState, type ReactNode } from "react";
import { useFormModal } from "@/components/FormModal";
import {
  BI_ITEMS,
  CAPABILITIES,
  CAPABILITY_FLOW,
  CONTACT,
  CUSTOMER_ITEMS,
  DIFFERENCES,
  FAQS,
  HERO_LEAD,
  HERO_PILLARS,
  HERO_SUB,
  INDUSTRIES,
  INTEGRATION_ITEMS,
  INTEGRATION_NODES,
  INTRO_PARAGRAPHS,
  MODEL_ITEMS,
  PERSONALIZATION_ITEMS,
  PLANNING_ITEMS,
  PROCESS,
  PROCESSING_ITEMS,
  QUALITY_ITEMS,
  QUALITY_STEPS,
  RELATED_LINKS,
  SEO_H1,
  SERVICES,
  TECH_CATEGORIES,
  TECH_FLOW,
  WHY,
  WORK_STAGES,
  type MlService,
} from "@/data/machine-learning-page";

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = node;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    el.classList.add("mx-pre");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("mx-in");
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
  className = "mx-btn mx-btn--primary",
  children,
}: {
  service: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  const { openForm } = useFormModal();
  return (
    <button type="button" className={className} onClick={() => openForm({ title, source: "machine-learning-page", service })}>
      {children}
    </button>
  );
}

const Arrow = () => (
  <svg className="mx-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Illustrative chart components (layout only, no real numbers)        */
/* ------------------------------------------------------------------ */

function Screen({
  title,
  dark,
  note,
  children,
  label,
}: {
  title: string;
  dark?: boolean;
  note?: string;
  children: ReactNode;
  label?: string;
}) {
  return (
    <figure className={`mx-screen${dark ? " mx-screen--dark" : ""}`} aria-label={label ?? title}>
      <div className="mx-screen-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{title}</span>
      </div>
      <div className="mx-screen-body">{children}</div>
      <figcaption className="mx-screen-note">{note ?? "Illustrative layout. Not client data or a real forecast."}</figcaption>
    </figure>
  );
}

/** History, a dashed forecast, and a widening range. Shapes only. */
function ForecastChart({ label = "Illustrative forecast chart: history, projected trend, and a widening range" }: { label?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className="mx-chart" viewBox="0 0 320 160" role="img" aria-label={label}>
      <defs>
        <linearGradient id={`${id}-b`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--mx-band)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="var(--mx-band)" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      {[30, 65, 100, 135].map((y) => (
        <line key={y} x1="8" x2="312" y1={y} y2={y} className="mx-grid" />
      ))}
      <rect x="160" y="8" width="152" height="140" className="mx-zone" />
      <polygon points="160,86 190,72 220,62 250,52 280,40 312,28 312,92 280,88 250,86 220,86 190,88 160,86" fill={`url(#${id}-b)`} />
      <polyline points="10,118 36,108 62,112 88,98 114,102 140,90 160,86" className="mx-hist" fill="none" />
      <polyline points="160,86 190,80 220,74 250,69 280,64 312,58" className="mx-fc" fill="none" />
      <circle cx="160" cy="86" r="4" className="mx-dot" />
      <text x="164" y="22" className="mx-axis">
        Forecast range
      </text>
      <text x="12" y="22" className="mx-axis">
        History
      </text>
    </svg>
  );
}

/** Solid history bars followed by outlined estimate bars. */
function ForecastBars() {
  const hist = [38, 46, 42, 54, 50, 62];
  const est = [66, 72, 70, 80];
  return (
    <svg className="mx-chart" viewBox="0 0 320 150" role="img" aria-label="Illustrative bars: past periods in solid blue and estimated periods outlined">
      {[35, 70, 105].map((y) => (
        <line key={y} x1="8" x2="312" y1={y} y2={y} className="mx-grid" />
      ))}
      {hist.map((h, i) => (
        <rect key={`h${i}`} x={14 + i * 30} y={130 - h * 1.2} width="20" height={h * 1.2} rx="3" className="mx-bar" />
      ))}
      {est.map((h, i) => (
        <rect key={`e${i}`} x={14 + (hist.length + i) * 30} y={130 - h * 1.2} width="20" height={h * 1.2} rx="3" className="mx-bar-est" />
      ))}
      <text x="14" y="146" className="mx-axis">
        Past periods
      </text>
      <text x="200" y="146" className="mx-axis">
        Estimated periods
      </text>
    </svg>
  );
}

function TrainingCurve() {
  return (
    <svg className="mx-chart" viewBox="0 0 320 140" role="img" aria-label="Illustrative training and validation curves that flatten as training continues">
      {[30, 65, 100].map((y) => (
        <line key={y} x1="8" x2="312" y1={y} y2={y} className="mx-grid" />
      ))}
      <polyline points="10,20 50,52 90,76 130,92 170,102 210,108 250,112 312,114" className="mx-hist" fill="none" />
      <polyline points="10,28 50,58 90,82 130,98 170,108 210,112 250,116 312,120" className="mx-fc" fill="none" />
      <text x="12" y="134" className="mx-axis">
        Training steps
      </text>
      <text x="212" y="16" className="mx-axis">
        Training · Validation
      </text>
    </svg>
  );
}

function Donut() {
  return (
    <svg className="mx-donut" viewBox="0 0 120 120" role="img" aria-label="Illustrative customer segment split">
      <circle cx="60" cy="60" r="42" fill="none" className="mx-seg0" strokeWidth="16" />
      <circle cx="60" cy="60" r="42" fill="none" className="mx-seg1" strokeWidth="16" strokeDasharray="110 264" strokeDashoffset="0" transform="rotate(-90 60 60)" />
      <circle cx="60" cy="60" r="42" fill="none" className="mx-seg2" strokeWidth="16" strokeDasharray="70 264" strokeDashoffset="-110" transform="rotate(-90 60 60)" />
      <circle cx="60" cy="60" r="42" fill="none" className="mx-seg3" strokeWidth="16" strokeDasharray="50 264" strokeDashoffset="-180" transform="rotate(-90 60 60)" />
    </svg>
  );
}

function Heat() {
  const rows = [
    [1, 2, 3, 2, 1, 0, 1],
    [2, 3, 4, 3, 2, 1, 1],
    [1, 2, 3, 4, 3, 2, 1],
    [0, 1, 2, 3, 2, 1, 0],
  ];
  return (
    <div className="mx-heat" role="img" aria-label="Illustrative engagement heat map by day and time">
      {rows.flatMap((row, r) => row.map((v, c) => <span key={`${r}-${c}`} className={`v${v}`} />))}
    </div>
  );
}

function Chain({ steps, dark }: { steps: string[]; dark?: boolean }) {
  return (
    <ol className={`mx-chain${dark ? " mx-chain--dark" : ""}`} aria-label="How the data moves">
      {steps.map((s, i) => (
        <li key={s}>
          <span>{String(i + 1).padStart(2, "0")}</span>
          {s}
        </li>
      ))}
    </ol>
  );
}

/* Hero --------------------------------------------------------------- */

function Hero() {
  return (
    <section className="mx-hero mx-hero--photo" aria-labelledby="mx-h1">
      <div className="mx-hero-bg" aria-hidden="true">
        <Image
          src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1600/v1795788547/Gemini_Generated_Image_l5vgbml5vgbml5vg.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="mx-hero-bg-img"
        />
        <div className="mx-hero-bg-shade" />
      </div>
      <div className="mx-wrap mx-hero-grid">
        <div className="mx-hero-copy">
          <nav aria-label="Breadcrumb" className="mx-crumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Machine Learning &amp; Predictive Analytics</li>
            </ol>
          </nav>
          <p className="mx-eyebrow">
            <span className="mx-pulse" aria-hidden="true" />
            Machine learning &amp; predictive analytics
          </p>
          <h1 id="mx-h1" className="mx-h1">
            {SEO_H1}
          </h1>
          <p className="mx-hero-sub">{HERO_SUB}</p>
          <p className="mx-lead">{HERO_LEAD}</p>
          <ul className="mx-pills">
            {HERO_PILLARS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mx-cta-row">
            <a href="#services-overview" className="mx-btn mx-btn--primary mx-btn--lg">
              Explore Machine Learning Solutions
              <Arrow />
            </a>
            <Lead service="Hero" title="Discuss Your Data Project" className="mx-btn mx-btn--ghost mx-btn--lg">
              Discuss Your Data Project
            </Lead>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Intro & differences ----------------------------------------------- */

function Intro() {
  return (
    <section className="mx-section mx-section--white">
      <div className="mx-wrap mx-split">
        <Reveal className="mx-stack">
          <p className="mx-kicker">Patterns in your own records</p>
          <h2 className="mx-h2">Discover the Value Hidden Within Your Business Data</h2>
          <div className="mx-prose">
            {INTRO_PARAGRAPHS.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mx-related">
            Machine learning is one part of a wider data and software picture. Reporting on top of it, connecting it to other systems, and the applications around it are covered in related services:{" "}
            {RELATED_LINKS.map((link, i) => (
              <span key={link.href}>
                {i > 0 ? ", " : null}
                <Link href={link.href}>{link.label}</Link>
              </span>
            ))}
            . ERP and business automation work is scoped with the project when it is part of the requirement.
          </p>
        </Reveal>
        <Reveal>
          <figure className="mx-photo">
            <Image
              src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1400/v1795788977/Gemini_Generated_Image_r9q3sir9q3sir9q3.png"
              alt="Chart of historical metric values from 2018 to 2024 continuing into a predicted growth range through 2029"
              width={2816}
              height={1536}
              unoptimized
              sizes="(min-width: 960px) 46vw, 100vw"
              className="mx-photo-img"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function Differences() {
  return (
    <section className="mx-section mx-section--tint">
      <div className="mx-wrap">
        <Reveal className="mx-sec-head">
          <p className="mx-kicker">Choosing the right service</p>
          <h2 className="mx-h2">Where Machine Learning Fits Among AI Services</h2>
          <p className="mx-sub">Each service answers a different question. Naming the difference early avoids building the wrong thing.</p>
        </Reveal>
        <dl className="mx-diff">
          {DIFFERENCES.map((d, i) => (
            <div key={d.name} className={i === 0 ? "core" : ""}>
              <dt>{d.name}</dt>
              <dd>{d.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* Five services ------------------------------------------------------ */

function ServiceVisual({ id, flow }: { id: string; flow: string[] }) {
  if (id === "predictive-analytics") {
    return (
      <Screen title="Prediction view">
        <ul className="mx-kpis">
          <li>
            <small>Model</small>
            <b>Prediction</b>
          </li>
          <li>
            <small>Range</small>
            <b>Confidence</b>
          </li>
          <li>
            <small>Signal</small>
            <b>Trend</b>
          </li>
        </ul>
        <ForecastChart />
        <Chain steps={flow} />
      </Screen>
    );
  }
  if (id === "business-forecasting") {
    return (
      <Screen dark title="Forecast & planning">
        <ForecastBars />
        <table className="mx-table">
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Assumption</th>
              <th>Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Low</td>
              <td>Weaker demand</td>
              <td>Cost planning</td>
            </tr>
            <tr className="core">
              <td>Base</td>
              <td>Recent pattern holds</td>
              <td>Main plan</td>
            </tr>
            <tr>
              <td>High</td>
              <td>Stronger demand</td>
              <td>Stock and staffing</td>
            </tr>
          </tbody>
        </table>
        <Chain steps={flow} dark />
      </Screen>
    );
  }
  if (id === "recommendation-systems") {
    return (
      <Screen title="Recommendation engine">
        <div className="mx-profile">
          <span aria-hidden="true" />
          <div>
            <b>Visitor profile</b>
            <small>Viewed · Saved · Bought together</small>
          </div>
        </div>
        <div className="mx-recs mx-recs--light">
          {["Product A", "Product B", "Product C", "Product D"].map((n, i) => (
            <div key={n} className={i === 0 ? "top" : ""}>
              <span aria-hidden="true" />
              <b>{n}</b>
              <small>{i === 0 ? "Frequently viewed together" : "Similar to recent activity"}</small>
            </div>
          ))}
        </div>
        <Chain steps={flow} />
      </Screen>
    );
  }
  if (id === "customer-behaviour-analysis") {
    return (
      <Screen dark title="Customer behaviour">
        <ol className="mx-funnel" aria-label="Illustrative customer journey stages">
          {["Visit", "Browse", "Add to cart", "Purchase", "Return"].map((s, i) => (
            <li key={s} style={{ width: `${100 - i * 14}%` }}>
              {s}
            </li>
          ))}
        </ol>
        <div className="mx-two">
          <div>
            <small>Segments</small>
            <Donut />
          </div>
          <div>
            <small>Engagement</small>
            <Heat />
          </div>
        </div>
        <Chain steps={flow} dark />
      </Screen>
    );
  }
  return (
    <Screen title="Data processing">
      <div className="mx-proc">
        <div>
          <small>Raw input</small>
          <ul>
            <li>invoice_scan_01.pdf</li>
            <li>support_note.txt</li>
            <li>orders_export.csv</li>
          </ul>
        </div>
        <span aria-hidden="true">→</span>
        <div>
          <small>Classified</small>
          <ul>
            <li>
              <b>Invoice</b> fields extracted
            </li>
            <li>
              <b>Request</b> topic assigned
            </li>
            <li>
              <b>Orders</b> columns mapped
            </li>
          </ul>
        </div>
      </div>
      <Chain steps={flow} />
    </Screen>
  );
}

function ServiceBlock({ s }: { s: MlService }) {
  const dark = s.tone === "dark";
  return (
    <section id={s.id} className={`mx-section mx-svc${dark ? " mx-svc--dark" : " mx-section--white"}`}>
      <div className={`mx-wrap mx-svc-grid${s.visualFirst ? " mx-svc-grid--visual" : ""}`}>
        <Reveal className="mx-stack">
          <p className="mx-kicker">
            {s.number} · {s.eyebrow}
          </p>
          <h3 className="mx-h3">{s.title}</h3>
          <div className="mx-prose">
            {s.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mx-tiles">
            {s.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Lead service={s.service} title={s.cta} className={dark ? "mx-btn mx-btn--cyan" : "mx-btn mx-btn--primary"}>
            {s.cta}
            <Arrow />
          </Lead>
        </Reveal>
        <Reveal>
          <ServiceVisual id={s.id} flow={s.flow} />
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <div id="services-overview">
      <section className="mx-section mx-section--tint">
        <div className="mx-wrap">
          <Reveal className="mx-sec-head mx-sec-head--center">
            <p className="mx-kicker">Five machine learning services</p>
            <h2 className="mx-h2">Machine Learning Solutions for Smarter Businesses</h2>
            <p className="mx-sub">Prediction, forecasting, recommendations, customer behaviour, and data processing, each with its own approach and its own limits.</p>
            <nav aria-label="Service categories" className="mx-jump">
              {SERVICES.map((s) => (
                <a key={s.id} href={`#${s.id}`}>
                  {s.eyebrow}
                </a>
              ))}
            </nav>
          </Reveal>
          <ul className="mx-sv-grid">
            {SERVICES.map((s) => (
              <li key={s.id} className="mx-sv-card">
                <Reveal>
                  <span className="mx-sv-num">{s.number}</span>
                  <h3 className="mx-sv-title">{s.eyebrow}</h3>
                  <p className="mx-sv-head">{s.title}</p>
                  <p className="mx-sv-copy">{s.paragraphs[0]}</p>
                  <ul className="mx-sv-tags">
                    {s.items.slice(0, 3).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className="mx-sv-link" href={`#${s.id}`}>
                    View details
                    <Arrow />
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {SERVICES.map((s) => (
        <ServiceBlock key={s.id} s={s} />
      ))}
    </div>
  );
}

/* Capabilities & how it works --------------------------------------- */

function Capabilities() {
  return (
    <section id="capabilities" className="mx-section mx-section--navy">
      <div className="mx-wrap">
        <Reveal className="mx-sec-head">
          <p className="mx-kicker mx-kicker--cyan">From data to a decision</p>
          <h2 className="mx-h2">Beyond Data Analysis. Build Intelligent Data-Driven Solutions.</h2>
          <p className="mx-sub">
            We combine machine learning, data analysis, application development, predictive modelling, data processing, and software engineering to develop intelligent business solutions.
          </p>
        </Reveal>
        <ol className="mx-flow">
          {CAPABILITY_FLOW.map((node) => (
            <li key={node.step}>
              <span>{node.step}</span>
              <b>{node.title}</b>
              <p>{node.text}</p>
            </li>
          ))}
        </ol>
        <ul className="mx-cap-list">
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
    <section id="how-it-works" className="mx-section mx-section--white">
      <div className="mx-wrap">
        <Reveal className="mx-sec-head">
          <p className="mx-kicker">How machine learning works</p>
          <h2 className="mx-h2">From Raw Data to Intelligent Predictions</h2>
          <p className="mx-sub">
            Machine learning solutions use relevant data, processing techniques, algorithms, and model development approaches to identify patterns and generate predictions or analytical outputs based on their intended use.
          </p>
        </Reveal>
        <ol className="mx-stages">
          {WORK_STAGES.map((stage, i) => (
            <li key={stage.title}>
              <Reveal className="mx-stage">
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

/* Deep dives --------------------------------------------------------- */

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
  text: string[];
  items: string[];
  children: ReactNode;
  flip?: boolean;
  tint?: boolean;
}) {
  return (
    <section id={id} className={`mx-section ${tint ? "mx-section--tint" : "mx-section--white"}`}>
      <div className={`mx-wrap mx-split mx-split--top${flip ? " mx-split--flip" : ""}`}>
        <Reveal className="mx-stack">
          <p className="mx-kicker">{kicker}</p>
          <h2 className="mx-h2">{title}</h2>
          <div className="mx-prose">
            {text.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mx-tiles">
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
        id="business-intelligence"
        tint
        kicker="Data-driven business intelligence"
        title="Turn Data Into Meaningful Business Insights"
        text={[
          "Machine learning and analytics solutions can help businesses explore information, identify patterns, monitor trends, and support decision-making through data-driven insights.",
          "We help businesses develop intelligent analytics applications and data workflows tailored to their business requirements and information needs.",
        ]}
        items={BI_ITEMS}
      >
        <Screen title="Business insights dashboard">
          <ul className="mx-kpis">
            <li>
              <small>Revenue</small>
              <b>KPI</b>
            </li>
            <li>
              <small>Orders</small>
              <b>KPI</b>
            </li>
            <li>
              <small>Returns</small>
              <b>KPI</b>
            </li>
          </ul>
          <ForecastChart />
          <p className="mx-cap">KPIs, a trend with a forecast range, and a short written insight in one view.</p>
        </Screen>
      </SplitSection>

      <SplitSection
        id="model-development"
        flip
        kicker="Predictive modelling"
        title="Develop Machine Learning Models Around Your Business Needs"
        text={[
          "Machine learning models can be developed for specific analytical, predictive, classification, recommendation, and data processing requirements using suitable datasets and approaches.",
          "We develop custom machine learning solutions based on business problems, available data, technical requirements, model evaluation, and application objectives.",
        ]}
        items={MODEL_ITEMS}
      >
        <Screen dark title="Model workspace">
          <div className="mx-ws">
            <div>
              <small>Dataset</small>
              <ul>
                <li>Records in scope</li>
                <li>Cleaned fields</li>
                <li>Train / validation split</li>
              </ul>
            </div>
            <div>
              <small>Evaluation</small>
              <TrainingCurve />
            </div>
          </div>
          <div className="mx-matrix" role="img" aria-label="Illustrative classification outcome grid">
            <span className="hit">Correct yes</span>
            <span>Missed yes</span>
            <span>False yes</span>
            <span className="hit">Correct no</span>
          </div>
          <p className="mx-cap">Metrics are chosen to suit the problem. A model is not released on a single number.</p>
        </Screen>
      </SplitSection>

      <SplitSection
        id="forecasting-planning"
        tint
        kicker="Forecasting & planning"
        title="Support Business Planning With Intelligent Forecasts"
        text={[
          "Forecasting solutions can help businesses estimate future demand, sales, revenue, operations, and trends using relevant historical information and suitable forecasting approaches.",
          "We develop business forecasting applications designed around operational requirements, available data, and planning objectives.",
        ]}
        items={PLANNING_ITEMS}
      >
        <Screen title="Planning dashboard">
          <ForecastBars />
          <div className="mx-two">
            <div>
              <small>Demand view</small>
              <ForecastChart label="Illustrative demand trend" />
            </div>
            <div>
              <small>Scenario view</small>
              <ul className="mx-scen">
                <li>Low</li>
                <li className="core">Base</li>
                <li>High</li>
              </ul>
            </div>
          </div>
        </Screen>
      </SplitSection>

      <SplitSection
        id="personalization"
        flip
        kicker="Recommendation & personalization"
        title="Create Personalized Experiences Through Intelligent Recommendations"
        text={[
          "Recommendation systems use relevant user information, interaction data, preferences, and contextual signals to identify products, content, or services that may be relevant to individual users.",
          "We develop recommendation systems tailored to ecommerce, digital platforms, business applications, content experiences, and personalization requirements.",
        ]}
        items={PERSONALIZATION_ITEMS}
      >
        <Screen title="Personalization console">
          <div className="mx-profile">
            <span aria-hidden="true" />
            <div>
              <b>User profile</b>
              <small>Preferences · Recent interactions</small>
            </div>
          </div>
          <div className="mx-recs mx-recs--light">
            {["Product A", "Article B", "Offer C"].map((n, i) => (
              <div key={n} className={i === 0 ? "top" : ""}>
                <span aria-hidden="true" />
                <b>{n}</b>
                <small>Matches a stated preference</small>
              </div>
            ))}
          </div>
          <p className="mx-cap">The same engine can serve a store, an app, or an email, through an API.</p>
        </Screen>
      </SplitSection>

      <SplitSection
        id="customer-intelligence"
        tint
        kicker="Customer data & behaviour"
        title="Understand Your Customers Through Intelligent Analytics"
        text={[
          "Customer behaviour analytics helps businesses explore customer interactions, preferences, activity patterns, purchasing behaviour, engagement, and customer journey information.",
          "We develop customer analytics applications and data-driven solutions that help businesses understand relevant customer patterns and support informed business strategies.",
        ]}
        items={CUSTOMER_ITEMS}
      >
        <Screen title="Customer intelligence">
          <ol className="mx-funnel mx-funnel--light" aria-label="Illustrative customer journey stages">
            {["Visit", "Browse", "Add to cart", "Purchase"].map((s, i) => (
              <li key={s} style={{ width: `${100 - i * 16}%` }}>
                {s}
              </li>
            ))}
          </ol>
          <div className="mx-two">
            <div>
              <small>Segments</small>
              <Donut />
            </div>
            <div>
              <small>Engagement pattern</small>
              <Heat />
            </div>
          </div>
        </Screen>
      </SplitSection>

      <SplitSection
        id="data-processing"
        flip
        kicker="Intelligent data processing"
        title="Make Data Processing More Intelligent and Efficient"
        text={[
          "Intelligent data processing solutions combine data workflows, processing techniques, machine learning, and analytics to help businesses organize and interpret information.",
          "We develop data processing applications tailored to data requirements, operational processes, information workflows, and business use cases.",
        ]}
        items={PROCESSING_ITEMS}
      >
        <Screen dark title="Processing workspace">
          <Chain steps={["Data input", "Processing", "Classification", "Analysis", "Insights"]} dark />
          <table className="mx-table">
            <thead>
              <tr>
                <th>Record</th>
                <th>Class</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Document 1</td>
                <td>Invoice</td>
                <td>Auto</td>
              </tr>
              <tr className="core">
                <td>Document 2</td>
                <td>Unclear</td>
                <td>Person checks</td>
              </tr>
              <tr>
                <td>Document 3</td>
                <td>Request</td>
                <td>Auto</td>
              </tr>
            </tbody>
          </table>
        </Screen>
      </SplitSection>
    </>
  );
}

/* Integration & technology ------------------------------------------ */

function Integrations() {
  return (
    <section id="integration" className="mx-section mx-section--navy">
      <div className="mx-wrap mx-split mx-split--top">
        <Reveal className="mx-stack">
          <p className="mx-kicker mx-kicker--cyan">Machine learning integration</p>
          <h2 className="mx-h2">Bring Machine Learning Into Your Existing Software</h2>
          <div className="mx-prose">
            <p>
              Machine learning functionality can be integrated into websites, mobile applications, custom software, business platforms, dashboards, and operational systems.
            </p>
            <p>
              We help businesses integrate machine learning models and analytical functionality into applications according to project requirements, technical architecture, data workflows, and intended use. Where an existing AI service is the better fit, that is an{" "}
              <Link href="/services/ai-integration-api-solutions">AI integration and API</Link> project instead.
            </p>
          </div>
          <ul className="mx-tiles mx-tiles--on-dark">
            {INTEGRATION_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="mx-nodes">
          <ul>
            {INTEGRATION_NODES.map((name) => (
              <li key={name} className={name === "ML model" ? "core" : ""}>
                {name}
              </li>
            ))}
          </ul>
          <small>An architecture sketch. A box is connected only when the project includes it.</small>
        </Reveal>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section id="technology" className="mx-section mx-section--white">
      <div className="mx-wrap">
        <Reveal className="mx-sec-head">
          <p className="mx-kicker">Chosen for the data you have</p>
          <h2 className="mx-h2">Built With Modern Machine Learning &amp; Data Technologies</h2>
          <p className="mx-sub">
            We develop machine learning solutions using suitable data processing techniques, analytical methods, model development approaches, application architectures, and integration technologies selected according to project requirements.
          </p>
        </Reveal>
        <ol className="mx-pipe">
          {TECH_FLOW.map((step, i) => (
            <li key={step} className={i === 2 ? "core" : ""}>
              {step}
            </li>
          ))}
        </ol>
        <div className="mx-tech">
          {TECH_CATEGORIES.map((category) => (
            <Reveal key={category.title}>
              <div className="mx-tech-card">
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

/* Industries, why, process, quality --------------------------------- */

function Industries() {
  return (
    <section id="industries" className="mx-section mx-section--tint">
      <div className="mx-wrap">
        <Reveal className="mx-sec-head">
          <p className="mx-kicker">Industries</p>
          <h2 className="mx-h2">Machine Learning Solutions Across Industries</h2>
          <p className="mx-sub">Examples of where this work is used. Each needs the right data, and regulated sectors have extra requirements.</p>
        </Reveal>
        <div className="mx-ind">
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
    <section className="mx-section mx-section--white">
      <div className="mx-wrap mx-split mx-split--top">
        <Reveal className="mx-stack">
          <p className="mx-kicker">Why RoyalTech Innovation</p>
          <h2 className="mx-h2">Your Partner for Machine Learning &amp; Data Intelligence</h2>
          <p className="mx-prose-p">
            RoyalTech Innovation is a machine learning development company in Mohali, working with teams in Chandigarh and across Punjab. A project starts from the decision and the data, then the model.
          </p>
          <div className="mx-aside">
            <small>How a prediction earns its place</small>
            <p>It is checked on data the model has not seen, its limits are written down, and a person can review it where it matters.</p>
          </div>
        </Reveal>
        <div className="mx-why">
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
    <section id="process" className="mx-section mx-section--tint">
      <div className="mx-wrap">
        <Reveal className="mx-sec-head mx-sec-head--center">
          <p className="mx-kicker">Delivery</p>
          <h2 className="mx-h2">From Business Data to Intelligent Solutions</h2>
          <p className="mx-sub">Eight stages from the first conversation to a model that is monitored and maintained.</p>
        </Reveal>
        <ol className="mx-steps">
          {PROCESS.map((step, i) => (
            <li key={step.title}>
              <Reveal className="mx-step">
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
    <section id="quality" className="mx-section mx-section--white">
      <div className="mx-wrap mx-split mx-split--top">
        <Reveal className="mx-stack">
          <p className="mx-kicker">Data responsibility</p>
          <h2 className="mx-h2">Build Machine Learning Solutions With Data Quality &amp; Reliability</h2>
          <p className="mx-prose-p">
            Machine learning solutions depend on relevant data, appropriate modelling approaches, validation, evaluation, and ongoing review. We plan projects around data requirements, intended use cases, model limitations, technical considerations, and appropriate safeguards. No prediction is presented as certain.
          </p>
          <ul className="mx-tiles">
            {QUALITY_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <ol className="mx-quality">
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
    <section id="faq" className="mx-section mx-section--tint">
      <div className="mx-wrap mx-wrap--narrow">
        <Reveal className="mx-sec-head mx-sec-head--center">
          <p className="mx-kicker">Questions</p>
          <h2 className="mx-h2">Frequently Asked Questions About Machine Learning</h2>
        </Reveal>
        <div className="mx-acc">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className={`mx-acc-i${isOpen ? " on" : ""}`}>
                <h3>
                  <button type="button" id={`mx-faq-q-${i}`} aria-expanded={isOpen} aria-controls={`mx-faq-a-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                    <span>
                      {i + 1}. {faq.q}
                    </span>
                    <span className="mx-acc-ic" aria-hidden="true" />
                  </button>
                </h3>
                <div id={`mx-faq-a-${i}`} role="region" aria-labelledby={`mx-faq-q-${i}`} className="mx-acc-p" inert={!isOpen}>
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
    <section className="mx-section mx-final-wrap">
      <div className="mx-wrap">
        <Reveal className="mx-final">
          <div>
            <span className="mx-final-tag">Start with the decision you want to support</span>
            <h2>Ready to Turn Your Data Into Intelligent Business Insights?</h2>
            <p>
              Whether you want to develop predictive analytics, forecast business trends, build recommendation systems, understand customer behaviour, or create intelligent data processing applications, RoyalTech Innovation can help you plan and build the right solution.
            </p>
            <div className="mx-cta-row">
              <Lead service="Final CTA" title="Start Your Machine Learning Project" className="mx-btn mx-btn--cyan mx-btn--lg">
                Start Your Machine Learning Project
                <Arrow />
              </Lead>
              <Lead service="Final CTA" title="Discuss Your Data Requirements" className="mx-btn mx-btn--outline mx-btn--lg">
                Discuss Your Data Requirements
              </Lead>
            </div>
          </div>
          <div className="mx-final-card">
            <div className="mx-final-card-h">
              <strong>What we need first</strong>
              <span>Mohali · Chandigarh · Punjab</span>
            </div>
            <ForecastChart label="Illustrative forecast chart" />
            <ol>
              <li>The decision the prediction should support</li>
              <li>The records that describe it</li>
              <li>Who reviews the output</li>
            </ol>
            <div className="mx-final-contact">
              <a href={CONTACT.phoneHref}>
                <small>Call</small>
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`}>
                <small>Email</small>
                {CONTACT.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function MachineLearningPage({ rootClass = "" }: { rootClass?: string }) {
  return (
    <div className={`svx-root mx-root ${rootClass}`.trim()}>
      <Hero />
      <Intro />
      <Differences />
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
