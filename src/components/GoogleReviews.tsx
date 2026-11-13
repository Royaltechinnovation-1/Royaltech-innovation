"use client";

import Image from "next/image";
import { useRef } from "react";

type Review = {
  name: string;
  reviewsLabel: string;
  rating: number;
  when: string;
  isNew?: boolean;
  text: string;
  initial: string;
  color: string;
  photo?: string;
};

const reviews: Review[] = [
  {
    name: "Mohit Sankhyan",
    reviewsLabel: "1 review",
    rating: 5,
    when: "1 week ago",
    isNew: true,
    initial: "A",
    color: "#e67e22",
    text:
      "I had Royal Tech Innovation, Mohali develop an ERP for my healthcare business, and honestly, they did a great job. They understood my business requirements very well and developed an excellent ERP accordingly. Their team's work, dedication, and support were very impressive. The overall experience was very good. Thank you so much, Royal Tech Innovation, Mohali, for your amazing work! Highly recommended. 🙌",
  },
  {
    name: "Diya",
    reviewsLabel: "3 review",
    rating: 5,
    when: "  2 hours ago",
    isNew: true,
    initial: "R",
    color: "#8e44ad",
    text: "I had a great experience with Royaltech Innovation. Their IT consulting services were really helpful and professional. The team understood my requirements, provided useful guidance, and helped me with the right solutions. I appreciate their support, knowledge, and dedication. Highly recommended for IT consulting services!",
  },
  {
    name: "Rohit Verma",
    reviewsLabel: "1 review",
    rating: 5,
    when: " 2 hours ago",
    isNew: true,
    initial: "R",
    color: "#6d4c41",
    text: "I had an excellent experience with RoyalTech Innovation! Their team is highly skilled and dedicated, offering outstanding services in website development, UI/UX design, IT solutions, and digital marketing. They understand business requirements very well and provide creative, innovative, and effective solutions. A knowledgeable and supportive team with a strong commitment to quality. Highly recommended!",
  },
  
  {
    name: "Vk",
    reviewsLabel: "2 reviews",
    rating: 5,
    when: "1 week ago",
    isNew: true,
    initial: "S",
    color: "#16a085",
    text: "I had a great experience with Royaltech Innovation. Their team was professional, supportive, and helpful throughout the website development process. They understood my requirements and delivered a website that met my expectations. I really appreciate their work, communication, and dedication. Highly recommended for website development and IT services!",
 
  },
  {
    name: "Vikram Singh",
    reviewsLabel: "4 reviews",
    rating: 5,
    when: "1 week ago",
    initial: "V",
    color: "#2980b9",
    text: "I had a wonderful experience with Royal Tech Innovation for their digital marketing services. Their team is highly professional, creative, and knowledgeable about the latest digital marketing trends. They took the time to understand my business goals and provided valuable suggestions to improve online visibility, brand awareness, and audience engagement.", },
  {
    name: "Neha Gupta",
    reviewsLabel: "1 review",
    rating: 5,
    when: "2 weeks ago",
    initial: "N",
    color: "#c0392b",
    text: "RoyalTech Innovation helped us with website development and digital marketing. The team explained every step clearly and delivered quality work. Communication was excellent and the final result looks modern and professional. Thank you!",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <span className="grev-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={index < rating ? "is-on" : "is-off"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </span>
  );
}

export default function GoogleReviews() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".grev-card");
    const gap = 16;
    const width = card?.getBoundingClientRect().width ?? 320;
    el.scrollBy({ left: direction * (width + gap), behavior: "smooth" });
  };

  return (
    <section className="grev" id="testimonials" aria-labelledby="grev-heading">
      <div className="hm-shell">
        <div className="grev-head">
          <div>
            <p className="hm-eyebrow">Google Reviews</p>
            <h2 className="hm-title" id="grev-heading">
              Real reviews from our clients
            </h2>
            <p className="hm-lead">
              Recent Google reviews for RoyalTech Innovation, Mohali.
            </p>
          </div>
          <div className="grev-controls" aria-label="Review navigation">
            <button type="button" onClick={() => scrollByCard(-1)} aria-label="Previous reviews">
              ←
            </button>
            <button type="button" onClick={() => scrollByCard(1)} aria-label="Next reviews">
              →
            </button>
          </div>
        </div>

        <div className="grev-track" ref={scrollerRef}>
          {reviews.map((review) => (
            <article key={review.name} className="grev-card">
              <div className="grev-top">
                <div className="grev-person">
                  {review.photo ? (
                    <Image
                      className="grev-avatar-img"
                      src={review.photo}
                      alt=""
                      width={40}
                      height={40}
                    />
                  ) : (
                    <span
                      className="grev-avatar"
                      style={{ background: review.color }}
                      aria-hidden="true"
                    >
                      {review.name?.charAt(0).toUpperCase() || "?"}
                    </span>
                  )}
                  <div>
                    <strong >{review.name}</strong>
                    <span className="grev-avatar-reviews">{review.reviewsLabel}</span>
                  </div>
                </div>
                <span className="grev-menu" aria-hidden="true">
                  ⋮
                </span>
              </div>

              <div className="grev-meta">
                <Stars rating={review.rating} />
                <span className="grev-when">{review.when}</span>
                {review.isNew ? <span className="grev-new">NEW</span> : null}
              </div>

              <p className="grev-text">{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
