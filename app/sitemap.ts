import type { MetadataRoute } from "next";
import { fetchAllWordPressSlugs } from "@/lib/wordpress";

import { getSiteUrl } from "@/lib/site";

const BASE_URL = getSiteUrl();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchAllWordPressSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: new Date() },
    { url: `${BASE_URL}/AboutUs`, lastModified: new Date() },
    { url: `${BASE_URL}/Programs`, lastModified: new Date() },
    { url: `${BASE_URL}/Corporate`, lastModified: new Date() },
    { url: `${BASE_URL}/Resources`, lastModified: new Date() },
    { url: `${BASE_URL}/articles-sitemap.xml`, lastModified: new Date() },
  ];

  const articleRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/Resources/${post.slug}`,
    lastModified: new Date(post.modified),
  }));

  return [...staticRoutes, ...articleRoutes];
}
