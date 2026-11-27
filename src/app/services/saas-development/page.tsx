import "@/styles/home-theme.css";
import "@/components/saas-development/saas-development.css";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import SaasDevelopmentPage from "@/components/saas-development/SaasDevelopmentPage";
import { coreServices, faqs } from "@/components/saas-development/data";
import type { Metadata } from "next";

const canonical = "https://www.royaltechinnovation.co.in/services/saas-development";
const pageTitle = "SaaS Development Company | Custom SaaS Platforms – RoyalTech";
const pageDescription =
  "RoyalTech Innovation develops custom SaaS platforms, software products, subscription management systems, multi-tenant applications, and SaaS integrations.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical },
  robots: { index: true, follow: true },
  keywords: [
    "SaaS Development Company",
    "Custom SaaS Development",
    "SaaS Product Development",
    "SaaS Platform Development",
    "Subscription Management Software",
    "Subscription Billing Development",
    "Multi-Tenant Applications",
    "Multi-Tenant SaaS Architecture",
    "SaaS Integration Services",
    "SaaS API Integration",
    "SaaS Application Development",
    "Cloud-Based Software Development",
    "SaaS MVP Development",
    "SaaS Dashboard Development",
    "SaaS Product Architecture",
    "Customer Portal Development",
    "SaaS Development Company in Mohali",
    "SaaS Development Services in Chandigarh",
    "Custom SaaS Solutions in Punjab",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: canonical,
    siteName: "RoyalTech Innovation",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/services-hero-showcase.png",
        width: 1200,
        height: 630,
        alt: "RoyalTech Innovation SaaS platform development services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/services-hero-showcase.png"],
  },
};

function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.royaltechinnovation.co.in/#organization",
        name: "RoyalTech Innovation",
        url: "https://www.royaltechinnovation.co.in/",
        email: "info@royaltechinnovation.co.in",
        telephone: "+91 86790 16505",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Gate No. 5, Imperial Tower, Floor No. 10, International Airport Road, Sector 67",
          addressLocality: "Mohali",
          addressRegion: "Punjab",
          postalCode: "160062",
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { "@id": "https://www.royaltechinnovation.co.in/#website" },
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.royaltechinnovation.co.in/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.royaltechinnovation.co.in/services" },
          { "@type": "ListItem", position: 3, name: "SaaS Development", item: canonical },
        ],
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "SaaS Platform Development",
        serviceType: "Custom SaaS Development and SaaS Product Development",
        description: pageDescription,
        provider: { "@id": "https://www.royaltechinnovation.co.in/#organization" },
        areaServed: ["Mohali", "Chandigarh", "Punjab", "India"],
        url: canonical,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Core SaaS Development Services",
          itemListElement: coreServices.map((service) => ({
            "@type": "OfferCatalog",
            name: service.category,
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.title,
                  description: service.description,
                },
              },
            ],
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}

export default function SaasDevelopmentServicePage() {
  return (
    <>
      <StructuredData />
      <div className="home-theme"><Header /></div>
      <main>
        <SaasDevelopmentPage />
      </main>
      <div className="home-theme"><Footer /></div>
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
