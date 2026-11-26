import "./home.css";
import type { Metadata } from "next";
import HomeHeader from "@/components/home/HomeHeader";
import HeroMedia from "@/components/home/HeroMedia";
import SmoothScroll from "@/components/home/SmoothScroll";
import VisitForm from "@/components/home/VisitForm";

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
    image: "/home/services/s1.jpg",
  },
  {
    title: "UI/UX Design",
    text: "Create intuitive and engaging experiences with user-centric design solutions.",
    icon: "design",
    cta: "Design Better",
    image: "/home/services/s2.jpg",
  },
  {
    title: "E-commerce Solutions",
    text: "Launch powerful online stores with seamless shopping experiences.",
    icon: "cart",
    cta: "Grow Online",
    image: "/home/services/s3.jpg",
  },
  {
    title: "Web Development",
    text: "Build fast, secure and responsive websites that make an impact.",
    icon: "web",
    cta: "Explore Web",
    image: "/home/services/s4.jpg",
  },
  {
    title: "Cloud Services",
    text: "Scale your business with reliable and secure cloud solutions.",
    icon: "cloud",
    cta: "Go Cloud",
    image: "/home/services/s5.jpg",
  },
  {
    title: "IT Support",
    text: "Get expert IT support for smooth and uninterrupted business operations.",
    icon: "headset",
    cta: "Get Support",
    image: "/home/services/s6.jpg",
  },
  {
    title: "Mobile App Development",
    text: "Turn your ideas into high-performance mobile apps for iOS and Android.",
    icon: "phone",
    cta: "Build App",
    image: "/home/services/s7.jpg",
  },
  {
    title: "Database Management",
    text: "Design, manage and optimize your data for better performance and scalability.",
    icon: "database",
    cta: "Manage Data",
    image: "/home/services/s8.jpg",
  },
  {
    title: "Digital Marketing Strategy",
    text: "Grow your brand with data-driven digital marketing strategies.",
    icon: "marketing",
    cta: "Grow Your Brand",
    image: "/home/services/s9.jpg",
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
      className="tw:h-10 tw:w-10 tw:text-accent"
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
    <div className="glass tw:flex tw:w-[min(78vw,300px)] tw:shrink-0 tw:flex-col tw:gap-3 tw:rounded-3xl tw:p-5 tw:sm:w-[340px] tw:sm:gap-4 tw:sm:p-7">
      <div className="tw:flex tw:items-center tw:gap-1 tw:text-amber-300" role="img" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} aria-hidden="true" className={i < review.rating ? "tw:text-xl" : "tw:text-xl tw:text-white/25"}>
            ★
          </span>
        ))}
      </div>
      <p className="tw:text-sm tw:leading-relaxed tw:text-white/85">“{review.reviewText}”</p>
      <div className="tw:mt-auto tw:pt-2">
        <p className="tw:font-semibold tw:text-white">{review.name}</p>
        {review.position && <p className="tw:text-xs tw:text-accent">{review.position}</p>}
        <p className="tw:mt-1 tw:text-xs tw:text-white/50">{review.details}</p>
      </div>
    </div>
  );
}

const email = "info@royaltechinnovation.co.in";
const phone = "+91 86790 16505";

