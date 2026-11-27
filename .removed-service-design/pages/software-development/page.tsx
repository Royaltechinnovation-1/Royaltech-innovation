import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  ServiceHero,
  ServiceMarquee,
  ServiceOverview,
  ServiceFeatures,
  ServiceTypes,
  ServiceTechGrid,
  ServiceProcess,
  ServiceIndustries,
  ServiceFaq,
  ServiceRelated,
  ServiceCtaBand,
} from "@/components/service-detail";
import {
  getServiceBySlug,
  serviceSpecializedMap,
} from "@/data/services-data";
import "@/styles/service-detail.css";
import "@/styles/home-theme.css";
import "@/styles/services-theme.css";

const service = getServiceBySlug("software-development")!;
const specializedTypes = serviceSpecializedMap["software-development"];

export const metadata: Metadata = {
  title: service.metaTitle || "Website Development Company | Responsive & SEO-Friendly Websites | RoyalTech",
  description: service.metaDescription || "Get fast, responsive and SEO-friendly websites from RoyalTech Innovation. Corporate sites, eCommerce, landing pages and CMS development using Next.js and React.",
  alternates: {
    canonical: "https://www.royaltechinnovation.co.in/services/software-development",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Website Development",
    "Website Development Company Mohali",
    "SEO-Friendly Websites",
    "Responsive Web Design",
    "Next.js Development",
    "React Web Development",
    "Corporate Website Design",
    "eCommerce Website Development",
    "Custom Web Development India",
    "RoyalTech Innovation",
  ],
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: "https://www.royaltechinnovation.co.in/services/website-development",
    siteName: "RoyalTech Innovation",
    type: "website",
    images: [
      {
        url: "/home-services/web development.png",
        width: 1200,
        height: 630,
        alt: "RoyalTech Innovation Website Development Services",
      },
    ],
  },
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <div className="home-theme"><Header /></div>
        <main className="service-detail-page">
          {/* 1. Hero Section */}
          <ServiceHero
            slug={service.slug}
            title={service.title}
            tagline={service.tagline}
            heroTitle={service.heroTitle}
            heroHighlight={service.heroHighlight}
            heroText={service.heroText}
            stats={service.stats}
            iconSlug={service.icon}
          />

          {/* 2. Technologies Logo Marquee Ticker */}
          <ServiceMarquee technologies={service.technologies} />

          {/* 3. Overview Section */}
          <ServiceOverview
            serviceTitle={service.title}
            overview={service.overview}
            features={service.features}
          />

          {/* 4. Capabilities / "What's included" Section (Dark Gradient) */}
          <ServiceFeatures
            serviceTitle={service.title}
            features={service.features}
          />

          {/* 5. Specialized Solution / Types Grid */}
          {specializedTypes && (
            <ServiceTypes
              eyebrow={specializedTypes.eyebrow}
              title={specializedTypes.title}
              text={specializedTypes.text}
              items={specializedTypes.items}
            />
          )}

          {/* 6. Tools & Technologies Grid */}
          <ServiceTechGrid
            serviceTitle={service.title}
            technologies={service.technologies}
          />

          {/* 7. Proven Delivery Process Timeline */}
          <ServiceProcess
            serviceTitle={service.title}
            steps={service.process}
          />

          {/* 8. Industries We Serve (with dynamic hover reveal) */}
          <ServiceIndustries
            serviceTitle={service.title}
            industries={service.industries}
          />

          {/* 9. Interactive FAQ Accordion */}
          <ServiceFaq
            serviceTitle={service.title}
            faqs={service.faqs}
          />

          {/* 10. Related Services Grid */}
          <ServiceRelated currentSlug={service.slug} />

          {/* 11. Bottom Conversion CTA Band */}
          <ServiceCtaBand serviceTitle={service.title} />
        </main>
        <div className="home-theme"><Footer /></div>
        <BackToTop />
        <WhatsAppButton />
      </>
      );
}
