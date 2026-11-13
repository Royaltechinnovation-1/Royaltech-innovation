"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ABOUT_VIDEO = "/kling_20261103_VIDEO_Cinematic__4788_0.mp4";

export default function About() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!playing) return;
    const video = videoRef.current;
    if (video) void video.play().catch(() => undefined);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPlaying(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [playing]);

  return (
    <section className="about" id="about">
      <div className="about-copy">
        <p className="about-label">About Us</p>
        <h2>Technology That Moves Your Business Forward</h2>
        <p className="about-intro">Your partner in digital transformation.</p>
        <p className="about-text">
          RoyalTech Innovation is an emerging IT solutions company helping
          businesses transform, grow, and succeed. From websites and custom
          software to mobile apps, digital marketing, design, and IT consulting,
          we deliver practical, reliable, and scalable solutions startups, small
          businesses, and established organisations can count on.
        </p>

        <div className="about-home-actions">
          <a className="about-more-btn" href="/about">
            About Us
          </a>
          <a className="about-more-btn about-more-btn-ghost" href="/services">
            Services
          </a>
        </div>
      </div>

      <div className={`about-media${playing ? " is-playing" : ""}`}>
        {!playing ? (
          <Image
            className="about-media-img"
            src="/about-office-entrance.jpg"
            // src="/home-services/entrance 4x HD.png"
            alt="RoyalTech Innovation office entrance"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            priority={false}
          />
        ) : null}

        {playing ? (
          <video
            ref={videoRef}
            className="about-video"
            src={ABOUT_VIDEO}
            autoPlay
            controls
            loop
            playsInline
            preload="auto"
          />
        ) : null}

        {/* {!playing ? (
          <button
            className="about-watch-btn"
            type="button"
            onClick={() => setPlaying(true)}
          >
            Watch
          </button>
        ) : (
          <button
            className="about-player-close"
            type="button"
            onClick={() => setPlaying(false)}
          >
            Close
          </button>
        )} */}
      </div>
    </section>
  );
}
