"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Practice() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const},
    },
  };

  return (
    <div className="pt-8 px-4 md:p-10 xl:p-16 mx-auto max-w-[1920px]">
      <div className="flex flex-col md:gap-10 xl:gap-25">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:gap-5"
        >
            <motion.span
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col text-left lg:text-center lg:grid lg:grid-cols-4"
                >
                <span className="lg:col-span-3">
                    <strong className="text-xl md:text-5xl lg:text-6xl xl:text-8xl">
                    Happiness is a skill
                    </strong>
                </span>
            </motion.span>

            <motion.span 
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="ml-auto text-center">
                <strong className="text-xl md:text-5xl lg:text-6xl xl:text-8xl">
                We help you practice it.
                </strong>
            </motion.span>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-2 text-[#c39e86] text-sm pt-6 lg:pt-0 md:text-xl xl:text-2xl items-center"
        >
          <span className="lg:grid lg:grid-cols-3 ">
            <motion.span  
              variants={fadeUp}               
              initial="hidden"               
              whileInView="show"               
              viewport={{ once: true }}               
              className="md:ml-auto md:col-span-2">              
              Happy Ho is a modern emotional wellness and <br className="hidden lg:block"/>
              life coaching platform designed to help individuals <br className="hidden lg:block"/> 
              and organization build clarity, resilience, balance, <br className="hidden lg:block"/>
              and conscious growth</motion.span> 
          </span>

          <span className="md:grid md:grid-cols-3 ml-[40px]">
            <span className="hidden md:block"></span>
              <motion.span 
                variants={fadeUp} 
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true }} 
                className="items-center md:col-span-4"> 
                Through coaching, meditation, consulting, and <br className="hidden lg:block"/> 
                transformative programs, we guide you toward <br className="hidden lg:block"/> 
                sustainable happiness — at home,<span>&nbsp;</span>at work, and <br className="hidden lg:block"/> 
                within yourself. 
              </motion.span>
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 gap-2 lg:gap-10 pt-6 md:pt-0"
        >
          <div className="ml-auto">
            <Button className="bg-[#544120] cursor-pointer hover:bg-[#978059] 
                px-4 py-2 text-[10px] 
                md:px-10 md:py-6 md:text-lg 
                rounded-full">
                  Start Your Journey
            </Button>
          </div>

          <div>
            <Button className="border-black cursor-pointer hover:text-white hover:bg-[#978059] 
              bg-transparent text-[#c39e86] 
              px-4 py-2 text-[10px] 
              md:px-10 md:py-6 md:text-lg 
              rounded-full">
                Explore Services
              </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}