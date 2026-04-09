"use client";

import { Card } from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
export default function Growth() {


    const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  

  const cards = [
    {
      title: "Clarity",
      img: "/5.png",
      desc: "Understanding your thoughts, emotions, and patterns is the first step toward meaningful change.",
    },
    {
      title: "Balance",
      img: "/3.png",
      desc: "We help you develop emotional stability so you can respond to life with presence rather than overwhelm.",
    },
    {
      title: "Practice",
      img: "/9.png",
      desc: "Lasting well-being is built through small daily practices that strengthen resilience and self-awareness.",
    },
  ];

    const handleScroll = () => {
  if (!scrollRef.current) return;

  const scrollLeft = scrollRef.current.scrollLeft;
  const cardWidth = scrollRef.current.offsetWidth; // visible width

  const index = Math.round(scrollLeft / cardWidth);
  setActiveIndex(index);
};


 const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
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
  // ✅ Child animation (fade + slide up)
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const},
    },
  };


  return (
    <div className="px-4 pt-8 xl:p-8 mx-auto max-w-[1920px]">
      <div className="flex flex-col gap-5 mt-10">

        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-2"
        >
          <motion.span
            variants={fadeUp}
            className="text-3xl xl:text-5xl text-center"
          >
            Our Philosophy
          </motion.span>

          <motion.span
            variants={fadeUp}
            className="text-[#c39e86] text-center text-xl xl:text-3xl"
          >
            Growth through awareness and practice
          </motion.span>
        </motion.div>


        
        <motion.div
          ref={scrollRef}
          onScroll={handleScroll}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="2xl:hidden flex overflow-x-auto px-4 mt-3 w-full scrollbar-hide justify-center"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {["/1200.png", "/1201.png", "/1202.png"].map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileTap={{ scale: 0.97 }}
              className="min-w-[280px] sm:min-w-[320px] flex-shrink-0"
            >
              <Image
                src={img}
                alt=""
                width={320}
                height={360}
                className="w-full h-90  md:h-120 object-cover rounded-4xl"
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="justify-center items-center gap-2 mt-3 hidden md:flex lg:hidden">
  {[0, 1].map((dot) => (
    <div
      key={dot}
      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
        activeIndex === dot ? "bg-blue-500 scale-110" : "bg-gray-400"
      }`}
    />
  ))}
</div>
<div className="flex justify-center items-center gap-2 mt-3 md:hidden">
  {[0, 1, 2].map((dot) => (
    <div
      key={dot}
      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
        activeIndex === dot ? "bg-blue-500 scale-110" : "bg-gray-400"
      }`}
    />
  ))}
</div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden 2xl:flex flex-wrap gap-6 mt-3 w-full justify-center"
        >
          {["/1200.png", "/1201.png", "/1202.png"].map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.03 }}
              className="w-full sm:w-[48%] lg:w-[30%]"
            >
              <Image
                src={img}
                alt=""
                width={320}
                height={360}
                className="w-full 2xl:h-190 object-cover rounded-4xl"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Cards
       <motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="
    flex flex-nowrap overflow-x-auto gap-8 px-4 w-full
    xl:flex-wrap xl:overflow-visible xl:justify-center xl:mt-10
  "
  style={{ WebkitOverflowScrolling: "touch" }}
>
          {cards.map((card, index) => (
         <motion.div
  key={index}
  variants={fadeUp}
  whileHover={{ scale: 1.05 }}
  className="
    w-full sm:w-[45%] lg:w-[30%] max-w-[350px]
    flex-shrink-0
  "
>
              <Card className="flex flex-col min-h-[420px] border-3 border-yellow-400 bg-[#7d8d83] rounded-4xl p-4 transition-all duration-300 hover:shadow-xl">
                
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4 }}     
                  className="flex justify-center">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={200}
                    height={200}
                  />
                </motion.div>

                <div className="flex flex-col gap-3 text-[#dcd8ce]">
                  <span className="text-3xl xl:text-4xl">
                    {card.title}
                  </span>
                  <p className="text-base xl:text-lg">
                    {card.desc}
                  </p>
                </div>

              </Card>
            </motion.div>
          ))}
        </motion.div> */}

      </div>
    </div>
  );
}