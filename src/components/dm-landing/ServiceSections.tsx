import Link from "next/link";
import type { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { SERVICES, type MarketingService } from "@/data/mk-page";
import { Abs, FloatCard, Phone } from "@/components/mobile-app/Phone";
import { Reveal } from "@/components/mobile-app/client";
import { Browser } from "@/components/uiux/Sites";
import { DmQuoteButton } from "./Interactive";
import {
  AdPreviewPanel,
  AudiencePanel,
  AuditPanel,
  BudgetPanel,
  CalendarPanel,
  EmailPanel,
  EmailStatsPanel,
  EngagementPanel,
  FeedScreen,
  InboxPanel,
  KeywordPanel,
  PostFB,
  PostIG,
  PostLI,
  ReelScreen,
  SegmentsPanel,
  VisibilityPanel,
  WorkflowPanel,
} from "./Panels";
import { ViewAds, ViewBlog, ViewEmail, ViewSerp } from "./Views";

const byId = (id: MarketingService["id"]) => SERVICES.find((s) => s.id === id)!;

function Copy({
  s,
  note,
  list = true,
  head = true,
}: {
  s: MarketingService;
  note?: ReactNode;
  list?: boolean;
  head?: boolean;
}) {
  return (
    <div className="ux-svc-copy">
      {head ? (
        <>
          <span className="ux-num">
            <b>{s.num}</b>
            {s.short}
          </span>
          <h3 id={`mk-${s.id}-h`} className="ma-h3 ma-h3--xl">
            {s.heading}
          </h3>
        </>
      ) : null}
      {s.description.map((p, i) => (
        <p key={i} className={i === 0 ? "ma-lead" : "ma-body"}>
          {p}
        </p>
      ))}
      {list ? (
        <ul className="ma-list" aria-label={`${s.short} services`}>
          {s.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      ) : null}
      <p className="ma-note">{note ?? s.local}</p>
      <div className="ma-cta-row">
        <DmQuoteButton service={s.short} title={s.cta} className="ma-btn ma-btn--primary ma-btn--lg">
          {s.cta} <FaArrowRight aria-hidden="true" />
        </DmQuoteButton>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 01 SEO: copy left, search interfaces right                          */
/* ------------------------------------------------------------------ */
export function ServiceSeo() {
  const s = byId("seo");
  return (
    <section id={s.anchor} className="ma-sec ma-light" aria-labelledby={`mk-${s.id}-h`}>
      <div className="ma-wrap ux-svc ux-svc--wide">
        <Reveal>
          <Copy
            s={s}
            note={
              <>
                {s.local} Pair SEO with a <Link href="/services/website-development">fast, SEO-friendly website</Link> for the
                strongest foundation.
              </>
            }
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="ux-svc-visual">
            <div className="ma-stage" style={{ aspectRatio: "1 / 0.92" }}>
              <span className="ma-blob" aria-hidden="true" />
              <Abs l={9} t={2} w={90} z={2} float={0}>
                <Browser url="search.example/?q=seo+services" label="Search engine results page mockup with a sponsored result, a highlighted organic result and a local map">
                  <ViewSerp />
                </Browser>
              </Abs>
              <Abs l={-4} t={52} w={46} z={5} float={1}>
                <KeywordPanel />
              </Abs>
              <Abs r={-3} t={60} w={38} z={5} float={2}>
                <AuditPanel />
              </Abs>
              <Abs l={-3} t={-4} w={32} z={6} float={2}>
                <VisibilityPanel />
              </Abs>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 02 Social: creative collage left, copy right                        */
/* ------------------------------------------------------------------ */
export function ServiceSocial() {
  const s = byId("social");
  return (
    <section id={s.anchor} className="ma-sec ma-tint" aria-labelledby={`mk-${s.id}-h`}>
      <div className="ma-wrap ma-split ma-split--rev mk-soc">
        <Reveal>
          <Copy s={s} />
        </Reveal>
        <Reveal delay={120}>
          <div className="ma-split-visual mk-soc-visual">
            <div className="ma-stage" style={{ aspectRatio: "1 / 0.98" }}>
              <span className="ma-blob" aria-hidden="true" />
              <Abs l={2} t={14} w={25} z={2} float={1}>
                <Phone variant="ios" label="Instagram-style social media feed with stories and campaign posts">
                  <FeedScreen />
                </Phone>
              </Abs>
              <Abs l={29} t={0} w={27} z={3} float={0}>
                <Phone variant="ios" tone="dark" label="Short-form Reel video preview on a smartphone">
                  <ReelScreen />
                </Phone>
              </Abs>
              <Abs r={-2} t={2} w={36} z={4} float={2}>
                <PostLI />
              </Abs>
              <Abs r={-1} t={42} w={36} z={5} float={1}>
                <PostFB />
              </Abs>
              <Abs l={-3} b={-2} w={46} z={6} float={0}>
                <CalendarPanel />
              </Abs>
              <Abs l={40} b={-5} w={30} z={6} float={2}>
                <EngagementPanel />
              </Abs>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 03 Google Ads & PPC: navy, copy above a wide campaign interface      */
/* ------------------------------------------------------------------ */
export function ServiceAds() {
  const s = byId("ads");
  return (
    <section id={s.anchor} className="ma-sec ma-navy ma-dark" aria-labelledby={`mk-${s.id}-h`}>
      <div className="ma-grid-bg" aria-hidden="true" />
      <div className="ma-wrap">
        <Reveal>
          <div className="ux-svc-top ux-svc-top--dark">
            <div>
              <span className="ux-num">
                <b>{s.num}</b>
                {s.short}
              </span>
              <h3 id={`mk-${s.id}-h`} className="ma-h3 ma-h3--xl">
                {s.heading}
              </h3>
            </div>
            <div>
              {s.description.map((p, i) => (
                <p key={i} className={i === 0 ? "ma-lead" : "ma-body"}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="ux-dash-wrap">
            <div className="ma-stage ux-dash-stage" style={{ aspectRatio: "16 / 9.4" }}>
              <span className="ux-dash-glow" aria-hidden="true" />
              <Abs l={6} t={0} w={88} z={2}>
                <Browser dark url="ads.yourbrand.com/campaigns/new" label="Google Ads style campaign setup with campaigns, keyword targeting, ad preview and funnel">
                  <ViewAds />
                </Browser>
              </Abs>
              <Abs l={-1} t={10} w={22} z={6} float={1}>
                <AdPreviewPanel dark />
              </Abs>
              <Abs l={-1} t={58} w={22} z={6} float={2}>
                <BudgetPanel dark />
              </Abs>
              <Abs r={-1} t={52} w={22} z={6} float={0}>
                <AudiencePanel dark />
              </Abs>
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="ux-svc-foot">
            <ul className="ma-list" aria-label={`${s.short} services`}>
              {s.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
            <div>
              <p className="ma-note ux-note-top">
                {s.local} See how we <Link href="#analytics-reporting">measure what matters</Link> across every campaign.
              </p>
              <div className="ma-cta-row">
                <DmQuoteButton service={s.short} title={s.cta} className="ma-btn ma-btn--primary ma-btn--lg">
                  {s.cta} <FaArrowRight aria-hidden="true" />
                </DmQuoteButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 04 Content: editorial header band, visual left, details right        */
/* ------------------------------------------------------------------ */
export function ServiceContent() {
  const s = byId("content");
  return (
    <section id={s.anchor} className="ma-sec ma-light mk-edit" aria-labelledby={`mk-${s.id}-h`}>
      <div className="ma-wrap">
        <Reveal>
          <div className="mk-edit-head">
            <div>
              <span className="ux-num">
                <b>{s.num}</b>
                {s.short}
              </span>
              <h3 id={`mk-${s.id}-h`} className="ma-h3 ma-h3--xl mk-serif">
                {s.heading}
              </h3>
            </div>
          </div>
        </Reveal>

        <div className="mk-edit-body">
          <Reveal delay={80}>
            <div className="mk-edit-visual">
              <div className="ma-stage" style={{ aspectRatio: "1 / 0.86" }}>
                <span className="ma-blob" aria-hidden="true" />
                <Abs l={8} t={0} w={92} z={2} float={0}>
                  <Browser url="yourbrand.com/blog" label="Editorial blog website with a featured article, category navigation and article cards">
                    <ViewBlog />
                  </Browser>
                </Abs>
                <Abs l={-3} t={58} w={44} z={5} float={1}>
                  <WorkflowPanel />
                </Abs>
                <Abs r={-2} t={56} w={26} z={5} float={2}>
                  <PostIG headline="5 SEO writing tips" />
                </Abs>
                <Abs l={-2} t={-3} w={26} z={6} float={2}>
                  <FloatCard tone="light" title="Draft in review" text="SEO checklist 4/5" dot="amber" />
                </Abs>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="mk-edit-side">
              <Copy s={s} head={false} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 05 Email: copy left, builder + inbox right                           */
/* ------------------------------------------------------------------ */
export function ServiceEmail() {
  const s = byId("email");
  return (
    <section id={s.anchor} className="ma-sec ma-tint" aria-labelledby={`mk-${s.id}-h`}>
      <div className="ma-wrap ux-svc ux-svc--wide">
        <Reveal>
          <Copy s={s} />
        </Reveal>
        <Reveal delay={120}>
          <div className="ux-svc-visual">
            <div className="ma-stage" style={{ aspectRatio: "1 / 0.9" }}>
              <span className="ma-blob" aria-hidden="true" />
              <Abs l={4} t={4} w={92} z={2} float={0}>
                <Browser url="mail.yourbrand.com/campaigns/newsletter" label="Email marketing builder with a newsletter design, campaign settings and audience selection">
                  <ViewEmail />
                </Browser>
              </Abs>
              <Abs l={-4} t={50} w={30} z={5} float={1}>
                <EmailPanel />
              </Abs>
              <Abs r={-3} t={-4} w={38} z={6} float={2}>
                <InboxPanel />
              </Abs>
              <Abs r={-2} t={62} w={36} z={5} float={0}>
                <EmailStatsPanel />
              </Abs>
              <Abs l={26} b={-4} w={34} z={6} float={2}>
                <SegmentsPanel />
              </Abs>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
