import "@/styles/home-theme.css";
import "@/components/management-systems/management-systems.css";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import ManagementSystemsPage from "@/components/management-systems/ManagementSystemsPage";
import { coreServices, faqs } from "@/components/management-systems/data";
import type { Metadata } from "next";

const canonical = "https://www.royaltechinnovation.co.in/services/management-systems";
const pageTitle = "Education Software Development | LMS & Management Systems – RoyalTech";
const pageDescription =
  "RoyalTech Innovation develops custom LMS platforms, online learning systems, student management software, online examination systems, and course management applications.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical },
  robots: { index: true, follow: true },
  keywords: [
    "Education Management Software Development",
    "Education Software Development Company",
    "Learning Management System Development",
    "LMS Development Company",
    "Education Management Systems",
    "Custom LMS Development",
    "LMS Software Development",
    "Online Learning Platform Development",
    "Student Management System Development",
    "Online Examination System Development",
    "Course Management System Development",
    "Educational Software Development",
    "E-Learning Software Development",
    "Education Software Development Services",
    "EdTech Software Development",
    "Educational Web Application Development",
    "Education Application Development",
    "Custom Education Software",
    "Education Portal Development",
    "Digital Education Software",
    "Educational Technology Solutions",
    "Academic Management Software",
    "School Management Software",
    "University Management Software",
    "Coaching Institute Management Software",
    "Training Management Software",
    "Learning Portal Development",
    "Educational Dashboard Development",
    "Student Portal Development",
    "Instructor Portal Development",
    "Digital Classroom Software",
    "Online Course Software",
    "Learning Analytics Software",
    "Educational Software Integration",
    "LMS API Integration",
    "Education Workflow Management",
    "Education Software Solutions",
    "Education Software Development Company in Mohali",
    "LMS Development Company in Mohali",
    "LMS Development Services in Chandigarh",
    "Education Software Development in Chandigarh",
    "Student Management Software Development in Mohali",
    "Online Learning Platform Development in Chandigarh",
    "Online Examination Software Development in Mohali",
    "EdTech Software Development Company in Punjab",
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
        alt: "RoyalTech Innovation education software development and LMS platform services",
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
          { "@type": "ListItem", position: 3, name: "Management Systems", item: canonical },
        ],
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "Education Management Systems",
        serviceType: "Education Software Development, LMS Development and Digital Learning Platforms",
        description: pageDescription,
        provider: { "@id": "https://www.royaltechinnovation.co.in/#organization" },
        areaServed: ["Mohali", "Chandigarh", "Punjab", "India"],
        url: canonical,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Core Education Management Systems",
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

export default function ManagementSystemsServicePage() {
  return (
    <>
      <StructuredData />
      <div className="home-theme"><Header /></div>
      <main><ManagementSystemsPage /></main>
      <div className="home-theme"><Footer /></div>
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
