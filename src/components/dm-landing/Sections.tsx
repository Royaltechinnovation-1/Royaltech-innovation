import Link from "next/link";
import { FaArrowRight, FaCheck, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import {
  ANALYTICS_ITEMS,
  CAPABILITIES,
  CONTACT,
  CONTENT_ITEMS,
  ECOSYSTEM,
  EMAIL_FLOW,
  EMAIL_ITEMS,
  PAID_ITEMS,
  PLATFORMS,
  PROCESS,
  RELATED_LINKS,
  SEO_ITEMS,
  SOCIAL_ITEMS,
  STRATEGY,
  WHY,
  type EcoKey,
  type StrategyArtKind,
} from "@/data/mk-page";
import { Abs, FloatCard, Phone } from "@/components/mobile-app/Phone";
import { Reveal } from "@/components/mobile-app/client";
import { Browser } from "@/components/uiux/Sites";
import { DmQuoteButton } from "./Interactive";
import {
  AdPreviewPanel,
  ArticlePanel,
  AudiencePanel,
  BudgetPanel,
  CalendarPanel,
  ChannelPanel,
  EmailPanel,
  EmailStatsPanel,
  EngagementPanel,
  FeedScreen,
  FunnelPanel,
  InboxPanel,
  KeywordPanel,
  PostFB,
  PostIG,
  PostLI,
  QueriesPanel,
  ReelScreen,
  SegmentsPanel,
  SerpPanel,
  SiteStructure,
  TopicCluster,
  VisibilityPanel,
  WorkflowPanel,
} from "./Panels";
import { ViewAnalytics, ViewSeo, ViewSocial } from "./Views";

/* ------------------------------------------------------------------ */
/* Capabilities: a connected channel ecosystem                         */
/* ------------------------------------------------------------------ */

function EcoArt({ k }: { k: EcoKey }) {
  switch (k) {
    case "search":
      return (
        <span className="mk-ea mk-ea--search" aria-hidden="true">
          <i className="q" />
          <i className="r hi" />
          <i className="r" />
        </span>
      );
    case "content":
      return (
        <span className="mk-ea mk-ea--content" aria-hidden="true">
          <i className="h" />
          <i className="l" />
          <i className="l s" />
          <i className="img" />
        </span>
      );
    case "social":
      return (
        <span className="mk-ea mk-ea--social" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </span>
      );
    case "ads":
      return (
        <span className="mk-ea mk-ea--ads" aria-hidden="true">
          <i className="tag">Ad</i>
          <i className="l" />
          <i className="l s" />
          <i className="bt" />
        </span>
      );
    case "website":
      return (
        <span className="mk-ea mk-ea--site" aria-hidden="true">
          <i className="bar" />
          <i className="hb" />
          <i className="c1" />
          <i className="c2" />
        </span>
      );
    case "leads":
      return (
        <span className="mk-ea mk-ea--leads" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span key={i}>
              <i className="av" />
              <i className="l" />
              <FaCheck />
            </span>
          ))}
        </span>
      );
    default:
      return (
        <span className="mk-ea mk-ea--an" aria-hidden="true">
          {[34, 52, 44, 70, 60, 86].map((h, i) => (
            <i key={i} style={{ height: `${h}%` }} />
          ))}
        </span>
      );
  }
}

