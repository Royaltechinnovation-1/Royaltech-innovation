"use client";

import { OpenFormButton } from "@/components/FormModal";
import Image from "next/image";

const services = [
  {
    title: "UI/UX Design",
    image: "/UI_UX Design.png",
    tone: "pink",
    text: "Interfaces and brand visuals designed around how your users think—clear flows, polished screens, and a look that feels like your business.",
  },
  {
    title: "Web Development",
    image: "/Web Devlopment.png",
    tone: "mint",
    text: "Business sites, e-commerce, and custom web builds that load fast, work on every device, and support the goals behind your brand.",
  },
  {
    title: "App Development",
    image: "/App Devlopment.png",
    tone: "cyan",
    text: "Android, iOS, and cross-platform apps built for performance and ease of use, from first concept through launch and ongoing updates.",
  },
  {
    title: "Software Development",
    image: "/Software Devlopment.png",
    tone: "lilac",
    text: "Custom software shaped around your workflows—management tools, automation, and systems that help teams work with less friction.",
  },
  {
    title: "Digital Marketing",
    image: "/Digital Marketing.png",
    tone: "peach",
    text: "SEO, social, and paid campaigns that bring the right audience in—clear messaging, steady leads, and results you can measure.",
  },
  {
    title: "IT Consulting",
    image: "https://res.cloudinary.com/ugqc5gb8/image/upload/v1794465990/IT_Consulting.jpg",
    tone: "sky",
    text: "Strategy, automation, and technical guidance that help you choose the right systems and keep them reliable as you grow.",
  },
];

export default function Services() {
  return (
    <section className="offer" id="services">
      <div className="offer-shell">
        <div className="offer-head">
          <p className="offer-label">Services We Offer</p>
          <h2>End-to-end digital solutions for growing businesses</h2>
        </div>

        <div className="offer-grid">
          {services.map((service) => (
            <article
              key={service.title}
              className={`offer-card offer-tone-${service.tone}`}
            >
              <div className="offer-media">
                <Image
                  src={service.image}
                  alt={`${service.title} services by RoyalTech Innovation`}
                  width={720}
                  height={480}
                  className="offer-image"
                  sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                />
              </div>
              <div className="offer-body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <OpenFormButton
                  className="offer-link"
                  title={`Learn more · ${service.title}`}
                  source="home-services-learn-more"
                  service={service.title}
                >
                  Learn more <span aria-hidden="true">→</span>
                </OpenFormButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
