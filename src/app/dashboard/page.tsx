import { redirect } from "next/navigation";
import { getSessionUser, roleHome } from "@/lib/dashboard/auth";

export default async function DashboardIndexPage() {
  const user = await getSessionUser();
  if (!user) redirect("/login");
  redirect(roleHome(user.role));
}