export const metadata: Metadata = {
  title:
    "RoyalTech Innovation | IT Solutions Company & Digital Transformation Partner",
  description:
    "RoyalTech Innovation in Mohali helps startups and SMEs with website development, custom software, mobile apps, SEO, digital marketing, UI/UX design, and IT consulting.",
    // "RoyalTech Innovation delivers web development, mobile apps, custom software, UI/UX design and digital solutions to help businesses grow.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "RoyalTech Innovation | IT Solutions Company & Digital Transformation Partner",
    description:
      "End-to-end digital solutions, software development, and IT services for growing businesses across India, the UK, and the UAE.",
    url: "/",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://royaltechinnovation.co.in/#organization",
      name: "RoyalTech Innovation",
      url: "https://royaltechinnovation.co.in",
      logo: "https://royaltechinnovation.co.in/royaltech-logo.png",
      image: "https://royaltechinnovation.co.in/royaltech-logo.png",
      description:
        "IT solutions company and digital transformation partner delivering software development, website development, mobile apps, ERP, and IT consulting services.",
      email: "info@royaltechinnovation.co.in",
      telephone: "+91-86790-16505",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Gate No. 5, CP 67, Imperial Tower, Behind CP67 Mall, Chandigarh Int'l Airport Rd",
        addressLocality: "Sahibzada Ajit Singh Nagar",
        addressRegion: "Punjab",
        postalCode: "160062",
        addressCountry: "IN",
      },
      areaServed: ["India", "United Kingdom", "United Arab Emirates"],
      sameAs: [
        "https://www.facebook.com/profile.php?id=61596431871796",
        "https://www.instagram.com/royaltechinnovation/",
        "https://www.linkedin.com/company/143923623/",
      ],
      knowsAbout: [
        "IT solutions",
        "digital transformation",
        "software development",
        "website development",
        "mobile app development",
        "SEO",
        "digital marketing services",
        "IT consulting",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://royaltechinnovation.co.in/#website",
      url: "https://royaltechinnovation.co.in",
      name: "RoyalTech Innovation",
      publisher: {
        "@id": "https://royaltechinnovation.co.in/#organization",
      },
      inLanguage: "en",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://royaltechinnovation.co.in/#localbusiness",
      name: "RoyalTech Innovation",
      image: "https://royaltechinnovation.co.in/royaltech-logo.png",
      url: "https://royaltechinnovation.co.in",
      telephone: "+91-86790-16505",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Gate No. 5, CP 67, Imperial Tower, Behind CP67 Mall, Chandigarh Int'l Airport Rd",
        addressLocality: "Sahibzada Ajit Singh Nagar",
        addressRegion: "Punjab",
        postalCode: "160062",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 30.678057,
        longitude: 76.723018,
      },
      priceRange: "$$",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <noscript>
        <style>{`[data-reveal],[data-stagger]>*{opacity:1!important}`}</style>
      </noscript>
      {/* Fixed full-page office background; the content scrolls over it */}
      <div aria-hidden className="tw:pointer-events-none tw:fixed tw:inset-0 tw:-z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/home/office-bg.png" alt="" className="tw:h-full tw:w-full tw:object-cover" />
        <div className="tw:absolute tw:inset-0 tw:bg-slate-950/45" />
        <div className="tw:absolute tw:inset-0 tw:bg-gradient-to-b tw:from-slate-950/60 tw:via-transparent tw:to-slate-950/80" />
      </div>
      <SmoothScroll />
      <HomeHeader />

      <main className="tw:relative tw:z-10 tw:text-white">
        {/* HERO: the logo clip and photos are the background of the whole glass panel; copy sits on top */}
        <section id="hero" className="tw:flex tw:min-h-[100svh] tw:items-end tw:pt-16 tw:pb-4 tw:sm:items-center tw:sm:pt-20 tw:sm:pb-8 tw:md:pt-24">
          <div className="page-wrap">
          <div className="glass tw:relative tw:flex tw:h-[calc(100svh-5.25rem)] tw:min-h-[440px] tw:w-full tw:items-end tw:rounded-[1.4rem] tw:sm:h-[calc(100svh-7rem)] tw:sm:min-h-[520px] tw:sm:items-center tw:sm:rounded-[2rem] tw:md:rounded-[2.5rem]">
            <div className="tw:absolute tw:inset-0 tw:z-0">
              <HeroMedia />
            </div>
            {/* dark wash from the left so the copy stays readable over the media */}
            <div aria-hidden className="tw:pointer-events-none tw:absolute tw:inset-0 tw:z-[1] tw:bg-gradient-to-r tw:from-slate-950/90 tw:via-slate-950/55 tw:to-slate-950/15" />

            <div className="tw:relative tw:z-10 tw:w-full tw:max-w-xl tw:p-5 tw:sm:p-10 tw:md:p-14 tw:xl:max-w-3xl">
              <p data-reveal className="tw:text-xs tw:tracking-[0.22em] tw:text-accent tw:uppercase tw:sm:text-sm tw:sm:tracking-[0.3em]">
                RoyalTech Innovation
              </p>
              <h1
                data-reveal
                data-delay="0.1"
                className="tw:mt-3 tw:text-[1.65rem] tw:leading-[1.12] tw:font-semibold tw:sm:mt-6 tw:sm:text-3xl tw:md:text-4xl tw:xl:text-5xl tw:2xl:text-6xl"
              >
                Build Your <span className="tw:text-accent">Digital Future</span> with Custom Software &amp; IT Solutions
              </h1>
              <p data-reveal data-delay="0.2" className="tw:mt-4 tw:max-w-xl tw:text-sm tw:leading-relaxed tw:text-white/90 tw:sm:mt-8 tw:sm:text-lg tw:md:text-xl">
                RoyalTech Innovation helps businesses grow through custom website development, mobile applications,
                software solutions, UI/UX design, digital marketing and IT consulting.
              </p>
              <div data-reveal data-delay="0.3" className="tw:mt-5 tw:flex tw:flex-wrap tw:gap-3 tw:sm:mt-10 tw:sm:gap-4">
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
          <div className="page-wrap tw:grid tw:items-stretch tw:gap-4 tw:md:gap-6 tw:lg:grid-cols-2">
            <div data-reveal className="glass tw:flex tw:flex-col tw:justify-center tw:rounded-[1.4rem] tw:p-5 tw:sm:rounded-[2rem] tw:sm:p-10 tw:md:p-14">
              <p className="tw:text-sm tw:tracking-[0.3em] tw:text-accent tw:uppercase">About Us</p>
              <h2 className="tw:mt-4 tw:text-2xl tw:leading-[1.12] tw:font-semibold tw:sm:mt-5 tw:sm:text-3xl tw:md:text-4xl tw:xl:text-5xl">
                Technology That Moves Your Business Forward
              </h2>
              <p className="tw:mt-5 tw:text-lg tw:font-medium tw:text-accent tw:md:text-xl">Your partner in digital transformation.</p>
              <p className="tw:mt-7 tw:text-base tw:leading-relaxed tw:text-white/90 tw:md:text-lg">
                RoyalTech Innovation is an emerging IT solutions company helping businesses transform, grow, and succeed.
                From websites and custom software to mobile apps, digital marketing, design, and IT consulting, we deliver
                practical, reliable, and scalable solutions that startups, small businesses, and established organisations
                can count on.
              </p>
              <p className="tw:mt-5 tw:text-base tw:leading-relaxed tw:text-white/90 tw:md:text-lg">
                We focus on clear outcomes: a stronger digital presence, smoother operations, and technology your team can
                rely on every day.
              </p>

              <p className="tw:mt-10 tw:text-xs tw:tracking-[0.3em] tw:text-accent tw:uppercase">Our Approach</p>
              <ol className="tw:list-none tw:mt-5 tw:grid tw:grid-cols-2 tw:gap-3 tw:sm:grid-cols-5">
                {["Discover", "Plan", "Build", "Test", "Launch"].map((step, i) => (
                  <li key={step} className="tw:rounded-2xl tw:border tw:border-white/15 tw:bg-white/5 tw:p-4">
                    <span className="tw:block tw:text-xs tw:tracking-[0.2em] tw:text-accent">0{i + 1}</span>
                    <span className="tw:mt-2 tw:block tw:text-base tw:font-semibold tw:text-white tw:md:text-lg">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="tw:mt-6 tw:text-sm tw:leading-relaxed tw:text-white/85 tw:md:text-base">
                Every engagement follows this simple path so startups, SMEs, and established organisations get dependable
                delivery without unnecessary complexity.
              </p>
            </div>

            {/* The panel uses the image's own proportions (1536:1820), so the full picture shows */}
            <div data-reveal data-delay="0.15" className="glass tw:relative tw:aspect-[4/5] tw:max-h-[70vh] tw:w-full tw:rounded-[1.4rem] tw:sm:aspect-[1536/1820] tw:sm:max-h-none tw:sm:rounded-[2rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/home/about-edited.jpg"
                alt="RoyalTech Innovation office entrance with the logo on the glass door"
                loading="lazy"
                draggable={false}
                className="tw:absolute tw:inset-0 tw:h-full tw:w-full tw:rounded-[2rem] tw:object-contain"
              />
            </div>
          </div>
        </section>

        {/* WHAT WE DO: placed after About Us, image on the left and copy on the right */}
        <section id="what-we-do-copy" className="section-y">
          <div className="page-wrap tw:grid tw:items-stretch tw:gap-4 tw:md:gap-6 tw:lg:grid-cols-2">
            <div data-reveal className="glass tw:relative tw:aspect-[5/4] tw:w-full tw:rounded-[1.4rem] tw:sm:aspect-square tw:sm:rounded-[2rem] tw:lg:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/home/what-we-do-tiles.jpg"
                alt="Wooden Scrabble tiles on a white surface spelling WHAT YOU DO MATTERS"
                loading="lazy"
                draggable={false}
                className="tw:absolute tw:inset-0 tw:h-full tw:w-full tw:rounded-[2rem] tw:object-cover"
              />
            </div>

            <div data-reveal data-delay="0.15" className="glass tw:flex tw:flex-col tw:justify-center tw:rounded-[1.4rem] tw:p-5 tw:sm:rounded-[2rem] tw:sm:p-10 tw:md:p-14 tw:lg:order-2">
              <p className="tw:text-sm tw:tracking-[0.3em] tw:text-accent tw:uppercase">What We Do</p>
              <h2 className="tw:mt-4 tw:text-2xl tw:leading-[1.12] tw:font-semibold tw:sm:mt-5 tw:sm:text-3xl tw:md:text-4xl tw:xl:text-5xl">
                Where continuous innovation meets operational excellence
              </h2>
              <p className="tw:mt-7 tw:text-base tw:leading-relaxed tw:text-white/90 tw:md:text-lg">
                RoyalTech Innovation helps businesses transform, grow, and succeed with practical technology. We design,
                build, and support digital solutions that fit how you work and scale as you grow.
              </p>
              <p className="tw:mt-5 tw:text-base tw:leading-relaxed tw:text-white/90 tw:md:text-lg">
                From websites and custom software to mobile apps, digital marketing, UI/UX design, and IT consulting, we
                focus on clear outcomes: a stronger digital presence, smoother operations, and technology your team can
                rely on every day.
              </p>
              <p className="tw:mt-5 tw:text-base tw:leading-relaxed tw:text-white/90 tw:md:text-lg">
                Every engagement follows a simple path: discover, plan, build, test, and launch, so startups, SMEs, and
                established organisations get dependable delivery without unnecessary complexity.
              </p>
            </div>
          </div>
        </section>

        {/* OUR DEVELOPMENT PROCESS: five steps shown in one row on desktop */}
        <section id="process" className="section-y">
          <div data-reveal className="page-wrap">
            <p className="tw:text-center tw:text-sm tw:tracking-[0.3em] tw:text-accent tw:uppercase">Our Development Process</p>
            {/* Each card holds its image on top and its step text below */}
            <ol className="tw:list-none tw:mt-6 tw:grid tw:grid-cols-1 tw:gap-3 tw:sm:mt-8 tw:sm:grid-cols-2 tw:sm:gap-4 tw:xl:grid-cols-5">
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
                <li key={step.title} className="glass tw:flex tw:flex-col tw:overflow-hidden tw:rounded-[1.4rem] tw:sm:rounded-[2rem]">
                  <div className="tw:relative tw:aspect-[4/3] tw:w-full tw:overflow-hidden tw:border-b tw:border-white/10 tw:bg-white/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={step.src}
                      alt={step.alt}
                      loading="lazy"
                      draggable={false}
                      className="tw:absolute tw:inset-0 tw:h-full tw:w-full tw:object-cover"
                    />
                  </div>
                  <div className="tw:flex tw:flex-1 tw:flex-col tw:p-5 tw:md:p-7">
                    <span className="tw:text-sm tw:tracking-[0.2em] tw:text-accent">0{i + 1}</span>
                    <h3 className="tw:mt-4 tw:text-xl tw:font-semibold tw:text-white tw:md:text-2xl">{step.title}</h3>
                    <p className="tw:mt-3 tw:text-sm tw:leading-relaxed tw:text-white/85 tw:md:text-base">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section-y">
          <div className="page-wrap">
            <p data-reveal className="tw:text-xs tw:tracking-[0.3em] tw:text-accent tw:uppercase">
              Services
            </p>
            <h2 data-reveal data-delay="0.1" className="tw:mt-3 tw:text-2xl tw:font-semibold tw:sm:mt-4 tw:sm:text-3xl tw:md:text-5xl">
              Our Services
            </h2>
            <div data-stagger className="tw:mt-8 tw:grid tw:gap-3 tw:sm:mt-12 tw:sm:grid-cols-2 tw:sm:gap-4 tw:xl:grid-cols-3">
              {services.map((service) => (
                <div key={service.title}>
                  <div className="glass tw:relative tw:flex tw:h-full tw:flex-col tw:overflow-hidden tw:rounded-2xl tw:p-5 tw:sm:rounded-3xl tw:sm:p-6">
                    {service.image && (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={service.image}
                          alt=""
                          loading="lazy"
                          draggable={false}
                          className="tw:pointer-events-none tw:absolute tw:inset-y-0 tw:right-0 tw:h-full tw:w-[60%] tw:object-cover tw:object-right tw:[mask-image:linear-gradient(to_right,transparent,#000_35%)] tw:[-webkit-mask-image:linear-gradient(to_right,transparent,#000_35%)]"
                        />
                        <div
                          aria-hidden="true"
                          className="tw:pointer-events-none tw:absolute tw:inset-0 tw:bg-gradient-to-r tw:from-slate-950 tw:via-slate-950/80 tw:to-slate-950/15"
                        />
                      </>
                    )}
                    <div className="tw:relative tw:z-10 tw:flex tw:h-full tw:flex-col tw:gap-3 tw:md:max-w-[60%]">
                      <ServiceIcon name={service.icon} />
                      <h3 className="tw:text-lg tw:font-semibold tw:md:text-xl">{service.title}</h3>
                      <p className="tw:text-sm tw:leading-relaxed tw:text-white/85">{service.text}</p>
                      <div className="tw:mt-auto tw:pt-2">
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
              <p className="tw:text-xs tw:tracking-[0.3em] tw:text-accent tw:uppercase">Why Choose Us</p>
              <h2 className="tw:mt-3 tw:text-2xl tw:font-semibold tw:sm:mt-4 tw:sm:text-3xl tw:md:text-5xl">RoyalTech Innovation</h2>
              <p className="tw:mt-5 tw:max-w-3xl tw:text-base tw:leading-relaxed tw:text-white/85 tw:md:text-lg">
                helps startups, SMEs, and growing organisations move forward with practical technology, clear delivery,
                and a partner you can count on.
              </p>
            </div>

            <div data-stagger className="tw:mt-8 tw:grid tw:gap-3 tw:sm:mt-12 tw:sm:grid-cols-2 tw:sm:gap-6">
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
                <div key={item.title} className="glass tw:flex tw:flex-col tw:gap-3 tw:rounded-2xl tw:p-5 tw:sm:gap-4 tw:sm:rounded-3xl tw:sm:p-8 tw:md:p-10">
                  <span className="tw:text-xs tw:tracking-[0.3em] tw:text-accent">0{i + 1}</span>
                  <h3 className="tw:text-xl tw:font-semibold tw:sm:text-2xl tw:md:text-3xl">{item.title}</h3>
                  <p className="tw:text-base tw:font-medium tw:text-accent tw:md:text-lg">{item.subtitle}</p>
                  <p className="tw:text-base tw:leading-relaxed tw:text-white/85 tw:md:text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ: accordion on the left, picture space on the right */}
        <section id="faq" className="section-y">
          <div className="page-wrap">
            <div data-reveal>
              <p className="tw:text-xs tw:tracking-[0.3em] tw:text-accent tw:uppercase">FAQ</p>
              <h2 className="tw:mt-3 tw:text-2xl tw:font-semibold tw:sm:mt-4 tw:sm:text-3xl tw:md:text-5xl">Frequently Asked Questions</h2>
              <p className="tw:mt-4 tw:text-lg tw:font-medium tw:text-accent">Innovate. Integrate. Elevate.</p>
              <p className="tw:mt-4 tw:max-w-3xl tw:text-base tw:leading-relaxed tw:text-white/85 tw:md:text-lg">
                Everything you need to know about working with RoyalTech Innovation, from your first enquiry to long-term
                support.
              </p>
            </div>

            <div className="tw:mt-8 tw:grid tw:items-stretch tw:gap-4 tw:sm:mt-12 tw:sm:gap-6 tw:lg:grid-cols-[1fr_1.25fr]">
              <div data-stagger className="tw:flex tw:flex-col tw:gap-4">
                {faqs.map((faq, i) => (
                  <details key={faq.question} className="glass group tw:rounded-2xl tw:p-4 tw:sm:p-6 tw:md:p-7">
                    <summary className="tw:flex tw:cursor-pointer tw:list-none tw:items-center tw:justify-between tw:gap-4 tw:text-base tw:font-semibold tw:md:text-lg tw:[&::-webkit-details-marker]:hidden">
                      <span>
                        {i + 1}. {faq.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className="tw:text-2xl tw:leading-none tw:text-accent tw:transition-transform tw:duration-300 tw:group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    {faq.answer && (
                      <p className="tw:mt-4 tw:text-sm tw:leading-relaxed tw:text-white/85 tw:md:text-base">{faq.answer}</p>
                    )}
                  </details>
                ))}
              </div>

              {/* Picture sits on the right with no panel behind it. It fills the height of the question column. */}
              <div data-reveal data-delay="0.15" className="tw:relative tw:min-h-[220px] tw:overflow-hidden tw:sm:min-h-[360px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://res.cloudinary.com/dwnnakrrh/image/upload/v1795681192/FAQ3_2_s4amwg.png"
                  alt="Frequently asked questions about RoyalTech Innovation"
                  loading="lazy"
                  draggable={false}
                  className="tw:absolute tw:inset-0 tw:h-full tw:w-full tw:scale-110 tw:object-cover"
                />
              </div>
            </div>

            <div data-reveal className="glass tw:mt-8 tw:flex tw:flex-col tw:items-start tw:justify-between tw:gap-4 tw:rounded-2xl tw:p-5 tw:sm:mt-12 tw:sm:gap-6 tw:sm:rounded-3xl tw:sm:p-8 tw:md:flex-row tw:md:items-center tw:md:p-10">
              <div>
                <p className="tw:text-xl tw:font-semibold tw:md:text-2xl">Still have a question?</p>
                <p className="tw:mt-2 tw:text-base tw:text-white/85 tw:md:text-lg">
                  Tell us about your project and we will help you find the right solution.
                </p>
              </div>
              <a href="#contact" className="pill pill-accent tw:shrink-0">
                Contact us
              </a>
            </div>
          </div>
        </section>

        {/* REVIEWS: cards slide to the right in a loop; hover pauses */}
        <section id="reviews" className="section-y">
          <div className="page-wrap">
            <p className="tw:text-xs tw:tracking-[0.3em] tw:text-accent tw:uppercase">Reviews</p>
            <h2 className="tw:mt-3 tw:text-2xl tw:font-semibold tw:sm:mt-4 tw:sm:text-3xl tw:md:text-5xl">What Our Clients Say</h2>
          </div>

          <div className="reviews-strip tw:mt-8 tw:overflow-hidden tw:sm:mt-12 tw:[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] tw:[-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="reviews-track tw:flex tw:w-max tw:gap-6 tw:px-3">
              {reviews.map((review) => (
                <ReviewCard key={`a-${review.name}`} review={review} />
              ))}
              {reviews.map((review) => (
                <div key={`b-${review.name}`} aria-hidden="true" className="tw:contents">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VISIT: enquiry form on the left, office map on the right */}
        <section id="visit" className="section-y">
          <div className="page-wrap tw:grid tw:items-stretch tw:gap-4 tw:md:gap-6 tw:lg:grid-cols-2">
            <div data-reveal>
              <VisitForm email={email} phone={phone} />
            </div>
            <div data-reveal data-delay="0.15" className="glass tw:min-h-[260px] tw:overflow-hidden tw:rounded-[1.4rem] tw:sm:min-h-[420px] tw:sm:rounded-[2rem]">
              <iframe
                title="Map showing CP67 Mall, Sector 67, Mohali"
                src="https://maps.google.com/maps?q=CP67%20Mall%2C%20Sector%2067%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Mohali%2C%20Punjab&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="tw:h-full tw:min-h-[260px] tw:w-full tw:border-0 tw:sm:min-h-[420px]"
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section-y tw:md:flex tw:md:min-h-[70vh] tw:md:items-center">
          <div className="page-wrap">
          <div data-reveal className="glass tw:rounded-[1.4rem] tw:p-6 tw:text-center tw:sm:rounded-[2rem] tw:sm:p-10 tw:md:p-14">
            <p className="tw:text-xs tw:tracking-[0.3em] tw:text-accent tw:uppercase">Get in touch</p>
            <h2 className="tw:mt-3 tw:text-2xl tw:font-semibold tw:sm:mt-4 tw:sm:text-3xl tw:md:text-5xl">Let’s talk about your project</h2>
            <div className="tw:mt-6 tw:flex tw:flex-wrap tw:justify-center tw:gap-3 tw:sm:mt-10 tw:sm:gap-4">
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

        <footer className="tw:pb-6 tw:sm:pb-10">
          <div className="page-wrap">
          <div className="glass tw:flex tw:flex-col tw:gap-3 tw:rounded-2xl tw:p-5 tw:text-sm tw:text-white/70 tw:sm:flex-row tw:sm:items-center tw:sm:justify-between tw:sm:gap-4 tw:sm:rounded-3xl tw:sm:p-8">
            <p>© 2026 RoyalTech Innovation. All rights reserved.</p>
            <a href="#hero" className="tw:tracking-[0.2em] tw:text-white/70 tw:uppercase tw:transition-colors tw:hover:text-accent">
              Back to top ↑
            </a>
          </div>
          </div>
        </footer>
      </main>
    </>
  );
}
