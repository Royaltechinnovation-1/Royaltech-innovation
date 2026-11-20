import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { findUserByEmail } from "./store";
import type { Role, SessionUser } from "./types";

export const SESSION_COOKIE = "rt_dashboard_session";

function sessionSecret() {
  const secret = process.env.DASHBOARD_SESSION_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        "DASHBOARD_SESSION_SECRET must be set in production (Hostinger env vars).",
      );
    }
    return new TextEncoder().encode("royaltech-dashboard-dev-secret-change-me");
  }
  return new TextEncoder().encode(secret);
}

export async function loginWithCredentials(email: string, password: string) {
  const user = await findUserByEmail(email);
  if (!user || !user.active) {
    throw new Error("Invalid email or password.");
  }

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) {
    throw new Error("Invalid email or password.");
  }

  const session: SessionUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const token = await new SignJWT({ ...session })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(sessionSecret());

  const jar = await cookies();
  jar.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return session;
}

export async function logoutSession() {
  const jar = await cookies();
  jar.set(SESSION_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}

export async function getSessionUser(): Promise<SessionUser | null> {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, sessionSecret());
    const role = String(payload.role || "") as Role;
    if (!payload.id || !payload.email || !role) return null;
    return {
      id: String(payload.id),
      name: String(payload.name || ""),
      email: String(payload.email),
      role,
    };
  } catch {
    return null;
  }
}

export function roleHome(role: Role) {
  switch (role) {
    case "SUPERADMIN":
      return "/dashboard/admin";
    case "SALES":
      return "/dashboard/sales";
    case "HR":
      return "/dashboard/hr";
    case "DEVELOPMENT":
      return "/dashboard/development";
    default:
      return "/login";
  }
}

export function canAccessPath(role: Role, pathname: string) {
  if (pathname === "/dashboard" || pathname === "/dashboard/") return true;
  if (pathname.startsWith("/dashboard/admin")) return role === "SUPERADMIN";
  if (pathname.startsWith("/dashboard/sales")) {
    return role === "SUPERADMIN" || role === "SALES";
  }
  if (pathname.startsWith("/dashboard/hr")) {
    return role === "SUPERADMIN" || role === "HR";
  }
  if (pathname.startsWith("/dashboard/development")) {
    return role === "SUPERADMIN" || role === "DEVELOPMENT";
  }
  return role === "SUPERADMIN";
}
