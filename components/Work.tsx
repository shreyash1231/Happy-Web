
"use client"

import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Work() {
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
    <div className="p-6 pt-8 xl:p-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-6 xl:gap-15 mx-auto max-w-[1920px] items-center"
      >
        <motion.span variants={fadeUp} className="text-center text-xl xl:text-5xl">
          How Our Corporate Programs Work
        </motion.span>

        <motion.div variants={fadeUp} className="flex flex-col text-center md:flex-row gap-10 xl:gap-40">
          <div className="flex flex-col">
            <span className="text-lg md:text-xl xl:text-3xl">Corporate Discovery Call</span>
            <span className="text-sm xl:text-xl">Understanding your organization's goals,</span>
            <span className="text-sm xl:text-xl">challenges, and team structure.</span>
          </div>

          <div className="flex flex-col">
            <span className="text-lg md:text-xl xl:text-3xl">Program Design</span>
            <span className="text-sm xl:text-xl">Customized coaching, mindfulness, or</span>
            <span className="text-sm xl:text-xl">wellness workshops tailored for your Team.</span>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col text-center">
          <span className="text-lg md:text-xl xl:text-3xl">Implementation</span>
          <span className="text-sm xl:text-xl">Live workshops, coaching sessions,</span>
          <span className="text-sm xl:text-xl">and guided programs for employees.</span>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col gap-5 text-center">
          <span className="text-xl md:text-2xl xl:text-5xl">
            Build a Happier, Healthier Workplace
          </span>

          <div className="flex flex-col gap-1">
            <span className="text-lg md:text-xl xl:text-2xl">
              Empower your teams with mindfulness, emotional intelligence,
            </span>
            <span className="text-lg md:text-xl xl:text-2xl">
              and resilience training.
            </span>
          </div>

          <div className="flex items-center justify-center">
            <Button className="w-full md:w-60 lg:w-70 h-10 p-6 rounded-4xl bg-[#3f5c4a] text-[#c39e86] border-2 border-yellow-400 hover:bg-[#2d4435] transition-colors cursor-pointer text-sm">
              Book Corporate Consultation
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}