export function Capabilities() {
  return (
    <section id="capabilities" className="ma-sec ma-navy ma-dark mk-cap" aria-labelledby="mk-cap-h">
      <div className="ma-grid-bg" aria-hidden="true" />
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-sec-head ma-sec-head--center">
            <span className="ma-eyebrow">Digital marketing capabilities</span>
            <h2 id="mk-cap-h" className="ma-h2 ma-h2--xl">
              Everything You Need to Grow Your Digital Presence
            </h2>
            <p className="ma-lead">
              We combine strategy, creativity, data, and marketing technology to help businesses build a strong online presence
              and reach their growth objectives.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ol className="mk-eco" aria-label="How our marketing channels connect">
            {ECOSYSTEM.map((e, i) => (
              <li key={e.key} className={`mk-eco-i mk-eco-i--${i + 1}`}>
                <div className="mk-eco-card">
                  <span className="mk-eco-n">{String(i + 1).padStart(2, "0")}</span>
                  <EcoArt k={e.key} />
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                </div>
              </li>
            ))}
            <li className="mk-eco-hub">
              <div>
                <b>One connected plan</b>
                <p>Analytics feed back into search, content, social and ads, so every cycle starts smarter than the last.</p>
              </div>
            </li>
          </ol>
        </Reveal>

        <Reveal delay={120}>
          <ul className="ma-tech-chips ma-tech-chips--center mk-cap-chips" aria-label="Digital marketing capabilities">
            {CAPABILITIES.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Strategy: six-stage timeline                                        */
/* ------------------------------------------------------------------ */

function StrategyArt({ kind }: { kind: StrategyArtKind }) {
  switch (kind) {
    case "audience":
      return (
        <span className="mk-sg mk-sg--audience" aria-hidden="true">
          <i className="av" />
          <i className="ring" />
          <span className="bars">
            <i style={{ width: "86%" }} />
            <i style={{ width: "60%" }} />
            <i style={{ width: "42%" }} />
          </span>
        </span>
      );
    case "competitor":
      return (
        <span className="mk-sg mk-sg--competitor" aria-hidden="true">
          {[
            [60, 40],
            [44, 68],
            [72, 52],
          ].map(([a, b], i) => (
            <span key={i}>
              <i className="a" style={{ height: `${a}%` }} />
              <i className="b" style={{ height: `${b}%` }} />
            </span>
          ))}
        </span>
      );
    case "plan":
      return (
        <span className="mk-sg mk-sg--plan" aria-hidden="true">
          <i>Goals</i>
          <i>Audience</i>
          <i>Budget</i>
        </span>
      );
    case "execute":
      return (
        <span className="mk-sg mk-sg--execute" aria-hidden="true">
          <i>SEO</i>
          <i>Social</i>
          <i>Ads</i>
          <i>Email</i>
        </span>
      );
    case "analyse":
      return (
        <span className="mk-sg mk-sg--analyse" aria-hidden="true">
          <svg viewBox="0 0 100 50" preserveAspectRatio="none">
            <path d="M0 40 L16 34 L30 37 L46 24 L60 28 L76 14 L100 8 L100 50 L0 50Z" className="f" />
            <path d="M0 40 L16 34 L30 37 L46 24 L60 28 L76 14 L100 8" className="l" vectorEffect="non-scaling-stroke" />
          </svg>
        </span>
      );
    default:
      return (
        <span className="mk-sg mk-sg--optimise" aria-hidden="true">
          <i>A</i>
          <i className="win">
            B
            <FaCheck />
          </i>
        </span>
      );
  }
}

export function Strategy() {
  return (
    <section id="marketing-strategy" className="ma-sec ma-light" aria-labelledby="mk-st-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-sec-head ma-sec-head--center">
            <span className="ma-eyebrow">Our digital marketing strategy</span>
            <h2 id="mk-st-h" className="ma-h2 ma-h2--xl">
              A Strategic Approach to Digital Growth
            </h2>
            <p className="ma-lead">
              Every business has different goals, audiences, and competitive challenges. We create marketing strategies based on
              your business objectives, audience behavior, industry, and growth opportunities.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ol className="mk-strat">
            {STRATEGY.map((s) => (
              <li key={s.n} className="mk-strat-i">
                <span className="mk-strat-n">{s.n}</span>
                <div className="mk-strat-art">
                  <StrategyArt kind={s.art} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SEO & organic growth: heading row + wide SEO dashboard               */
/* ------------------------------------------------------------------ */
export function Organic() {
  return (
    <section id="seo-organic-growth" className="ma-sec ma-tint" aria-labelledby="mk-org-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ux-svc-top">
            <div>
              <span className="ma-eyebrow">SEO &amp; organic growth</span>
              <h2 id="mk-org-h" className="ma-h2 ma-h2--xl">
                Build a Stronger Organic Search Presence
              </h2>
              <p className="ma-lead">
                Search engine optimization helps businesses improve their visibility when potential customers search for
                relevant products, services, and solutions.
              </p>
              <p className="ma-body">
                We focus on building a strong SEO foundation through technical optimization, relevant content, keyword
                strategy, website structure, and search intent.
              </p>
            </div>
            <div>
              <ul className="ma-list" aria-label="SEO and organic growth services">
                {SEO_ITEMS.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="ux-dash-wrap">
            <div className="ma-stage ux-dash-stage" style={{ aspectRatio: "16 / 8" }}>
              <span className="ma-blob" aria-hidden="true" />
              <Abs l={0} t={0} w={68} z={2} float={0}>
                <Browser url="seo.yourbrand.com/performance" label="SEO dashboard with organic traffic, site audit, top search queries and content optimization checklist">
                  <ViewSeo />
                </Browser>
              </Abs>
              <Abs l={69} t={-5} w={31} z={5} float={1}>
                <SiteStructure />
              </Abs>
              <Abs l={69} t={46} w={31} z={5} float={2}>
                <QueriesPanel />
              </Abs>
              <Abs l={-1} t={62} w={33} z={6} float={0}>
                <KeywordPanel />
              </Abs>
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mk-row-cta">
            <p className="ma-note">
              Technical SEO services, on-page SEO and off-page SEO work best together. Learn more about our{" "}
              <a href="#search-engine-optimization-services">search engine optimization services</a>. Rankings and traffic can
              never be guaranteed, but a strong foundation helps your site earn visibility over time.
            </p>
            <DmQuoteButton service="SEO" title="Request an SEO Audit" className="ma-btn ma-btn--outline ma-btn--lg">
              Request an SEO Audit <FaArrowRight aria-hidden="true" />
            </DmQuoteButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Social strategy & content                                           */
/* ------------------------------------------------------------------ */
export function SocialStrategy() {
  const formats = [
    ["Instagram", "Reels, carousels and stories"],
    ["Facebook", "Community and campaigns"],
    ["LinkedIn", "Thought leadership and B2B"],
    ["YouTube", "Video and Shorts"],
    [PLATFORMS[4], "Chosen to fit your audience"],
  ];
  return (
    <section id="social-media-strategy" className="ma-sec ma-light" aria-labelledby="mk-ss-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ux-svc-top">
            <div>
              <span className="ma-eyebrow">Social media strategy &amp; content</span>
              <h2 id="mk-ss-h" className="ma-h2 ma-h2--xl">
                Create Content That Connects With Your Audience
              </h2>
              <p className="ma-lead">
                Social media is more than posting content. It is an opportunity to build brand identity, connect with audiences,
                create conversations, and establish trust.
              </p>
              <p className="ma-body">
                We develop social media strategies that combine creative content, platform-specific communication, audience
                engagement, and consistent brand positioning.
              </p>
            </div>
            <div>
              <ul className="ma-list" aria-label="Social media strategy services">
                {SOCIAL_ITEMS.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="ux-dash-wrap">
            <div className="ma-stage ux-dash-stage" style={{ aspectRatio: "16 / 8.8" }}>
              <span className="ma-blob" aria-hidden="true" />
              <Abs l={0} t={3} w={64} z={2} float={0}>
                <Browser url="social.yourbrand.com/planner" label="Social media planner with a monthly content calendar and post preview">
                  <ViewSocial />
                </Browser>
              </Abs>
              <Abs l={61} t={-6} w={15} z={4} float={1}>
                <Phone variant="ios" tone="dark" label="Short-form video preview for Instagram Reels and YouTube Shorts">
                  <ReelScreen line="Quick tip" />
                </Phone>
              </Abs>
              <Abs l={78} t={-3} w={22} z={5} float={2}>
                <PostLI title="Three lessons from our latest campaign" />
              </Abs>
              <Abs l={80} t={50} w={19} z={5} float={1}>
                <PostIG headline="Behind the brand" />
              </Abs>
              <Abs l={58} t={58} w={26} z={6} float={0}>
                <EngagementPanel />
              </Abs>
              <Abs l={-1} b={-4} w={24} z={6} float={2}>
                <FloatCard tone="light" title="Calendar approved" text="Next 30 days scheduled" dot="green" />
              </Abs>
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <ul className="mk-plat" aria-label="Social media platforms we work with">
            {formats.map(([n, t]) => (
              <li key={n}>
                <b>{n}</b>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mk-row-cta mk-row-cta--center">
            <p className="ma-note">
              Looking for Instagram marketing services, Facebook marketing services or LinkedIn marketing? Explore our{" "}
              <a href="#social-media-marketing-services">social media marketing services</a>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Paid advertising: navy, copy left, targeting interface right         */
/* ------------------------------------------------------------------ */
export function Paid() {
  return (
    <section id="paid-advertising" className="ma-sec ma-navy ma-dark" aria-labelledby="mk-pa-h">
      <div className="ma-grid-bg" aria-hidden="true" />
      <div className="ma-wrap ma-split mk-paid">
        <Reveal>
          <div className="ux-svc-copy">
            <span className="ma-eyebrow">Paid advertising &amp; performance marketing</span>
            <h2 id="mk-pa-h" className="ma-h2 ma-h2--xl">
              Reach the Right Audience With Targeted Advertising
            </h2>
            <p className="ma-lead">
              Paid advertising allows businesses to connect with potential customers through targeted campaigns across search
              engines, social media, and digital advertising platforms.
            </p>
            <p className="ma-body">
              We help businesses plan, execute, monitor, and optimize advertising campaigns based on their objectives, target
              audience, and available budget.
            </p>
            <ul className="ma-list" aria-label="Paid advertising services">
              {PAID_ITEMS.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <p className="ma-note">
              As a digital advertising agency focused on performance marketing, we keep budgets, targeting and tracking
              transparent. Campaign results vary by market and are never guaranteed.
            </p>
            <div className="ma-cta-row">
              <DmQuoteButton service="Paid Advertising" title="Plan Your Campaign" className="ma-btn ma-btn--primary ma-btn--lg">
                Plan Your Campaign <FaArrowRight aria-hidden="true" />
              </DmQuoteButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="ma-split-visual">
            <div className="ma-stage" style={{ aspectRatio: "1 / 1" }}>
              <span className="ma-hv-glow" aria-hidden="true" />
              <Abs l={8} t={0} w={90} z={2} float={0}>
                <Browser dark url="ads.yourbrand.com/overview" label="Paid advertising dashboard with traffic by channel, channel mix and campaign analytics">
                  <ViewAnalytics full={false} />
                </Browser>
              </Abs>
              <Abs l={-3} t={42} w={36} z={5} float={1}>
                <FunnelPanel dark />
              </Abs>
              <Abs r={-3} t={40} w={37} z={5} float={2}>
                <AdPreviewPanel dark />
              </Abs>
              <Abs l={-2} b={-4} w={34} z={6} float={0}>
                <BudgetPanel dark />
              </Abs>
              <Abs r={0} b={-5} w={34} z={6} float={1}>
                <AudiencePanel dark />
              </Abs>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Content strategy: heading row + editorial bento                      */
/* ------------------------------------------------------------------ */
export function ContentStrategy() {
  return (
    <section id="content-strategy" className="ma-sec ma-tint" aria-labelledby="mk-cs-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ux-svc-top">
            <div>
              <span className="ma-eyebrow">Content marketing strategy</span>
              <h2 id="mk-cs-h" className="ma-h2 ma-h2--xl mk-serif">
                Content That Builds Authority &amp; Trust
              </h2>
              <p className="ma-lead">
                Strategic content helps businesses communicate their expertise, answer audience questions, improve organic
                visibility, and build lasting relationships with potential customers.
              </p>
              <p className="ma-body">
                We create content strategies that align with search intent, brand positioning, audience interests, and
                marketing objectives.
              </p>
            </div>
            <div>
              <ul className="ma-list" aria-label="Content marketing strategy services">
                {CONTENT_ITEMS.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mk-bento" role="img" aria-label="Editorial content showcase with a topic cluster map, a content calendar, an editorial workflow and an article preview">
            <div className="b b-topic">
              <TopicCluster />
            </div>
            <div className="b b-cal">
              <CalendarPanel />
            </div>
            <div className="b b-wf">
              <WorkflowPanel />
            </div>
            <div className="b b-art">
              <ArticlePanel />
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mk-row-cta mk-row-cta--center">
            <p className="ma-note">
              Content that ranks starts with planning. Our SEO content writing and content strategy work ties directly into your{" "}
              <a href="#seo-organic-growth">organic growth plan</a>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Email marketing & automation                                        */
/* ------------------------------------------------------------------ */
function FlowArt({ i }: { i: number }) {
  switch (i) {
    case 0:
      return (
        <span className="mk-fa mk-fa--0" aria-hidden="true">
          <i className="in">name@email.com</i>
          <i className="bt">Subscribe</i>
        </span>
      );
    case 1:
      return (
        <span className="mk-fa mk-fa--1" aria-hidden="true">
          <i className="hb" />
          <i className="l" />
          <i className="l s" />
        </span>
      );
    case 2:
      return (
        <span className="mk-fa mk-fa--2" aria-hidden="true">
          <i>New</i>
          <i className="on">Active</i>
          <i>Customers</i>
        </span>
      );
    case 3:
      return (
        <span className="mk-fa mk-fa--3" aria-hidden="true">
          <i className="hb" />
          <span>
            <i className="l" />
            <i className="l s" />
          </span>
        </span>
      );
    case 4:
      return (
        <span className="mk-fa mk-fa--4" aria-hidden="true">
          {[40, 70, 52, 86].map((h, k) => (
            <i key={k} style={{ height: `${h}%` }} />
          ))}
        </span>
      );
    default:
      return (
        <span className="mk-fa mk-fa--5" aria-hidden="true">
          <i className="chip">In 2 days</i>
          <i className="l" />
          <i className="l s" />
        </span>
      );
  }
}

export function EmailAutomation() {
  return (
    <section id="email-automation" className="ma-sec ma-light" aria-labelledby="mk-ea-h">
      <div className="ma-wrap">
        <div className="ma-split mk-ea-top">
          <Reveal>
            <div className="ux-svc-copy">
              <span className="ma-eyebrow">Email marketing &amp; automation</span>
              <h2 id="mk-ea-h" className="ma-h2 ma-h2--xl">
                Turn Leads Into Lasting Customer Relationships
              </h2>
              <p className="ma-lead">
                Email marketing helps businesses communicate directly with their audience through relevant, personalized, and
                timely campaigns.
              </p>
              <p className="ma-body">
                We develop email strategies and automated workflows that help nurture leads, engage customers, communicate
                offers, and support long-term relationships.
              </p>
              <ul className="ma-list" aria-label="Email marketing and automation services">
                {EMAIL_ITEMS.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="ma-split-visual">
              <div className="ma-stage" style={{ aspectRatio: "1 / 0.8" }}>
                <span className="ma-blob" aria-hidden="true" />
                <Abs l={0} t={6} w={46} z={3} float={1}>
                  <EmailPanel />
                </Abs>
                <Abs r={0} t={0} w={52} z={4} float={2}>
                  <InboxPanel />
                </Abs>
                <Abs l={10} t={58} w={42} z={5} float={0}>
                  <SegmentsPanel />
                </Abs>
                <Abs r={0} t={40} w={44} z={4} float={1}>
                  <EmailStatsPanel />
                </Abs>
                <Abs r={6} b={0} w={38} z={6} float={2}>
                  <FloatCard tone="light" title="Welcome series sent" text="Automation running" dot="green" />
                </Abs>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <h3 className="mk-flow-h">Email automation workflow</h3>
          <ol className="mk-flow">
            {EMAIL_FLOW.map((f, i) => (
              <li key={f.title} className="mk-flow-i">
                <span className="mk-flow-n">{String(i + 1).padStart(2, "0")}</span>
                <div className="mk-flow-art">
                  <FlowArt i={i} />
                </div>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={60}>
          <div className="mk-row-cta mk-row-cta--center">
            <p className="ma-note">
              Explore our <a href="#email-marketing-services">email marketing services</a> and marketing automation for newsletters,
              promotions and customer retention.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Analytics & reporting                                               */
/* ------------------------------------------------------------------ */
export function Analytics() {
  return (
    <section id="analytics-reporting" className="ma-sec ma-navy ma-dark" aria-labelledby="mk-an-h">
      <div className="ma-grid-bg" aria-hidden="true" />
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-sec-head ma-sec-head--center">
            <span className="ma-eyebrow">Marketing analytics &amp; reporting</span>
            <h2 id="mk-an-h" className="ma-h2 ma-h2--xl">
              Measure What Matters. Optimize What Works.
            </h2>
            <p className="ma-lead">
              Effective digital marketing requires understanding what is working, what needs improvement, and where
              opportunities exist.
            </p>
            <p className="ma-body">
              We use relevant analytics and performance insights to help businesses understand campaign activity, audience
              behavior, website engagement, and marketing performance.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="ux-dash-wrap">
            <div className="ma-stage ux-dash-stage" style={{ aspectRatio: "16 / 8.8" }}>
              <span className="ux-dash-glow" aria-hidden="true" />
              <Abs l={14} t={0} w={72} z={2} float={0}>
                <Browser url="reports.yourbrand.com/marketing" label="Marketing reporting dashboard with traffic by channel, channel mix, conversion funnel and top landing pages">
                  <ViewAnalytics />
                </Browser>
              </Abs>
              <Abs l={-1} t={4} w={22} z={6} float={1}>
                <VisibilityPanel dark />
              </Abs>
              <Abs l={0} t={52} w={22} z={6} float={2}>
                <EngagementPanel dark />
              </Abs>
              <Abs r={-1} t={2} w={22} z={6} float={2}>
                <FunnelPanel dark k="Conversion funnel" />
              </Abs>
              <Abs r={-1} t={50} w={23} z={6} float={1}>
                <ChannelPanel dark />
              </Abs>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ul className="ma-tech-chips ma-tech-chips--center" aria-label="Analytics and reporting services">
            {ANALYTICS_ITEMS.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="ma-note ma-note--center">
            Interfaces shown are illustrative examples with sample data. Your reports use your own accounts and agreed KPIs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why RoyalTech: editorial split with a sticky visual                  */
/* ------------------------------------------------------------------ */
export function Why() {
  return (
    <section id="why-royaltech" className="ma-sec ma-navy ma-dark" aria-labelledby="mk-why-h">
      <div className="ma-grid-bg" aria-hidden="true" />
      <div className="ma-wrap mk-why">
        <Reveal>
          <div className="mk-why-head">
            <span className="ma-eyebrow">Why choose RoyalTech Innovation</span>
            <h2 id="mk-why-h" className="ma-h2 ma-h2--xl">
              Your Partner for Strategic Digital Growth
            </h2>
            <p className="ma-lead">
              Working with a digital marketing agency should feel collaborative and clear. Our team in Mohali partners with
              businesses across Chandigarh, Punjab and beyond, from first plan to monthly reporting.
            </p>
            <div className="ma-stage mk-why-stage" style={{ aspectRatio: "1 / 0.82" }}>
              <span className="ma-hv-glow" aria-hidden="true" />
              <Abs l={0} t={0} w={88} z={2} float={0}>
                <Browser url="growth.yourbrand.com" label="Integrated marketing dashboard connecting search, social, ads and email">
                  <ViewAnalytics full={false} />
                </Browser>
              </Abs>
              <Abs r={-2} t={48} w={30} z={5} float={1}>
                <PostFB />
              </Abs>
              <Abs l={-3} b={-2} w={38} z={6} float={2}>
                <SerpPanel compact />
              </Abs>
              <Abs r={4} t={-4} w={34} z={6} float={2}>
                <FloatCard tone="glass" title="Integrated plan" text="SEO · Social · Ads · Email" dot="cyan" />
              </Abs>
            </div>
          </div>
        </Reveal>

        <ol className="mk-why-list">
          {WHY.map((w, i) => (
            <li key={w.title}>
              <Reveal delay={Math.min(i, 3) * 60}>
                <div className="mk-why-row">
                  <span className="mk-why-n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Process: a rising staircase of six stages                            */
/* ------------------------------------------------------------------ */
export function Process() {
  return (
    <section id="digital-marketing-process" className="ma-sec ma-tint" aria-labelledby="mk-pr-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-sec-head ma-sec-head--center">
            <span className="ma-eyebrow">Digital marketing process</span>
            <h2 id="mk-pr-h" className="ma-h2 ma-h2--xl">
              From Strategy to Measurable Marketing Progress
            </h2>
            <p className="ma-lead">
              A clear, repeatable workflow that moves from understanding your business to refining campaigns with real insight.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ol className="mk-steps">
            {PROCESS.map((p, i) => (
              <li key={p.n} className="mk-step" style={{ ["--i" as string]: i }}>
                <span className="mk-step-n" aria-hidden="true">
                  {p.n}
                </span>
                <h3>
                  <span className="ma-sr">{p.n} — </span>
                  {p.title}
                </h3>
                <p>{p.text}</p>
                <span className="mk-step-bar" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA                                                           */
/* ------------------------------------------------------------------ */
export function FinalCta() {
  return (
    <section id="start-your-marketing-journey" className="ma-sec ma-blue ma-dark ma-cta" aria-labelledby="mk-cta-h">
      <div className="ma-grid-bg" aria-hidden="true" />
      <div className="ma-wrap ma-split">
        <Reveal>
          <div className="ma-cta-copy">
            <h2 id="mk-cta-h" className="ma-h2 ma-h2--xl">
              Ready to Grow Your Business Online?
            </h2>
            <p className="ma-lead">
              Whether you want to improve search visibility, build your brand on social media, generate leads through paid
              campaigns, or strengthen customer relationships, RoyalTech Innovation is ready to help you build a strategic
              digital marketing plan.
            </p>
            <div className="ma-cta-row">
              <DmQuoteButton service="Digital Marketing" title="Start Your Marketing Journey" className="ma-btn ma-btn--white ma-btn--lg">
                Start Your Marketing Journey <FaArrowRight aria-hidden="true" />
              </DmQuoteButton>
              <Link href="/contact" className="ma-btn ma-btn--ghost ma-btn--lg">
                Talk to Our Experts
              </Link>
            </div>

            <address className="ma-contact">
              <p>
                Looking for a digital marketing company in Chandigarh or Mohali? RoyalTech Innovation works with startups and
                businesses across Punjab, India and overseas.
              </p>
              <ul>
                <li>
                  <FaPhone aria-hidden="true" />
                  <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                </li>
                <li>
                  <FaEnvelope aria-hidden="true" />
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </li>
                <li>
                  <FaLocationDot aria-hidden="true" />
                  <span>{CONTACT.address}</span>
                </li>
              </ul>
            </address>

            <nav className="ma-related" aria-label="Related services">
              <span className="ma-related-k">Related services</span>
              <ul>
                {RELATED_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="ma-split-visual">
            <div className="ma-stage" style={{ aspectRatio: "1 / 0.98" }}>
              <span className="ma-cta-light" aria-hidden="true" />
              <Abs l={0} t={12} w={84} z={2} float={0}>
                <Browser url="growth.yourbrand.com/overview" label="Marketing analytics dashboard on a laptop">
                  <ViewAnalytics />
                </Browser>
              </Abs>
              <Abs l={68} t={26} w={29} z={4} float={1}>
                <Phone variant="ios" label="Social media campaign feed on a smartphone">
                  <FeedScreen />
                </Phone>
              </Abs>
              <Abs l={-3} t={-2} w={30} z={6} float={2}>
                <SerpPanel compact />
              </Abs>
              <Abs l={-2} b={2} w={30} z={6} float={1}>
                <FunnelPanel />
              </Abs>
              <Abs r={0} t={2} w={32} z={6} float={0}>
                <FloatCard tone="light" title="New lead" text="From your campaign" dot="green" />
              </Abs>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
