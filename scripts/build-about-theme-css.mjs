/**
 * Builds src/styles/about-theme.css from the About page styles.
 *
 *   npm run build:about-theme-css
 *
 * The About page styles are hard-coded colours in globals.css (the `.ae` rules) and in
 * TeamSection.css (the `.team-*` cards it renders). This script copies those rules, scopes them
 * under `.about-theme`, and remaps their colours to the home page palette (navy surfaces, cyan
 * accents, light text). Other pages are not affected because every selector is scoped.
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import postcss from "postcss";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const to = path.join(root, "src", "styles", "about-theme.css");

const PREFIX = ".about-theme";

const SOURCES = [
  // The About page (.ae) rules and the consultation panel (.ax) rules in globals.css.
  { file: path.join(root, "src", "app", "globals.css"), match: /\.(ae|ax)(?![a-zA-Z0-9_])/ },
  // The team cards the About page renders.
  { file: path.join(root, "src", "styles", "TeamSection.css"), match: /\.team-|\.linkedin-link/ },
];

// Home palette (see src/styles/home-theme.css and the royaltech-home design).
const NAVY = "#020617";
const PANEL = "#0f172a";
const PANEL_DEEP = "#0b1220";
const ACCENT = "#67e8f9";
// Deep greens map to a dark navy panel (not teal or green), so no pine or green surfaces remain.
const ACCENT_DEEP = "#0b1a2e";
const TEXT = "#e2e8f0";
const MUTED = "#94a3b8";
const LIGHT_ACCENT_TEXT = "#a5f3fc";

const HEX_RE = /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/g;
const RGBA_RE = /rgba?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*(?:,\s*([\d.]+)\s*)?\)/g;

function parseHex(hex) {
  let h = hex.slice(1);
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

/** Groups a colour as a light surface, a green accent, a deep green, a dark neutral, or a saturated keep. */
function classify(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const L = (max + min) / 2 / 255;
  const sat = max - min;
  const greenish = sat >= 25 && ((g >= r + 10 && g >= b) || (g >= r - 4 && g >= b + 12));
  if (sat >= 90 && !greenish) return { kind: "keep", L };
  if (L >= 0.82) return { kind: greenish ? "lightAccent" : "light", L };
  if (greenish && L >= 0.45) return { kind: "accent", L };
  if (greenish && L >= 0.12) return { kind: "accentDeep", L };
  if (L < 0.06) return { kind: "black", L };
  if (L < 0.3) return { kind: "dark", L };
  return { kind: "mid", L };
}

