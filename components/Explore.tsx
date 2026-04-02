"use client";

import { Card } from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Executive\nCoaching",
    description:
      "Guidance for leaders and professionals to develop clarity, emotional intelligence, and strategic decision-making.",
    dark: true,
  },
  { title: "Happiness\nCoaching", image: "/11.png" },
  { title: "Life\nCoaching", image: "/12.png" },
  { title: "Relationship\nCoaching", image: "/13.png" },
  { title: "Tarot\nGuidance", image: "/14.png" },
  { title: "Guided\nMindfulness", image: "/18.png" },
  { title: "Energy\nHealing", image: "/15.png" },
  { title: "Emotional\nBalance", image: "/16.png" },
  { title: "Holistic\nWellbeing", image: "/17.png" },
];

export default function Explore() {
  // Animations
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut"  as const},
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="px-4 pt-8 xl:p-16 pb-10">
      <div className="flex flex-col gap-10 xl:gap-20 mx-auto max-w-[1920px]">
        
        {/* Heading */}
        <motion.span
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center text-3xl xl:text-5xl"
        >
          Explore Our Programs
        </motion.span>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12 md:gap-x-6  xl:gap-y-6 xl:gap-x-6 max-w-[1000px] mx-auto w-full justify-items-center"
        >
          {programs.map((program, index) => (
            
            <motion.div
              key={program.title}
              variants={fadeUp}
              whileTap={{ scale: 0.97 }}
              className="w-full md:w-fit"
            >
              <Card
                className={`w-full md:w-65 md:h-65 rounded-2xl border p-4 flex flex-col items-center justify-center text-center transition-all duration-300 ${
                  program.dark
                    ? "bg-[#3d3020] text-white border-transparent"
                    : "bg-[#f3efe8] border-[#3d3020]"
                }`}
              >
                {/* Image animation */}
                {program.image && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={130}
                      height={130}
                      className="mx-auto"
                    />
                  </motion.div>
                )}

                {/* Title */}
                <span className="text-2xl whitespace-pre-line mt-2">
                  {program.title}
                </span>

                {/* Description */}
                {program.description && (
                  <span className="text-sm mt-2">
                    {program.description}
                  </span>
                )}
              </Card>
            </motion.div>

          ))}
        </motion.div>
      </div>
    </div>
  );
}