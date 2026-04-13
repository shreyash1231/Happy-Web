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
      className="p-6 xl:p-10"
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
            className="text-center text-sm md:text-xl xl:text-xl text-[#736345]"
            variants={fadeUp}
          >
            Experiential emotional wellness workshops designed for corporate teams.
          </motion.span>
        </div>
      </div>
  <div className="flex flex-col md:flex-row items-start gap-8 mt-10 mx-auto max-w-[1200px] px-4">

  {/* LEFT (Techniques - 2x width) */}
  <div className="flex-[2] flex flex-col gap-8 w-full">

    {/* HEADER */}
    <div className="flex justify-center">
      <div className="flex items-center gap-3 w-full max-w-2xl">
        <div className="flex-1 h-[2px] bg-[#6b5b3e]" />
        <span className="px-5 py-2 border border-[#6b5b3e] rounded-full text-[#6b5b3e] text-sm md:text-base whitespace-nowrap">
          Techniques We Use
        </span>
        <div className="flex-1 h-[2px] bg-[#6b5b3e]" />
      </div>
    </div>

    {/* GRID */}
    <div className="grid 
      grid-cols-2 
      sm:grid-cols-3 
      md:grid-cols-3 
      lg:grid-cols-4 
      xl:grid-cols-5 
      gap-8 text-center w-full max-w-4xl mx-auto"
    >
      {[
        { img: "/corporate1.png", text: "Mindfulness practices" },
        { img: "/corporate2.png", text: "NLP Techniques" },
        { img: "/corporate3.png", text: "Meditation" },
        { img: "/corporate4.png", text: "Positive Psychology" },
        { img: "/corporate5.png", text: "Behavioural Interventions" },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-3">
          <div className="bg-white p-4 rounded-full shadow-sm">
            <img src={item.img} className="w-12 h-12 object-contain" />
          </div>
          <span className="text-xs md:text-sm text-[#544120] leading-tight">
            {item.text}
          </span>
        </div>
      ))}
    </div>

  </div>

  {/* DIVIDER */}
  <div className="hidden md:block w-[2px] bg-[#e0d6c5] self-stretch"></div>

  {/* RIGHT (Session Format - 1x width) */}
  <div className="flex-1 flex flex-col gap-8 w-full">

    {/* HEADER */}
    <div className="flex justify-center">
      <div className="flex items-center gap-3 w-full max-w-xl">
        <div className="flex-1 h-[2px] bg-[#6b5b3e]" />
        <span className="px-5 py-2 border border-[#6b5b3e] rounded-full text-[#6b5b3e] text-sm md:text-base whitespace-nowrap">
          Session Format
        </span>
        <div className="flex-1 h-[2px] bg-[#6b5b3e]" />
      </div>
    </div>

    {/* GRID */}
    <div className="grid 
      grid-cols-2 
      sm:grid-cols-2 
      md:grid-cols-2 
      lg:grid-cols-2 
      xl:grid-cols-3 
      gap-8 text-center w-full max-w-xl mx-auto"
    >
      {[
        { img: "/corporate6.png", text: "4 - 5 hours\nImmersive Workshop" },
        { img: "/corporate7.png", text: "30 - 35\nParticipants" },
        { img: "/corporate8.png", text: "Interactive\nPractical & Engaging" },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-3">
          <div className="bg-white p-4 rounded-full shadow-sm">
            <img src={item.img} className="w-12 h-12 object-contain" />
          </div>
          <span className="text-xs md:text-sm text-[#544120] whitespace-pre-line leading-tight">
            {item.text}
          </span>
        </div>
      ))}
    </div>

  </div>

</div>
    </motion.div>
  );
}