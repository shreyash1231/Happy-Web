"use client"

import { motion } from "framer-motion";
export default function Clarity(){
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const},
        },
    };
    return (
        <div className="bg-[#3f5c4a] p-8 mt-8 mx-auto max-w-[1920px]">
            <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col gap-5 text-white items-center justify-center">
                <motion.div 
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col text-4xl">
                    <span>Clarity replaced confusion.</span>
                    <span>The structure made the difference.</span>
                </motion.div>
                <motion.div 
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-4xl">
                    -unknown
                </motion.div>
            </motion.div>
        </div>
    );
}