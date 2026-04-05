export type WordPressArticle = {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  link: string;
  imageUrl: string | null;
  imageAlt: string;
  categoryNames: string[];
};

type WpRenderedField = {
  rendered?: string;
};

type WpCategory = {
  id: number;
  name: string;
};

type WpFeaturedMedia = {
  source_url?: string;
  alt_text?: string;
};

type WpPost = {
  id: number;
  slug: string;
  link: string;
  title?: WpRenderedField;
  excerpt?: WpRenderedField;
  _embedded?: {
    [key: string]: unknown;
    "wp:featuredmedia"?: WpFeaturedMedia[];
    "wp:term"?: Array<WpCategory[]>;
  };
};

const WORDPRESS_API_BASE = "https://happyho.in/wp-json/wp/v2";

function stripHtml(content: string | undefined): string {
  if (!content) return "";

  return content
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function mapWpPostToArticle(post: WpPost): WordPressArticle {
  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  const terms = post._embedded?.["wp:term"] ?? [];
  const categories = terms.flat().map((term) => term.name).filter(Boolean);

  return {
    id: post.id,
    slug: post.slug,
    link: post.link,
    title: stripHtml(post.title?.rendered),
    excerpt: stripHtml(post.excerpt?.rendered),
    imageUrl: featuredMedia?.source_url ?? null,
    imageAlt: featuredMedia?.alt_text?.trim() || stripHtml(post.title?.rendered),
    categoryNames: categories,
  };
}

export async function getWordPressArticles(limit = 6): Promise<WordPressArticle[]> {
  const query = new URLSearchParams({
    _embed: "1",
    per_page: String(limit),
    status: "publish",
  });

  try {
    const response = await fetch(`${WORDPRESS_API_BASE}/posts?${query.toString()}`, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return [];
    }

    const posts = (await response.json()) as WpPost[];
    return posts.map(mapWpPostToArticle);
  } catch {
    return [];
  }
}
