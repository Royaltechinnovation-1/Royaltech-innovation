import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/dashboard/auth";
import { dashboardStats } from "@/lib/dashboard/store";

export async function GET() {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const stats = await dashboardStats();

  if (user.role === "SALES") {
    return NextResponse.json({
      ok: true,
      stats: {
        totalLeads: stats.totalLeads,
        newLeads: stats.newLeads,
        wonLeads: stats.wonLeads,
      },
    });
  }

  if (user.role === "DEVELOPMENT") {
    return NextResponse.json({
      ok: true,
      stats: {
        totalLeads: stats.developmentLeads,
        newLeads: stats.newLeads,
        inPipeline: stats.developmentLeads,
      },
    });
  }

  if (user.role === "HR") {
    return NextResponse.json({
      ok: true,
      stats: {
        employees: stats.employees,
        openHrTickets: stats.openHrTickets,
      },
    });
  }

  return NextResponse.json({ ok: true, stats });
}
