import Footer from "@/components/Footer";
import FooterSmall from "@/components/FooterSmall";
import Header from "@/components/Header";
import Link from "next/link";
import { fetchWordPressPosts, stripHtml, type WordPressPost } from "@/lib/wordpress";

function getFeaturedImage(post: WordPressPost): string | undefined {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? post.yoast_head_json?.og_image?.[0]?.url;
}

type BlogPageProps = {
  searchParams?: Promise<{ q?: string }>;
};

export default async function Blog({ searchParams }: BlogPageProps) {
  const params = (await searchParams) ?? {};
  const query = params.q?.trim() ?? "";
  const posts = await fetchWordPressPosts(query || undefined);

  const featuredPosts = posts.slice(0, 3);
  const publishedPosts = posts.slice(3, 9);

  return (
    <>
      <div className="bg-[#E5DFD5] rounded-b-[60px] pb-10">
        <Header />
        <section className="pt-8 px-4 md:px-6 xl:p-8 mx-auto max-w-[1200px]">
          <h1 className="text-2xl md:text-4xl xl:text-5xl text-center text-[#544120]">Insights for a More Conscious Life</h1>
          <p className="text-center text-[#736345] mt-4 max-w-3xl mx-auto text-sm md:text-lg">
            Articles are fetched live from your WordPress backend ({" "}
            <a className="underline" href="https://happyho.in" target="_blank" rel="noreferrer">
              happyho.in
            </a>
            ).
          </p>

          <form action="/Resources" method="get" className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Search articles..."
              className="w-full rounded-full border border-[#8b7a5c] bg-white/80 px-5 py-3 outline-none focus:ring-2 focus:ring-[#3f5c4a]"
            />
            <button type="submit" className="rounded-full bg-[#3f5c4a] text-white px-6 py-3 hover:bg-[#162d22] transition">
              Search
            </button>
          </form>
        </section>
      </div>

      <section className="px-4 md:px-6 xl:px-8 py-10 max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl text-[#544120] mb-5">Featured Articles</h2>

        {featuredPosts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-[#8b7a5c] p-8 text-center text-[#544120]">No featured articles found.</div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => {
              const featured = getFeaturedImage(post);
              return (
                <article key={post.id} className="rounded-3xl overflow-hidden bg-[#e9e1d6] shadow-sm">
                  {featured ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={featured} alt={stripHtml(post.title?.rendered || "Article image")} className="w-full h-[220px] object-cover" />
                  ) : (
                    <div className="w-full h-[220px] bg-[#d6cbb8]" />
                  )}

                  <div className="p-5 flex flex-col gap-4">
                    <h3 className="text-lg font-semibold text-[#544120]">{stripHtml(post.title?.rendered ?? "Untitled")}</h3>
                    <Link href={`/Resources/${post.slug}`} className="text-[#3f5c4a] font-medium hover:underline">
                      Read Article →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <section className="bg-[#3f5c4a] py-12 px-4 md:px-6 xl:px-8 mt-4">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl md:text-3xl text-white mb-2">Published Articles</h2>
          <p className="text-white/80 mb-6">Latest published posts from your WordPress backend.</p>

          {publishedPosts.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-white/40 p-8 text-center text-white">No published articles found.</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {publishedPosts.map((post) => {
                const summary = stripHtml(post.excerpt?.rendered || post.content?.rendered || "")
                  .slice(0, 120)
                  .trim();

                return (
                  <article key={post.id} className="bg-white rounded-3xl p-5 text-[#544120] flex flex-col gap-3">
                    <h3 className="font-semibold">{stripHtml(post.title?.rendered ?? "Untitled")}</h3>
                    <p className="text-sm">{summary || "Read this article."}</p>
                    <Link href={`/Resources/${post.slug}`} className="text-[#3f5c4a] font-medium hover:underline mt-auto">
                      Read Article →
                    </Link>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="px-4 md:px-6 xl:px-8 py-10 max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl text-[#544120] mb-5">All Articles</h2>

        {posts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-[#8b7a5c] p-8 text-center text-[#544120]">No articles found. Try a different search term.</div>
        ) : (
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

                  <div className="p-5 flex flex-col gap-4">
                    <h3 className="text-lg font-semibold text-[#544120]">{stripHtml(post.title?.rendered ?? "Untitled")}</h3>
                    <p className="text-sm text-[#736345]">{summary || "Read this article."}</p>
                    <Link href={`/Resources/${post.slug}`} className="text-[#3f5c4a] font-medium hover:underline">
                      Read Article →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <div className="hidden md:block">
        <Footer />
      </div>
      <div className="block md:hidden">
        <FooterSmall />
      </div>
    </>
  );
}
