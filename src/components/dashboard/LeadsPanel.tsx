"use client";

import { useEffect, useState, useTransition } from "react";
import type { Lead, LeadStatus } from "@/lib/dashboard/types";

const STATUSES: LeadStatus[] = [
  "new",
  "contacted",
  "qualified",
  "in_progress",
  "won",
  "lost",
];

export function LeadsPanel({
  department,
  heading,
}: {
  department?: "sales" | "development";
  heading: string;
}) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  async function load() {
    const query = department ? `?department=${department}` : "";
    const res = await fetch(`/api/dashboard/leads${query}`);
    const data = (await res.json()) as { ok?: boolean; leads?: Lead[]; error?: string };
    if (!res.ok || !data.ok) {
      setError(data.error || "Could not load leads.");
      return;
    }
    setLeads(data.leads || []);
    setError("");
  }

  useEffect(() => {
    startTransition(() => {
      void load();
    });
  }, [department]);

  async function patchLead(id: string, patch: Partial<Lead>) {
    const res = await fetch("/api/dashboard/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...patch }),
    });
    if (!res.ok) return;
    await load();
  }

  return (
    <section className="db-panel">
      <h2>
        {heading} {pending ? "…" : `(${leads.length})`}
      </h2>
      {error ? <p className="db-empty">{error}</p> : null}
      {!error && leads.length === 0 ? (
        <p className="db-empty">
          No website leads yet. New contact/quote form submissions will appear
          here automatically.
        </p>
      ) : null}
      {leads.length > 0 ? (
        <div className="db-table-wrap">
          <table className="db-table">
            <thead>
              <tr>
                <th>Lead</th>
                <th>Service</th>
                <th>Source</th>
                <th>Status</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td>
                    <strong>{lead.name}</strong>
                    <div>{lead.email}</div>
                    <div>{lead.phone}</div>
                    <div style={{ marginTop: "0.35rem", color: "#465249" }}>
                      {lead.message}
                    </div>
                  </td>
                  <td>
                    <span className="db-badge">{lead.service || "General"}</span>
                    <div style={{ marginTop: "0.35rem" }}>
                      <span className="db-badge muted">{lead.department}</span>
                    </div>
                  </td>
                  <td>
                    <span className="db-badge warn">{lead.source}</span>
                    <div style={{ marginTop: "0.35rem", fontSize: "0.78rem" }}>
                      {new Date(lead.createdAt).toLocaleString()}
                    </div>
                  </td>
                  <td>
                    <select
                      value={lead.status}
                      onChange={(event) =>
                        void patchLead(lead.id, {
                          status: event.target.value as LeadStatus,
                        })
                      }
                    >
                      {STATUSES.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <div className="db-actions">
                      <input
                        defaultValue={lead.notes}
                        placeholder="Add note"
                        onBlur={(event) => {
                          if (event.target.value !== lead.notes) {
                            void patchLead(lead.id, { notes: event.target.value });
                          }
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </section>
  );
}
