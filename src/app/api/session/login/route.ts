import { NextResponse } from "next/server";
import { loginWithCredentials } from "@/lib/dashboard/auth";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      password?: string;
    };
    const email = String(body.email || "").trim();
    const password = String(body.password || "");

    if (!email || !password) {
      return NextResponse.json(
        { ok: false, error: "Email and password are required." },
        { status: 400 },
      );
    }

    const user = await loginWithCredentials(email, password);
    return NextResponse.json({ ok: true, user });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Login failed.",
      },
      { status: 401 },
    );
  }
}
