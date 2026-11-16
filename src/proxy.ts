import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SESSION_COOKIE = "rt_dashboard_session";

function sessionSecret() {
  const secret =
    process.env.DASHBOARD_SESSION_SECRET ||
    "royaltech-dashboard-dev-secret-change-me";
  return new TextEncoder().encode(secret);
}

function roleHome(role: string) {
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

function canAccess(role: string, pathname: string) {
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
  return false;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(SESSION_COOKIE)?.value;

  if (pathname.startsWith("/login")) {
    if (!token) return NextResponse.next();
    try {
      const { payload } = await jwtVerify(token, sessionSecret());
      const role = String(payload.role || "");
      return NextResponse.redirect(new URL(roleHome(role), request.url));
    } catch {
      return NextResponse.next();
    }
  }

  if (!pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }

  if (!token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  try {
    const { payload } = await jwtVerify(token, sessionSecret());
    const role = String(payload.role || "");
    if (!canAccess(role, pathname)) {
      return NextResponse.redirect(new URL(roleHome(role), request.url));
    }
    return NextResponse.next();
  } catch {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    const response = NextResponse.redirect(loginUrl);
    response.cookies.set(SESSION_COOKIE, "", { path: "/", maxAge: 0 });
    return response;
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
