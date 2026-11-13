import Image from "next/image";

const leftPoints = [
  {
    title: "Business-First Delivery",
    line: "Built around your goals",
    text: "We start with what your business needs to achieve, then tailor technology that fits your workflows not generic templates.",
  },
  {
    title: "Customized Solutions",
    line: "Tailored to your needs",
    text: "From websites and software to apps and automation, every solution is shaped around your priorities, budget, and growth plans.",
  },
];

const rightPoints = [
  {
    title: "Clear Partnership",
    line: "Transparent from start to finish",
    text: "We communicate openly on scope, timelines, and progress so you always know where things stand and what comes next.",
  },
  {
    title: "Long Term Support",
    line: "Reliable after launch",
    text: "We stay with you beyond go live helping your systems stay dependable as your team, markets, and requirements grow.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why" id="why-us">
      <div className="why-shell">
        <div className="why-head">
          <h2>Why Choose Us</h2>
          <p>
            RoyalTech Innovation helps startups, SMEs, and growing organisations
            move forward with practical technology, clear delivery, and a partner
            you can count on.
          </p>
        </div>

        <div className="why-layout">
          <div className="why-col">
            {leftPoints.map((point) => (
              <article key={point.title} className="why-point">
                <h3>{point.title}</h3>
                <p className="why-line">{point.line}</p>
                <p>{point.text}</p>
              </article>
            ))}
          </div>

          <div className="why-center">
            <Image
              // src="https://res.cloudinary.com/dfzokfvbm/image/upload/v1794312267/remove_the_backgroud_b3e01168_o3m5bi.png"
              src="/CP-67.png"
              alt="RoyalTech Innovation Why Choose Us visual"
              width={840}
              height={840}
              className="why-image"
              unoptimized
            />
          </div>

          <div className="why-col">
            {rightPoints.map((point) => (
              <article key={point.title} className="why-point">
                <h3>{point.title}</h3>
                <p className="why-line">{point.line}</p>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
