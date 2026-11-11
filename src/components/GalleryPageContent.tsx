"use client";

import { OpenFormButton } from "@/components/FormModal";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import "@/styles/gallery.css";

const filters = ["All", "Team", "Events", "Office", "Projects", "Culture"] as const;

type Filter = (typeof filters)[number];

const galleryItems: { src: string; alt: string; category: Exclude<Filter, "All"> }[] = [
  { src: "/gallery/g-01.jpg", alt: "RoyalTech Innovation team celebration", category: "Events" },
  { src: "/gallery/g-02.jpg", alt: "RoyalTech office entrance and branding", category: "Office" },
  { src: "/gallery/g-03.jpg", alt: "Open office workspace at RoyalTech", category: "Office" },
  { src: "/gallery/g-04.jpg", alt: "RoyalTech Innovation wall branding", category: "Office" },
  { src: "/gallery/g-05.jpg", alt: "Team collaborating on a laptop", category: "Team" },
  { src: "/gallery/g-06.jpg", alt: "Culture wall and workplace inspiration", category: "Culture" },
  { src: "/gallery/g-07.jpg", alt: "RoyalTech workstations and desks", category: "Office" },
  { src: "/gallery/g-08.jpg", alt: "RoyalTech branded desk details", category: "Culture" },
  { src: "/gallery/g-09.jpg", alt: "Full team gathering at the office", category: "Team" },
  { src: "/gallery/g-10.jpg", alt: "Team discussion on office sofas", category: "Team" },
  { src: "/gallery/g-11.jpg", alt: "Technology wall message at RoyalTech", category: "Culture" },
  { src: "/gallery/g-12.jpg", alt: "Team celebration with cake", category: "Events" },
  { src: "/gallery/g-13.jpg", alt: "RoyalTech Innovation project moment", category: "Projects" },
  { src: "/gallery/g-14.jpg", alt: "Team collaboration in the studio", category: "Team" },
  { src: "/gallery/g-15.jpg", alt: "Office culture and workspace vibes", category: "Culture" },
  { src: "/gallery/g-16.jpg", alt: "Event day at RoyalTech Innovation", category: "Events" },
  { src: "/gallery/g-17.jpg", alt: "Project review and delivery moment", category: "Projects" },
  { src: "/gallery/g-18.jpg", alt: "Office interior and work area", category: "Office" },
  { src: "/gallery/g-19.jpg", alt: "Team members at RoyalTech", category: "Team" },
  { src: "/gallery/g-20.jpg", alt: "Celebration and company culture", category: "Culture" },
  { src: "/gallery/g-21.jpg", alt: "RoyalTech Innovation event highlight", category: "Events" },
  { src: "/gallery/g-22.jpg", alt: "Project workspace snapshot", category: "Projects" },
  { src: "/gallery/g-23.jpg", alt: "Team working together", category: "Team" },
  { src: "/gallery/g-24.jpg", alt: "Office branding and environment", category: "Office" },
  { src: "/gallery/g-25.jpg", alt: "Culture moment at RoyalTech", category: "Culture" },
  { src: "/gallery/g-26.jpg", alt: "Event photo from RoyalTech", category: "Events" },
  { src: "/gallery/g-27.jpg", alt: "Project delivery celebration", category: "Projects" },
  { src: "/gallery/g-28.jpg", alt: "Team portrait at the office", category: "Team" },
  { src: "/gallery/g-29.jpg", alt: "Office life at RoyalTech Innovation", category: "Office" },
  { src: "/gallery/g-30.jpg", alt: "Culture and community at RoyalTech", category: "Culture" },
];

export default function GalleryPageContent() {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === active),
    [active],
  );

  return (
    <div className="gal">
      <section className="gal-hero" aria-label="Our Gallery">
        <div className="gal-hero-bg" aria-hidden="true">
          <Image
            src="/gallery-hero-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="gal-hero-mesh" aria-hidden="true" />
        <div className="gal-shell gal-hero-grid">
          <div className="gal-hero-copy">
            <p className="gal-badge">Our Gallery</p>
            <h1>
              Moments that <span>Inspire Us</span>
            </h1>
            <p>
              A glimpse into our journey — people, projects and the culture that
              drives RoyalTech.
            </p>
            <a className="gal-hero-btn" href="#gal-heading">
              Explore Gallery <span aria-hidden="true">→</span>
            </a>
            <span className="gal-hero-line" aria-hidden="true" />
          </div>

          <div className="gal-hero-collage" aria-hidden="true">
            <div className="gal-float gal-float-a">
              <Image src="/gallery/g-09.jpg" alt="" fill sizes="280px" />
            </div>
            <div className="gal-float gal-float-b">
              <Image src="/gallery/g-05.jpg" alt="" fill sizes="220px" />
            </div>
            <div className="gal-float gal-float-c">
              <Image src="/gallery/g-07.jpg" alt="" fill sizes="260px" />
            </div>
            <div className="gal-float gal-float-d">
              <Image src="/gallery/g-06.jpg" alt="" fill sizes="200px" />
            </div>
          </div>
        </div>
        <div className="gal-hero-wave" aria-hidden="true" />
      </section>

      <section className="gal-main" aria-labelledby="gal-heading">
        <div className="gal-shell">
          <nav className="gal-crumb" aria-label="Breadcrumb">
            <Link href="/">
              <span aria-hidden="true">⌂</span> Home
            </Link>
            <span aria-hidden="true">›</span>
            <span>Gallery</span>
          </nav>

          <h2 id="gal-heading" className="gal-visually-hidden">
            Gallery photos
          </h2>

          <div className="gal-filters" role="tablist" aria-label="Gallery filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={active === filter}
                className={`gal-filter${active === filter ? " is-active" : ""}`}
                onClick={() => setActive(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="gal-grid">
            {visible.map((item) => (
              <article key={item.src} className="gal-card">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
                <span className="gal-card-tag">{item.category}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gal-cta" aria-labelledby="gal-cta-heading">
        <div className="gal-shell gal-cta-inner">
          <div>
            <p className="gal-badge gal-badge-dark">Be a Part of Our Journey</p>
            <h2 id="gal-cta-heading">Let&apos;s Create, Innovate, and Lead!</h2>
            <p>
              Together, we build solutions that drive a smarter tomorrow.
            </p>
          </div>
          <OpenFormButton
            className="gal-cta-btn"
            title="Get in Touch"
            source="gallery-cta"
          >
            Get in Touch <span aria-hidden="true">→</span>
          </OpenFormButton>
        </div>
      </section>
    </div>
  );
}
