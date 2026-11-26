import VideoBackground from "@/components/VideoBackground";
import Preloader from "@/components/Preloader";
import ScrollAnimations from "@/components/ScrollAnimations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechMarquee from "@/components/TechMarquee";
import ContactModal from "@/components/ContactModal";
import { Icon, type IconName } from "@/components/Icons";
import { ScrubText, SplitHeading } from "@/components/Split";
import { site } from "@/lib/site";
import FeaturedProject, { type FeaturedProjectData } from "@/components/FeaturedProject";
import SocialShowcase, { SocialLinks, type SocialItem } from "@/components/SocialShowcase";

/* ------------------------------------------------------------------ */
/* Content (kept intentionally short)                                   */
/* ------------------------------------------------------------------ */

const stats = [
  { value: 10, suffix: "+", label: "Years" },
  { value: 150, suffix: "+", label: "Projects" },
  { value: 60, suffix: "+", label: "Clients" },
];

const services: { icon: IconName; title: string; text: string }[] = [
  { icon: "code", title: "Custom Software", text: "Bespoke platforms built around your business." },
  { icon: "cloud", title: "Cloud & DevOps", text: "Secure, elastic, always-on infrastructure." },
  { icon: "brain", title: "AI & Automation", text: "Models and workflows that work for you." },
  { icon: "shield", title: "Cybersecurity", text: "Protection designed in from day one." },
];

const pipeline = ["Data", "Model", "Automate", "Optimise"];

/* Live product demos. Each one plays its own video and links to the live site. */
const featuredProjects: FeaturedProjectData[] = [
  {
    title: "Jewellery CRM",
    description:
      "A complete customer and business management platform built for jewellery retailers, from client records and billing to live stock and metal-rate control.",
    highlights: [
      "Executive dashboard & business analytics",
      "Customer management & history",
      "Stock and metal-rate management",
      "Sales, billing and reports",
    ],
    url: "https://jewellerycrm.royaltechinnovation.co.in/login",
    video: "/video/jewellery-crm-demo.mp4",
    poster: "/video/jewellery-crm-poster.jpg",
    aspect: "1550/1016",
  },
  {
    title: "Learning Platform (LMS)",
    description:
      "An online learning platform where people can explore self-paced courses, earn professional certificates, and enrol their teams or join live workshops.",
    highlights: [
      "Self-paced courses across career tracks",
      "Professional certificates",
      "Team and enterprise plans",
      "Live workshops and assessments",
    ],
    url: "https://lms.royaltechinnovation.co.in/",
    video: "/video/lms-demo.mp4",
    poster: "/video/lms-poster.jpg",
    aspect: "1114/726",
    reverse: true,
  },
  {
    title: "Gaming Website Redesign",
    eyebrow: "Featured UI redesign",
    description:
      "A full redesign of a gaming website, with a bold hero, a searchable game catalogue, client testimonials, a team section and a clean footer built for fast browsing.",
    highlights: [
      "Hero and game catalogue layout",
      "Testimonials and social proof",
      "Team and brand storytelling sections",
      "Dark, high-contrast visual system",
    ],
    url: "https://www.behance.net/gallery/220407681/Gaming-website-redesign/modules/1256977783",
    video: "/video/gaming-redesign-demo.mp4",
    poster: "/video/gaming-redesign-poster.jpg",
    aspect: "1280/720",
    badge: "Redesign",
    ctaLabel: "View case study on Behance",
  },
  {
    title: "Dynamic UI/UX Design",
    eyebrow: "Interaction design",
    description:
      "An interactive food-ordering interface where the hero updates in real time as you pick a dish, with animated plate transitions, quick-explore actions and a clean, appetising layout.",
    highlights: [
      "Dynamic dish switching with animated transitions",
      "Clear hierarchy from hero to call to action",
      "Circular plate showcase and dish thumbnails",
      "Responsive, motion-led interaction patterns",
    ],
    video: "/video/dynamic-ui-demo.mp4",
    poster: "/video/dynamic-ui-poster.jpg",
    aspect: "2558/1606",
    reverse: true,
    badge: "UI/UX",
  },
  {
    title: "Motorbike Dealership Website",
    eyebrow: "UI/UX design",
    description:
      "A bold landing page for a motorbike dealership, with a striking hero, featured hot deals, detailed specification panels and a clear subscribe call to action.",
    highlights: [
      "Hero with dramatic product showcase",
      "Featured hot deals and quick-view cards",
      "Detailed specs with expandable sections",
      "Newsletter sign-up and brand partners",
    ],
    video: "/video/motorbike-ui-demo.mp4",
    poster: "/video/motorbike-ui-poster.jpg",
    aspect: "2298/1110",
    badge: "UI/UX",
  },
  {
    title: "Sustainable Agriculture Website",
    eyebrow: "UI/UX design",
    description:
      "A clean, green landing page for an agriculture brand, combining an empowering story with product highlights, trust badges, testimonials and a newsletter.",
    highlights: [
      "Story-led hero with clear calls to action",
      "Feature grid for delivery, variety and quality",
      "Trust badges and certification seals",
      "Newsletter and footer with full site navigation",
    ],
    video: "/video/agriculture-ui-demo.mp4",
    poster: "/video/agriculture-ui-poster.jpg",
    aspect: "2208/1030",
    reverse: true,
    badge: "UI/UX",
  },
  {
    title: "Logo Design Showcase",
    eyebrow: "Brand identity",
    description:
      "A selection of logo designs for education, food and heritage brands, showing how each mark was explored, refined and presented across colour and light variations.",
    highlights: [
      "Brand mark exploration and refinement",
      "Colour and typography pairing",
      "Light and dark background variations",
      "Simple, scalable marks built for every size",
    ],
    video: "/video/logo-design-demo.mp4",
    poster: "/video/logo-design-poster.jpg",
    aspect: "1334/1080",
    badge: "Logo design",
  },
];

