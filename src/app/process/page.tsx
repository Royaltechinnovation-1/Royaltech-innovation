import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProcessPageContent from "@/components/ProcessPageContent";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process | Discovery, Design, Development & Support",
  description:
    "See RoyalTech Innovation’s simple process: discovery & consultation, planning & design, development & testing, then deployment & ongoing support.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        <ProcessPageContent />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
