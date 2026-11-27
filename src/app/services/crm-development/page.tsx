import "@/styles/home-theme.css";
import "@/components/crm-development/crm-development.css";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import CrmDevelopmentPage from "@/components/crm-development/CrmDevelopmentPage";
import { coreServices, faqs } from "@/components/crm-development/data";
import type { Metadata } from "next";

const canonical = "https://www.royaltechinnovation.co.in/services/crm-development";
const pageTitle = "CRM Development Company | Custom CRM Software Solutions – RoyalTech";
const pageDescription =
  "RoyalTech Innovation develops custom CRM software, sales management systems, lead management solutions, customer management platforms, and CRM integrations for businesses.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical },
  robots: { index: true, follow: true },
  keywords: [
    "CRM Development Company",
    "CRM Software Development",
    "CRM Software Development Company",
    "Custom CRM Development",
    "CRM Development Services",
    "Custom CRM Software Development",
    "CRM Solutions",
    "CRM Application Development",
    "Customer Relationship Management Software",
    "Custom CRM Solutions",
    "CRM Software for Businesses",
    "CRM Web Application Development",
    "Business CRM Software",
    "Sales Management Software",
    "Sales CRM Development",
    "Sales Pipeline Management Software",
    "Lead Management Software",
    "Lead Tracking Software",
    "Lead Management System Development",
    "Lead Capture Software",
    "Lead Qualification Software",
    "Lead Follow-Up Management",
    "Customer Management Software",
    "Customer Database Software",
    "CRM Integration Services",
    "CRM API Integration",
    "Website CRM Integration",
    "CRM Data Synchronization",
    "CRM Dashboard Development",
    "CRM Workflow Automation",
    "CRM Analytics",
    "CRM Software Development Services",
    "CRM Software Development Company in Mohali",
    "CRM Development Company in Mohali",
    "Custom CRM Development in Chandigarh",
    "CRM Development Services in Chandigarh",
    "CRM Software Company in Chandigarh",
    "CRM Development Company in Punjab",
    "Lead Management Software Development in Chandigarh",
    "Sales Management Software Development in Mohali",
    "CRM Integration Services in Chandigarh",
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
        alt: "RoyalTech Innovation custom CRM software development and customer management solutions",
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
          { "@type": "ListItem", position: 3, name: "CRM Development", item: canonical },
        ],
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "CRM Software Development",
        serviceType:
          "Custom CRM Development, Sales Management Systems, Lead Management Systems, Customer Management Systems and CRM Integration",
        description: pageDescription,
        provider: { "@id": "https://www.royaltechinnovation.co.in/#organization" },
        areaServed: ["Mohali", "Chandigarh", "Punjab", "India"],
        url: canonical,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Core CRM Development Services",
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

export default function CrmDevelopmentServicePage() {
  return (
    <>
      <StructuredData />
      <div className="home-theme"><Header /></div>
      <main><CrmDevelopmentPage /></main>
      <div className="home-theme"><Footer /></div>
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