/* Social profile recordings, shown in the "Follow & connect" section. */
const socialItems: SocialItem[] = [
  {
    platform: "behance",
    title: "Design portfolio",
    description: "Case studies and visual work, from ERP flows and logo systems to digital product mockups.",
    video: "/video/social-behance.mp4",
    poster: "/video/social-behance-poster.jpg",
    aspect: "2940/1912",
  },
  {
    platform: "instagram",
    title: "Creative updates",
    description: "UI/UX, app development and digital marketing posts, plus festive and brand campaigns.",
    video: "/video/social-instagram.mp4",
    poster: "/video/social-instagram-poster.jpg",
    aspect: "2228/1428",
  },
  {
    platform: "linkedin",
    title: "Company updates",
    description: "Hiring news, ERP implementation insights, digital marketing and product announcements.",
    video: "/video/social-linkedin.mp4",
    poster: "/video/social-linkedin-poster.jpg",
    aspect: "1618/1732",
  },
];

const reasons = [
  { title: "Engineering-first", text: "Senior talent and craftsmanship in every commit." },
  { title: "AI-native", text: "Intelligence designed into the architecture." },
  { title: "Built to evolve", text: "Modular systems that grow with you." },
];

/* ------------------------------------------------------------------ */
/* Layout primitive                                                     */
/* ------------------------------------------------------------------ */

