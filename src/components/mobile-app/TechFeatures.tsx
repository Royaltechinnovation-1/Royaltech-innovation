"use client";

import { useState, type ComponentType } from "react";
import { FaJava, FaPlug } from "react-icons/fa6";
import {
  SiAndroid,
  SiDotnet,
  SiFirebase,
  SiFlutter,
  SiGraphql,
  SiIos,
  SiKotlin,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSwift,
} from "react-icons/si";
import { FEATURE_GROUPS, TECH_GROUPS, type TechKey } from "@/data/mobile-app-page";
import { Abs, FloatCard, Phone } from "./Phone";
import { Reveal } from "./client";
import {
  AnalyticsScreen,
  AuthScreen,
  BusinessScreen,
  EcommerceScreen,
  NotificationsScreen,
  TrackingScreen,
} from "./Screens";

const TECH_ICONS: Record<TechKey, { Icon: ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string }> = {
  kotlin: { Icon: SiKotlin, color: "#b392f0" },
  java: { Icon: FaJava, color: "#f4a261" },
  androidsdk: { Icon: SiAndroid, color: "#3ddc84" },
  swift: { Icon: SiSwift, color: "#fb8a5c" },
  swiftui: { Icon: SiSwift, color: "#7dd3fc" },
  ios: { Icon: SiIos, color: "#d5ddf0" },
  reactnative: { Icon: SiReact, color: "#67d4f0" },
  flutter: { Icon: SiFlutter, color: "#6cc8f5" },
  node: { Icon: SiNodedotjs, color: "#7bc46a" },
  dotnet: { Icon: SiDotnet, color: "#a78bfa" },
  laravel: { Icon: SiLaravel, color: "#f87171" },
  rest: { Icon: FaPlug, color: "#93b4ff" },
  graphql: { Icon: SiGraphql, color: "#f472b6" },
  mongodb: { Icon: SiMongodb, color: "#6dbf6a" },
  mysql: { Icon: SiMysql, color: "#7cb7e0" },
  postgres: { Icon: SiPostgresql, color: "#8ab4e8" },
  firebase: { Icon: SiFirebase, color: "#fbbf24" },
};

/* connector paths from the phone to each group, in a 100×100 box (preserveAspectRatio none) */
const LINKS: Record<string, string> = {
  android: "M35 17 C42 17 43 50 47 50",
  ios: "M35 50 L47 50",
  cross: "M35 83 C42 83 43 50 47 50",
  backend: "M65 25 C58 25 57 50 53 50",
  database: "M65 75 C58 75 57 50 53 50",
};

