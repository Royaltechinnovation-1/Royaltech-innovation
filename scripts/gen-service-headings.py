"""Appends unified H2/H3/H4 typography (Inter 600) to each themed service stylesheet. Run after gen-service-surfaces.py."""
m = {"gx":"generative-ai","ix":"ai-integration","ag":"ai-agents","ab":"ai-chatbot","cs":"custom-software","bx":"business-intelligence","mx":"machine-learning"}
mk = "Unified card headings"
for p,f in m.items():
    path=f"src/styles/{f}.css"
    css=open(path).read()
    if mk in css:
        css=css[:css.rindex("/* ---",0,css.index(mk))].rstrip()+"\n"
    extra = ""
    if p=="ix":
        extra = ".svx-root.ix-root .ix-pipe--light li.core,\n.svx-root.ix-root .ix-pipe--light li.core * { color: #ffffff; }\n"
    css += f"""
/* ------------------------------------------------------------------
 * {mk}: weight 600, Inter, home-style tracking on every service page.
 * ------------------------------------------------------------------ */
.svx-root.{p}-root h2,
.svx-root.{p}-root h3,
.svx-root.{p}-root h4 {{
  font-family: var(--font-inter, "Inter"), ui-sans-serif, system-ui, sans-serif;
  font-weight: 600;
  letter-spacing: normal;
}}
{extra}"""
    open(path,"w").write(css)
