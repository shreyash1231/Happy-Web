"use client";

import { Card } from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Growth() {

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

 const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
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
    <div className="px-4 pt-8 xl:p-16">
      <div className="flex flex-col gap-5">

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
            className="text-3xl xl:text-6xl text-center"
          >
            Our Philosophy
          </motion.span>

          <motion.span
            variants={fadeUp}
            className="text-[#c39e86] text-center text-xl xl:text-4xl"
          >
            Growth through awareness and practice
          </motion.span>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 xl:mt-10"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-[45%] lg:w-[30%] max-w-[350px]"
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
        </motion.div>

      </div>
    </div>
  );
}