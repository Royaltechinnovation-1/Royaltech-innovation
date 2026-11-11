import { redirect } from "next/navigation";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { HrPanel } from "@/components/dashboard/HrPanel";
import { getSessionUser } from "@/lib/dashboard/auth";
import { listEmployees, listHrTickets } from "@/lib/dashboard/store";

export default async function HrDashboardPage() {
  const user = await getSessionUser();
  if (!user || (user.role !== "HR" && user.role !== "SUPERADMIN")) {
    redirect("/login");
  }

  const [employees, tickets] = await Promise.all([
    listEmployees(),
    listHrTickets(),
  ]);
  const open = tickets.filter((ticket) => ticket.status !== "closed").length;

  return (
    <DashboardShell
      user={user}
      title="HR department"
      subtitle="Team directory, recruitment tickets, and people operations."
    >
      <div className="db-grid">
        <div className="db-stat">
          <span>Employees</span>
          <strong>{employees.length}</strong>
        </div>
        <div className="db-stat">
          <span>Open tickets</span>
          <strong>{open}</strong>
        </div>
        <div className="db-stat">
          <span>Departments</span>
          <strong>5</strong>
        </div>
        <div className="db-stat">
          <span>Focus</span>
          <strong>People</strong>
        </div>
      </div>
      <HrPanel initialEmployees={employees} initialTickets={tickets} />
    </DashboardShell>
  );
}
