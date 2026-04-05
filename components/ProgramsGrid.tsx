"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";

import { motion } from "framer-motion";

export default function ProgramsGrid() {


  const programs = [
  {
    title: "Stress Management & Emotional Balance",
    desc: "Learn to identify workplace stress triggers and apply mindfulness techniques to manage pressure and emotional overload.",
    tags: ["Mindfulness", "Workplace Wellbeing"]
  },
  {
    title: "Building Workplace Relationships",
    desc: "Build meaningful professional relationships through emotional awareness and effective communication practices.",
    tags: ["Team Culture"]
  },
  {
    title: "Managing Negative Emotions",
    desc: "Learn practical techniques from positive psychology to manage negative emotions and respond with clarity in difficult situations.",
    tags: ["Positive Psychology"]
  },
  {
    title: "Connecting the Dots in Life",
    desc: "Bridge the gap between professional goals and personal wellbeing through mindfulness and emotional practices.",
    tags: ["Mindfulness", "Life Balance"]
  },
  {
    title: "Leadership in Economic Downturn",
    desc: "Develop emotional resilience and mindfulness skills to lead teams through uncertainty and high-pressure environments.",
    tags: ["Leadership Development"]
  },
  {
    title: "Building a Happy Company",
    desc: "Using Positive Psychology and spirituality, this program helps senior leadership create a happiness ecosystem within the organization.",
    tags: ["Positive Psychology"]
  },
  {
    title: "Managing Success",
    desc: "Learn to stay grounded and emotionally balanced while handling growth, responsibility, and leadership pressure.",
    tags: ["Leadership Growth"]
  },
  {
    title: "Competitiveness the Buddha Way",
    desc: "Develop a balanced approach to competition without sacrificing collaboration and emotional wellbeing.",
    tags: ["Sales Performance", "Mindfulness"]
  },
  {
    title: "When Going Gets Tough",
    desc: "Middle managers learn mindfulness tools to manage pressure from both leadership and operational teams.",
    tags: ["Leadership Skills"]
  },
  {
    title: "Connecting with the New-Age Employee",
    desc: "Understand evolving workplace values and build engagement strategies for modern employees.",
    tags: ["Employee Engagement"]
  },
  {
    title: "Transforming Anger into Positive Energy",
    desc: "Participants learn how anger can be channeled into productive outcomes.",
    tags: ["Emotional Intelligence"]
  },
  {
    title: "Invisible Direction of Growth",
    desc: "Explores emotional growth beyond professional success using behavioral therapies and meditation.",
    tags: ["Personal Growth", "Self Awareness"]
  },
  {
    title: "Gratitude for a Fulfilling Career",
    desc: "Build a mindset of gratitude that improves both career satisfaction and workplace relationships.",
    tags: ["Positive Psychology"]
  },
  {
    title: "Compassion in Corporate Life",
    desc: "Build compassionate leadership and collaborative teams aligned with organizational goals.",
    tags: ["Leadership Skills", "Team Harmony"]
  },
  {
    title: "Flourishing as the Ultimate Goal",
    desc: "Programs designed to help employees thrive emotionally and professionally through applied philosophy and positive psychology.",
    tags: ["Positive Psychology", "Wellbeing"]
  },
  {
    title: "Unlearning Helplessness",
    desc: "Helps employees overcome learned helplessness and contribute positively to the workplace ecosystem.",
    tags: ["Emotional Resilience"]
  }
];
    const cardVariants = {
    offscreen: { opacity: 0, y: 50, scale: 0.95 },
    onscreen: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, bounce: 0.2, duration: 0.8 },
    },
  };
  return (
    <div className="p-6 xl:px-16 xl:pb-16 xl:pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 w-fit mx-auto max-w-[1920px]">
            <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-lg">
              {programs[0].title}
            </div>
            <div className="text-sm">
              {programs[0].desc}
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">{programs[0].tags[0]}</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-35 text-[10px]">{programs[0].tags[1]}</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                 <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#dcd8ce] border-yellow-400 border-2 text-[#544120] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-lg">
              {programs[1].title}
            </div>
            <div className="text-sm">
              {programs[1].desc}
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#ebe5db] w-22 rounded-4xl text-[#544120] text-[10px]">{programs[1].tags[0]}</Button>
            </div>
          </div>
        </Card>
            </motion.div>
              <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#e2dfd6] border-yellow-400 border-2 text-[#544120] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-lg">
              {programs[2].title}
            </div>
            <div className="text-sm">
              {programs[2].desc}
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#ebe5db] w-28 rounded-4xl text-[#544120] text-[10px]">{programs[2].tags[0]}</Button>
            </div>
          </div>
        </Card>
            </motion.div>
               <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-lg">
              {programs[3].title}
            </div>
            <div className="text-sm">
              {programs[3].desc}
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">{programs[3].tags[0]}</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-35 text-[10px]">{programs[3].tags[1]}</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                 <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#3f5c4a] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-lg">
              {programs[4].title}
            </div>
            <div className="text-sm">
              {programs[4].desc}
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-35 rounded-4xl text-[10px]">{programs[4].tags[0]}</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                  <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#dcd8ce] border-yellow-400 border-2 text-[#544120] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-lg">
              {programs[5].title}
            </div>
            <div className="text-sm">
              {programs[5].desc}
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#ebe5db] w-35 rounded-4xl text-[#544120] text-[10px]">{programs[5].tags[0]}</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                  <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#3f5c4a] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              {programs[6].title}
            </div>
            <div className="text-sm">
              {programs[6].desc}
            </div>
            <div className="flex gap-3 mt-6">
              <Button className="bg-[#cfd6d0] w-35 rounded-4xl text-[10px]">{programs[6].tags[0]}</Button>
            </div>
          </div>
        </Card>
        </motion.div>
                <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              {programs[7].title}
            </div>
            <div className="text-sm">
              {programs[7].desc}
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-30 rounded-4xl text-[10px]">{programs[7].tags[0]}</Button>
              <Button className="bg-[#cfd6d0] rounded-4xl w-28 text-[10px]">{programs[7].tags[1]}</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                       <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#3f5c4a] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-xl">
              {programs[8].title}
            </div>
            <div className="text-sm">
              {programs[8].desc}
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-35 rounded-4xl text-[10px]">{programs[8].tags[0]}</Button>
            </div>
          </div>
        </Card>
        </motion.div>
            
                 <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#dcd8ce] border-yellow-400 border-2 text-[#544120] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-lg">
              {programs[9].title}
            </div>
            <div className="text-sm">
              {programs[9].desc}
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#ebe5db] w-35 rounded-4xl text-[#544120] text-[10px]">{programs[9].tags[0]}</Button>
            </div>
          </div>
        </Card>
            </motion.div>
             <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#e2dfd6] border-yellow-400 border-2 text-[#544120] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-lg">
              {programs[10].title}
            </div>
            <div className="text-sm">
              {programs[10].desc}
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#ebe5db] w-32 rounded-4xl text-[#544120] text-[10px]">{programs[10].tags[0]}</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                 <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#dcd8ce] border-yellow-400 border-2 text-[#544120] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-lg">
              {programs[11].title}
            </div>
            <div className="text-sm">
              {programs[11].desc}
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#ebe5db] w-35 rounded-4xl text-[#544120] text-[10px]">{programs[11].tags[0]}</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                        <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-lg">
              {programs[12].title}
            </div>
            <div className="text-sm">
              {programs[12].desc}
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-30 rounded-4xl text-[10px]">{programs[12].tags[0]}</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                 <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#3f5c4a] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-lg">
              {programs[13].title}
            </div>
            <div className="text-sm">
              {programs[13].desc}
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-27 rounded-4xl text-[10px]">{programs[13].tags[0]}</Button>
                 <Button className="bg-[#cfd6d0] w-23 rounded-4xl text-[10px]">{programs[13].tags[1]}</Button>
            </div>
          </div>
        </Card>
            </motion.div>
                  <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#7d8d83] border-yellow-400 border-2 text-[#f3efe8] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-lg">
              {programs[14].title}
            </div>
            <div className="text-sm">
              {programs[14].desc}
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#cfd6d0] w-30 rounded-4xl text-[10px]">{programs[14].tags[0]}</Button>
               <Button className="bg-[#cfd6d0] w-22 rounded-4xl text-[10px]">{programs[14].tags[1]}</Button>
            </div>
          </div>
        </Card>
            </motion.div>
              <motion.div
            className="w-full max-w-[320px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
        <Card className="bg-[#dcd8ce] border-yellow-400 border-2 text-[#544120] w-full lg:w-70 h-65 rounded-4xl px-5 pt-6 justify-center">
          <div className="flex flex-col gap-5">
             <div className="text-lg">
              {programs[15].title}
            </div>
            <div className="text-sm">
              {programs[15].desc}
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#ebe5db] w-30 rounded-4xl text-[#544120] text-[10px]">{programs[15].tags[0]}</Button>
            </div>
          </div>
        </Card>
            </motion.div>
      </div>
    </div>
  );
}