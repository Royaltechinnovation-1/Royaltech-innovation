import "./royaltech-home.css";
import { Inter } from "next/font/google";
import HeroMedia from "./HomeHeroMedia";
import SmoothScroll from "./HomeSmoothScroll";
import VisitForm from "./HomeVisitForm";

/* The home design was built with Inter; it is loaded here so it applies only inside `.rt-home`. */
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

type IconName = "code" | "design" | "cart" | "web" | "cloud" | "headset" | "phone" | "database" | "marketing";

type Service = {
  title: string;
  text: string;
  icon: IconName;
  cta: string;
  /** Picture shown on the right of the card. */
  image: string;
};

const services: Service[] = [
  {
    title: "Custom Software Development",
    text: "Leverage expert talent to build scalable and innovative software solutions tailored to your business.",
    icon: "code",
    cta: "Build Smarter",
    image: "/images/services/s1.jpg",
  },
  {
    title: "UI/UX Design",
    text: "Create intuitive and engaging experiences with user-centric design solutions.",
    icon: "design",
    cta: "Design Better",
    image: "/images/services/s2.jpg",
  },
  {
    title: "E-commerce Solutions",
    text: "Launch powerful online stores with seamless shopping experiences.",
    icon: "cart",
    cta: "Grow Online",
    image: "/images/services/s3.jpg",
  },
  {
    title: "Web Development",
    text: "Build fast, secure and responsive websites that make an impact.",
    icon: "web",
    cta: "Explore Web",
    image: "/images/services/s4.jpg",
  },
  {
    title: "Cloud Services",
    text: "Scale your business with reliable and secure cloud solutions.",
    icon: "cloud",
    cta: "Go Cloud",
    image: "/images/services/s5.jpg",
  },
  {
    title: "IT Support",
    text: "Get expert IT support for smooth and uninterrupted business operations.",
    icon: "headset",
    cta: "Get Support",
    image: "/images/services/s6.jpg",
  },
  {
    title: "Mobile App Development",
    text: "Turn your ideas into high-performance mobile apps for iOS and Android.",
    icon: "phone",
    cta: "Build App",
    image: "/images/services/s7.jpg",
  },
  {
    title: "Database Management",
    text: "Design, manage and optimize your data for better performance and scalability.",
    icon: "database",
    cta: "Manage Data",
    image: "/images/services/s8.jpg",
  },
  {
    title: "Digital Marketing Strategy",
    text: "Grow your brand with data-driven digital marketing strategies.",
    icon: "marketing",
    cta: "Grow Your Brand",
    image: "/images/services/s9.jpg",
  },
];

/** Simple outline icons drawn in the accent colour (no icon library is installed). */
function ServiceIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    code: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
    design: <path d="M4 20l4-1L19 8l-3-3L5 16l-1 4zM14 6l3 3" />,
    cart: (
      <>
        <path d="M3 4h2l2.4 10.2a1.5 1.5 0 001.5 1.2h7.7a1.5 1.5 0 001.5-1.1L20 8H6.2" />
        <circle cx="9.5" cy="19.5" r="1.3" />
        <circle cx="17" cy="19.5" r="1.3" />
      </>
    ),
    web: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
      </>
    ),
    cloud: <path d="M7 18a4 4 0 010-8 6 6 0 0111.5 1.5A3.5 3.5 0 0118 18H7z" />,
    headset: (
      <>
        <path d="M4 14v-2a8 8 0 0116 0v2" />
        <rect x="3" y="14" width="4" height="6" rx="1.2" />
        <rect x="17" y="14" width="4" height="6" rx="1.2" />
        <path d="M19 20c0 1.5-2 2-5 2" />
      </>
    ),
    phone: (
      <>
        <rect x="7" y="2.5" width="10" height="19" rx="2" />
        <path d="M11 18.5h2" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" />
        <path d="M4.5 5.5v13c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-13M4.5 12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8" />
      </>
    ),
    marketing: <path d="M4 20V11M10 20V5M16 20v-6M22 20H2" />,
  };
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

