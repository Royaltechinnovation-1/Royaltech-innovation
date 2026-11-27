
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesShowcase from "@/components/ServicesShowcase";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/home-theme.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "IT Services & Software Solutions | RoyalTech Innovation",

  description:
    "Explore RoyalTech Innovation's IT services, including website development, custom software, mobile apps, digital marketing, UI/UX design, and IT consulting.",

  alternates: {
    canonical: "https://royaltechinnovation.co.in/services",
  },

  robots: {
    index: true,
    follow: true,
  },

  keywords: [
    "IT services",
    "RoyalTech Innovation services",
    "website development services",
    "custom software development",
    "mobile app development",
    "digital marketing services",
    "SEO services",
    "UI UX design services",
    "IT consulting services",
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

export default function ServicesPage() {
  return (
    <>
      <div className="home-theme">
        <Header />
      </div>
      <main>
        <ServicesShowcase rootClass={inter.variable} />
      </main>
      <div className="home-theme">
        <Footer />
      </div>
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
