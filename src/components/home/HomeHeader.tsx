const links = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function HomeHeader() {
  return (
    <header className="tw:fixed tw:inset-x-0 tw:top-0 tw:z-50">
      <div className="page-wrap tw:flex tw:h-14 tw:items-center tw:justify-between tw:sm:h-16 tw:md:h-20">
        <a href="#hero" className="tw:text-white tw:text-[11px] tw:font-semibold tw:tracking-[0.12em] tw:uppercase tw:sm:text-sm tw:sm:tracking-[0.22em]">
          <span className="tw:sm:hidden">RoyalTech</span>
          <span className="tw:hidden tw:sm:inline">
            RoyalTech <span className="tw:text-accent">Innovation</span>
          </span>
        </a>

        <nav aria-label="Primary" className="tw:hidden tw:items-center tw:gap-8 tw:lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="tw:text-sm tw:text-white/75 tw:transition-colors tw:hover:text-accent">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="pill pill-ghost tw:px-3 tw:py-2 tw:text-xs tw:sm:px-4 tw:sm:py-2.5 tw:sm:text-sm">
          <span className="tw:sm:hidden">Start</span>
          <span className="tw:hidden tw:sm:inline">Start a project</span>
        </a>
      </div>
    </header>
  );
}
