import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeHero from "@/components/crm/HomeHero";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import "@/styles/crm-landing.css";

export const metadata: Metadata = {
  title: "CRM Software & Lead Management | RoyalTech Innovation",
  description:
    "RoyalTech Innovation builds custom CRM software with lead management, sales pipeline tracking and automation to help businesses grow customer relationships.",
  keywords: [
    "RoyalTech Innovation",
    "CRM software development",
    "custom CRM software",
    "CRM software for small businesses",
    "lead management software",
    "sales pipeline management",
    "customer relationship management software",
    "CRM automation",
    "business CRM solutions",
  ],
  alternates: {
    canonical: "https://royaltechinnovation.co.in/crm",
  },
  openGraph: {
    title: "CRM Software & Lead Management | RoyalTech Innovation",
    description:
      "Manage leads, automate sales and track your pipeline with custom CRM software from RoyalTech Innovation.",
    url: "https://royaltechinnovation.co.in/crm",
    siteName: "RoyalTech Innovation",
    type: "website",
  },
};

export default function CrmPage() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
