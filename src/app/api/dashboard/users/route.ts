import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/dashboard/auth";
import { createUser, listUsers, setUserActive } from "@/lib/dashboard/store";
import type { Role } from "@/lib/dashboard/types";

export async function GET() {
  const user = await getSessionUser();
  if (!user || user.role !== "SUPERADMIN") {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }
  const users = await listUsers();
  return NextResponse.json({ ok: true, users });
}

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user || user.role !== "SUPERADMIN") {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }

  const body = (await request.json()) as {
    name?: string;
    email?: string;
    password?: string;
    role?: Role;
  };

  try {
    const created = await createUser({
      name: String(body.name || "").trim(),
      email: String(body.email || "").trim(),
      password: String(body.password || ""),
      role: body.role || "SALES",
    });
    return NextResponse.json({ ok: true, user: created });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Could not create user.",
      },
      { status: 400 },
    );
  }
}

export async function PATCH(request: Request) {
  const user = await getSessionUser();
  if (!user || user.role !== "SUPERADMIN") {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }

  const body = (await request.json()) as { id?: string; active?: boolean };
  if (!body.id || typeof body.active !== "boolean") {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  try {
    const updated = await setUserActive(body.id, body.active);
    return NextResponse.json({ ok: true, user: updated });
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
