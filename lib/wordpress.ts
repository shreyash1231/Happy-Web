export const WORDPRESS_BASE_URL = "https://happyho.in";

const WP_POST_FIELDS = [
  "id",
  "date",
  "modified",
  "slug",
  "link",
  "title",
  "excerpt",
  "content",
  "yoast_head_json",
  "_links",
].join(",");

export type WordPressPost = {
  id: number;
  date: string;
  modified: string;
  slug: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  yoast_head_json?: {
    og_image?: Array<{ url?: string }>;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      alt_text?: string;
    }>;
  };
};

function buildWpUrl(path: string, params?: Record<string, string | number | undefined>) {
  const url = new URL(path, WORDPRESS_BASE_URL);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        url.searchParams.set(key, String(value));
      }
    });
  }

  return url.toString();
}

export async function fetchWordPressPosts(search?: string): Promise<WordPressPost[]> {
  const url = buildWpUrl("/wp-json/wp/v2/posts", {
    _embed: "1",
    per_page: 20,
    orderby: "date",
    order: "desc",
    _fields: `${WP_POST_FIELDS},_embedded.wp:featuredmedia.source_url,_embedded.wp:featuredmedia.alt_text`,
    search,
  });

  const response = await fetch(url, {
    next: { revalidate: 300, tags: ["wordpress-posts"] },
  });

  if (!response.ok) {
    return [];
  }

  return (await response.json()) as WordPressPost[];
}

export async function fetchWordPressPostBySlug(slug: string): Promise<WordPressPost | null> {
  const url = buildWpUrl("/wp-json/wp/v2/posts", {
    _embed: "1",
    slug,
    per_page: 1,
    _fields: `${WP_POST_FIELDS},_embedded.wp:featuredmedia.source_url,_embedded.wp:featuredmedia.alt_text`,
  });

  const response = await fetch(url, {
    next: { revalidate: 300, tags: [`wordpress-post-${slug}`, "wordpress-posts"] },
  });

  if (!response.ok) {
    return null;
  }

  const posts = (await response.json()) as WordPressPost[];
  return posts[0] ?? null;
}

export async function fetchAllWordPressSlugs(): Promise<Array<{ slug: string; modified: string }>> {
  const url = buildWpUrl("/wp-json/wp/v2/posts", {
    per_page: 100,
    _fields: "slug,modified",
    orderby: "modified",
    order: "desc",
  });

  const response = await fetch(url, {
    next: { revalidate: 300, tags: ["wordpress-posts"] },
  });

  if (!response.ok) {
    return [];
  }

  return (await response.json()) as Array<{ slug: string; modified: string }>;
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
