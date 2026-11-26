import VideoBackground from "@/components/VideoBackground";
import Preloader from "@/components/Preloader";
import ScrollAnimations from "@/components/ScrollAnimations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Icon } from "@/components/Icons";
import { SplitHeading } from "@/components/Split";
import { site } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Layout primitive                                                     */
/* ------------------------------------------------------------------ */

function Section({
  id,
  children,
  exit = true,
  className = "",
  after,
  tour = true,
}: {
  id: string;
  children: React.ReactNode;
  exit?: boolean;
  className?: string;
  after?: React.ReactNode;
  /** Include this section as a stop in the guided auto-scroll tour. */
  tour?: boolean;
}) {
  return (
    <section
      id={id}
      data-section
      data-exit={exit ? "true" : "false"}
      data-tour={tour ? "true" : undefined}
      className={`relative flex min-h-screen items-center py-28 md:py-36 ${className}`}
    >
      <div data-inner className="mx-auto w-full max-w-7xl px-6 will-change-transform md:px-10">
        {children}
      </div>
      {after}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Home page                                                            */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      <Preloader />
      <VideoBackground />
      <ScrollAnimations />
      <ContactModal />
      <Header />

      <main className="relative z-10">
        {/* 1 — HERO */}
        <Section
          id="hero"
          tour={false}
          className="!pt-32 md:!pt-36"
          after={
            <div className="pointer-events-none absolute inset-x-0 bottom-8 mx-auto flex w-full max-w-7xl items-end px-6 md:px-10">
              <div data-reveal data-delay="1.2" className="flex items-center gap-4 text-[0.65rem] tracking-[0.3em] text-white/78 uppercase">
                <span className="cue-line" /> Scroll
              </div>
            </div>
          }
        >
          <div data-hero-content className="max-w-5xl">
            <p data-reveal data-delay="0.2" className="eyebrow">
              RoyalTech Innovation
            </p>
            <SplitHeading
              as="h1"
              text="Build Your *Digital Future* with Custom Software & IT Solutions"
              className="mt-7 text-[clamp(2.4rem,6.6vw,6rem)] leading-[1.02]"
            />
            <p data-reveal data-delay="0.7" className="mt-8 max-w-2xl text-base leading-relaxed text-white/95 md:text-lg">
              RoyalTech Innovation helps businesses grow through custom website development, mobile applications,
              software solutions, UI/UX design, digital marketing and IT consulting.
            </p>
            <div data-reveal data-delay="0.9" className="mt-10 flex flex-wrap gap-4">
              <a href={`${site.website}portfolio`} className="btn btn-gold">
                View projects <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a href="#contact" data-open-contact className="btn btn-ghost">
                Contact
              </a>
            </div>
          </div>
        </Section>

        <Footer />
      </main>
    </>
  );
}