function Section({
  id,
  children,
  exit = true,
  className = "",
  after,
  tour = true,
}: {
  id: string;
  children: React.ReactNode;
  exit?: boolean;
  className?: string;
  after?: React.ReactNode;
  /** Include this section as a stop in the guided auto-scroll tour. */
  tour?: boolean;
}) {
  return (
    <section
      id={id}
      data-section
      data-exit={exit ? "true" : "false"}
      data-tour={tour ? "true" : undefined}
      className={`relative flex min-h-screen items-center py-28 md:py-36 ${className}`}
    >
      <div data-inner className="mx-auto w-full max-w-7xl px-6 will-change-transform md:px-10">
        {children}
      </div>
      {after}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <Preloader />
      <VideoBackground />
      <ScrollAnimations />
      <ContactModal />
      <Header />

      <main className="relative z-10">
        {/* 1 — HERO */}
        <Section
          id="hero"
          tour={false}
          className="!pt-32 md:!pt-36"
          after={
            <div className="pointer-events-none absolute inset-x-0 bottom-8 mx-auto flex w-full max-w-7xl items-end px-6 md:px-10">
              <div data-reveal data-delay="1.2" className="flex items-center gap-4 text-[0.65rem] tracking-[0.3em] text-white/78 uppercase">
                <span className="cue-line" /> Scroll
              </div>
            </div>
          }
        >
          <div data-hero-content className="max-w-4xl">
            <p data-reveal data-delay="0.2" className="eyebrow">
              Portfolio
            </p>
            <SplitHeading
              as="h1"
              text="RoyalTech *Innovation*"
              className="mt-7 text-[clamp(3rem,9.5vw,8.5rem)] leading-[0.95]"
            />
            <p data-reveal data-delay="0.7" className="mt-8 max-w-md text-base leading-relaxed text-white/95 md:text-lg">
              Intelligent software, cloud and AI automation.
            </p>
            <div data-reveal data-delay="0.9" className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="btn btn-gold">
                View projects <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a href="#contact" data-open-contact className="btn btn-ghost">
                Contact
              </a>
            </div>
          </div>
        </Section>

        {/* 2 — TECHNOLOGY & IT SOLUTIONS */}
        <Section id="technology">
          <p data-reveal className="eyebrow">
            Technology &amp; IT Solutions
          </p>
          <SplitHeading
            text="Technology should feel *effortless*."
            className="mt-6 max-w-4xl text-[clamp(2.2rem,5.4vw,4.6rem)]"
          />
          <ScrubText
            className="mt-10 max-w-3xl text-xl leading-snug font-light text-white md:text-3xl"
            text="We connect people, data and intelligence into one seamless, secure and scalable digital ecosystem."
          />
          <div data-reveal className="mt-16">
            <TechMarquee />
          </div>
        </Section>

        {/* 3 — COMPANY OVERVIEW */}
        <Section id="about">
          <p data-reveal className="eyebrow">
            Company Overview
          </p>
          <SplitHeading text="Built on *trust* and craft." className="mt-6 max-w-3xl text-[clamp(2.2rem,5vw,4.2rem)]" />
          <p data-reveal className="mt-8 max-w-xl text-base leading-relaxed text-white/95 md:text-lg">
            RoyalTech Innovation is a technology company delivering software, cloud and AI solutions with an
            engineering-first, design-led mindset.
          </p>
          <div data-stagger className="mt-12 grid max-w-2xl grid-cols-3 gap-4 sm:gap-5">
            {stats.map((s) => (
              <div key={s.label} className="glass p-5 sm:p-7">
                <div className="display gold-text text-4xl sm:text-5xl">
                  <span data-count={s.value}>0</span>
                  {s.suffix}
                </div>
                <p className="mt-2 text-[0.68rem] tracking-[0.2em] text-white/85 uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 4 — SERVICES */}
        <Section id="services">
          <p data-reveal className="eyebrow">
            Our Services
          </p>
          <SplitHeading text="What we *build*." className="mt-6 max-w-3xl text-[clamp(2.2rem,5vw,4.2rem)]" />
          <div data-stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.title} className="glass group p-7">
                <div className="relative z-10">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold/40 bg-gold/10 text-gold transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                    <Icon name={s.icon} />
                  </span>
                  <h3 className="display mt-7 text-xl">{s.title}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-white/90">{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* 5 — AI & AUTOMATION */}
        <Section id="ai">
          <p data-reveal className="eyebrow">
            AI &amp; Automation
          </p>
          <SplitHeading text="Automation that *thinks* ahead." className="mt-6 max-w-3xl text-[clamp(2.2rem,5.2vw,4.4rem)]" />
          <p data-reveal className="mt-8 max-w-xl text-base leading-relaxed text-white/95 md:text-lg">
            AI systems that learn from your data, act on your behalf and keep improving.
          </p>
          <div
            data-reveal
            data-pipeline
            className="mt-14 max-w-xl rounded-2xl border border-white/20 bg-[#03060d]/85 px-6 py-7 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md md:px-8"
          >
            <div className="relative">
              <div className="absolute inset-x-0 top-[7px] h-px bg-white/35" />
              <div
                data-pipeline-fill
                className="absolute inset-x-0 top-[7px] h-px origin-left bg-gradient-to-r from-gold to-gold-soft shadow-[0_0_12px_rgba(214,179,112,0.9)]"
              />
              <ol className="relative flex justify-between">
                {pipeline.map((p) => (
                  <li key={p} className="flex flex-col items-start gap-4 last:items-end">
                    <span className="h-[15px] w-[15px] rounded-full border border-gold bg-ink shadow-[0_0_14px_rgba(214,179,112,0.7)]" />
                    <span className="text-[0.72rem] font-medium tracking-[0.24em] text-white uppercase">{p}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Section>

        {/* 6 — FEATURED PROJECTS */}
        <Section id="projects" tour={false}>
          <p data-reveal className="eyebrow">
            Featured Projects
          </p>
          <SplitHeading text="Selected *work*." className="mt-6 max-w-3xl text-[clamp(2.2rem,5vw,4.2rem)]" />

          <div className="mt-16 flex flex-col gap-10">
            {featuredProjects.map((f) => (
              <FeaturedProject key={f.title} {...f} />
            ))}
          </div>
        </Section>

        {/* 6b — FOLLOW & CONNECT */}
        <Section id="social">
          <p data-reveal className="eyebrow">
            Follow &amp; Connect
          </p>
          <SplitHeading text="See our work, *live* on social." className="mt-6 max-w-3xl text-[clamp(2.2rem,5vw,4.2rem)]" />
          <p data-reveal className="mt-6 max-w-xl text-base leading-relaxed text-white/92 md:text-lg">
            Follow along for new case studies, design breakdowns and company news across our channels.
          </p>
          <div className="mt-14">
            <SocialShowcase items={socialItems} />
          </div>
        </Section>

        {/* 7 — WHY ROYALTECH */}
        <Section id="why">
          <p data-reveal className="eyebrow">
            Why RoyalTech
          </p>
          <SplitHeading text="Why teams *choose* us." className="mt-6 max-w-3xl text-[clamp(2.2rem,5vw,4.2rem)]" />
          <ul className="mt-14 max-w-3xl">
            {reasons.map((r, i) => (
              <li key={r.title} className="group">
                <div data-line className="hairline" />
                <div data-reveal className="flex gap-6 py-6 md:gap-10 md:py-7">
                  <span className="display gold-text w-10 shrink-0 text-2xl">0{i + 1}</span>
                  <div>
                    <h3 className="display text-xl transition-colors duration-500 group-hover:text-gold-soft md:text-2xl">{r.title}</h3>
                    <p className="mt-1.5 text-[0.95rem] text-white/90">{r.text}</p>
                  </div>
                </div>
              </li>
            ))}
            <li>
              <div data-line className="hairline" />
            </li>
          </ul>
        </Section>

        {/* 8 — CONTACT & FOOTER */}
        <Section id="contact" exit={false} className="!pb-12">
          <p data-reveal className="eyebrow">
            Contact
          </p>
          <SplitHeading text="Let’s build what’s *next*." className="mt-6 max-w-4xl text-[clamp(2.4rem,6vw,5.2rem)]" />
          <div data-reveal className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" data-open-contact className="btn btn-gold">
              <Icon name="mail" className="h-4 w-4" /> Send us a message
            </a>
            <a href={`mailto:${site.email}`} className="btn btn-ghost">
              {site.email}
            </a>
          </div>
          <div data-reveal className="mt-8">
            <p className="mb-4 text-[0.7rem] tracking-[0.25em] text-white/78 uppercase">Follow us</p>
            <SocialLinks />
          </div>
        </Section>

        <Footer />
      </main>
    </>
  );
}
