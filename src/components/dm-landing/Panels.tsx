import type { CSSProperties, ReactNode } from "react";
import {
  FaBookmark,
  FaCheck,
  FaComment,
  FaHeart,
  FaPaperPlane,
  FaPlay,
  FaShare,
  FaThumbsUp,
  FaTriangleExclamation,
} from "react-icons/fa6";

/**
 * Floating marketing-interface panels. Sized in `em`; the `.up` base class (from uiux.css)
 * scales the font with the stage width, so a panel grows and shrinks with its composition.
 * Everything here is a sample interface: skeleton bars and generic copy, never real
 * client names, rankings, statistics or campaign results.
 */

export function Dk({
  k,
  dark = false,
  className = "",
  children,
}: {
  k?: string;
  dark?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`up dk${dark ? " up--dark" : ""} ${className}`.trim()} aria-hidden="true">
      {k ? <div className="up-k">{k}</div> : null}
      {children}
    </div>
  );
}

const w = (pct: number): CSSProperties => ({ width: `${pct}%` });

/* ---------------------------------------------------------------- */
/* Search                                                            */
/* ---------------------------------------------------------------- */

export function SerpPanel({ compact = false }: { compact?: boolean }) {
  return (
    <Dk k="Search results" className="dk-serp">
      <div className="dk-q">
        <i />
        digital marketing company
      </div>
      <div className="dk-res dk-res--ad">
        <span className="dk-tag">Ad</span>
        <span className="dk-url">yourbrand.com</span>
        <b>Digital Marketing Services | Free Consultation</b>
        <i className="dk-sk" style={w(82)} />
      </div>
      <div className="dk-res dk-res--hi">
        <span className="dk-url">yourbrand.com › services › digital-marketing</span>
        <b>Digital Marketing Company for Growing Businesses</b>
        <i className="dk-sk" style={w(92)} />
        {compact ? null : <i className="dk-sk" style={w(64)} />}
      </div>
      {compact ? null : (
        <div className="dk-res">
          <span className="dk-url">example.com › blog</span>
          <b className="dim">What Is Digital Marketing?</b>
          <i className="dk-sk" style={w(74)} />
        </div>
      )}
    </Dk>
  );
}

const KEYWORDS: [string, string, number, string][] = [
  ["digital marketing services", "Commercial", 62, "c"],
  ["seo services near me", "Local", 38, "l"],
  ["how does ppc work", "Informational", 24, "i"],
  ["email marketing agency", "Transactional", 46, "t"],
];

export function KeywordPanel() {
  return (
    <Dk k="Keyword research" className="dk-kw">
      <div className="dk-kw-h">
        <span>Keyword</span>
        <span>Intent</span>
        <span>Difficulty</span>
      </div>
      {KEYWORDS.map(([kw, intent, d, c]) => (
        <div key={kw} className="dk-kw-r">
          <b>{kw}</b>
          <span className={`dk-chip dk-chip--${c}`}>{intent}</span>
          <span className="dk-meter">
            <i style={w(d)} />
          </span>
        </div>
      ))}
    </Dk>
  );
}

export function AuditPanel() {
  const checks: [string, boolean][] = [
    ["Title & meta tags", true],
    ["Mobile friendly", true],
    ["Schema markup", true],
    ["Image compression", false],
    ["Internal links", true],
  ];
  return (
    <Dk k="Website SEO audit" className="dk-audit">
      <div className="dk-audit-b">
        <span className="dk-ring" role="presentation">
          <b>Site health</b>
        </span>
        <ul>
          {checks.map(([c, ok]) => (
            <li key={c} className={ok ? "ok" : "warn"}>
              {ok ? <FaCheck /> : <FaTriangleExclamation />}
              {c}
            </li>
          ))}
        </ul>
      </div>
    </Dk>
  );
}

