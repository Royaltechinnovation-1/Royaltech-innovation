import type { CSSProperties, ReactNode } from "react";
import {
  FaBullhorn,
  FaChartLine,
  FaCheck,
  FaEnvelope,
  FaFileLines,
  FaGear,
  FaImage,
  FaLocationDot,
  FaMagnifyingGlass,
  FaShareNodes,
  FaUsers,
} from "react-icons/fa6";

/**
 * Interfaces drawn inside the shared `Browser` frame (see uiux.css `.ux-br`).
 * Every measurement is `cqw` of the frame, so each view scales with the width its stage gives it.
 * Sample interfaces only: skeleton values, generic copy, no real brands, rankings or results.
 */

const w = (pct: number): CSSProperties => ({ width: `${pct}%` });

type NavItem = [ReactNode, string];

function Side({ items, active = 0, brand = "Growth", dark = false }: { items: NavItem[]; active?: number; brand?: string; dark?: boolean }) {
  return (
    <div className={`dv-side${dark ? " dv-side--dark" : ""}`}>
      <span className="dv-brand">
        <i />
        {brand}
      </span>
      {items.map(([ic, l], i) => (
        <span key={l} className={i === active ? "on" : ""}>
          {ic}
          {l}
        </span>
      ))}
    </div>
  );
}

const NAV: NavItem[] = [
  [<FaChartLine key="a" />, "Overview"],
  [<FaMagnifyingGlass key="b" />, "Search"],
  [<FaShareNodes key="c" />, "Social"],
  [<FaBullhorn key="d" />, "Ads"],
  [<FaEnvelope key="e" />, "Email"],
  [<FaFileLines key="f" />, "Reports"],
];

/* ---------------------------------------------------------------- */
/* Marketing analytics dashboard                                      */
/* ---------------------------------------------------------------- */

