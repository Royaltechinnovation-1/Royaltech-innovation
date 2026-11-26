"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * Full-screen loading screen. It waits for fonts, the page `load` event and the background
 * video to be playable, then lifts and announces "site:ready", which starts the page
 * animations and the guided scroll tour.
 */
export default function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const [pct, setPct] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const announce = () => {
      window.__siteReady = true;
      window.dispatchEvent(new Event("site:ready"));
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      announce();
      setGone(true);
      return;
    }

    window.__siteReady = false;
    html.classList.add("is-loading");

    const state = { fonts: false, load: false, video: false };
    const video = document.querySelector<HTMLVideoElement>("video[data-bg-video]");

    const markFonts = () => (state.fonts = true);
    const markLoad = () => (state.load = true);
    const markVideo = () => (state.video = true);

    if (document.fonts?.ready) document.fonts.ready.then(markFonts);
    else markFonts();

    if (document.readyState === "complete") markLoad();
    else window.addEventListener("load", markLoad, { once: true });

    if (!video || video.readyState >= 3) markVideo();
    else video.addEventListener("canplay", markVideo, { once: true });

    // Never trap visitors behind the loader if something is slow.
    const failsafe = window.setTimeout(() => {
      markFonts();
      markLoad();
      markVideo();
    }, 9000);

    const MIN_MS = 1800;
    const start = performance.now();
    let shown = 0;
    let last = start;
    let timer = 0;
    let exiting = false;
    let tl: gsap.core.Timeline | null = null;

    const exit = () => {
      exiting = true;
      html.classList.remove("is-loading");
      window.scrollTo(0, 0); // always begin the experience from the top
      announce();
      tl = gsap.timeline({ onComplete: () => setGone(true) });
      tl.to(logoRef.current, { scale: 1.12, opacity: 0, duration: 0.7, ease: "power2.in" }, 0).to(
        rootRef.current,
        { opacity: 0, duration: 0.9, ease: "power2.inOut" },
        0.15,
      );
    };

    const loop = () => {
      const t = performance.now();
      const dt = t - last;
      last = t;
      const target = (state.fonts ? 30 : 0) + (state.load ? 30 : 0) + (state.video ? 40 : 0);
      const timeCap = Math.min(100, ((t - start) / MIN_MS) * 100);
      const goal = Math.min(target, timeCap);
      shown += (goal - shown) * (1 - Math.exp(-dt / 140)); // time-based, so slow ticks still converge
      if (goal >= 100 && shown > 99.3) shown = 100;
      setPct(Math.round(shown));
      if (shown >= 100 && !exiting) {
        window.clearInterval(timer);
        exit();
      }
    };
    // A timer (not rAF) so the loader still finishes in background tabs.
    timer = window.setInterval(loop, 40);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(failsafe);
      window.removeEventListener("load", markLoad);
      video?.removeEventListener("canplay", markVideo);
      tl?.kill();
      html.classList.remove("is-loading");
    };
  }, []);

  if (gone) return null;

  return (
    <div
      ref={rootRef}
      id="preloader"
      aria-hidden
      className="fixed inset-0 z-[100] grid place-items-center bg-ink"
      style={{
        background:
          "radial-gradient(ellipse at 50% 45%, rgba(214,179,112,0.10), transparent 55%), #03060d",
      }}
    >
      <div className="flex flex-col items-center gap-10 px-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={logoRef}
          src="/brand/royaltech-logo.png"
          alt=""
          className="h-28 w-auto animate-pulse select-none md:h-36"
          draggable={false}
        />
        <div className="w-56 md:w-72">
          <div className="h-px w-full bg-white/15">
            <div
              className="h-px origin-left bg-gradient-to-r from-gold to-gold-soft shadow-[0_0_12px_rgba(214,179,112,0.9)]"
              style={{ transform: `scaleX(${pct / 100})` }}
            />
          </div>
          <p className="mt-4 text-center text-[0.65rem] tracking-[0.3em] text-white/55 uppercase">
            Loading experience · {pct}%
          </p>
        </div>
      </div>
    </div>
  );
}
