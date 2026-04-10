import { fetchAllWordPressSlugs } from "@/lib/wordpress";

import { getSiteUrl } from "@/lib/site";

const BASE_URL = getSiteUrl();

export async function GET() {
  const posts = await fetchAllWordPressSlugs();

  const urls = posts
    .map(
      (post) =>
        `<url><loc>${BASE_URL}/Resources/${post.slug}</loc><lastmod>${new Date(post.modified).toISOString()}</lastmod></url>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=300, stale-while-revalidate=900",
    },
  });
}