/** FAQ entries. Only the answers that have been written are set; the rest open with no answer text. */
const faqs: { question: string; answer?: string }[] = [
  {
    question: "What services does RoyalTech Innovation provide?",
    answer:
      "RoyalTech Innovation provides professional IT solutions and digital transformation services to help businesses grow and improve their online presence. Our services include custom website development, web application development, mobile app development, custom software development, ERP and CRM solutions, UI/UX design, digital marketing, IT consulting, and business process automation. We deliver secure, scalable, and user-friendly digital solutions tailored to startups, small businesses, and enterprises across different industries.",
  },
  { question: "Does RoyalTech Innovation develop custom websites?" },
  { question: "Does RoyalTech Innovation provide mobile app development services?" },
  { question: "How much does custom website development cost?" },
  { question: "How long does custom website development take?" },
  { question: "Does RoyalTech provide ongoing technical support?" },
];

type Review = {
  name: string;
  position?: string;
  details: string;
  rating: number;
  reviewText: string;
};

const reviews: Review[] = [
  {
    name: "Michael Thompson",
    position: "Founder, NextGen Enterprises · Australia",
    details: "1 review · a week ago",
    rating: 5,
    reviewText:
      "RoyalTech Innovation demonstrated outstanding technical expertise from planning to implementation. They understood our business vision and delivered a reliable digital solution. Their professionalism, attention to detail, and timely delivery exceeded our expectations.",
  },
  {
    name: "Sophia Williams",
    position: "Operations Head, Global Business Group · UAE",
    details: "1 review · new",
    rating: 5,
    reviewText:
      "RoyalTech Innovation transformed the way we manage our business operations. Their team delivered excellent technical solutions with great communication and professionalism. We truly appreciate their dedication, quality of work, and commitment to delivering results.",
  },
  {
    name: "Sarah Mitchell",
    position: "Managing Director, TechVision Inc. · USA",
    details: "2 review · a week ago",
    rating: 5,
    reviewText:
      "Working with RoyalTech Innovation was a wonderful experience. Their software solution streamlined our workflow and significantly improved productivity. The team understood our requirements perfectly and provided outstanding support throughout the project.",
  },
  {
    name: "James Anderson",
    position: "CEO, Anderson Digital Solutions · Uk",
    details: "1 review · a week ago",
    rating: 5,
    reviewText:
      "Their CRM and ERP solutions helped us simplify complex business operations and improve efficiency. The team was highly professional, responsive, and supportive throughout the process. RoyalTech Innovation has become a trusted technology partner for our business.",
  },
  {
    name: "Mohit Sankhyan",
    position: "Founder, Healthcare Solutions.",
    details: "1 review · a week ago",
    rating: 5,
    reviewText:
      "I had Royal Tech Innovation, Mohali develop an ERP for my healthcare business, and honestly, they did a great job. They understood my business requirements very well and developed an excellent ERP accordingly. Their team's work, dedication, and support were very impressive. The overall experience was very good. Thank you so much, Royal Tech Innovation, Mohali, for your amazing work! Highly recommended. 🙌",
  },
  {
    name: "Rohit Verma",
    position: "Business Development Professional",
    details: "3 reviews · 2 hours ago",
    rating: 5,
    reviewText:
      "Excellent experience with Royal Tech Innovation! The team is highly professional, supportive, and dedicated. They provide quality services with great attention to detail. Highly recommended for anyone looking for reliable and innovative solutions.",
  },
  {
    name: "Vk",
    position: "Marketing Consultant",
    details: "1 review · 2 hours ago",
    rating: 5,
    reviewText:
      "I had a great experience with Royaltech Innovation. Their team was professional, supportive, and helpful throughout the website development process. They understood my requirements and delivered a website that met my expectations. I really appreciate their work, communication, and dedication. Highly recommended for website development and IT services!",
  },
  {
    name: "Ashman Momi",
    position: "Business Consultant",
    details: "2 hours ago · New",
    rating: 5,
    reviewText:
      "Really happy with my experience at Royal Tech Innovation. The staff is friendly, knowledgeable, and always ready to help. Their dedication and professionalism make them stand out.",
  },
  {
    name: "Vikram Singh",
    position: "Business Professional",
    details: "2 hours ago · New",
    rating: 5,
    reviewText:
      "I had a wonderful experience with Royal Tech Innovation for their digital marketing services. Their team is highly professional, creative, and knowledgeable about the latest digital marketing trends. They took the time to understand my business goals and provided valuable suggestions to improve online visibility, brand awareness, and audience engagement.",
  },
  {
    name: "Diya",
    position: "Founder, Growth Marketing",
    details: "2 hours ago · New",
    rating: 5,
    reviewText:
      "I had a great experience with Royaltech Innovation. Their IT consulting services were really helpful and professional. The team understood my requirements, provided useful guidance, and helped me with the right solutions. I appreciate their support, knowledge, and dedication. Highly recommended for IT consulting services!",
  },
  {
    name: "Adab Bawa",
    position: "Operations Manager",
    details: "1 review · 2 hours ago · New",
    rating: 5,
    reviewText:
      "I had a great experience with Royal Tech Innovation for their web development services. The management is highly professional, supportive, and understanding. They have a clear vision, excellent coordination, and a very positive approach towards understanding client requirements.",
  },
  {
    name: "Dhamu",
    position: "Technology Consultant",
    details: "2 hours ago · New",
    rating: 5,
    reviewText:
      "I had an excellent experience with Royal Tech Innovation for their web development services. Their team is highly skilled, professional, and dedicated to delivering quality solutions. They demonstrated a clear understanding of my requirements and transformed ideas into a well-structured, modern, and user-friendly website.",
  },
  {
    name: "Abhi",
    position: "Founder, Digital Ventures",
    details: "2 hours ago · New",
    rating: 5,
    reviewText:
      "I had a great experience with Royal Tech Innovation for IT consultancy services. Their team demonstrated strong technical knowledge, professionalism, and a clear understanding of business requirements. They provided valuable guidance, practical recommendations, and effective technology solutions. Communication was smooth, and the overall experience was excellent.",
  },
];