export function ViewAnalytics({ full = true }: { full?: boolean }) {
  const kpis: [string, string][] = [
    ["Sessions", "M0 22 L10 18 L20 20 L32 12 L44 15 L58 6 L72 9 L100 2"],
    ["Leads", "M0 20 L14 22 L26 14 L40 17 L54 9 L70 12 L100 4"],
    ["Engagement", "M0 16 L12 12 L26 18 L40 9 L56 13 L72 5 L100 8"],
    ["Conversions", "M0 22 L16 19 L30 21 L46 12 L62 14 L80 6 L100 3"],
  ];
  return (
    <div className="dv dv-an">
      <Side items={NAV} />
      <div className="dv-main">
        <div className="dv-top">
          <b>Marketing overview</b>
          <span className="dv-chips">
            <i className="tag">Sample data</i>
            <i className="on">Last 30 days</i>
            <i>All channels</i>
          </span>
        </div>
        <div className="dv-kpis">
          {kpis.map(([k, p]) => (
            <div key={k} className="dv-kpi">
              <span className="dv-k">{k}</span>
              <i className="dv-val" />
              <svg viewBox="0 0 100 26" preserveAspectRatio="none">
                <path d={p} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          ))}
        </div>
        <div className="dv-row">
          <div className="dv-card dv-traffic">
            <div className="dv-card-h">
              <b>Traffic by channel</b>
              <span className="dv-lg">
                <i className="a" />
                Organic
                <i className="b" />
                Paid
                <i className="c" />
                Social
              </span>
            </div>
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="dv-area">
              {[10, 20, 30].map((y) => (
                <line key={y} x1="0" x2="100" y1={y} y2={y} className="gl" vectorEffect="non-scaling-stroke" />
              ))}
              <path d="M0 33 L14 28 L28 30 L44 20 L58 23 L72 13 L86 15 L100 6 L100 40 L0 40Z" className="fa" />
              <path d="M0 33 L14 28 L28 30 L44 20 L58 23 L72 13 L86 15 L100 6" className="la" vectorEffect="non-scaling-stroke" />
              <path d="M0 36 L16 33 L30 34 L46 27 L60 29 L74 22 L88 24 L100 17" className="lb" vectorEffect="non-scaling-stroke" />
              <path d="M0 38 L18 37 L34 35 L50 33 L66 32 L80 29 L100 27" className="lc" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          <div className="dv-card dv-split">
            <div className="dv-card-h">
              <b>Channel mix</b>
            </div>
            <div className="dv-split-b">
              <span className="dv-donut" />
              <ul>
                {["Search", "Social", "Ads", "Email"].map((c, i) => (
                  <li key={c}>
                    <i className={`d${i}`} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {full ? (
          <div className="dv-row dv-row--b">
            <div className="dv-card dv-fun">
              <div className="dv-card-h">
                <b>Conversion funnel</b>
              </div>
              {[100, 74, 52, 33].map((p, i) => (
                <i key={i} style={w(p)} />
              ))}
            </div>
            <div className="dv-card dv-pages">
              <div className="dv-card-h">
                <b>Top landing pages</b>
              </div>
              {[88, 72, 60].map((p, i) => (
                <span key={i}>
                  <i className="dot" />
                  <i className="dv-sk" style={w(p)} />
                  <i className="dv-sk s" />
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Search results page                                                */
/* ---------------------------------------------------------------- */

export function ViewSerp() {
  return (
    <div className="dv dv-serp">
      <div className="dv-serp-top">
        <span className="dv-serp-logo">
          <i />
          Search
        </span>
        <span className="dv-serp-box">
          <FaMagnifyingGlass />
          digital marketing company
        </span>
      </div>
      <div className="dv-serp-tabs">
        {["All", "Maps", "News", "Shopping", "Images"].map((t, i) => (
          <span key={t} className={i === 0 ? "on" : ""}>
            {t}
          </span>
        ))}
      </div>
      <div className="dv-serp-body">
        <div className="dv-serp-list">
          <div className="dv-r dv-r--ad">
            <span className="tag">Sponsored</span>
            <span className="u">yourbrand.com</span>
            <b>Digital Marketing Services | Free Consultation</b>
            <i className="dv-sk" style={w(88)} />
          </div>
          <div className="dv-r dv-r--hi">
            <span className="u">yourbrand.com › services › digital-marketing</span>
            <b>Digital Marketing Company for Growing Businesses</b>
            <i className="dv-sk" style={w(94)} />
            <i className="dv-sk" style={w(70)} />
            <span className="dv-sl">
              <em>SEO</em>
              <em>Social Media</em>
              <em>Google Ads</em>
            </span>
          </div>
          <div className="dv-r">
            <span className="u">example.com › guides</span>
            <b className="dim">What Is Digital Marketing? A Beginner&apos;s Guide</b>
            <i className="dv-sk" style={w(80)} />
          </div>
          <div className="dv-r">
            <span className="u">example.org › resources</span>
            <b className="dim">Choosing a Marketing Agency</b>
            <i className="dv-sk" style={w(72)} />
          </div>
        </div>
        <div className="dv-serp-side">
          <div className="dv-map">
            <span className="pin p1">
              <FaLocationDot />
            </span>
            <span className="pin p2">
              <FaLocationDot />
            </span>
            <span className="pin p3">
              <FaLocationDot />
            </span>
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="dv-loc">
              <i className="dot" />
              <span>
                <i className="dv-sk" style={w(72 - i * 8)} />
                <i className="dv-sk s" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* SEO dashboard                                                      */
/* ---------------------------------------------------------------- */

export function ViewSeo() {
  return (
    <div className="dv dv-an dv-seo">
      <Side
        brand="SEO"
        items={[
          [<FaChartLine key="1" />, "Visibility"],
          [<FaMagnifyingGlass key="2" />, "Queries"],
          [<FaFileLines key="3" />, "Content"],
          [<FaGear key="4" />, "Site audit"],
          [<FaShareNodes key="5" />, "Links"],
        ]}
      />
      <div className="dv-main">
        <div className="dv-top">
          <b>Organic search performance</b>
          <span className="dv-chips">
            <i className="tag">Sample data</i>
            <i className="on">Last 90 days</i>
          </span>
        </div>
        <div className="dv-row dv-row--seo">
          <div className="dv-card dv-traffic">
            <div className="dv-card-h">
              <b>Organic traffic</b>
              <span className="dv-lg">
                <i className="a" />
                This period
                <i className="c" />
                Previous
              </span>
            </div>
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="dv-area">
              {[10, 20, 30].map((y) => (
                <line key={y} x1="0" x2="100" y1={y} y2={y} className="gl" vectorEffect="non-scaling-stroke" />
              ))}
              <path d="M0 34 L10 30 L22 31 L36 24 L48 26 L62 16 L76 18 L88 9 L100 7 L100 40 L0 40Z" className="fa" />
              <path d="M0 34 L10 30 L22 31 L36 24 L48 26 L62 16 L76 18 L88 9 L100 7" className="la" vectorEffect="non-scaling-stroke" />
              <path d="M0 37 L18 35 L34 36 L52 31 L70 30 L86 26 L100 25" className="lc" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          <div className="dv-card dv-health">
            <div className="dv-card-h">
              <b>Site audit</b>
            </div>
            <div className="dv-health-b">
              <span className="dv-ring" />
              <ul>
                {["Meta tags", "Schema", "Speed", "Links"].map((c) => (
                  <li key={c}>
                    <FaCheck />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="dv-row dv-row--b dv-row--seo2">
          <div className="dv-card dv-q">
            <div className="dv-card-h">
              <b>Top queries</b>
              <span className="dim">Impressions · Clicks</span>
            </div>
            {[
              ["digital marketing company", 84, 50],
              ["seo services", 66, 38],
              ["ppc management services", 48, 30],
              ["local seo services", 34, 22],
            ].map(([q, a, b]) => (
              <span key={q as string} className="dv-q-r">
                <b>{q}</b>
                <i className="m" style={w(a as number)} />
                <i className="m c" style={w(b as number)} />
              </span>
            ))}
          </div>
          <div className="dv-card dv-opt">
            <div className="dv-card-h">
              <b>Content optimization</b>
            </div>
            {["Primary keyword in title", "Descriptive headings", "Internal links added", "Image alt text"].map((c, i) => (
              <span key={c} className={i === 3 ? "todo" : "done"}>
                <i>{i === 3 ? "" : <FaCheck />}</i>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Ads manager                                                        */
/* ---------------------------------------------------------------- */

export function ViewAds() {
  return (
    <div className="dv dv-an dv-ads">
      <Side
        brand="Ads"
        items={[
          [<FaBullhorn key="1" />, "Campaigns"],
          [<FaFileLines key="2" />, "Ad groups"],
          [<FaMagnifyingGlass key="3" />, "Keywords"],
          [<FaUsers key="4" />, "Audiences"],
          [<FaChartLine key="5" />, "Reports"],
        ]}
      />
      <div className="dv-main">
        <div className="dv-top">
          <b>Campaign setup</b>
          <span className="dv-steps">
            <i className="done">Goal</i>
            <i className="done">Budget</i>
            <i className="now">Keywords</i>
            <i>Ads</i>
          </span>
        </div>
        <div className="dv-row dv-row--ads">
          <div className="dv-card dv-camp">
            <div className="dv-card-h">
              <b>Campaigns</b>
              <i className="tag">Sample data</i>
            </div>
            {[
              ["Search · Services", true, 78],
              ["Display · Remarketing", true, 44],
              ["YouTube · Awareness", false, 36],
              ["Shopping · Products", true, 58],
            ].map(([n, on, b]) => (
              <span key={n as string} className="dv-camp-r">
                <i className={`sw${on ? " on" : ""}`}>
                  <b />
                </i>
                <em>{n}</em>
                <i className="bar" style={w(b as number)} />
              </span>
            ))}
          </div>
          <div className="dv-card dv-adprev">
            <div className="dv-card-h">
              <b>Ad preview</b>
            </div>
            <span className="tag">Sponsored</span>
            <span className="u">yourbrand.com/marketing</span>
            <b>Digital Marketing Services for Your Business</b>
            <i className="dv-sk" style={w(94)} />
            <i className="dv-sk" style={w(66)} />
          </div>
        </div>
        <div className="dv-row dv-row--b dv-row--ads2">
          <div className="dv-card dv-kwt">
            <div className="dv-card-h">
              <b>Keyword targeting</b>
            </div>
            <span className="dv-kwt-c">
              <em>digital marketing services</em>
              <em>[seo company]</em>
              <em>&quot;ppc management&quot;</em>
              <em>social media agency</em>
              <em className="neg">-free</em>
            </span>
          </div>
          <div className="dv-card dv-fun">
            <div className="dv-card-h">
              <b>Funnel</b>
            </div>
            {[100, 70, 46, 30].map((p, i) => (
              <i key={i} style={w(p)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Blog (editorial)                                                   */
/* ---------------------------------------------------------------- */

export function ViewBlog() {
  return (
    <div className="dv dv-blog">
      <div className="dv-blog-nav">
        <b>
          <i />
          The Growth Journal
        </b>
        <span>Strategy</span>
        <span>SEO</span>
        <span>Social</span>
        <span>Email</span>
        <em>Subscribe</em>
      </div>
      <div className="dv-blog-hero">
        <div className="dv-blog-copy">
          <span className="cat">Content strategy</span>
          <h4>How to build a content strategy that supports search</h4>
          <i className="dv-sk" style={w(92)} />
          <i className="dv-sk" style={w(74)} />
          <span className="by">
            <i className="av" />
            Editorial team
          </span>
        </div>
        <div className="dv-blog-art">
          <span className="a" />
          <span className="b" />
          <span className="c" />
        </div>
      </div>
      <div className="dv-blog-grid">
        {["SEO writing basics", "Planning a content calendar", "Turning posts into leads"].map((t, i) => (
          <div key={t} className="dv-blog-card">
            <span className={`art art--${i}`}>
              <FaImage />
            </span>
            <b>{t}</b>
            <i className="dv-sk" style={w(86)} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Email builder                                                      */
/* ---------------------------------------------------------------- */

export function ViewEmail() {
  return (
    <div className="dv dv-em">
      <div className="dv-em-l">
        <span className="h">Blocks</span>
        {["Header", "Text", "Image", "Button", "Footer"].map((b, i) => (
          <span key={b} className={i === 1 ? "on" : ""}>
            <i />
            {b}
          </span>
        ))}
      </div>
      <div className="dv-em-c">
        <div className="dv-em-mail">
          <div className="top">
            <i />
            <b>Your Brand</b>
          </div>
          <div className="hb">
            <span className="s1" />
            <strong>This month at Your Brand</strong>
          </div>
          <i className="dv-sk" style={w(90)} />
          <i className="dv-sk" style={w(78)} />
          <i className="dv-sk" style={w(84)} />
          <span className="bt">Read the guide</span>
        </div>
      </div>
      <div className="dv-em-r">
        <span className="h">Campaign</span>
        <span className="f">
          <em>Audience</em>
          <b>Active readers</b>
        </span>
        <span className="f">
          <em>Subject line A</em>
          <b>Your monthly marketing digest</b>
        </span>
        <span className="f">
          <em>Subject line B</em>
          <b>3 ideas for next month</b>
        </span>
        <span className="f">
          <em>Send time</em>
          <b>Tuesday morning</b>
        </span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Social scheduler                                                   */
/* ---------------------------------------------------------------- */

const MONTH: (string | null)[][] = [
  ["p", null, "r", "s", "p", null, null],
  [null, "p", null, "r", "a", "p", null],
  ["b", "s", "p", null, "r", "e", "p"],
  ["p", "r", null, "a", "p", "s", null],
];
const MONTH_LABEL: Record<string, string> = { p: "Post", r: "Reel", s: "Story", a: "Ad", b: "Blog", e: "Email" };

export function ViewSocial() {
  return (
    <div className="dv dv-an dv-soc">
      <Side
        brand="Social"
        items={[
          [<FaChartLine key="1" />, "Planner"],
          [<FaImage key="2" />, "Creatives"],
          [<FaUsers key="3" />, "Community"],
          [<FaChartLine key="4" />, "Analytics"],
        ]}
      />
      <div className="dv-main">
        <div className="dv-top">
          <b>Monthly content plan</b>
          <span className="dv-chips">
            <i className="on">Instagram</i>
            <i>Facebook</i>
            <i>LinkedIn</i>
            <i>YouTube</i>
          </span>
        </div>
        <div className="dv-soc-b">
          <div className="dv-card dv-month">
            <div className="dv-month-h">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
            {MONTH.map((r, i) => (
              <div key={i} className="dv-month-r">
                {r.map((c, j) => (
                  <span key={j}>{c ? <i className={`t-${c}`}>{MONTH_LABEL[c]}</i> : null}</span>
                ))}
              </div>
            ))}
          </div>
          <div className="dv-card dv-prev">
            <div className="dv-card-h">
              <b>Post preview</b>
            </div>
            <div className="dv-prev-img">
              <span className="s1" />
              <strong>Brand story</strong>
            </div>
            <i className="dv-sk" style={w(90)} />
            <i className="dv-sk" style={w(60)} />
            <span className="dv-prev-btn">Schedule</span>
          </div>
        </div>
      </div>
    </div>
  );
}
