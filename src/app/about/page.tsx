import AboutPageContent from "@/components/AboutPageContent";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/home-theme.css";
import "@/styles/about-theme.css";
import "@/styles/about-hero.css";
import "@/styles/about-font.css";

/* Same typeface the home page uses (Inter), so the about page matches it. */
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  // title: "About Us | IT Company in Mohali",
  title: "RoyalTech Innovation | About Our IT Company & Technology Experts",
  description:
    // "Meet RoyalTech Innovation — an IT solutions company and digital transformation partner in Mohali delivering practical technology for startups, SMEs, and enterprises.",
    "RoyalTech Innovation is a forward-thinking IT solutions and digital services company. We help businesses scale through custom software development, web applications, mobile apps, and strategic IT consulting.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About RoyalTech Innovation",
    description:
      "Our mission, vision, and team behind practical technology for growing businesses.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="home-theme">
        <Header />
      </div>
      <main className={`about-theme about-inter ${inter.variable}`}>
        <AboutPageContent />
      </main>
      <div className="home-theme">
        <Footer />
      </div>
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
