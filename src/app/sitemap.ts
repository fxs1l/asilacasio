import type { MetadataRoute } from "next";
import { PERSONAL_WEBSITE_URL } from "../constants/url";
import { Route } from "../definitions/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const routePriority: Record<Route, number> = {
    [Route.HOME]: 1,
    [Route.PROJECTS]: 0.8,
    [Route.EXPERIENCE]: 0.8,
    [Route.BLOG]: 0.6,
  };

  return Object.values(Route).map((route) => ({
    url: new URL(route, PERSONAL_WEBSITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: routePriority[route],
  }));
}
