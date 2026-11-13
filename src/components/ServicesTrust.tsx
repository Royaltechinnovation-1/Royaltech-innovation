"use client";

import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "Meera Kapoor",
    role: "Product Lead",
    quote:
      "A clear way for our team to keep daily work moving, with less back and forth.",
    photo: "/trust/meera.svg",
  },
  {
    name: "Rajiv Sharma",
    role: "Operations Lead",
    quote:
      "It's the right solution for our business especially in automating routine tasks and saving hours.",
    photo: "/trust/rajiv.svg",
  },
  {
    name: "Anika Malik",
    role: "CEO, Fintech",
    quote:
      "This platform is perfectly aligned with our goals, especially in automation and operational clarity.",
    photo: "/trust/anika.svg",
  },
  {
    name: "Samuel Andrews",
    role: "Product Manager",
    quote:
      "Agent automation keeps our objectives on track, so the team can keep improving the flow of work.",
    photo: "/trust/samuel.svg",
  },
  {
    name: "Elena Brooks",
    role: "Growth Lead",
    quote:
      "We can see the work clearly, and the team keeps moving without extra friction.",
    photo: "/trust/elena.svg",
  },
];

function offsetFor(index: number, active: number, total: number) {
  let diff = index - active;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

export default function ServicesTrust() {
  const [active, setActive] = useState(2);
  const [jump, setJump] = useState<boolean[]>(() => reviews.map(() => false));
  const total = reviews.length;
  const activeRef = useRef(active);
  const paused = useRef(false);
  const moving = useRef(false);

  function step(direction: number) {
    if (moving.current) return;
    moving.current = true;
    window.setTimeout(() => {
      moving.current = false;
    }, 700);
    const current = activeRef.current;
    const next = (current + direction + total) % total;
    setJump(
      reviews.map(
        (_, index) =>
          Math.abs(offsetFor(index, next, total) - offsetFor(index, current, total)) > 1,
      ),
    );
    activeRef.current = next;
    setActive(next);
  }

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      if (!paused.current) step(-1);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      className="spg-trust"
      aria-label="Testimonials"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
    >
      <h2>Trusted by modern teams</h2>
      <p>
        See how our AI empowers the future of working teams to collaborate
        seamlessly, boost productivity, and innovate faster.
      </p>
      <div className="spg-stage">
        {reviews.map((review, index) => {
          const offset = offsetFor(index, active, total);
          return (
            <article
              key={review.name}
              className="spg-card"
              data-offset={offset}
              data-jump={jump[index] ? "true" : "false"}
              aria-hidden={offset !== 0}
            >
              <header>
                <img src={review.photo} alt="" />
                <div>
                  <strong>{review.name}</strong>
                  <em>{review.role}</em>
                </div>
              </header>
              <p className="spg-stars" aria-label="5 stars">
                ★★★★★
              </p>
              <p>“{review.quote}”</p>
            </article>
          );
        })}
      </div>
      <div className="spg-nav">
        <button type="button" onClick={() => step(-1)} aria-label="Previous testimonial">
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M12.5 4.5 7 10l5.5 5.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="spg-dots">
          {reviews.map((review, index) => (
            <button
              key={review.name}
              type="button"
              className={index === active ? "is-on" : ""}
              aria-label={`Show ${review.name}`}
              onClick={() => {
  activeRef.current = index;
  setActive(index);
  setJump(reviews.map(() => false));
}}
            />
          ))}
        </div>
        <button type="button" onClick={() => step(1)} aria-label="Next testimonial">
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M7.5 4.5 13 10l-5.5 5.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
