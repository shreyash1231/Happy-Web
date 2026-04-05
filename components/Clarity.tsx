"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Clarity() {

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

  return (
    <div className="bg-[#3f5c4a] [t-8 px-6 p-16 mt-8 mx-auto max-w-[1920px]">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="md:grid md:grid-cols-6 items-center text-white max-w-5xl mx-auto gap-6"
      >

        {/* LEFT → End comma (middle) */}
        <motion.div
          variants={fadeUp}
          className="flex justify-start items-start h-full ml-auto -mt-15 md:block hidden"
        >
          <Image
            src="/start-comma.png"
            alt="comma"
            width={120}
            height={120}
          />
        </motion.div>

        {/* CENTER → TEXT */}
        <motion.div
          variants={fadeUp}
          className="text-left flex flex-col md:gap-2 col-span-4"
        >
          <span className="text-4xl md:text-2xl lg:text-4xl">
            Clarity replaced confusion.
          </span>
          <span className="text-4xl md:text-2xl lg:text-4xl">
            The structure made the difference.
          </span>

          <span className="mt-4 text-2xl lg:text-2xl md:text-xl text-left md:text-center  opacity-80">
            — Unknown
          </span>
        </motion.div>

        {/* RIGHT → Start comma (top) */}
        <motion.div
          variants={fadeUp}
          className="flex justify-end items-end mt-15 -ml-5 h-full md:block hidden "
        >
          <Image
            src="/end-comma.png"
            alt="comma"
            width={120}
            height={120}
          />
        </motion.div>

      </motion.div>
    </div>
  );
}