/**
 * Two-line horizontal marquee of IT stack technologies.
 * Both rows drift from left to right, seamlessly looping.
 * Pure CSS animation (no JS), paused on hover and for reduced motion.
 */

const rowOne = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Vue.js",
  "Angular",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Flutter",
  "React Native",
  "Swift",
  "Kotlin",
  "Figma",
  "Adobe XD",
  "WordPress",
  "Shopify",
  "WooCommerce",
  "Magento",
  "Laravel",
];

const rowTwo = [
  "Node.js",
  "Python",
  "Django",
  "FastAPI",
  "Java",
  "Spring Boot",
  ".NET",
  "PHP",
  "Go",
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "Terraform",
  "GitHub Actions",
  "Linux",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "TensorFlow",
  "PyTorch",
  "OpenAI",
  "LangChain",
  "Stripe",
  "Razorpay",
];

function Group({ items, hidden = false }: { items: string[]; hidden?: boolean }) {
  return (
    <ul className="flex shrink-0" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li
          key={item}
          className="mr-4 inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full border border-white/20 bg-[#03060d]/85 px-5 py-2.5 text-sm tracking-wide text-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.9)] backdrop-blur-md md:text-[0.95rem]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Row({ items, duration }: { items: string[]; duration: number }) {
  return (
    <div className="tech-mask overflow-hidden">
      <div className="tech-marquee-track" style={{ animationDuration: `${duration}s` }}>
        <Group items={items} />
        <Group items={items} hidden />
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="tech-marquee ml-[calc(50%-50vw)] flex w-screen flex-col gap-5 bg-gradient-to-b from-transparent via-[#03060d]/70 to-transparent py-8 md:gap-6">
      <Row items={rowOne} duration={60} />
      <Row items={rowTwo} duration={78} />
    </div>
  );
}
