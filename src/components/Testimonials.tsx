"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  {
    quote:
      "Excellent service from start to finish. The team understood our requirements clearly and delivered the project on time. Their communication was great throughout the process. Highly recommended!",
    name: "Rajesh Kumar",
    role: "Operations Manager",
    company: "Potent",
    initials: "RK",
  },
  {
    quote:
      "We approached them for our cloud migration and it was the best decision. The team was professional and handled everything smoothly. Zero downtime and great post-project support.",
    name: "Priya Sharma",
    role: "IT Head",
    company: "Potent",
    initials: "PS",
  },
  {
    quote:
      "Very responsive and reliable IT partner. They fixed our system issues quickly and suggested improvements we hadn't thought of. Their support team is always available when needed.",
    name: "Arun Patel",
    role: "Business Owner",
    company: "Potent",
    initials: "AP",
  },
  {
    quote:
      "RoyalTech turned a complex technology roadmap into a clear plan our whole team could follow. Every milestone was delivered with care and transparency.",
    name: "Neha Verma",
    role: "Product Director",
    company: "Northstar Labs",
    initials: "NV",
  },
  {
    quote:
      "The new digital experience is faster, easier to use, and much more effective for our customers. RoyalTech brought strong ideas and dependable execution.",
    name: "Vikram Singh",
    role: "Growth Lead",
    company: "Aster Group",
    initials: "VS",
  },
  {
    quote:
      "From the first workshop to launch, the team stayed focused on the outcomes that mattered. We now have a stronger foundation for our next stage of growth.",
    name: "Ananya Mehta",
    role: "Founder",
    company: "Brightpath",
    initials: "AM",
  },
];

export default function Testimonials() {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const element = testimonialsRef.current;
    if (!element) return;

    setCanScrollLeft(element.scrollLeft > 0);
    setCanScrollRight(
      element.scrollLeft + element.clientWidth < element.scrollWidth - 1,
    );
  };

  useEffect(() => {
    updateScrollState();
    const element = testimonialsRef.current;
    if (!element) return;

    element.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      element.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollTestimonials = (direction: number) => {
    testimonialsRef.current?.scrollBy({
      left: direction * 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-shell">
        <div className="testimonials-head">
          <p className="testimonials-label">Testimonials</p>
          <h2>Trusted by teams who expect clarity and delivery</h2>
          <p className="testimonials-intro">
            Real feedback from partners who built with RoyalTech Innovation.
          </p>
          <div className="testimonials-controls" aria-label="Testimonial navigation">
            <button
              type="button"
              className="testimonials-arrow"
              aria-label="Previous testimonials"
              onClick={() => scrollTestimonials(-1)}
              disabled={!canScrollLeft}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className="testimonials-arrow"
              aria-label="Next testimonials"
              onClick={() => scrollTestimonials(1)}
              disabled={!canScrollRight}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="testimonials-grid" ref={testimonialsRef}>
          {items.map((item) => (
            <article key={item.name} className="testimonial">
              <div className="testimonial-top">
                <span className="testimonial-mark" aria-hidden="true">
                  “
                </span>
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
              </div>

              <p className="testimonial-quote">{item.quote}</p>

              <div className="testimonial-person">
                <span className="testimonial-avatar" aria-hidden="true">
                  {item.initials}
                </span>
                <div>
                  <p className="testimonial-name">{item.name}</p>
                  <p className="testimonial-role">{item.role}</p>
                  <p className="testimonial-company">{item.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
