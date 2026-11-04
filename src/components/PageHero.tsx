import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  kicker: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function PageHero({
  kicker,
  title,
  lead,
  image,
  imageAlt,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageHeroProps) {
  return (
    <header className="ap-hero ap-hero-visual">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="ap-hero-bg"
      />
      <div className="ap-hero-shade" aria-hidden="true" />
      <div className="ap-wrap ap-hero-inner">
        <p className="ap-kicker ap-kicker-on-dark">{kicker}</p>
        <h1>{title}</h1>
        <p className="ap-lead">{lead}</p>
        {primaryHref && primaryLabel ? (
          <div className="ap-hero-actions">
            <Link className="btn btn-soft" href={primaryHref}>
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link className="ap-hero-secondary" href={secondaryHref}>
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </header>
  );
}
