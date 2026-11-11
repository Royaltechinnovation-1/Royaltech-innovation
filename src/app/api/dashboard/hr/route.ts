import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/dashboard/auth";
import {
  createHrTicket,
  listEmployees,
  listHrTickets,
  updateHrTicket,
} from "@/lib/dashboard/store";
import type { HrTicket } from "@/lib/dashboard/types";

export async function GET() {
  const user = await getSessionUser();
  if (!user || (user.role !== "HR" && user.role !== "SUPERADMIN")) {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }

  const [employees, tickets] = await Promise.all([
    listEmployees(),
    listHrTickets(),
  ]);

  return NextResponse.json({ ok: true, employees, tickets });
}

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user || (user.role !== "HR" && user.role !== "SUPERADMIN")) {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }

  const body = (await request.json()) as {
    employeeName?: string;
    type?: HrTicket["type"];
    subject?: string;
  };

  if (!body.employeeName || !body.type || !body.subject) {
    return NextResponse.json({ ok: false, error: "Missing fields." }, { status: 400 });
  }

  const ticket = await createHrTicket({
    employeeName: body.employeeName,
    type: body.type,
    subject: body.subject,
  });

  return NextResponse.json({ ok: true, ticket });
}

export async function PATCH(request: Request) {
  const user = await getSessionUser();
  if (!user || (user.role !== "HR" && user.role !== "SUPERADMIN")) {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }

  const body = (await request.json()) as {
    id?: string;
    status?: HrTicket["status"];
  };

  if (!body.id || !body.status) {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  try {
    const ticket = await updateHrTicket(body.id, body.status);
    return NextResponse.json({ ok: true, ticket });
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
