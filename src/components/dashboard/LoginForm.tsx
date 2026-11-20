"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);

    const res = await fetch("/api/session/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: String(form.get("email") || ""),
        password: String(form.get("password") || ""),
      }),
    });

    const data = (await res.json()) as {
      ok?: boolean;
      error?: string;
      user?: { role: string };
    };

    setLoading(false);
    if (!res.ok || !data.ok || !data.user) {
      setError(data.error || "Login failed.");
      return;
    }

    const next = params.get("next");
    router.replace(next || "/dashboard");
    router.refresh();
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={onSubmit}>
        <h1>RoyalTech Dashboard</h1>
        <p>Sign in to Superadmin, Sales, HR, or Development.</p>
        {error ? <div className="login-error">{error}</div> : null}
        <label>
          Email
          <input name="email" type="email" required placeholder="you@company.com" />
        </label>
        <label>
          Password
          <input name="password" type="password" required placeholder="••••••••" />
        </label>
        <button className="db-btn" type="submit" disabled={loading}>
          {loading ? "Signing in…" : "Sign in"}
        </button>
        <p className="login-hint">
          Seed logins: admin@royaltechinnovation.com, sales@royaltechinnovation.co.in,
          hr@royaltechinnovation.com, dev@royaltechinnovation.com — password
          RoyalTech@2026 (or DASHBOARD_DEFAULT_PASSWORD).
        </p>
      </form>
    </div>
  );
}
