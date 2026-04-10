export const revalidate = 300;

import Footer from "@/components/Footer";
import FooterSmall from "@/components/FooterSmall";
import Header from "@/components/Header";
import Insights from "@/components/Insights";
import Featured from "@/components/Feature";
import Published from "@/components/Published";
import Link from "next/link";
import { fetchWordPressPostsPage, stripHtml, type WordPressPost } from "@/lib/wordpress";

const CATEGORIES = [
  "Spirituality & Wellbeing",
  "Positive Psychology",
  "Mindfulness & Meditation",
  "Applied Philosophy",
];

function getFeaturedImage(post: WordPressPost): string | undefined {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? post.yoast_head_json?.og_image?.[0]?.url;
}

type BlogPageProps = {
  searchParams?: Promise<{ q?: string; page?: string }>;
};

function buildResourcesUrl(page: number, query: string): string {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  if (page > 1) params.set("page", String(page));
  const queryString = params.toString();
  return queryString ? `/Resources?${queryString}` : "/Resources";
}

export default async function Blog({ searchParams }: BlogPageProps) {
  const params = (await searchParams) ?? {};
  const query = params.q?.trim() ?? "";
  const currentPage = Math.max(1, Number(params.page ?? "1") || 1);

  const { posts, totalPages } = await fetchWordPressPostsPage({
    page: currentPage,
    perPage: 10,
    search: query || undefined,
  });

  return (
    <>
      <div className="bg-[#E5DFD5] rounded-b-[60px] pb-10">
        <Header />
        <Insights />
      </div>

      <Featured />

      <section className="px-4 md:px-6 xl:px-8 py-8 max-w-[1200px] mx-auto">
        <h2 className="text-3xl xl:text-5xl text-center mb-8 text-[#1d1d1d]">Explore Articles</h2>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {CATEGORIES.map((category) => (
            <span key={category} className="rounded-full border border-[#544120] px-5 py-2 text-xs md:text-sm text-[#544120]">
              {category}
            </span>
          ))}
        </div>

        <form action="/Resources" method="get" className="mb-8 max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="Search articles..."
            className="w-full rounded-full border border-[#8b7a5c] bg-white px-5 py-3 outline-none focus:ring-2 focus:ring-[#3f5c4a]"
          />
          <button type="submit" className="rounded-full bg-[#3f5c4a] text-white px-6 py-3 hover:bg-[#162d22] transition">
            Search
          </button>
        </form>

        {posts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-[#8b7a5c] p-8 text-center text-[#544120]">No articles found. Try a different search term.</div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => {
                const featured = getFeaturedImage(post);
                const summary = stripHtml(post.excerpt?.rendered || post.content?.rendered || "")
                  .slice(0, 160)
                  .trim();

                return (
                  <article key={post.id} className="rounded-3xl overflow-hidden bg-[#e9e1d6] shadow-sm">
                    {featured ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={featured} alt={stripHtml(post.title?.rendered || "Article image")} className="w-full h-[220px] object-cover" />
                    ) : (
                      <div className="w-full h-[220px] bg-[#d6cbb8]" />
                    )}

                    <div className="p-5 flex flex-col gap-3 text-[#544120]">
                      <h3 className="text-base md:text-lg font-semibold">{stripHtml(post.title?.rendered ?? "Untitled")}</h3>
                      <p className="text-xs md:text-sm">{summary || "Read this article."}</p>
                      <Link href={`/Resources/${post.slug}`} className="font-medium hover:underline">
                        Read Article →
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-10">
              <Link
                href={buildResourcesUrl(Math.max(currentPage - 1, 1), query)}
                className={`rounded-full px-5 py-2 border ${currentPage <= 1 ? "pointer-events-none opacity-40" : "hover:bg-[#e9e1d6]"}`}
              >
                Previous
              </Link>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <Link
                  key={pageNumber}
                  href={buildResourcesUrl(pageNumber, query)}
                  className={`rounded-full px-4 py-2 border ${
                    pageNumber === currentPage ? "bg-[#3f5c4a] text-white border-[#3f5c4a]" : "hover:bg-[#e9e1d6]"
                  }`}
                >
                  {pageNumber}
                </Link>
              ))}

              <Link
                href={buildResourcesUrl(Math.min(currentPage + 1, totalPages || 1), query)}
                className={`rounded-full px-5 py-2 border ${currentPage >= totalPages ? "pointer-events-none opacity-40" : "hover:bg-[#e9e1d6]"}`}
              >
                Next
              </Link>
            </div>
          </>
        )}
      </section>

      <Published />

      <div className="hidden md:block">
        <Footer />
      </div>
      <div className="block md:hidden">
        <FooterSmall />
      </div>
    </>
  );
}
