import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PrivacyPageContent from "@/components/PrivacyPageContent";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | RoyalTech Innovation" },
  description:
    "Learn how RoyalTech Innovation collects, uses, and protects your personal data through its privacy practices.",
  alternates: {
    canonical: "https://royaltechinnovation.co.in/privacy",
  },
  openGraph: {
    title: "Privacy Policy | RoyalTech Innovation",
    description:
      "Learn how RoyalTech Innovation collects, uses, and protects your personal data through its privacy practices.",
    url: "https://royaltechinnovation.co.in/privacy",
    siteName: "RoyalTech Innovation",
    type: "website",
    images: [
      {
        url: "https://royaltechinnovation.co.in/og-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "RoyalTech Innovation Privacy Policy",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
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
