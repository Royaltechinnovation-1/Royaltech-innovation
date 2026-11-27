"use client";

import "@/styles/services-showcase.css";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useFormModal } from "@/components/FormModal";
import {
  ARCH_LAYERS,
  CAPABILITY_DOMAINS,
  CAPABILITY_PIPELINE,
  CONFIG_LAYERS,
  CONTACT,
  CONTROL_LAYERS,
  CUSTOM_ITEMS,
  FAQS,
  HERO_LEAD,
  HERO_PILLARS,
  INDUSTRIES,
  INTEGRATIONS,
  INTRO_PARAGRAPHS,
  INTRO_TAGS,
  LEAD_ITEMS,
  LEAD_STEPS,
  PROCESS,
  SECURITY_ITEMS,
  SEO_H1,
  SERVICES,
  SUPPORT_ITEMS,
  TECH_CATEGORIES,
  WHY,
  WORKFLOW_STAGES,
  type ChannelService,
} from "@/data/ai-chatbot-page";

/* ------------------------------------------------------------------ */
/* Shared helpers                                                      */
/* ------------------------------------------------------------------ */

/** Fades + lifts children in as they scroll into view. Fully visible on the server and for reduced-motion users. */
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.classList.add("ab-pre");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("ab-in");
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
  title = "Build Your AI Assistant",
  className = "ab-btn ab-btn--primary",
  children,
}: {
  service: string;
  title?: string;
  className?: string;
  children: ReactNode;
}) {
  const { openForm } = useFormModal();
  return (
    <button type="button" className={className} onClick={() => openForm({ title, source: "ai-chatbot-page", service })}>
      {children}
    </button>
  );
}

