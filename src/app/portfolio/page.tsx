import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import PortfolioLanding from "@/components/portfolio-landing/PortfolioLanding";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio & Case Studies | RoyalTech Innovation",
  description:
    "Explore RoyalTech Innovation's portfolio featuring custom web development, mobile apps, CRM systems, and UI/UX design projects. See our work and contact us today!",
  alternates: {
    canonical: "https://royaltechinnovation.co.in/portfolio",
  },
  keywords: [
    "RoyalTech Innovation portfolio",
    "website development portfolio",
    "app design company",
    "logo design branding",
    "CRM development",
    "SEO website development",
    "UI UX mobile apps",
    "case studies",
  ],
  openGraph: {
    title: "Our Portfolio & Case Studies | RoyalTech Innovation",
    description:
      "Explore our web development, mobile app, CRM, and UI/UX design portfolio.",
    url: "https://royaltechinnovation.co.in/portfolio",
    siteName: "RoyalTech Innovation",
    images: [
      {
        url: "https://royaltechinnovation.co.in/pfo-hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "RoyalTech Innovation portfolio showcase",
      },
    ],
    type: "website",
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Our Portfolio & Web Development Case Studies",
  description:
    "Explore RoyalTech Innovation's web development, mobile app, CRM, branding and UI/UX projects.",
  url: "https://royaltechinnovation.co.in/portfolio",
  isPartOf: {
    "@type": "WebSite",
    name: "RoyalTech Innovation",
    url: "https://royaltechinnovation.co.in",
  },
  about: {
    "@type": "Organization",
    name: "RoyalTech Innovation",
    url: "https://royaltechinnovation.co.in",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main>
        <PortfolioLanding />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
