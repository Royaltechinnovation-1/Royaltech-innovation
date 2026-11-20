"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "../styles/Swiper.css";

type Review = {
  // src: string;
  alt: string;
  name?: string;
  reviewText?: string;
  position?:string;
  details?: string;
  rating?: number;
};

const reviewImages: Review[] = [
   {
    // src: "/reviews/mohit-sir reviews.webp",
    alt: "Google review from Mohit Sankhyan for RoyalTech Innovation",
    position:"Founder, NextGen Enterprises · Australia",
    name: "Michael Thompson",
    details: "1 review · a week ago",
    rating: 5,
    reviewText:
      "RoyalTech Innovation demonstrated outstanding technical expertise from planning to implementation. They understood our business vision and delivered a reliable digital solution. Their professionalism, attention to detail, and timely delivery exceeded our expectations.",
  },
  {
    // src: "/reviews/mohit-sir reviews.webp",
    alt: "Google review from Mohit Sankhyan for RoyalTech Innovation",
    position:"Operations Head, Global Business Group · UAE",
    name: "Sophia Williams",
    details: "1 review · new",
    rating: 5,
    reviewText:
      "RoyalTech Innovation transformed the way we manage our business operations. Their team delivered excellent technical solutions with great communication and professionalism. We truly appreciate their dedication, quality of work, and commitment to delivering results.",
  },
 
  {
    // src: "/reviews/mohit-sir reviews.webp",
    alt: "Google review from Mohit Sankhyan for RoyalTech Innovation",
    position:"Managing Director, TechVision Inc. · USA",
    name: "Sarah Mitchell",
    details: "2 review · a week ago",
    rating: 5,
    reviewText:
      "Working with RoyalTech Innovation was a wonderful experience. Their software solution streamlined our workflow and significantly improved productivity. The team understood our requirements perfectly and provided outstanding support throughout the project.",
  },
  {
    // src: "/reviews/mohit-sir reviews.webp",
    alt: "Google review from Mohit Sankhyan for RoyalTech Innovation",
    position:"CEO, Anderson Digital Solutions · Uk",
    name: "James Anderson",
    details: "1 review · a week ago",
    rating: 5,
    reviewText:
      "Their CRM and ERP solutions helped us simplify complex business operations and improve efficiency. The team was highly professional, responsive, and supportive throughout the process. RoyalTech Innovation has become a trusted technology partner for our business.",
  },
  {
    // src: "/reviews/mohit-sir reviews.webp",
    alt: "Google review from Mohit Sankhyan for RoyalTech Innovation",
    name: "Mohit Sankhyan",
    details: "1 review · a week ago",
    rating: 5,
    reviewText:
      "I had Royal Tech Innovation, Mohali develop an ERP for my healthcare business, and honestly, they did a great job. They understood my business requirements very well and developed an excellent ERP accordingly. Their team's work, dedication, and support were very impressive. The overall experience was very good. Thank you so much, Royal Tech Innovation, Mohali, for your amazing work! Highly recommended. 🙌",
  },

  {
    // src: "/reviews/rohit-sir reviews.webp",
    alt: "Google review from Rohit Verma for RoyalTech Innovation",
    name: "Rohit Verma",
    details: "3 reviews · 2 hours ago",
    rating: 5,
    reviewText:
      "Excellent experience with Royal Tech Innovation! The team is highly professional, supportive, and dedicated. They provide quality services with great attention to detail. Highly recommended for anyone looking for reliable and innovative solutions.",
  },
  {
    // src: "/reviews/vk-reviews.webp",
    alt: "Google review from vk for RoyalTech Innovation",
    name: "Vk",
    details: "1 review · 2 hours ago",
    rating: 5,
    reviewText:
      "I had a great experience with Royaltech Innovation. Their team was professional, supportive, and helpful throughout the website development process. They understood my requirements and delivered a website that met my expectations. I really appreciate their work, communication, and dedication. Highly recommended for website development and IT services!",
  },
  {
    // src: "/reviews/ashma-reviews.webp",
    alt: "Google review from Ashman Momi for RoyalTech Innovation",
    name: "Ashman Momi",
    details: "2 hours ago · New",
    rating: 5,
    reviewText:
      "Really happy with my experience at Royal Tech Innovation. The staff is friendly, knowledgeable, and always ready to help. Their dedication and professionalism make them stand out.",
  },
  {
    // src: "/reviews/google-review vikram.webp",
    alt: "Google review from Vikram Singh for RoyalTech Innovation",
    name: "Vikram Singh",
    details: "2 hours ago · New",
    rating: 5,
    reviewText:
      "I had a wonderful experience with Royal Tech Innovation for their digital marketing services. Their team is highly professional, creative, and knowledgeable about the latest digital marketing trends. They took the time to understand my business goals and provided valuable suggestions to improve online visibility, brand awareness, and audience engagement.",
  },
  {
    // src: "/reviews/google-review diya.webp",
    alt: "Google review from Diya for RoyalTech Innovation",
    name: "Diya",
    details: "2 hours ago · New",
    rating: 5,
    reviewText:
      "I had a great experience with Royaltech Innovation. Their IT consulting services were really helpful and professional. The team understood my requirements, provided useful guidance, and helped me with the right solutions. I appreciate their support, knowledge, and dedication. Highly recommended for IT consulting services!",
  },
  {
    // src: "/reviews/google-reviews adab.webp",
    alt: "Google review from Adab Bawa for RoyalTech Innovation",
    name: "Adab Bawa",
    details: "1 review · 2 hours ago · New",
    rating: 5,
    reviewText:
      "I had a great experience with Royal Tech Innovation for their web development services. The management is highly professional, supportive, and understanding. They have a clear vision, excellent coordination, and a very positive approach towards understanding client requirements.",
  },
  {
    // src: "/reviews/google-review dhamu.webp",
    alt: "Google review from Dhamu for RoyalTech Innovation",
    name: "Dhamu",
    details: "2 hours ago · New",
    rating: 5,
    reviewText:
      "I had an excellent experience with Royal Tech Innovation for their web development services. Their team is highly skilled, professional, and dedicated to delivering quality solutions. They demonstrated a clear understanding of my requirements and transformed ideas into a well-structured, modern, and user-friendly website.",
  },
  {
    // src: "/reviews/google-review abhi.webp",
    alt: "Google review from Abhi for RoyalTech Innovation",
    name: "Abhi",
    details: "2 hours ago · New",
    rating: 5,
    reviewText:
      "I had a great experience with Royal Tech Innovation for IT consultancy services. Their team demonstrated strong technical knowledge, professionalism, and a clear understanding of business requirements. They provided valuable guidance, practical recommendations, and effective technology solutions. Communication was smooth, and the overall experience was excellent.",
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
          <h2>What Our Clients Say About RoyalTech Innovation</h2>
          <p className="testimonials-intro">
            Explore genuine client reviews and experiences with RoyalTech Innovation.
            Discover how our website development, custom software development,
            mobile app development, and digital solutions help businesses build
            a stronger digital presence and achieve their goals.
          </p>
        </div>

        {/* <div className="testimonials-carousel">
          <div className="testimonials-controls" aria-label="Review navigation">
            <button
              type="button"
              className="testimonials-arrow"
              aria-label="Previous reviews"
              onClick={() => scrollTestimonials(-1)}
              disabled={!canScrollLeft}
            >
              <span aria-hidden="true"><FaArrowLeftLong className="testimonial-icon" /></span>
            </button>
            <button
              type="button"
              className="testimonials-arrow"
              aria-label="Next reviews"
              onClick={() => scrollTestimonials(1)}
              disabled={!canScrollRight}
            >
              <span aria-hidden="true"><FaArrowRightLong className="testimonial-icon" /></span>
            </button>
          </div>
          <div
            className="testimonials-grid testimonials-reviews"
            ref={testimonialsRef}
          >
            {reviewImages.map((review) => (
              <article
                key={review.src}
                className={`testimonial testimonial-shot${review.reviewText ? " testimonial-text-card" : ""}`}
              >
                <div className="testimonial-review-content">
                  <p className="testimonial-review-details">{review.details}</p>
                  {review.rating && (
                    <p
                      className="testimonial-review-rating"
                      aria-label={`${review.rating} out of 5 stars`}
                    >
                      {"★".repeat(review.rating)}
                    </p>
                  )}
                  <blockquote className="testimonial-text">
                    {review.reviewText}
                  </blockquote>
                  <div className="testimonial-bottom">
                    {review.src && (
                   
                      <div className="testimonial-avatar-fallback">
                        {review.name?.charAt(0).toUpperCase() || "?"}
                      </div>
                    )
                    }
                    <h3 className="testimonial-name">{review.name}</h3>
                  </div>
                </div>
                
              </article>
            ))}
          </div>
        </div> */}

        <div className="swiper-main">
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {reviewImages.map((review,idx) => (
              <SwiperSlide key={idx}>
                <div className="swiper-review-card">
                  <span className="review-stars">
                    {"★".repeat(review.rating || 5)}
                  </span>

                  <p className="review-details">
                    {review.details}
                  </p>

                  <p className="review-description">
                    {review.reviewText}
                  </p>

                  <div className="testimonial-bottom">
                    <div className="testimonial-avatar-fallback">
                      {review.name?.charAt(0).toUpperCase() || "?"}
                    </div>
                    <div className="testimonial-client">

                    <h3>{review.name}</h3>
                    <p>{review.position}</p>
                    </div>
                  </div>


                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
