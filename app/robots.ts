import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site";
import { fetchAllWordPressSlugs } from "@/lib/wordpress";

const BASE_URL = getSiteUrl();

export default async function robots(): Promise<MetadataRoute.Robots> {
  const posts = await fetchAllWordPressSlugs();
  const latestModified = posts[0]?.modified ? new Date(posts[0].modified).getTime() : Date.now();

  const articlePaths = posts.map((post) => `/Resources/${post.slug}`);

  return {
    rules: {
      userAgent: "*",
      allow: ["/", ...articlePaths],
    },
    sitemap: [
      `${BASE_URL}/sitemap.xml?v=${latestModified}`,
      `${BASE_URL}/articles-sitemap.xml?v=${latestModified}`,
    ],
    host: BASE_URL,
  };
}
