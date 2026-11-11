import BackToTop from "@/components/BackToTop";
import ContactPageContent from "@/components/ContactPageContent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Request a Quote in Mohali",
  description:
    "Contact RoyalTech Innovation for websites, software, apps, digital marketing, design, and IT consulting. Request a quote or visit our Mohali office near CP67 Mall.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact RoyalTech Innovation",
    description:
      "Request a quote or book a free consultation with our Mohali team.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactPageContent />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
