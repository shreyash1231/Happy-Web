"use client"

import { useState } from "react";
import { Card } from "./ui/card";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What do coaching, counselling, and healing focus on?",
      answer:
        "They focus on personal growth, emotional balance, and helping you overcome life challenges with clarity and confidence.",
    },
    {
      question: "How is coaching different from counselling?",
      answer:
        "Coaching focuses on achieving future goals, while counselling often helps process past experiences and emotional challenges.",
    },
    {
      question: "When can I expect to see results?",
      answer:
        "Results vary for each individual, but many people start noticing clarity and positive shifts within a few sessions.",
    },
    {
      question: "What happens in a meditation session?",
      answer:
        "You will be guided through breathing, awareness, and relaxation techniques that help calm the mind and improve focus.",
    },
  ];

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-8 px-4 xl:p-16 mx-auto max-w-[1920px]">
      <div className="flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <p className="text-xl md:text-2xl font-semibold text-[#c39e86]">
            Frequently Asked Questions
          </p>
          <h2 className="text-xl md:text-4xl font-bold">Clarity Before You Begin</h2>
        </div>

        {/* FAQ Card */}
        <Card className="w-full border-2 border-[#c39e86] bg-[#f3efe8] p-8 rounded-xl">

          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-5 last:border-none">

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-sm md:text-xl font-medium flex justify-between items-center"
              >
                {faq.question}
                <span className="text-lg md:text-2xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-3 text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              )}

            </div>
          ))}

        </Card>
      </div>
    </div>
  );
}