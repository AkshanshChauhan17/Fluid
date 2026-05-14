"use client";

import { useState } from "react";

import {
  Plus,
  Minus,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
  Variants,
} from "framer-motion";

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
    question:
      "Is the system designed for healthcare?",
    answer:
      "Yes, it is specifically built for healthcare compliance, security, and efficiency.",
  },
  {
    question: "How do we get started?",
    answer:
      "You can get started by contacting our team for onboarding and integration support.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function QandA() {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(
      activeIndex === index ? null : index
    );
  };

  return (
    <section className="w-full bg-white py-0 px-5 sm:px-8 md:px-0 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="
          max-w-4xl
          mx-auto
          border
          border-gray-200
          rounded-xl
          overflow-hidden
          bg-white
        "
      >
        {faqs.map((faq, index) => {
          const isOpen =
            activeIndex === index;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`border-b border-gray-200 ${
                index === faqs.length - 1
                  ? "border-b-0"
                  : ""
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="
                  w-full
                  flex
                  items-start
                  sm:items-center
                  justify-between
                  gap-4
                  text-left
                  px-5
                  sm:px-6
                  py-5
                  transition-colors
                  duration-300
                  cursor-pointer
                  hover:bg-[#fafcff]
                "
              >
                <span
                  className="
                    text-[17px]
                    sm:text-[18px]
                    leading-[150%]
                    font-medium
                    text-[#101828]
                    pr-2
                  "
                >
                  {faq.question}
                </span>

                <motion.span
                  animate={{
                    rotate: isOpen ? 180 : 0,
                    scale: isOpen
                      ? 1.04
                      : 1,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    flex
                    items-center
                    justify-center
                    w-6
                    h-6
                    rounded-full
                    border
                    border-gray-300
                    text-gray-600
                    shrink-0
                  "
                >
                  {isOpen ? (
                    <Minus size={14} />
                  ) : (
                    <Plus size={14} />
                  )}
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.38,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{
                        y: 10,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      exit={{
                        y: -6,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="px-5 sm:px-6 pb-5"
                    >
                      <p
                        className="
                          text-[15px]
                          sm:text-[16px]
                          text-[#73797B]
                          leading-[180%]
                          max-w-[90%]
                        "
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}