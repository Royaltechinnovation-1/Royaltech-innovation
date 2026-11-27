import "@/styles/home-theme.css";
import "@/components/cloud-devops/cloud-devops.css";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import CloudDevopsPage from "@/components/cloud-devops/CloudDevopsPage";
import { coreServices, faqs } from "@/components/cloud-devops/data";
import type { Metadata } from "next";

const canonical = "https://www.royaltechinnovation.co.in/services/cloud-devops";
const pageTitle = "Cloud & DevOps Services Company | RoyalTech Innovation";
const pageDescription =
  "RoyalTech Innovation offers cloud infrastructure, cloud migration, cloud application development, CI/CD automation, deployment, and server management solutions.";

export const metadata: Metadata = {
  // The root layout adds "| RoyalTech Innovation" through its title template.
  title: "Cloud & DevOps Services Company",
  description: pageDescription,
  alternates: { canonical },
  robots: { index: true, follow: true },
  keywords: [
    "Cloud Computing Services",
    "Cloud & DevOps Services",
    "Cloud Infrastructure Services",
    "DevOps Services",
    "Cloud Infrastructure Management",
    "Cloud Infrastructure Solutions",
    "Cloud Migration Services",
    "Cloud Application Development",
    "Cloud Application Development Services",
    "DevOps Consulting Services",
    "Cloud Deployment Services",
    "Server Management Services",
    "Cloud Computing Solutions",
    "Cloud Infrastructure Company",
    "CI/CD Automation",
    "Cloud Computing Company in Mohali",
    "Cloud Services Company in Chandigarh",
    "Cloud Infrastructure Services in Mohali",
    "DevOps Services in Mohali",
    "DevOps Consulting Company in Chandigarh",
    "Cloud Application Development Company in Mohali",
    "Server Management Services in Chandigarh",
    "Cloud Development Services in Mohali",
    "CI/CD Services in Chandigarh",
    "Cloud Computing Services in Punjab",
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
        alt: "RoyalTech Innovation cloud infrastructure and DevOps services",
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
          { "@type": "ListItem", position: 3, name: "Cloud & DevOps", item: canonical },
        ],
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "Cloud & DevOps Services",
        serviceType: "Cloud Computing and DevOps Services",
        description: pageDescription,
        provider: { "@id": "https://www.royaltechinnovation.co.in/#organization" },
        areaServed: ["Mohali", "Chandigarh", "Punjab", "India"],
        url: canonical,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Core Cloud & DevOps Services",
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

export default function CloudDevopsServicePage() {
  return (
    <>
      <StructuredData />
      <div className="home-theme"><Header /></div>
      <main>
        <CloudDevopsPage />
      </main>
      <div className="home-theme"><Footer /></div>
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
