"use client";

import "@/styles/services-showcase.css";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useFormModal } from "@/components/FormModal";
import {
  CAPABILITIES,
  CAPABILITY_TABS,
  CONTACT,
  CUSTOM_PILLARS,
  FAQS,
  HERO_LEAD,
  HERO_PILLARS,
  INDUSTRIES,
  INTRO_PARAGRAPHS,
  INTRO_POINTS,
  RELATED_LINKS,
  MAINTENANCE_ITEMS,
  OFF_THE_SHELF,
  PROCESS,
  SAFEGUARDS,
  SEO_H1,
  SERVICES,
  TECH_EXTRA,
  TECH_LAYERS,
  WHY,
  type ServiceBlock,
} from "@/data/custom-software-page";

/* ------------------------------------------------------------------ */
/* Shared client helpers                                               */
/* ------------------------------------------------------------------ */

/** Fades + lifts children in as they scroll into view. Fully visible on the server and for reduced-motion users. */
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.classList.add("cs-pre");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("cs-in");
          io.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/** Opens the shared consultation form, tagging the lead with this page and the service in context. */
function Lead({
  service,
  title = "Discuss Your Software Project",
  className = "cs-btn cs-btn--primary",
  children,
}: {
  service: string;
  title?: string;
  className?: string;
  children: ReactNode;
}) {
  const { openForm } = useFormModal();
  return (
    <button type="button" className={className} onClick={() => openForm({ title, source: "custom-software-page", service })}>
      {children}
    </button>
  );
}

