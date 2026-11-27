"use client";

import "@/styles/services-showcase.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { useFormModal } from "@/components/FormModal";
import {
  APP_ITEMS,
  APP_MODULES,
  CAPABILITIES,
  CAPABILITY_FLOW,
  CONTACT,
  CREATIVE_ITEMS,
  DOCUMENT_ITEMS,
  FAQS,
  HERO_LEAD,
  HERO_PILLARS,
  HERO_SUB,
  INDUSTRIES,
  INTEGRATION_ITEMS,
  INTEGRATION_NODES,
  INTRO_PARAGRAPHS,
  KNOWLEDGE_ITEMS,
  PROCESS,
  QUALITY_ITEMS,
  QUALITY_STEPS,
  RELATED_LINKS,
  SEO_H1,
  SERVICES,
  TECH_CATEGORIES,
  TECH_FLOW,
  WHY,
  WORK_STAGES,
  type GenService,
} from "@/data/generative-ai-page";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = node;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    el.classList.add("gx-pre");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("gx-in");
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
  className = "gx-btn gx-btn--primary",
  children,
}: {
  service: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  const { openForm } = useFormModal();
  return (
    <button type="button" className={className} onClick={() => openForm({ title, source: "generative-ai-page", service })}>
      {children}
    </button>
  );
}

