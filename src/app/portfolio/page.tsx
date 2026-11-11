import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PortfolioPageContent from "@/components/PortfolioPageContent";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Web, App Design, Branding & CRM",
  description:
    "See RoyalTech Innovation’s portfolio: SEO website development, mobile app UI/UX, logo branding, and custom CRM systems for growing businesses.",
  alternates: { canonical: "/portfolio" },
  keywords: [
    "RoyalTech Innovation portfolio",
    "website development portfolio",
    "app design company",
    "logo design branding",
    "CRM development",
    "SEO website development",
    "UI UX mobile apps",
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <PortfolioPageContent />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
