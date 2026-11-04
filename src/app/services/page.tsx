import BackToTop from "@/components/BackToTop";
import ConnectWithUs from "@/components/ConnectWithUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesPageContent from "@/components/ServicesPageContent";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore RoyalTech Innovation services—UI/UX design, web and app development, custom software, digital marketing, and IT consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesPageContent />
        <ConnectWithUs />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
