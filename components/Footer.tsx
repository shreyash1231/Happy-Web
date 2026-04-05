"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  // ================= Animations =================
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
    <motion.div
      className="bg-[#dcd8ce] xl:rounded-t-[110px] rounded-t-[40px] p-5 md:p-10 lg:p-16 mx-auto max-w-[1920px]"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div className="flex flex-col gap-10" variants={fadeUp}>
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-0 md:gap-5" variants={fadeUp}>
          {/* About */}
          <motion.div className="flex flex-col gap-2" variants={fadeUp}>
            <span>
              <strong className="text-[#544120] text-sm lg:text-xl">About</strong>
            </span>
            <div className="flex flex-col text-[#544120]">
              <span>Founder’s Note</span>
              <span>About Happy Ho</span>
              <span>Why Happy Ho</span>
              <span>Our Approach</span>
              <span>How It Works</span>
            </div>
          </motion.div>

          {/* Our Programs */}
          <motion.div className="flex flex-col gap-2" variants={fadeUp}>
            <span>
              <strong className="text-[#544120] text-sm lg:text-xl">Our Programs</strong>
            </span>
            <div className="flex flex-col text-[#544120]">
              <span>For Individuals</span>
              <span>For Organizations</span>
              <span>Signature Programs</span>
              <div className="flex flex-col pl-4">
                <span>• Cosmic <span className="hidden lg:inline">Guidance</span></span>
                <span className="lg:hidden">&nbsp;&nbsp; Guidance</span>

                <span>• Meditation <span className="hidden lg:inline">Coaching</span></span>
                <span className="lg:hidden">&nbsp;&nbsp; Coaching</span>

                <span>• Holistic <span className="hidden lg:inline">Healing</span></span>
                <span className="lg:hidden">&nbsp;&nbsp; Healing</span>
              </div>
            </div>
          </motion.div>

          {/* Content & Learning */}
          <motion.div className="flex flex-col gap-2 mt-10 md:mt-0" variants={fadeUp}>
            <span>
              <strong className="text-[#544120] text-sm lg:text-xl">Content & Learning</strong>
            </span>
            <div className="flex flex-col text-[#544120]">
              <span>Blogs</span>
              <span>Videos / Reels</span>
            </div>
          </motion.div>

          {/* Footer Image */}
          <motion.div className="mt-10 md:mt-0" variants={fadeUp}>
            <Image src="/footerImage.png" alt="Meditation" width={220} height={220} />
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div className="flex flex-col gap-2" variants={fadeUp}>
          <span>
            <strong className="text-[#544120] text-xl">Contact</strong>
          </span>
          <div className="flex flex-col gap-5">
            <motion.div className="flex flex-col text-[#544120]" variants={fadeUp}>
              <span>
                Address – Tower 7 – 202, Ace Parkway, <br />
                Sector 150, Gautam Budh Nagar, 201310,<br />
                NOIDA, Uttar Pradesh, India (Bharat)
              </span>
            </motion.div>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 md:gap-15 lg:gap-30" variants={fadeUp}>
              <div className="flex flex-col">
                <span>Mobile: (+91) 9811237999</span>
                <span>Email: info@happyho.in</span>
              </div>
              <div className="flex gap-3 mt-5 lg:mt-0 lg:ml-auto text-sm">
                <span>FaceBook</span>
                <span>Instagram</span>
                <span>Twitter</span>
                <span>YouTube</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}