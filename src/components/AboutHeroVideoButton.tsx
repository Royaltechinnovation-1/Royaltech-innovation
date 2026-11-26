"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/* "Watch Video" hero button: opens the About video in a modal player. */
export default function AboutHeroVideoButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="ae-hero-watch"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        <span className="ae-hero-watch-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5.5v13l10-6.5-10-6.5Z" />
          </svg>
        </span>
        Watch Video
      </button>

      {open
        ? createPortal(
            <div
              className="ae-video-modal"
              role="dialog"
              aria-modal="true"
              aria-label="RoyalTech Innovation video"
              onClick={() => setOpen(false)}
            >
              <div
                className="ae-video-modal-dialog"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className="ae-video-modal-close"
                  onClick={() => setOpen(false)}
                  aria-label="Close video"
                >
                  ×
                </button>
                <video
                  className="ae-video-modal-player"
                  src="/about-video.mp4"
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
