import AboutPageContent from "@/components/AboutPageContent";
import BackToTop from "@/components/BackToTop";
import ConnectWithUs from "@/components/ConnectWithUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about RoyalTech Innovation — an IT solutions company and digital transformation partner delivering practical technology for startups, SMEs, and enterprises.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutPageContent />
        <ConnectWithUs />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