export function Technologies() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="technologies" className="ma-sec ma-navy ma-dark" aria-labelledby="ma-tech-h">
      <div className="ma-grid-bg" aria-hidden="true" />
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-sec-head ma-sec-head--center">
            <span className="ma-eyebrow">Mobile app technologies</span>
            <h2 id="ma-tech-h" className="ma-h2">
              Powered by Modern Mobile Technologies
            </h2>
            <p className="ma-lead">
              We use modern development technologies and frameworks to create reliable, scalable, and high-performance mobile
              applications tailored to different business needs.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="ma-eco" onMouseLeave={() => setActive(null)}>
            <svg className="ma-eco-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {Object.entries(LINKS).map(([id, d]) => (
                <path key={id} d={d} className={active === id ? "on" : ""} />
              ))}
            </svg>

            {(["left", "right"] as const).map((side) => {
              const groups = TECH_GROUPS.filter((g) => (side === "left" ? ["android", "ios", "cross"] : ["backend", "database"]).includes(g.id));
              return (
                <div key={side} className={`ma-eco-col ma-eco-col--${side}`}>
                  {groups.map((g) => (
                    <div
                      key={g.id}
                      className={`ma-eco-group${active === g.id ? " on" : ""}`}
                      onMouseEnter={() => setActive(g.id)}
                      onFocus={() => setActive(g.id)}
                      onBlur={() => setActive(null)}
                      tabIndex={0}
                    >
                      <h3 className="ma-eco-t">{g.title}</h3>
                      <p className="ma-eco-n">{g.note}</p>
                      <ul className="ma-eco-pills">
                        {g.items.map((item, i) => {
                          const { Icon, color } = TECH_ICONS[item.key];
                          return (
                            <li key={item.name} className="ma-pill" style={{ animationDelay: `${i * 0.35}s` }}>
                              <Icon className="ma-pill-i" style={{ color }} />
                              {item.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              );
            })}

            <div className="ma-eco-core" aria-hidden="true">
              <span className="ma-ring r1" />
              <span className="ma-ring r2" />
              <div className="ma-eco-phone">
                <Phone variant="ios" tone="dark" label="Your mobile app at the centre of the technology stack">
                  <BusinessScreen />
                </Phone>
              </div>
              <span className="ma-node ma-eco-node">Your mobile app</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Features                                                            */
/* ------------------------------------------------------------------ */

const FEATURE_SCREENS = [<AuthScreen key="a" />, <NotificationsScreen key="b" />, <EcommerceScreen key="c" />, <TrackingScreen key="d" />, <AnalyticsScreen key="e" />];

const CALLOUTS = [
  { l: -2, t: 12, w: 40 },
  { r: -3, t: 42, w: 40 },
  { l: 0, b: 12, w: 40 },
];

export function Features() {
  const [group, setGroup] = useState(0);
  const [hot, setHot] = useState<number | null>(null);
  const current = FEATURE_GROUPS[group];

  return (
    <section id="features" className="ma-sec ma-light" aria-labelledby="ma-feat-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-sec-head">
            <span className="ma-eyebrow">Mobile app features</span>
            <h2 id="ma-feat-h" className="ma-h2">
              Feature-Rich Applications Designed for Real-World Use
            </h2>
            <p className="ma-lead">
              Choose a capability to see how it looks inside the app. From secure sign-in to ecommerce app development and
              admin dashboards, every feature is built to be intuitive for users and manageable for your team.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="ma-feat">
            <div className="ma-feat-list" role="tablist" aria-label="Mobile app feature groups" aria-orientation="vertical">
              {FEATURE_GROUPS.map((g, i) => (
                <div key={g.id} className={`ma-feat-item${i === group ? " on" : ""}`}>
                  <button
                    type="button"
                    role="tab"
                    id={`feat-tab-${g.id}`}
                    aria-selected={i === group}
                    aria-controls="feat-panel"
                    className="ma-feat-btn"
                    onClick={() => {
                      setGroup(i);
                      setHot(null);
                    }}
                    onMouseEnter={() => {
                      setGroup(i);
                      setHot(null);
                    }}
                  >
                    <span className="ma-feat-idx">{String(i + 1).padStart(2, "0")}</span>
                    <span className="ma-feat-main">
                      <span className="ma-feat-t">{g.title}</span>
                      <span className="ma-feat-s">{g.summary}</span>
                    </span>
                  </button>
                  <ul className="ma-feat-tags">
                    {g.features.map((f, fi) => (
                      <li
                        key={f}
                        className={i === group && hot === fi ? "hot" : ""}
                        onMouseEnter={() => {
                          setGroup(i);
                          setHot(fi);
                        }}
                        onMouseLeave={() => setHot(null)}
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div id="feat-panel" role="tabpanel" aria-labelledby={`feat-tab-${current.id}`} className="ma-feat-visual">
              <div className="ma-stage" style={{ aspectRatio: "1 / 1.02" }}>
                <span className="ma-blob" aria-hidden="true" />
                <Abs l={29} t={0} w={42} z={2}>
                  <Phone variant="ios" label={`${current.title} features shown inside a mobile app`}>
                    <div className="ma-xfade">
                      {FEATURE_SCREENS.map((s, i) => (
                        <div key={i} className={`ma-xfade-i${i === group ? " on" : ""}`}>
                          {s}
                        </div>
                      ))}
                    </div>
                  </Phone>
                </Abs>
                {current.features.map((f, i) => (
                  <Abs key={`${current.id}-${i}`} {...CALLOUTS[i]} z={5} float={i as 0 | 1 | 2} className={`ma-callout${hot === i ? " hot" : ""}`}>
                    <FloatCard tone="light" title={f} dot={(["blue", "cyan", "green"] as const)[i]} />
                  </Abs>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