function withAlpha(hex, alpha) {
  if (alpha === null || alpha === undefined || alpha >= 1) return hex;
  const [r, g, b] = parseHex(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** Returns the replacement colour for one colour in a given role, or null to keep it unchanged. */
function remap(r, g, b, alpha, role) {
  const { kind } = classify(r, g, b);
  if (kind === "keep") return null;

  // Low-alpha light tints (white glass, sheen) stay as they are on dark surfaces.
  if (kind === "light" && alpha !== null && alpha < 0.35 && role !== "text") return null;

  if (role === "text") {
    if (kind === "light") return null; // white text stays white
    if (kind === "lightAccent") return withAlpha(LIGHT_ACCENT_TEXT, alpha); // pale green text becomes pale cyan
    if (kind === "accent" || kind === "accentDeep") return withAlpha(ACCENT, alpha);
    if (kind === "dark" || kind === "black") return withAlpha(TEXT, alpha);
    return withAlpha(MUTED, alpha);
  }

  if (role === "border") {
    if (kind === "accent" || kind === "accentDeep") return withAlpha(ACCENT, alpha ?? 0.45);
    return "rgba(148, 163, 184, 0.22)";
  }

  if (role === "shadow") {
    if (kind === "accent" || kind === "accentDeep") return `rgba(103, 232, 249, ${alpha ?? 0.2})`;
    return `rgba(0, 0, 0, ${alpha ?? 0.2})`;
  }

  // Background role.
  if (kind === "light" || kind === "lightAccent") return withAlpha(PANEL, alpha);
  if (kind === "accent") return withAlpha(ACCENT, alpha);
  if (kind === "accentDeep") return withAlpha(ACCENT_DEEP, alpha);
  if (kind === "black") return withAlpha(NAVY, alpha);
  if (kind === "dark") return withAlpha(PANEL_DEEP, alpha);
  return withAlpha(PANEL, alpha);
}

/** Rewrites every colour in a declaration value. Returns the new value and the kinds it saw. */
function remapValue(value, role) {
  const kinds = new Set();
  let out = value.replace(RGBA_RE, (match, r, g, b, a) => {
    const rr = Number(r);
    const gg = Number(g);
    const bb = Number(b);
    const alpha = a === undefined ? null : Number(a);
    kinds.add(classify(rr, gg, bb).kind);
    return remap(rr, gg, bb, alpha, role) ?? match;
  });
  out = out.replace(HEX_RE, (match) => {
    const [r, g, b] = parseHex(match);
    kinds.add(classify(r, g, b).kind);
    return remap(r, g, b, null, role) ?? match;
  });
  return { value: out, kinds };
}

const BG_PROPS = new Set(["background", "background-color", "background-image"]);
const SHADOW_PROPS = new Set(["box-shadow", "text-shadow", "filter"]);

function roleFor(prop) {
  if (prop === "color" || prop === "caret-color" || prop === "fill" || prop === "stroke" || prop === "accent-color") return "text";
  if (BG_PROPS.has(prop)) return "bg";
  if (prop.startsWith("border") || prop === "outline" || prop === "outline-color") return "border";
  if (SHADOW_PROPS.has(prop)) return "shadow";
  return null;
}

/** Keeps only the selectors that match the source's scope, and prefixes them. */
function scopeSelectors(selectors, match) {
  return selectors.filter((s) => match.test(s)).map((s) => `${PREFIX} ${s.trim()}`);
}

/** Copies matching rules into `target`, keeping the media queries that wrap them. */
function collect(container, target, match) {
  container.each((node) => {
    if (node.type === "rule") {
      const selectors = scopeSelectors(node.selectors ?? [], match);
      if (selectors.length === 0) return;
      const copy = postcss.rule({ selectors });
      let onAccentBg = false;
      node.each((decl) => {
        if (decl.type !== "decl") return;
        const role = roleFor(decl.prop);
        if (!role) {
          copy.append(decl.clone());
          return;
        }
        const { value, kinds } = remapValue(decl.value, role);
        if (role === "bg" && (kinds.has("accent") || kinds.has("accentDeep"))) onAccentBg = true;
        copy.append(postcss.decl({ prop: decl.prop, value, important: decl.important }));
      });
      // Text on an accent-coloured surface must be dark to stay readable.
      if (onAccentBg) {
        copy.each((decl) => {
          if (decl.type === "decl" && decl.prop === "color") decl.value = NAVY;
        });
      }
      if (copy.nodes && copy.nodes.length) target.append(copy);
    } else if (node.type === "atrule" && (node.name === "media" || node.name === "supports")) {
      const wrapper = postcss.atRule({ name: node.name, params: node.params });
      collect(node, wrapper, match);
      if (wrapper.nodes && wrapper.nodes.length) target.append(wrapper);
    }
  });
}

const out = postcss.root();
for (const { file, match } of SOURCES) {
  const source = await readFile(file, "utf8");
  const ast = postcss.parse(source, { from: file });
  collect(ast, out, match);
}

const banner =
  "/* GENERATED by scripts/build-about-theme-css.mjs from the About page (.ae) rules in globals.css and the team cards in TeamSection.css. Do not edit by hand. */\n";
// Fixes for places where a broader rule would otherwise override the scoped colour.
// The "Our Team" badge sits on a solid cyan pill, so its text must stay dark.
const FIXES = `
.about-theme .ae-center p.ae-badge {
  color: ${NAVY};
}

/* The hero photo has green plants and walls. Desaturate it so no green shows against the navy overlay. */
.about-theme .ae-hero-photo {
  filter: saturate(0.25) brightness(0.95);
}
`;

const css = out.toString() + FIXES;
await writeFile(to, banner + css + "\n", "utf8");
console.log(`Wrote ${path.relative(root, to)} (${(css.length / 1024).toFixed(1)} KB)`);
