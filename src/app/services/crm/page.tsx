
import "@/components/crm/CrmHero.css";
import "@/components/crm/powerful-features.css";
import "@/components/crm/WhyChoose.css";
import "@/components/crm/crm-faq-section.css";
import BackToTop from "@/components/BackToTop";
// import CrmFaq from "@/components/crm/CrmFaq";
import CrmHero from "@/components/crm/CrmHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM Software Development Company in India | RoyalTech",

  description:
    "RoyalTech Innovation offers custom CRM software development, lead management, sales automation, customer tracking and CRM solutions for growing businesses.",

  alternates: {
    canonical: "https://royaltechinnovation.co.in/services/crm",
  },

  robots: {
    index: true,
    follow: true,
  },

  keywords: [
    "CRM Software Development",
    "RoyalTech Innovation services",
    "Customer Relationship Management",
    "Custom CRM Software",
    "Lead Management System",
    "Sales Pipeline Management",
    "CRM Automation",
    "Customer Management Software",
    "CRM Solutions India",
    "ERP CRM development",
    "software solutions",
  ],

  openGraph: {
    title: "IT Services & Software Solutions | RoyalTech Innovation",
    description:
      "Explore website development, custom software, mobile app development, digital marketing, UI/UX design, and IT consulting services by RoyalTech Innovation.",
    url: "https://royaltechinnovation.co.in/services",
    siteName: "RoyalTech Innovation",
    type: "website",
  },
};

export default function CrmServicesPage() {
  return (
    <>
      <Header />
      <main>
        <CrmHero/>
        {/* <CrmFaq /> */}
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />

    </>
  );
}
