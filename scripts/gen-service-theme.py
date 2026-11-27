"""Appends the home-page theme (navy, cyan, glass cards, Inter 600 headings, adaptive scale)
to a service page stylesheet. Usage: python3 scripts/gen-service-theme.py <prefix> <css-file>"""
import sys

TEMPLATE = r'''
/* ------------------------------------------------------------------
 * Home-page colour and type (shared service theme): navy #020617, cyan #67e8f9,
 * white text, glass cards, Inter 600 headings on the home scale. Light product
 * mockups keep their own ink. Compact on small screens, spread on wide ones.
 * ------------------------------------------------------------------ */
.svx-root.@P-root {
  --@P-ink: #ffffff;
  --@P-body: rgba(255, 255, 255, 0.78);
  --@P-muted: rgba(255, 255, 255, 0.62);
  --@P-line: rgba(255, 255, 255, 0.12);
  --@P-glass: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02)), rgba(10, 18, 32, 0.6);
  --@P-tint: var(--@P-glass);
  --@P-display: var(--font-inter, "Inter"), ui-sans-serif, system-ui, sans-serif;
  background: #020617;
  color: #ffffff;
  font-family: var(--font-inter, "Inter"), ui-sans-serif, system-ui, sans-serif;
}
.svx-root.@P-root .@P-hero,
.svx-root.@P-root .@P-section,
.svx-root.@P-root .@P-section--white,
.svx-root.@P-root .@P-section--tint,
.svx-root.@P-root .@P-section--navy,
.svx-root.@P-root .@P-svc,
.svx-root.@P-root .@P-svc--dark,
.svx-root.@P-root .@P-svc--light,
.svx-root.@P-root .@P-final-wrap {
  background: radial-gradient(60% 45% at 100% 0%, rgba(103, 232, 249, 0.1), transparent 65%), #020617;
  color: #ffffff;
  border-top-color: rgba(255, 255, 255, 0.12);
}
.svx-root.@P-root .@P-final {
  background:
    radial-gradient(420px 180px at 100% 0%, rgba(103, 232, 249, 0.22), transparent 60%),
    linear-gradient(145deg, #020617, #0b1d44);
}
.svx-root.@P-root .@P-kicker,
.svx-root.@P-root .@P-kicker--cyan,
.svx-root.@P-root .@P-kicker--sky,
.svx-root.@P-root .@P-eyebrow,
.svx-root.@P-root .@P-stage > span,
.svx-root.@P-root .@P-step > span,
.svx-root.@P-root .@P-aside small {
  color: #67e8f9;
}
.svx-root.@P-root .@P-h1,
.svx-root.@P-root .@P-h2,
.svx-root.@P-root .@P-h2--light,
.svx-root.@P-root .@P-h3,
.svx-root.@P-root .@P-h3--sm,
.svx-root.@P-root .@P-final h2,
.svx-root.@P-root .@P-hero-sub,
.svx-root.@P-root .@P-btn {
  font-family: var(--font-inter, "Inter"), ui-sans-serif, system-ui, sans-serif;
  font-weight: 600;
  letter-spacing: normal;
  color: #ffffff;
}
.svx-root.@P-root .@P-hero-sub { color: #a5f3fc; }
.svx-root.@P-root .@P-h2,
.svx-root.@P-root .@P-h2--light,
.svx-root.@P-root .@P-final h2 {
  font-size: 1.5rem;
  line-height: 1.12;
}
.svx-root.@P-root .@P-h3 {
  font-size: 1.125rem;
  line-height: 1.3;
}
.svx-root.@P-root .@P-lead,
.svx-root.@P-root .@P-sub,
.svx-root.@P-root .@P-prose p,
.svx-root.@P-root .@P-prose-p {
  font-size: 0.875rem;
  line-height: 1.625;
  color: rgba(255, 255, 255, 0.82);
}
.svx-root.@P-root .@P-btn {
  border-radius: 999px;
  font-weight: 500;
}
.svx-root.@P-root .@P-btn--primary,
.svx-root.@P-root .@P-btn--cyan,
.svx-root.@P-root .@P-btn--white,
.svx-root.@P-root .@P-btn--light {
  background: #67e8f9;
  border-color: #67e8f9;
  color: #0b1220;
  box-shadow: 0 10px 40px -8px rgba(103, 232, 249, 0.55);
}
.svx-root.@P-root .@P-btn--ghost,
.svx-root.@P-root .@P-btn--outline {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}
.svx-root.@P-root .@P-related a,
.svx-root.@P-root .@P-prose a,
.svx-root.@P-root .@P-section a.@P-link {
  color: #67e8f9;
}
.svx-root.@P-root .@P-section .@P-visual,
.svx-root.@P-root .@P-section .@P-modules,
.svx-root.@P-root .@P-section .@P-nodes,
.svx-root.@P-root .@P-section .@P-nodes > div,
.svx-root.@P-root .@P-section .@P-stage,
.svx-root.@P-root .@P-section .@P-step,
.svx-root.@P-root .@P-section .@P-ind article,
.svx-root.@P-root .@P-section .@P-why > div > div,
.svx-root.@P-root .@P-section .@P-tech-card,
.svx-root.@P-root .@P-section .@P-quality li,
.svx-root.@P-root .@P-section .@P-aside,
.svx-root.@P-root .@P-section .@P-acc-i,
.svx-root.@P-root .@P-tiles li,
.svx-root.@P-root .@P-diff > div:not(.core),
.svx-root.@P-root .@P-jump a {
  background: var(--@P-glass);
  border-color: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  box-shadow: none;
  -webkit-backdrop-filter: blur(24px) saturate(140%);
  backdrop-filter: blur(24px) saturate(140%);
}
.svx-root.@P-root .@P-acc-ic { background: rgba(103, 232, 249, 0.14); }
.svx-root.@P-root .@P-acc-ic::before,
.svx-root.@P-root .@P-acc-ic::after { background: #67e8f9; }
.svx-root.@P-root .@P-acc-i.on { border-color: rgba(103, 232, 249, 0.45); }
.svx-root.@P-root .@P-acc-i.on .@P-acc-ic { background: #67e8f9; }
.svx-root.@P-root .@P-acc-i.on .@P-acc-ic::before,
.svx-root.@P-root .@P-acc-i.on .@P-acc-ic::after { background: #0b1220; }

/* Responsive scale */
.svx-root.@P-root .@P-section { padding: clamp(2.75rem, 2rem + 3vw, 4.5rem) 0; }
.svx-root.@P-root .@P-split,
.svx-root.@P-root .@P-hero-grid,
.svx-root.@P-root .@P-svc-grid { gap: clamp(1.5rem, 1rem + 2vw, 3rem); }
@media (min-width: 640px) {
  .svx-root.@P-root .@P-h2,
  .svx-root.@P-root .@P-h2--light,
  .svx-root.@P-root .@P-final h2 { font-size: 1.875rem; }
  .svx-root.@P-root .@P-lead,
  .svx-root.@P-root .@P-sub { font-size: 1rem; }
}
@media (min-width: 768px) {
  .svx-root.@P-root .@P-h2,
  .svx-root.@P-root .@P-h2--light,
  .svx-root.@P-root .@P-final h2 { font-size: 2.25rem; }
  .svx-root.@P-root .@P-h3 { font-size: 1.25rem; }
  .svx-root.@P-root .@P-lead { font-size: 1.125rem; }
}
@media (min-width: 960px) {
  .svx-root.@P-root .@P-section { padding: clamp(4rem, 3rem + 4vw, 6.5rem) 0; }
}
@media (min-width: 1280px) {
  .svx-root.@P-root .@P-h2,
  .svx-root.@P-root .@P-h2--light,
  .svx-root.@P-root .@P-final h2 { font-size: 3rem; }
}
@media (min-width: 1536px) {
  .svx-root.@P-root .@P-wrap { max-width: 96rem; }
  .svx-root.@P-root .@P-lead { max-width: 52rem; }
}
@media (min-width: 1920px) {
  .svx-root.@P-root .@P-wrap { max-width: 112rem; }
}
'''

def main():
    prefix, path = sys.argv[1], sys.argv[2]
    css = open(path).read()
    marker = "Home-page colour and type (shared service theme)"
    if marker in css:
        print("already applied:", path); return
    open(path, "a").write(TEMPLATE.replace("@P", prefix))
    print("applied", prefix, "->", path)

main()
