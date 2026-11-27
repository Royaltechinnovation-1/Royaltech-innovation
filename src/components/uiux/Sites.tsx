import type { ReactNode } from "react";

/**
 * Desktop browser mockup + the website interfaces drawn inside it.
 * The frame is a CSS container (see uiux.css), so everything inside scales with its width.
 * Interfaces use sample copy and shapes only: no client names, metrics or testimonials.
 */

export function Browser({
  label,
  url = "northwind.studio",
  dark = false,
  className = "",
  children,
}: {
  label: string;
  url?: string;
  dark?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`ux-br${dark ? " ux-br--dark" : ""} ${className}`.trim()} role="img" aria-label={label}>
      <div className="ux-br-in" aria-hidden="true">
        <div className="ux-br-bar">
          <span className="ux-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="ux-url">{url}</span>
          <span className="ux-br-end" />
        </div>
        <div className="ux-br-view">{children}</div>
      </div>
    </div>
  );
}

/** SaaS / marketing website. `wire` renders the same layout as a grayscale wireframe so the two can be overlaid. */
export function SiteLanding({ wire = false, tablet = false }: { wire?: boolean; tablet?: boolean }) {
  return (
    <div className={`us${wire ? " us-wire" : ""}${tablet ? " us--t" : ""}`}>
      <div className="us-nav">
        <span className="us-logo">
          <i />
          Northwind
        </span>
        <span className="us-links">
          <span>Product</span>
          <span>Solutions</span>
          <span>Pricing</span>
          <span>Resources</span>
        </span>
        <span className="us-navbtn">Get started</span>
      </div>
      <div className="us-hero">
        <div className="us-hero-copy">
          <span className="us-pill">New · Team workspace</span>
          <div className="us-h">Plan, design and launch with confidence</div>
          <div className="us-p">One simple workspace for your team&apos;s projects, files and feedback.</div>
          <div className="us-btns">
            <span className="us-b1">Start free</span>
            <span className="us-b2">Watch demo</span>
          </div>
        </div>
        <div className="us-art">
          <div className="us-art-card a">
            <i />
            <b />
            <b />
          </div>
          <div className="us-art-card b">
            <i />
            <b />
            <b />
          </div>
          <span className="us-art-chip">Live preview</span>
        </div>
      </div>
      <div className="us-feats">
        {[
          ["Plan", "Organize work in one place"],
          ["Collaborate", "Share and review together"],
          ["Launch", "Ship with confidence"],
        ].map(([t, s]) => (
          <div className="us-feat" key={t}>
            <i />
            <b>{t}</b>
            <span>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Ecommerce storefront interface. */
export function SiteStore() {
  return (
    <div className="us us-store">
      <div className="us-nav">
        <span className="us-logo">
          <i />
          Atelier
        </span>
        <span className="us-search">Search products</span>
        <span className="us-cart" />
      </div>
      <div className="us-cats">
        {["All", "New in", "Home", "Travel", "Sale"].map((c, i) => (
          <span key={c} className={i === 0 ? "on" : ""}>
            {c}
          </span>
        ))}
      </div>
      <div className="us-banner">
        <div>
          <span className="us-pill us-pill--w">Summer edit</span>
          <div className="us-h us-h--w">Everyday pieces, thoughtfully made</div>
          <span className="us-b1 us-b1--w">Shop the edit</span>
        </div>
        <div className="us-banner-art">
          <i />
          <i />
        </div>
      </div>
      <div className="us-prods">
        {["Studio headphones", "Travel backpack", "Ceramic set", "Desk lamp"].map((t, i) => (
          <div className="us-prod" key={t}>
            <i className={`g${i}`} />
            <b>{t}</b>
            <span>{["$129", "$68", "$42", "$54"][i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** The responsive (mobile) version of the same marketing site, drawn with the phone screen primitives. */
export function SiteMobile() {
  return (
    <>
      <div className="mp-body">
        <div className="mp-row mp-sp">
          <span className="us-m-logo">
            <i />
            Northwind
          </span>
          <span className="us-m-burger">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="us-m-pill">New · Team workspace</div>
        <div className="us-m-h">Plan, design and launch with confidence</div>
        <div className="us-m-p">One simple workspace for projects, files and feedback.</div>
        <div className="us-m-btns">
          <span className="mp-btn">Start free</span>
          <span className="us-m-ghost">Demo</span>
        </div>
        <div className="mp-banner us-m-art">
          <div className="mp-banner-k">Live preview</div>
          <div className="mp-banner-t">Your workspace</div>
        </div>
        <div className="mp-card">
          <div className="mp-sub">Plan</div>
          <div className="mp-line" style={{ width: "62%" }} />
        </div>
        <div className="mp-card">
          <div className="mp-sub">Collaborate</div>
          <div className="mp-line" style={{ width: "48%" }} />
        </div>
      </div>
    </>
  );
}

/** Grayscale phone layout used in the wireframe stage of the workflow. */
export function WireScreen() {
  return (
    <div className="uw">
      <div className="uw-top">
        <i className="uw-sq" />
        <i className="uw-bar" style={{ width: "30%" }} />
        <i className="uw-circ" />
      </div>
      <div className="uw-hero">
        <svg viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="0" x2="100" y2="60" />
          <line x1="100" y1="0" x2="0" y2="60" />
        </svg>
      </div>
      <i className="uw-bar" style={{ width: "58%" }} />
      <i className="uw-bar" style={{ width: "82%" }} />
      <div className="uw-row">
        <div className="uw-box" />
        <div className="uw-box" />
      </div>
      <div className="uw-cta" />
      <div className="uw-tabs">
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

/** Tablet frame. A CSS container like the browser, so interfaces inside scale with its width. */
export function Tablet({ label, className = "", children }: { label: string; className?: string; children: ReactNode }) {
  return (
    <div className={`ux-tab ${className}`.trim()} role="img" aria-label={label}>
      <div className="ux-tab-in" aria-hidden="true">
        {children}
      </div>
    </div>
  );
}

/**
 * Deliberately weak "before" interface for the UX audit comparison: crowded navigation, competing
 * calls to action and no clear hierarchy. It is a generic illustration, not a real client site.
 */
export function SiteBefore() {
  return (
    <div className="us usb">
      <div className="usb-ticker">SALE!! 50% OFF &nbsp;·&nbsp; FREE SHIPPING &nbsp;·&nbsp; CALL NOW &nbsp;·&nbsp; NEW ARRIVALS</div>
      <div className="usb-nav">
        <b>NORTHWIND</b>
        {["Home", "Products", "Solutions", "Services", "Pricing", "About", "Blog", "Resources", "FAQ", "Contact", "Login"].map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>
      <div className="usb-main">
        <div className="usb-col">
          <div className="usb-h">Welcome to Northwind Solutions the best team workspace software for all your business needs</div>
          <div className="usb-t">
            <i style={{ width: "96%" }} />
            <i style={{ width: "92%" }} />
            <i style={{ width: "98%" }} />
            <i style={{ width: "70%" }} />
          </div>
          <div className="usb-btns">
            <span className="a">Click here</span>
            <span className="b">Learn more</span>
            <span className="c">Buy now</span>
            <span className="d">Sign up</span>
          </div>
          <div className="usb-t usb-t--s">
            <i style={{ width: "90%" }} />
            <i style={{ width: "84%" }} />
          </div>
        </div>
        <div className="usb-side">
          <span className="x">AD</span>
          <span className="y">Limited offer</span>
          <span className="z">Newsletter</span>
        </div>
      </div>
      <div className="usb-strip">
        {["#f59e0b", "#ef4444", "#22c55e", "#8b5cf6", "#06b6d4", "#ec4899"].map((c) => (
          <i key={c} style={{ background: c }} />
        ))}
      </div>
    </div>
  );
}
