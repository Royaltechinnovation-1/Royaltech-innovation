import "@/styles/dashboard.css";

// Dashboard uses cookies/session auth — must not be prerendered as Instant UI.
export const instant = false;

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
