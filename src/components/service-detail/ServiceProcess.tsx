import type { ServiceProcessStep } from "@/data/services-data";

interface ServiceProcessProps {
  serviceTitle: string;
  steps: ServiceProcessStep[];
  eyebrow?: string;
}

export default function ServiceProcess({
  serviceTitle,
  steps,
  eyebrow = "Our process",
}: ServiceProcessProps) {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Section Header */}
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70">
          — {eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl">
          How we deliver {serviceTitle.toLowerCase()}
        </h2>

        {/* Process Steps Timeline */}
        <div className="relative mt-14 grid gap-6 md:grid-cols-5">
          {/* Connecting track line for large screens */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border md:block pointer-events-none" />

          {steps.map((step, index) => {
            const stepNum = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
            return (
              <div key={step.title} className="group relative">
                {/* Step Number Badge */}
                <span className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-border bg-card text-xl font-black text-primary transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:bg-accent group-hover:shadow-glow">
                  {stepNum}
                </span>

                {/* Step Info */}
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
