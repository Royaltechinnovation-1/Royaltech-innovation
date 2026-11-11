import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    category: "E-commerce",
    title: "Modern E-Commerce Website",
    image: "/collage-web.jpg",
    alt: "E-commerce website project showcase",
  },
  {
    category: "Mobile",
    title: "Mobile App Solution",
    image: "/collage-app.jpg",
    alt: "Mobile application project showcase",
  },
  {
    category: "Business Software",
    title: "Business Management Portal",
    image: "/collage-software.jpg",
    alt: "Business software portal showcase",
  },
  {
    category: "Brand & Marketing",
    title: "Digital Brand Experience",
    image: "/collage-marketing.jpg",
    alt: "Brand and digital marketing project showcase",
  },
];

export default function Portfolio() {
  return (
    <section className="hm-projects" id="portfolio" aria-labelledby="projects-heading">
      <div className="hm-shell">
        <div className="hm-projects-head">
          <div>
            <p className="hm-eyebrow">Recent Projects</p>
            <h2 className="hm-title" id="projects-heading">
              Work That Helps Brands Grow Online
            </h2>
            <p className="hm-lead">
              Websites, apps, software, and digital experiences built for
              performance, usability, and search visibility.
            </p>
          </div>
          <Link className="hm-btn hm-btn-ghost-dark" href="/portfolio">
            View Portfolio
          </Link>
        </div>

        <div className="hm-projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="hm-project">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
              />
              <div className="hm-project-shade" aria-hidden="true" />
              <div className="hm-project-copy">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
