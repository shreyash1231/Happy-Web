"use client";

import { Card } from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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
    const stagger = {
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
  className="grid grid-cols-2 gap-6 lg:gap-0 lg:grid-cols-4 items-center justify-center w-fit"
>

  {/* Item 1 */}
  <motion.div variants={fadeUp} className="flex items-center justify-center lg:border-r-2 lg:border-[#D4A437]">
    <div className="flex flex-col gap-4 lg:px-10 text-center">
      <motion.strong variants={fadeUp} className="text-4xl md:text-7xl lg:text-6xl text-[#544120]">
        1K+
      </motion.strong>
      <motion.div variants={fadeUp} className="flex flex-col">
        <span className="text-sm md:text-xl text-[#c39e86]">Customers</span>
        <span className="text-sm md:text-xl text-[#c39e86]">Worldwide</span>
      </motion.div>
    </div>
  </motion.div>

  {/* Item 2 */}
  <motion.div variants={fadeUp} className="flex items-center justify-center lg:border-r-2 lg:border-[#D4A437]">
    <div className="flex flex-col gap-4 lg:px-10 text-center">
      <motion.strong variants={fadeUp} className="text-4xl md:text-7xl lg:text-6xl text-[#544120]">
        20+
      </motion.strong>
      <motion.div variants={fadeUp} className="flex flex-col">
        <span className="text-sm md:text-xl text-[#c39e86]">Awards &</span>
        <span className="text-sm md:text-xl text-[#c39e86]">Honours</span>
      </motion.div>
    </div>
  </motion.div>

  {/* Item 3 */}
  <motion.div variants={fadeUp} className="flex items-center justify-center lg:border-r-2 lg:border-[#D4A437]">
    <div className="flex flex-col gap-4 lg:px-10 text-center">
      <motion.strong variants={fadeUp} className="text-4xl md:text-7xl lg:text-6xl text-[#544120]">
        521+
      </motion.strong>
      <motion.div variants={fadeUp} className="flex flex-col">
        <span className="text-sm md:text-xl text-[#c39e86]">Workshops</span>
        <span className="text-sm md:text-xl text-[#c39e86]">&nbsp;</span>
      </motion.div>
    </div>
  </motion.div>

  {/* Item 4 */}
  <motion.div variants={fadeUp} className="flex items-center justify-center">
    <div className="flex flex-col gap-4 lg:px-10 text-center">
      <motion.strong variants={fadeUp} className="text-4xl md:text-7xl lg:text-6xl text-[#544120]">
        22+
      </motion.strong>
      <motion.div variants={fadeUp} className="flex flex-col">
        <span className="text-sm md:text-xl text-[#c39e86]">Retreats</span>
        <span className="text-sm md:text-xl text-[#c39e86]">&nbsp;</span>
      </motion.div>
    </div>
  </motion.div>

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
  variants={stagger}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="xl:hidden flex overflow-x-auto gap-6 px-4 mt-3 w-full scrollbar-hide"
  style={{ WebkitOverflowScrolling: "touch" }}
>
  {["/58.png", "/59.png", "/60.png"].map((img, i) => (
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
        className="w-full h-90 object-cover rounded-4xl"
      />
    </motion.div>
  ))}
</motion.div>
<motion.div
  variants={stagger}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="hidden xl:flex flex-wrap justify-center gap-6 px-4 mt-3 w-full"
>
  {["/58.png", "/59.png", "/60.png"].map((img, i) => (
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
        className="w-full h-110 2xl:h-150 object-cover rounded-4xl"
      />
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
            variants={stagger}
          initial="hidden"
          whileInView="show"
          className="md:hidden block flex">
             <Link href="/Programs" className="cursor-pointer">
          <img
          src="/80.png"
          alt="individual"
          className="w-40 h-40"
          
          />
          </Link>
               <Link href="/Corporate" className="cursor-pointer">
           <img
          src="/81.png"
          alt="individual"
          className="w-40 h-40"
          
          />
          </Link>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 mt-3"
        >

          {/* Card 1 */}
          <motion.div variants={fadeUp}  whileTap={{ scale: 0.97 }} >
            <Card className="bg-[#544120] rounded-4xl border-2 border-yellow-400 w-full h-full lg:max-w-xl flex flex-col p-6 sm:p-8">
              <Link href="/Programs" className="cursor-pointer">
              <motion.div 
                  initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
              className="flex justify-end">
                <Image src="/6.png" alt="" width={200} height={200} />
              </motion.div>

              <div className="flex flex-col gap-4 text-[#c39e86] mt-4">
                <strong className="text-2xl sm:text-2xl lg:text-4xl">
                  For Individuals
                </strong>
                <div className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  Personal coaching, meditation guidance, emotional wellness support,
                  relationship clarity, life direction, healing work.
                </div>
              </div>
              </Link>
            </Card>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUp}  whileTap={{ scale: 0.97 }} >
            <Card className="bg-transparent rounded-4xl border-2 border-[#544120] w-full h-full lg:max-w-xl flex flex-col p-6 sm:p-8">
              <Link href="/Corporate" className="cursor-pointer">
              <motion.div 
                initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4 }}className="flex justify-end">
                <Image src="/intro.png" alt="" width={125} height={200} />
              </motion.div>

              <div className="flex flex-col gap-4 text-[#544120] mt-4">
                <strong className="text-2xl sm:text-2xl lg:text-4xl">
                  For Organizations
                </strong>
                <div className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  Corporate wellness programs, executive coaching, happiness measurement, emotional intelligence training, mentoring, leadership development.
                </div>
              </div>
              </Link>
            </Card>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}



          // {[ 
          //   { img: "/68.png", title: "Consciousness Guidance", bg: "#dcd8ce" },
          //   { img: "/69.png", title: "Meditation Coaching", bg: "#7d7d83" },
          //   { img: "/70.png", title: "Holistic Healing", bg: "#3f5c4a" },