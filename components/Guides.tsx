"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Guides() {

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
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="max-w-[1920px] mx-auto pt-12 px-6 xl:p-16 pb-10">
      <div className="flex flex-col">
        
        {/* Heading */}
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl xl:text-5xl"
        >
          Meet Our Guides
        </motion.span>

        {/* Columns */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        className="hidden md:flex flex-col md:flex-row items-center justify-center gap-5 mt-20"
        >
          
          {/* Column 1 */}
          <motion.div variants={fadeUp} className="flex md:flex-col gap-2 md:gap-3">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/43.png"
                alt="women"
                width={200}
                height={200}
                className="rounded-[60px] w-[200px] h-[200px] object-cover"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/44.png"
                alt="women"
                width={200}
                height={300}
                className="rounded-[60px] w-[200px] h-[300px] object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Column 2 */}
          <motion.div variants={fadeUp} className="flex md:flex-col gap-2 md:gap-3">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/43.png"
                alt="women"
                width={200}
                height={300}
                className="rounded-[60px] w-[200px] h-[300px] object-cover"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/44.png"
                alt="women"
                width={200}
                height={200}
                className="rounded-[60px] w-[200px] h-[200px] object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Column 3 */}
          <motion.div variants={fadeUp} className="flex md:flex-col gap-2 md:gap-3">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/43.png"
                alt="women"
                width={200}
                height={200}
                className="rounded-[60px] w-[200px] h-[200px] object-cover"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/42.png"
                alt="women"
                width={200}
                height={300}
                className="rounded-[60px] w-[200px] h-[300px] object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Column 4 */}
          <motion.div variants={fadeUp} className="flex md:flex-col gap-2 md:gap-3">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/43.png"
                alt="women"
                width={200}
                height={300}
                className="rounded-[60px] w-[200px] h-[300px] object-cover"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/44.png"
                alt="women"
                width={200}
                height={200}
                className="rounded-[60px] w-[200px] h-[200px] object-cover"
              />
            </motion.div>
          </motion.div>

        </motion.div>



        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex gap-5 mt-10 md:hidden"
        >
          {/* Column 1 */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/43.png"
                alt="women"
                width={200}
                height={200}
                className="rounded-[60px] w-[200px] h-[200px] object-cover"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/43.png"
                alt="women"
                width={200}
                height={300}
                className="rounded-[60px] w-[200px] h-[300px] object-cover"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/43.png"
                alt="women"
                width={200}
                height={200}
                className="rounded-[60px] w-[200px] h-[200px] object-cover"
              />
            </motion.div>
             <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/43.png"
                alt="women"
                width={200}
                height={300}
                className="rounded-[60px] w-[200px] h-[300px] object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Column 2 */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
               <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/44.png"
                alt="women"
                width={200}
                height={300}
                className="rounded-[60px] w-[200px] h-[300px] object-cover"
              />
            </motion.div>
             <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/42.png"
                alt="women"
                width={200}
                height={300}
                className="rounded-[60px] w-[200px] h-[300px] object-cover"
              />
            </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/44.png"
                alt="women"
                width={200}
                height={200}
                className="rounded-[60px] w-[200px] h-[200px] object-cover"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/44.png"
                alt="women"
                width={200}
                height={200}
                className="rounded-[60px] w-[200px] h-[200px] object-cover"
              />
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}