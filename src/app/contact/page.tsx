import BackToTop from "@/components/BackToTop";
import ConnectWithUs from "@/components/ConnectWithUs";
import ContactPageContent from "@/components/ContactPageContent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact RoyalTech Innovation for websites, software, apps, digital marketing, design, and IT consulting. Request a quote or visit our Mohali office.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactPageContent />
        <ConnectWithUs />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
