import Link from "next/link";
import { FaArrowRight, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import {
  APPROACH,
  BPO_AFTER,
  BPO_BEFORE,
  BPO_ITEMS,
  CONTACT,
  DT_ITEMS,
  DT_STAGES,
  ECOSYSTEM_ITEMS,
  FAQS,
  INDUSTRIES,
  INFRA_ITEMS,
  PROCESS,
  RELATED_LINKS,
  ROADMAP_ITEMS,
  ROADMAP_PHASES,
  WHY,
} from "@/data/it-consulting-page";
import { ConsultButton, FaqAccordion, Reveal } from "./client";
import { CtaVisual } from "./HeroVisuals";
import {
  ArchitectureDiagram,
  AssessmentBoard,
  BeforeAfterVisual,
  EcosystemHub,
  RoadmapBoard,
  StageGlyph,
  WhyDiagram,
} from "./DiagramVisuals";

/* ------------------------------------------------------------------ */
/* Consulting approach: horizontal connected workflow                  */
/* ------------------------------------------------------------------ */

export function Approach() {
  return (
    <section id="approach" className="ic-sec ic-light" aria-labelledby="ic-approach-h">
      <div className="ic-wrap">
        <Reveal>
          <div className="ic-approach-head">
            <div>
              <span className="ic-eyebrow">Our consulting approach</span>
              <h2 id="ic-approach-h" className="ic-h2 ic-h2--xl">
                Business First. <span className="ic-grad">Technology Second.</span>
              </h2>
            </div>
            <div>
              <p className="ic-lead">Technology should solve real business challenges, not create unnecessary complexity.</p>
              <p className="ic-body">
                Our consulting approach begins by understanding your business, evaluating your current systems, identifying
                opportunities, and developing practical strategies that support your objectives.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <ol className="ic-flow">
            <li className="ic-flow-track" aria-hidden="true">
              <i className="ic-line" />
            </li>
            {APPROACH.map((a, i) => (
              <li key={a.title} className={`ic-flow-step${i % 2 ? " lo" : ""}`}>
                <span className="ic-flow-node" aria-hidden="true">
                  {i + 1}
                </span>
                <div className="ic-flow-card">
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                  <ul>
                    {a.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Digital transformation strategy: ascending stages                   */
/* ------------------------------------------------------------------ */

export function DigitalStrategy() {
  return (
    <section id="digital-transformation-strategy" className="ic-sec ic-tint" aria-labelledby="ic-dts-h">
      <div className="ic-wrap">
        <Reveal>
          <div className="ic-dts-head">
            <div className="ic-copy">
              <span className="ic-eyebrow">Digital transformation strategy</span>
              <h2 id="ic-dts-h" className="ic-h2">
                Modernize Your Business for the Digital Future
              </h2>
              <p className="ic-lead">
                Digital transformation is more than adopting new software. It involves improving how businesses operate, connect
                systems, manage information, serve customers, and make decisions.
              </p>
              <p className="ic-body">
                We help organizations identify the right digital initiatives and build practical transformation roadmaps aligned
                with their business priorities. Where a better customer-facing experience is part of the plan, our{" "}
                <Link href="/services/ui-ux-design">UI/UX design</Link> team can shape it.
              </p>
            </div>
            <ol className="ic-numlist" aria-label="Digital transformation strategy services">
              {DT_ITEMS.map((i, n) => (
                <li key={i}>
                  <span aria-hidden="true">{String(n + 1).padStart(2, "0")}</span>
                  {i}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <ol className="ic-stairs" aria-label="Digital transformation journey">
          {DT_STAGES.map((s, i) => (
            <li key={s.title} className={`ic-stair s${i}`}>
              <Reveal delay={i * 90}>
                <div className="ic-stair-in">
                  <span className="ic-stair-n" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <StageGlyph index={i} />
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul>
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
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
/* Technology roadmap & planning                                       */
/* ------------------------------------------------------------------ */

export function RoadmapSection() {
  return (
    <section id="technology-roadmap" className="ic-sec ic-navy ic-dark" aria-labelledby="ic-road-h">
      <div className="ic-grid-bg ic-grid-bg--soft" aria-hidden="true" />
      <div className="ic-wrap">
        <Reveal>
          <div className="ic-road-head">
            <div className="ic-copy">
              <span className="ic-eyebrow">Technology roadmap &amp; planning</span>
              <h2 id="ic-road-h" className="ic-h2">
                Build a Clear Roadmap for Your Technology Future
              </h2>
            </div>
            <div>
              <p className="ic-lead">
                Technology planning helps businesses prioritize investments, manage complexity, reduce uncertainty, and make
                informed decisions about future technology initiatives.
              </p>
              <p className="ic-body">
                We develop practical technology roadmaps that align business objectives with infrastructure, software, systems,
                and digital initiatives. Our IT planning services give leadership one view of what to do now, next and later.
              </p>
            </div>
          </div>
        </Reveal>

        <ol className="ic-phases">
          {ROADMAP_PHASES.map((p, i) => (
            <li key={p.id} className={`ic-phase p${i}`}>
              <Reveal delay={i * 80}>
                <span className="ic-phase-k">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.label}</h3>
                <p className="ic-phase-c">{p.caption}</p>
                <ul>
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <RoadmapBoard />
        </Reveal>

        <ul className="ic-chipgrid ic-chipgrid--wide" aria-label="Technology roadmap and planning services">
          {ROADMAP_ITEMS.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* IT infrastructure & system architecture                             */
/* ------------------------------------------------------------------ */

export function InfrastructureSection() {
  return (
    <section id="infrastructure-architecture" className="ic-sec ic-light" aria-labelledby="ic-arch-h">
      <div className="ic-wrap ic-split ic-split--rev ic-split--wide-visual">
        <Reveal>
          <div className="ic-copy">
            <span className="ic-eyebrow">IT infrastructure &amp; system architecture</span>
            <h2 id="ic-arch-h" className="ic-h2">
              Build a Scalable Technology Foundation
            </h2>
            <p className="ic-lead">
              Reliable infrastructure and well-planned system architecture help businesses support operations, manage growth, and
              maintain technology efficiency.
            </p>
            <p className="ic-body">
              We help organizations evaluate infrastructure requirements, plan scalable architectures, and identify appropriate
              technology solutions, with IT architecture consulting that keeps security and integration in view from the start.
            </p>
            <ul className="ic-list">
              {INFRA_ITEMS.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="ic-split-visual ic-split-visual--wide">
            <ArchitectureDiagram />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Business process & operational optimization                         */
/* ------------------------------------------------------------------ */

export function OperationsSection() {
  return (
    <section id="operational-optimization" className="ic-sec ic-tint" aria-labelledby="ic-ops-h">
      <div className="ic-wrap">
        <Reveal>
          <div className="ic-sec-head ic-sec-head--center">
            <span className="ic-eyebrow">Business process &amp; operational optimization</span>
            <h2 id="ic-ops-h" className="ic-h2">
              Make Business Operations Smarter and More Efficient
            </h2>
            <p className="ic-lead">
              Businesses often lose time and efficiency through disconnected systems, repetitive tasks, complex workflows, and
              unnecessary manual processes.
            </p>
            <p className="ic-body">
              We analyze business operations and identify opportunities to improve workflows, simplify processes, integrate
              systems, and introduce appropriate technology-driven solutions.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="ic-ba">
            <div className="ic-ba-col before">
              <span className="ic-ba-k">Before</span>
              <BeforeAfterVisual side="before" />
              <ul>
                {BPO_BEFORE.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="ic-ba-mid" aria-hidden="true">
              <span>Optimize</span>
              <FaArrowRight />
            </div>
            <div className="ic-ba-col after">
              <span className="ic-ba-k">After</span>
              <BeforeAfterVisual side="after" />
              <ul>
                {BPO_AFTER.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <ul className="ic-tags ic-tags--center" aria-label="Operational optimization services">
          {BPO_ITEMS.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Technology ecosystem & solution planning                            */
/* ------------------------------------------------------------------ */

export function EcosystemSection() {
  return (
    <section id="technology-ecosystem" className="ic-sec ic-navy ic-dark" aria-labelledby="ic-eco-h">
      <div className="ic-grid-bg ic-grid-bg--soft" aria-hidden="true" />
      <div className="ic-wrap ic-split ic-split--eco">
        <Reveal>
          <div className="ic-copy">
            <span className="ic-eyebrow">Technology ecosystem &amp; solution planning</span>
            <h2 id="ic-eco-h" className="ic-h2">
              Choosing the Right Technology for Your Business
            </h2>
            <p className="ic-lead">
              Every business has different operational needs, budgets, growth plans, and technical requirements.
            </p>
            <p className="ic-body">
              We help businesses evaluate technologies, platforms, software, integrations, and infrastructure based on their
              actual requirements rather than unnecessary complexity. Our IT solutions consulting covers everything from{" "}
              <Link href="/services/crm">CRM</Link> and <Link href="/services#erp-dev">ERP</Link> planning to{" "}
              <Link href="/services/website-development">websites</Link> and{" "}
              <Link href="/services/mobile-app-development">mobile apps</Link>.
            </p>
            <ul className="ic-tags ic-tags--dark" aria-label="Technology ecosystem and solution planning services">
              {ECOSYSTEM_ITEMS.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <EcosystemHub />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

export function Industries() {
  return (
    <section id="industries" className="ic-sec ic-light" aria-labelledby="ic-ind-h">
      <div className="ic-wrap ic-ind">
        <div className="ic-ind-side">
          <Reveal>
            <div className="ic-ind-card ic-dark">
              <span className="ic-eyebrow">Industries we consult for</span>
              <h2 id="ic-ind-h" className="ic-h2">
                Technology Consulting Across Industries
              </h2>
              <p className="ic-lead">
                Every sector has its own systems, regulations and workflows. Our technology consulting services in Punjab and
                beyond start with the way your industry actually works.
              </p>
              <div className="ic-ind-flow" aria-hidden="true">
                <span>Challenge</span>
                <i />
                <span>Assessment</span>
                <i />
                <span>Roadmap</span>
              </div>
              <ConsultButton service="IT Consulting: Industry enquiry" className="ic-btn ic-btn--white ic-btn--lg">
                Discuss Your Industry <FaArrowRight aria-hidden="true" />
              </ConsultButton>
            </div>
          </Reveal>
        </div>

        <ul className="ic-ind-grid">
          {INDUSTRIES.map((ind, i) => (
            <li key={ind.id}>
              <Reveal delay={(i % 2) * 70}>
                <article className="ic-ind-tile">
                  <span className="ic-ind-n" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{ind.name}</h3>
                  <ol className="ic-ind-chain" aria-label={`Typical ${ind.name} workflow`}>
                    {ind.flow.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ol>
                  <p>
                    <b>Challenge</b>
                    {ind.challenge}
                  </p>
                  <p>
                    <b>Consulting focus</b>
                    {ind.opportunity}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why RoyalTech                                                       */
/* ------------------------------------------------------------------ */

export function Why() {
  return (
    <section id="why-royaltech" className="ic-sec ic-tint" aria-labelledby="ic-why-h">
      <div className="ic-wrap ic-why">
        <div className="ic-why-side">
          <Reveal>
            <span className="ic-eyebrow">Why choose RoyalTech Innovation?</span>
            <h2 id="ic-why-h" className="ic-h2 ic-h2--xl">
              Your Strategic Partner for Technology &amp; Business Growth
            </h2>
            <p className="ic-lead">
              As an IT consultant and technology consulting company, we pair strategic thinking with hands-on delivery experience.
              Our business technology consulting for Chandigarh, Mohali and the wider region keeps recommendations grounded in how
              you operate.
            </p>
            <WhyDiagram />
          </Reveal>
        </div>
        <ol className="ic-why-list">
          {WHY.map((w, i) => (
            <li key={w.title}>
              <Reveal>
                <span className="ic-why-n" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
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
/* Consulting process: horizontal timeline                             */
/* ------------------------------------------------------------------ */

export function ProcessSection() {
  return (
    <section id="process" className="ic-sec ic-navy ic-dark" aria-labelledby="ic-proc-h">
      <div className="ic-grid-bg ic-grid-bg--soft" aria-hidden="true" />
      <div className="ic-wrap">
        <Reveal>
          <div className="ic-sec-head ic-sec-head--center">
            <span className="ic-eyebrow">Our IT consulting process</span>
            <h2 id="ic-proc-h" className="ic-h2">
              From Business Challenges to Technology Solutions
            </h2>
            <p className="ic-lead">
              A clear seven-step workflow that takes you from the first conversation to a refined technology strategy.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <ol className="ic-tl">
            <li className="ic-tl-track" aria-hidden="true">
              <i className="ic-line" />
            </li>
            {PROCESS.map((p) => (
              <li key={p.num} className="ic-tl-step">
                <span className="ic-tl-node" aria-hidden="true">
                  {p.num}
                </span>
                <div className="ic-tl-card">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Business technology assessment                                      */
/* ------------------------------------------------------------------ */

export function Assessment() {
  return (
    <section id="technology-assessment" className="ic-sec ic-light" aria-labelledby="ic-assess-h">
      <div className="ic-wrap">
        <Reveal>
          <div className="ic-assess-head">
            <div>
              <span className="ic-eyebrow">Business technology assessment</span>
              <h2 id="ic-assess-h" className="ic-h2">
                Understand Where Your Technology Stands Today
              </h2>
            </div>
            <div>
              <p className="ic-lead">An effective technology strategy begins with understanding your current environment.</p>
              <p className="ic-body">
                We help businesses evaluate their systems, infrastructure, workflows, software, technology limitations, and
                improvement opportunities. Every IT assessment and technology assessment is tailored to your business, so we do not
                use generic scores.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <AssessmentBoard
            footer={
              <div className="ic-ab-cta">
                <p>Start with a conversation about your current systems and goals.</p>
                <ConsultButton service="Business Technology Assessment" className="ic-btn ic-btn--primary">
                  Request a Technology Assessment <FaArrowRight aria-hidden="true" />
                </ConsultButton>
              </div>
            }
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export function Faq() {
  return (
    <section id="faq" className="ic-sec ic-tint" aria-labelledby="ic-faq-h">
      <div className="ic-wrap ic-faq">
        <Reveal>
          <div className="ic-faq-side">
            <span className="ic-eyebrow">FAQ</span>
            <h2 id="ic-faq-h" className="ic-h2">
              Frequently Asked Questions About IT Consulting
            </h2>
            <p className="ic-lead">
              Clear answers about scope, cost, timelines and how an IT consultant can support your business. Can&apos;t find yours?
              Ask us directly.
            </p>
            <ConsultButton service="IT Consulting: FAQ enquiry" className="ic-btn ic-btn--outline">
              Ask Our IT Consultants <FaArrowRight aria-hidden="true" />
            </ConsultButton>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/dwnnakrrh/image/upload/v1795681192/FAQ3_2_s4amwg.png"
              alt="Frequently asked questions about IT consulting"
              width={1080}
              height={1080}
              loading="lazy"
              draggable={false}
              className="ic-faq-img"
            />
          </div>
        </Reveal>
        <FaqAccordion items={FAQS} />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA                                                           */
/* ------------------------------------------------------------------ */

export function FinalCta() {
  return (
    <section id="start-consulting" className="ic-sec ic-blue ic-dark ic-cta" aria-labelledby="ic-cta-h">
      <div className="ic-grid-bg" aria-hidden="true" />
      <div className="ic-wrap ic-split">
        <Reveal>
          <div className="ic-cta-copy">
            <h2 id="ic-cta-h" className="ic-h2 ic-h2--xl">
              {"Let's Build a Smarter Technology Strategy"}
            </h2>
            <p className="ic-lead">
              {
                "Whether you're planning digital transformation, modernizing infrastructure, improving business processes, or evaluating new technology, RoyalTech Innovation can help you identify the right direction for your business."
              }
            </p>
            <div className="ic-cta-row">
              <ConsultButton service="IT Consulting: Schedule a consultation" className="ic-btn ic-btn--white ic-btn--lg">
                Schedule a Consultation <FaArrowRight aria-hidden="true" />
              </ConsultButton>
              <Link href="/contact" className="ic-btn ic-btn--ghost ic-btn--lg">
                Discuss Your Technology Needs
              </Link>
            </div>

            <address className="ic-contact">
              <p>
                Looking for an IT consultant in Mohali or a technology consulting company in Chandigarh? RoyalTech Innovation
                works with businesses across Punjab, India and overseas.
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

            <nav className="ic-related" aria-label="Related services">
              <span className="ic-related-k">Related services</span>
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
          <div className="ic-split-visual">
            <CtaVisual />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
