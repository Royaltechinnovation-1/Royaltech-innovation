"use client";

import { useEffect, useRef, useState } from "react";

const ABOUT_VIDEO = "/kling_20261103_VIDEO_Cinematic__4788_0.mp4";

const moreBlocks = [
  {
    title: "Our Mission",
    line: "Built around your business.",
    items: [
      "Customised technology solutions",
      "Stronger digital presence",
      "Efficient day-to-day work",
      "Sustainable growth",
    ],
  },
  {
    title: "Our Vision",
    line: "A trusted partner, wherever you are.",
    items: [
      "Trusted global technology partner",
      "Innovative & reliable IT solutions",
      "Meaningful digital transformation",
    ],
  },
  {
    title: "Our Goals",
    line: "Six goals guide our work.",
    items: [
      "Fit: solutions customised to each client",
      "Presence: strengthen digital presence",
      "Efficiency: software and automation",
      "Partnership: long-term transparency",
      "Access: affordable for growing businesses",
      "Progress: adopt modern technologies",
    ],
  },
  {
    title: "Our Values",
    line: "Principles we work by, every day.",
    items: [
      "Innovation",
      "Integrity",
      "Quality",
      "Transparency",
      "Customer satisfaction",
      "Teamwork",
    ],
  },
  {
    title: "Our Approach",
    line: "Business first, technology second.",
    items: [
      "Start with your goals",
      "Tailor what fits",
      "Build to scale",
      "Design, develop, market & support",
    ],
  },
];

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const [withSound, setWithSound] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !withSound;
    if (withSound) {
      video.controls = true;
      void video.play().catch(() => undefined);
    } else {
      video.controls = false;
      void video.play().catch(() => undefined);
    }
  }, [withSound]);

  useEffect(() => {
    if (!withSound) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setWithSound(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [withSound]);

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

        <button
          className="about-more-btn"
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "Show less" : "Learn more"}
        </button>

        {expanded ? (
          <div className="about-more">
            {moreBlocks.map((block) => (
              <article key={block.title} className="about-block">
                <h3>{block.title}</h3>
                <p className="about-block-line">{block.line}</p>
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        ) : null}

      </div>

      <div className={`about-media${withSound ? " is-playing" : ""}`}>
        <video
          ref={videoRef}
          className="about-video"
          src={ABOUT_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {!withSound ? (
          <button
            className="about-watch-btn"
            type="button"
            onClick={() => setWithSound(true)}
          >
            Watch
          </button>
        ) : (
          <button
            className="about-player-close"
            type="button"
            onClick={() => setWithSound(false)}
          >
            Close
          </button>
        )}
      </div>
    </section>
  );
}
