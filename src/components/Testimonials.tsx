"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const reviewImages = [
  {
    src: "/reviews/google-ataur.png",
    alt: "Google review from Ataur Rahman for RoyalTech Innovation",
  },
  {
    src: "/reviews/google-robina.png",
    alt: "Google review from Robina Khatoon for RoyalTech Innovation",
  },
  {
    src: "/reviews/google-rohit.png",
    alt: "Google review from Rohit Verma for RoyalTech Innovation",
  },
  {
    src: "/reviews/google-prabhakar.png",
    alt: "Google review from Prabhakar kr for RoyalTech Innovation",
  },
  {
    src: "/reviews/google-sana.png",
    alt: "Google review from Sana Iqbal for RoyalTech Innovation",
  },
  {
    src: "/reviews/google-vikram.png",
    alt: "Google review from Vikram Singh for RoyalTech Innovation",
  },
  {
    src: "/reviews/google-neha.png",
    alt: "Google review from Neha Gupta for RoyalTech Innovation",
  },
  {
    src: "/reviews/google-amit.png",
    alt: "Google review from Amit Sharma for RoyalTech Innovation",
  },
  {
    src: "/reviews/google-kavita.png",
    alt: "Google review from Kavita Mehra for RoyalTech Innovation",
  },
  {
    src: "/reviews/google-manish.png",
    alt: "Google review from Manish Kapoor for RoyalTech Innovation",
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
    const element = testimonialsRef.current;
    element?.scrollBy({
      left: direction * (element.clientWidth * 0.7),
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
            Real Google reviews from clients of RoyalTech Innovation, Mohali.
          </p>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonials-controls" aria-label="Review navigation">
            <button
              type="button"
              className="testimonials-arrow"
              aria-label="Previous reviews"
              onClick={() => scrollTestimonials(-1)}
              disabled={!canScrollLeft}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className="testimonials-arrow"
              aria-label="Next reviews"
              onClick={() => scrollTestimonials(1)}
              disabled={!canScrollRight}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <div
            className="testimonials-grid testimonials-reviews"
            ref={testimonialsRef}
          >
            {reviewImages.map((review) => (
              <article key={review.src} className="testimonial testimonial-shot">
                <Image
                  src={review.src}
                  alt={review.alt}
                  width={720}
                  height={520}
                  className="testimonial-shot-img"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