const Arrow = () => (
  <svg className="cs-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

/** Accessible accordion. Closed answers stay in the DOM (inert) so the text remains indexable. */
function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="cs-acc">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={`cs-acc-i${isOpen ? " on" : ""}`}>
            <h3 className="cs-acc-h">
              <button
                type="button"
                id={`cs-faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`cs-faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="cs-acc-q">{f.q}</span>
                <span className="cs-acc-ic" aria-hidden="true" />
              </button>
            </h3>
            <div id={`cs-faq-a-${i}`} role="region" aria-labelledby={`cs-faq-q-${i}`} className="cs-acc-p" inert={!isOpen}>
              <div>
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="cs-hero" aria-labelledby="cs-h1">
      <div className="cs-wrap cs-hero-grid">
        <div className="cs-hero-copy">
          <nav aria-label="Breadcrumb" className="cs-crumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Custom Software Development</li>
            </ol>
          </nav>

          <p className="cs-eyebrow">
            <span className="cs-dot" aria-hidden="true" />
            Custom Software Development
          </p>
          <h1 id="cs-h1" className="cs-h1">
            {SEO_H1}
          </h1>
          <p className="cs-lead">{HERO_LEAD}</p>

          <p className="cs-pillars">
            {HERO_PILLARS.map((p, i) => (
              <span key={p}>
                {i > 0 && <span className="cs-sep" aria-hidden="true">·</span>}
                {p}
              </span>
            ))}
          </p>

          <div className="cs-cta-row">
            <Lead service="Hero" title="Discuss Your Software Project" className="cs-btn cs-btn--primary cs-btn--lg">
              Discuss Your Software Project
              <Arrow />
            </Lead>
            <a href="#services-overview" className="cs-btn cs-btn--ghost cs-btn--lg">
              Explore Our Solutions
            </a>
          </div>
        </div>

        <div className="cs-hero-visual">
          <div className="cs-hero-glow" aria-hidden="true" />
          <div className="cs-monitor">
            <div className="cs-monitor-bar">
              <span className="cs-tl" />
              <span className="cs-tl" />
              <span className="cs-tl cs-tl--on" />
              <span className="cs-url">example-workspace / dashboard</span>
              <span className="cs-live">Sample</span>
            </div>
            <div className="cs-screen">
              <aside className="cs-side">
                <div className="cs-side-brand">
                  <span className="cs-mark">R</span>
                  <span>Operations</span>
                </div>
                <ul>
                  <li className="on">Operations Hub</li>
                  <li>CRM &amp; Pipeline</li>
                  <li>Workflow Engine</li>
                  <li>Inventory &amp; Billing</li>
                  <li>API Connectors</li>
                </ul>
                <div className="cs-side-foot">
                  <span>Database sync</span>
                  <b>
                    <i /> PostgreSQL active
                  </b>
                </div>
              </aside>
              <div className="cs-main">
                <div className="cs-main-head">
                  <div>
                    <strong>Operations overview</strong>
                    <small>Connected modules and approval pipelines</small>
                  </div>
                  <span className="cs-chip">Role: Operations admin</span>
                </div>
                <div className="cs-kpis">
                  <div>
                    <small>Active workflows</small>
                    <strong>Order → Dispatch</strong>
                    <span className="cs-bar">
                      <i style={{ width: "80%" }} />
                    </span>
                  </div>
                  <div>
                    <small>Connected systems</small>
                    <strong>ERP · CRM · Pay</strong>
                    <em>Webhooks synced</em>
                  </div>
                  <div>
                    <small>Approval queue</small>
                    <strong>Pending review</strong>
                    <em className="blue">Sample layout</em>
                  </div>
                </div>
                <div className="cs-main-split">
                  <div className="cs-panel">
                    <div className="cs-panel-t">Resource allocation</div>
                    <svg viewBox="0 0 220 75" role="img" aria-label="Illustrative resource allocation chart">
                      <line x1="0" y1="65" x2="220" y2="65" stroke="#E2E8F0" />
                      <rect x="10" y="32" width="16" height="33" rx="2" fill="#93C5FD" />
                      <rect x="42" y="22" width="16" height="43" rx="2" fill="#3B82F6" />
                      <rect x="74" y="28" width="16" height="37" rx="2" fill="#93C5FD" />
                      <rect x="106" y="14" width="16" height="51" rx="2" fill="#1D4ED8" />
                      <rect x="138" y="19" width="16" height="46" rx="2" fill="#3B82F6" />
                      <rect x="170" y="10" width="16" height="55" rx="2" fill="#0F2557" />
                    </svg>
                  </div>
                  <div className="cs-panel">
                    <div className="cs-panel-t">Automated flow</div>
                    <div className="cs-steps">
                      <div>
                        <span>1. Lead intake</span>
                        <b className="ok">Done</b>
                      </div>
                      <div className="act">
                        <span>2. ERP stock check</span>
                        <b>Active</b>
                      </div>
                      <div>
                        <span>3. Invoice trigger</span>
                        <b className="mute">Queued</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs-monitor-stand" aria-hidden="true" />

          <div className="cs-float cs-float--bridge">
            <div className="cs-float-h">
              <strong>API &amp; database bridge</strong>
              <span>REST / JSON</span>
            </div>
            <div className="cs-float-r">
              <span>CRM ↔ Billing engine</span>
              <b>200 OK</b>
            </div>
            <div className="cs-float-r">
              <span>Inventory ↔ Warehouse DB</span>
              <b>Synced</b>
            </div>
          </div>
          <div className="cs-float cs-float--arch">
            <span className="cs-float-ic" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.2 3.6 4 8 4s8-1.8 8-4V7M4 7c0 2.2 3.6 4 8 4s8-1.8 8-4M4 7c0-2.2 3.6-4 8-4s8 1.8 8 4" />
              </svg>
            </span>
            <div>
              <strong>Modular architecture</strong>
              <small>Cloud &amp; on-premise ready</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Introduction                                                        */
/* ------------------------------------------------------------------ */

function Intro() {
  return (
    <section className="cs-section cs-section--white">
      <Reveal className="cs-wrap cs-split">
        <div className="cs-intro-copy">
          <p className="cs-kicker">Tailored Software Engineering</p>
          <h2 className="cs-h2">Software Built Around the Way Your Business Works</h2>
          <div className="cs-prose">
            {INTRO_PARAGRAPHS.map((p, i) => (
              <p key={i}>
                {i === 1 ? (
                  <>
                    At <strong>RoyalTech Innovation</strong>
                    {p.slice("At RoyalTech Innovation".length)}
                  </>
                ) : (
                  p
                )}
              </p>
            ))}
          </div>
          <p className="cs-related">
            A public site, a phone app, interface design, or reporting on top of the software are separate engagements:{" "}
            {RELATED_LINKS.map((link, i) => (
              <span key={link.href}>
                {i > 0 ? ", " : null}
                <Link href={link.href}>{link.label}</Link>
              </span>
            ))}
            .
          </p>
          <div className="cs-points">
            {INTRO_POINTS.map((pt) => (
              <div key={pt.n}>
                <span className="cs-num">{pt.n}</span>
                <div>
                  <h3>{pt.title}</h3>
                  <p>{pt.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-intro-visual">
          <div className="cs-card cs-card--main">
            <div className="cs-card-h">
              <span>
                <i className="cs-dot cs-dot--blue" /> Operational control center
              </span>
              <small>Multi-department view</small>
            </div>
            <div className="cs-card-b">
              <div className="cs-grid2">
                <div className="cs-subpanel">
                  <small>Order &amp; fulfillment pipeline</small>
                  <div className="cs-track">
                    <span>Client onboarding</span>
                    <i style={{ width: "100%" }} />
                  </div>
                  <div className="cs-track">
                    <span>Resource allocation</span>
                    <i style={{ width: "75%" }} />
                  </div>
                  <div className="cs-track">
                    <span>Billing &amp; reconciliation</span>
                    <i style={{ width: "50%" }} />
                  </div>
                </div>
                <div className="cs-subpanel">
                  <small>Active business records</small>
                  <ul className="cs-records">
                    <li>
                      <span>INV-2026-084</span>
                      <b className="ok">Approved</b>
                    </li>
                    <li>
                      <span>PO-2026-419</span>
                      <b className="blue">In review</b>
                    </li>
                    <li>
                      <span>WO-2026-112</span>
                      <b className="warn">Dispatched</b>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cs-logic">
                <div>
                  <small>Custom business logic layer</small>
                  <strong>Automated escalation → Manager approval → Ledger sync</strong>
                </div>
                <span>Configured rule</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services (five distinct compositions)                               */
/* ------------------------------------------------------------------ */

function ServiceVisual({ id }: { id: string }) {
  switch (id) {
    case "business-software":
      return (
        <div className="cs-win">
          <div className="cs-win-bar">
            <strong>Business management suite</strong>
            <span>Sales · Inventory · Billing</span>
          </div>
          <div className="cs-win-body">
            <div className="cs-tiles">
              <div>
                <small>Customer records</small>
                <b>Active accounts</b>
                <em>CRM synced</em>
              </div>
              <div>
                <small>Inventory control</small>
                <b>Multi-warehouse</b>
                <em className="ok">Stock alerts on</em>
              </div>
              <div>
                <small>Billing &amp; tax</small>
                <b>Auto-invoicing</b>
                <em>Ledger ready</em>
              </div>
              <div>
                <small>Staff attendance</small>
                <b>Shift &amp; payroll</b>
                <em className="mute">Role access</em>
              </div>
            </div>
            <div className="cs-win-split">
              <div className="cs-panel">
                <div className="cs-panel-t">Sales &amp; billing trend</div>
                <svg viewBox="0 0 260 85" role="img" aria-label="Illustrative sales trend graph">
                  <defs>
                    <linearGradient id="cs-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M10 68 L50 54 L90 58 L130 38 L170 42 L210 24 L250 18 L250 78 L10 78 Z" fill="url(#cs-area)" />
                  <path d="M10 68 L50 54 L90 58 L130 38 L170 42 L210 24 L250 18" fill="none" stroke="#1D4ED8" strokeWidth="2.2" />
                  <circle cx="250" cy="18" r="3.5" fill="#0F2557" />
                </svg>
              </div>
              <div className="cs-panel">
                <div className="cs-panel-t">Customer &amp; stock queue</div>
                <div className="cs-q">
                  <div>
                    <b>Client account A</b>
                    <small>Order #4092 · Paid</small>
                    <i className="ok" />
                  </div>
                  <div>
                    <b>Client account B</b>
                    <small>Order #4093 · Packing</small>
                    <i className="blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "enterprise-software":
      return (
        <div className="cs-dark-win">
          <div className="cs-dark-h">
            <span>
              <i className="cs-dot cs-dot--sky" /> Enterprise command architecture
            </span>
            <div>
              <em>SSO enabled</em>
              <em className="hl">Multi-branch</em>
            </div>
          </div>
          <div className="cs-nodes">
            <div>
              <small>HR &amp; workforce</small>
              <b>Directory &amp; roles</b>
              <span>Org hierarchy synced</span>
            </div>
            <div>
              <small>Finance &amp; ERP</small>
              <b>Cost centers</b>
              <span>Audit trail active</span>
            </div>
            <div>
              <small>Operations</small>
              <b>Supply &amp; assets</b>
              <span>Cross-unit visibility</span>
            </div>
            <div>
              <small>Enterprise CRM</small>
              <b>Account lifecycle</b>
              <span>SLA monitoring</span>
            </div>
          </div>
          <div className="cs-dark-split">
            <div className="cs-dark-box">
              <strong>Cross-department data throughput</strong>
              <div className="cs-track cs-track--dark">
                <span>ERP ↔ Finance ledger</span>
                <i style={{ width: "92%" }} />
              </div>
              <div className="cs-track cs-track--dark">
                <span>HRMS ↔ Access control</span>
                <i style={{ width: "80%" }} />
              </div>
              <div className="cs-track cs-track--dark">
                <span>Executive BI reporting</span>
                <i style={{ width: "84%" }} />
              </div>
            </div>
            <div className="cs-dark-box">
              <strong>Governance &amp; permissions</strong>
              <div className="cs-perm">
                <span>Regional heads</span>
                <b className="ok">Read / approve</b>
              </div>
              <div className="cs-perm">
                <span>Department leads</span>
                <b className="sky">Scoped write</b>
              </div>
              <div className="cs-perm">
                <span>Audit logs</span>
                <b className="mute">Immutable</b>
              </div>
            </div>
          </div>
        </div>
      );

    case "web-applications":
      return (
        <div className="cs-browser-wrap">
          <div className="cs-browser">
            <div className="cs-browser-bar">
              <span className="cs-tl" />
              <span className="cs-tl" />
              <span className="cs-tl" />
              <div className="cs-addr">
                <span>https://app.example.com/dashboard</span>
                <b>HTTPS</b>
              </div>
            </div>
            <div className="cs-browser-body">
              <div className="cs-browser-h">
                <div>
                  <strong>SaaS client &amp; subscription portal</strong>
                  <small>Multi-tenant user management, bookings &amp; analytics</small>
                </div>
                <span className="cs-btn-mini">+ New workspace</span>
              </div>
              <div className="cs-tri">
                <div>
                  <small>Tenant organizations</small>
                  <b>Isolated schemas</b>
                </div>
                <div>
                  <small>User permissions</small>
                  <b>Admin / member / guest</b>
                </div>
                <div>
                  <small>API access</small>
                  <b>OAuth2 &amp; tokens</b>
                </div>
              </div>
              <div className="cs-dir">
                <div className="cs-dir-h">
                  <span>User / account</span>
                  <span>Access role</span>
                  <span>Status</span>
                </div>
                <div>
                  <span>User A</span>
                  <span>Portal admin</span>
                  <b className="ok">Active</b>
                </div>
                <div>
                  <span>User B</span>
                  <span>Operations lead</span>
                  <b className="ok">Active</b>
                </div>
                <div>
                  <span>User C</span>
                  <span>Client reviewer</span>
                  <b className="blue">Invited</b>
                </div>
              </div>
            </div>
          </div>
          <div className="cs-tablet">
            <div className="cs-tablet-in">
              <div className="cs-tablet-h">
                <b>Tablet responsive UI</b>
                <i />
              </div>
              <div className="cs-tablet-c">
                <strong>Booking schedule</strong>
                <small>Touch-optimized calendar &amp; instant notifications</small>
              </div>
              <div className="cs-tablet-bars">
                <i />
                <i className="mute" />
              </div>
            </div>
          </div>
        </div>
      );

    case "workflow-automation":
      return (
        <div className="cs-flow">
          <div className="cs-flow-h">
            <div>
              <strong>Automated process &amp; approval pipeline</strong>
              <small>Stage progression, conditional triggers &amp; task routing</small>
            </div>
            <span>Auto-trigger active</span>
          </div>
          <div className="cs-flow-nodes">
            <div className="cs-node">
              <div>
                <small>Stage 01 · Intake</small>
                <i className="ok" />
              </div>
              <strong>Request submitted</strong>
              <p>Form validation and automatic ticket assignment to the department queue.</p>
              <footer>
                <span>Assignee</span>
                <b>Ops coordinator</b>
              </footer>
            </div>
            <div className="cs-node cs-node--active">
              <div>
                <small>Stage 02 · Approval</small>
                <em>In progress</em>
              </div>
              <strong>Manager review gate</strong>
              <p>Rule-based threshold routing with instant email and dashboard alerts.</p>
              <footer>
                <span>SLA timer</span>
                <b className="blue">Auto-escalate</b>
              </footer>
            </div>
            <div className="cs-node">
              <div>
                <small>Stage 03 · Execution</small>
                <i className="sky" />
              </div>
              <strong>Task &amp; ledger sync</strong>
              <p>Generates work order, updates inventory, and logs audit timestamp.</p>
              <footer>
                <span>Output</span>
                <b className="ok">ERP updated</b>
              </footer>
            </div>
          </div>
          <div className="cs-flow-rule">
            <span className="cs-chip">Condition rule</span>
            <span>If approval = confirmed → trigger dispatch &amp; notify client</span>
            <code>Audit log #WF-882</code>
          </div>
        </div>
      );

    default:
      return (
        <div className="cs-hub">
          <div className="cs-hub-h">
            <strong>Central integration middleware &amp; data bus</strong>
            <code>REST · GraphQL · Webhooks</code>
          </div>
          <div className="cs-hub-row">
            <div>
              <small>CRM platform</small>
              <b>Leads &amp; deals</b>
              <span>Bi-directional sync</span>
            </div>
            <div>
              <small>ERP &amp; finance</small>
              <b>Invoices &amp; tax</b>
              <span>Automated posting</span>
            </div>
            <div>
              <small>E-commerce</small>
              <b>Orders &amp; catalog</b>
              <span>Webhook events</span>
            </div>
          </div>
          <div className="cs-hub-core">
            <div>
              <small>RoyalTech integration engine</small>
              <strong>API gateway, payload transformation &amp; queue manager</strong>
            </div>
            <span>Zero manual entry</span>
          </div>
          <div className="cs-hub-row">
            <div>
              <small>Payment gateways</small>
              <b>Settlements</b>
              <span>Instant reconciliation</span>
            </div>
            <div>
              <small>Cloud &amp; storage</small>
              <b>Docs &amp; backups</b>
              <span>Encrypted transfer</span>
            </div>
            <div>
              <small>Core databases</small>
              <b>SQL &amp; NoSQL</b>
              <span>Schema mapping</span>
            </div>
          </div>
        </div>
      );
  }
}

function ServiceBlockView({ s }: { s: ServiceBlock }) {
  const textSide = (
    <div className="cs-svc-copy">
      <p className="cs-svc-eyebrow">
        <span className="cs-svc-n">{s.number}</span>
        <span>{s.eyebrow}</span>
      </p>
      <h3 className="cs-h3">{s.title}</h3>
      {s.paragraphs.map((p) => (
        <p key={p} className="cs-svc-p">
          {p}
        </p>
      ))}
      <ul className="cs-checks">
        {s.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
      <div>
        <Lead service={s.service} title={s.cta} className={`cs-btn ${s.tone === "dark" ? "cs-btn--light" : "cs-btn--primary"}`}>
          {s.cta}
          <Arrow />
        </Lead>
      </div>
    </div>
  );

  const visualSide = (
    <div className="cs-svc-visual">
      <ServiceVisual id={s.id} />
    </div>
  );

  // Workflow leads with its visual; the other blocks lead with copy. The dark block puts copy first on mobile.
  const visualFirst = s.id === "workflow-automation";

  return (
    <Reveal>
      <article id={s.id} className={`cs-svc cs-svc--${s.tone}`}>
        {s.tone === "dark" ? (
          <div className="cs-svc-dark-grid">
            {visualSide}
            {textSide}
          </div>
        ) : visualFirst ? (
          <div className="cs-svc-grid">
            {visualSide}
            {textSide}
          </div>
        ) : (
          <div className="cs-svc-grid">
            {textSide}
            {visualSide}
          </div>
        )}
      </article>
    </Reveal>
  );
}

function Services() {
  return (
    <section id="services-overview" className="cs-section cs-section--tint">
      <div className="cs-wrap">
        <Reveal className="cs-sec-head">
          <p className="cs-kicker">Core Engineering Capabilities</p>
          <h2 className="cs-h2">Custom Software Solutions for Modern Businesses</h2>
          <p className="cs-sub">
            Whether you need an internal operational system, a multi-department enterprise suite, or connected cloud applications, we architect software solutions built for clarity, reliability, and scale.
          </p>
        </Reveal>
        <div className="cs-svc-list">
          {SERVICES.map((s) => (
            <ServiceBlockView key={s.id} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Capabilities (interactive)                                          */
/* ------------------------------------------------------------------ */

function CapabilityPanel({ tab }: { tab: string }) {
  if (tab === "access") {
    return (
      <div className="cs-cap-panel">
        <div className="cs-cap-3">
          <div className="cs-cap-card cs-cap-card--hl">
            <small>Authentication</small>
            <strong>2FA &amp; session guard</strong>
            <p>Token-based sign-in with granular timeout policies.</p>
          </div>
          <div className="cs-cap-card">
            <small>Permissions matrix</small>
            <strong>Custom role tiers</strong>
            <p>Module-level view, edit, approve, and export controls.</p>
          </div>
          <div className="cs-cap-card">
            <small>Admin console</small>
            <strong>Central configuration</strong>
            <p>Manage branches, master data, and system parameters.</p>
          </div>
        </div>
        <div className="cs-table-wrap">
          <table className="cs-table">
            <thead>
              <tr>
                <th>Role profile</th>
                <th>Admin dashboard</th>
                <th>Financial records</th>
                <th>Workflow approval</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Super administrator</td>
                <td className="ok">Full access</td>
                <td className="ok">Full access</td>
                <td className="ok">Override &amp; approve</td>
              </tr>
              <tr>
                <td>Department manager</td>
                <td className="blue">Team scope</td>
                <td className="mute">Read only</td>
                <td className="ok">Approve stage 1–2</td>
              </tr>
              <tr>
                <td>Operations executive</td>
                <td className="blue">Task queue</td>
                <td className="mute">Restricted</td>
                <td>Submit requests</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  if (tab === "data") {
    return (
      <div className="cs-cap-panel">
        <div className="cs-filter">
          <span>Filter: region = north · status = active · FY 2026</span>
          <b>Instant search</b>
          <em>Export CSV / PDF</em>
        </div>
        <div className="cs-cap-2">
          <div className="cs-cap-card">
            <strong>Real-time operational telemetry</strong>
            <svg viewBox="0 0 220 75" role="img" aria-label="Illustrative telemetry chart">
              <path d="M5 60 L45 48 L85 52 L125 30 L165 34 L210 15" fill="none" stroke="#2563EB" strokeWidth="2.5" />
              <circle cx="210" cy="15" r="3.5" fill="#0F2557" />
            </svg>
          </div>
          <div className="cs-cap-card">
            <strong>Structured data management</strong>
            <p>Indexed relational records with multi-criteria filtering, custom report builders, and live dashboard synchronization.</p>
            <small className="blue">Sample layout · not a live feed</small>
          </div>
        </div>
      </div>
    );
  }
  if (tab === "operations") {
    return (
      <div className="cs-cap-panel">
        <div className="cs-cap-3">
          <div className="cs-cap-card">
            <strong>Customer management</strong>
            <p>360-degree client profiles, interaction history, contracts, and support tickets.</p>
          </div>
          <div className="cs-cap-card">
            <strong>Employee management</strong>
            <p>Staff directories, shift schedules, leave approvals, and performance tracking.</p>
          </div>
          <div className="cs-cap-card">
            <strong>Document management</strong>
            <p>Version-controlled file repositories with role-restricted viewing and audit logs.</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="cs-cap-panel">
      <div className="cs-cap-2">
        <div className="cs-cap-card cs-cap-card--hl">
          <strong>Custom business logic &amp; notifications</strong>
          <p>Event-driven triggers send automated email, SMS, and in-app alerts whenever operational thresholds are met.</p>
        </div>
        <div className="cs-cap-card">
          <strong>Payment &amp; cloud integration</strong>
          <p>Automated invoice collection, webhook payment verification, and scalable cloud storage orchestration.</p>
        </div>
      </div>
    </div>
  );
}

function Capabilities() {
  const [tab, setTab] = useState("access");
  const title = CAPABILITY_TABS.find((t) => t.key === tab)?.title ?? "";

  return (
    <section id="capabilities" className="cs-section cs-section--white">
      <div className="cs-wrap">
        <Reveal className="cs-sec-head">
          <p className="cs-kicker">Functional Architecture</p>
          <h2 className="cs-h2">Powerful Features. Practical Business Solutions.</h2>
          <p className="cs-sub">
            We build software with the functionality businesses need to manage operations, make informed decisions, and improve efficiency.
          </p>
        </Reveal>

        <Reveal className="cs-cap-shell">
          <div className="cs-tabs" role="tablist" aria-label="Software capability modules">
            {CAPABILITY_TABS.map((t) => (
              <button
                key={t.key}
                type="button"
                role="tab"
                id={`cs-tab-${t.key}`}
                aria-selected={tab === t.key}
                aria-controls={`cs-cap-${t.key}`}
                className={`cs-tab${tab === t.key ? " on" : ""}`}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="cs-cap-grid">
            <div className="cs-cap-list">
              <p className="cs-cap-list-t">Complete core module suite</p>
              <ul>
                {CAPABILITIES.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="cs-screen-win">
              <div className="cs-screen-h">
                <span>
                  <i className="cs-dot cs-dot--sky" /> <b>{title}</b>
                </span>
                <small>Interactive module preview</small>
              </div>
              <div role="tabpanel" id={`cs-cap-${tab}`} aria-labelledby={`cs-tab-${tab}`} className="cs-screen-b">
                <CapabilityPanel tab={tab} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Technologies                                                        */
/* ------------------------------------------------------------------ */

function Technologies() {
  return (
    <section id="tech-stack" className="cs-section cs-section--navy">
      <div className="cs-wrap">
        <Reveal className="cs-sec-head cs-sec-head--dark">
          <p className="cs-kicker cs-kicker--sky">Modern Engineering Stack</p>
          <h2 className="cs-h2">Powered by Modern &amp; Reliable Technologies</h2>
          <p className="cs-sub">
            We use modern technologies, frameworks, databases, and cloud solutions to develop scalable, secure, maintainable, and high-performance software tailored to your business requirements.
          </p>
        </Reveal>

        <Reveal className="cs-tech-grid">
          <div className="cs-tech-layers">
            {TECH_LAYERS.map((l) => (
              <div key={l.title} className="cs-layer">
                <div className="cs-layer-h">
                  <div>
                    <span className="cs-badge">{l.label}</span>
                    <h3>{l.title}</h3>
                  </div>
                  <small>{l.note}</small>
                </div>
                <div className="cs-pills">
                  {l.items.map((i) => (
                    <span key={i}>{i}</span>
                  ))}
                </div>
              </div>
            ))}
            <div className="cs-layer-pair">
              {TECH_EXTRA.map((x, idx) => (
                <div key={x.title} className="cs-layer cs-layer--sm">
                  <small className="cs-badge-t">Layer {idx === 0 ? "04" : "05"}</small>
                  <h3>{x.title}</h3>
                  <div className="cs-pills">
                    {x.items.map((i) => (
                      <span key={i}>{i}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="cs-blueprint">
            <div className="cs-bp-h">
              <strong>Solution stack blueprint</strong>
              <span>Production grade</span>
            </div>
            <p>
              We select the right combination of frontend frameworks, backend runtimes, and relational or document databases based on your concurrency requirements, existing IT infrastructure, and long-term maintenance goals.
            </p>
            <div className="cs-bp-flow">
              <div>
                <b>Client tier</b>
                <span>Next.js / React / TS</span>
                <em>SSR + SPA</em>
              </div>
              <p className="cs-bp-arrow">↓ HTTPS / REST / GraphQL ↓</p>
              <div>
                <b>Service tier</b>
                <span>Node.js / .NET / Laravel</span>
                <em>Modular API</em>
              </div>
              <p className="cs-bp-arrow">↓ Pooled queries &amp; webhooks ↓</p>
              <div className="cs-bp-data">
                <b>Data &amp; cloud</b>
                <span>PostgreSQL / SQL / CI/CD</span>
                <em>Encrypted</em>
              </div>
            </div>
            <div className="cs-bp-foot">
              <span>Need architecture advice?</span>
              <Lead service="Technology Stack Consultation" title="Technology Stack Consultation" className="cs-link">
                Consult our engineers →
              </Lead>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Comparison                                                          */
/* ------------------------------------------------------------------ */

function Compare() {
  return (
    <section className="cs-section cs-section--white">
      <div className="cs-wrap">
        <Reveal className="cs-sec-head">
          <p className="cs-kicker">Strategic Decision Guide</p>
          <h2 className="cs-h2">Software That Fits Your Business—Not the Other Way Around</h2>
          <p className="cs-sub">
            Ready-made tools can be useful for standard, straightforward tasks. However, when your organization relies on specialized workflows, multi-system data flows, or proprietary processes, custom software provides decisive operational advantages. The right approach always depends on your specific business requirements.
          </p>
        </Reveal>
        <Reveal className="cs-compare">
          <div className="cs-off">
            <span className="cs-tag cs-tag--grey">Off-the-shelf / ready-made software</span>
            <h3>Built for generalized use cases</h3>
            <p>Suitable when standard features meet immediate needs, though growing organizations often encounter structural constraints as operations evolve:</p>
            <ul>
              {OFF_THE_SHELF.map((o) => (
                <li key={o}>
                  <span aria-hidden="true">−</span>
                  {o}
                </li>
              ))}
            </ul>
            <p className="cs-off-foot">Best suited for standardized, non-differentiating administrative tasks.</p>
          </div>
          <div className="cs-custom">
            <span className="cs-tag">Custom software development</span>
            <h3>Engineered around your exact operational blueprint</h3>
            <div className="cs-pillars-grid">
              {CUSTOM_PILLARS.map((p) => (
                <div key={p.title}>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

function Industries() {
  return (
    <section id="industries" className="cs-section cs-section--tint">
      <div className="cs-wrap">
        <Reveal className="cs-sec-head cs-sec-head--row">
          <div>
            <p className="cs-kicker">Domain-Specific Engineering</p>
            <h2 className="cs-h2">Software Solutions Across Industries</h2>
            <p className="cs-sub">
              We build software around the workflows, records, and reporting needs of each industry. The modules depend on how that business operates.
            </p>
          </div>
          <p className="cs-meta">12 core sectors served · Custom modules available</p>
        </Reveal>
        <div className="cs-ind-grid">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name}>
              <div className="cs-ind">
                <div className="cs-ind-h">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <small>{ind.tag}</small>
                </div>
                <h3>{ind.name}</h3>
                <p>{ind.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

function Process() {
  return (
    <section id="process" className="cs-section cs-section--white">
      <div className="cs-wrap">
        <Reveal className="cs-sec-head">
          <p className="cs-kicker">Structured Engineering Lifecycle</p>
          <h2 className="cs-h2">From Business Requirements to a Powerful Software Solution</h2>
          <p className="cs-sub">
            Our seven-stage software engineering methodology ensures clear alignment, transparent milestones, and dependable delivery from initial discovery through ongoing evolution.
          </p>
        </Reveal>
        <ol className="cs-steps-grid">
          {PROCESS.map((p, i) => (
            <li key={p.title} className="cs-step-li">
              <Reveal className="cs-step">
                <span className="cs-step-n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why RoyalTech                                                       */
/* ------------------------------------------------------------------ */

function Why() {
  return (
    <section className="cs-section cs-section--tint">
      <div className="cs-wrap cs-split cs-split--top">
        <Reveal className="cs-why-side">
          <p className="cs-kicker">Why RoyalTech Innovation</p>
          <h2 className="cs-h2">Your Technology Partner for Smarter Business Solutions</h2>
          <p className="cs-prose-p">
            RoyalTech Innovation is a custom software development company in Mohali. The same team provides software development services for businesses in Chandigarh and across Punjab, from the first requirements conversation through later updates.
          </p>
          <div className="cs-gov">
            <div className="cs-gov-h">
              <strong>Client project governance</strong>
              <span>Sprint transparency</span>
            </div>
            <div>
              <span>Milestone 1: Architecture &amp; wireframes</span>
              <b className="ok">Approved</b>
            </div>
            <div>
              <span>Milestone 2: Core modules &amp; APIs</span>
              <b className="blue">Staging review</b>
            </div>
            <div>
              <span>Milestone 3: QA &amp; production rollout</span>
              <b className="mute">Scheduled</b>
            </div>
          </div>
        </Reveal>
        <Reveal className="cs-why-list">
          {WHY.map((w) => (
            <div key={w.tag} className="cs-why-row">
              <span>{w.tag}</span>
              <div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Engineering standards                                               */
/* ------------------------------------------------------------------ */

function Engineering() {
  return (
    <section className="cs-section cs-section--navy">
      <div className="cs-wrap cs-split">
        <Reveal className="cs-eng-copy">
          <p className="cs-kicker cs-kicker--sky">Engineering Standards</p>
          <h2 className="cs-h2">Built for Reliability, Security &amp; Long-Term Growth</h2>
          <p className="cs-sub">
            We develop software with a focus on reliability, maintainability, performance, security, and scalability to support evolving business requirements.
          </p>
          <ul className="cs-safe">
            {SAFEGUARDS.map((s) => (
              <li key={s}>
                <span aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="cs-console">
          <div className="cs-console-h">
            <strong>System architecture &amp; safeguard layers</strong>
            <span>Monitoring active</span>
          </div>
          <div className="cs-console-l cs-console-l--sky">
            <div>
              <strong>01. Edge &amp; API security layer</strong>
              <small>TLS · rate limiting · RBAC</small>
            </div>
            <p>Token verification, input validation, and scoped endpoint authorization protect every request.</p>
          </div>
          <div className="cs-console-l">
            <div>
              <strong>02. Application &amp; code quality layer</strong>
              <small>Automated tests · structured logs</small>
            </div>
            <p>Modular service boundaries, exception tracking, and clean repository standards simplify long-term updates.</p>
          </div>
          <div className="cs-console-l cs-console-l--ok">
            <div>
              <strong>03. Database &amp; backup resilience layer</strong>
              <small>Indexed schemas · scheduled snapshots</small>
            </div>
            <p>Query optimization, encrypted storage at rest, and automated backup policies safeguard business continuity.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Maintenance                                                         */
/* ------------------------------------------------------------------ */

function Maintenance() {
  return (
    <section className="cs-section cs-section--white">
      <div className="cs-wrap cs-split">
        <Reveal className="cs-release">
          <div className="cs-release-h">
            <div>
              <strong>Application lifecycle &amp; release console</strong>
              <small>Illustrative example of a release log</small>
            </div>
            <span>Support active</span>
          </div>
          <div className="cs-rel">
            <div>
              <div>
                <span className="cs-ver">v2.8.0</span>
                <strong>Feature enhancement &amp; reporting module</strong>
              </div>
              <p>Added custom export filters and automated weekly executive summary emails.</p>
              <b className="blue">Deployed</b>
            </div>
            <div>
              <div>
                <span className="cs-ver cs-ver--soft">v2.7.4</span>
                <strong>Database indexing &amp; security patch</strong>
              </div>
              <p>Optimized high-volume search queries and updated dependency packages.</p>
              <b className="mute">Verified</b>
            </div>
            <div>
              <div>
                <span className="cs-ver cs-ver--grey">Ticket</span>
                <strong>Third-party payment webhook maintenance</strong>
              </div>
              <p>Updated gateway API endpoint compatibility with zero service interruption.</p>
              <b className="blue">Resolved</b>
            </div>
          </div>
        </Reveal>
        <Reveal className="cs-maint-copy">
          <p className="cs-kicker">Post-Launch Continuity</p>
          <h2 className="cs-h2">Software That Keeps Evolving With Your Business</h2>
          <p className="cs-prose-p">Software requires continuous improvement to remain reliable, secure, and aligned with changing business requirements.</p>
          <p className="cs-prose-p">
            We provide ongoing maintenance, updates, troubleshooting, optimization, feature development, and technical support to help businesses keep their software running smoothly.
          </p>
          <ul className="cs-checks cs-checks--two">
            {MAINTENANCE_ITEMS.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <div>
            <Lead service="Software Maintenance & Support" title="Get Software Support" className="cs-btn cs-btn--primary">
              Get Software Support
              <Arrow />
            </Lead>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ and final CTA                                                   */
/* ------------------------------------------------------------------ */

function Faq() {
  return (
    <section id="faq" className="cs-section cs-section--tint">
      <div className="cs-wrap cs-wrap--narrow">
        <Reveal className="cs-sec-head cs-sec-head--center">
          <p className="cs-kicker">Answers &amp; Guidance</p>
          <h2 className="cs-h2">Frequently Asked Questions About Custom Software Development</h2>
          <p className="cs-sub">Clear answers on scope, timelines, technology architecture, integrations, and long-term maintenance.</p>
        </Reveal>
        <FaqAccordion />
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="cs-section cs-section--white cs-final-wrap">
      <div className="cs-wrap">
        <Reveal className="cs-final">
          <div className="cs-final-copy">
            <span className="cs-final-tag">Start your software initiative</span>
            <h2>Let&apos;s Build Software That Solves Real Business Challenges</h2>
            <p>
              Whether you want to automate operations, build a custom business platform, connect your systems, or develop a new software product, RoyalTech Innovation is ready to help transform your ideas into powerful digital solutions.
            </p>
            <div className="cs-cta-row">
              <Lead service="Final CTA" title="Discuss Your Software Project" className="cs-btn cs-btn--white cs-btn--lg">
                Discuss Your Software Project
                <Arrow />
              </Lead>
              <Lead service="Final CTA" title="Talk to Our Experts" className="cs-btn cs-btn--outline cs-btn--lg">
                Talk to Our Experts
              </Lead>
            </div>
            <div className="cs-final-meta">
              <span>RoyalTech Innovation · Mohali · Chandigarh · Punjab</span>
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
          </div>
          <div className="cs-final-card" aria-hidden="true">
            <div className="cs-final-card-h">
              <span>
                <i className="cs-dot cs-dot--blue" /> Project scoping &amp; solution blueprint
              </span>
              <small>RoyalTech Studio</small>
            </div>
            <div className="cs-final-step">
              <small>Step 1 · Discovery session</small>
              <strong>Workflow &amp; architecture mapping</strong>
              <p>Align modules, user roles, integrations &amp; milestones.</p>
            </div>
            <div className="cs-final-kv">
              <div>
                <small>Deliverable</small>
                <b>Technical roadmap</b>
              </div>
              <div>
                <small>Engagement</small>
                <b>Milestone-based</b>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function CustomSoftwarePage({ rootClass = "" }: { rootClass?: string }) {
  return (
    <div className={`svx-root cs-root ${rootClass}`.trim()}>
      <Hero />
      <Intro />
      <Services />
      <Capabilities />
      <Technologies />
      <Compare />
      <Industries />
      <Process />
      <Why />
      <Engineering />
      <Maintenance />
      <Faq />
      <FinalCta />
    </div>
  );
}
