import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import GalleryPageContent from "@/components/GalleryPageContent";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/home-theme.css";
import "@/styles/gallery-font.css";

/* Same typeface the home page uses (Inter), so the gallery matches it. */
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Gallery | Team, Office & Culture Moments",
  description:
    "Explore the RoyalTech Innovation gallery—team moments, office life, events, projects, and culture that inspire how we build.",
  alternates: { canonical: "/gallery" },
  keywords: [
    "RoyalTech Innovation gallery",
    "IT company office photos",
    "team culture",
    "software company gallery",
  ],
};

export default function GalleryPage() {
  return (
    <>
      {/* Same home-theme wrapper as the home page, so the header and footer use the home colours. */}
      <div className="home-theme">
        <Header />
      </div>
      <main className={`gallery-inter ${inter.variable}`}>
        <GalleryPageContent />
      </main>
      <div className="home-theme">
        <Footer />
      </div>
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
