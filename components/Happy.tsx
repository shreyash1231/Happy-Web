"use client";

import { motion } from "framer-motion";

export default function Happy() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="bg-[#3f5c4a] p-8 mt-8 mx-auto max-w-[1920px]">
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-5 text-white text-left md:text-center md:items-center md:justify-center"
      >
        
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          className="text-3xl md:text-5xl text-[#dcd8ce]"
        >
          What makes Happy Ho different
        </motion.div>

        {/* Paragraph lines */}
        <motion.div className="flex flex-col text-lg md:text-2xl text-left md:text-center">
          {[
            "Many wellness platforms offer inspiration or quick advice.",
            "Happy Ho focuses on building sustainable habits that help",
            "people navigate emotions, relationships, and personal growth",
            "more intentionally.",
          ].map((line, index) => (
            <motion.span key={index} variants={fadeUp}>
              {line}
            </motion.span>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}