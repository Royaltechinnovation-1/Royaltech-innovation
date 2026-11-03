import Image from "next/image";

const services = [
  {
    title: "UI/UX Design",
    image: "/service-uiux.jpg",
    tone: "pink",
    text: "Interfaces and brand visuals designed around how your users think—clear flows, polished screens, and a look that feels like your business.",
  },
  {
    title: "Web Development",
    image: "/service-web.jpg",
    tone: "mint",
    text: "Business sites, e-commerce, and custom web builds that load fast, work on every device, and support the goals behind your brand.",
  },
  {
    title: "App Development",
    image: "/service-app.jpg",
    tone: "cyan",
    text: "Android, iOS, and cross-platform apps built for performance and ease of use, from first concept through launch and ongoing updates.",
  },
  {
    title: "Software Development",
    image: "/service-software.jpg",
    tone: "lilac",
    text: "Custom software shaped around your workflows—management tools, automation, and systems that help teams work with less friction.",
  },
  {
    title: "Digital Marketing",
    image: "/service-marketing.jpg",
    tone: "peach",
    text: "SEO, social, and paid campaigns that bring the right audience in—clear messaging, steady leads, and results you can measure.",
  },
  {
    title: "IT Consulting",
    image: "/services-collab.jpg",
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
                  alt=""
                  width={720}
                  height={480}
                  className="offer-image"
                />
              </div>
              <div className="offer-body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a className="offer-link" href="#contact">
                  See our work <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
