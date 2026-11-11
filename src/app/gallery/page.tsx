import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import GalleryPageContent from "@/components/GalleryPageContent";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

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
      <Header />
      <main>
        <GalleryPageContent />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
