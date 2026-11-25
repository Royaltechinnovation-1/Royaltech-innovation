import "@/components/crm/CrmHero.css";
import "@/components/crm/powerful-features.css";
import "@/components/crm/WhyChoose.css";
import "@/components/crm/crm-faq-section.css";
import type { ReactNode } from "react";

export default function CrmLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
