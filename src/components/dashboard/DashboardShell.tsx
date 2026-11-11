"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { Role } from "@/lib/dashboard/types";

const LINKS: Record<Role, Array<{ href: string; label: string }>> = {
  SUPERADMIN: [
    { href: "/dashboard/admin", label: "Superadmin" },
    { href: "/dashboard/sales", label: "Sales" },
    { href: "/dashboard/hr", label: "HR" },
    { href: "/dashboard/development", label: "Development" },
  ],
  SALES: [{ href: "/dashboard/sales", label: "Sales leads" }],
  HR: [{ href: "/dashboard/hr", label: "HR desk" }],
  DEVELOPMENT: [{ href: "/dashboard/development", label: "Dev intake" }],
};

export function DashboardShell({
  user,
  title,
  subtitle,
  children,
}: {
  user: { name: string; email: string; role: Role };
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const links = LINKS[user.role];

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/login");
    router.refresh();
  }

  return (
    <div className="db-shell">
      <aside className="db-side">
        <div className="db-brand">
          <strong>RoyalTech</strong>
          <span>{user.role.replace("_", " ")} dashboard</span>
        </div>
        <nav className="db-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname.startsWith(link.href) ? "active" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="db-side-foot">
          <div className="db-user-chip">
            <div>{user.name}</div>
            <div>{user.email}</div>
          </div>
          <button type="button" className="db-logout" onClick={logout}>
            Sign out
          </button>
        </div>
      </aside>
      <main className="db-main">
        <header className="db-top">
          <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
