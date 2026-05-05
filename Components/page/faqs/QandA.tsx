"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is MedToken technology?",
    answer:
      "MedToken is a secure payment architecture designed to protect sensitive payment information and streamline healthcare payment infrastructure.",
  },
  {
    question: "How much can practices save?",
    answer:
      "Savings depend on scale, but many practices reduce transaction costs and administrative overhead significantly.",
  },
  {
    question: "Will this disrupt our workflow?",
    answer:
      "No, MedToken integrates seamlessly into existing workflows with minimal changes required.",
  },
  {
    question: "Is the system designed for healthcare?",
    answer:
      "Yes, it is specifically built for healthcare compliance, security, and efficiency.",
  },
  {
    question: "How do we get started?",
    answer:
      "You can get started by contacting our team for onboarding and integration support.",
  },
];

export default function QandA() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-0 px-8 md:px-0">
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-xl">

        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className={`border-b border-gray-200 ${
                index === faqs.length - 1 ? "border-b-0" : ""
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center cursor-pointer justify-between text-left px-6 py-5"
              >
                <span className="text-[18px] font-medium text-[#101828]">
                  {faq.question}
                </span>

                <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 text-gray-600">
                  {isOpen ? (
                    <Minus size={14} />
                  ) : (
                    <Plus size={14} />
                  )}
                </span>
              </button>
              
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[16px] text-[#73797B] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}