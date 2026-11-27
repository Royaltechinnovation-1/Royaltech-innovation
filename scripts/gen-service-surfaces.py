"""Second pass: converts hard-coded light surfaces on a service page to glass,
keeps product mockups light with dark ink. Usage: gen-service-surfaces.py <prefix> <css>"""
import re, sys
MOCK = {
 "gx": ["gx-out--paper","gx-paper","gx-chat"],
 "ix": [],
 "ag": [],
 "ab": ["ab-webchat","ab-browser","ab-wa-frame","ab-desk","ab-msg"],
 "cs": ["cs-screen","cs-browser","cs-tablet","cs-win","cs-float","cs-intro-visual","cs-kpis","cs-bar","cs-panel","cs-chip","cs-table","cs-filter","cs-dir","cs-records","cs-addr","cs-subpanel"],
 "bx": [],
}
p, path = sys.argv[1], sys.argv[2]
css = open(path).read()
marker = "Hard-coded light surfaces"
if marker in css:
    i = css.index(marker)
    css = css[:css.rindex("/* ---", 0, i)].rstrip() + "\n"
    open(path, "w").write(css)
orig = css[:css.index("Home-page colour and type (shared service theme)")]
orig = re.sub(r"/\*.*?\*/", "", orig, flags=re.S)
light = re.compile(r"background(?:-color)?\s*:\s*(#fff\b|#ffffff|white|#f[0-9a-f]{5}\b|#f[0-9a-f]{2}\b|#e[0-9a-f]{5}\b|#d[0-9a-f]{5}\b|var\(--\w+-(?:50|100|200|tint)\)|linear-gradient\([^;]*(?:#fff|#f[0-9a-f]{5})[^;]*\))", re.I)
skip_re = re.compile(r"(section|btn|hero|final-wrap|acc-ic|:hover|:focus|\bth\b|\.core|svc--|svc-n\b|-num\b|svc-tag|-n--)|^\.(svx-root\.)?%s-root$|-svc$" % p)
glass, tint, seen = [], [], set()
mock = MOCK.get(p, [])
for m in re.finditer(r"([^{}@]+)\{([^{}]*)\}", orig):
    body = m.group(2)
    if not light.search(body): continue
    for s in m.group(1).split(","):
        s = re.sub(r"\s+"," ",s).strip()
        if not s or s in seen: continue
        seen.add(s)
        if any(t in s for t in mock): continue
        if skip_re.search(s) or re.fullmatch(r"\.svx-root\.%s-root|\.%s-root" % (p,p), s) or s.endswith(f".{p}-svc"): continue
        if "--" in s or re.search(r"\.(hl|ok|done|gate|ai|act)\b", s):
            tint.append(s); continue
        if re.search(r"\b(span|small|em|b|i|code)$", s) and ">" not in s: pass
        glass.append(s)
pref = f".svx-root"
def pre(s):
    if s.startswith(f".{p}-root "): return f"{pref}.{p}-root " + s[len(f".{p}-root "):]
    return f"{pref}.{p}-root {s}"
def join(lst): return ",\n".join(pre(s) for s in lst)
out = f"\n/* ------------------------------------------------------------------\n * {marker} converted to home glass; product mockups stay light.\n * ------------------------------------------------------------------ */\n"
out += join(glass) + """ {
  background: var(--@P-glass);
  border-color: rgba(255, 255, 255, 0.14);
  box-shadow: none;
}
""".replace("@P", p)
if tint:
    out += join(tint) + """ {
  background: var(--@P-glass);
  border-color: rgba(103, 232, 249, 0.38);
  box-shadow: none;
}
""".replace("@P", p)
if mock:
    sel = ",\n".join(f'{pref}.{p}-root [class*="{t}"]' for t in mock)
    out += sel + """ {
  --@P-ink: #0b1530;
  --@P-body: #475569;
  --@P-muted: #64748b;
  --@P-line: #e2e8f0;
  --@P-tint: #f4f7fb;
  --@P-glass: #f4f7fb;
  color: #0b1530;
}
""".replace("@P", p)

