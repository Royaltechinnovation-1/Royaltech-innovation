import "@/styles/home-theme.css";
import "@/components/erp-solutions/erp-solutions.css";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import ErpSolutionsPage from "@/components/erp-solutions/ErpSolutionsPage";
import { coreServices, faqs } from "@/components/erp-solutions/data";
import type { Metadata } from "next";

const canonical = "https://www.royaltechinnovation.co.in/services/erp-solutions";
const pageTitle = "ERP Software Development Company | Custom ERP Solutions – RoyalTech";
const pageDescription =
  "RoyalTech Innovation develops custom ERP software, inventory management, HR systems, finance solutions, and supply chain management applications for businesses.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical },
  robots: { index: true, follow: true },
  keywords: [
    "ERP Development Company",
    "ERP Software Development",
    "ERP Software Development Company",
    "Custom ERP Development",
    "ERP Development Services",
    "ERP Software Solutions",
    "Custom ERP Software Development",
    "Enterprise Resource Planning Software",
    "ERP Solution Provider",
    "ERP Software Company",
    "Inventory Management Software",
    "Inventory Management System Development",
    "HR Management Software",
    "HR Management System Development",
    "Finance Management Software",
    "Finance Management System Development",
    "Supply Chain Management Software",
    "Supply Chain Management System Development",
    "Procurement Management Software",
    "Business Management Software",
    "ERP Dashboard Development",
    "ERP Integration Services",
    "ERP Workflow Development",
    "ERP Development Company in Mohali",
    "ERP Software Development Company in Mohali",
    "ERP Development Services in Chandigarh",
    "Custom ERP Development in Punjab",
    "ERP Software Development in Punjab",
    "ERP Development Company in India",
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
        alt: "RoyalTech Innovation custom ERP software development and business management solutions",
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
          { "@type": "ListItem", position: 3, name: "ERP Solutions", item: canonical },
        ],
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "ERP Software Development",
        serviceType:
          "Custom ERP Development, Inventory Management, HR Management, Finance Management and Supply Chain Management",
        description: pageDescription,
        provider: { "@id": "https://www.royaltechinnovation.co.in/#organization" },
        areaServed: ["Mohali", "Chandigarh", "Punjab", "India"],
        url: canonical,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Core ERP Solutions",
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

export default function ErpSolutionsServicePage() {
  return (
    <>
      <StructuredData />
      <div className="home-theme"><Header /></div>
      <main><ErpSolutionsPage /></main>
      <div className="home-theme"><Footer /></div>
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
