import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PrivacyPageContent from "@/components/PrivacyPageContent";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection & ISO-Aligned Practices",
  description:
    "Read RoyalTech Innovation’s Privacy Policy—how we collect, use, and protect personal data for IT services, aligned with ISO/IEC 27001 and 27701 principles.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PrivacyPageContent />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
