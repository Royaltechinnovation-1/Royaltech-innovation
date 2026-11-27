"use client";

import { OpenFormButton } from "@/components/FormModal";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "@/styles/gallery.css";
import "@/styles/gallery-responsive.css";
import { GoHome } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";

const filters = ["All", "Team", "Office", "Projects", "Culture"] as const;

/* Photos shown in the hero slider. */
const heroSlides: Shot[] = [
  { src: "/gallery/g-09.jpg", alt: "Full team gathering at the office" },
  { src: "/gallery/g-05.jpg", alt: "Team collaborating on a laptop" },
  { src: "/gallery/g-07.jpg", alt: "RoyalTech workstations and desks" },
  { src: "/gallery/g-06.jpg", alt: "Culture wall and workplace inspiration" },
  { src: "/gallery/g-10.jpg", alt: "Team discussion on office sofas" },
  { src: "/gallery/g-28.jpg", alt: "Team portrait at the office" },
  { src: "/gallery/g-29.jpg", alt: "Office life at RoyalTech Innovation" },
];

type Shot = { src: string; alt: string };

/* Hero slider: several photos side by side, auto-advancing, with arrows, dots and swipe. */
function HeroSlider({ shots, onOpen }: { shots: Shot[]; onOpen: (shot: Shot) => void }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    const viewport = viewportRef.current;
    const slide = viewport?.children[index] as HTMLElement | undefined;
    if (viewport && slide) {
      viewport.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    }
  }, []);

  /* Keep the dots in step with the slide that is at the left edge. */
  const onScroll = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    /* At the far end the last photos cannot reach the left edge, so the last dot is the one lit. */
    if (viewport.scrollLeft >= viewport.scrollWidth - viewport.clientWidth - 4) {
      setActive(viewport.children.length - 1);
      return;
    }
    let nearest = 0;
    let best = Number.POSITIVE_INFINITY;
    Array.from(viewport.children).forEach((child, index) => {
      const distance = Math.abs((child as HTMLElement).offsetLeft - viewport.scrollLeft);
      if (distance < best) {
        best = distance;
        nearest = index;
      }
    });
    setActive(nearest);
  };

  /* Auto-advance every few seconds; wraps back to the first photo. */
  useEffect(() => {
    if (paused || shots.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => {
      goTo((active + 1) % shots.length);
    }, 3800);
    return () => window.clearTimeout(timer);
  }, [active, paused, shots.length, goTo]);

  const step = (direction: 1 | -1) => {
    const next = (active + direction + shots.length) % shots.length;
    goTo(next);
  };

  return (
    <div
      className="gal-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="gal-slider-viewport" ref={viewportRef} onScroll={onScroll}>
        {shots.map((shot) => (
          <button
            key={shot.src}
            type="button"
            className="gal-slide"
            aria-label={shot.alt}
            onClick={() => onOpen(shot)}
          >
            <Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 640px) 45vw, 25vw" />
          </button>
        ))}
      </div>

      <button type="button" className="gal-slider-arrow is-prev" aria-label="Previous photo" onClick={() => step(-1)}>
        ‹
      </button>
      <button type="button" className="gal-slider-arrow is-next" aria-label="Next photo" onClick={() => step(1)}>
        ›
      </button>

      <div className="gal-slider-dots" role="group" aria-label="Choose photo">
        {shots.map((shot, index) => (
          <button
            key={shot.src}
            type="button"
            className={`gal-slider-dot${index === active ? " is-active" : ""}`}
            aria-label={`Show photo ${index + 1}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

/* Photos measured from the files: most are portrait (960x1280), these two are landscape (1280x960). */
const landscapeFiles = new Set(["/gallery/g-04.jpg", "/gallery/g-16.jpg"]);

/* Each tile takes its photo's own shape, so nothing is cropped or padded. */
const tileRatio = (src: string) => (landscapeFiles.has(src) ? "4 / 3" : "3 / 4");

/* Tile height for a width of 1 (used to balance the columns). */
const tileHeight = (src: string) => (landscapeFiles.has(src) ? 3 / 4 : 4 / 3);

/* Column count per screen width. Matches the breakpoints in gallery-responsive.css. */
function columnsForWidth(width: number) {
  if (width <= 640) return 1;
  if (width <= 1100) return 2;
  if (width >= 2200) return 5;
  if (width >= 1600) return 4;
  return 3;
}

function useColumnCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const update = () => setCount(columnsForWidth(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

/* Deal each photo into the currently shortest column, so the columns end level. */
function balanceColumns(items: GalleryItem[], count: number): GalleryItem[][] {
  const columns: GalleryItem[][] = Array.from({ length: count }, () => []);
  const heights = new Array<number>(count).fill(0);
  for (const item of items) {
    let target = 0;
    for (let i = 1; i < count; i++) {
      if (heights[i] < heights[target]) target = i;
    }
    columns[target].push(item);
    heights[target] += tileHeight(item.src);
  }
  return columns;
}

const filterLabel: Record<(typeof filters)[number], string> = {
  All: "All Photos",
  Team: "Team",
  Office: "Office",
  Projects: "Projects",
  Culture: "Culture",
};

type Filter = (typeof filters)[number];

type GalleryItem = { src: string; alt: string; category: Exclude<Filter, "All"> };

const galleryItems: GalleryItem[] = [
  { src: "/gallery/g-01.jpg", alt: "RoyalTech Innovation team celebration", category: "Team" },
  { src: "/gallery/g-02.jpg", alt: "RoyalTech office entrance and branding", category: "Team" },
  { src: "/gallery/g-27.jpg", alt: "Project delivery celebration", category: "Culture" },
  // { src: "/gallery/g-03.jpg", alt: "Open office workspace at RoyalTech", category: "Office" },
  // { src: "/gallery/g-04.jpg", alt: "RoyalTech Innovation wall branding", category: "Office" },
  // { src: "/gallery/g-05.jpg", alt: "Team collaborating on a laptop", category: "Team" },
  { src: "/gallery/g-06.jpg", alt: "Culture wall and workplace inspiration", category: "Team" },
  { src: "/gallery/g-07.jpg", alt: "RoyalTech workstations and desks", category: "Team" },
  // { src: "/gallery/g-08.jpg", alt: "RoyalTech branded desk details", category: "Culture" },
  // { src: "/gallery/g-09.jpg", alt: "Full team gathering at the office", category: "Team" },
  { src: "/gallery/g-10.jpg", alt: "Team discussion on office sofas", category: "Team" },
  { src: "/gallery/g-11.jpg", alt: "Technology wall message at RoyalTech", category: "Team" },
  // { src: "/gallery/g-12.jpg", alt: "Team celebration with cake", category: "Events" },
  { src: "/gallery/g-13.jpg", alt: "RoyalTech Innovation project moment", category: "Projects" },
  // { src: "/gallery/g-14.jpg", alt: "Team collaboration in the studio", category: "Team" },
  // { src: "/gallery/g-15.jpg", alt: "Office culture and workspace vibes", category: "Culture" },
  // { src: "/gallery/g-16.jpg", alt: "Event day at RoyalTech Innovation", category: "Events" },
  { src: "/gallery/g-17.jpg", alt: "Project review and delivery moment", category: "Culture" },
  // { src: "/gallery/g-18.jpg", alt: "Office interior and work area", category: "Office" },
  // { src: "/gallery/g-19.jpg", alt: "Team members at RoyalTech", category: "Team" },
  { src: "/gallery/g-20.jpg", alt: "Celebration and company culture", category: "Team" },
  // { src: "/gallery/g-21.jpg", alt: "RoyalTech Innovation event highlight", category: "Events" },
  // { src: "/gallery/g-22.jpg", alt: "Project workspace snapshot", category: "Projects" },
  // { src: "/gallery/g-23.jpg", alt: "Team working together", category: "Team" },
  // { src: "/gallery/g-24.jpg", alt: "Office branding and environment", category: "Office" },
  // { src: "/gallery/g-25.jpg", alt: "Culture moment at RoyalTech", category: "Culture" },
  // { src: "/gallery/g-26.jpg", alt: "Event photo from RoyalTech", category: "Events" },
  { src: "/gallery/g-28.jpg", alt: "Team portrait at the office", category: "Team" },
  { src: "/gallery/g-29.jpg", alt: "Office life at RoyalTech Innovation", category: "Team" },
  { src: "/gallery/g-30.jpg", alt: "Culture and community at RoyalTech", category: "Team" },
];

export default function GalleryPageContent() {
  const [active, setActive] = useState<Filter>("All");
  const [open, setOpen] = useState<{ src: string; alt: string } | null>(null);
  const columnCount = useColumnCount();

  const visible = useMemo(
    () =>
      active === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === active),
    [active],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

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

          <div className="gal-hero-slider">
            <HeroSlider shots={heroSlides} onOpen={setOpen} />
          </div>
        </div>
        <div className="gal-hero-wave" aria-hidden="true" />
      </section>

      <section className="gal-main" aria-labelledby="gal-heading">
        <div className="gal-shell">
          <div className="gal-bar">
            <nav className="gal-crumb" aria-label="Breadcrumb">
              <Link href="/">
                <span aria-hidden="true" className="gallery-breadcrum"><GoHome style={{marginRight:"5px",width:"16px",height:"16px"}}/> Home</span>
              </Link>
              <span aria-hidden="true"><FaChevronRight className="gallery-chevron"/> Gallery</span>
            </nav>

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
                  {filterLabel[filter]}
                </button>
              ))}
            </div>

            <p className="gal-count">{visible.length} Moments</p>
          </div>

          <h2 id="gal-heading" className="gal-visually-hidden">
            Gallery photos
          </h2>

          <div className="gal-grid">
            {balanceColumns(visible, columnCount).map((column, columnIndex) => (
              <div className="gal-col" key={columnIndex}>
                {column.map((item) => (
                  <button
                    key={item.src}
                    type="button"
                    className="gal-card"
                    style={{ aspectRatio: tileRatio(item.src) }}
                    onClick={() => setOpen(item)}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="gal-card-img"
                      sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 40vw"
                    />
                    <span className="gal-card-tag">{item.category}</span>
                    <span className="gal-card-view">View Photo →</span>
                  </button>
                ))}
              </div>
            ))}
          </div>

          {open ? (
            <div
              className="gal-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={open.alt}
              onClick={() => setOpen(null)}
            >
              <button type="button" className="gal-lightbox-close" onClick={() => setOpen(null)}>
                Close
              </button>
              {/* Native img so the popup scales the whole photo, with no crop. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="gal-lightbox-img"
                src={open.src}
                alt={open.alt}
                onClick={(event) => event.stopPropagation()}
              />
            </div>
          ) : null}
        </div>
      </section>

      <section className="gal-cta" aria-labelledby="gal-cta-heading">
        <div className="gal-cta-bg" aria-hidden="true">
          <Image
            src="https://res.cloudinary.com/ugqc5gb8/image/upload/v1795730335/Midnight_Glass_Corporate_Campus.png"
            alt=""
            fill
            sizes="100vw"
          />
        </div>
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
