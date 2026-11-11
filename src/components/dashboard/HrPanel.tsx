"use client";

import { FormEvent, useState } from "react";
import type { Employee, HrTicket } from "@/lib/dashboard/types";

export function HrPanel({
  initialEmployees,
  initialTickets,
}: {
  initialEmployees: Employee[];
  initialTickets: HrTicket[];
}) {
  const [employees] = useState(initialEmployees);
  const [tickets, setTickets] = useState(initialTickets);
  const [error, setError] = useState("");

  async function refresh() {
    const res = await fetch("/api/dashboard/hr");
    const data = (await res.json()) as {
      ok?: boolean;
      tickets?: HrTicket[];
      error?: string;
    };
    if (!res.ok || !data.ok) {
      setError(data.error || "Could not refresh HR data.");
      return;
    }
    setTickets(data.tickets || []);
    setError("");
  }

  async function onCreate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const res = await fetch("/api/dashboard/hr", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        employeeName: String(form.get("employeeName") || ""),
        type: String(form.get("type") || "leave"),
        subject: String(form.get("subject") || ""),
      }),
    });
    const data = (await res.json()) as { ok?: boolean; error?: string };
    if (!res.ok || !data.ok) {
      setError(data.error || "Could not create ticket.");
      return;
    }
    event.currentTarget.reset();
    await refresh();
  }

  async function setStatus(id: string, status: HrTicket["status"]) {
    await fetch("/api/dashboard/hr", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    await refresh();
  }

  return (
    <>
      <section className="db-panel">
        <h2>Team directory</h2>
        <div className="db-table-wrap">
          <table className="db-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Department</th>
                <th>Status</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.role}</td>
                  <td>
                    <span className="db-badge">{employee.department}</span>
                  </td>
                  <td>
                    <span className="db-badge warn">{employee.status}</span>
                  </td>
                  <td>
                    <div>{employee.email}</div>
                    <div>{employee.phone}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="db-panel">
        <h2>HR tickets</h2>
        {error ? <p className="db-empty">{error}</p> : null}
        <form className="db-form" onSubmit={onCreate}>
          <input name="employeeName" placeholder="Employee / role" required />
          <select name="type" defaultValue="recruitment">
            <option value="recruitment">Recruitment</option>
            <option value="leave">Leave</option>
            <option value="onboarding">Onboarding</option>
            <option value="policy">Policy</option>
          </select>
          <input
            className="full"
            name="subject"
            placeholder="Subject"
            required
          />
          <div className="full">
            <button className="db-btn" type="submit">
              Create ticket
            </button>
          </div>
        </form>
        <div className="db-table-wrap" style={{ marginTop: "1rem" }}>
          <table className="db-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Person</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.subject}</td>
                  <td>{ticket.employeeName}</td>
                  <td>
                    <span className="db-badge muted">{ticket.type}</span>
                  </td>
                  <td>
                    <select
                      value={ticket.status}
                      onChange={(event) =>
                        void setStatus(
                          ticket.id,
                          event.target.value as HrTicket["status"],
                        )
                      }
                    >
                      <option value="open">open</option>
                      <option value="in_review">in_review</option>
                      <option value="closed">closed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
