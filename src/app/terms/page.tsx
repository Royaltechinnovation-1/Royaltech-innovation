import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TermsPageContent from "@/components/TermsPageContent";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | IT Services Agreement",
  description:
    "Review RoyalTech Innovation’s Terms & Conditions for website use and IT service engagements, including scope, IP, security, and liability.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <TermsPageContent />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