const Arrow = () => (
  <svg className="ab-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

/** Five-bar animated waveform used for the voice visuals. */
function Wave({ heights, colors }: { heights: number[]; colors: string[] }) {
  return (
    <div className="ab-wave" aria-hidden="true">
      {heights.map((h, i) => (
        <span key={i} className={colors[i % colors.length]} style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }} />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Interactive demos                                                   */
/* ------------------------------------------------------------------ */

const WEB_REPLIES: { label: string; reply: string }[] = [
  {
    label: "Business website",
    reply:
      "Great choice. We design responsive business websites with custom UI/UX and integrated lead capture. Would you like to share your industry and preferred timeline?",
  },
  {
    label: "Ecommerce store",
    reply:
      "We build scalable ecommerce stores with catalog search, payment gateways, and order tracking. Shall I connect you with our web solutions team?",
  },
  {
    label: "Custom web app",
    reply:
      "We develop custom web applications tailored to your operational workflows and API integrations. Would you like to arrange a technical discovery call?",
  },
];

function WebChatDemo() {
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([
    { from: "user", text: "I need a website for my business." },
    { from: "bot", text: "I'd be happy to help. Are you looking for a business website, ecommerce store, or a custom web application?" },
  ]);
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const feed = feedRef.current;
    if (feed) feed.scrollTop = feed.scrollHeight;
  }, [messages]);

  function ask(option: { label: string; reply: string }) {
    setMessages((m) => [
      ...m,
      { from: "user", text: option.label },
      { from: "bot", text: option.reply },
    ]);
  }

  return (
    <div className="ab-webchat">
      <div className="ab-webchat-h">
        <span className="ab-avatar">AI</span>
        <div>
          <strong>Website AI Assistant</strong>
          <small>Instant visitor assistance</small>
        </div>
        <em>Online</em>
      </div>
      <div ref={feedRef} className="ab-webchat-feed" aria-live="polite">
        {messages.map((m, i) => (
          <div key={i} className={`ab-msg ab-msg--${m.from}`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="ab-webchat-quick">
        <small>Try clicking a visitor reply:</small>
        <div>
          {WEB_REPLIES.map((o) => (
            <button key={o.label} type="button" onClick={() => ask(o)}>
              {o.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const VOICE_PROMPTS = [
  {
    stt: "I'd like to book an appointment with a consultant for tomorrow morning.",
    tts: "I can help schedule that for you. Morning slots are available at 10:00 AM and 11:30 AM. Which time works best?",
  },
  {
    stt: "Can you check the status of my recent service enquiry?",
    tts: "Certainly. Please share your registered phone number or reference ID so I can look up your enquiry.",
  },
  {
    stt: "What hours is your customer support desk open?",
    tts: "Our automated assistant is available anytime, and our live team can be reached during business hours.",
  },
];

function VoiceConsole() {
  const [idx, setIdx] = useState(0);
  const prompt = VOICE_PROMPTS[idx];
  return (
    <div className="ab-voice-card">
      <div className="ab-voice-h">
        <div>
          <span className="ab-kicker ab-kicker--cyan">Voice AI console</span>
          <h4>Natural speech interaction engine</h4>
        </div>
        <button type="button" onClick={() => setIdx((idx + 1) % VOICE_PROMPTS.length)}>
          Next sample prompt
        </button>
      </div>
      <Wave heights={[28, 48, 36, 56, 32, 56, 40, 48, 28, 44]} colors={["ab-c", "ab-b"]} />
      <div className="ab-voice-lines">
        <div>
          <small>Speech-to-text input</small>
          <p>&ldquo;{prompt.stt}&rdquo;</p>
        </div>
        <div className="ab-voice-tts">
          <small>Text-to-speech voice response</small>
          <p>&ldquo;{prompt.tts}&rdquo;</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

type Channel = "web" | "whatsapp" | "voice";

function HeroWorkspace() {
  const [channel, setChannel] = useState<Channel>("web");
  const tabs: { key: Channel; label: string }[] = [
    { key: "web", label: "Web AI" },
    { key: "whatsapp", label: "WhatsApp" },
    { key: "voice", label: "Voice AI" },
  ];

  return (
    <div className="ab-ws">
      <div className="ab-ws-h">
        <div className="ab-ws-title">
          <span className="ab-ws-dots" aria-hidden="true">
            <i />
            <i />
            <i className="on" />
          </span>
          <span>RoyalTech conversational AI workspace</span>
        </div>
        <div className="ab-ws-tabs" role="tablist" aria-label="Preview channel">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={channel === t.key}
              className={channel === t.key ? "on" : ""}
              onClick={() => setChannel(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {channel === "web" && (
        <div className="ab-ws-panel">
          <div className="ab-ws-bot">
            <div className="ab-ws-bot-h">
              <div className="ab-ws-who">
                <span className="ab-avatar">AI</span>
                <div>
                  <strong>Business solutions assistant</strong>
                  <small className="ok">Knowledge base connected</small>
                </div>
              </div>
              <span className="ab-chip">Context-aware</span>
            </div>
            <div className="ab-ws-msgs">
              <div className="ab-msg ab-msg--user">
                We need an AI assistant that can answer website enquiries, sync leads to our CRM, and handle WhatsApp follow-ups.
              </div>
              <div className="ab-msg ab-msg--bot">
                <p>We can configure a unified multi-channel assistant connected to your business knowledge base and CRM API:</p>
                <div className="ab-ws-cards">
                  <div>
                    <b>1. Web &amp; WhatsApp</b>
                    <small>Instant enquiry &amp; lead capture</small>
                  </div>
                  <div>
                    <b>2. CRM workflow</b>
                    <small>Structured contact &amp; intent sync</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {channel === "whatsapp" && (
        <div className="ab-ws-panel">
          <div className="ab-wa-bot">
            <div className="ab-wa-h">
              <div className="ab-ws-who">
                <span className="ab-avatar ab-avatar--wa">WA</span>
                <div>
                  <strong>WhatsApp business assistant</strong>
                  <small className="wa">Automated enquiry &amp; booking flow</small>
                </div>
              </div>
              <span className="ab-chip ab-chip--wa">WhatsApp API</span>
            </div>
            <div className="ab-ws-msgs">
              <div className="ab-msg ab-msg--wa-user">Hi, I&apos;d like to schedule a product consultation this Thursday.</div>
              <div className="ab-msg ab-msg--wa-bot">
                <p>Certainly! Please select a preferred consultation window for Thursday:</p>
                <div className="ab-slots">
                  <span>11:00 AM</span>
                  <span>02:30 PM</span>
                  <span>04:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {channel === "voice" && (
        <div className="ab-ws-panel">
          <div className="ab-ws-bot">
            <div className="ab-ws-bot-h">
              <div>
                <strong>AI voice assistant session</strong>
                <small className="cyan">Speech-to-text · Intent routing · Natural TTS</small>
              </div>
              <span className="ab-chip ab-chip--cyan">Active audio stream</span>
            </div>
            <Wave heights={[32, 48, 24, 52, 36, 48, 28, 40, 24, 44, 32]} colors={["ab-c", "ab-b"]} />
            <div className="ab-live">
              <span>Live transcript:</span> &ldquo;I&apos;d like to check service availability and request a callback from your solutions team.&rdquo;
            </div>
          </div>
        </div>
      )}

      <div className="ab-ws-foot">
        <div>
          <small>Knowledge layer</small>
          <b>Docs &amp; FAQs</b>
        </div>
        <div>
          <small>AI processing</small>
          <b className="cyan">NLP &amp; context</b>
        </div>
        <div>
          <small>System sync</small>
          <b>CRM &amp; workflows</b>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="ab-hero" aria-labelledby="ab-h1">
      <div className="ab-wrap ab-hero-grid">
        <div className="ab-hero-copy">
          <p className="ab-eyebrow">
            <span className="ab-pulse" aria-hidden="true" />
            AI chatbots &amp; intelligent automation
          </p>
          <h1 id="ab-h1" className="ab-h1">
            {SEO_H1}
          </h1>
          <p className="ab-lead">{HERO_LEAD}</p>
          <ul className="ab-pillars">
            {HERO_PILLARS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="ab-cta-row">
            <Lead service="Hero" title="Build Your AI Assistant" className="ab-btn ab-btn--primary ab-btn--lg">
              Build Your AI Assistant
              <Arrow />
            </Lead>
            <a href="#services-overview" className="ab-btn ab-btn--ghost ab-btn--lg">
              Explore AI Solutions
            </a>
          </div>
        </div>
        <div className="ab-hero-visual">
          <HeroWorkspace />
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
    <section className="ab-section ab-section--white">
      <Reveal className="ab-wrap ab-split">
        <div className="ab-stack">
          <p className="ab-kicker">Conversational business automation</p>
          <h2 className="ab-h2">Bring Intelligent Conversations Into Your Business</h2>
          <div className="ab-prose">
            {INTRO_PARAGRAPHS.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="ab-tags">
            {INTRO_TAGS.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="ab-flow-card">
          <div className="ab-flow-h">
            <div>
              <small>AI interaction flow</small>
              <strong>Unified conversation &amp; action pipeline</strong>
            </div>
            <span>Live architecture</span>
          </div>
          <div className="ab-convo">
            <div className="ab-convo-row">
              <div className="ab-convo-head">
                <b>Incoming customer interaction</b>
                <small>Web + WhatsApp + Voice</small>
              </div>
              <p>
                <em>Customer:</em> &ldquo;Can you share details about your custom software and ERP services?&rdquo;
              </p>
            </div>
            <div className="ab-convo-row ab-convo-row--bot">
              <p>
                <em>AI assistant:</em> &ldquo;We build custom web applications, CRM, and ERP solutions tailored to operational workflows. Would you like an overview of modules or to arrange a discovery call?&rdquo;
              </p>
            </div>
          </div>
          <div className="ab-steps3">
            <div>
              <small className="blue">Step 1 · Intent</small>
              <b>Service enquiry</b>
              <span>Classified via NLP</span>
            </div>
            <div>
              <small className="sky">Step 2 · Source</small>
              <b>Service catalog</b>
              <span>Retrieved from KB</span>
            </div>
            <div>
              <small className="green">Step 3 · Action</small>
              <b>CRM lead entry</b>
              <span>Routed to team</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services (five channel compositions)                                */
/* ------------------------------------------------------------------ */

function ServiceVisual({ id }: { id: string }) {
  if (id === "website-chatbots") {
    return (
      <div className="ab-browser">
        <div className="ab-browser-bar">
          <span />
          <span />
          <span />
          <code>https://yourbusiness.com/services</code>
          <b>Web widget</b>
        </div>
        <div className="ab-browser-body">
          <div className="ab-hero-strip">
            <div>
              <small>Visitor journey assistant</small>
              <strong>Interactive website concierge</strong>
            </div>
            <span>Lead capture active</span>
          </div>
          <WebChatDemo />
        </div>
      </div>
    );
  }

  if (id === "whatsapp-chatbots") {
    return (
      <div className="ab-wa-wrap">
        <div className="ab-wa-frame">
          <div className="ab-wa-frame-h">
            <span className="ab-avatar ab-avatar--wa">RT</span>
            <div>
              <strong>
                Business Concierge <i>✓</i>
              </strong>
              <small>WhatsApp Business automation</small>
            </div>
          </div>
          <div className="ab-wa-frame-b">
            <div className="ab-msg ab-msg--wa-user">Hello! I want to enquire about appointment booking and service details.</div>
            <div className="ab-msg ab-msg--wa-bot">
              <p>Welcome! How can our WhatsApp assistant help you today?</p>
              <ul>
                <li>1. Explore products &amp; services</li>
                <li>2. Schedule an appointment</li>
                <li>3. Check enquiry / order status</li>
              </ul>
            </div>
            <div className="ab-msg ab-msg--wa-user">2 — Schedule an appointment</div>
            <div className="ab-msg ab-msg--wa-bot">Please share your name and preferred date, and our system will register your booking request.</div>
          </div>
        </div>
        <div className="ab-crm">
          <small className="green">CRM sync preview</small>
          <strong>Structured enquiry</strong>
          <dl>
            <div>
              <dt>Channel</dt>
              <dd>WhatsApp API</dd>
            </div>
            <div>
              <dt>Intent</dt>
              <dd className="green">Appointment</dd>
            </div>
            <div>
              <dt>Workflow</dt>
              <dd className="cyan">CRM logged</dd>
            </div>
          </dl>
          <p>Connects WhatsApp conversations directly to enquiry pipelines, notifications, and booking calendars.</p>
        </div>
      </div>
    );
  }

  if (id === "support-chatbots") {
    return (
      <div className="ab-desk">
        <div className="ab-desk-h">
          <span>
            <i /> Support desk &amp; knowledge assistant
          </span>
          <em>Human escalation ready</em>
        </div>
        <div className="ab-desk-chat">
          <div className="ab-msg ab-msg--user">How can I track my order?</div>
          <div className="ab-msg ab-msg--bot">
            I can help you check your order status. Please provide your order reference or use the tracking link provided in your confirmation.
          </div>
        </div>
        <div className="ab-desk-cards">
          <div>
            <div>
              <b>Knowledge base match</b>
              <small>KB-DOC #14</small>
            </div>
            <p>Order tracking &amp; dispatch policy retrieved automatically.</p>
          </div>
          <div>
            <div>
              <b>Escalation workflow</b>
              <small className="green">Configured</small>
            </div>
            <p>Transfers complex tickets with chat context to human staff.</p>
          </div>
        </div>
      </div>
    );
  }

  if (id === "voice-assistants") {
    return <VoiceConsole />;
  }

  return (
    <div className="ab-eco">
      <div className="ab-eco-h">
        <b>Conversational AI ecosystem</b>
        <small>Multi-channel &amp; context-aware</small>
      </div>
      <div className="ab-eco-node">
        <div>
          <small>01 · Business knowledge</small>
          <strong>Documents, policies, product catalogs &amp; FAQs</strong>
        </div>
        <span>Indexed</span>
      </div>
      <div className="ab-eco-arrow" aria-hidden="true">↓</div>
      <div className="ab-eco-node ab-eco-node--dark">
        <div>
          <small className="cyan">02 · AI processing &amp; retrieval</small>
          <strong>NLP intent understanding &amp; context matching</strong>
        </div>
        <span>AI engine</span>
      </div>
      <div className="ab-eco-arrow" aria-hidden="true">↓</div>
      <div className="ab-eco-pair">
        <div>
          <small className="blue">03 · Intelligent conversation</small>
          <strong>Web, WhatsApp &amp; voice channels</strong>
        </div>
        <div className="green">
          <small>04 · Business action</small>
          <strong>Lead sync, bookings &amp; workflows</strong>
        </div>
      </div>
    </div>
  );
}

function ServiceBlock({ s, index }: { s: ChannelService; index: number }) {
  const copy = (
    <div className="ab-svc-copy">
      <span className={`ab-svc-tag ab-svc-tag--${index % 2 === 0 ? "blue" : "green"}`}>
        {s.number} · {s.eyebrow}
      </span>
      <h3 className="ab-h3">{s.title}</h3>
      {s.paragraphs.map((p) => (
        <p key={p} className="ab-svc-p">
          {p}
        </p>
      ))}
      <ul className="ab-chips">
        {s.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
      <div>
        <Lead service={s.service} title={s.cta} className={`ab-btn ${s.tone === "dark" ? "ab-btn--light" : "ab-btn--primary"}`}>
          {s.cta}
          <Arrow />
        </Lead>
      </div>
    </div>
  );

  const visual = (
    <div className="ab-svc-visual">
      <ServiceVisual id={s.id} />
    </div>
  );

  // Dark blocks lead with the visual on desktop (copy first on mobile); WhatsApp reverses the layout.
  const visualFirst = s.id === "whatsapp-chatbots" || s.id === "voice-assistants";

  return (
    <Reveal>
      <article id={s.id} className={`ab-svc ab-svc--${s.tone}`}>
        <div className={`ab-svc-grid${visualFirst ? " ab-svc-grid--rev" : ""}`}>
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
    <section id="services-overview" className="ab-section ab-section--tint">
      <div className="ab-wrap">
        <Reveal className="ab-sec-head">
          <p className="ab-kicker">Core AI chatbot &amp; virtual assistant services</p>
          <h2 className="ab-h2">AI Chatbot Solutions for Modern Businesses</h2>
          <p className="ab-sub">
            Explore our five specialized conversational AI development categories designed to automate customer engagement, lead capture, support, and voice interactions.
          </p>
        </Reveal>
        <div className="ab-svc-list">
          {SERVICES.map((s, i) => (
            <ServiceBlock key={s.id} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Capabilities                                                        */
/* ------------------------------------------------------------------ */

function Capabilities() {
  return (
    <section id="capabilities" className="ab-section ab-section--white">
      <div className="ab-wrap">
        <Reveal className="ab-sec-head">
          <p className="ab-kicker">End-to-end engineering</p>
          <h2 className="ab-h2">Intelligent AI Solutions Beyond Basic Chatbots</h2>
          <p className="ab-sub">
            We combine AI technology, conversational design, automation, and system integration to create chatbot solutions that support real business requirements.
          </p>
        </Reveal>

        <Reveal className="ab-pipe">
          <p className="ab-pipe-t">Connected conversational architecture</p>
          <div className="ab-pipe-row">
            {CAPABILITY_PIPELINE.map((p, i) => (
              <div key={p} className={i === 2 ? "hl" : i === CAPABILITY_PIPELINE.length - 1 ? "ok" : ""}>
                <small>{["Entry point", "Channel UI", "Processing", "Context", "APIs & CRM", "Outcome"][i]}</small>
                <b>{p}</b>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="ab-domains">
          {CAPABILITY_DOMAINS.map((d, i) => (
            <Reveal key={d.n}>
              <div className="ab-domain">
                <span className={`ab-domain-n ab-domain-n--${i}`}>{d.eyebrow}</span>
                <h3 className="ab-h3 ab-h3--sm">{d.title}</h3>
                <p>{d.text}</p>
                <ul>
                  {d.items.map((it) => (
                    <li key={it}>
                      <span aria-hidden="true" />
                      {it}
                    </li>
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
/* Workflow                                                            */
/* ------------------------------------------------------------------ */

function Workflow() {
  return (
    <section className="ab-section ab-section--navy">
      <div className="ab-wrap">
        <Reveal className="ab-sec-head ab-sec-head--center">
          <p className="ab-kicker ab-kicker--cyan">Conversational execution flow</p>
          <h2 className="ab-h2 ab-h2--light">From Customer Questions to Intelligent Responses</h2>
          <p className="ab-sub ab-sub--light">
            Our chatbot solutions combine conversational interfaces, business knowledge, AI capabilities, and workflow integration to provide useful interactions tailored to your business.
          </p>
        </Reveal>
        <Reveal className="ab-stages">
          {WORKFLOW_STAGES.map((st) => (
            <div key={st.n} className={`ab-stage${st.n === "06" ? " ab-stage--human" : ""}`}>
              <div>
                <div className="ab-stage-h">
                  <span className={st.n === "06" ? "ok" : ""}>STAGE {st.n}</span>
                  <i className={st.n === "06" ? "ok" : ""} />
                </div>
                <h3>{st.title}</h3>
                <p>{st.text}</p>
              </div>
              <footer className={st.n === "06" ? "ok" : ""}>{st.tag}</footer>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Integrations                                                        */
/* ------------------------------------------------------------------ */

function Integrations() {
  return (
    <section id="integrations" className="ab-section ab-section--white ab-grid-bg">
      <div className="ab-wrap ab-split ab-split--wide">
        <Reveal className="ab-stack">
          <p className="ab-kicker">Connected enterprise ecosystem</p>
          <h2 className="ab-h2">Connect AI Conversations With Your Business Systems</h2>
          <p className="ab-prose-p">
            AI chatbots become more useful when connected to the tools, systems, and information your business already uses. We help plan and implement chatbot integrations based on your requirements, supported platforms, workflows, and technical environment.
          </p>
          <ul className="ab-int-list">
            {INTEGRATIONS.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="ab-hub">
          <div className="ab-hub-row">
            <div>
              <b>Website</b>
              <small>Embedded chat &amp; forms</small>
            </div>
            <div>
              <b className="green">WhatsApp</b>
              <small>Messaging &amp; alerts</small>
            </div>
            <div>
              <b className="blue">CRM</b>
              <small>Lead &amp; contact sync</small>
            </div>
          </div>
          <div className="ab-hub-line" aria-hidden="true" />
          <div className="ab-hub-core">
            <small>Central orchestration hub</small>
            <strong>RoyalTech AI assistant &amp; API bridge</strong>
            <p>Coordinates conversational context, business rules, authentication, and structured data exchange across connected environments.</p>
          </div>
          <div className="ab-hub-line" aria-hidden="true" />
          <div className="ab-hub-row ab-hub-row--4">
            <div>
              <b>Ecommerce</b>
              <small>Catalog &amp; orders</small>
            </div>
            <div>
              <b>Database</b>
              <small>Records &amp; lookups</small>
            </div>
            <div>
              <b>Support system</b>
              <small>Tickets &amp; escalation</small>
            </div>
            <div>
              <b>Business dashboard</b>
              <small>Logs &amp; visibility</small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Lead generation                                                     */
/* ------------------------------------------------------------------ */

function LeadGen() {
  return (
    <section className="ab-section ab-section--tint">
      <div className="ab-wrap">
        <Reveal className="ab-sec-head">
          <p className="ab-kicker">Conversational lead capture</p>
          <h2 className="ab-h2">Turn Conversations Into Meaningful Business Opportunities</h2>
          <p className="ab-sub">
            AI chatbots can help businesses engage website visitors, answer enquiries, understand customer requirements, and collect useful information through conversational interactions. We design chatbot experiences that support lead generation, enquiry qualification, customer engagement, and business communication.
          </p>
        </Reveal>
        <Reveal className="ab-lead-flow">
          {LEAD_STEPS.map((s, i) => (
            <div key={s.n} className={i === 3 ? "hl" : i === 4 ? "dark" : ""}>
              <span>{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </Reveal>
        <Reveal className="ab-tiles">
          {LEAD_ITEMS.map((it) => (
            <div key={it}>{it}</div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Customer support                                                    */
/* ------------------------------------------------------------------ */

function Support() {
  return (
    <section className="ab-section ab-section--white">
      <div className="ab-wrap ab-split">
        <Reveal className="ab-console">
          <div className="ab-console-h">
            <div>
              <small>Support operations console</small>
              <strong>Automated triage &amp; human escalation interface</strong>
            </div>
            <span>Knowledge synced</span>
          </div>
          <div className="ab-console-grid">
            <div className="ab-queue">
              <b>Support query categorization</b>
              <div>
                <span>FAQ &amp; service info</span>
                <em className="cyan">AI self-service</em>
              </div>
              <div>
                <span>Order / account enquiry</span>
                <em className="blue">API lookup</em>
              </div>
              <div className="esc">
                <span>Complex technical case</span>
                <em className="green">Human escalation</em>
              </div>
            </div>
            <div className="ab-queue">
              <b>Agent handoff summary</b>
              <div className="ab-handoff">
                <strong>Context passed to support team:</strong>
                <p>• Customer question &amp; transcript history</p>
                <p>• Identified category &amp; priority tag</p>
                <p>• Collected contact &amp; reference details</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal className="ab-stack">
          <p className="ab-kicker">Service operations</p>
          <h2 className="ab-h2">Automate Repetitive Customer Interactions</h2>
          <p className="ab-prose-p">
            Businesses receive recurring customer questions, service enquiries, requests for information, and repetitive support interactions. AI-powered chatbots can help automate suitable interactions, provide consistent information, support customer self-service, and assist teams in managing customer communication more efficiently.
          </p>
          <div className="ab-tiles ab-tiles--two">
            {SUPPORT_ITEMS.map((it) => (
              <div key={it}>{it}</div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Custom development                                                  */
/* ------------------------------------------------------------------ */

function CustomDev() {
  return (
    <section className="ab-section ab-section--tint">
      <div className="ab-wrap ab-split">
        <Reveal className="ab-stack">
          <p className="ab-kicker">Bespoke conversational engineering</p>
          <h2 className="ab-h2">AI Chatbots Designed Around Your Business</h2>
          <p className="ab-prose-p">
            Every business has different customers, workflows, services, communication needs, and operational requirements. We develop custom AI chatbot solutions tailored to your business objectives, conversation requirements, knowledge sources, platforms, integrations, and user experiences.
          </p>
          <div className="ab-tiles ab-tiles--three">
            {CUSTOM_ITEMS.map((it) => (
              <div key={it}>{it}</div>
            ))}
          </div>
        </Reveal>
        <Reveal className="ab-matrix">
          <div className="ab-matrix-h">
            <strong>Custom chatbot configuration matrix</strong>
            <span>Tailored blueprint</span>
          </div>
          {CONFIG_LAYERS.map((l) => (
            <div key={l.title} className="ab-matrix-row">
              <div>
                <b>{l.title}</b>
                <p>{l.text}</p>
              </div>
              <span className={`ab-lvl ab-lvl--${l.tone}`}>{l.tag}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Industries (interactive)                                            */
/* ------------------------------------------------------------------ */

function Industries() {
  const [idx, setIdx] = useState(0);
  const item = INDUSTRIES[idx];
  return (
    <section id="industries" className="ab-section ab-section--white">
      <div className="ab-wrap">
        <Reveal className="ab-sec-head">
          <p className="ab-kicker">Sector-specific applications</p>
          <h2 className="ab-h2">AI Chatbot Solutions Across Industries</h2>
          <p className="ab-sub">
            Select an industry to preview practical conversational AI workflows and customer interaction scenarios tailored to each sector. Conversations shown are illustrative samples.
          </p>
        </Reveal>
        <Reveal className="ab-ind">
          <div className="ab-ind-list" role="tablist" aria-label="Industries">
            {INDUSTRIES.map((ind, i) => (
              <button
                key={ind.name}
                type="button"
                role="tab"
                aria-selected={i === idx}
                className={i === idx ? "on" : ""}
                onClick={() => setIdx(i)}
              >
                {ind.name}
              </button>
            ))}
          </div>
          <div className="ab-ind-card" role="tabpanel">
            <div className="ab-ind-card-h">
              <span>{item.name}</span>
              <em>Use case preview</em>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="ab-ind-chat">
              <div className="ab-msg ab-msg--user">{item.user}</div>
              <div className="ab-msg ab-msg--bot">{item.bot}</div>
            </div>
            <Lead service="Industry AI Chatbot Consultation" title="Discuss Industry Chatbot Requirements" className="ab-btn ab-btn--primary ab-btn--block">
              Discuss industry chatbot requirements
            </Lead>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why                                                                 */
/* ------------------------------------------------------------------ */

function Why() {
  return (
    <section className="ab-section ab-section--tint">
      <div className="ab-wrap ab-split ab-split--top">
        <Reveal className="ab-why-side">
          <p className="ab-kicker">Why RoyalTech Innovation</p>
          <h2 className="ab-h2">Your Partner for Intelligent Business Automation</h2>
          <p className="ab-prose-p">
            Based in Mohali and serving businesses across Chandigarh, Punjab, India, and international markets, RoyalTech Innovation combines practical software engineering with thoughtful conversational AI design.
          </p>
          <div className="ab-philo">
            <small>Our engineering philosophy</small>
            <p>Practical AI implementations built around your workflows, clear customer journeys, reliable integrations, and human-in-the-loop oversight.</p>
          </div>
        </Reveal>
        <Reveal className="ab-why-list">
          {WHY.map((w) => (
            <div key={w.tag}>
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
/* Process                                                             */
/* ------------------------------------------------------------------ */

function Process() {
  return (
    <section id="process" className="ab-section ab-section--white">
      <div className="ab-wrap">
        <Reveal className="ab-sec-head ab-sec-head--center">
          <p className="ab-kicker">Structured delivery methodology</p>
          <h2 className="ab-h2">From Idea to Intelligent AI Experience</h2>
          <p className="ab-sub">
            A transparent, eight-stage engineering workflow taking your conversational AI assistant from initial consultation to production deployment and continuous improvement.
          </p>
        </Reveal>
        <ol className="ab-steps">
          {PROCESS.map((p, i) => (
            <li key={p.title}>
              <Reveal className="ab-step">
                <span className={i >= 4 ? "dark" : ""}>{String(i + 1).padStart(2, "0")}</span>
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
/* Technology                                                          */
/* ------------------------------------------------------------------ */

function Technology() {
  return (
    <section className="ab-section ab-section--navy">
      <div className="ab-wrap">
        <Reveal className="ab-sec-head">
          <p className="ab-kicker ab-kicker--cyan">Technical stack &amp; layers</p>
          <h2 className="ab-h2 ab-h2--light">Built With Modern AI &amp; Integration Technologies</h2>
          <p className="ab-sub ab-sub--light">
            We develop chatbot solutions using appropriate AI technologies, conversational frameworks, APIs, knowledge retrieval approaches, and integration tools selected according to your project requirements.
          </p>
        </Reveal>
        <Reveal className="ab-arch">
          <p>End-to-end system architecture</p>
          <div>
            {ARCH_LAYERS.map((l, i) => (
              <span key={l} className={i === 2 ? "hl" : i === 5 ? "ok" : ""}>
                {l}
              </span>
            ))}
          </div>
        </Reveal>
        <div className="ab-tech">
          {TECH_CATEGORIES.map((c) => (
            <Reveal key={c.title}>
              <div className="ab-tech-card">
                <h3>{c.title}</h3>
                <ul>
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
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
/* Security & governance                                               */
/* ------------------------------------------------------------------ */

function Governance() {
  return (
    <section className="ab-section ab-section--white">
      <div className="ab-wrap ab-split">
        <Reveal className="ab-stack">
          <p className="ab-kicker">Governance &amp; controls</p>
          <h2 className="ab-h2">Designed With Business Requirements in Mind</h2>
          <p className="ab-prose-p">
            AI chatbot implementations should consider information security, data access, response quality, privacy requirements, and appropriate human oversight. We plan chatbot solutions around the relevant technical requirements, business workflows, available data, and applicable privacy considerations.
          </p>
          <ul className="ab-int-list ab-int-list--two">
            {SECURITY_ITEMS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="ab-layers">
          <p>Responsible AI control layers</p>
          {CONTROL_LAYERS.map((l) => (
            <div key={l.title}>
              <div>
                <b>{l.title}</b>
                <small>{l.tag}</small>
              </div>
              <p>{l.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="ab-section ab-section--tint">
      <div className="ab-wrap ab-wrap--narrow">
        <Reveal className="ab-sec-head ab-sec-head--center">
          <p className="ab-kicker">Answers &amp; insights</p>
          <h2 className="ab-h2">Frequently Asked Questions About AI Chatbots</h2>
          <p className="ab-sub">
            Clear answers to common questions about AI chatbot development, WhatsApp automation, voice assistants, integrations, and project implementation.
          </p>
        </Reveal>
        <div className="ab-acc">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`ab-acc-i${isOpen ? " on" : ""}`}>
                <h3>
                  <button
                    type="button"
                    id={`ab-faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`ab-faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="ab-acc-q">
                      {i + 1}. {f.q}
                    </span>
                    <span className="ab-acc-ic" aria-hidden="true" />
                  </button>
                </h3>
                <div id={`ab-faq-a-${i}`} role="region" aria-labelledby={`ab-faq-q-${i}`} className="ab-acc-p" inert={!isOpen}>
                  <div>
                    <p>{f.a}</p>
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

/* ------------------------------------------------------------------ */
/* Final CTA                                                           */
/* ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <section className="ab-section ab-final-wrap">
      <div className="ab-wrap">
        <Reveal className="ab-final">
          <div className="ab-final-copy">
            <span className="ab-final-tag">Start your AI transformation</span>
            <h2>Ready to Make Your Business More Intelligent?</h2>
            <p>
              Whether you want to automate customer communication, build a website chatbot, integrate WhatsApp automation, improve customer support, or develop a custom AI assistant, RoyalTech Innovation can help you plan and build the right solution for your business.
            </p>
            <div className="ab-cta-row">
              <Lead service="Final CTA" title="Build Your AI Chatbot" className="ab-btn ab-btn--white ab-btn--lg">
                Build Your AI Chatbot
                <Arrow />
              </Lead>
              <Lead service="Final CTA" title="Talk to Our AI Experts" className="ab-btn ab-btn--outline ab-btn--lg">
                Talk to Our AI Experts
              </Lead>
            </div>
          </div>
          <div className="ab-final-card">
            <div className="ab-final-card-h">
              <strong>RoyalTech AI solution planner</strong>
              <span>Mohali · Chandigarh · Global</span>
            </div>
            <div className="ab-final-msg">
              <small>AI assistant</small>
              <p>&ldquo;Tell us about your website, WhatsApp, customer support, or voice assistant goals.&rdquo;</p>
            </div>
            <div className="ab-final-msg ab-final-msg--user">
              <p>&ldquo;We&apos;d like a custom AI chatbot integrated with our website and CRM.&rdquo;</p>
            </div>
            <div className="ab-final-wave">
              <small>Multi-channel AI ready</small>
              <Wave heights={[12, 20, 16, 20, 12]} colors={["ab-c", "ab-b"]} />
            </div>
            <div className="ab-final-contact">
              <a href={CONTACT.phoneHref}>
                <small>Call us</small>
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`}>
                <small>Email us</small>
                {CONTACT.email}
              </a>
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

export default function AiChatbotPage({ rootClass = "" }: { rootClass?: string }) {
  return (
    <div className={`svx-root ab-root ${rootClass}`.trim()}>
      <Hero />
      <Intro />
      <Services />
      <Capabilities />
      <Workflow />
      <Integrations />
      <LeadGen />
      <Support />
      <CustomDev />
      <Industries />
      <Why />
      <Process />
      <Technology />
      <Governance />
      <Faq />
      <FinalCta />
    </div>
  );
}