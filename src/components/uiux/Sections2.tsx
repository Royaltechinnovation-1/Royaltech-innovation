import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { AUDIT_ITEMS, CAPABILITY_GROUPS, RESPONSIVE_ITEMS, UI_POINTS, UX_POINTS } from "@/data/uiux-page";
import { Abs, FloatCard, Phone } from "@/components/mobile-app/Phone";
import { Reveal } from "@/components/mobile-app/client";
import { AuditCompare, UxQuoteButton } from "./Interactive";
import {
  ComponentsPanel,
  Cursor,
  InsightNote,
  JourneyMap,
  MiniCompare,
  PalettePanel,
  PersonaCard,
  TypePanel,
} from "./Panels";
import { Browser, SiteLanding, SiteMobile, Tablet, WireScreen } from "./Sites";

/* ------------------------------------------------------------------ */
/* 05 Capabilities: three design boards with a layers-style skill list */
/* ------------------------------------------------------------------ */
function CapabilityArt({ id }: { id: "research" | "design" | "deliver" }) {
  if (id === "research") {
    return (
      <div className="ma-stage" style={{ aspectRatio: "1 / 0.8" }}>
        <Abs l={0} t={0} w={100} z={2} float={0}>
          <JourneyMap />
        </Abs>
        <Abs l={-2} t={48} w={46} z={4} float={1}>
          <PersonaCard />
        </Abs>
        <Abs l={50} t={62} w={48} z={5} float={2}>
          <InsightNote />
        </Abs>
      </div>
    );
  }
  if (id === "design") {
    return (
      <div className="ma-stage" style={{ aspectRatio: "1 / 0.78" }}>
        <Abs l={0} t={4} w={86} z={2} float={0}>
          <Browser dark label="Website design workspace showing a wireframe being developed into a finished interface" url="northwind.studio">
            <SiteLanding />
          </Browser>
        </Abs>
        <Abs l={70} t={30} w={29} z={4} float={1}>
          <Phone variant="ios" tone="dark" label="Responsive mobile layout of the same interface on an iPhone">
            <SiteMobile />
          </Phone>
        </Abs>
        <Abs l={-2} t={62} w={42} z={5} float={2}>
          <MiniCompare pos={44} className="up--dark" />
        </Abs>
        <Abs l={22} t={20} z={6}>
          <Cursor label="UI Designer" />
        </Abs>
      </div>
    );
  }
  return (
    <div className="ma-stage" style={{ aspectRatio: "1 / 0.8" }}>
      <Abs l={0} t={0} w={52} z={3} float={1}>
        <PalettePanel />
      </Abs>
      <Abs l={48} t={4} w={52} z={4} float={2}>
        <TypePanel />
      </Abs>
      <Abs l={10} t={50} w={80} z={5} float={0}>
        <ComponentsPanel />
      </Abs>
    </div>
  );
}