/** One review card. Star count comes from `rating`. */
function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="glass flex w-[min(78vw,300px)] shrink-0 flex-col gap-3 rounded-3xl p-5 sm:w-[340px] sm:gap-4 sm:p-7">
      <div className="flex items-center gap-1 text-amber-300" role="img" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} aria-hidden="true" className={i < review.rating ? "text-xl" : "text-xl text-white/25"}>
            ★
          </span>
        ))}
      </div>
      <p className="text-sm leading-relaxed text-white/85">“{review.reviewText}”</p>
      <div className="mt-auto pt-2">
        <p className="font-semibold text-white">{review.name}</p>
        {review.position && <p className="text-xs text-accent">{review.position}</p>}
        <p className="mt-1 text-xs text-white/50">{review.details}</p>
      </div>
    </div>
  );
}

const email = "info@royaltechinnovation.co.in";
const phone = "+91 86790 16505";

export default function RoyalTechHome() {
  return (
    <div className={`rt-home ${inter.variable}`}>
      <noscript>
        <style>{`.rt-home [data-reveal],.rt-home [data-stagger]>*{opacity:1!important}`}</style>
      </noscript>
      {/* Fixed full-page office background; the content scrolls over it */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/office-bg.png" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80" />
      </div>

      <SmoothScroll />

      <main className="relative z-10">
        {/* HERO: the logo clip and photos are the background of the whole glass panel; copy sits on top */}
        <section id="hero" className="flex min-h-[100svh] items-end pt-[8rem] pb-4 sm:items-center sm:pt-[8.5rem] sm:pb-8 md:pt-[9rem]">
          <div className="page-wrap">
          <div className="glass relative flex h-[calc(100svh-9rem)] min-h-[440px] w-full items-end rounded-[1.4rem] sm:h-[calc(100svh-10.5rem)] sm:min-h-[520px] sm:items-center sm:rounded-[2rem] md:rounded-[2.5rem]">
            <div className="absolute inset-0 z-0">
              <HeroMedia />
            </div>
            {/* dark wash from the left so the copy stays readable over the media */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-950/15" />

            <div className="relative z-10 w-full max-w-xl p-5 sm:p-10 md:p-14 xl:max-w-3xl">
              <p data-reveal className="text-xs tracking-[0.22em] text-accent uppercase sm:text-sm sm:tracking-[0.3em]">
                RoyalTech Innovation
              </p>
              <h1
                data-reveal
                data-delay="0.1"
                className="mt-3 text-[1.65rem] leading-[1.12] font-semibold sm:mt-6 sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl"
              >
                Build Your <span className="text-accent">Digital Future</span> with Custom Software &amp; IT Solutions
              </h1>
              <p data-reveal data-delay="0.2" className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:mt-8 sm:text-lg md:text-xl">
                RoyalTech Innovation helps businesses grow through custom website development, mobile applications,
                software solutions, UI/UX design, digital marketing and IT consulting.
              </p>
              <div data-reveal data-delay="0.3" className="mt-5 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
                <a href="#services" className="pill pill-accent">
                  Explore Services →
                </a>
                <a href="#contact" className="pill pill-ghost">
                  Contact
                </a>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* WHAT WE DO: copy and image are two separate panels side by side */}
        <section id="what-we-do" className="section-y">
          <div className="page-wrap grid items-stretch gap-4 md:gap-6 lg:grid-cols-2">
            <div data-reveal className="glass flex flex-col justify-center rounded-[1.4rem] p-5 sm:rounded-[2rem] sm:p-10 md:p-14">
              <p className="text-sm tracking-[0.3em] text-accent uppercase">About Us</p>
              <h2 className="mt-4 text-2xl leading-[1.12] font-semibold sm:mt-5 sm:text-3xl md:text-4xl xl:text-5xl">
                Technology That Moves Your Business Forward
              </h2>
              <p className="mt-5 text-lg font-medium text-accent md:text-xl">Your partner in digital transformation.</p>
              <p className="mt-7 text-base leading-relaxed text-white/90 md:text-lg">
                RoyalTech Innovation is an emerging IT solutions company helping businesses transform, grow, and succeed.
                From websites and custom software to mobile apps, digital marketing, design, and IT consulting, we deliver
                practical, reliable, and scalable solutions that startups, small businesses, and established organisations
                can count on.
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/90 md:text-lg">
                We focus on clear outcomes: a stronger digital presence, smoother operations, and technology your team can
                rely on every day.
              </p>

              <p className="mt-10 text-xs tracking-[0.3em] text-accent uppercase">Our Approach</p>
              <ol className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {["Discover", "Plan", "Build", "Test", "Launch"].map((step, i) => (
                  <li key={step} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                    <span className="block text-xs tracking-[0.2em] text-accent">0{i + 1}</span>
                    <span className="mt-2 block text-base font-semibold text-white md:text-lg">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm leading-relaxed text-white/85 md:text-base">
                Every engagement follows this simple path so startups, SMEs, and established organisations get dependable
                delivery without unnecessary complexity.
              </p>
            </div>

            {/* The panel uses the image's own proportions (1536:1820), so the full picture shows */}
            <div data-reveal data-delay="0.15" className="glass relative aspect-[4/5] max-h-[70vh] w-full rounded-[1.4rem] sm:aspect-[1536/1820] sm:max-h-none sm:rounded-[2rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-edited.jpg"
                alt="RoyalTech Innovation office entrance with the logo on the glass door"
                loading="lazy"
                draggable={false}
                className="absolute inset-0 h-full w-full rounded-[2rem] object-contain"
              />
            </div>
          </div>
        </section>

        {/* WHAT WE DO: placed after About Us, image on the left and copy on the right */}
        <section id="what-we-do-copy" className="section-y">
          <div className="page-wrap grid items-stretch gap-4 md:gap-6 lg:grid-cols-2">
            <div data-reveal className="glass relative aspect-[5/4] w-full rounded-[1.4rem] sm:aspect-square sm:rounded-[2rem] lg:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/what-we-do-tiles.jpg"
                alt="Wooden Scrabble tiles on a white surface spelling WHAT YOU DO MATTERS"
                loading="lazy"
                draggable={false}
                className="absolute inset-0 h-full w-full rounded-[2rem] object-cover"
              />
            </div>

            <div data-reveal data-delay="0.15" className="glass flex flex-col justify-center rounded-[1.4rem] p-5 sm:rounded-[2rem] sm:p-10 md:p-14 lg:order-2">
              <p className="text-sm tracking-[0.3em] text-accent uppercase">What We Do</p>
              <h2 className="mt-4 text-2xl leading-[1.12] font-semibold sm:mt-5 sm:text-3xl md:text-4xl xl:text-5xl">
                Where continuous innovation meets operational excellence
              </h2>
              <p className="mt-7 text-base leading-relaxed text-white/90 md:text-lg">
                RoyalTech Innovation helps businesses transform, grow, and succeed with practical technology. We design,
                build, and support digital solutions that fit how you work and scale as you grow.
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/90 md:text-lg">
                From websites and custom software to mobile apps, digital marketing, UI/UX design, and IT consulting, we
                focus on clear outcomes: a stronger digital presence, smoother operations, and technology your team can
                rely on every day.
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/90 md:text-lg">
                Every engagement follows a simple path: discover, plan, build, test, and launch, so startups, SMEs, and
                established organisations get dependable delivery without unnecessary complexity.
              </p>
            </div>
          </div>
        </section>

        {/* OUR DEVELOPMENT PROCESS: five steps shown in one row on desktop */}
        <section id="process" className="section-y">
          <div data-reveal className="page-wrap">
            <p className="text-center text-sm tracking-[0.3em] text-accent uppercase">Our Development Process</p>
            {/* Each card holds its image on top and its step text below */}
            <ol className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 xl:grid-cols-5">
              {[
                {
                  src: "https://res.cloudinary.com/ugqc5gb8/image/upload/v1795677984/Logo.png",
                  alt: "RoyalTech Innovation logo",
                  title: "Discover",
                  text: "We learn your goals, challenges, and what success looks like—so priorities are clear before any build begins.",
                },
                {
                  src: "https://res.cloudinary.com/ugqc5gb8/image/upload/v1795678058/planing.svg",
                  alt: "Planning illustration",
                  title: "Plan & Design",
                  text: "We map timelines, budget, architecture, and experience into a roadmap you can review and approve.",
                },
                {
                  src: "https://res.cloudinary.com/ugqc5gb8/image/upload/v1795678052/Build.svg",
                  alt: "Build illustration",
                  title: "Build",
                  text: "We develop with modern tools and clean practices so websites, software, and apps fit how you work.",
                },
                {
                  src: "https://res.cloudinary.com/ugqc5gb8/image/upload/v1795678127/Build-website-development.jpg",
                  alt: "Website development",
                  title: "Testing",
                  text: "We check quality, performance, and usability across devices—so issues are caught before go-live.",
                },
                {
                  src: "https://res.cloudinary.com/ugqc5gb8/image/upload/v1795678126/CRM.png",
                  alt: "CRM illustration",
                  title: "Launch",
                  text: "We deploy carefully, train your team, and stay available after go-live as your needs grow.",
                },
              ].map((step, i) => (
                <li key={step.title} className="glass flex flex-col overflow-hidden rounded-[1.4rem] sm:rounded-[2rem]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/10 bg-white/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={step.src}
                      alt={step.alt}
                      loading="lazy"
                      draggable={false}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-7">
                    <span className="text-sm tracking-[0.2em] text-accent">0{i + 1}</span>
                    <h3 className="mt-4 text-xl font-semibold text-white md:text-2xl">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section-y">
          <div className="page-wrap">
            <p data-reveal className="text-xs tracking-[0.3em] text-accent uppercase">
              Services
            </p>
            <h2 data-reveal data-delay="0.1" className="mt-3 text-2xl font-semibold sm:mt-4 sm:text-3xl md:text-5xl">
              Our Services
            </h2>
            <div data-stagger className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
              {services.map((service) => (
                <div key={service.title}>
                  <div className="glass relative flex h-full flex-col overflow-hidden rounded-2xl p-5 sm:rounded-3xl sm:p-6">
                    {service.image && (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={service.image}
                          alt=""
                          loading="lazy"
                          draggable={false}
                          className="pointer-events-none absolute inset-y-0 right-0 h-full w-[60%] object-cover object-right [mask-image:linear-gradient(to_right,transparent,#000_35%)] [-webkit-mask-image:linear-gradient(to_right,transparent,#000_35%)]"
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/15"
                        />
                      </>
                    )}
                    <div className="relative z-10 flex h-full flex-col gap-3 md:max-w-[60%]">
                      <ServiceIcon name={service.icon} />
                      <h3 className="text-lg font-semibold md:text-xl">{service.title}</h3>
                      <p className="text-sm leading-relaxed text-white/85">{service.text}</p>
                      <div className="mt-auto pt-2">
                        <span className="pill pill-ghost">{service.cta} →</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section id="why-choose-us" className="section-y">
          <div className="page-wrap">
            <div data-reveal>
              <p className="text-xs tracking-[0.3em] text-accent uppercase">Why Choose Us</p>
              <h2 className="mt-3 text-2xl font-semibold sm:mt-4 sm:text-3xl md:text-5xl">RoyalTech Innovation</h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                helps startups, SMEs, and growing organisations move forward with practical technology, clear delivery,
                and a partner you can count on.
              </p>
            </div>

            <div data-stagger className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-6">
              {[
                {
                  title: "Business-First Delivery",
                  subtitle: "Built around your goals",
                  text: "We start with what your business needs to achieve, then tailor technology that fits your workflows not generic templates.",
                },
                {
                  title: "Customized Solutions",
                  subtitle: "Tailored to your needs",
                  text: "From websites and software to apps and automation, every solution is shaped around your priorities, budget, and growth plans.",
                },
                {
                  title: "Clear Partnership",
                  subtitle: "Transparent from start to finish",
                  text: "We communicate openly on scope, timelines, and progress so you always know where things stand and what comes next.",
                },
                {
                  title: "Long Term Support",
                  subtitle: "Reliable after launch",
                  text: "We stay with you beyond go live helping your systems stay dependable as your team, markets, and requirements grow.",
                },
              ].map((item, i) => (
                <div key={item.title} className="glass flex flex-col gap-3 rounded-2xl p-5 sm:gap-4 sm:rounded-3xl sm:p-8 md:p-10">
                  <span className="text-xs tracking-[0.3em] text-accent">0{i + 1}</span>
                  <h3 className="text-xl font-semibold sm:text-2xl md:text-3xl">{item.title}</h3>
                  <p className="text-base font-medium text-accent md:text-lg">{item.subtitle}</p>
                  <p className="text-base leading-relaxed text-white/85 md:text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ: accordion on the left, picture space on the right */}
        <section id="faq" className="section-y">
          <div className="page-wrap">
            <div data-reveal>
              <p className="text-xs tracking-[0.3em] text-accent uppercase">FAQ</p>
              <h2 className="mt-3 text-2xl font-semibold sm:mt-4 sm:text-3xl md:text-5xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg font-medium text-accent">Innovate. Integrate. Elevate.</p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                Everything you need to know about working with RoyalTech Innovation, from your first enquiry to long-term
                support.
              </p>
            </div>

            <div className="mt-8 grid items-stretch gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-[1fr_1.25fr]">
              <div data-stagger className="flex flex-col gap-4">
                {faqs.map((faq, i) => (
                  <details key={faq.question} className="glass group rounded-2xl p-4 sm:p-6 md:p-7">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold md:text-lg [&::-webkit-details-marker]:hidden">
                      <span>
                        {i + 1}. {faq.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    {faq.answer && (
                      <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base">{faq.answer}</p>
                    )}
                  </details>
                ))}
              </div>

              {/* Picture sits on the right with no panel behind it. Shown at its full proportions, never cropped. */}
              <div data-reveal data-delay="0.15" className="order-first flex items-center justify-center lg:order-last lg:-mt-24 lg:self-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://res.cloudinary.com/dwnnakrrh/image/upload/v1795681192/FAQ3_2_s4amwg.png"
                  alt="Frequently asked questions about RoyalTech Innovation"
                  loading="lazy"
                  draggable={false}
                  className="block h-auto w-full max-w-full"
                />
              </div>
            </div>

            <div data-reveal className="glass mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl p-5 sm:mt-12 sm:gap-6 sm:rounded-3xl sm:p-8 md:flex-row md:items-center md:p-10">
              <div>
                <p className="text-xl font-semibold md:text-2xl">Still have a question?</p>
                <p className="mt-2 text-base text-white/85 md:text-lg">
                  Tell us about your project and we will help you find the right solution.
                </p>
              </div>
              <a href="#contact" className="pill pill-accent shrink-0">
                Contact us
              </a>
            </div>
          </div>
        </section>

        {/* REVIEWS: cards slide to the right in a loop; hover pauses */}
        <section id="reviews" className="section-y">
          <div className="page-wrap">
            <p className="text-xs tracking-[0.3em] text-accent uppercase">Reviews</p>
            <h2 className="mt-3 text-2xl font-semibold sm:mt-4 sm:text-3xl md:text-5xl">What Our Clients Say</h2>
          </div>

          <div className="reviews-strip mt-8 overflow-hidden sm:mt-12 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="reviews-track flex w-max gap-6 px-3">
              {reviews.map((review) => (
                <ReviewCard key={`a-${review.name}`} review={review} />
              ))}
              {reviews.map((review) => (
                <div key={`b-${review.name}`} aria-hidden="true" className="contents">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VISIT: enquiry form on the left, office map on the right */}
        <section id="visit" className="section-y">
          <div className="page-wrap grid items-stretch gap-4 md:gap-6 lg:grid-cols-2">
            <div data-reveal>
              <VisitForm email={email} phone={phone} />
            </div>
            <div data-reveal data-delay="0.15" className="glass min-h-[260px] overflow-hidden rounded-[1.4rem] sm:min-h-[420px] sm:rounded-[2rem]">
              <iframe
                title="Map showing CP67 Mall, Sector 67, Mohali"
                src="https://maps.google.com/maps?q=CP67%20Mall%2C%20Sector%2067%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Mohali%2C%20Punjab&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[260px] w-full border-0 sm:min-h-[420px]"
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section-y md:flex md:min-h-[70vh] md:items-center">
          <div className="page-wrap">
          <div data-reveal className="glass rounded-[1.4rem] p-6 text-center sm:rounded-[2rem] sm:p-10 md:p-14">
            <p className="text-xs tracking-[0.3em] text-accent uppercase">Get in touch</p>
            <h2 className="mt-3 text-2xl font-semibold sm:mt-4 sm:text-3xl md:text-5xl">Let’s talk about your project</h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4">
              <a href={`mailto:${email}`} className="pill pill-accent">
                Email us
              </a>
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="pill pill-ghost">
                {phone}
              </a>
            </div>
          </div>
          </div>
        </section>

      </main>
    </div>
  );
}
