"use client";

import { Card } from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Designed() {
  const stats = [
    { value: "1K+", label1: "Customers", label2: "Worldwide" },
    { value: "20+", label1: "Awards &", label2: "Honours" },
    { value: "521+", label1: "Workshops", label2: "\u00A0" },
    { value: "22+", label1: "Retreats", label2: "\u00A0" },
  ];

  /* ================= Animations ================= */

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="mx-auto max-w-[1920px] pt-8 px-4 md:p-10 xl:p-16">
      <div className="flex flex-col gap-5 lg:gap-20 items-center justify-center">

        {/* ================= Stats Section ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-12 lg:gap-6 lg:grid-cols-4 items-center justify-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex items-center"
            >
              <div className="flex flex-col gap-4 lg:px-16 text-center">

                <motion.strong
                  variants={fadeUp}
                  className="text-4xl md:text-7xl lg:text-6xl text-[#544120]"
                >
                  {stat.value}
                </motion.strong>

                <motion.div variants={fadeUp} className="flex flex-col">
                  <span className="text-sm md:text-xl text-[#c39e86]">
                    {stat.label1}
                  </span>
                  <span className="text-sm md:text-xl text-[#c39e86]">
                    {stat.label2}
                  </span>
                </motion.div>
              </div>

           {index < stats.length - 1 && (
              <div className="hidden lg:block h-32 w-[2px] bg-yellow-400 mx-4 self-stretch" />
            )}
            </motion.div>
          ))}
        </motion.div>

        {/* ================= Heading ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-xl md:text-4xl lg:text-5xl  xl:text-6xl">
            Designed Around Your Needs
          </span>
        </motion.div>

        {/* ================= Cards ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-5 mt-3"
        >
          {[ 
            { img: "/3.png", title: "Consciousness Guidance", bg: "#dcd8ce" },
            { img: "/4.png", title: "Meditation Coaching", bg: "#7d7d83" },
            { img: "/5.png", title: "Holistic Healing", bg: "#3f5c4a" },
          ].map((card, i) => (
            <motion.div key={i} variants={fadeUp} className="w-[95%] md:w-[45%] lg:w-auto">
              <Card className="flex h-90 w-full lg:h-110 lg:w-90 flex-col justify-between border-2 border-yellow-400 px-6 pb-8 rounded-4xl"
                style={{ backgroundColor: card.bg }}
              >
                <div className="flex items-center justify-center">
               <Image
                  src={card.img}
                  alt=""
                  width={250}
                  height={250}
                  className="w-50 h-50 md:w-55 md:h-55 lg:w-70 lg:h-70"
                />
                </div>

                <div
                  className={`text-left text-3xl lg:text-4xl ${
                    i=== 0 ? "text-[#544120]" : "text-[#c39e86]"
                  }`}
                >
                  {card.title.split(" ")[0]} <br />
                  {card.title.split(" ")[1]}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= Therapy Formats ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-3"
        >
          <span className="text-xl md:text-4xl lg:text-6xl">
            Therapy Formats
          </span>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-3"
        >

          {/* Card 1 */}
          <motion.div variants={fadeUp}>
            <Card className="bg-[#544120] rounded-4xl border-2 border-yellow-400 w-full h-full lg:max-w-xl flex flex-col p-6 sm:p-8">
              <div className="flex justify-end">
                <Image src="/6.png" alt="" width={200} height={200} />
              </div>

              <div className="flex flex-col gap-4 text-[#c39e86] mt-4">
                <strong className="text-2xl sm:text-2xl lg:text-4xl">
                  For Individuals
                </strong>
                <div className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  Personal coaching, meditation guidance, emotional wellness support,
                  relationship clarity, life direction, healing work.
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUp}>
            <Card className="bg-transparent rounded-4xl border-2 border-[#544120] w-full h-full lg:max-w-xl flex flex-col p-6 sm:p-8">
              <div className="flex justify-end">
                <Image src="/6.png" alt="" width={200} height={200} />
              </div>

              <div className="flex flex-col gap-4 text-[#544120] mt-4">
                <strong className="text-2xl sm:text-2xl lg:text-4xl">
                  For Organizations
                </strong>
                <div className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  Corporate wellness programs, executive coaching, happiness measurement, emotional intelligence training, mentoring, leadership development.
                </div>
              </div>
            </Card>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}