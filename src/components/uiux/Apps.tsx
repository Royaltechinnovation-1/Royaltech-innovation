import type { CSSProperties } from "react";
import { Browser } from "./Sites";

/**
 * Application interfaces for the dashboard and product-design sections.
 * Real UI labels, skeleton values: no invented analytics, customers or revenue.
 */

const w = (n: number): CSSProperties => ({ width: `${n}%` });

function Side({ items, on = 0 }: { items: string[]; on?: number }) {
  return (
    <aside className="ua-side">
      <span className="ua-brand">
        <i />
        Northwind
      </span>
      <nav className="ua-nav">
        {items.map((t, i) => (
          <span key={t} className={i === on ? "on" : ""}>
            <i />
            {t}
          </span>
        ))}
      </nav>
      <span className="ua-user">
        <i />
        <b />
      </span>
    </aside>
  );
}

function Spark({ pts, tone = "up" }: { pts: string; tone?: "up" | "flat" }) {
  return (
    <svg viewBox="0 0 100 28" preserveAspectRatio="none" className={`ua-spark ua-spark--${tone}`} aria-hidden="true">
      <polyline points={pts} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Analytics / admin dashboard: sidebar, filters, KPI cards, charts and a data table. */
export function AppDash({ className = "" }: { className?: string }) {
  const kpis: [string, string][] = [
    ["Revenue", "4,22 18,18 32,20 46,12 60,14 74,8 100,4"],
    ["Active users", "4,20 18,22 32,16 46,17 60,10 74,12 100,6"],
    ["Orders", "4,16 18,20 32,14 46,18 60,12 74,9 100,7"],
    ["Conversion", "4,14 18,12 32,18 46,10 60,14 74,8 100,9"],
  ];
  return (
    <Browser
      className={`ua ${className}`.trim()}
      url="app.northwind.studio/overview"
      label="Professional analytics dashboard design with sidebar navigation, filters, KPI cards, revenue chart, traffic breakdown and a customer table"
    >
      <div className="ua-shell">
        <Side items={["Overview", "Analytics", "Customers", "Orders", "Reports", "Team", "Settings"]} />
        <div className="ua-main">
          <div className="ua-top">
            <div className="ua-crumb">
              Overview <i>/</i> <b>Sales</b>
            </div>
            <span className="ua-search">Search customers, orders…</span>
            <span className="ua-pillbtn">Last 30 days</span>
            <span className="ua-av" />
          </div>
          <div className="ua-filters">
            <span className="on">All channels</span>
            <span>Region</span>
            <span>Product</span>
            <span className="ua-add">+ Add filter</span>
            <span className="ua-export">Export</span>
          </div>
          <div className="ua-kpis">
            {kpis.map(([k, p], i) => (
              <div key={k} className="ua-kpi">
                <span className="ua-k">{k}</span>
                <i className="ua-val" style={w(52 + i * 6)} />
                <div className="ua-kpi-foot">
                  <span className="ua-delta">
                    <i />
                  </span>
                  <Spark pts={p} />
                </div>
              </div>
            ))}
          </div>
          <div className="ua-mid">
            <div className="ua-card ua-chart">
              <div className="ua-ch">
                <b>Revenue overview</b>
                <span className="ua-legend">
                  <i className="a" />
                  This period
                  <i className="b" />
                  Previous
                </span>
              </div>
              <svg viewBox="0 0 240 90" preserveAspectRatio="none" className="ua-area" aria-hidden="true">
                <defs>
                  <linearGradient id="uadg" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#2563eb" stopOpacity=".28" />
                    <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[18, 38, 58, 78].map((y) => (
                  <line key={y} x1="0" x2="240" y1={y} y2={y} className="ua-grid" />
                ))}
                <path d="M0 70 C20 66 34 44 58 50 S96 74 124 48 S170 22 196 34 S230 18 240 12 V90 H0Z" fill="url(#uadg)" />
                <path d="M0 70 C20 66 34 44 58 50 S96 74 124 48 S170 22 196 34 S230 18 240 12" className="ua-l1" />
                <path d="M0 78 C24 72 40 62 66 64 S104 70 132 58 S176 48 204 52 S232 40 240 38" className="ua-l2" />
              </svg>
              <div className="ua-axis">
                {["Wk 1", "Wk 2", "Wk 3", "Wk 4"].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="ua-card ua-don">
              <div className="ua-ch">
                <b>Traffic sources</b>
              </div>
              <div className="ua-don-body">
                <svg viewBox="0 0 36 36" className="ua-donut" aria-hidden="true">
                  <circle cx="18" cy="18" r="15.9" className="t" />
                  <circle cx="18" cy="18" r="15.9" className="s s1" strokeDasharray="40 60" strokeDashoffset="25" />
                  <circle cx="18" cy="18" r="15.9" className="s s2" strokeDasharray="26 74" strokeDashoffset="-15" />
                  <circle cx="18" cy="18" r="15.9" className="s s3" strokeDasharray="20 80" strokeDashoffset="-41" />
                </svg>
                <ul className="ua-dl">
                  {["Direct", "Search", "Referral"].map((t, i) => (
                    <li key={t}>
                      <i className={`s${i + 1}`} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="ua-card ua-table">
            <div className="ua-ch">
              <b>Recent customers</b>
              <span className="ua-tabs">
                <span className="on">All</span>
                <span>Active</span>
                <span>Trial</span>
              </span>
            </div>
            <div className="ua-tr ua-th">
              <span>Customer</span>
              <span>Plan</span>
              <span>Status</span>
              <span>Updated</span>
            </div>
            {[
              ["Pro", "Active"],
              ["Team", "Active"],
              ["Starter", "Trial"],
            ].map(([plan, st], i) => (
              <div key={i} className="ua-tr">
                <span className="ua-cust">
                  <i className="ua-av2" />
                  <i className="ua-line" style={w(60 - i * 8)} />
                </span>
                <span>{plan}</span>
                <span>
                  <em className={st === "Trial" ? "warn" : ""}>{st}</em>
                </span>
                <span>
                  <i className="ua-line" style={w(52)} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Browser>
  );
}

/** Dark SaaS product interface: roadmap board with a feature-detail panel. */
export function AppSaas({ className = "" }: { className?: string }) {
  const cols: { t: string; cards: { tag: string; lines: [number, number]; done?: boolean }[] }[] = [
    {
      t: "Discovery",
      cards: [
        { tag: "Research", lines: [78, 52] },
        { tag: "Strategy", lines: [66, 44] },
      ],
    },
    {
      t: "Design",
      cards: [
        { tag: "UI design", lines: [72, 48] },
        { tag: "Prototype", lines: [60, 40] },
        { tag: "Design system", lines: [70, 36] },
      ],
    },
    {
      t: "Ready for build",
      cards: [
        { tag: "Handoff", lines: [74, 46], done: true },
        { tag: "MVP scope", lines: [64, 38], done: true },
      ],
    },
  ];
  return (
    <Browser
      dark
      className={`ua ua--dark ${className}`.trim()}
      url="app.northwind.studio/roadmap"
      label="SaaS product interface in a dark theme showing a product roadmap board with discovery, design and ready-for-build columns"
    >
      <div className="ua-shell">
        <Side items={["Roadmap", "Research", "Designs", "Prototypes", "Handoff", "Settings"]} />
        <div className="ua-main ua-main--board">
          <div className="ua-top">
            <div className="ua-crumb">
              <b>Product roadmap</b>
            </div>
            <span className="ua-tabs ua-tabs--top">
              <span className="on">Board</span>
              <span>List</span>
              <span>Timeline</span>
            </span>
            <span className="ua-stack">
              <i />
              <i />
              <i />
            </span>
            <span className="ua-primary">New feature</span>
          </div>
          <div className="ua-board">
            <div className="ua-cols">
              {cols.map((c) => (
                <div key={c.t} className="ua-col">
                  <div className="ua-colh">
                    <b>{c.t}</b>
                    <span>{c.cards.length}</span>
                  </div>
                  {c.cards.map((card, i) => (
                    <div key={i} className="ua-task">
                      <span className={`ua-tag${card.done ? " done" : ""}`}>{card.tag}</span>
                      <i className="ua-line" style={w(card.lines[0])} />
                      <i className="ua-line" style={w(card.lines[1])} />
                      <div className="ua-tfoot">
                        <i className="ua-av2" />
                        <span className="ua-prog">
                          <i style={w(card.done ? 100 : 40 + i * 15)} />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <aside className="ua-detail">
              <span className="ua-k">Feature details</span>
              <i className="ua-line" style={w(80)} />
              <i className="ua-line" style={w(56)} />
              <ul className="ua-checks">
                {["Research complete", "Prototype tested", "Specs ready"].map((t, i) => (
                  <li key={t} className={i < 2 ? "on" : ""}>
                    <i />
                    {t}
                  </li>
                ))}
              </ul>
              <span className="ua-primary ua-primary--full">Send to development</span>
            </aside>
          </div>
        </div>
      </div>
    </Browser>
  );
}
