const industries = [
  {
    name: "Healthcare",
    path: "M12 4v16M4 12h16",
  },
  {
    name: "Hospitality",
    path: "M4 20V9l8-5 8 5v11M9 20v-6h6v6",
  },
  {
    name: "E-commerce",
    path: "M6 7h15l-1.5 8H8L6 7Zm0 0L5 4H2m6 15a1 1 0 1 0 0.01 0M17 19a1 1 0 1 0 0.01 0",
  },
  {
    name: "Manufacturing",
    path: "M3 20h18M5 20V10l5 3V10l5 3V8l4-2v14",
  },
  {
    name: "Education",
    path: "M3 9l9-5 9 5-9 5-9-5Zm0 6 9 5 9-5M3 12l9 5 9-5",
  },
  {
    name: "Corporate",
    path: "M4 20V5h7v15M11 9h9v11M7 8h1M7 11h1M7 14h1M14 12h2M14 15h2",
  },
];

export default function Industries() {
  return (
    <section
      className="hm-industries"
      id="industries"
      aria-labelledby="industries-heading"
    >
      <div className="hm-shell">
        <div className="hm-industries-head">
          <p className="hm-eyebrow">Industries We Serve</p>
          <h2 className="hm-title" id="industries-heading">
            Technology Built for Real-World Sectors
          </h2>
        </div>

        <div className="hm-industries-grid">
          {industries.map((industry) => (
            <article key={industry.name} className="hm-industry">
              <span className="hm-industry-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                  <path
                    d={industry.path}
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>{industry.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
