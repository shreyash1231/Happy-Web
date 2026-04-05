"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Emotional() {
  /* ================= Animations ================= */

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="mx-auto max-w-[1920px] p-6 md:p-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6 text-center"
      >
        {/* ================= Image Marquee ================= */}
        <motion.div variants={fadeUp} className="w-full space-y-4 md:space-y-6">
          
          {/* Row 1 */}
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-3 sm:gap-4 md:gap-6 w-max min-w-full"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...Array(2)].map((_, repeatIndex) => (
                <div key={repeatIndex} className="flex gap-3 sm:gap-4 md:gap-6">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="overflow-hidden rounded-2xl"
                    >
                      <Image
                        src="/23.png"
                        alt=""
                        width={300}
                        height={200}
                        className="w-[140px] sm:w-[160px] md:w-[240px] lg:w-[280px]
                                   h-[90px] sm:h-[110px] md:h-[150px] lg:h-[180px] object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 (reverse direction) */}
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-3 sm:gap-4 md:gap-6 w-max min-w-full"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...Array(2)].map((_, repeatIndex) => (
                <div key={repeatIndex} className="flex gap-3 sm:gap-4 md:gap-6">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="overflow-hidden rounded-2xl"
                    >
                      <Image
                        src="/23.png"
                        alt=""
                        width={300}
                        height={200}
                        className="w-[140px] sm:w-[160px] md:w-[240px] lg:w-[280px]
                                   h-[90px] sm:h-[110px] md:h-[150px] lg:h-[180px] object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ================= Text ================= */}


      <div className="flex flex-col gap-1 ">
               <motion.span
          variants={fadeUp}
          className="text-xl md:text-4xl xl:text-6xl text-[#544120] font-canela font-normal"
        >
          You don’t have to navigate this alone.
        </motion.span>

        <motion.span
          variants={fadeUp}
          className="text-sm md:text-2xl xl:text-4xl text-[#c39e86]"
        >
          Start building emotional resilience today.
        </motion.span>
      </div>

        {/* ================= Button ================= */}

        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button className="mt-4 cursor-pointer w-[180px] md:w-[220px] bg-[#3f5c4a] hover:bg-[#344c3d] rounded-full py-5 px-6  md:py-5 lg:py-7 border-yellow-400 border-2 text-[12px]">
            Book Discovery Session
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}