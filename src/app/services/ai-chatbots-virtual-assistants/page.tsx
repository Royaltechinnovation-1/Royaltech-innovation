import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AiChatbotPage from "@/components/ai-chatbot/AiChatbotPage";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  CONTACT,
  FAQS,
  PAGE_URL,
  SEO_DESCRIPTION,
  SEO_H1,
  SEO_KEYWORDS,
  SEO_TITLE,
  SERVICES,
  SITE_URL,
} from "@/data/ai-chatbot-page";
import "@/styles/home-theme.css";
import "@/styles/ai-chatbot.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

// No chatbot-specific artwork exists in /public yet; this reuses the software development image.
const OG_IMAGE = "/home-services/Software%20Development.jpg";
const OG_ALT = "RoyalTech Innovation AI chatbots and virtual assistants: website, WhatsApp, customer support, voice and conversational AI";

export const metadata: Metadata = {
  // `absolute` keeps the exact recommended title instead of adding the site-wide suffix.
  title: { absolute: SEO_TITLE },
  description: SEO_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: PAGE_URL,
    siteName: "RoyalTech Innovation",
    type: "website",
    locale: "en_IN",
    images: [{ url: OG_IMAGE, alt: OG_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: OG_ALT }],
  },
};

/* The homepage already defines the full Organization node; reference it by @id here. */
const ORGANIZATION_ID = "https://royaltechinnovation.co.in/#organization";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "RoyalTech Innovation",
      url: SITE_URL,
      email: CONTACT.email,
      telephone: "+91-86790-16505",
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: SEO_TITLE,
      headline: SEO_H1,
      description: SEO_DESCRIPTION,
      inLanguage: "en-IN",
      isPartOf: { "@id": "https://royaltechinnovation.co.in/#website" },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      about: { "@id": `${PAGE_URL}#service` },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "AI Chatbot and Virtual Assistant Development Services",
      serviceType: "AI chatbot development",
      description: SEO_DESCRIPTION,
      url: PAGE_URL,
      provider: { "@id": ORGANIZATION_ID },
      areaServed: [
        { "@type": "City", name: "Mohali" },
        { "@type": "City", name: "Chandigarh" },
        { "@type": "AdministrativeArea", name: "Punjab" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI chatbot and virtual assistant services",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, url: `${PAGE_URL}#${s.id}` },
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "AI Chatbots & Virtual Assistants", item: PAGE_URL },
      ],
    },
    {
      // The same questions and answers are visible in the FAQ accordion on the page.
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function AiChatbotsVirtualAssistantsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="home-theme">
        <Header />
      </div>
      <main>
        <AiChatbotPage rootClass={`${inter.variable} ${jakarta.variable}`} />
      </main>
      <div className="home-theme">
        <Footer />
      </div>
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
