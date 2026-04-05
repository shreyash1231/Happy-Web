"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import type { WordPressArticle } from "@/lib/wordpress";

type ArticlesProps = {
  articles: WordPressArticle[];
};

export default function Articles({ articles }: ArticlesProps) {
  const categories = Array.from(
    new Set(articles.flatMap((article) => article.categoryNames).slice(0, 8)),
  );

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="p-6 xl:p-16 max-w-[1200px] mx-auto">
      <h2 className="text-3xl xl:text-5xl text-center mb-8">Explore Articles</h2>

      {categories.length > 0 && (
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10 w-full">
          {categories.map((cat, index) => (
            <Button
              key={cat}
              variant={index === 0 ? "default" : "outline"}
              className="rounded-full border-[#544120] px-8 py-6 xl:px-13 xl:py-7 text-[10px] xl:text-sm hover:bg-[#544120] text-black hover:text-white bg-transparent"
            >
              {cat}
            </Button>
          ))}
        </div>
      )}

      {articles.length > 0 ? (
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {articles.map((article) => (
            <motion.div
              key={article.id}
              variants={fadeUp}
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.03 }}
              className="w-full sm:w-[48%] lg:w-[31%]"
            >
              <Card className="flex flex-col overflow-hidden rounded-3xl bg-[#e9e1d6] hover:shadow-xl transition-all h-full">
                <Image
                  src={article.imageUrl || "/2.png"}
                  alt={article.imageAlt || article.title}
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-cover"
                />

                <CardContent className="flex flex-col justify-between flex-1 px-4 py-3 text-[#544120]">
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold">{article.title}</h3>
                    <p className="text-[10px]">{article.excerpt}</p>
                  </div>

                  <Link
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium cursor-pointer hover:underline mt-4"
                  >
                    Read Article →
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="text-center text-[#544120]">
          Articles are currently unavailable. Please check back shortly.
        </p>
      )}
    </div>
  );
}
