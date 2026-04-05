"use client";

import { Card } from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Coaching(){


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

  return(
    <div className="px-4 pt-8 xl:p-16">
      
      {/* 🔹 Heading */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-4 xl:gap-10"
      >
        <motion.span
          variants={fadeUp}
          className="text-center text-lg xl:text-5xl font-canela font-normal"
        >
          Programs designed for emotional clarity and growth
        </motion.span>

        <motion.span
          variants={fadeUp}
          className="text-center text-[10px] xl:text-xl text-[#c39e86]"
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
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="
    flex flex-nowrap overflow-x-auto gap-8 px-4 w-full
    pt-10 pb-12
    xl:flex-wrap xl:overflow-visible xl:justify-center xl:mt-10 xl:pt-25
  "
  style={{ WebkitOverflowScrolling: "touch" }}
>

        {/* Card 1 */}
        <motion.div variants={fadeUp} whileTap={{ scale: 0.97 }} className="flex-shrink-0">
          <Card className="flex h-110 w-75 md:w-85 flex-col border-3 border-yellow-400 gap-0 p-0 rounded-4xl">
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
          <Card className="flex h-110 w-75 md:w-85 flex-col border-3 border-yellow-400 gap-0 p-0 rounded-4xl">
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
          <Card className="flex h-110 w-75  md:w-85 flex-col border-3 border-yellow-400 gap-0 p-0 rounded-4xl">
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
    </div>
  );
}




