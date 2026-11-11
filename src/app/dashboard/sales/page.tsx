import { redirect } from "next/navigation";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { LeadsPanel } from "@/components/dashboard/LeadsPanel";
import { getSessionUser } from "@/lib/dashboard/auth";
import { listLeads } from "@/lib/dashboard/store";

export default async function SalesDashboardPage() {
  const user = await getSessionUser();
  if (!user || (user.role !== "SALES" && user.role !== "SUPERADMIN")) {
    redirect("/login");
  }

  const leads = await listLeads();
  const neu = leads.filter((lead) => lead.status === "new").length;
  const won = leads.filter((lead) => lead.status === "won").length;

  return (
    <DashboardShell
      user={user}
      title="Sales department"
      subtitle="Connected to every website quote/contact form submission."
    >
      <div className="db-grid">
        <div className="db-stat">
          <span>Website leads</span>
          <strong>{leads.length}</strong>
        </div>
        <div className="db-stat">
          <span>New</span>
          <strong>{neu}</strong>
        </div>
        <div className="db-stat">
          <span>Won</span>
          <strong>{won}</strong>
        </div>
        <div className="db-stat">
          <span>Source</span>
          <strong>Website</strong>
        </div>
      </div>
      <LeadsPanel heading="All website leads for Sales" />
    </DashboardShell>
  );
}
