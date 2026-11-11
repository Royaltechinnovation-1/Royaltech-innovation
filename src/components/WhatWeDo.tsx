import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Discover",
    text: "We learn your goals, challenges, and what success looks like—so priorities are clear before any build begins.",
    image: "/Logo.png",
  },
  {
    num: "02",
    title: "Plan & Design",
    text: "We map timelines, budget, architecture, and experience into a roadmap you can review and approve.",
    image: "/Plan-Design.jpeg",
  },
  {
    num: "03",
    title: "Build",
    text: "We develop with modern tools and clean practices so websites, software, and apps fit how you work.",
    image: "/Build-website-development.jpeg",
  },
  {
    num: "04",
    title: "Testing",
    text: "We check quality, performance, and usability across devices—so issues are caught before go-live.",
    image: "/Testing.png",
  },
  {
    num: "05",
    title: "Launch",
    text: "We deploy carefully, train your team, and stay available after go-live as your needs grow.",
    image: "/CRM.png",
  },
];

export default function WhatWeDo() {
  return (
    <section className="what" id="process">
      <div className="what-shell">
        <div className="what-top">
          <div className="what-copy">
            <p className="what-label">What We Do</p>
            <h2>Where continuous innovation meets operational excellence</h2>
            <p className="what-text">
              RoyalTech Innovation helps businesses transform, grow, and succeed
              with practical technology. We design, build, and support digital
              solutions that fit how you work—and scale as you grow.
            </p>
            <p className="what-text">
              From websites and custom software to mobile apps, digital marketing,
              UI/UX design, and IT consulting, we focus on clear outcomes: a
              stronger digital presence, smoother operations, and technology your
              team can rely on every day.
            </p>
            <p className="what-text">
              Every engagement follows a simple path—discover, plan, build, test,
              and launch—so startups, SMEs, and established organisations get
              dependable delivery without unnecessary complexity.
            </p>
          </div>

          <figure className="what-media">
            <Image
              src="/what-we-do-tiles.jpg"
              alt="Scrabble tiles spelling What You Do Matters"
              width={800}
              height={800}
              className="what-image"
              priority={false}
            />
          </figure>
        </div>

        <div className="what-steps">
          {steps.map((step) => (
            <article key={step.num} className="what-step">
              <div className="what-step-visual">
                <Image
                  src={step.image}
                  alt=""
                  width={720}
                  height={480}
                  className="what-step-image"
                />
              </div>
              <span className="what-num" aria-hidden="true">
                {step.num}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
