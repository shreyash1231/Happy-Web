"use client";

import Header from "./Header";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function Wellness() {
  return (
    <div className="relative z-10 mx-auto max-w-[1920px] pb-40">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/corporate.png"
          alt="background"
          className="w-full h-full object-cover object-center rounded-b-[40px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1920px]">
        <Header />

        <div className="p-6 md:p-10 xl:p-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-6 lg:ml-40 xl:ml-70 lg:pt-15 xl:pt-10"
          >
            {/* Title */}
            <motion.div variants={fadeUp} className="flex flex-col gap-1 lg:gap-3">
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Corporate
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Wellness Programs
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.span
              variants={fadeUp}
              className="text-sm md:text-xl lg:text-2xl"
            >
              Build emotionally resilient and high-performing teams.
            </motion.span>

            {/* Description */}
            <motion.span
              variants={fadeUp}
              className="text-sm md:text-lg lg:text-xl xl:text-2xl text-[#c39e86]"
            >
              Happy Ho corporate programs help organizations
              <br className="hidden md:block" /> improve employee well-being,
              leadership effectiveness,
              <br className="hidden md:block" /> emotional intelligence, and
              workplace harmony.
            </motion.span>

            {/* Buttons */}
            <motion.span
              variants={fadeUp}
              className="flex flex-col md:flex-row gap-2 md:gap-8 md:mt-20"
            >
              <Button className="w-full md:w-60 lg:w-70 h-10 p-6 rounded-4xl bg-[#3f5c4a] text-[#c39e86] border-2 border-yellow-400 hover:bg-[#2d4435] transition-colors cursor-pointer text-sm">
                Book Corporate Consultation
              </Button>
              <Button className="w-full md:w-60 lg:w-60 p-6 h-10 rounded-4xl bg-[#f3efe8] text-[#c39e86] border-2 border-[#3f5c4a] hover:bg-[#e8e2d8] transition-colors cursor-pointer text-sm">
                Explore Programs
              </Button>
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}