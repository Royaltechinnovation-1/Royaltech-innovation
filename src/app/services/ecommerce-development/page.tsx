import "@/styles/home-theme.css";
import "@/components/ecommerce-development/ecommerce-development.css";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import EcommerceDevelopmentPage from "@/components/ecommerce-development/EcommerceDevelopmentPage";
import { coreServices, faqs } from "@/components/ecommerce-development/data";
import type { Metadata } from "next";

const canonical = "https://www.royaltechinnovation.co.in/services/ecommerce-development";
const pageTitle = "E-commerce Website Development Company | RoyalTech Innovation";
const pageDescription =
  "RoyalTech Innovation develops custom ecommerce websites, online stores, multi-vendor marketplaces, B2B & B2C platforms, shopping carts, and payment integrations.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical },
  robots: { index: true, follow: true },
  keywords: [
    "Ecommerce Development Company",
    "Ecommerce Website Development",
    "E-commerce Development Services",
    "Ecommerce Website Development Company",
    "Ecommerce Solutions",
    "Custom Ecommerce Development",
    "Online Store Development",
    "Ecommerce Web Development",
    "Online Shopping Website Development",
    "Ecommerce Application Development",
    "Ecommerce Platform Development",
    "Ecommerce Software Development",
    "Multi-Vendor Marketplace Development",
    "Marketplace Website Development",
    "Seller Dashboard Development",
    "B2B Ecommerce Development",
    "B2C Ecommerce Development",
    "Wholesale Ecommerce Development",
    "Shopping Cart Development",
    "Custom Shopping Cart Development",
    "Ecommerce Checkout Solutions",
    "Payment Gateway Integration",
    "Ecommerce Payment Integration",
    "Payment API Integration",
    "Shopify Development",
    "Shopify Store Development",
    "WooCommerce Development",
    "WordPress Ecommerce Development",
    "Ecommerce CRM Integration",
    "Ecommerce ERP Integration",
    "Ecommerce Inventory Integration",
    "Ecommerce Order Management",
    "Responsive Ecommerce Website",
    "Mobile Ecommerce Development",
    "Ecommerce Development Company in Mohali",
    "Ecommerce Website Development Company in Mohali",
    "Ecommerce Development Services in Chandigarh",
    "Online Store Development Company in Mohali",
    "Marketplace Development Company in Chandigarh",
    "Shopify Development Company in Mohali",
    "WooCommerce Development Company in Chandigarh",
    "Ecommerce Development Company in Punjab",
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
        alt: "RoyalTech Innovation ecommerce website development and online store services",
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
          { "@type": "ListItem", position: 3, name: "E-commerce Development", item: canonical },
        ],
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "E-commerce Development Services",
        serviceType: "Ecommerce Website Development and Digital Commerce Solutions",
        description: pageDescription,
        provider: { "@id": "https://www.royaltechinnovation.co.in/#organization" },
        areaServed: ["Mohali", "Chandigarh", "Punjab", "India"],
        url: canonical,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Core E-commerce Development Services",
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

export default function EcommerceDevelopmentServicePage() {
  return (
    <>
      <StructuredData />
      <div className="home-theme"><Header /></div>
      <main>
        <EcommerceDevelopmentPage />
      </main>
      <div className="home-theme"><Footer /></div>
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
