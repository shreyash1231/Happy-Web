import Footer from "@/components/Footer";
import FooterSmall from "@/components/FooterSmall";
import Header from "@/components/Header";
import { fetchWordPressPostBySlug, stripHtml } from "@/lib/wordpress";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = await fetchWordPressPostBySlug(decodedSlug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: stripHtml(post.title?.rendered ?? "Article"),
    description: stripHtml(post.excerpt?.rendered ?? "").slice(0, 155),
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = await fetchWordPressPostBySlug(decodedSlug);

  if (!post) {
    notFound();
  }

  const featured =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? post.yoast_head_json?.og_image?.[0]?.url;

  return (
    <>
      <div className="bg-[#E5DFD5] rounded-b-[60px] pb-8">
        <Header />
        <section className="max-w-4xl mx-auto px-6 xl:px-8 pt-6">
          <Link href="/Resources" className="text-[#3f5c4a] hover:underline text-sm">
            ← Back to Blog
          </Link>
          <h1 className="text-2xl md:text-4xl xl:text-5xl text-[#544120] mt-4">
            {stripHtml(post.title?.rendered ?? "Untitled")}
          </h1>
          <p className="text-sm text-[#736345] mt-3">
            Published on {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </section>
      </div>

      <article className="max-w-4xl mx-auto px-6 xl:px-8 py-10 text-[#3d3424] leading-8">
        {featured ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={featured} alt={stripHtml(post.title?.rendered ?? "Article image")} className="w-full rounded-3xl mb-8" />
        ) : null}

        <div
          className="prose prose-lg max-w-none prose-headings:text-[#544120] prose-a:text-[#3f5c4a]"
          dangerouslySetInnerHTML={{ __html: post.content?.rendered ?? "" }}
        />
      </article>

      <div className="hidden md:block">
        <Footer />
      </div>
      <div className="block md:hidden">
        <FooterSmall />
      </div>
    </>
  );
}