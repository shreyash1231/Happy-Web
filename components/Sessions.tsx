"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

export default function Sessions() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      className="p-6 xl:p-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <div className="flex flex-col gap-15">
        <div className="flex flex-col gap-4">
          <motion.span
            className="text-center text-xl md:text-2xl lg:text-3xl xl:text-5xl"
            variants={fadeUp}
          >
            Pre-Curated Corporate Wellness Sessions
          </motion.span>
          <motion.span
            className="text-center text-sm md:text-xl xl:text-xl text-[#7d4545]"
            variants={fadeUp}
          >
            Experiential emotional wellness workshops designed for corporate teams.
          </motion.span>

          <motion.div
            className="flex flex-col md:flex-row justify-center pt-2 gap-3 md:gap-20 text-[#7d4545]"
            variants={fadeUp}
          >
            <span>
              <span>Techniques Used:</span>
              <div className="flex flex-col pl-4">
                <span>• Mindfulness</span>
                <span>• NLP</span>
                <span>• Meditation</span>
                <span>• Healing Practices</span>
                <span>• Positive Psychology</span>
                <span>• Behavioral Interventions</span>
              </div>
            </span>

            <span>
              <span>Session Format:</span>
              <div className="flex flex-col pl-4">
                <span>• Duration: 4–5 hours</span>
                <span>• Group Size: 30–35 participants</span>
                <span>• Delivery: Interactive workshop</span>
              </div>
            </span>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col xl:flex justify-center gap-6"
          variants={fadeUp}
        >
        <Button className="px-20 py-6 rounded-full bg-[#544120] text-white border-2 border-yellow-400 self-center">
  All Programs
</Button>
<Button className="hidden md:flex items-center justify-center text-lg py-6 px-10 rounded-full bg-[#f3efe8] text-[#7d4545] border-2 border-[#544120] gap-4 whitespace-nowrap w-fit self-center">
  <span>Leadership</span>
  <span>|</span>
  <span>Employee Wellness</span>
  <span>|</span>
  <span>HR Programs</span>
  <span>|</span>
  <span>Sales Teams</span>
</Button>
        </motion.div>
      </div>
    </motion.div>
  );
}