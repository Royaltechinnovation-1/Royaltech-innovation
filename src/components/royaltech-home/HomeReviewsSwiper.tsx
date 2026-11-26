"use client";

import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

type ReviewItem = {
  name: string;
  position: string;
  details: string;
  rating: number;
  reviewText: string;
  avatarColor: string;
};

const clientReviews: ReviewItem[] = [
  {
    name: "Ashman Momi",
    position: "Business Consultant",
    details: "2 hours ago · New",
    rating: 5,
    reviewText:
      "Really happy with my experience at Royal Tech Innovation. The staff is friendly, knowledgeable, and always ready to help. Their dedication and professionalism make them stand out.",
    avatarColor: "bg-emerald-100 text-emerald-800",
  },
  {
    name: "Michael Thompson",
    position: "Founder, NextGen Enterprises · Australia",
    details: "1 review · a week ago",
    rating: 5,
    reviewText:
      "RoyalTech Innovation demonstrated outstanding technical expertise from planning to implementation. They understood our business vision and delivered a reliable digital solution. Their professionalism, attention to detail, and timely delivery exceeded our expectations.",
    avatarColor: "bg-blue-100 text-blue-800",
  },
  {
    name: "Sophia Williams",
    position: "Operations Head, Global Business Group · UAE",
    details: "1 review · new",
    rating: 5,
    reviewText:
      "RoyalTech Innovation transformed the way we manage our business operations. Their team delivered excellent technical solutions with great communication and professionalism. We truly appreciate their dedication, quality of work, and commitment to delivering results.",
    avatarColor: "bg-purple-100 text-purple-800",
  },
  {
    name: "Mohit Sankhyan",
    position: "Founder, Healthcare Solutions",
    details: "1 review · a week ago",
    rating: 5,
    reviewText:
      "I had Royal Tech Innovation develop an ERP for my healthcare business, and honestly, they did a great job. They understood my business requirements very well and developed an excellent ERP accordingly. Highly recommended!",
    avatarColor: "bg-amber-100 text-amber-800",
  },
  {
    name: "Sarah Mitchell",
    position: "Managing Director, TechVision Inc. · USA",
    details: "2 reviews · a week ago",
    rating: 5,
    reviewText:
      "Working with RoyalTech Innovation was a wonderful experience. Their software solution streamlined our workflow and significantly improved productivity. The team understood our requirements perfectly and provided outstanding support throughout the project.",
    avatarColor: "bg-rose-100 text-rose-800",
  },
  {
    name: "James Anderson",
    position: "CEO, Anderson Digital Solutions · UK",
    details: "1 review · a week ago",
    rating: 5,
    reviewText:
      "Their CRM and ERP solutions helped us simplify complex business operations and improve efficiency. The team was highly professional, responsive, and supportive throughout the process. RoyalTech Innovation has become a trusted technology partner.",
    avatarColor: "bg-cyan-100 text-cyan-800",
  },
  {
    name: "Rohit Verma",
    position: "Business Development Professional",
    details: "3 reviews · 2 hours ago",
    rating: 5,
    reviewText:
      "Excellent experience with Royal Tech Innovation! The team is highly professional, supportive, and dedicated. They provide quality services with great attention to detail. Highly recommended for anyone looking for reliable and innovative solutions.",
    avatarColor: "bg-indigo-100 text-indigo-800",
  },
  {
    name: "Vikram Singh",
    position: "Business Professional",
    details: "2 hours ago · New",
    rating: 5,
    reviewText:
      "I had a wonderful experience with Royal Tech Innovation for their digital marketing services. Their team is highly professional, creative, and knowledgeable about the latest trends. They took the time to understand my business goals and delivered amazing results.",
    avatarColor: "bg-teal-100 text-teal-800",
  },
  {
    name: "Diya",
    position: "Founder, Growth Marketing",
    details: "2 hours ago · New",
    rating: 5,
    reviewText:
      "I had a great experience with Royaltech Innovation. Their IT consulting services were really helpful and professional. The team understood my requirements, provided useful guidance, and helped me with the right solutions. Highly recommended!",
    avatarColor: "bg-fuchsia-100 text-fuchsia-800",
  },
  {
    name: "Adab Bawa",
    position: "Operations Manager",
    details: "1 review · 2 hours ago · New",
    rating: 5,
    reviewText:
      "I had a great experience with Royal Tech Innovation for their web development services. The management is highly professional, supportive, and understanding. They have a clear vision, excellent coordination, and a very positive approach towards client requirements.",
    avatarColor: "bg-sky-100 text-sky-800",
  },
  {
    name: "Dhamu",
    position: "Technology Consultant",
    details: "2 hours ago · New",
    rating: 5,
    reviewText:
      "I had an excellent experience with Royal Tech Innovation for their web development services. Their team is highly skilled, professional, and dedicated to delivering quality solutions. They transformed ideas into a modern, user-friendly website.",
    avatarColor: "bg-lime-100 text-lime-800",
  },
  {
    name: "Abhi",
    position: "Founder, Digital Ventures",
    details: "2 hours ago · New",
    rating: 5,
    reviewText:
      "I had a great experience with Royal Tech Innovation for IT consultancy services. Their team demonstrated strong technical knowledge, professionalism, and practical recommendations. Communication was smooth, and the overall experience was excellent.",
    avatarColor: "bg-orange-100 text-orange-800",
  },
  {
    name: "Vk",
    position: "Marketing Consultant",
    details: "1 review · 2 hours ago",
    rating: 5,
    reviewText:
      "I had a great experience with Royaltech Innovation. Their team was professional, supportive, and helpful throughout the website development process. They understood my requirements and delivered a website that exceeded my expectations.",
    avatarColor: "bg-emerald-100 text-emerald-800",
  },
];

