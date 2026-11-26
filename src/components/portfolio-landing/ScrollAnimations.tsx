"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { setLenis } from "@/lib/portfolio-landing/lenis";

gsap.registerPlugin(ScrollTrigger);

/**
 * Boots Lenis smooth scrolling and wires every [data-*] hook in the page to GSAP ScrollTrigger.
 * The fixed <VideoBackground /> is never touched by scroll logic beyond a subtle scale / overlay depth.
 */
function boot(setTouring: (v: boolean) => void): () => void {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const q = <T extends Element = HTMLElement>(sel: string) => gsap.utils.toArray<T>(sel);

    if (reduce) {
      gsap.set("[data-reveal], [data-stagger] > *, .scrub-word", { opacity: 1 });
      gsap.set(".word-inner", { yPercent: 0 });
      return () => {};
    }

    /* ---------- Lenis ---------- */
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
    });
    setLenis(lenis);
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const mobile = window.innerWidth < 768;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let depthMove: ((e: PointerEvent) => void) | null = null;

    const ctx = gsap.context(() => {
      /* ---------- Scroll progress ---------- */
      gsap.to("[data-progress]", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.3 },
      });

      /* ---------- Video: slow cinematic push-in + overlay depth (video itself keeps playing, fixed) ---------- */
      gsap.fromTo(
        "[data-bg-video]",
        { scale: 1.05 },
        {
          scale: 1.09,
          ease: "none",
          scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 1.2 },
        },
      );

      /* ---------- 3D depth: video drifts opposite the cursor, hero leans toward it ---------- */
      if (fine) {
        gsap.set("[data-hero-content]", { transformPerspective: 900, transformOrigin: "0% 50%" });
        const vx = gsap.quickTo("[data-bg-video]", "x", { duration: 1.6, ease: "power3.out" });
        const vy = gsap.quickTo("[data-bg-video]", "y", { duration: 1.6, ease: "power3.out" });
        const ry = gsap.quickTo("[data-hero-content]", "rotationY", { duration: 1.2, ease: "power3.out" });
        const rx = gsap.quickTo("[data-hero-content]", "rotationX", { duration: 1.2, ease: "power3.out" });
        depthMove = (e: PointerEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          vx(-nx * 26);
          vy(-ny * 16);
          ry(nx * 7);
          rx(-ny * 5);
        };
      }
      gsap.to("[data-depth-overlay]", {
        opacity: 1,
        ease: "none",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom 30%", scrub: true },
      });

      /* ---------- Headings: masked word reveal ---------- */
      q("[data-split]").forEach((el) => {
        const words = el.querySelectorAll(".word-inner");
        const delay = parseFloat(el.getAttribute("data-delay") || "0");
        gsap.fromTo(
          words,
          { yPercent: 115, rotate: 4 },
          {
            yPercent: 0,
            rotate: 0,
            duration: 1.1,
            ease: "expo.out",
            stagger: 0.07,
            delay,
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
          },
        );
      });

      /* ---------- Featured demo: 3D tilt-in as it enters ---------- */
      q("[data-tilt-in]").forEach((el) => {
        gsap.fromTo(
          el,
          { rotateX: 10, scale: 0.94, y: 50, opacity: 0.6 },
          {
            rotateX: 0,
            scale: 1,
            y: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", end: "top 55%", scrub: 0.6 },
          },
        );
      });

      /* ---------- Featured copy: bullets slide in one by one ---------- */
      q("[data-feature-list]").forEach((list) => {
        gsap.fromTo(
          list.children,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.09,
            scrollTrigger: { trigger: list, start: "top 98%", toggleActions: "play none none none" },
          },
        );
      });

      /* ---------- Generic reveal ---------- */
      q("[data-reveal]").forEach((el) => {
        const delay = parseFloat(el.getAttribute("data-delay") || "0");
        gsap.fromTo(
          el,
          { opacity: 0, y: 44, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
            delay,
            scrollTrigger: { trigger: el, start: "top 96%", toggleActions: "play none none none" },
          },
        );
      });

      /* ---------- Staggered groups (service cards, projects, lists) ---------- */
      q("[data-stagger]").forEach((group) => {
        gsap.fromTo(
          group.children,
          { opacity: 0, y: 70, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: { trigger: group, start: "top 85%", toggleActions: "play none none none" },
          },
        );
      });

      /* ---------- Scrubbed paragraph (word light-up) ---------- */
      q("[data-scrub]").forEach((el) => {
        gsap.to(el.querySelectorAll(".scrub-word"), {
          opacity: 1,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 92%", end: "top 50%", scrub: true },
        });
      });

      /* ---------- Parallax ---------- */
      q("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-parallax") || "0.2") * (mobile ? 0.4 : 1);
        gsap.fromTo(
          el,
          { yPercent: speed * 60 },
          {
            yPercent: speed * -60,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement || el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      /* ---------- Hairlines draw in ---------- */
      q("[data-line]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.6,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 92%", toggleActions: "play none none none" },
          },
        );
      });

      /* ---------- Count-up numbers ---------- */
      q("[data-count]").forEach((el) => {
        const target = parseFloat(el.getAttribute("data-count") || "0");
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2.2,
          ease: "power2.out",
          onUpdate: () => (el.textContent = Math.round(obj.v).toString()),
          scrollTrigger: { trigger: el, start: "top 92%", toggleActions: "play none none none" },
        });
      });

      /* ---------- AI pipeline: line sweeps as you scroll ---------- */
      q("[data-pipeline]").forEach((el) => {
        gsap.fromTo(
          el.querySelector("[data-pipeline-fill]"),
          { scaleX: 0, scaleY: 0 },
          {
            scaleX: 1,
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 50%", scrub: true },
          },
        );
      });

      /* ---------- Cinematic exit: each section dissolves as it leaves, video stays ---------- */
      q("[data-section]").forEach((section) => {
        if (section.getAttribute("data-exit") === "false") return;
        const inner = section.querySelector("[data-inner]");
        if (!inner) return;
        gsap.to(inner, {
          opacity: 0,
          y: -70,
          scale: 0.985,
          filter: "blur(6px)",
          ease: "none",
          scrollTrigger: { trigger: section, start: "bottom 52%", end: "bottom 6%", scrub: true },
        });
      });

      /* ---------- Hero-specific: content drifts up and fades faster ---------- */
      gsap.to("[data-hero-content]", {
        yPercent: -14,
        ease: "none",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
      });
    });

    if (depthMove) window.addEventListener("pointermove", depthMove, { passive: true });

    /* ---------- Guided tour: the page scrolls itself once everything has loaded ---------- */
    const stops = q<HTMLElement>("[data-tour]");
    const timers: number[] = [];
    let tourActive = false;
    const sleep = (ms: number) =>
      new Promise<void>((res) => {
        timers.push(window.setTimeout(res, ms));
      });
    const stopTour = () => {
      if (!tourActive) return;
      tourActive = false;
      timers.forEach((t) => window.clearTimeout(t));
      lenis.scrollTo(lenis.scroll, { immediate: true }); // freeze exactly where we are
      setTouring(false);
    };
    const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const runTour = async () => {
      await sleep(2600); // let the hero finish its entrance
      if (!tourActive) return;
      for (const el of stops) {
        if (!tourActive) return;
        const offset = parseFloat(el.getAttribute("data-tour-offset") || "0");
        await new Promise<void>((res) => {
          lenis.scrollTo(el, { offset, duration: 2.3, easing: easeInOut, onComplete: () => res() });
        });
        if (!tourActive) return;
        await sleep(parseFloat(el.getAttribute("data-tour-dwell") || "2600"));
      }
      stopTour();
    };
    // Any real input from the visitor hands control straight back to them.
    const interruptEvents = ["wheel", "touchstart", "keydown", "pointerdown"] as const;
    interruptEvents.forEach((ev) => window.addEventListener(ev, stopTour, { passive: true }));
    window.addEventListener("tour:stop", stopTour);
    if (stops.length && window.scrollY < 40) {
      tourActive = true;
      setTouring(true);
      runTour();
    }

    /* ---------- Glass spotlight follows the cursor ---------- */
    const onMove = (e: PointerEvent) => {
      const t = (e.target as HTMLElement | null)?.closest<HTMLElement>(".glass");
      if (!t) return;
      const r = t.getBoundingClientRect();
      t.style.setProperty("--mx", `${e.clientX - r.left}px`);
      t.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    /* ---------- In-page anchors glide through Lenis ---------- */
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      const a = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      const href = a?.getAttribute("href");
      if (!a || !href || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { duration: 1.8 });
    };
    document.addEventListener("click", onClick);

    /* ---------- Re-measure once fonts / layout settle ---------- */
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    /* Whenever the page height changes (late fonts, media, resize), trigger positions would go stale,
       so content could stay hidden. Re-measure shortly after it settles. */
    let refreshTimer: number | undefined;
    let lastHeight = document.documentElement.scrollHeight;
    const page = document.querySelector(".lp-page");
    const ro = page
      ? new ResizeObserver(() => {
          const h = document.documentElement.scrollHeight;
          if (Math.abs(h - lastHeight) < 4) return;
          lastHeight = h;
          window.clearTimeout(refreshTimer);
          refreshTimer = window.setTimeout(refresh, 250);
        })
      : null;
    if (page) ro?.observe(page);

    /* Safety net: anything that is on screen but still invisible (a missed trigger) is revealed. */
    const hidden = gsap.utils.toArray<HTMLElement>("[data-reveal], [data-feature-list] > *, [data-stagger] > *");
    const headings = gsap.utils.toArray<HTMLElement>("[data-split]").filter((h) => h.querySelector(".word-inner"));
    const stuck = new WeakMap<HTMLElement, number>();
    const failsafe = window.setInterval(() => {
      const vh = window.innerHeight;
      for (const el of hidden) {
        const rc = el.getBoundingClientRect();
        const onScreen = rc.bottom > 0 && rc.top < vh * 0.92;
        if (!onScreen || parseFloat(getComputedStyle(el).opacity) > 0.05) {
          stuck.delete(el);
          continue;
        }
        // Only step in after it has stayed visible-but-invisible for 3 checks in a row (~2.7s),
        // so legitimately delayed entrances are left alone.
        const n = (stuck.get(el) ?? 0) + 1;
        stuck.set(el, n);
        if (n < 3) continue;
        stuck.delete(el);
        gsap.to(el, { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)", duration: 0.7, ease: "power2.out", overwrite: "auto" });
      }
      // Headings hide their words by sliding them down inside a mask; same rule for those.
      for (const h of headings) {
        const rc = h.getBoundingClientRect();
        const onScreen = rc.bottom > 0 && rc.top < vh * 0.92;
        const words = h.querySelectorAll<HTMLElement>(".word-inner");
        const covered = onScreen && Number(gsap.getProperty(words[0], "yPercent")) > 20;
        if (!covered) {
          stuck.delete(h);
          continue;
        }
        const n = (stuck.get(h) ?? 0) + 1;
        stuck.set(h, n);
        if (n < 3) continue;
        stuck.delete(h);
        gsap.to(words, { yPercent: 0, rotate: 0, duration: 0.8, ease: "expo.out", stagger: 0.05, overwrite: "auto" });
      }
    }, 900);

    return () => {
      window.clearInterval(failsafe);
      window.clearTimeout(refreshTimer);
      ro?.disconnect();
      tourActive = false;
      timers.forEach((t) => window.clearTimeout(t));
      interruptEvents.forEach((ev) => window.removeEventListener(ev, stopTour));
      window.removeEventListener("tour:stop", stopTour);
      if (depthMove) window.removeEventListener("pointermove", depthMove);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", refresh);
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
      setLenis(null);
    };
}

/**
 * Waits for the loading screen, then boots smooth scrolling, scroll animations and the guided tour.
 */
export default function ScrollAnimations() {
  const [touring, setTouring] = useState(false);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;
    const start = () => {
      if (!cancelled) cleanup = boot(setTouring);
    };
    if (window.__siteReady) start();
    else window.addEventListener("site:ready", start, { once: true });
    return () => {
      cancelled = true;
      window.removeEventListener("site:ready", start);
      cleanup?.();
    };
  }, []);

  return (
    <>
      <div
        data-progress
        aria-hidden
        style={{ transform: "scaleX(0)" }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-gold/0 via-gold to-gold-soft"
      />
      {touring && (
        <div className="fixed bottom-6 left-1/2 z-[70] flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/20 bg-black/55 py-2 pr-2 pl-5 text-[0.66rem] tracking-[0.18em] whitespace-nowrap text-white/80 uppercase shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          Guided tour
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("tour:stop"))}
            className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 tracking-[0.18em] text-white uppercase transition-colors hover:border-gold hover:text-gold"
          >
            Take control
          </button>
        </div>
      )}
    </>
  );
}
