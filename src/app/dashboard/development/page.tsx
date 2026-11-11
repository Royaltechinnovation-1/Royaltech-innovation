import { redirect } from "next/navigation";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { LeadsPanel } from "@/components/dashboard/LeadsPanel";
import { getSessionUser } from "@/lib/dashboard/auth";
import { listLeads } from "@/lib/dashboard/store";

export default async function DevelopmentDashboardPage() {
  const user = await getSessionUser();
  if (!user || (user.role !== "DEVELOPMENT" && user.role !== "SUPERADMIN")) {
    redirect("/login");
  }

  const leads = await listLeads({ department: "development" });
  const active = leads.filter((lead) =>
    ["qualified", "in_progress", "new"].includes(lead.status),
  ).length;

  return (
    <DashboardShell
      user={user}
      title="Development department"
      subtitle="Connected to website forms for Web, App, Software, and UI/UX project intake."
    >
      <div className="db-grid">
        <div className="db-stat">
          <span>Dev intake leads</span>
          <strong>{leads.length}</strong>
        </div>
        <div className="db-stat">
          <span>Active pipeline</span>
          <strong>{active}</strong>
        </div>
        <div className="db-stat">
          <span>Services</span>
          <strong>Web/App/SW</strong>
        </div>
        <div className="db-stat">
          <span>Source</span>
          <strong>Website</strong>
        </div>
      </div>
      <LeadsPanel
        department="development"
        heading="Website leads for Development"
      />
    </DashboardShell>
  );
}
