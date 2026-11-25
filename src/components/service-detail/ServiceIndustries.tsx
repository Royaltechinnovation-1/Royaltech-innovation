import { industriesMap } from "@/data/services-data";

interface ServiceIndustriesProps {
  serviceTitle: string;
  industries: string[];
  eyebrow?: string;
}

export default function ServiceIndustries({
  serviceTitle,
  industries,
  eyebrow = "Industries",
}: ServiceIndustriesProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70">
          — {eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl">
          Industries we serve
        </h2>
      </div>

      {/* 6 Industry Photo Cards with hover expansions */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => {
          const data = industriesMap[industry] || {
            img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=700&q=70",
            text: `Tailored ${serviceTitle.toLowerCase()} for ${industry.toLowerCase()} businesses.`,
          };
          const numberBadge = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

          return (
            <div
              key={industry}
              className="group relative h-72 overflow-hidden rounded-3xl border border-border shadow-card"
            >
              {/* Background image */}
              <img
                src={data.img}
                alt={`${serviceTitle} for ${industry}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-deep/10 transition-opacity duration-500 group-hover:via-deep/75" />

              {/* Top Number Badge */}
              <span className="absolute left-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-black text-accent-foreground">
                {numberBadge}
              </span>

              {/* Bottom text info & hover reveal */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-deep-foreground">
                <h3 className="text-2xl font-bold text-white">{industry}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm text-deep-foreground/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 leading-relaxed">
                  {data.text}
                </p>
                <span className="mt-3 block h-1 w-10 rounded-full bg-accent-gradient transition-all duration-500 group-hover:w-24" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
