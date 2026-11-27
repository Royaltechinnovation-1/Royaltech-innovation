import type { CSSProperties } from "react";
import type { IndustryId } from "@/data/mobile-app-page";

/**
 * App interfaces rendered inside the device mockups. Everything is sized with `cqw`
 * (see mobile-app.css) so a screen looks the same at any phone size.
 * Dashboards use shapes and skeleton bars instead of invented numbers.
 */

const w = (n: number): CSSProperties => ({ width: `${n}%` });
const h = (n: number): CSSProperties => ({ height: `${n}%` });

function TabBar({ on = 0 }: { on?: number }) {
  return (
    <div className="mp-tabbar">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className={`mp-tab${i === on ? " on" : ""}`} />
      ))}
    </div>
  );
}

function Bars({ values, className = "" }: { values: number[]; className?: string }) {
  return (
    <div className={`mp-bars ${className}`.trim()}>
      {values.map((v, i) => (
        <i key={i} style={h(v)} />
      ))}
    </div>
  );
}

/* ---------------- Core product screens ---------------- */

export function EcommerceScreen() {
  return (
    <>
      <div className="mp-body">
        <div className="mp-row mp-sp">
          <div>
            <div className="mp-sub">Good morning</div>
            <div className="mp-h">Discover</div>
          </div>
          <span className="mp-avatar" />
        </div>
        <div className="mp-search">Search products</div>
        <div className="mp-chips">
          <span className="mp-chip on">All</span>
          <span className="mp-chip">New</span>
          <span className="mp-chip">Popular</span>
        </div>
        <div className="mp-banner">
          <div className="mp-banner-k">Featured</div>
          <div className="mp-banner-t">New season collection</div>
          <span className="mp-btn mp-btn--sm">Shop now</span>
        </div>
        <div className="mp-grid2">
          <div className="mp-prod">
            <div className="mp-img a" />
            <div className="mp-t">Studio Headphones</div>
            <div className="mp-price">$129</div>
          </div>
          <div className="mp-prod">
            <div className="mp-img b" />
            <div className="mp-t">Travel Backpack</div>
            <div className="mp-price">$68</div>
          </div>
        </div>
      </div>
      <TabBar on={0} />
    </>
  );
}