export function VisibilityPanel({ dark = false }: { dark?: boolean }) {
  return (
    <Dk k="Search visibility" dark={dark} className="dk-vis">
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="dk-vis-svg">
        <path d="M0 36 L12 30 L24 32 L38 22 L52 25 L66 14 L80 17 L100 5 L100 40 L0 40Z" fill="rgba(56,189,248,0.28)" />
        <path d="M0 36 L12 30 L24 32 L38 22 L52 25 L66 14 L80 17 L100 5" fill="none" stroke="#2563eb" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="dk-legend">
        <span>
          <i className="b" />
          Organic
        </span>
        <span className="dim">Sample data</span>
      </div>
    </Dk>
  );
}

export function QueriesPanel() {
  const rows: [string, number, number][] = [
    ["digital marketing company", 84, 52],
    ["seo agency", 66, 40],
    ["google ads management", 52, 34],
    ["social media marketing services", 44, 26],
    ["local seo services", 32, 22],
  ];
  return (
    <Dk k="Top search queries" className="dk-qry">
      <div className="dk-kw-h dk-qry-h">
        <span>Query</span>
        <span>Impressions</span>
        <span>Clicks</span>
      </div>
      {rows.map(([q, a, b]) => (
        <div key={q} className="dk-qry-r">
          <b>{q}</b>
          <span className="dk-meter">
            <i style={w(a)} />
          </span>
          <span className="dk-meter dk-meter--c">
            <i style={w(b)} />
          </span>
        </div>
      ))}
    </Dk>
  );
}

