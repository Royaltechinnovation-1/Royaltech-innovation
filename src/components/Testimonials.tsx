const items = [
  {
    quote:
      "Excellent service from start to finish. The team understood our requirements clearly and delivered the project on time. Their communication was great throughout the process. Highly recommended!",
    name: "Rajesh Kumar",
    role: "Operations Manager",
    company: "Potent",
    initials: "RK",
  },
  {
    quote:
      "We approached them for our cloud migration and it was the best decision. The team was professional and handled everything smoothly. Zero downtime and great post-project support.",
    name: "Priya Sharma",
    role: "IT Head",
    company: "Potent",
    initials: "PS",
  },
  {
    quote:
      "Very responsive and reliable IT partner. They fixed our system issues quickly and suggested improvements we hadn't thought of. Their support team is always available when needed.",
    name: "Arun Patel",
    role: "Business Owner",
    company: "Potent",
    initials: "AP",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-shell">
        <div className="testimonials-head">
          <p className="testimonials-label">Testimonials</p>
          <h2>Trusted by teams who expect clarity and delivery</h2>
          <p className="testimonials-intro">
            Real feedback from partners who built with RoyalTech Innovation.
          </p>
        </div>

        <div className="testimonials-grid">
          {items.map((item) => (
            <article key={item.name} className="testimonial">
              <div className="testimonial-top">
                <span className="testimonial-mark" aria-hidden="true">
                  “
                </span>
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
              </div>

              <p className="testimonial-quote">{item.quote}</p>

              <div className="testimonial-person">
                <span className="testimonial-avatar" aria-hidden="true">
                  {item.initials}
                </span>
                <div>
                  <p className="testimonial-name">{item.name}</p>
                  <p className="testimonial-role">{item.role}</p>
                  <p className="testimonial-company">{item.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
