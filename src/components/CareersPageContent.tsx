"use client";

import { OpenFormButton, useFormModal } from "@/components/FormModal";
import { submitLead } from "@/lib/submitLead";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import "@/styles/careers.css";

type Role = {
  id: string;
  title: string;
  city: string;
  location: string;
  type: string;
  experience: string;
  level: string;
  packageLabel: string;
  blurb: string;
  summary: string;
  points: string[];
  image: string;
  imageAlt: string;
};

const roles: Role[] = [
  {
    id: "full-stack",
    title: "Full Stack Developer",
    city: "Mohali",
    location: "On-site",
    type: "Full-Time",
    experience: "2–5 Years",
    level: "Experienced professional",
    packageLabel: "Best in industry",
    image: "/careers/job-full-stack.jpg",
    imageAlt: "Full stack developer coding a web product",
    blurb: "Build end-to-end products with React, Next.js, and Node.js.",
    summary:
      "Own features from API to UI, collaborate with designers and delivery leads, and ship reliable releases for clients across India, the UK, and the UAE.",
    points: [
      "Work on exciting and innovative projects",
      "Collaborate with a talented team",
      "Grow your career with us",
    ],
  },
  {
    id: "front-end",
    title: "Frontend Developer",
    city: "Mohali",
    location: "On-site",
    type: "Full-Time",
    experience: "2–5 Years",
    level: "Experienced professional",
    packageLabel: "Best in industry",
    image: "/careers/job-front-end.jpg",
    imageAlt: "Front-end developer building website interfaces",
    blurb: "Craft fast, accessible interfaces that feel brand-true.",
    summary:
      "Turn designs into polished React experiences and keep every page performant, SEO-ready, and delightful to use.",
    points: [
      "Work on exciting and innovative projects",
      "Collaborate with a talented team",
      "Grow your career with us",
    ],
  },
  {
    id: "backend",
    title: "Backend Developer",
    city: "Mohali",
    location: "On-site",
    type: "Full-Time",
    experience: "2–6 Years",
    level: "Experienced professional",
    packageLabel: "Best in industry",
    image: "/careers/job-backend.jpg",
    imageAlt: "Backend developer working on APIs and databases",
    blurb: "Design secure APIs and scalable business systems.",
    summary:
      "Build reliable services for ERP/CRM platforms and custom software with clean architecture and production-ready quality.",
    points: [
      "Work on exciting and innovative projects",
      "Collaborate with a talented team",
      "Grow your career with us",
    ],
  },
  {
    id: "mobile",
    title: "Mobile App Developer",
    city: "Mohali",
    location: "On-site",
    type: "Full-Time",
    experience: "2–5 Years",
    level: "Experienced professional",
    packageLabel: "Best in industry",
    image: "/careers/job-mobile.jpg",
    imageAlt: "Mobile app developer testing on a smartphone",
    blurb: "Ship Android and iOS apps customers love to use.",
    summary:
      "Partner with product and design to deliver smooth UX, secure APIs, and store-ready mobile releases.",
    points: [
      "Work on exciting and innovative projects",
      "Collaborate with a talented team",
      "Grow your career with us",
    ],
  },
  {
    id: "uiux",
    title: "UI/UX Designer",
    city: "Mohali",
    location: "On-site",
    type: "Full-Time",
    experience: "1–4 Years",
    level: "Career starter",
    packageLabel: "Best in industry",
    image: "/careers/job-uiux.jpg",
    imageAlt: "UI/UX designer creating wireframes and interfaces",
    blurb: "Shape product journeys from wireframes to polished UI.",
    summary:
      "Research users, prototype flows, and hand off clear systems that help engineers ship beautiful, usable digital products.",
    points: [
      "Work on exciting and innovative projects",
      "Collaborate with a talented team",
      "Grow your career with us",
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing Executive",
    city: "Mohali",
    location: "On-site",
    type: "Full-Time",
    experience: "1–4 Years",
    level: "Career starter",
    packageLabel: "Best in industry",
    image: "/careers/job-marketing.jpg",
    imageAlt: "Digital marketer reviewing campaign analytics",
    blurb: "Drive SEO, content, and measurable campaign growth.",
    summary:
      "Connect technical SEO, content, and performance marketing so brands rank, stay visible, and convert searches into customers.",
    points: [
      "Work on exciting and innovative projects",
      "Collaborate with a talented team",
      "Grow your career with us",
    ],
  },
  {
    id: "bd",
    title: "Business Development Executive",
    city: "Mohali",
    location: "On-site",
    type: "Full-Time",
    experience: "1–5 Years",
    level: "Experienced professional",
    packageLabel: "Best in industry",
    image: "/careers/job-bd.jpg",
    imageAlt: "Business development executive meeting a client",
    blurb: "Create opportunities and grow client partnerships.",
    summary:
      "Generate qualified leads for websites, software, apps, and digital marketing, then work with delivery to convert conversations into projects.",
    points: [
      "Work on exciting and innovative projects",
      "Collaborate with a talented team",
      "Grow your career with us",
    ],
  },
  {
    id: "intern",
    title: "Software Development Intern",
    city: "Mohali",
    location: "On-site",
    type: "Internship",
    experience: "0–1 Years",
    level: "Career starter",
    packageLabel: "Stipend based on interview",
    image: "/careers/job-intern.jpg",
    imageAlt: "Software development intern learning with a mentor",
    blurb: "Learn by shipping real client work with mentors.",
    summary:
      "Support web and software projects, pick up modern stack practices, and grow under mentorship from senior engineers in Mohali.",
    points: [
      "Work on exciting and innovative projects",
      "Collaborate with a talented team",
      "Grow your career with us",
    ],
  },
];

const MAX_CV_BYTES = 5 * 1024 * 1024;
const CV_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21s6-5.6 6-10a6 6 0 1 0-12 0c0 4.4 6 10 6 10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="11" r="2" fill="currentColor" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v4.2l2.6 1.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.14" />
      <path
        d="m7.8 12.2 2.8 2.8 5.6-5.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h12M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CareersPageContent() {
  const { showThanks } = useFormModal();
  const [activeId, setActiveId] = useState("uiux");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [cvName, setCvName] = useState("");
  const [consent, setConsent] = useState(false);

  const active = useMemo(
    () => roles.find((role) => role.id === activeId) ?? roles[0],
    [activeId],
  );

  const selectRole = (id: string) => {
    setActiveId(id);
    requestAnimationFrame(() => {
      document.getElementById("role-detail")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (!consent) {
      setError("Please accept the privacy consent to continue.");
      return;
    }

    const data = new FormData(form);
    const first = String(data.get("firstName") || "").trim();
    const last = String(data.get("lastName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const portfolio = String(data.get("portfolio") || "").trim();
    const file = data.get("cv");
    const fileLabel =
      file instanceof File && file.name
        ? file.name
        : cvName || "Not uploaded — will email separately";

    setSending(true);
    setError("");

    try {
      await submitLead({
        name: `${first} ${last}`.trim(),
        email,
        phone,
        service: `Careers — ${active.title}`,
        source: `careers-${active.id}`,
        message: [
          `Career application for ${active.title}`,
          `Location preference noted: ${active.location}`,
          portfolio ? `Portfolio / LinkedIn: ${portfolio}` : "Portfolio / LinkedIn: —",
          `CV: ${fileLabel}`,
          "Please follow up for interview scheduling.",
        ].join("\n"),
      });
      form.reset();
      setCvName("");
      setConsent(false);
      showThanks();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="cr">
      <section className="cr-hero" aria-label="Careers at RoyalTech Innovation">
        <div className="cr-shell cr-hero-copy">
          <p className="cr-badge">Your Trusted IT Solutions Partner</p>
          <h1>Be part of a dynamic team shaping the next era of technology.</h1>
          <p>
            Join RoyalTech Innovation in Mohali and help build websites, software,
            apps, and digital experiences for growing businesses.
          </p>
          <div className="cr-hero-actions">
            <a className="cr-btn cr-btn-lime" href="#openings">
              Open Positions <span aria-hidden="true">→</span>
            </a>
            <a className="cr-btn cr-btn-ghost" href="#role-detail">
              <span className="cr-play" aria-hidden="true">
                ▶
              </span>
              Watch Our Culture
            </a>
          </div>
        </div>
      </section>

      <section className="cr-openings" id="openings" aria-label="Job openings">
        <div className="cr-shell">
          <div className="cr-section-head">
            <div>
              <p className="cr-kicker">Our Careers</p>
              <h2>{roles.length} current job offers</h2>
            </div>
            <a className="cr-text-link" href="#role-detail">
              View All Careers <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="cr-grid">
            {roles.map((role) => {
              const selected = role.id === active.id;
              return (
                <button
                  key={role.id}
                  type="button"
                  className={`cr-card${selected ? " is-active" : ""}`}
                  onClick={() => selectRole(role.id)}
                  aria-pressed={selected}
                >
                  <div className="cr-card-media">
                    <Image
                      src={role.image}
                      alt={role.imageAlt}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />
                    <span className="cr-type">{role.type}</span>
                  </div>
                  <div className="cr-card-body">
                    <h3>{role.title}</h3>
                    <p>{role.blurb}</p>
                    <div className="cr-card-foot">
                      <div className="cr-card-meta">
                        <span>
                          <PinIcon /> {role.location}
                        </span>
                        <span>
                          <ClockIcon /> {role.experience}
                        </span>
                      </div>
                      <span className="cr-card-go" aria-hidden="true">
                        <ArrowIcon />
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cr-join" id="role-detail" aria-label="Selected role details">
        <div className="cr-shell cr-join-grid">
          <div className="cr-join-copy">
            <p className="cr-kicker">Join Our Team</p>
            <h2>{active.title}</h2>
            <p className="cr-join-summary">{active.summary}</p>
            <ul className="cr-checks">
              {active.points.map((point) => (
                <li key={point}>
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="cr-join-meta">
              <span>{active.location}</span>
              <span>{active.type}</span>
              <span>{active.experience}</span>
              <span>{active.packageLabel}</span>
            </div>
            <a className="cr-btn cr-btn-lime" href="#apply">
              Apply Now <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="cr-join-visual">
            <div className="cr-join-frame">
              <Image
                src={active.image}
                alt={active.imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cr-apply" id="apply" aria-label="Application form">
        <div className="cr-shell">
          <div className="cr-panel">
            <div className="cr-panel-head">
              <p className="cr-kicker is-light">Apply Now</p>
              <h2>Apply for {active.title}</h2>
              <p>
                Tell us about yourself. We review every application and respond to
                shortlisted candidates for on-site roles in Mohali.
              </p>
            </div>

            <form className="cr-form" onSubmit={onSubmit} noValidate>
              <div className="cr-fields">
                <label className="cr-field">
                  <span>Full Name</span>
                  <input name="firstName" type="text" autoComplete="given-name" required />
                </label>
                <label className="cr-field">
                  <span>Last Name</span>
                  <input name="lastName" type="text" autoComplete="family-name" required />
                </label>
                <label className="cr-field">
                  <span>Email</span>
                  <input name="email" type="email" autoComplete="email" required />
                </label>
                <label className="cr-field">
                  <span>Phone</span>
                  <input name="phone" type="tel" autoComplete="tel" required />
                </label>
                <label className="cr-field cr-field-wide">
                  <span>Portfolio / LinkedIn URL</span>
                  <input name="portfolio" type="url" placeholder="https://" />
                </label>
              </div>

              <div className="cr-upload-row">
                <label className="cr-upload">
                  <input
                    name="cv"
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (!file) {
                        setCvName("");
                        return;
                      }
                      if (file.size > MAX_CV_BYTES) {
                        setError("CV must be 5MB or smaller.");
                        event.target.value = "";
                        setCvName("");
                        return;
                      }
                      if (file.type && !CV_TYPES.has(file.type)) {
                        setError("Supported CV files: PDF, DOC, DOCX.");
                        event.target.value = "";
                        setCvName("");
                        return;
                      }
                      setError("");
                      setCvName(file.name);
                    }}
                  />
                  <span>{cvName ? "Change CV" : "Upload CV"}</span>
                </label>
                <p className="cr-upload-note">
                  {cvName
                    ? `Selected: ${cvName}. After submit, also email the file to info@royaltechinnovation.`
                    : "Supported files: pdf, doc, docx (max 5mb). Email the CV to info@royaltechinnovation after applying."}
                </p>
              </div>

              <label className="cr-consent">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                />
                <span>
                  I consent to RoyalTech Innovation processing my application data
                  for recruitment as described in the{" "}
                  <Link href="/privacy">Privacy Policy</Link>.
                </span>
              </label>

              {error ? <p className="cr-error">{error}</p> : null}

              <button className="cr-submit" type="submit" disabled={sending}>
                {sending ? "Submitting…" : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="cr-session" aria-label="Book a session">
        <div className="cr-shell cr-session-card">
          <div className="cr-session-copy">
            <p className="cr-session-eyebrow">Be a part of our journey</p>
            <h2>Book a session with our experts!</h2>
            <p>
              Get personalized guidance and discover the right opportunities for
              you.
            </p>
          </div>
          <OpenFormButton
            className="cr-btn cr-btn-lime"
            title="Book a careers session"
            source="careers-chat"
            service="Careers"
          >
            Book a Session <span aria-hidden="true">→</span>
          </OpenFormButton>
        </div>
      </section>
    </div>
  );
}