export function AnalyticsScreen() {
  return (
    <>
      <div className="mp-body">
        <div className="mp-row mp-sp">
          <div>
            <div className="mp-sub">Business overview</div>
            <div className="mp-h">Dashboard</div>
          </div>
          <span className="mp-avatar" />
        </div>
        <div className="mp-seg">
          <span className="on">Week</span>
          <span>Month</span>
          <span>Year</span>
        </div>
        <div className="mp-card mp-chart">
          <div className="mp-row mp-sp">
            <span className="mp-sub">Activity</span>
            <span className="mp-chip on">Live</span>
          </div>
          <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="mp-area">
            <defs>
              <linearGradient id="mpa" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#38bdf8" stopOpacity=".55" />
                <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 60 C20 52 30 30 50 36 S80 62 100 40 S140 14 160 26 S190 20 200 10 V80 H0Z" fill="url(#mpa)" />
            <path d="M0 60 C20 52 30 30 50 36 S80 62 100 40 S140 14 160 26 S190 20 200 10" fill="none" stroke="#67e8f9" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </div>
        <div className="mp-grid2">
          <div className="mp-card">
            <div className="mp-sub">Orders</div>
            <div className="mp-line" style={w(60)} />
            <Bars values={[40, 62, 48, 80, 58, 90]} className="mini" />
          </div>
          <div className="mp-card">
            <div className="mp-sub">Customers</div>
            <div className="mp-line" style={w(48)} />
            <Bars values={[70, 52, 66, 44, 72, 58]} className="mini alt" />
          </div>
        </div>
      </div>
      <TabBar on={1} />
    </>
  );
}

export function BookingScreen() {
  return (
    <>
      <div className="mp-body">
        <div className="mp-row mp-sp">
          <div>
            <div className="mp-sub">Appointments</div>
            <div className="mp-h">Book a visit</div>
          </div>
          <span className="mp-avatar" />
        </div>
        <div className="mp-days">
          {["M", "T", "W", "T", "F"].map((d, i) => (
            <div key={i} className={`mp-day${i === 2 ? " on" : ""}`}>
              <span>{d}</span>
              <b>{12 + i}</b>
            </div>
          ))}
        </div>
        <div className="mp-sub">Available times</div>
        <div className="mp-slots">
          {["09:30", "10:30", "11:00", "13:30", "14:00", "16:30"].map((t, i) => (
            <span key={t} className={`mp-slot${i === 1 ? " on" : ""}`}>
              {t}
            </span>
          ))}
        </div>
        <div className="mp-card mp-row">
          <span className="mp-dot" />
          <div className="mp-grow">
            <div className="mp-t">Consultation</div>
            <div className="mp-line" style={w(55)} />
          </div>
          <span className="mp-chip on">Selected</span>
        </div>
        <span className="mp-btn">Confirm booking</span>
      </div>
      <TabBar on={2} />
    </>
  );
}

export function BusinessScreen() {
  return (
    <>
      <div className="mp-body">
        <div className="mp-row mp-sp">
          <div>
            <div className="mp-sub">Welcome back</div>
            <div className="mp-h">Today</div>
          </div>
          <span className="mp-avatar" />
        </div>
        <div className="mp-hero-card">
          <div className="mp-banner-k">Next up</div>
          <div className="mp-banner-t">Team review &amp; delivery plan</div>
          <div className="mp-prog">
            <i style={w(64)} />
          </div>
        </div>
        <div className="mp-sub">Recent activity</div>
        {[70, 56, 64].map((n, i) => (
          <div key={i} className="mp-card mp-row">
            <span className={`mp-dot d${i}`} />
            <div className="mp-grow">
              <div className="mp-line dark" style={w(n)} />
              <div className="mp-line" style={w(n - 24)} />
            </div>
            <span className="mp-chip">{["New", "Open", "Done"][i]}</span>
          </div>
        ))}
      </div>
      <TabBar on={0} />
    </>
  );
}

export function ChatScreen() {
  return (
    <>
      <div className="mp-body">
        <div className="mp-row">
          <span className="mp-avatar" />
          <div>
            <div className="mp-t">Support team</div>
            <div className="mp-sub">Online now</div>
          </div>
        </div>
        <div className="mp-bubble them">Hi! How can we help with your order today?</div>
        <div className="mp-bubble me">Can I change the delivery time?</div>
        <div className="mp-bubble them">Of course. Tomorrow morning works?</div>
        <div className="mp-bubble me">Perfect, thank you!</div>
        <div className="mp-typing">
          <i />
          <i />
          <i />
        </div>
        <div className="mp-input mp-send">Write a message</div>
      </div>
    </>
  );
}

export function TrackingScreen() {
  return (
    <>
      <div className="mp-map">
        <svg viewBox="0 0 200 220" preserveAspectRatio="none">
          <path d="M-10 150 C40 130 60 90 110 100 S170 60 215 40" fill="none" stroke="#cdd9f3" strokeWidth="9" strokeLinecap="round" />
          <path d="M20 230 C50 180 90 170 120 130 S150 70 160 -10" fill="none" stroke="#dbe5fa" strokeWidth="7" strokeLinecap="round" />
          <path d="M-10 150 C40 130 60 90 110 100 S170 60 215 40" fill="none" stroke="#2563eb" strokeWidth="3" strokeDasharray="1 7" strokeLinecap="round" />
        </svg>
        <span className="mp-pin" style={{ left: "52%", top: "40%" }} />
        <span className="mp-pin dest" style={{ left: "82%", top: "20%" }} />
      </div>
      <div className="mp-sheet">
        <div className="mp-row mp-sp">
          <div className="mp-t">Arriving soon</div>
          <span className="mp-chip on">Live</span>
        </div>
        <div className="mp-prog">
          <i style={w(62)} />
        </div>
        <div className="mp-row">
          <span className="mp-avatar" />
          <div className="mp-grow">
            <div className="mp-line dark" style={w(56)} />
            <div className="mp-line" style={w(38)} />
          </div>
        </div>
      </div>
    </>
  );
}

export function AuthScreen() {
  return (
    <div className="mp-body mp-center">
      <span className="mp-logo" />
      <div className="mp-h">Welcome back</div>
      <div className="mp-sub">Sign in to continue</div>
      <div className="mp-input">Email address</div>
      <div className="mp-input">Password</div>
      <span className="mp-btn">Sign in</span>
      <div className="mp-or">
        <i />
        <span>or continue with</span>
        <i />
      </div>
      <div className="mp-row mp-social">
        <span className="mp-soc" />
        <span className="mp-soc" />
        <span className="mp-soc" />
      </div>
    </div>
  );
}

export function PaymentScreen() {
  return (
    <>
      <div className="mp-body">
        <div className="mp-h">Checkout</div>
        <div className="mp-cardvisual">
          <div className="mp-cardvisual-chip" />
          <div className="mp-cardvisual-n">•••• •••• •••• 4821</div>
          <div className="mp-row mp-sp">
            <span className="mp-sub light">Card holder</span>
            <span className="mp-sub light">12/29</span>
          </div>
        </div>
        <div className="mp-card">
          <div className="mp-row mp-sp">
            <span className="mp-sub">Subtotal</span>
            <div className="mp-line" style={w(22)} />
          </div>
          <div className="mp-row mp-sp">
            <span className="mp-sub">Delivery</span>
            <div className="mp-line" style={w(16)} />
          </div>
        </div>
        <span className="mp-btn">Pay securely</span>
        <div className="mp-secure">Encrypted payment</div>
      </div>
    </>
  );
}

export function NotificationsScreen() {
  return (
    <>
      <div className="mp-body">
        <div className="mp-h">Notifications</div>
        {[
          ["Order shipped", "Your package is on its way"],
          ["New message", "Support replied to your question"],
          ["Reminder", "Your appointment is tomorrow"],
        ].map(([t, s], i) => (
          <div key={t} className="mp-card mp-row">
            <span className={`mp-dot d${i}`} />
            <div className="mp-grow">
              <div className="mp-t">{t}</div>
              <div className="mp-sub">{s}</div>
            </div>
          </div>
        ))}
        <div className="mp-card mp-row">
          <div className="mp-grow">
            <div className="mp-t">Push preferences</div>
            <div className="mp-sub">Choose what you hear about</div>
          </div>
          <span className="mp-toggle on" />
        </div>
      </div>
      <TabBar on={3} />
    </>
  );
}

/* ---------------- Design fidelity (wireframe → prototype → final) ---------------- */

export function DesignScreen({ level }: { level: 1 | 2 | 3 }) {
  return (
    <div className={`mp-body mp-design lvl-${level}`}>
      <div className="mp-row mp-sp">
        <div className="mp-d-title" />
        <span className="mp-d-av" />
      </div>
      <div className="mp-d-hero">
        {level === 3 ? <span className="mp-banner-t">Plan your next trip</span> : null}
        {level === 3 ? <span className="mp-btn mp-btn--sm">Explore</span> : null}
        {level < 3 ? <span className="mp-d-x" /> : null}
      </div>
      <div className="mp-grid2">
        <div className="mp-d-card">
          <div className="mp-d-img" />
          <div className="mp-d-line" />
        </div>
        <div className="mp-d-card">
          <div className="mp-d-img" />
          <div className="mp-d-line" />
        </div>
      </div>
      <div className="mp-d-btn" />
      {level === 1 ? (
        <>
          <span className="mp-note n1">1</span>
          <span className="mp-note n2">2</span>
          <span className="mp-note n3">3</span>
        </>
      ) : null}
    </div>
  );
}

/* ---------------- Process stage screens ---------------- */

export function DiscoveryScreen() {
  return (
    <div className="mp-body">
      <div className="mp-h">Project brief</div>
      {["Business goals", "Target audience", "Core features", "Platforms", "Integrations"].map((t, i) => (
        <div key={t} className="mp-card mp-row">
          <span className={`mp-check${i < 3 ? " on" : ""}`} />
          <div className="mp-grow">
            <div className="mp-t">{t}</div>
            <div className="mp-line" style={w(70 - i * 8)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function BuildScreen() {
  return (
    <>
      <div className="mp-body">
        <div className="mp-row mp-sp">
          <div className="mp-h">Building</div>
          <span className="mp-chip on">In progress</span>
        </div>
        <div className="mp-prog big">
          <i style={w(68)} />
        </div>
        <div className="mp-skel hero" />
        <div className="mp-grid2">
          <div className="mp-skel card" />
          <div className="mp-skel card" />
        </div>
        <div className="mp-skel line" />
        <div className="mp-skel line s" />
      </div>
      <TabBar on={0} />
    </>
  );
}

export function DeviceTestScreen() {
  return (
    <div className="mp-body">
      <div className="mp-h">Device testing</div>
      {["Android phone", "Android tablet", "iPhone", "iPad", "Older OS versions"].map((t, i) => (
        <div key={t} className="mp-card mp-row">
          <span className={`mp-check${i < 4 ? " on" : ""}`} />
          <div className="mp-grow">
            <div className="mp-t">{t}</div>
          </div>
          <span className="mp-chip">{i < 4 ? "Checked" : "Queued"}</span>
        </div>
      ))}
    </div>
  );
}

export function LaunchScreen() {
  return (
    <div className="mp-body mp-center">
      <span className="mp-logo big" />
      <div className="mp-h">Your App</div>
      <div className="mp-sub">Ready for store review</div>
      <div className="mp-row mp-store">
        <span className="mp-badge">Google Play</span>
        <span className="mp-badge">App Store</span>
      </div>
      <div className="mp-card mp-full">
        <div className="mp-line dark" style={w(70)} />
        <div className="mp-line" style={w(92)} />
        <div className="mp-line" style={w(80)} />
      </div>
      <span className="mp-btn">Submit for review</span>
    </div>
  );
}

export function UpdateScreen() {
  return (
    <>
      <div className="mp-body">
        <div className="mp-h">Updates</div>
        <div className="mp-hero-card">
          <div className="mp-banner-k">Update ready</div>
          <div className="mp-banner-t">Compatibility improvements</div>
          <span className="mp-btn mp-btn--sm light">Review</span>
        </div>
        {[
          ["Security patch", "Ready for review"],
          ["OS compatibility", "Testing"],
          ["API monitoring", "Active"],
        ].map(([t, s], i) => (
          <div key={t} className="mp-card mp-row">
            <span className={`mp-dot d${i}`} />
            <div className="mp-grow">
              <div className="mp-t">{t}</div>
              <div className="mp-sub">{s}</div>
            </div>
          </div>
        ))}
      </div>
      <TabBar on={1} />
    </>
  );
}

export function ChecklistScreen() {
  return (
    <div className="mp-body">
      <div className="mp-h">Release checklist</div>
      {["Secure sign-in", "API integration", "Device compatibility", "Accessibility", "Store assets"].map((t, i) => (
        <div key={t} className="mp-card mp-row">
          <span className={`mp-check${i < 4 ? " on" : ""}`} />
          <div className="mp-grow">
            <div className="mp-t">{t}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Industry showcase ---------------- */

type IndustryCfg = {
  kind: "grid" | "list" | "map" | "wallet" | "stay";
  title: string;
  sub: string;
  items: string[];
  action: string;
};

const INDUSTRY_SCREENS: Record<IndustryId, IndustryCfg> = {
  ecommerce: { kind: "grid", title: "Shop", sub: "Free delivery over $50", items: ["Sneakers", "Smart watch", "Daypack", "Sunglasses"], action: "View cart" },
  healthcare: { kind: "list", title: "Care", sub: "Upcoming visits", items: ["General check-up", "Lab results", "Prescription refill", "Video consult"], action: "Book appointment" },
  education: { kind: "list", title: "Courses", sub: "Continue learning", items: ["Design basics", "Data literacy", "Business writing", "Public speaking"], action: "Resume lesson" },
  realestate: { kind: "grid", title: "Homes", sub: "Near you", items: ["Garden Villa", "City Loft", "Lake Studio", "Penthouse"], action: "Schedule a viewing" },
  food: { kind: "grid", title: "Menu", sub: "Popular today", items: ["Margherita", "Veg Bowl", "Pasta", "Dessert"], action: "Place order" },
  logistics: { kind: "map", title: "Delivery", sub: "On the way", items: [], action: "Track shipment" },
  fintech: { kind: "wallet", title: "Wallet", sub: "Recent activity", items: ["Transfer", "Bill payment", "Subscription"], action: "Send money" },
  travel: { kind: "stay", title: "Stays", sub: "Find your trip", items: [], action: "Reserve now" },
  manufacturing: { kind: "list", title: "Inventory", sub: "Floor overview", items: ["Raw materials", "Work orders", "Quality checks", "Dispatch"], action: "Approve" },
  startups: { kind: "list", title: "Product", sub: "Your MVP", items: ["Onboarding", "Feed", "Messaging", "Payments"], action: "Release build" },
  professional: { kind: "list", title: "Client portal", sub: "Active matters", items: ["Documents", "Invoices", "Messages", "Meetings"], action: "Schedule meeting" },
  ondemand: { kind: "map", title: "Service", sub: "Provider assigned", items: [], action: "Contact provider" },
};

export function IndustryScreen({ id }: { id: IndustryId }) {
  const cfg = INDUSTRY_SCREENS[id];

  if (cfg.kind === "map") {
    return (
      <>
        <div className="mp-map">
          <svg viewBox="0 0 200 220" preserveAspectRatio="none">
            <path d="M-10 160 C40 120 70 130 110 90 S170 60 215 30" fill="none" stroke="#cdd9f3" strokeWidth="9" strokeLinecap="round" />
            <path d="M30 230 C60 190 80 150 130 140 S190 120 210 80" fill="none" stroke="#dbe5fa" strokeWidth="7" strokeLinecap="round" />
            <path d="M-10 160 C40 120 70 130 110 90 S170 60 215 30" fill="none" stroke="#2563eb" strokeWidth="3" strokeDasharray="1 7" strokeLinecap="round" />
          </svg>
          <span className="mp-pin" style={{ left: "45%", top: "52%" }} />
          <span className="mp-pin dest" style={{ left: "84%", top: "14%" }} />
        </div>
        <div className="mp-sheet">
          <div className="mp-row mp-sp">
            <div className="mp-t">{cfg.title}</div>
            <span className="mp-chip on">{cfg.sub}</span>
          </div>
          <div className="mp-prog">
            <i style={w(58)} />
          </div>
          <span className="mp-btn">{cfg.action}</span>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="mp-body">
        <div className="mp-row mp-sp">
          <div>
            <div className="mp-sub">{cfg.sub}</div>
            <div className="mp-h">{cfg.title}</div>
          </div>
          <span className="mp-avatar" />
        </div>

        {cfg.kind === "grid" ? (
          <div className="mp-grid2">
            {cfg.items.map((t, i) => (
              <div key={t} className="mp-prod">
                <div className={`mp-img ${["a", "b", "c", "d"][i]}`} />
                <div className="mp-t">{t}</div>
                <div className="mp-line" style={w(50)} />
              </div>
            ))}
          </div>
        ) : null}

        {cfg.kind === "list"
          ? cfg.items.map((t, i) => (
              <div key={t} className="mp-card mp-row">
                <span className={`mp-dot d${i % 3}`} />
                <div className="mp-grow">
                  <div className="mp-t">{t}</div>
                  <div className="mp-line" style={w(62 - i * 6)} />
                </div>
              </div>
            ))
          : null}

        {cfg.kind === "wallet" ? (
          <>
            <div className="mp-cardvisual">
              <div className="mp-cardvisual-chip" />
              <div className="mp-cardvisual-n">Balance</div>
              <div className="mp-line light" style={w(40)} />
            </div>
            {cfg.items.map((t, i) => (
              <div key={t} className="mp-card mp-row">
                <span className={`mp-dot d${i}`} />
                <div className="mp-grow">
                  <div className="mp-t">{t}</div>
                  <div className="mp-line" style={w(48)} />
                </div>
              </div>
            ))}
          </>
        ) : null}

        {cfg.kind === "stay" ? (
          <>
            <div className="mp-search">Where to?</div>
            <div className="mp-banner stay">
              <div className="mp-banner-k">Featured stay</div>
              <div className="mp-banner-t">Seaside retreat</div>
            </div>
            <div className="mp-days">
              {["Mon", "Tue", "Wed", "Thu"].map((d, i) => (
                <div key={d} className={`mp-day${i === 1 || i === 2 ? " on" : ""}`}>
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </>
        ) : null}

        <span className="mp-btn">{cfg.action}</span>
      </div>
      <TabBar on={0} />
    </>
  );
}
