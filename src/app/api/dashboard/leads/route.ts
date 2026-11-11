import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/dashboard/auth";
import { listLeads, updateLead } from "@/lib/dashboard/store";
import type { LeadStatus } from "@/lib/dashboard/types";

export async function GET(request: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const requested = searchParams.get("department");

  // Sales sees all website leads; Development sees tech intake only.
  let department: "sales" | "development" | undefined;
  if (user.role === "DEVELOPMENT") department = "development";
  if (user.role === "SUPERADMIN" || user.role === "SALES") {
    if (requested === "sales" || requested === "development") {
      department = requested;
    }
  }
  if (user.role === "HR") {
    return NextResponse.json(
      { ok: false, error: "HR cannot access website leads." },
      { status: 403 },
    );
  }

  const leads = await listLeads({ department });
  return NextResponse.json({ ok: true, leads });
}

export async function PATCH(request: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  if (user.role === "HR") {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }

  const body = (await request.json()) as {
    id?: string;
    status?: LeadStatus;
    notes?: string;
    department?: "sales" | "development" | "both";
  };

  if (!body.id) {
    return NextResponse.json({ ok: false, error: "Lead id required." }, { status: 400 });
  }

  try {
    const lead = await updateLead(body.id, {
      status: body.status,
      notes: body.notes,
      department: body.department,
    });
    return NextResponse.json({ ok: true, lead });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Update failed.",
      },
      { status: 404 },
    );
  }
}
