import Articles from "@/components/Articles";
import Discover from "@/components/Discover";
import Featured from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Insights from "@/components/Insights";
import Published from "@/components/Published";
import { getWordPressArticles } from "@/lib/wordpress";

export default async function Blog() {
  const articles = await getWordPressArticles(6);

  return (
    <>
      <div className="bg-[#E5DFD5] rounded-b-[60px] pb-10">
        <Header />
        <Insights />
      </div>
      <Featured />
      <Articles articles={articles} />
      <Published />
      {/* Step section */}
      <div className="relative z-0">
        <Discover />
      </div>
      {/* Overlapping Footer */}
      <div className="relative z-20 -mt-10 md:-mt-15 xl:-mt-20">
        <Footer />
      </div>
    </>
  );
}