const Arrow = () => (
  <svg className="gx-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

function Hero() {
  return (
    <section className="gx-hero gx-hero--photo" aria-labelledby="gx-h1">
      <div className="gx-hero-bg" aria-hidden="true">
        <Image
          src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1920/v1795790491/Gemini_Generated_Image_w13g46w13g46w13g_1.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="gx-hero-bg-img"
        />
        <div className="gx-hero-bg-shade" />
      </div>
      <div className="gx-wrap gx-hero-grid">
        <div className="gx-hero-copy">
          <nav aria-label="Breadcrumb" className="gx-crumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Generative AI Solutions</li>
            </ol>
          </nav>
          <p className="gx-eyebrow">
            <span className="gx-pulse" aria-hidden="true" />
            Generative AI development &amp; solutions
          </p>
          <h1 id="gx-h1" className="gx-h1">
            {SEO_H1}
          </h1>
          <p className="gx-hero-sub">{HERO_SUB}</p>
          <p className="gx-lead">{HERO_LEAD}</p>
          <ul className="gx-pills">
            {HERO_PILLARS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="gx-cta-row">
            <a href="#services-overview" className="gx-btn gx-btn--primary gx-btn--lg">
              Explore Generative AI
              <Arrow />
            </a>
            <Lead service="Hero" title="Build Your AI Solution" className="gx-btn gx-btn--ghost gx-btn--lg">
              Build Your AI Solution
            </Lead>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="gx-section gx-section--white">
      <div className="gx-wrap gx-split">
        <Reveal className="gx-stack">
          <p className="gx-kicker">Practical business AI</p>
          <h2 className="gx-h2">Unlock New Possibilities With Generative AI</h2>
          <div className="gx-prose">
            {INTRO_PARAGRAPHS.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="gx-related">
            This work produces content, images, documents, or an application. Task-running agents and API connections into existing software are separate services:{" "}
            {RELATED_LINKS.map((link, i) => (
              <span key={link.href}>
                {i > 0 ? ", " : null}
                <Link href={link.href}>{link.label}</Link>
              </span>
            ))}
            .
          </p>
        </Reveal>
        <Reveal className="gx-modules">
          <p>One workspace, four kinds of output</p>
          <ul>
            <li>
              <b>Content</b>
              <span>Headlines and channel drafts for review</span>
            </li>
            <li>
              <b>Visuals</b>
              <span>Concept frames, not a finished photoshoot</span>
            </li>
            <li>
              <b>Documents</b>
              <span>A template filled from structured inputs</span>
            </li>
            <li>
              <b>Assistant</b>
              <span>Answers limited to approved knowledge</span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceVisual({ id }: { id: string }) {
  if (id === "ai-content-generation") {
    return (
      <figure className="gx-svc-figure">
        <Image
          className="gx-svc-img"
          src="/images/services/ai-content-generation.jpg"
          alt="AI content writing workspace with a language and tone form on the left, a blog draft in the editor, and source references on the right"
          width={1024}
          height={768}
          sizes="(min-width: 1024px) 46vw, 100vw"
        />
      </figure>
    );
  }
  if (id === "ai-image-generation") {
    return (
      <figure className="gx-svc-figure">
        <Image
          className="gx-svc-img"
          src="/images/services/ai-image-generation.jpg"
          alt="AI image generation studio on a monitor showing an input asset, prompt and style options, four variations, and a generated product scene"
          width={1024}
          height={558}
          sizes="(min-width: 1024px) 46vw, 100vw"
        />
      </figure>
    );
  }
  if (id === "ai-document-generation") {
    return (
      <figure className="gx-svc-figure">
        <Image
          className="gx-svc-img"
          src="/images/services/ai-document-generation.jpg"
          alt="AI document generator turning a short prompt into a business proposal with a pricing table and PDF or DOCX export"
          width={1024}
          height={537}
          sizes="(min-width: 1024px) 46vw, 100vw"
        />
      </figure>
    );
  }
  if (id === "custom-gpt-solutions") {
    return (
      <figure className="gx-svc-figure">
        <Image
          className="gx-svc-img"
          src="/images/services/ai-custom-gpt.jpg"
          alt="Knowledge assistant answering a question from uploaded documents, with the cited source page open beside the chat"
          width={652}
          height={423}
          sizes="(min-width: 1024px) 46vw, 100vw"
        />
      </figure>
    );
  }
  return (
    <div className="gx-visual gx-visual--dark">
      <p>Application modules</p>
      <ul className="gx-mods">
        {["Workspace", "Content studio", "Documents", "Knowledge", "API"].map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

function Services() {
  return (
    <div id="services-overview">
      <section className="gx-section gx-section--tint">
        <div className="gx-wrap">
          <Reveal className="gx-sec-head gx-sec-head--center">
            <p className="gx-kicker">Five generative AI services</p>
            <h2 className="gx-h2">Generative AI Solutions for Modern Businesses</h2>
            <p className="gx-sub">Content, images, documents, a custom assistant, and a product built around generation. Each one is a different kind of software.</p>
          </Reveal>
          <ul className="gx-sv-grid">
            {SERVICES.map((s) => (
              <li key={s.id} className="gx-sv-card">
                <Reveal>
                  <span className="gx-sv-num">{s.number}</span>
                  <h3 className="gx-sv-title">{s.eyebrow}</h3>
                  <p className="gx-sv-head">{s.title}</p>
                  <p className="gx-sv-copy">{s.paragraphs[0]}</p>
                  <ul className="gx-sv-tags">
                    {s.items.slice(0, 3).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className="gx-sv-link" href={`#${s.id}`}>
                    View details
                    <Arrow />
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {SERVICES.map((service) => (
        <ServiceBlock key={service.id} service={service} />
      ))}
    </div>
  );
}

function ServiceBlock({ service }: { service: GenService }) {
  const dark = service.tone === "dark";
  return (
    <section id={service.id} className={`gx-section gx-svc${dark ? " gx-svc--dark" : " gx-section--white"}`}>
      <div className={`gx-wrap gx-svc-grid${service.visualFirst ? " gx-svc-grid--visual" : ""}`}>
        <Reveal className="gx-stack">
          <p className="gx-kicker">
            {service.number} · {service.eyebrow}
          </p>
          <h3 className="gx-h3">{service.title}</h3>
          <div className="gx-prose">
            {service.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="gx-tiles">
            {service.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Lead service={service.service} title={service.cta} className={dark ? "gx-btn gx-btn--cyan" : "gx-btn gx-btn--primary"}>
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
    <section id="capabilities" className="gx-section gx-section--navy">
      <div className="gx-wrap">
        <Reveal className="gx-sec-head">
          <p className="gx-kicker gx-kicker--cyan">What we build around the model</p>
          <h2 className="gx-h2">Beyond AI Prompts. Build Intelligent AI Experiences.</h2>
          <p className="gx-sub">
            We combine generative AI technologies, software development, AI integrations, user experience design, business logic, and data workflows to build practical AI-powered solutions.
          </p>
        </Reveal>
        <ol className="gx-flow">
          {CAPABILITY_FLOW.map((node) => (
            <li key={node.step}>
              <span>{node.step}</span>
              <b>{node.title}</b>
              <p>{node.text}</p>
            </li>
          ))}
        </ol>
        <ul className="gx-cap-list">
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
    <section id="how-it-works" className="gx-section gx-section--white">
      <div className="gx-wrap">
        <Reveal className="gx-sec-head gx-sec-head--center">
          <p className="gx-kicker">How generation works in an application</p>
          <h2 className="gx-h2">From Ideas and Inputs to Intelligent AI Outputs</h2>
          <p className="gx-sub">Generative AI solutions combine user inputs, AI models, data, instructions, and application logic to generate useful outputs according to their capabilities and requirements.</p>
        </Reveal>
        <ol className="gx-stages">
          {WORK_STAGES.map((stage, i) => (
            <li key={stage.title}>
              <Reveal className="gx-stage">
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

function FeatureSplit({
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
  text: string;
  items: string[];
  children: ReactNode;
  flip?: boolean;
  tint?: boolean;
}) {
  return (
    <section id={id} className={`gx-section ${tint ? "gx-section--tint" : "gx-section--white"}`}>
      <div className={`gx-wrap gx-split gx-split--top${flip ? " gx-split--flip" : ""}`}>
        <Reveal className="gx-stack">
          <p className="gx-kicker">{kicker}</p>
          <h2 className="gx-h2">{title}</h2>
          <p className="gx-prose-p">{text}</p>
          <ul className="gx-tiles">
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

function Workflows() {
  return (
    <>
      <FeatureSplit
        id="content-workflows"
        tint
        kicker="Creative production"
        title="Transform Creative and Content Workflows With AI"
        text="Generative AI can support content creation, marketing workflows, visual ideation, business communication, and creative production. We help businesses explore and implement AI-powered content and creative workflows tailored to their requirements."
        items={CREATIVE_ITEMS}
      >
        <div className="gx-visual">
          <p>Prompt → copy → visual concept → review</p>
          <ol className="gx-mini">
            <li>
              <b>Brief</b>
              <span>Audience, offer, channel</span>
            </li>
            <li>
              <b>Drafts</b>
              <span>Headline and body variations</span>
            </li>
            <li className="core">
              <b>Review</b>
              <span>Edit before anything is published</span>
            </li>
          </ol>
        </div>
      </FeatureSplit>
      <FeatureSplit
        id="document-workflows"
        flip
        kicker="Documents"
        title="Automate the Creation of Business Documents and Content"
        text="Businesses create proposals, reports, summaries, product descriptions, and structured documents regularly. AI-powered document generation can help prepare those drafts from approved templates and the inputs you provide."
        items={DOCUMENT_ITEMS}
      >
        <div className="gx-visual">
          <p>Template library</p>
          <ul className="gx-mods">
            <li>Project proposals</li>
            <li>Executive reports</li>
            <li>Standard operating drafts</li>
          </ul>
          <small className="gx-note">Export after a person reviews the draft.</small>
        </div>
      </FeatureSplit>
      <FeatureSplit
        id="knowledge"
        tint
        kicker="Knowledge assistants"
        title="AI Assistants Built Around Your Knowledge"
        text="Custom GPT-powered solutions can be designed around business information, knowledge sources, instructions, workflows, and specific user requirements. We develop assistants that help people retrieve approved information and draft from it."
        items={KNOWLEDGE_ITEMS}
      >
        <div className="gx-visual gx-visual--dark">
          <p>Approved knowledge → assistant → cited answer</p>
          <ul className="gx-mods">
            <li>Product documents</li>
            <li>Support articles</li>
            <li>The rules you write</li>
          </ul>
        </div>
      </FeatureSplit>
      <FeatureSplit
        id="applications"
        kicker="Products"
        title="Turn Your AI Ideas Into Real Digital Products"
        text="Generative AI can sit inside a custom application, a creative tool, or a business platform. We help turn an idea into software designed around the users, the workflow, and the technology the product needs."
        items={APP_ITEMS}
      >
        <div className="gx-visual">
          <p>Product surfaces</p>
          <ul className="gx-apps">
            {APP_MODULES.map((mod) => (
              <li key={mod.title}>
                <b>{mod.title}</b>
                <span>{mod.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </FeatureSplit>
    </>
  );
}

function Integrations() {
  return (
    <section id="integrations" className="gx-section gx-section--tint">
      <div className="gx-wrap gx-split gx-split--top">
        <Reveal className="gx-stack">
          <p className="gx-kicker">Connected systems</p>
          <h2 className="gx-h2">Connect Generative AI With Your Business Ecosystem</h2>
          <p className="gx-prose-p">
            Generative AI becomes more useful when it can work with the software, data, and workflows a business already uses. We plan those connections around the application, the technical environment, and the use case. A system is included when it can be connected and the project covers it.
          </p>
          <ul className="gx-tiles">
            {INTEGRATION_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="gx-nodes">
          {INTEGRATION_NODES.map((node) => (
            <div key={node.title}>
              <b>{node.title}</b>
              <span>{node.text}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section id="technology" className="gx-section gx-section--navy">
      <div className="gx-wrap">
        <Reveal className="gx-sec-head">
          <p className="gx-kicker gx-kicker--cyan">Chosen per project</p>
          <h2 className="gx-h2">Built With Modern Generative AI Technologies</h2>
          <p className="gx-sub">
            We develop generative AI solutions using suitable AI models, APIs, application architectures, and integration approaches selected according to project requirements. A technology is used when it fits the product.
          </p>
        </Reveal>
        <ol className="gx-pipe">
          {TECH_FLOW.map((step, i) => (
            <li key={step} className={i === 2 ? "core" : ""}>
              {step}
            </li>
          ))}
        </ol>
        <div className="gx-tech">
          {TECH_CATEGORIES.map((category) => (
            <Reveal key={category.title}>
              <div className="gx-tech-card">
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
  return (
    <section id="industries" className="gx-section gx-section--white">
      <div className="gx-wrap">
        <Reveal className="gx-sec-head">
          <p className="gx-kicker">Industries</p>
          <h2 className="gx-h2">Generative AI Solutions Across Industries</h2>
          <p className="gx-sub">Examples of the kind of content, document, or application work this service usually supports. They are planning examples, not a claim that every workflow is already built.</p>
        </Reveal>
        <div className="gx-ind">
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
    <section className="gx-section gx-section--tint">
      <div className="gx-wrap gx-split gx-split--top">
        <Reveal className="gx-stack">
          <p className="gx-kicker">Why RoyalTech Innovation</p>
          <h2 className="gx-h2">Your Partner for Generative AI Innovation</h2>
          <p className="gx-prose-p">
            RoyalTech Innovation is based in Mohali and works with businesses in Chandigarh, across Punjab, and beyond. The work starts from the content, document, or product you need, then chooses the model and interface that fit it.
          </p>
          <div className="gx-aside">
            <small>How we treat a draft</small>
            <p>Generated content stays editable. Publishing, sending, or storing it is a step a person can review.</p>
          </div>
        </Reveal>
        <div className="gx-why">
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
    <section id="process" className="gx-section gx-section--white">
      <div className="gx-wrap">
        <Reveal className="gx-sec-head gx-sec-head--center">
          <p className="gx-kicker">Delivery</p>
          <h2 className="gx-h2">From AI Ideas to Intelligent Applications</h2>
          <p className="gx-sub">Eight stages from the first conversation to a deployed application that can be maintained.</p>
        </Reveal>
        <ol className="gx-steps">
          {PROCESS.map((step, i) => (
            <li key={step.title}>
              <Reveal className="gx-step">
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
    <section id="quality" className="gx-section gx-section--tint">
      <div className="gx-wrap gx-split gx-split--top">
        <Reveal className="gx-stack">
          <p className="gx-kicker">Quality and control</p>
          <h2 className="gx-h2">Build AI Solutions With Quality, Context &amp; Control</h2>
          <p className="gx-prose-p">
            Generative AI applications should consider output quality, context, data requirements, privacy, validation, user experience, and appropriate human review. We plan the solution around the use case, what the model can do, the information available, and the checks the workflow needs.
          </p>
          <ul className="gx-tiles">
            {QUALITY_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <ol className="gx-quality">
            {QUALITY_STEPS.map((step, i) => (
              <li key={step.title}>
                <span>{i + 1}</span>
                <div>
                  <b>{step.title}</b>
                  <p>{step.text}</p>
                </div>
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
    <section id="faq" className="gx-section gx-section--white">
      <div className="gx-wrap gx-wrap--narrow">
        <Reveal className="gx-sec-head gx-sec-head--center">
          <p className="gx-kicker">Questions</p>
          <h2 className="gx-h2">Frequently Asked Questions About Generative AI</h2>
        </Reveal>
        <div className="gx-acc">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className={`gx-acc-i${isOpen ? " on" : ""}`}>
                <h3>
                  <button type="button" id={`gx-faq-q-${i}`} aria-expanded={isOpen} aria-controls={`gx-faq-a-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                    <span>
                      {i + 1}. {faq.q}
                    </span>
                    <span className="gx-acc-ic" aria-hidden="true" />
                  </button>
                </h3>
                <div id={`gx-faq-a-${i}`} role="region" aria-labelledby={`gx-faq-q-${i}`} className="gx-acc-p" inert={!isOpen}>
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
    <section id="contact-cta" className="gx-section gx-final-wrap">
      <div className="gx-wrap">
        <Reveal className="gx-final">
          <div>
            <span className="gx-final-tag">Start with the output you need</span>
            <h2>Ready to Turn Your Ideas Into Generative AI Solutions?</h2>
            <p>
              Whether you want to automate content creation, generate images, build intelligent document workflows, develop custom GPT solutions, or create AI-powered applications, RoyalTech Innovation can help you plan and build the right solution.
            </p>
            <div className="gx-cta-row">
              <Lead service="Final CTA" title="Start Your AI Project" className="gx-btn gx-btn--cyan gx-btn--lg">
                Start Your AI Project
                <Arrow />
              </Lead>
              <Lead service="Final CTA" title="Discuss Your Generative AI Idea" className="gx-btn gx-btn--outline gx-btn--lg">
                Discuss Your Generative AI Idea
              </Lead>
            </div>
          </div>
          <div className="gx-final-card">
            <div className="gx-final-card-h">
              <strong>What we need to start</strong>
              <span>Mohali · Chandigarh · Punjab</span>
            </div>
            <ol>
              <li>The output: copy, image, document, or product</li>
              <li>Who reviews it before it is used</li>
              <li>Which systems it should connect to</li>
            </ol>
            <div className="gx-final-contact">
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

export default function GenerativeAiPage({ rootClass = "" }: { rootClass?: string }) {
  return (
    <div className={`svx-root gx-root ${rootClass}`.trim()}>
      <Hero />
      <Intro />
      <Services />
      <Capabilities />
      <HowItWorks />
      <Workflows />
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