WHITE = {"#fff","#ffffff","#1e293b","#0b1530","#0f172a"}
BODY = {"#334155","#475569"}
MUTED = {"#64748b"}
CYAN = {"#1d4ed8","#1e40af","#0891b2","#0e7490","#075985","#2563eb"}
GREEN = {"#047857","#059669","#065f46"}
def mapcolor(v):
    v = v.strip().lower()
    mv = re.fullmatch(r"var\(--\w\w-(950|900|800|ink|txt|fg)\)", v)
    if mv: return "#ffffff"
    if re.fullmatch(r"var\(--\w\w-(700|600)\)", v): return "#67e8f9"
    if re.fullmatch(r"var\(--\w\w-ok\)", v): return "#6ee7b7"
    if re.fullmatch(r"var\(--\w\w-(hold|warn)\)", v): return "#fcd34d"
    if v in WHITE and v not in {"#fff","#ffffff"}: return "#ffffff"
    if v in BODY: return "rgba(255, 255, 255, 0.78)"
    if v in MUTED: return "rgba(255, 255, 255, 0.62)"
    if v in CYAN: return "#67e8f9"
    if v in GREEN: return "#6ee7b7"
    return None
mock_not = ""
if mock:
    lst = ", ".join(f'[class*="{t}"]' for t in mock)
    mock_not = f":not(:is({lst}, {lst.replace(']', '] *')}))"
remap_rules, seen2 = [], {}
for m in re.finditer(r"([^{}@]+)\{([^{}]*)\}", orig):
    cm = list(re.finditer(r"(?<![-\w])color\s*:\s*([^;}]+)", m.group(2)))
    if not cm: continue
    new = mapcolor(cm[-1].group(1))
    if not new: continue
    for sel in m.group(1).split(","):
        sel = re.sub(r"\s+"," ",sel).strip()
        if not sel or "::" in sel or re.search(r"btn|\.core|:hover:not|-root$|section--|final-wrap|hero$", sel) and not re.search(r"__", sel):
            if "btn" in sel or ".core" in sel or "::" in sel: continue
        if any(t in sel for t in mock): continue
        if sel in (f".{p}-root", f".svx-root.{p}-root"): continue
        seen2[sel] = new
for sel, new in seen2.items():
    remap_rules.append(f"{pre(sel)}{mock_not} {{ color: {new}; }}")
if remap_rules:
    out += "\n/* Text colours remapped from the light theme to the home palette. */\n" + "\n".join(remap_rules) + "\n"

FIX = {
 "ag": """.svx-root.ag-root .ag-svc-tag {
  background: rgba(103, 232, 249, 0.12); border-color: rgba(103, 232, 249, 0.32); color: #67e8f9;
}
""",
 "ix": ".svx-root.ix-root .core { color: #ffffff; --ix-ink: #ffffff; }\n",
 "ab": """.svx-root.ab-root .ab-svc-tag,
.svx-root.ab-root .ab-svc-tag--blue,
.svx-root.ab-root .ab-domain-n,
.svx-root.ab-root .ab-domain-n--0,
.svx-root.ab-root .ab-domain-n--2 {
  background: rgba(103, 232, 249, 0.12); border-color: rgba(103, 232, 249, 0.32); color: #67e8f9;
}
.svx-root.ab-root .ab-svc-tag--green,
.svx-root.ab-root .ab-domain-n--1 {
  background: rgba(110, 231, 183, 0.12); border-color: rgba(110, 231, 183, 0.32); color: #6ee7b7;
}
.svx-root.ab-root .ab-avatar { color: #0b1220; }
.svx-root.ab-root .ab-msg--user,
.svx-root.ab-root .ab-wa-frame-h,
.svx-root.ab-root .ab-wa-frame-h *,
.svx-root.ab-root .ab-desk-h,
.svx-root.ab-root .ab-desk-h * { color: #ffffff; }
.svx-root.ab-root .ab-ws,
.svx-root.ab-root .ab-ws [class*="ab-msg"] {
  --ab-ink: #ffffff; --ab-body: rgba(255, 255, 255, 0.78); --ab-muted: rgba(255, 255, 255, 0.62);
  --ab-line: rgba(255, 255, 255, 0.12); color: #ffffff;
}
""",
 "cs": """.svx-root.cs-root .cs-num,
.svx-root.cs-root .cs-svc-n {
  background: rgba(103, 232, 249, 0.12); border-color: rgba(103, 232, 249, 0.32); color: #67e8f9;
}
.svx-root.cs-root :is(b, em, td, span, i).mute { color: #64748b; }
.svx-root.cs-root .cs-float--arch,
.svx-root.cs-root .cs-float--arch *,
.svx-root.cs-root .cs-win-bar,
.svx-root.cs-root .cs-win-bar *,
.svx-root.cs-root .cs-screen-h,
.svx-root.cs-root .cs-screen-h * { color: #ffffff; }
""",
}
out += FIX.get(p, "")
open(path, "a").write(out)
print(p, "glass", len(glass), "tint", len(tint), "mock", len(mock))