export function SiteStructure() {
  return (
    <Dk k="Website structure" className="dk-tree">
      <div className="dk-tree-in">
        <span className="n n--root">Home</span>
        <div className="dk-tree-l1">
          {["Services", "Blog", "About"].map((n, i) => (
            <div key={n} className="dk-tree-b">
              <span className="n n--1">{n}</span>
              <div className="dk-tree-l2">
                {(i === 0 ? ["SEO", "Social", "PPC"] : i === 1 ? ["Guides", "News"] : ["Team"]).map((c) => (
                  <span key={c} className="n n--2">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Dk>
  );
}

/* ---------------------------------------------------------------- */
/* Funnel + advertising                                              */
/* ---------------------------------------------------------------- */

export function FunnelPanel({ dark = false, k = "Conversion funnel" }: { dark?: boolean; k?: string }) {
  const steps: [string, number][] = [
    ["Awareness", 100],
    ["Interest", 76],
    ["Intent", 54],
    ["Leads", 34],
  ];
  return (
    <Dk k={k} dark={dark} className="dk-fun">
      {steps.map(([s, p]) => (
        <div key={s} className="dk-fun-r">
          <i style={w(p)}>
            <span>{s}</span>
          </i>
        </div>
      ))}
    </Dk>
  );
}

export function AdPreviewPanel({ dark = false }: { dark?: boolean }) {
  return (
    <Dk k="Search ad preview" dark={dark} className="dk-ad">
      <div className="dk-res dk-res--ad dk-res--plain">
        <span className="dk-tag">Sponsored</span>
        <span className="dk-url">yourbrand.com/marketing</span>
        <b>Digital Marketing Services for Your Business</b>
        <i className="dk-sk" style={w(94)} />
        <i className="dk-sk" style={w(62)} />
        <div className="dk-sitelinks">
          <span>Services</span>
          <span>Pricing</span>
          <span>Contact</span>
        </div>
      </div>
    </Dk>
  );
}

export function BudgetPanel({ dark = false }: { dark?: boolean }) {
  const rows: [string, number][] = [
    ["Search", 68],
    ["Display", 34],
    ["YouTube", 46],
    ["Shopping", 22],
  ];
  return (
    <Dk k="Budget allocation · sample" dark={dark} className="dk-bud">
      {rows.map(([n, p]) => (
        <div key={n} className="dk-bud-r">
          <span>{n}</span>
          <span className="dk-slider">
            <i style={w(p)} />
            <b style={{ left: `${p}%` }} />
          </span>
        </div>
      ))}
    </Dk>
  );
}

export function AudiencePanel({ dark = false }: { dark?: boolean }) {
  const rows: [string, boolean][] = [
    ["In-market audience", true],
    ["Website remarketing", true],
    ["Similar audiences", false],
    ["Custom intent", true],
  ];
  return (
    <Dk k="Audience targeting" dark={dark} className="dk-aud">
      {rows.map(([n, on]) => (
        <div key={n} className="dk-aud-r">
          <span>{n}</span>
          <span className={`up-toggle${on ? " on" : ""}`}>
            <i />
          </span>
        </div>
      ))}
    </Dk>
  );
}

/* ---------------------------------------------------------------- */
/* Social                                                            */
/* ---------------------------------------------------------------- */

const CAL: (string | null)[][] = [
  ["p", null, "r", null, "p", "s", null],
  [null, "b", "p", "a", null, "r", "p"],
  ["r", null, "e", "p", "s", null, "a"],
];
const CAL_LABEL: Record<string, string> = { p: "Post", r: "Reel", s: "Story", a: "Ad", b: "Blog", e: "Email" };

export function CalendarPanel({ rows = 3 }: { rows?: number }) {
  return (
    <Dk k="Content calendar" className="dk-cal">
      <div className="dk-cal-h">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
      {CAL.slice(0, rows).map((r, i) => (
        <div key={i} className="dk-cal-r">
          {r.map((c, j) => (
            <span key={j} className="dk-cal-c">
              {c ? <i className={`t-${c}`}>{CAL_LABEL[c]}</i> : null}
            </span>
          ))}
        </div>
      ))}
    </Dk>
  );
}

export function EngagementPanel({ dark = false }: { dark?: boolean }) {
  return (
    <Dk k="Audience engagement" dark={dark} className="dk-eng">
      <div className="dk-eng-r">
        <span>
          <FaHeart />
          <i className="dk-sk" style={w(70)} />
        </span>
        <span>
          <FaComment />
          <i className="dk-sk" style={w(46)} />
        </span>
        <span>
          <FaShare />
          <i className="dk-sk" style={w(34)} />
        </span>
      </div>
      <div className="dk-bars">
        {[40, 56, 44, 70, 52, 84, 66].map((h, i) => (
          <i key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
    </Dk>
  );
}

export function PostIG({ headline = "New season, new look", caption = true }: { headline?: string; caption?: boolean }) {
  return (
    <Dk className="dk-post dk-ig">
      <div className="dk-post-h">
        <span className="dk-av" />
        <b>yourbrand</b>
      </div>
      <div className="dk-post-img">
        <span className="dk-shape s1" />
        <span className="dk-shape s2" />
        <strong>{headline}</strong>
      </div>
      <div className="dk-post-a">
        <FaHeart />
        <FaComment />
        <FaPaperPlane />
        <FaBookmark className="end" />
      </div>
      {caption ? (
        <>
          <i className="dk-sk" style={w(88)} />
          <i className="dk-sk" style={w(54)} />
        </>
      ) : null}
    </Dk>
  );
}

export function PostLI({ title = "5 questions to ask before choosing a marketing channel" }: { title?: string }) {
  return (
    <Dk className="dk-post dk-li">
      <div className="dk-post-h">
        <span className="dk-av dk-av--sq" />
        <span>
          <b>Your Brand</b>
          <em>Marketing insights</em>
        </span>
      </div>
      <p>{title}</p>
      <i className="dk-sk" style={w(92)} />
      <div className="dk-post-img dk-post-img--wide">
        <span className="dk-shape s1" />
        <strong>Channel planning guide</strong>
      </div>
      <div className="dk-post-a dk-post-a--li">
        <FaThumbsUp />
        <FaComment />
        <FaShare />
      </div>
    </Dk>
  );
}

export function PostFB() {
  return (
    <Dk className="dk-post dk-fb">
      <div className="dk-post-h">
        <span className="dk-av" />
        <span>
          <b>Your Brand</b>
          <em>Sponsored</em>
        </span>
      </div>
      <i className="dk-sk" style={w(90)} />
      <div className="dk-post-img dk-post-img--wide">
        <span className="dk-shape s2" />
        <strong>Seasonal offer</strong>
      </div>
      <div className="dk-fb-cta">
        <span>
          <em>yourbrand.com</em>
          <b>Book your free consultation</b>
        </span>
        <span className="bt">Learn more</span>
      </div>
    </Dk>
  );
}

/** Vertical short-form video screen for a phone frame. */
export function ReelScreen({ line = "Behind the scenes" }: { line?: string }) {
  return (
    <div className="dk-reel">
      <div className="dk-reel-v">
        <span className="dk-shape s1" />
        <span className="dk-shape s2" />
        <FaPlay className="play" />
      </div>
      <div className="dk-reel-side">
        <FaHeart />
        <FaComment />
        <FaShare />
      </div>
      <div className="dk-reel-cap">
        <span className="dk-av" />
        <b>yourbrand</b>
        <p>{line}</p>
      </div>
    </div>
  );
}

/** Scrolling feed screen for a phone frame. */
export function FeedScreen() {
  return (
    <div className="dk-feed">
      <div className="dk-stories">
        {[0, 1, 2, 3, 4].map((i) => (
          <i key={i} className={i === 0 ? "on" : ""} />
        ))}
      </div>
      <div className="dk-feed-p">
        <div className="dk-post-h">
          <span className="dk-av" />
          <b>yourbrand</b>
        </div>
        <div className="dk-post-img">
          <span className="dk-shape s1" />
          <span className="dk-shape s2" />
          <strong>Brand story</strong>
        </div>
        <div className="dk-post-a">
          <FaHeart />
          <FaComment />
          <FaPaperPlane />
        </div>
      </div>
      <div className="dk-feed-p dk-feed-p--b">
        <div className="dk-post-img dk-post-img--wide">
          <span className="dk-shape s2" />
          <strong>Offer</strong>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Content                                                           */
/* ---------------------------------------------------------------- */

export function WorkflowPanel() {
  const steps: [string, string][] = [
    ["Idea", "done"],
    ["Draft", "done"],
    ["Review", "now"],
    ["Publish", ""],
  ];
  return (
    <Dk k="Editorial workflow" className="dk-wf">
      <ol>
        {steps.map(([s, st]) => (
          <li key={s} className={st}>
            <i>{st === "done" ? <FaCheck /> : null}</i>
            {s}
          </li>
        ))}
      </ol>
    </Dk>
  );
}

export function TopicCluster({ dark = false }: { dark?: boolean }) {
  const nodes: [number, number, string][] = [
    [18, 18, "Keyword research"],
    [82, 18, "Search intent"],
    [10, 52, "Local SEO"],
    [90, 52, "On-page SEO"],
    [24, 86, "Link building"],
    [76, 86, "Technical SEO"],
  ];
  return (
    <Dk k="Topic cluster" dark={dark} className="dk-topic">
      <div className="dk-topic-in">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {nodes.map(([x, y], i) => (
            <line key={i} x1="50" y1="52" x2={x} y2={y} vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
        <span className="pillar">SEO guide</span>
        {nodes.map(([x, y, t]) => (
          <span key={t} className="node" style={{ left: `${x}%`, top: `${y}%` }}>
            {t}
          </span>
        ))}
      </div>
    </Dk>
  );
}

/* ---------------------------------------------------------------- */
/* Email                                                             */
/* ---------------------------------------------------------------- */

export function EmailPanel() {
  return (
    <Dk className="dk-mail">
      <div className="dk-mail-bar">
        <i />
        <b>Your Brand</b>
        <em>Newsletter</em>
      </div>
      <div className="dk-mail-hero">
        <span className="dk-shape s1" />
        <strong>This month at Your Brand</strong>
      </div>
      <i className="dk-sk" style={w(92)} />
      <i className="dk-sk" style={w(76)} />
      <i className="dk-sk" style={w(84)} />
      <span className="dk-mail-btn">Read the guide</span>
    </Dk>
  );
}

export function InboxPanel() {
  const rows: [string, string, boolean][] = [
    ["Your Brand", "Welcome! Here is what to expect", true],
    ["Your Brand", "Your weekly marketing digest", true],
    ["Your Brand", "A small thank-you for being here", false],
  ];
  return (
    <Dk k="Inbox preview" className="dk-inbox">
      {rows.map(([s, t, u], i) => (
        <div key={i} className={`dk-inbox-r${u ? " u" : ""}`}>
          <span className="dk-av" />
          <span>
            <b>{s}</b>
            <em>{t}</em>
          </span>
          {u ? <i /> : null}
        </div>
      ))}
    </Dk>
  );
}

export function SegmentsPanel({ dark = false }: { dark?: boolean }) {
  const rows: [string, number][] = [
    ["New subscribers", 62],
    ["Active readers", 78],
    ["Past customers", 46],
    ["Inactive", 28],
  ];
  return (
    <Dk k="Customer segments" dark={dark} className="dk-seg">
      {rows.map(([n, p]) => (
        <div key={n} className="dk-seg-r">
          <span>{n}</span>
          <span className="dk-meter">
            <i style={w(p)} />
          </span>
        </div>
      ))}
    </Dk>
  );
}

export function EmailStatsPanel() {
  return (
    <Dk k="Campaign analytics" className="dk-estat">
      <div className="dk-estat-g">
        {["Opens", "Clicks", "Replies"].map((l, i) => (
          <span key={l}>
            <em>{l}</em>
            <i className="dk-sk dk-sk--v" style={w(54 + i * 10)} />
          </span>
        ))}
      </div>
      <div className="dk-bars dk-bars--blue">
        {[34, 48, 40, 62, 56, 72].map((h, i) => (
          <i key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
    </Dk>
  );
}

/* ---------------------------------------------------------------- */
/* Analytics + editorial extras                                      */
/* ---------------------------------------------------------------- */

export function ChannelPanel({ dark = false }: { dark?: boolean }) {
  const rows: [string, number, number][] = [
    ["Search", 78, 60],
    ["Social", 56, 64],
    ["Ads", 66, 44],
    ["Email", 40, 48],
  ];
  return (
    <Dk k="Channel performance · sample" dark={dark} className="dk-chan">
      {rows.map(([n, a, b]) => (
        <div key={n} className="dk-chan-r">
          <span>{n}</span>
          <span className="stack">
            <span className="dk-meter">
              <i style={w(a)} />
            </span>
            <span className="dk-meter dk-meter--c">
              <i style={w(b)} />
            </span>
          </span>
        </div>
      ))}
      <div className="dk-legend">
        <span>
          <i className="b" />
          This period
        </span>
        <span>
          <i className="c" />
          Previous
        </span>
      </div>
    </Dk>
  );
}

export function ArticlePanel() {
  return (
    <Dk className="dk-art">
      <span className="dk-art-cat">Guide</span>
      <h4>How to plan a content calendar your team can keep</h4>
      <div className="dk-art-by">
        <span className="dk-av" />
        Editorial team
      </div>
      <i className="dk-sk" style={w(96)} />
      <i className="dk-sk" style={w(88)} />
      <i className="dk-sk" style={w(92)} />
      <div className="dk-art-h">
        <span>H2</span>
        <i className="dk-sk" style={w(54)} />
      </div>
      <i className="dk-sk" style={w(84)} />
    </Dk>
  );
}