export function Capabilities() {
  return (
    <section id="design-capabilities" className="ma-sec ma-light" aria-labelledby="ux-cap-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-sec-head ma-sec-head--center">
            <span className="ma-eyebrow">Our design capabilities</span>
            <h2 id="ux-cap-h" className="ma-h2 ma-h2--xl">
              Everything Needed to Create Better Digital Experiences
            </h2>
            <p className="ma-lead">
              We bring together design strategy, user experience, visual design, and interaction design to create digital
              products that are functional, intuitive, and visually compelling.
            </p>
          </div>
        </Reveal>

        <div className="ux-cap">
          {CAPABILITY_GROUPS.map((g, gi) => (
            <Reveal key={g.id} delay={gi * 90} className={`ux-cap-cell ux-cap-cell--${g.id}`}>
              <article className={`ux-cap-board ux-cap-board--${g.id}`}>
                <header className="ux-cap-bar">
                  <span className="ux-dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="ux-cap-tab">
                    <b>{String(gi + 1).padStart(2, "0")}</b>
                    {g.label}
                  </span>
                </header>
                <h3 className="ux-cap-t">{g.title}</h3>
                <div className="ux-cap-art">
                  <CapabilityArt id={g.id} />
                </div>
                <ul className="ux-layers" aria-label={`${g.title} capabilities`}>
                  {g.items.map((it) => (
                    <li key={it.name}>
                      <i aria-hidden="true" />
                      <b>{it.name}</b>
                      <span>{it.text}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 11 UX audit: before / after comparison                              */
/* ------------------------------------------------------------------ */
export function Audit() {
  return (
    <section id="ux-audit" className="ma-sec ma-light" aria-labelledby="ux-au-h">
      <div className="ma-wrap ma-split ux-audit">
        <Reveal>
          <div className="ux-rs-copy">
            <span className="ma-eyebrow">UX audit &amp; design improvement</span>
            <h2 id="ux-au-h" className="ma-h2 ma-h2--xl">
              Improve Your Existing Digital Experience
            </h2>
            <p className="ma-lead">
              Your existing website or application may have opportunities to improve usability, navigation, accessibility, visual
              consistency, and conversion.
            </p>
            <p className="ma-body">
              We analyze your digital experience to identify friction points and provide design improvements that make your
              product easier to use and more effective.
            </p>
            <ul className="ma-list" aria-label="UX audit and design improvement services">
              {AUDIT_ITEMS.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p className="ma-note">
              Our UX audit services and website redesign UI UX work start with evidence from your current experience, so every
              recommendation has a clear reason.
            </p>
            <div className="ma-cta-row">
              <UxQuoteButton service="UX Audit" title="Request a UX Audit" className="ma-btn ma-btn--primary ma-btn--lg">
                Request a UX Audit <FaArrowRight aria-hidden="true" />
              </UxQuoteButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="ma-split-visual ux-audit-visual">
            <AuditCompare />
            <div className="ux-audit-notes">
              <div className="ux-audit-col ux-audit-col--b">
                <span>Before</span>
                <ul>
                  <li>Cluttered layout</li>
                  <li>Confusing navigation</li>
                  <li>Poor hierarchy</li>
                </ul>
              </div>
              <div className="ux-audit-col ux-audit-col--a">
                <span>After</span>
                <ul>
                  <li>Clean layout</li>
                  <li>Better navigation</li>
                  <li>Clear visual hierarchy</li>
                  <li>Improved usability</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 12 Responsive & accessible: one experience across three screens     */
/* ------------------------------------------------------------------ */
export function Responsive() {
  return (
    <section id="responsive-accessible-design" className="ma-sec ma-tint" aria-labelledby="ux-rp-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ux-svc-top">
            <div>
              <span className="ma-eyebrow">Responsive &amp; accessible design</span>
              <h2 id="ux-rp-h" className="ma-h2 ma-h2--xl">
                Seamless Experiences Across Every Screen
              </h2>
            </div>
            <div>
              <p className="ma-lead">
                We design digital experiences that adapt to different screen sizes, devices, and user needs while maintaining
                usability, consistency, and visual quality.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="ux-dash-wrap">
            <div className="ma-stage ux-resp-stage" style={{ aspectRatio: "16 / 9" }}>
              <span className="ma-blob" aria-hidden="true" />
              <Abs l={0} t={4} w={58} z={2} float={0}>
                <Browser label="Desktop version of a website interface with full navigation and a two-column hero" url="northwind.studio">
                  <SiteLanding />
                </Browser>
              </Abs>
              <Abs l={48} t={14} w={27} z={3} float={1}>
                <Tablet label="Tablet version of the same website with simplified navigation and a stacked layout">
                  <SiteLanding tablet />
                </Tablet>
              </Abs>
              <Abs l={79} t={6} w={16} z={4} float={2}>
                <Phone variant="ios" label="Mobile version of the same website with a single-column layout on an iPhone">
                  <SiteMobile />
                </Phone>
              </Abs>
              {[
                [4, 76, "Desktop · 1440 px"],
                [52, 80, "Tablet · 768 px"],
                [79, 72, "Mobile · 390 px"],
              ].map(([l, t, k]) => (
                <Abs key={k} l={l as number} t={t as number} z={6}>
                  <span className="ux-pin" aria-hidden="true">
                    {k}
                  </span>
                </Abs>
              ))}
              <Abs l={30} t={0} z={6} float={1}>
                <FloatCard tone="light" title="Readable type" text="16 px minimum body text" dot="blue" />
              </Abs>
              <Abs l={34} t={70} w={22} z={6} float={2}>
                <FloatCard tone="light" title="Touch-friendly" text="44 px tap targets" dot="green" />
              </Abs>
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <ul className="ux-resp-list" aria-label="Responsive and accessible design considerations">
            {RESPONSIVE_ITEMS.map((r, i) => (
              <li key={r}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {r}
              </li>
            ))}
          </ul>
          <p className="ma-note ma-note--center">
            Responsive UI design pairs with our <Link href="/services/website-development">website development</Link> and{" "}
            <Link href="/services/mobile-app-development">mobile app development</Link> teams so the build matches the design on
            every device.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 13 UI vs UX: planning on one side, polished interface on the other  */
/* ------------------------------------------------------------------ */
export function UiVsUx() {
  return (
    <section id="ui-vs-ux" className="ma-sec ma-light" aria-labelledby="ux-uu-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-sec-head ma-sec-head--center">
            <span className="ma-eyebrow">UI/UX design explained</span>
            <h2 id="ux-uu-h" className="ma-h2 ma-h2--xl">
              Understanding UI &amp; UX
            </h2>
            <p className="ma-lead">
              UX plans how a product works. UI shapes how it looks and responds. Great UI/UX design services bring both together.
            </p>
          </div>
        </Reveal>

        <div className="ux-uu">
          <Reveal className="ux-uu-cell">
            <article className="ux-uu-card ux-uu-card--ux">
              <header>
                <span className="ux-num">
                  <b>UX</b>Planning
                </span>
                <h3>UX — User Experience</h3>
                <p>
                  Focuses on how users interact with a product, how easily they complete tasks, and how intuitive the overall
                  experience feels.
                </p>
              </header>
              <div className="ux-uu-art">
                <div className="ma-stage" style={{ aspectRatio: "1 / 0.7" }}>
                  <Abs l={0} t={8} w={74} z={2} float={0}>
                    <Browser label="Grayscale website wireframe showing structure and content hierarchy" url="wireframe · home">
                      <SiteLanding wire />
                    </Browser>
                  </Abs>
                  <Abs l={66} t={0} w={30} z={4} float={1}>
                    <Phone variant="ios" label="Grayscale mobile app wireframe">
                      <WireScreen />
                    </Phone>
                  </Abs>
                  <Abs l={2} t={72} z={6}>
                    <Cursor label="User flow" color="#64748b" />
                  </Abs>
                </div>
              </div>
              <p className="ux-uu-k">Includes</p>
              <ul className="ux-uu-list" aria-label="UX design includes">
                {UX_POINTS.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          </Reveal>

          <span className="ux-uu-plus" aria-hidden="true">
            +
          </span>

          <Reveal delay={120} className="ux-uu-cell">
            <article className="ux-uu-card ux-uu-card--ui">
              <header>
                <span className="ux-num">
                  <b>UI</b>Visual design
                </span>
                <h3>UI — User Interface</h3>
                <p>Focuses on the visual and interactive elements users see and interact with.</p>
              </header>
              <div className="ux-uu-art">
                <div className="ma-stage" style={{ aspectRatio: "1 / 0.7" }}>
                  <Abs l={0} t={8} w={74} z={2} float={0}>
                    <Browser label="Polished high-fidelity website interface with brand colors, typography and components" url="northwind.studio">
                      <SiteLanding />
                    </Browser>
                  </Abs>
                  <Abs l={66} t={0} w={30} z={4} float={1}>
                    <Phone variant="ios" label="Polished mobile website interface on an iPhone">
                      <SiteMobile />
                    </Phone>
                  </Abs>
                  <Abs l={-2} t={66} w={42} z={6} float={2}>
                    <ComponentsPanel />
                  </Abs>
                </div>
              </div>
              <p className="ux-uu-k">Includes</p>
              <ul className="ux-uu-list" aria-label="UI design includes">
                {UI_POINTS.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <p className="ma-note ma-note--center">
            Looking for a UI design company or UX research services? We combine both with{" "}
            <Link href="#ux-audit">UX audits</Link>, <Link href="#design-systems">design systems</Link> and developer handoff.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
