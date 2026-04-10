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

const DEFAULT_REVALIDATE_SECONDS = 300;

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

export type WordPressTag = {
  id: number;
  count: number;
  name: string;
  slug: string;
};

export type WordPressPostsPage = {
  posts: WordPressPost[];
  totalPages: number;
  totalPosts: number;
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

export async function fetchWordPressPostsPage({
  page = 1,
  perPage = 10,
  search,
  tagId,
}: {
  page?: number;
  perPage?: number;
  search?: string;
  tagId?: number;
}): Promise<WordPressPostsPage> {
  const url = buildWpUrl("/wp-json/wp/v2/posts", {
    _embed: "1",
    per_page: perPage,
    page,
    tags: tagId,
    orderby: "date",
    order: "desc",
    _fields: `${WP_POST_FIELDS},_embedded.wp:featuredmedia.source_url,_embedded.wp:featuredmedia.alt_text`,
    search,
  });

  const response = await fetch(url, {
    next: { revalidate: DEFAULT_REVALIDATE_SECONDS, tags: ["wordpress-posts"] },
  });

  if (!response.ok) {
    return { posts: [], totalPages: 0, totalPosts: 0 };
  }

  return {
    posts: (await response.json()) as WordPressPost[],
    totalPages: Number(response.headers.get("X-WP-TotalPages") || "1"),
    totalPosts: Number(response.headers.get("X-WP-Total") || "0"),
  };
}

export async function fetchWordPressTags(search?: string): Promise<WordPressTag[]> {
  const firstUrl = buildWpUrl("/wp-json/wp/v2/tags", {
    per_page: 100,
    page: 1,
    hide_empty: 1,
    orderby: "count",
    order: "desc",
    search,
    _fields: "id,count,name,slug",
  });

  const firstResponse = await fetch(firstUrl, {
    next: { revalidate: DEFAULT_REVALIDATE_SECONDS, tags: ["wordpress-tags"] },
  });

  if (!firstResponse.ok) {
    return [];
  }

  const totalPages = Number(firstResponse.headers.get("X-WP-TotalPages") || "1");
  const firstPage = (await firstResponse.json()) as WordPressTag[];

  if (totalPages <= 1) {
    return firstPage;
  }

  const remaining = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, index) => {
      const url = buildWpUrl("/wp-json/wp/v2/tags", {
        per_page: 100,
        page: index + 2,
        hide_empty: 1,
        orderby: "count",
        order: "desc",
        search,
        _fields: "id,count,name,slug",
      });

      return fetch(url, {
        next: { revalidate: DEFAULT_REVALIDATE_SECONDS, tags: ["wordpress-tags"] },
      }).then(async (response) => {
        if (!response.ok) {
          return [] as WordPressTag[];
        }
        return (await response.json()) as WordPressTag[];
      });
    }),
  );

  return [firstPage, ...remaining].flat();
}

export async function fetchWordPressPosts(search?: string): Promise<WordPressPost[]> {
  const firstPage = await fetchWordPressPostsPage({ page: 1, perPage: 50, search });

  if (firstPage.totalPages <= 1) {
    return firstPage.posts;
  }

  const remaining = await Promise.all(
    Array.from({ length: firstPage.totalPages - 1 }, (_, index) =>
      fetchWordPressPostsPage({ page: index + 2, perPage: 50, search }),
    ),
  );

  return [firstPage.posts, ...remaining.map((entry) => entry.posts)]
    .flat()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function fetchWordPressPostBySlug(slug: string): Promise<WordPressPost | null> {
  const url = buildWpUrl("/wp-json/wp/v2/posts", {
    _embed: "1",
    slug,
    per_page: 1,
    _fields: `${WP_POST_FIELDS},_embedded.wp:featuredmedia.source_url,_embedded.wp:featuredmedia.alt_text`,
  });

  const response = await fetch(url, {
    next: { revalidate: DEFAULT_REVALIDATE_SECONDS, tags: [`wordpress-post-${slug}`, "wordpress-posts"] },
  });

  if (!response.ok) {
    return null;
  }

  const posts = (await response.json()) as WordPressPost[];
  return posts[0] ?? null;
}

export async function fetchAllWordPressSlugs(): Promise<Array<{ slug: string; modified: string }>> {
  const posts = await fetchWordPressPosts();
  return posts.map((post) => ({ slug: post.slug, modified: post.modified }));
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
