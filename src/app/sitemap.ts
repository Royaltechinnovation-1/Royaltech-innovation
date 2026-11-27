import type { MetadataRoute } from "next";

const base = "https://www.royaltechinnovation.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/about",
    "/services",
    "/services/cloud-devops",
    "/services/crm-development",
    "/services/saas-development",
    "/services/ecommerce-development",
    "/services/erp-solutions",
    "/services/management-systems",
    "/portfolio",
    "/careers",
    "/process",
    "/gallery",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" || path === "/services" ? 0.9 : 0.7,
  }));
}
