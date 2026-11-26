"use client";

import { useEffect, useRef } from "react";

/** Full-screen background video: 4K (3840×2160) H.264, made from the 1080p original. */
const BG_VIDEO_URL = "/portfolio/video/background-4k.mp4";

/**
 * One fixed, full-viewport video that lives behind every section.
 * It is mounted once and never swapped — sections scroll over it.
 */
export default function VideoBackground() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // React doesn't reliably reflect the `muted` attribute; autoplay needs it set on the element.
    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => {
      if (video.paused) video.play().catch(() => {});
    };
    tryPlay();

    // Recover if the browser blocked autoplay (e.g. low-power mode) or paused on tab switch.
    const events: (keyof WindowEventMap)[] = ["pointerdown", "touchstart", "keydown", "scroll", "wheel"];
    events.forEach((e) => window.addEventListener(e, tryPlay, { passive: true, once: true }));
    const onVisible = () => document.visibilityState === "visible" && tryPlay();
    document.addEventListener("visibilitychange", onVisible);
    video.addEventListener("pause", onVisible);

    return () => {
      events.forEach((e) => window.removeEventListener(e, tryPlay));
      document.removeEventListener("visibilitychange", onVisible);
      video.removeEventListener("pause", onVisible);
      // Next keeps the previous route mounted (hidden) after you navigate away. Don't keep decoding 4K video for it.
      // The effect runs again, and calls tryPlay(), when the page is shown again.
      video.pause();
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden bg-ink">
      <video
        ref={ref}
        className="fixed inset-0 h-full w-full object-cover"
        style={{ position: "fixed", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        src={BG_VIDEO_URL}
        poster="/portfolio/video/poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        data-bg-video
      />

      {/* Base readability overlay */}
      <div className="fixed inset-0" style={{ background: "rgba(3, 7, 16, 0.14)" }} />
      {/* Phones crop the 16:9 video tightly around its bright centre, so add extra contrast there */}
      <div className="fixed inset-0 md:hidden" style={{ background: "rgba(3, 7, 16, 0.14)" }} />
      {/* Composition-aware gradient: protects the left-aligned copy, keeps the video's centre (logo burst / tunnel) bright */}
      <div
        className="fixed inset-0 hidden md:block"
        style={{ background: "linear-gradient(90deg, rgba(3,6,13,0.55) 0%, rgba(3,6,13,0.22) 40%, rgba(3,6,13,0) 70%)" }}
      />
      {/* Depth layer — scroll-driven: lighter on the hero, deeper behind dense content */}
      <div data-depth-overlay className="fixed inset-0 opacity-0" style={{ background: "rgba(2, 5, 12, 0.14)" }} />
      {/* Vignette */}
      <div
        className="fixed inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 45%, transparent 55%, rgba(2,4,10,0.4) 100%)" }}
      />
      {/* Film grain-ish top/bottom fade */}
      <div
        className="fixed inset-0"
        style={{ background: "linear-gradient(180deg, rgba(2,4,10,0.4) 0%, transparent 14%, transparent 85%, rgba(2,4,10,0.4) 100%)" }}
      />
    </div>
  );
}
