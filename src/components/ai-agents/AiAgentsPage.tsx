"use client";

import "@/styles/services-showcase.css";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { useFormModal } from "@/components/FormModal";
import {
  AGENT_ROLES,
  ARCH_LAYERS,
  CAPABILITIES,
  CAPABILITY_PIPELINE,
  CONTACT,
  CONTROL_LAYERS,
  FAQS,
  HERO_LEAD,
  HERO_PILLARS,
  INDUSTRIES,
  INTEGRATION_ITEMS,
  INTEGRATION_NODES,
  INTRO_PARAGRAPHS,
  PROCESS,
  RELATED_LINKS,
  SECURITY_ITEMS,
  SEO_H1,
  SERVICES,
  TECH_CATEGORIES,
  USE_CASES,
  WHY,
  WORK_STAGES,
  WORKFLOW_ITEMS,
  type AgentService,
} from "@/data/ai-agents-page";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = node;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    el.classList.add("ag-pre");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("ag-in");
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
  className = "ag-btn ag-btn--primary",
  children,
}: {
  service: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  const { openForm } = useFormModal();
  return (
    <button type="button" className={className} onClick={() => openForm({ title, source: "ai-agents-page", service })}>
      {children}
    </button>
  );
}

const Arrow = () => (
  <svg className="ag-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Hero visual                                                         */
/* ------------------------------------------------------------------ */

type Board = "agent" | "workflow" | "systems";

const AGENT_STEPS = [
  { label: "Request received", detail: "Qualify inbound lead and open a CRM task", state: "Done" },
  { label: "Plan", detail: "Check duplicate, assign owner, draft the first note", state: "Running" },
  { label: "Awaiting approval", detail: "A person confirms the owner before the record is written", state: "Hold" },
];

function HeroBoard() {
  const [board, setBoard] = useState<Board>("agent");
  const tabs: { key: Board; label: string }[] = [
    { key: "agent", label: "Agent run" },
    { key: "workflow", label: "Workflow" },
    { key: "systems", label: "Systems" },
  ];

  return (
    <div className="ag-board">
      <div className="ag-board-h">
        <div className="ag-board-title">
          <span className="ag-dots" aria-hidden="true">
            <i />
            <i />
            <i className="on" />
          </span>
          <span>Automation workspace</span>
        </div>
        <div className="ag-tabs" role="tablist" aria-label="Automation preview">
          {tabs.map((t) => (
            <button key={t.key} type="button" role="tab" aria-selected={board === t.key} className={board === t.key ? "on" : ""} onClick={() => setBoard(t.key)}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {board === "agent" && (
        <div className="ag-board-b">
          <div className="ag-run-h">
            <div>
              <small>AI agent · sales operations</small>
              <strong>Task run in progress</strong>
            </div>
            <span className="ag-chip">Human approval on</span>
          </div>
          <ol className="ag-run">
            {AGENT_STEPS.map((step) => (
              <li key={step.label} className={step.state === "Running" ? "run" : step.state === "Hold" ? "hold" : ""}>
                <span>{step.state}</span>
                <div>
                  <b>{step.label}</b>
                  <small>{step.detail}</small>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {board === "workflow" && (
        <div className="ag-board-b">
          <p className="ag-flow-label">Trigger → Process → Decision → Action → Done</p>
          <ol className="ag-nodes">
            {[
              ["Trigger", "New form submission"],
              ["Process", "Validate required fields"],
              ["Decision", "Existing customer?"],
              ["Action", "Create or update CRM"],
              ["Done", "Notify the owner"],
            ].map(([title, detail], i) => (
              <li key={title} className={i === 2 ? "decision" : i === 4 ? "done" : ""}>
                <b>{title}</b>
                <small>{detail}</small>
              </li>
            ))}
          </ol>
        </div>
      )}

      {board === "systems" && (
        <div className="ag-board-b">
          <div className="ag-hub">
            <div className="ag-hub-core">
              <small>Orchestration</small>
              <strong>AI agent</strong>
            </div>
            <ul>
              {["CRM", "ERP", "Inbox", "Database", "Dashboard", "API"].map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
          <p className="ag-board-note">Connections are planned per project. A system is linked when it can be integrated and the scope includes it.</p>
        </div>
      )}

      <div className="ag-board-f">
        <div>
          <small>Run</small>
          <b>Controlled</b>
        </div>
        <div>
          <small>Next gate</small>
          <b className="hold">Human review</b>
        </div>
        <div>
          <small>Systems</small>
          <b>Scoped access</b>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="ag-hero" aria-labelledby="ag-h1">
      <div className="ag-wrap ag-hero-grid">
        <div className="ag-hero-copy">
          <nav aria-label="Breadcrumb" className="ag-crumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">AI Agents &amp; Workflow Automation</li>
            </ol>
          </nav>
          <p className="ag-eyebrow">
            <span className="ag-pulse" aria-hidden="true" />
            AI agents &amp; intelligent workflow automation
          </p>
          <h1 id="ag-h1" className="ag-h1">
            {SEO_H1}
          </h1>
          <p className="ag-lead">{HERO_LEAD}</p>
          <ul className="ag-pills">
            {HERO_PILLARS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="ag-cta-row">
            <Lead service="Hero" title="Automate Your Business" className="ag-btn ag-btn--primary ag-btn--lg">
              Automate Your Business
              <Arrow />
            </Lead>
            <a href="#services-overview" className="ag-btn ag-btn--ghost ag-btn--lg">
              Explore AI Automation
            </a>
          </div>
        </div>
        <div className="ag-hero-visual">
          <HeroBoard />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Intro                                                               */
/* ------------------------------------------------------------------ */

function Intro() {
  return (
    <section className="ag-section ag-section--white">
      <Reveal className="ag-wrap ag-split">
        <div className="ag-stack">
          <p className="ag-kicker">From manual work to connected operations</p>
          <h2 className="ag-h2">Move Beyond Manual Tasks With Intelligent Automation</h2>
          <div className="ag-prose">
            {INTRO_PARAGRAPHS.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="ag-related">
            Related services:{" "}
            {RELATED_LINKS.map((link, i) => (
              <span key={link.href}>
                {i > 0 && ", "}
                <Link href={link.href}>{link.label}</Link>
              </span>
            ))}
            . ERP, ecommerce, and API work is planned inside the automation project when those systems are in scope.
          </p>
        </div>
        <div className="ag-path">
          <div className="ag-path-h">
            <div>
              <small>Illustrative run</small>
              <strong>One request, five controlled steps</strong>
            </div>
            <span>Sample</span>
          </div>
          <ol>
            {[
              ["01", "Request", "A new enquiry arrives from the website form."],
              ["02", "Agent", "The agent reads the fields it is allowed to see."],
              ["03", "Plan", "It checks for a matching record and prepares the next step."],
              ["04", "Systems", "It writes to the CRM only after the rule allows it."],
              ["05", "Result", "The owner gets the task. Exceptions wait for a person."],
            ].map(([n, title, text]) => (
              <li key={n}>
                <span>{n}</span>
                <div>
                  <b>{title}</b>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Service visuals                                                     */
/* ------------------------------------------------------------------ */

function AgentVisual() {
  return (
    <div className="ag-agent">
      <div className="ag-agent-h">
        <div>
          <small>Agent workspace</small>
          <strong>Lead qualification run</strong>
        </div>
        <span>Approval required</span>
      </div>
      <ol className="ag-chain">
        {["User request", "AI agent", "Task plan", "CRM write", "Result"].map((step, i) => (
          <li key={step} className={i === 3 ? "gate" : ""}>
            {step}
          </li>
        ))}
      </ol>
      <div className="ag-agent-log">
        <div>
          <b>Plan</b>
          <p>Match the company, assign the sales owner, and draft the activity note.</p>
        </div>
        <div>
          <b>Hold</b>
          <p>Owner assignment waits for approval before the CRM record is updated.</p>
        </div>
      </div>
    </div>
  );
}

function WorkflowVisual() {
  const nodes = [
    ["Trigger", "Deal stage changes"],
    ["Process", "Collect the required fields"],
    ["Decision", "Complete enough to proceed?"],
    ["Action", "Create the handoff task"],
    ["Done", "Workflow closed"],
  ];
  return (
    <div className="ag-wf">
      <div className="ag-wf-h">
        <b>Workflow run</b>
        <small>Status: waiting on a decision</small>
      </div>
      <ol>
        {nodes.map(([title, detail], i) => (
          <li key={title} className={i === 2 ? "decision" : i === 4 ? "done" : ""}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <b>{title}</b>
              <small>{detail}</small>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function BeforeAfter() {
  const [mode, setMode] = useState<"before" | "after">("after");
  const before = ["Manual handoff between inboxes", "The same data typed twice", "No shared status", "Approvals stuck in chat"];
  const after = ["One trigger starts the process", "Systems share the record", "Status is visible on the run", "Approvals sit on a defined step"];
  const items = mode === "before" ? before : after;
  return (
    <div className="ag-ba">
      <div className="ag-ba-switch" role="tablist" aria-label="Process comparison">
        <button type="button" role="tab" aria-selected={mode === "before"} className={mode === "before" ? "on" : ""} onClick={() => setMode("before")}>
          Before
        </button>
        <button type="button" role="tab" aria-selected={mode === "after"} className={mode === "after" ? "on" : ""} onClick={() => setMode("after")}>
          After
        </button>
      </div>
      <ul className={mode}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>Illustrative comparison of a manual process and a structured workflow. Results depend on the process you automate.</p>
    </div>
  );
}

function AiFlowVisual() {
  const steps = ["Business input", "AI processing", "Analysis", "Workflow", "Action"];
  return (
    <div className="ag-aiflow">
      <p>AI-powered path</p>
      <ol>
        {steps.map((step, i) => (
          <li key={step} className={i === 1 ? "ai" : i === 4 ? "done" : ""}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            {step}
          </li>
        ))}
      </ol>
      <div className="ag-aiflow-note">
        <b>Example</b>
        <p>A document is classified, then the workflow files it and asks a person to confirm anything outside the allowed categories.</p>
      </div>
    </div>
  );
}

function IntegrationVisual() {
  return (
    <div className="ag-orbit">
      <div className="ag-orbit-core">
        <small>Central agent</small>
        <strong>Scoped connections</strong>
      </div>
      <ul>
        {INTEGRATION_NODES.map((node) => (
          <li key={node}>{node}</li>
        ))}
      </ul>
    </div>
  );
}

function ServiceVisual({ id }: { id: string }) {
  if (id === "ai-agent-development") return <AgentVisual />;
  if (id === "workflow-automation") return <WorkflowVisual />;
  if (id === "business-process-automation") return <BeforeAfter />;
  if (id === "ai-powered-automation") return <AiFlowVisual />;
  return <IntegrationVisual />;
}

function ServiceBlock({ s }: { s: AgentService }) {
  const copy = (
    <div className="ag-svc-copy">
      <span className="ag-svc-tag">
        {s.number} · {s.eyebrow}
      </span>
      <h3 className="ag-h3">{s.title}</h3>
      {s.paragraphs.map((p) => (
        <p key={p} className="ag-svc-p">
          {p}
        </p>
      ))}
      <ul className="ag-chips">
        {s.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div>
        <Lead service={s.service} title={s.cta} className={`ag-btn ${s.tone === "dark" ? "ag-btn--light" : "ag-btn--primary"}`}>
          {s.cta}
          <Arrow />
        </Lead>
      </div>
    </div>
  );
  const visual = (
    <div className="ag-svc-visual">
      <ServiceVisual id={s.id} />
    </div>
  );
  const visualFirst = s.id === "workflow-automation" || s.id === "ai-powered-automation";
  return (
    <Reveal>
      <article id={s.id} className={`ag-svc ag-svc--${s.tone}`}>
        <div className={`ag-svc-grid${visualFirst ? " ag-svc-grid--rev" : ""}`}>
          {visualFirst ? (
            <>
              {visual}
              {copy}
            </>
          ) : (
            <>
              {copy}
              {visual}
            </>
          )}
        </div>
      </article>
    </Reveal>
  );
}

function Services() {
  return (
    <section id="services-overview" className="ag-section ag-section--tint">
      <div className="ag-wrap">
        <Reveal className="ag-sec-head">
          <p className="ag-kicker">Core automation services</p>
          <h2 className="ag-h2">Intelligent Automation Solutions for Modern Businesses</h2>
          <p className="ag-sub">
            Five ways RoyalTech builds AI agents and automation: custom agents, workflow automation, business process automation, AI-powered automation, and system integration.
          </p>
        </Reveal>
        <div className="ag-svc-list">
          {SERVICES.map((s) => (
            <ServiceBlock key={s.id} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Capabilities + how it works                                         */
/* ------------------------------------------------------------------ */

function Capabilities() {
  return (
    <section id="capabilities" className="ag-section ag-section--white">
      <div className="ag-wrap">
        <Reveal className="ag-sec-head">
          <p className="ag-kicker">What an agent is built to do</p>
          <h2 className="ag-h2">Intelligent Agents Built to Handle Real Business Tasks</h2>
          <p className="ag-sub">
            We design AI agent systems around defined tasks, business logic, workflows, tools, knowledge, integrations, and operational requirements.
          </p>
        </Reveal>
        <Reveal className="ag-pipe">
          <p>User request to result</p>
          <ol>
            {CAPABILITY_PIPELINE.map((step, i) => (
              <li key={step} className={i === 1 ? "hl" : i === 5 ? "ok" : ""}>
                <small>0{i + 1}</small>
                <b>{step}</b>
              </li>
            ))}
          </ol>
        </Reveal>
        <ul className="ag-cap-list">
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
    <section id="how-it-works" className="ag-section ag-section--navy">
      <div className="ag-wrap">
        <Reveal className="ag-sec-head ag-sec-head--center">
          <p className="ag-kicker ag-kicker--cyan">Execution path</p>
          <h2 className="ag-h2 ag-h2--light">From Instructions to Intelligent Actions</h2>
          <p className="ag-sub ag-sub--light">
            AI agents can combine AI capabilities, instructions, business context, tools, and workflows to assist with defined tasks and processes.
          </p>
        </Reveal>
        <ol className="ag-stages">
          {WORK_STAGES.map((stage) => (
            <li key={stage.n}>
              <Reveal className="ag-stage">
                <span>Stage {stage.n}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
                <footer>{stage.tag}</footer>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Workflow dashboard                                                  */
/* ------------------------------------------------------------------ */

function WorkflowSection() {
  return (
    <section id="business-workflow" className="ag-section ag-section--white">
      <div className="ag-wrap ag-split">
        <Reveal className="ag-dash">
          <div className="ag-dash-h">
            <div>
              <small>Workflow monitor</small>
              <strong>Sample operations run</strong>
            </div>
            <span>Illustrative</span>
          </div>
          <ol className="ag-dash-flow">
            {[
              ["Trigger", "Invoice inbox"],
              ["Condition", "Amount within limit"],
              ["Workflow", "Extract and match"],
              ["App", "Finance system"],
              ["Action", "Queue for approval"],
              ["Status", "Waiting"],
            ].map(([title, detail]) => (
              <li key={title}>
                <b>{title}</b>
                <small>{detail}</small>
              </li>
            ))}
          </ol>
          <div className="ag-dash-branch">
            <div>
              <b>If the fields match</b>
              <p>The record moves to the approval step.</p>
            </div>
            <div>
              <b>If they do not</b>
              <p>The run stops and a person is notified.</p>
            </div>
          </div>
        </Reveal>
        <Reveal className="ag-stack">
          <p className="ag-kicker">Business workflow automation</p>
          <h2 className="ag-h2">Connect Every Step of Your Business Workflow</h2>
          <p className="ag-prose-p">
            Workflow automation helps businesses coordinate tasks, information, applications, notifications, and processes through structured automated workflows. We develop workflow solutions designed to connect your business operations and automate repetitive process steps.
          </p>
          <ul className="ag-tiles">
            {WORKFLOW_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Use cases + business agents                                         */
/* ------------------------------------------------------------------ */

function UseCases() {
  const [idx, setIdx] = useState(0);
  const item = USE_CASES[idx];
  return (
    <section id="use-cases" className="ag-section ag-section--tint">
      <div className="ag-wrap">
        <Reveal className="ag-sec-head">
          <p className="ag-kicker">Where automation is used</p>
          <h2 className="ag-h2">Practical AI Automation for Everyday Business Operations</h2>
          <p className="ag-sub">
            AI agents and automation workflows can assist with repetitive tasks, information processing, business communication, system coordination, and operational workflows. A use case is implemented only when the process, systems, and review rules are in the project.
          </p>
        </Reveal>
        <Reveal className="ag-cases">
          <div className="ag-case-list" role="tablist" aria-label="Automation use cases">
            {USE_CASES.map((useCase, i) => (
              <button key={useCase.id} type="button" role="tab" aria-selected={i === idx} className={i === idx ? "on" : ""} onClick={() => setIdx(i)}>
                {useCase.title}
              </button>
            ))}
          </div>
          <div className="ag-case-card" role="tabpanel">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <ol>
              {item.steps.map((step, i) => (
                <li key={step}>
                  <span>{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BusinessAgents() {
  return (
    <section id="business-agents" className="ag-section ag-section--white">
      <div className="ag-wrap ag-split">
        <Reveal className="ag-stack">
          <p className="ag-kicker">Agents inside the operation</p>
          <h2 className="ag-h2">Smarter Operations Through Connected AI Agents</h2>
          <p className="ag-prose-p">
            AI agents can support business teams by assisting with defined tasks, retrieving information, interacting with systems, and coordinating workflows. We help businesses identify practical opportunities to introduce AI agents into their operational environment. Agents assist the team. They are not a substitute for the people who own the process.
          </p>
          <ul className="ag-tiles ag-tiles--two">
            {AGENT_ROLES.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="ag-roles">
          <p>Sample agent desk</p>
          {[
            ["Sales workflow agent", "Prepares the CRM update and waits if the owner is unclear."],
            ["Document agent", "Extracts agreed fields and flags anything it cannot classify."],
            ["Operations agent", "Routes an internal request to the right queue."],
          ].map(([title, text]) => (
            <div key={title}>
              <b>{title}</b>
              <p>{text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Integration + technology                                            */
/* ------------------------------------------------------------------ */

function Integrations() {
  return (
    <section id="integrations" className="ag-section ag-section--tint">
      <div className="ag-wrap ag-split ag-split--wide">
        <Reveal className="ag-stack">
          <p className="ag-kicker">Systems working together</p>
          <h2 className="ag-h2">Bring Your Applications Together Through Intelligent Automation</h2>
          <p className="ag-prose-p">
            Businesses often use different software platforms to manage sales, operations, customer relationships, finance, communication, and internal processes. We help businesses plan and implement automation and integration solutions that connect these systems, enable information flow, and simplify operational workflows.
          </p>
          <ul className="ag-tiles">
            {INTEGRATION_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="ag-linkmap">
          <p>CRM · AI agent · ERP · Database · Dashboard · Workflow</p>
          <div className="ag-linkmap-row">
            {["CRM", "AI agent", "ERP"].map((name) => (
              <div key={name} className={name === "AI agent" ? "core" : ""}>
                {name}
              </div>
            ))}
          </div>
          <div className="ag-linkmap-line" aria-hidden="true" />
          <div className="ag-linkmap-row ag-linkmap-row--3">
            {["Database", "Dashboard", "Workflow"].map((name) => (
              <div key={name}>{name}</div>
            ))}
          </div>
          <small>Shown as an architecture sketch. Each link is scoped to the systems in the project.</small>
        </Reveal>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section id="technology" className="ag-section ag-section--navy">
      <div className="ag-wrap">
        <Reveal className="ag-sec-head">
          <p className="ag-kicker ag-kicker--cyan">How the stack is chosen</p>
          <h2 className="ag-h2 ag-h2--light">Built With Modern AI, APIs &amp; Automation Technologies</h2>
          <p className="ag-sub ag-sub--light">
            We develop automation solutions using suitable AI technologies, APIs, integration tools, workflow systems, backend technologies, and business logic based on project requirements. A technology is used when it fits the workflow, not because it appears on a list.
          </p>
        </Reveal>
        <Reveal className="ag-arch">
          <ol>
            {ARCH_LAYERS.map((layer, i) => (
              <li key={layer} className={i === 1 ? "hl" : i === 4 ? "ok" : ""}>
                {layer}
              </li>
            ))}
          </ol>
        </Reveal>
        <div className="ag-tech">
          {TECH_CATEGORIES.map((category) => (
            <Reveal key={category.title}>
              <div className="ag-tech-card">
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

/* ------------------------------------------------------------------ */
/* Industries, why, process, security                                  */
/* ------------------------------------------------------------------ */

function Industries() {
  const [idx, setIdx] = useState(0);
  const item = INDUSTRIES[idx];
  return (
    <section id="industries" className="ag-section ag-section--white">
      <div className="ag-wrap">
        <Reveal className="ag-sec-head">
          <p className="ag-kicker">Industries</p>
          <h2 className="ag-h2">AI Automation Across Business Industries</h2>
          <p className="ag-sub">Select an industry to see the kind of operational workflow automation is usually applied to. These are planning examples, not a claim that every process is already automated.</p>
        </Reveal>
        <Reveal className="ag-ind">
          <div className="ag-ind-list" role="tablist" aria-label="Industries">
            {INDUSTRIES.map((industry, i) => (
              <button key={industry.name} type="button" role="tab" aria-selected={i === idx} className={i === idx ? "on" : ""} onClick={() => setIdx(i)}>
                {industry.name}
              </button>
            ))}
          </div>
          <div className="ag-ind-card" role="tabpanel">
            <span>{item.name}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <Lead service="Industry automation consultation" title="Discuss an automation workflow" className="ag-btn ag-btn--primary">
              Discuss this workflow
              <Arrow />
            </Lead>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="ag-section ag-section--tint">
      <div className="ag-wrap ag-split ag-split--top">
        <Reveal className="ag-stack">
          <p className="ag-kicker">Why RoyalTech Innovation</p>
          <h2 className="ag-h2">Your Partner for Intelligent Business Automation</h2>
          <p className="ag-prose-p">
            RoyalTech Innovation is based in Mohali and works with businesses in Chandigarh, Punjab, across India, and internationally. Automation work starts from the process you already run, then connects the systems that process depends on.
          </p>
          <div className="ag-note">
            <small>How we scope a build</small>
            <p>A workflow is automated when its trigger, rules, exceptions, and the person who still approves it are clear.</p>
          </div>
        </Reveal>
        <Reveal className="ag-why">
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
    <section id="process" className="ag-section ag-section--white">
      <div className="ag-wrap">
        <Reveal className="ag-sec-head ag-sec-head--center">
          <p className="ag-kicker">Delivery</p>
          <h2 className="ag-h2">From Business Processes to Intelligent Automation</h2>
          <p className="ag-sub">Eight stages from the first conversation to a workflow that is deployed, tested, and maintained.</p>
        </Reveal>
        <ol className="ag-steps">
          {PROCESS.map((step, i) => (
            <li key={step.title}>
              <Reveal className="ag-step">
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
    <section id="security" className="ag-section ag-section--tint">
      <div className="ag-wrap ag-split">
        <Reveal className="ag-stack">
          <p className="ag-kicker">Controls</p>
          <h2 className="ag-h2">Intelligent Automation With the Right Controls</h2>
          <p className="ag-prose-p">
            AI agents and automated workflows should be designed with appropriate permissions, validation, monitoring, human oversight, and safeguards according to the tasks they perform. We consider business requirements, integration permissions, data access, workflow controls, and AI limitations when planning automation solutions.
          </p>
          <ul className="ag-tiles ag-tiles--two">
            {SECURITY_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="ag-controls">
          <p>Control stack</p>
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

/* ------------------------------------------------------------------ */
/* FAQ + final CTA                                                     */
/* ------------------------------------------------------------------ */

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="ag-section ag-section--white">
      <div className="ag-wrap ag-wrap--narrow">
        <Reveal className="ag-sec-head ag-sec-head--center">
          <p className="ag-kicker">Questions</p>
          <h2 className="ag-h2">Frequently Asked Questions About AI Agents &amp; Automation</h2>
        </Reveal>
        <div className="ag-acc">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className={`ag-acc-i${isOpen ? " on" : ""}`}>
                <h3>
                  <button type="button" id={`ag-faq-q-${i}`} aria-expanded={isOpen} aria-controls={`ag-faq-a-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                    <span>
                      {i + 1}. {faq.q}
                    </span>
                    <span className="ag-acc-ic" aria-hidden="true" />
                  </button>
                </h3>
                <div id={`ag-faq-a-${i}`} role="region" aria-labelledby={`ag-faq-q-${i}`} className="ag-acc-p" inert={!isOpen}>
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
    <section className="ag-section ag-final-wrap">
      <div className="ag-wrap">
        <Reveal className="ag-final">
          <div>
            <span className="ag-final-tag">Start with the process you want to change</span>
            <h2>Ready to Automate the Way Your Business Works?</h2>
            <p>
              Whether you want to automate repetitive tasks, connect business systems, develop AI agents, optimize workflows, or introduce intelligent automation, RoyalTech Innovation can help you plan and build the right solution.
            </p>
            <div className="ag-cta-row">
              <Lead service="Final CTA" title="Start Your Automation Project" className="ag-btn ag-btn--white ag-btn--lg">
                Start Your Automation Project
                <Arrow />
              </Lead>
              <Lead service="Final CTA" title="Discuss Your AI Requirements" className="ag-btn ag-btn--outline ag-btn--lg">
                Discuss Your AI Requirements
              </Lead>
            </div>
          </div>
          <div className="ag-final-card">
            <div className="ag-final-card-h">
              <strong>Next workflow</strong>
              <span>Mohali · Chandigarh · Punjab</span>
            </div>
            <ol>
              <li>Name the repetitive process</li>
              <li>List the systems it touches</li>
              <li>Mark the step a person must approve</li>
            </ol>
            <div className="ag-final-contact">
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

export default function AiAgentsPage({ rootClass = "" }: { rootClass?: string }) {
  return (
    <div className={`svx-root ag-root ${rootClass}`.trim()}>
      <Hero />
      <Intro />
      <Services />
      <Capabilities />
      <HowItWorks />
      <WorkflowSection />
      <UseCases />
      <BusinessAgents />
      <Integrations />
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
