"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Discover() {

  // Parent container (stagger effect)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Fade + slide up
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };
  

  return (
    <div className="relative z-10 mx-auto max-w-[1920px] pb-40">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/2.png"
          alt="background"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-[1920px] px-4 md:px-10 xl:px-16 pt-16 md:pt-10"
      >

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-2xl text-center md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl xl:mb-60"
        >
          Discover the program that fits your life and goals
        </motion.h1>

        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full">

          {/* Left column */}
          <motion.div
            variants={container}
            className="flex flex-col gap-6 max-w-[500px] 2xl:max-w-[800px] mt-20 xl:mt-0 2xl:mt-50 "
          >

            {/* Input */}
            <motion.input
              variants={fadeUp}
              whileFocus={{ scale: 1.03 }}
              placeholder="Name"
              className="placeholder:text-2xl w-full h-12 py-7 px-4 2xl:py-10 2xl:px-5 bg-white rounded-4xl outline-none border-yellow-400 border-2 transition-all"
            />

            <motion.input
              variants={fadeUp}
              whileFocus={{ scale: 1.03 }}
              placeholder="Email"
              className="placeholder:text-2xl w-full h-12 py-7 2xl:py-10 2xl:px-5 px-4 bg-white rounded-4xl outline-none border-yellow-400 border-2 transition-all"
            />

            <motion.input
              variants={fadeUp}
              whileFocus={{ scale: 1.03 }}
              placeholder="Message"
              className="placeholder:text-2xl w-full h-12 py-7 2xl:py-10 px-4 bg-white rounded-4xl outline-none border-yellow-400 border-2 transition-all"
            />

            {/* Button */}
            <motion.div variants={fadeUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="w-full xl:w-2/3 bg-[#3f5c4a] cursor-pointer hover:bg-[#978059] py-7 2xl:py-10 text-lg rounded-full">
                  Book Discovery Session
                </Button>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right column */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-center items-center text-white text-center"
          >
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}