export default function HomeReviewsSwiper() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="reviews" className="py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="page-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14">
          {/* Left Column: Heading, Badge, Description & Navigation */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-[0.22em] text-[#b7c879] uppercase pb-1.5 border-b-2 border-[#b7c879]/70 sm:text-sm">
                TESTIMONIALS
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[2.85rem] lg:leading-[1.18]">
              What Our Clients Say About{" "}
              <span className="text-[#67e8f9]">RoyalTech Innovation</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg sm:leading-relaxed">
              Explore genuine client reviews and experiences with RoyalTech Innovation. Discover how our website development, custom software development, mobile app development, and digital solutions help businesses build a stronger digital presence and achieve their goals.
            </p>

            {/* Navigation buttons */}
            <div className="mt-8 flex items-center gap-4 sm:mt-10">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition hover:border-[#67e8f9] hover:bg-[#67e8f9]/15 hover:text-[#67e8f9] active:scale-95"
                aria-label="Previous review"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition hover:border-[#67e8f9] hover:bg-[#67e8f9]/15 hover:text-[#67e8f9] active:scale-95"
                aria-label="Next review"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <span className="text-xs tracking-wider text-white/50 uppercase font-medium">
                Review {activeIndex + 1} of {clientReviews.length} · Swipe to explore
              </span>
            </div>
          </div>

          {/* Right Column: Swiper Cards Effect */}
          <div className="lg:col-span-5 flex justify-center items-center py-4 sm:py-6">
            <div className="w-full max-w-[340px] sm:max-w-[370px]">
              <Swiper
                effect="cards"
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                cardsEffect={{
                  perSlideOffset: 9,
                  perSlideRotate: 2.5,
                  rotate: true,
                  slideShadows: false,
                }}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex);
                }}
                className="home-cards-swiper"
              >
                {clientReviews.map((review, idx) => (
                  <SwiperSlide key={idx} className="!rounded-[1.75rem] overflow-hidden">
                    <div className="flex h-[420px] sm:h-[430px] w-full flex-col justify-between rounded-[1.75rem] border border-gray-100 bg-white p-6 sm:p-7 shadow-[0_24px_55px_-12px_rgba(0,0,0,0.35)] transition-all">
                      {/* Top: Rating stars & details */}
                      <div>
                        <div
                          className="flex items-center gap-1 text-[#f59e0b] text-lg sm:text-xl tracking-widest"
                          role="img"
                          aria-label={`${review.rating} out of 5 stars`}
                        >
                          {"★".repeat(review.rating || 5)}
                        </div>

                        <p className="mt-1.5 text-xs font-medium text-gray-400">
                          {review.details}
                        </p>

                        <p className="mt-4 text-[0.92rem] sm:text-[0.95rem] font-normal leading-relaxed text-gray-700">
                          {review.reviewText}
                        </p>
                      </div>

                      {/* Bottom: Reviewer avatar, name & position */}
                      <div className="mt-6 flex items-center gap-3.5 pt-4 border-t border-gray-100/90">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-bold text-sm sm:text-base ${review.avatarColor}`}
                        >
                          {review.name?.charAt(0).toUpperCase() || "?"}
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm sm:text-[0.95rem] font-bold text-gray-900 truncate">
                            {review.name}
                          </h4>
                          <p className="text-xs text-gray-500 font-medium truncate mt-0.5">
                            {review.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .home-cards-swiper {
          width: 100%;
          padding: 24px 10px;
          overflow: visible !important;
        }
        .home-cards-swiper .swiper-slide {
          border-radius: 1.75rem !important;
          background: transparent !important;
        }
        .home-cards-swiper .swiper-slide-shadow {
          border-radius: 1.75rem !important;
        }
      `}</style>
    </section>
  );
}
