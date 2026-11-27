"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Links like /services#ai-chatbots should land on their target, not the top of the page.
    const hash = window.location.hash.slice(1);
    const target = hash ? document.getElementById(decodeURIComponent(hash)) : null;

    if (target) {
      target.scrollIntoView({ block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
