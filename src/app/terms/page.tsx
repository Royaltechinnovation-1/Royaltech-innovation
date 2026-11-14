import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TermsPageContent from "@/components/TermsPageContent";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Service Agreement | RoyalTech Innovation",
  description:
    "Read the Terms & Conditions for RoyalTech Innovation. Understand our IT service agreements, ISO-informed security policies, IP rights, and governing laws.",
  alternates: {
    canonical: "https://royaltechinnovation.co.in/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Service Agreement | RoyalTech Innovation",
    description:
      "Review RoyalTech Innovation's IT service agreements, security practices, intellectual property rights, and governing laws.",
    url: "https://royaltechinnovation.co.in/terms",
    siteName: "RoyalTech Innovation",
    type: "website",
  },
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
