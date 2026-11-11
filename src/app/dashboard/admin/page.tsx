import { redirect } from "next/navigation";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { LeadsPanel } from "@/components/dashboard/LeadsPanel";
import { AdminUsersPanel } from "@/components/dashboard/AdminUsersPanel";
import { getSessionUser } from "@/lib/dashboard/auth";
import { dashboardStats } from "@/lib/dashboard/store";

export default async function AdminDashboardPage() {
  const user = await getSessionUser();
  if (!user || user.role !== "SUPERADMIN") redirect("/login");

  const stats = await dashboardStats();

  return (
    <DashboardShell
      user={user}
      title="Superadmin overview"
      subtitle="Full control across Sales, HR, Development, and website lead intake."
    >
      <div className="db-grid">
        <div className="db-stat">
          <span>Total website leads</span>
          <strong>{stats.totalLeads}</strong>
        </div>
        <div className="db-stat">
          <span>New leads</span>
          <strong>{stats.newLeads}</strong>
        </div>
        <div className="db-stat">
          <span>Active users</span>
          <strong>{stats.users}</strong>
        </div>
        <div className="db-stat">
          <span>Open HR tickets</span>
          <strong>{stats.openHrTickets}</strong>
        </div>
      </div>
      <AdminUsersPanel />
      <LeadsPanel heading="All website leads (Sales + Development)" />
    </DashboardShell>
  );
}
