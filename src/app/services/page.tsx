import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesPageContent from "@/components/ServicesPageContent";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "IT Services | Website, Software, Mobile Apps, SEO & Consulting",
  description:
    "Explore RoyalTech Innovation services: SEO-ready website development, custom software & ERP/CRM, mobile app development, digital marketing & SEO, UI/UX & graphic design, and IT consulting for businesses in India, the UK, and the UAE.",
  alternates: { canonical: "/services" },
  keywords: [
    "RoyalTech Innovation services",
    "website development company Mohali",
    "software development company",
    "mobile app development",
    "SEO company",
    "digital marketing services",
    "UI UX design services",
    "IT consulting services",
    "ERP CRM development",
    "IT solutions company",
  ],
  openGraph: {
    title: "RoyalTech Innovation IT Services",
    description:
      "Website development, software, apps, SEO, design, and IT consulting.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesPageContent />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
