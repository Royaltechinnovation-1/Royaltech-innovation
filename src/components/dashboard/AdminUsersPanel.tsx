"use client";

import { FormEvent, useEffect, useState } from "react";
import type { Role } from "@/lib/dashboard/types";

type SafeUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
  active: boolean;
  createdAt: string;
};

export function AdminUsersPanel() {
  const [users, setUsers] = useState<SafeUser[]>([]);
  const [error, setError] = useState("");

  async function load() {
    const res = await fetch("/api/dashboard/users");
    const data = (await res.json()) as {
      ok?: boolean;
      users?: SafeUser[];
      error?: string;
    };
    if (!res.ok || !data.ok) {
      setError(data.error || "Could not load users.");
      return;
    }
    setUsers(data.users || []);
  }

  useEffect(() => {
    void load();
  }, []);

  async function onCreate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const res = await fetch("/api/dashboard/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: String(form.get("name") || ""),
        email: String(form.get("email") || ""),
        password: String(form.get("password") || ""),
        role: String(form.get("role") || "SALES"),
      }),
    });
    const data = (await res.json()) as { ok?: boolean; error?: string };
    if (!res.ok || !data.ok) {
      setError(data.error || "Could not create user.");
      return;
    }
    event.currentTarget.reset();
    setError("");
    await load();
  }

  async function toggleActive(id: string, active: boolean) {
    await fetch("/api/dashboard/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, active }),
    });
    await load();
  }

  return (
    <section className="db-panel">
      <h2>User access</h2>
      {error ? <p className="db-empty">{error}</p> : null}
      <form className="db-form" onSubmit={onCreate}>
        <input name="name" placeholder="Full name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Temp password" required />
        <select name="role" defaultValue="SALES">
          <option value="SUPERADMIN">Superadmin</option>
          <option value="SALES">Sales</option>
          <option value="HR">HR</option>
          <option value="DEVELOPMENT">Development</option>
        </select>
        <div className="full">
          <button className="db-btn" type="submit">
            Add user
          </button>
        </div>
      </form>
      <div className="db-table-wrap" style={{ marginTop: "1rem" }}>
        <table className="db-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className="db-badge">{user.role}</span>
                </td>
                <td>
                  <span className={`db-badge ${user.active ? "" : "muted"}`}>
                    {user.active ? "active" : "disabled"}
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="db-btn secondary"
                    onClick={() => void toggleActive(user.id, !user.active)}
                  >
                    {user.active ? "Disable" : "Enable"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
