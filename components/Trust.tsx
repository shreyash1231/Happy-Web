"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Trust() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#dcd8ce] p-6 xl:p-16 mx-auto max-w-[1950px]">
      <div className="flex flex-col mx-auto max-w-[1950px] gap-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <span className="text-center text-xl xl:text-6xl font-canela font-normal">
            Trusted by Corporate Organizations
          </span>
          <span className="text-center text-sm xl:text-xl text-[#978059] ">
            Our corporate clients range from Public Sector Undertakings to IT companies.
          </span>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 xl:gap-6 place-items-center"
        >
          {[
            "/23.png",
            "/24.png",
            "/25.png",
            "/26.png",
            "/27.png",
            "/28.png",
            "/29.png",
            "/30.png",
          ].map((src, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center justify-center h-[100px]"
            >
              <Image
                src={src}
                alt="logo"
                width={200}
                height={120}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}