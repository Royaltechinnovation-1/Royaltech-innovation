import type { CSSProperties } from "react";
import { Win } from "./Phone";

const w = (n: number): CSSProperties => ({ width: `${n}%` });

function Spark({ points }: { points: string }) {
  return (
    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="mw-spark">
      <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Backend / admin dashboard that sits behind a custom app. Labels only, no invented figures. */
export function CustomWindow() {
  return (
    <Win label="Illustration of a custom mobile app admin dashboard with activity charts and a live activity feed" title="Operations dashboard">
      <div className="mw-grid">
        <aside className="mw-side">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={i === 0 ? "on" : ""} />
          ))}
        </aside>
        <div className="mw-main">
          <div className="mw-tiles">
            {[
              ["Orders", "4,22 18,18 32,20 46,12 60,14 74,7 100,4"],
              ["Users", "4,24 18,20 32,22 46,18 60,12 74,14 100,6"],
              ["Bookings", "4,18 18,22 32,14 46,16 60,9 74,12 100,5"],
            ].map(([k, p]) => (
              <div key={k} className="mw-tile">
                <span className="mw-k">{k}</span>
                <div className="mw-line" style={w(46)} />
                <Spark points={p} />
              </div>
            ))}
          </div>
          <div className="mw-row2">
            <div className="mw-panel">
              <span className="mw-k">Activity overview</span>
              <svg viewBox="0 0 200 70" preserveAspectRatio="none" className="mw-area">
                <defs>
                  <linearGradient id="mwa" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#38bdf8" stopOpacity=".5" />
                    <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 52 C25 48 35 24 60 30 S95 54 120 34 S160 10 180 22 S196 14 200 8 V70 H0Z" fill="url(#mwa)" />
                <path d="M0 52 C25 48 35 24 60 30 S95 54 120 34 S160 10 180 22 S196 14 200 8" fill="none" stroke="#67e8f9" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="mw-panel">
              <span className="mw-k">Live activity</span>
              {["New booking received", "Order status updated", "Payment confirmed"].map((t, i) => (
                <div key={t} className="mw-feed">
                  <span className={`mw-dot d${i}`} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mw-panel mw-table">
            {[62, 48, 56].map((n, i) => (
              <div key={i} className="mw-tr">
                <span className="mw-av" />
                <div className="mw-line" style={w(n)} />
                <span className="mw-pill">{["Active", "Pending", "Active"][i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Win>
  );
}

/** Release / maintenance dashboard. Statuses are descriptive, not performance numbers. */
export function MaintWindow() {
  return (
    <Win label="Illustration of an app maintenance dashboard showing version management and update notifications" title="Release manager">
      <div className="mw-maint">
        <div className="mw-panel">
          <span className="mw-k">App versions</span>
          {[
            ["Production", "Live"],
            ["Staging", "Testing"],
            ["Development", "In progress"],
          ].map(([env, st], i) => (
            <div key={env} className="mw-ver">
              <span className={`mw-dot d${i}`} />
              <div className="mw-grow">
                <div className="mw-t">{env}</div>
                <div className="mw-line" style={w(52 - i * 8)} />
              </div>
              <span className="mw-pill">{st}</span>
            </div>
          ))}
        </div>
        <div className="mw-panel">
          <span className="mw-k">Update notifications</span>
          {[
            ["OS compatibility update", "Queued"],
            ["Security patch", "Ready for review"],
            ["API monitoring", "Active"],
          ].map(([t, st], i) => (
            <div key={t} className="mw-ver">
              <span className={`mw-bell d${i}`} />
              <div className="mw-grow">
                <div className="mw-t">{t}</div>
                <div className="mw-sub">{st}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mw-panel mw-wide">
          <span className="mw-k">Support queue</span>
          <div className="mw-queue">
            {["Bug reports", "Enhancement requests", "Monitoring alerts"].map((t) => (
              <span key={t} className="mw-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Win>
  );
}

/** Quality overview: compatibility, testing workflow, security and optimisation checklists. */
export function QualityWindow() {
  return (
    <Win label="Illustration of an app quality dashboard covering device compatibility, testing workflow, security and optimization" title="App quality overview">
      <div className="mw-quality">
        <div className="mw-panel">
          <span className="mw-k">Device compatibility</span>
          {["Android phones", "Android tablets", "iPhone", "iPad"].map((t) => (
            <div key={t} className="mw-chk">
              <span className="mw-tick" />
              <span>{t}</span>
            </div>
          ))}
        </div>
        <div className="mw-panel">
          <span className="mw-k">Testing workflow</span>
          <div className="mw-flow">
            {["Build", "Functional", "Device", "Security", "Release"].map((t, i) => (
              <span key={t} className={`mw-step${i < 3 ? " on" : ""}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="mw-panel">
          <span className="mw-k">Security review</span>
          {["Secure authentication", "Protected API calls", "Careful data handling"].map((t) => (
            <div key={t} className="mw-chk">
              <span className="mw-tick" />
              <span>{t}</span>
            </div>
          ))}
        </div>
        <div className="mw-panel">
          <span className="mw-k">Optimization</span>
          {["Efficient API requests", "Image optimization", "Database tuning"].map((t) => (
            <div key={t} className="mw-chk">
              <span className="mw-tick" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </Win>
  );
}
