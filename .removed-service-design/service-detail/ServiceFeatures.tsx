import type { ServiceFeature } from "@/data/services-data";

interface ServiceFeaturesProps {
  serviceTitle: string;
  features: ServiceFeature[];
  eyebrow?: string;
}

export default function ServiceFeatures({
  serviceTitle,
  features,
  eyebrow = "What's included",
}: ServiceFeaturesProps) {
  return (
    <section id="features" className="bg-deep-gradient py-24 text-deep-foreground">
      <div className="mx-auto max-w-7xl px-5">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            — {eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
            Our {serviceTitle} capabilities
          </h2>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const formattedIndex = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-deep-foreground/10 bg-deep-foreground/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-accent/50"
              >
                {/* Bottom Accent Gradient Line */}
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent-gradient transition-transform duration-500 group-hover:scale-x-100" />

                {/* Number Badge */}
                <span className="text-sm font-black text-accent">
                  {formattedIndex}
                </span>

                {/* Title */}
                <h3 className="mt-3 text-xl font-bold text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-deep-foreground/70 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
