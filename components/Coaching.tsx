"use client";

import { Card } from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
export default function Coaching(){
const scrollRef = useRef<HTMLDivElement>(null);
const [activeIndex, setActiveIndex] = useState(0);

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
      transition: { duration: 0.6, ease: "easeOut" as const},
    },
  };
  const handleScroll = () => {
  if (!scrollRef.current) return;

  const scrollLeft = scrollRef.current.scrollLeft;
  const cardWidth = 300; // approx (w-70 ≈ 280px + gap)

  const index = Math.round(scrollLeft / cardWidth);
  setActiveIndex(index);
};

  return(
    <div className="px-4 pt-8 xl:p-8">
      
      {/* 🔹 Heading */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-4 xl:gap-6"
      >
        <motion.span
          variants={fadeUp}
          className="text-center text-lg md:text-3xl xl:text-5xl font-canela font-normal"
        >
          Programs designed for emotional clarity and growth
        </motion.span>

        <motion.span
          variants={fadeUp}
          className="text-center text-[10px] md:text-sm xl:text-xl text-[#c39e86]"
        >
          Happy Ho offers a range of coaching, meditation, counselling, and healing programs
          <br className="md:block hidden"/>
          designed for individuals, professionals, and organizations. These programs integrate
          <br className="md:block hidden"/>
          positive psychology, ancient wisdom, and practical coaching tools to improve well-
          <br className="md:block hidden"/>
          being, creativity, productivity, and resilience.
        </motion.span>
      </motion.div>

      {/* 🔹 Cards */}
  <motion.div
    ref={scrollRef}
  onScroll={handleScroll}
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="
    flex flex-nowrap overflow-x-auto gap-8 px-4 w-full
    pt-10 pb-12
    xl:flex-wrap xl:overflow-visible xl:justify-center xl:pt-10
  "
  style={{ WebkitOverflowScrolling: "touch" }}
>

        {/* Card 1 */}
        <motion.div variants={fadeUp} whileTap={{ scale: 0.97 }} className="flex-shrink-0">
          <Card className="flex h-110 w-70 md:w-85 flex-col border-3 border-yellow-400 gap-0 p-0 rounded-4xl">
            <div className="flex flex-col w-full items-center justify-center rounded-t-xl bg-[#dcd8ce]">
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Image src="/3.png" alt="Coaching" width={140} height={140} />
              </motion.div>

              <span className="text-4xl text-[#3d3020] mb-5">Coaching</span>
            </div>

            <div className="flex flex-col px-2 xl:px-4 text-[#544120] gap-3 pt-3">
              <span className="text-sm">Guided sessions that help individuals and teams develop emotional intelligence, clarity in decision-making, and resilience in professional and personal life.</span>
              <span className="text-sm">Happy Ho coaches combine psychological research with ancient wisdom to help people improve productivity, relationships, and well-being.</span>
            </div>
          </Card>
        </motion.div>

        {/* Card 2 */}
     <motion.div variants={fadeUp} whileTap={{ scale: 0.97 }} className="flex-shrink-0">
          <Card className="flex h-110 w-70 md:w-85 flex-col border-3 border-yellow-400 gap-0 p-0 rounded-4xl">
            <div className="flex flex-col w-full items-center justify-center rounded-t-xl bg-[#7d8d83]">
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Image src="/4.png" alt="Meditation" width={140} height={140} />
              </motion.div>

              <span className="text-4xl text-[#3d3020] mb-5">Meditation</span>
            </div>

            <div className="flex flex-col px-2 xl:px-4 text-[#544120] gap-3 pt-3">
              <span className="text-sm">Meditation programs help train the mind to become more present, calm, and focused through guided awareness practices and breath observation.</span>
              <span className="text-sm">Regular meditation can reduce anxiety, improve clarity, and support emotional balance.</span>
            </div>
          </Card>
        </motion.div>

        {/* Card 3 */}
       <motion.div variants={fadeUp} whileTap={{ scale: 0.97 }} className="flex-shrink-0">
          <Card className="flex h-110 w-70  md:w-85 flex-col border-3 border-yellow-400 gap-0 p-0 rounded-4xl">
            <div className="flex flex-col w-full items-center justify-center rounded-t-xl bg-[#3f5c4a]">
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Image src="/5.png" alt="Healing" width={140} height={140} />
              </motion.div>

              <span className="text-4xl text-[#3d3020] mb-5">Healing</span>
            </div>

            <div className="flex flex-col px-2 xl:px-4 text-[#544120] gap-2 pt-3">
              <span className="text-sm">Holistic healing sessions focus on restoring balance in mind, body, and emotions through energy healing, mindfulness, and spiritual practices.</span>
            </div>
          </Card>
        </motion.div>

      </motion.div> 
      <div className="justify-center items-center gap-2 mt-3 hidden md:flex lg:hidden pb-10">
  {[0, 1].map((dot) => (
    <div
      key={dot}
      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
        activeIndex === dot ? "bg-blue-500 scale-110" : "bg-gray-400"
      }`}
    />
  ))}
</div>
<div className="flex justify-center items-center gap-2 mt-3 md:hidden pb-10">
  {[0, 1, 2].map((dot) => (
    <div
      key={dot}
      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
        activeIndex === dot ? "bg-blue-500 scale-110" : "bg-gray-400"
      }`}
    />
  ))}
</div>
      
    </div>
  );
}




