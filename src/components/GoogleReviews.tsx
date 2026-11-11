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
    name: "Ataur Rahman",
    reviewsLabel: "1 review",
    rating: 4,
    when: "3 days ago",
    isNew: true,
    initial: "A",
    color: "#e67e22",
    text: "RoyalTech Innovation, Mohali is a good IT company. I had them build my website. Their service and work quality were very good. Overall, the experience was good. Thank you, RoyalTech team!",
  },
  {
    name: "Robina Khatoon",
    reviewsLabel: "1 review",
    rating: 4,
    when: "3 days ago",
    isNew: true,
    initial: "R",
    color: "#8e44ad",
    text: "I had my website built by RoyalTech Innovation, Mohali. Their service was excellent, and the team's behavior was very professional. The website work met my expectations. The overall experience was really good. If anyone needs website development or IT services, I would recommend RoyalTech Innovation. Thank you for the good service!",
  },
  {
    name: "Rohit Verma",
    reviewsLabel: "3 reviews",
    rating: 5,
    when: "3 days ago",
    isNew: true,
    initial: "R",
    color: "#6d4c41",
    text: "I had an excellent experience with RoyalTech Innovation! Their team is highly skilled and dedicated, offering outstanding services in website development, UI/UX design, IT solutions, and digital marketing. They understand business requirements very well and provide creative, innovative, and effective solutions. A knowledgeable and supportive team with a strong commitment to quality. Highly recommended!",
  },
  {
    name: "Prabhakar kr",
    reviewsLabel: "2 reviews",
    rating: 5,
    when: "3 days ago",
    isNew: true,
    initial: "P",
    color: "#34495e",
    photo: "/reviews/prabhakar.png",
    text: "Provide the best IT service",
  },
  {
    name: "Sana Iqbal",
    reviewsLabel: "2 reviews",
    rating: 5,
    when: "1 week ago",
    isNew: true,
    initial: "S",
    color: "#16a085",
    text: "I had a great experience with RoyalTech Innovation! Their team provides excellent IT solutions, website development, UI/UX design, and digital marketing services. They have a clear understanding of client requirements and deliver professional, user-friendly, and innovative solutions. Their expertise in web development and digital transformation makes them a great choice for startups and businesses looking to grow online.",
  },
  {
    name: "Vikram Singh",
    reviewsLabel: "4 reviews",
    rating: 5,
    when: "1 week ago",
    initial: "V",
    color: "#2980b9",
    text: "Very professional IT partner. From first discussion to final delivery, everything was clear and on time. The website looks clean, loads fast, and matches what we asked for. Support after launch has also been quick. Happy to recommend RoyalTech Innovation.",
  },
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
                      {review.initial}
                    </span>
                  )}
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.reviewsLabel}</span>
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
