import { Suspense } from "react";
import { LoginForm } from "@/components/dashboard/LoginForm";
import "@/styles/dashboard.css";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="login-page">
          <div className="login-card">
            <h1>RoyalTech Dashboard</h1>
            <p>Loading sign-in…</p>
          </div>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
