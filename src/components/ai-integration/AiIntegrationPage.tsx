"use client";

import "@/styles/services-showcase.css";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { useFormModal } from "@/components/FormModal";
import {
  API_ITEMS,
  APP_FEATURES,
  ARCH_ITEMS,
  ARCH_STACK,
  BUSINESS_ITEMS,
  BUSINESS_NODES,
  CAPABILITIES,
  CAPABILITY_FLOW,
  CONTACT,
  CONTROL_LAYERS,
  FAQS,
  HERO_LEAD,
  HERO_PILLARS,
  INDUSTRIES,
  INTRO_NOTE,
  INTRO_PARAGRAPHS,
  PROCESS,
  RELATED_LINKS,
  SECURITY_ITEMS,
  SEO_H1,
  SERVICES,
  TECH_CATEGORIES,
  TECH_FLOW,
  USE_CASES,
  WHY,
  WORK_STAGES,
  type IntegrationService,
} from "@/data/ai-integration-page";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = node;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    el.classList.add("ix-pre");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("ix-in");
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
  className = "ix-btn ix-btn--primary",
  children,
}: {
  service: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  const { openForm } = useFormModal();
  return (
    <button type="button" className={className} onClick={() => openForm({ title, source: "ai-integration-page", service })}>
      {children}
    </button>
  );
}

