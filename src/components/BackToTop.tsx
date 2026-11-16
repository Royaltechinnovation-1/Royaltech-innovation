"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

const scrollToTop = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
  return (
    <a
      className={`back-to-top${visible ? " is-visible" : ""}`}
      href="#top"
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={scrollToTop}
    >
      <span aria-hidden="true">↑</span>
    </a>
  );
}
