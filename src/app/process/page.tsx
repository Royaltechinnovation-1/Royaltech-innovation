import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProcessPageContent from "@/components/ProcessPageContent";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/home-theme.css";
import "@/styles/process-font.css";

/* Same typeface the home page uses (Inter), so the process page matches it. */
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Our Development Process & Tech Methodology | RoyalTech Innovation",

  description:
    "Learn how RoyalTech Innovation builds custom software. Explore our 4-step agile development process from discovery and UI/UX design to deployment and support.",

  alternates: {
    canonical: "https://royaltechinnovation.co.in/process",
  },

  openGraph: {
    title: "Our Development Process & Tech Methodology | RoyalTech Innovation",
    description:
      "Discover our 4-step custom software development process, from discovery and UI/UX design to development, testing and deployment.",
    url: "https://royaltechinnovation.co.in/process",
    siteName: "RoyalTech Innovation",
    type: "website",
    images: [
      {
        url: "https://royaltechinnovation.co.in/op-hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "RoyalTech Innovation software development process",
      },
    ],
  },
};

export default function ProcessPage() {
  return (
    <>
      {/* Same home-theme wrapper as the home page, so the header and footer use the home colours. */}
      <div className="home-theme">
        <Header />
      </div>
      <main className={`process-inter ${inter.variable}`}>
        <ProcessPageContent />
      </main>
      <div className="home-theme">
        <Footer />
      </div>
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