const Arrow = () => (
  <svg className="ix-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

type Board = "architecture" | "request" | "status";

function HeroBoard() {
  const [board, setBoard] = useState<Board>("architecture");
  const tabs: { key: Board; label: string }[] = [
    { key: "architecture", label: "Architecture" },
    { key: "request", label: "Request" },
    { key: "status", label: "Status" },
  ];

  return (
    <div className="ix-board">
      <div className="ix-board-h">
        <div className="ix-board-title">
          <span className="ix-dots" aria-hidden="true">
            <i />
            <i />
            <i className="on" />
          </span>
          <span>Integration layer</span>
        </div>
        <div className="ix-tabs" role="tablist" aria-label="Integration preview">
          {tabs.map((t) => (
            <button key={t.key} type="button" role="tab" aria-selected={board === t.key} className={board === t.key ? "on" : ""} onClick={() => setBoard(t.key)}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {board === "architecture" && (
        <div className="ix-board-b">
          <ol className="ix-stack-flow">
            {[
              ["Applications", "Website · software · mobile"],
              ["Integration layer", "Auth · mapping · routing"],
              ["AI models", "Selected per feature"],
              ["Systems", "Database · CRM · APIs"],
            ].map(([title, detail], i) => (
              <li key={title} className={i === 1 ? "core" : ""}>
                <b>{title}</b>
                <small>{detail}</small>
              </li>
            ))}
          </ol>
        </div>
      )}

      {board === "request" && (
        <div className="ix-board-b">
          <div className="ix-req">
            <div>
              <small>POST /v1/assist</small>
              <strong>Application request</strong>
              <code>{`{ "task": "summarize", "source": "record-1842" }`}</code>
            </div>
            <div className="ok">
              <small>200 · structured response</small>
              <strong>Returned to the app</strong>
              <code>{`{ "summary": "…", "fields": ["owner", "status"] }`}</code>
            </div>
          </div>
        </div>
      )}

      {board === "status" && (
        <div className="ix-board-b">
          <ul className="ix-status">
            {[
              ["Model route", "Connected"],
              ["API auth", "Valid"],
              ["App callback", "200"],
              ["Data write", "Scoped"],
            ].map(([name, state]) => (
              <li key={name}>
                <b>{name}</b>
                <span>{state}</span>
              </li>
            ))}
          </ul>
          <p className="ix-board-note">Status shown for a scoped integration. A system is connected when its API is available and the project includes it.</p>
        </div>
      )}

      <div className="ix-board-f">
        <div>
          <small>Layer</small>
          <b>AI integration</b>
        </div>
        <div>
          <small>Exchange</small>
          <b>Request / response</b>
        </div>
        <div>
          <small>Access</small>
          <b>Authenticated</b>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="ix-hero" aria-labelledby="ix-h1">
      <div className="ix-wrap ix-hero-grid">
        <div className="ix-hero-copy">
          <nav aria-label="Breadcrumb" className="ix-crumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">AI Integration &amp; API Solutions</li>
            </ol>
          </nav>
          <p className="ix-eyebrow">
            <span className="ix-pulse" aria-hidden="true" />
            AI integration &amp; API development
          </p>
          <h1 id="ix-h1" className="ix-h1">
            {SEO_H1}
          </h1>
          <p className="ix-lead">{HERO_LEAD}</p>
          <ul className="ix-pills">
            {HERO_PILLARS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="ix-cta-row">
            <a href="#services-overview" className="ix-btn ix-btn--primary ix-btn--lg">
              Explore AI Integration
              <Arrow />
            </a>
            <Lead service="Hero" title="Discuss Your Integration Project" className="ix-btn ix-btn--ghost ix-btn--lg">
              Discuss Your Integration Project
            </Lead>
          </div>
        </div>
        <div className="ix-hero-visual">
          <HeroBoard />
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="ix-section ix-section--white">
      <div className="ix-wrap ix-split ix-split--wide">
        <Reveal className="ix-stack">
          <p className="ix-kicker">Connected software</p>
          <h2 className="ix-h2">Bring AI Capabilities Into the Systems You Already Use</h2>
          <div className="ix-prose">
            {INTRO_PARAGRAPHS.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="ix-note-line">{INTRO_NOTE}</p>
          <p className="ix-related">
            Related work:{" "}
            {RELATED_LINKS.map((link, i) => (
              <span key={link.href}>
                {i > 0 ? ", " : null}
                <Link href={link.href}>{link.label}</Link>
              </span>
            ))}
            . Ecommerce platforms, ERP, and business automation are connected when those systems are part of the project.
          </p>
        </Reveal>
        <Reveal className="ix-panel">
          <p>Exchange between an application and a model</p>
          <div className="ix-panel-row">
            <div>
              <small>Application</small>
              <b>Product record</b>
            </div>
            <span aria-hidden="true">→</span>
            <div className="core">
              <small>API</small>
              <b>Integration</b>
            </div>
            <span aria-hidden="true">→</span>
            <div>
              <small>Model</small>
              <b>Response</b>
            </div>
          </div>
          <dl>
            <div>
              <dt>In</dt>
              <dd>The fields the feature is allowed to send.</dd>
            </div>
            <div>
              <dt>Out</dt>
              <dd>A structured result the application can store or show.</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceVisual({ id }: { id: string }) {
  if (id === "ai-model-integration") {
    return (
      <div className="ix-visual">
        <p>Application → integration layer → model → output</p>
        <ol>
          {["Application", "Integration layer", "AI model", "Processing", "Output"].map((step, i) => (
            <li key={step} className={i === 1 ? "core" : i === 4 ? "ok" : ""}>
              {step}
            </li>
          ))}
        </ol>
      </div>
    );
  }
  if (id === "openai-gemini-integration") {
    return (
      <div className="ix-visual ix-visual--providers">
        <p>Provider selected for the feature</p>
        <div className="ix-providers">
          <div>
            <small>Model route</small>
            <b>OpenAI API</b>
            <span>Text and assistant features when the project uses this API</span>
          </div>
          <div>
            <small>Model route</small>
            <b>Gemini API</b>
            <span>Used when that API fits the application and the scope includes it</span>
          </div>
        </div>
        <small className="ix-visual-note">Names identify the APIs we can connect. They are not partnership marks.</small>
      </div>
    );
  }
  if (id === "custom-ai-apis") {
    return (
      <div className="ix-visual ix-visual--api">
        <div className="ix-endpoint">
          <span>POST</span>
          <code>/api/ai/process</code>
          <em>Auth required</em>
        </div>
        <ol>
          {["Application request", "Custom AI API", "AI processing", "Structured response", "Application"].map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    );
  }
  if (id === "third-party-ai-integration") {
    return (
      <div className="ix-visual">
        <p>Application ↔ integration layer ↔ external AI service</p>
        <div className="ix-hub">
          <div className="core">Your application</div>
          <ul>
            {["External AI API", "Tool endpoint", "Workflow hook", "Status"].map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
        <small className="ix-visual-note">Services are named in the project, not assumed from a logo wall.</small>
      </div>
    );
  }
  return (
    <div className="ix-visual">
      <p>Where the same AI layer can sit</p>
      <ul className="ix-apps">
        {["Website", "Mobile app", "Business software", "Database", "AI services"].map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

function Services() {
  return (
    <div id="services-overview">
      <section className="ix-section ix-section--tint">
        <div className="ix-wrap">
          <Reveal className="ix-sec-head">
            <p className="ix-kicker">Five integration services</p>
            <h2 className="ix-h2">AI Integration Solutions for Modern Businesses</h2>
            <p className="ix-sub">Each service connects AI to software in a different way: a model inside an application, a named provider API, a custom endpoint, an external service, or an existing product.</p>
          </Reveal>
        </div>
      </section>
      {SERVICES.map((service) => (
        <ServiceBlock key={service.id} service={service} />
      ))}
    </div>
  );
}

function ServiceBlock({ service }: { service: IntegrationService }) {
  const dark = service.tone === "dark";
  return (
    <section id={service.id} className={`ix-section ix-svc${dark ? " ix-svc--dark" : " ix-section--white"}`}>
      <div className={`ix-wrap ix-svc-grid${service.visualFirst ? " ix-svc-grid--visual" : ""}`}>
        <Reveal className="ix-stack">
          <p className="ix-kicker">{service.number} · {service.eyebrow}</p>
          <h3 className="ix-h3">{service.title}</h3>
          <div className="ix-prose">
            {service.paragraphs.map((p) => (
              <p key={p} className="ix-svc-p">
                {p}
              </p>
            ))}
          </div>
          <ul className="ix-tiles">
            {service.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Lead service={service.service} title={service.cta} className={dark ? "ix-btn ix-btn--white" : "ix-btn ix-btn--primary"}>
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
    <section id="capabilities" className="ix-section ix-section--navy">
      <div className="ix-wrap">
        <Reveal className="ix-sec-head">
          <p className="ix-kicker ix-kicker--cyan">What the connection covers</p>
          <h2 className="ix-h2 ix-h2--light">Connect AI Technologies With Real Business Applications</h2>
          <p className="ix-sub ix-sub--light">
            We combine AI technologies, APIs, software development, backend architecture, data workflows, and application integration to build connected AI-powered solutions.
          </p>
        </Reveal>
        <Reveal className="ix-pipe" aria-hidden="false">
          <ol>
            {CAPABILITY_FLOW.map((step, i) => (
              <li key={step} className={i === 2 ? "core" : ""}>
                {step}
              </li>
            ))}
          </ol>
        </Reveal>
        <ul className="ix-cap-list">
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
    <section id="how-it-works" className="ix-section ix-section--white">
      <div className="ix-wrap">
        <Reveal className="ix-sec-head">
          <p className="ix-kicker">How a connection is built</p>
          <h2 className="ix-h2">From AI Technologies to Connected Digital Experiences</h2>
          <p className="ix-sub">AI integration combines applications, APIs, AI models, data, and software architecture to introduce intelligent functionality into digital systems.</p>
        </Reveal>
        <ol className="ix-stages">
          {WORK_STAGES.map((stage, i) => (
            <li key={stage.title}>
              <Reveal className="ix-stage">
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

function Applications() {
  const [after, setAfter] = useState(true);
  return (
    <section id="applications" className="ix-section ix-section--tint">
      <div className="ix-wrap ix-split ix-split--top">
        <Reveal className="ix-stack">
          <p className="ix-kicker">Existing products</p>
          <h2 className="ix-h2">Make Your Existing Applications Smarter With AI</h2>
          <p className="ix-prose-p">
            AI integration can introduce intelligent functionality into existing digital products without requiring businesses to completely replace their software systems. We help integrate suitable AI capabilities into applications based on business requirements, technical architecture, functionality, and user needs.
          </p>
          <ul className="ix-tiles">
            {APP_FEATURES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="ix-ba">
          <div className="ix-tabs" role="tablist" aria-label="Application before and after integration">
            <button type="button" role="tab" aria-selected={!after} className={after ? "" : "on"} onClick={() => setAfter(false)}>
              Before
            </button>
            <button type="button" role="tab" aria-selected={after} className={after ? "on" : ""} onClick={() => setAfter(true)}>
              After
            </button>
          </div>
          {!after ? (
            <ul>
              <li>Traditional application screens</li>
              <li>Manual information processing</li>
              <li>Basic search and forms</li>
              <li>Systems that do not share an AI feature</li>
            </ul>
          ) : (
            <ul>
              <li>AI-powered functionality in the same app</li>
              <li>Intelligent information processing</li>
              <li>Connected AI services through an API</li>
              <li>A workflow that returns a structured result</li>
            </ul>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function ApiConnectivity() {
  return (
    <section id="api-connectivity" className="ix-section ix-section--white">
      <div className="ix-wrap ix-split ix-split--wide">
        <Reveal className="ix-gateway">
          <p>Application request → API gateway → authentication → AI service → response</p>
          <ol>
            {[
              ["Request", "POST /v1/process"],
              ["Gateway", "Route and validate"],
              ["Auth", "Application key"],
              ["AI service", "Model call"],
              ["Response", "JSON back to the app"],
            ].map(([title, detail]) => (
              <li key={title}>
                <b>{title}</b>
                <small>{detail}</small>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal className="ix-stack">
          <p className="ix-kicker">APIs</p>
          <h2 className="ix-h2">Build Reliable Connections Between Applications and AI</h2>
          <p className="ix-prose-p">
            APIs enable applications, services, AI models, and business systems to exchange information and communicate through defined interfaces. We develop and integrate APIs that help connect AI capabilities with software applications, databases, workflows, and external services.
          </p>
          <ul className="ix-tiles ix-tiles--two">
            {API_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function BusinessSystems() {
  return (
    <section id="business-systems" className="ix-section ix-section--navy">
      <div className="ix-wrap ix-split">
        <Reveal className="ix-stack">
          <p className="ix-kicker ix-kicker--cyan">Business software</p>
          <h2 className="ix-h2 ix-h2--light">Connect AI With Your Business Software and Systems</h2>
          <p className="ix-sub ix-sub--light">
            Businesses often rely on multiple applications to manage sales, customer relationships, operations, finance, communication, and internal workflows. AI integration can introduce intelligent capabilities into these systems and help connect information, functionality, and workflows across the business technology environment.
          </p>
          <ul className="ix-tiles ix-tiles--on-dark">
            {BUSINESS_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="ix-sys">
          <p>CRM · AI layer · ERP · database · website · dashboard</p>
          <ul>
            {BUSINESS_NODES.map((name) => (
              <li key={name} className={name === "AI layer" ? "core" : ""}>
                {name}
              </li>
            ))}
          </ul>
          <small>An architecture sketch. Each system is linked when it can be integrated and the scope includes it.</small>
        </Reveal>
      </div>
    </section>
  );
}

function UseCases() {
  const [idx, setIdx] = useState(0);
  const item = USE_CASES[idx];
  return (
    <section id="use-cases" className="ix-section ix-section--white">
      <div className="ix-wrap">
        <Reveal className="ix-sec-head">
          <p className="ix-kicker">Use cases</p>
          <h2 className="ix-h2">Practical AI Integration for Business Applications</h2>
          <p className="ix-sub">AI integration can introduce intelligent capabilities into business applications, digital products, software systems, and workflows based on specific requirements.</p>
        </Reveal>
        <Reveal className="ix-cases">
          <div className="ix-case-list" role="tablist" aria-label="AI integration use cases">
            {USE_CASES.map((useCase, i) => (
              <button key={useCase.id} type="button" role="tab" aria-selected={i === idx} className={i === idx ? "on" : ""} onClick={() => setIdx(i)}>
                {useCase.title}
              </button>
            ))}
          </div>
          <div className="ix-case-card" role="tabpanel">
            <span>Application feature</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className="ix-case-flow">
              <b>App</b>
              <span aria-hidden="true">→</span>
              <b>API</b>
              <span aria-hidden="true">→</span>
              <b>Model</b>
              <span aria-hidden="true">→</span>
              <b>Result</b>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture" className="ix-section ix-section--tint">
      <div className="ix-wrap ix-split ix-split--top">
        <Reveal className="ix-stack">
          <p className="ix-kicker">Architecture</p>
          <h2 className="ix-h2">Build Connected, Scalable AI Integration Architecture</h2>
          <p className="ix-prose-p">
            AI integration architecture connects applications, AI models, APIs, backend services, data sources, and business systems through structured interfaces and integration layers. We plan integration architectures based on technical requirements, application environments, data workflows, functionality, and future scalability.
          </p>
          <ul className="ix-tiles">
            {ARCH_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="ix-layers">
          <p>From the screen to the systems</p>
          <ol>
            {ARCH_STACK.map((layer, i) => (
              <li key={layer} className={i === 2 ? "core" : ""}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {layer}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section id="technology" className="ix-section ix-section--white">
      <div className="ix-wrap">
        <Reveal className="ix-sec-head">
          <p className="ix-kicker">Technology choices</p>
          <h2 className="ix-h2">Built With Modern AI, APIs &amp; Software Technologies</h2>
          <p className="ix-sub">
            We develop AI integration solutions using suitable AI services, APIs, backend technologies, application architectures, databases, and integration tools selected according to project requirements. A technology is used when it fits the integration, not because it appears on a list.
          </p>
        </Reveal>
        <Reveal className="ix-pipe ix-pipe--light">
          <ol>
            {TECH_FLOW.map((step, i) => (
              <li key={step} className={i === 1 ? "core" : ""}>
                {step}
              </li>
            ))}
          </ol>
        </Reveal>
        <div className="ix-tech">
          {TECH_CATEGORIES.map((category) => (
            <Reveal key={category.title}>
              <div className="ix-tech-card">
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
  const [idx, setIdx] = useState(0);
  const item = INDUSTRIES[idx];
  return (
    <section id="industries" className="ix-section ix-section--tint">
      <div className="ix-wrap">
        <Reveal className="ix-sec-head">
          <p className="ix-kicker">Industries</p>
          <h2 className="ix-h2">AI Integration Solutions Across Industries</h2>
          <p className="ix-sub">Select an industry to see the kind of application connection this work usually supports. These are planning examples, not a claim that every system is already integrated.</p>
        </Reveal>
        <Reveal className="ix-ind">
          <div className="ix-ind-list" role="tablist" aria-label="Industries">
            {INDUSTRIES.map((industry, i) => (
              <button key={industry.name} type="button" role="tab" aria-selected={i === idx} className={i === idx ? "on" : ""} onClick={() => setIdx(i)}>
                {industry.name}
              </button>
            ))}
          </div>
          <div className="ix-ind-card" role="tabpanel">
            <span>{item.name}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="ix-section ix-section--white">
      <div className="ix-wrap ix-split ix-split--top">
        <Reveal className="ix-stack">
          <p className="ix-kicker">Why RoyalTech Innovation</p>
          <h2 className="ix-h2">Your Partner for AI Integration &amp; Intelligent Software</h2>
          <p className="ix-prose-p">
            RoyalTech Innovation is an AI integration company in Mohali and works with teams in Chandigarh and across Punjab. Integration work starts from the application you already run, then connects the model, API, or service that feature needs.
          </p>
          <div className="ix-note">
            <small>How a connection is scoped</small>
            <p>A system is integrated when its API is available, the data it may exchange is defined, and the project includes that connection.</p>
          </div>
        </Reveal>
        <Reveal className="ix-why">
          {WHY.map((item) => (
            <div key={item.tag}>
              <span>{item.tag}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="ix-section ix-section--tint">
      <div className="ix-wrap">
        <Reveal className="ix-sec-head ix-sec-head--center">
          <p className="ix-kicker">Delivery</p>
          <h2 className="ix-h2">From Integration Requirements to Connected AI Systems</h2>
          <p className="ix-sub">Eight stages from the first conversation to an integration that is deployed, tested, and maintained.</p>
        </Reveal>
        <ol className="ix-steps">
          {PROCESS.map((step, i) => (
            <li key={step.title}>
              <Reveal className="ix-step">
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

function Security() {
  return (
    <section id="security" className="ix-section ix-section--white">
      <div className="ix-wrap ix-split">
        <Reveal className="ix-stack">
          <p className="ix-kicker">Controls</p>
          <h2 className="ix-h2">Connected AI Systems With the Right Controls</h2>
          <p className="ix-prose-p">
            AI integrations should consider authentication, permissions, data handling, API security, error handling, monitoring, and system reliability according to the integration requirements. We plan integration solutions around the intended functionality, technical environment, access requirements, data flow, and appropriate safeguards.
          </p>
          <ul className="ix-tiles ix-tiles--two">
            {SECURITY_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="ix-controls">
          <p>Control points on the connection</p>
          {CONTROL_LAYERS.map((layer) => (
            <div key={layer.title}>
              <div>
                <b>{layer.title}</b>
                <small>{layer.tag}</small>
              </div>
              <p>{layer.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="ix-section ix-section--tint">
      <div className="ix-wrap ix-wrap--narrow">
        <Reveal className="ix-sec-head ix-sec-head--center">
          <p className="ix-kicker">Questions</p>
          <h2 className="ix-h2">Frequently Asked Questions About AI Integration</h2>
        </Reveal>
        <div className="ix-acc">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className={`ix-acc-i${isOpen ? " on" : ""}`}>
                <h3>
                  <button type="button" id={`ix-faq-q-${i}`} aria-expanded={isOpen} aria-controls={`ix-faq-a-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                    <span>
                      {i + 1}. {faq.q}
                    </span>
                    <span className="ix-acc-ic" aria-hidden="true" />
                  </button>
                </h3>
                <div id={`ix-faq-a-${i}`} role="region" aria-labelledby={`ix-faq-q-${i}`} className="ix-acc-p" inert={!isOpen}>
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
    <section className="ix-section ix-final-wrap">
      <div className="ix-wrap">
        <Reveal className="ix-final">
          <div>
            <span className="ix-final-tag">Start with the system you want to connect</span>
            <h2>Ready to Connect AI With Your Business?</h2>
            <p>
              Whether you want to integrate AI models, connect OpenAI or Gemini, develop custom AI APIs, introduce third-party AI services, or add AI functionality to existing applications, RoyalTech Innovation can help you plan and build the right integration solution.
            </p>
            <div className="ix-cta-row">
              <Lead service="Final CTA" title="Start Your AI Integration Project" className="ix-btn ix-btn--white ix-btn--lg">
                Start Your AI Integration Project
                <Arrow />
              </Lead>
              <Lead service="Final CTA" title="Discuss Your Technical Requirements" className="ix-btn ix-btn--outline ix-btn--lg">
                Discuss Your Technical Requirements
              </Lead>
            </div>
          </div>
          <div className="ix-final-card">
            <div className="ix-final-card-h">
              <strong>Integration sketch</strong>
              <span>Mohali · Chandigarh · Punjab</span>
            </div>
            <ol>
              <li>Application</li>
              <li>API</li>
              <li>Model</li>
              <li>Response</li>
            </ol>
            <div className="ix-final-contact">
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

export default function AiIntegrationPage({ rootClass = "" }: { rootClass?: string }) {
  return (
    <div className={`svx-root ix-root ${rootClass}`.trim()}>
      <Hero />
      <Intro />
      <Services />
      <Capabilities />
      <HowItWorks />
      <Applications />
      <ApiConnectivity />
      <BusinessSystems />
      <UseCases />
      <Architecture />
      <Technology />
      <Industries />
      <Why />
      <Process />
      <Security />
      <Faq />
      <FinalCta />
    </div>
  );
}
