"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
} from "framer-motion";

import {
  MinusCircle,
  PlusCircle,
} from "lucide-react";

const faqData = [
  {
    question:
      "What is MedToken technology?",
    answer:
      "MedToken is a secure payment architecture designed to protect sensitive payment information and support modern healthcare payment infrastructure.",
  },

  {
    question:
      "How much can practices save?",
    answer:
      "Healthcare practices can reduce processing expenses and recover up to 3% or more annually through optimized payment workflows and dual pricing solutions.",
  },

  {
    question:
      "Will this disrupt our workflow?",
    answer:
      "No. MED Pay integrates smoothly into existing workflows with minimal disruption, helping teams transition quickly and efficiently.",
  },

  {
    question:
      "Is the system designed for healthcare?",
    answer:
      "Yes. MED Pay is specifically built for healthcare organizations with HIPAA-aligned infrastructure, tokenization, and secure patient payment tools.",
  },

  {
    question:
      "How do we get started?",
    answer:
      "Simply submit an online application, complete onboarding, and your organization can begin processing secure payments within 48 hours.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
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

const headingWords = [
  "Got",
  "Any",
  "Questions?",
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] =
    useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(
      openIndex === index ? -1 : index
    );
  };

  return (
    <section className="w-full bg-[#F8FAFD] py-[72px] sm:py-[90px] lg:py-[100px] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-0 flex flex-col items-center gap-[44px] sm:gap-[56px] lg:gap-[60px]"
      >
        <motion.div
          variants={containerVariants}
          className="flex flex-col items-center gap-2 text-center"
        >
          <motion.span
            variants={fadeUpVariants}
            className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[13px] sm:text-[16px] leading-6 font-normal"
          >
            Frequently Asked Questions
          </motion.span>

          <motion.h2
            variants={containerVariants}
            className="text-[#1D3855] text-[34px] sm:text-[44px] leading-[115%] sm:leading-[56px] tracking-[-0.04em] font-medium capitalize text-balance"
          >
            {headingWords.map(
              (word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-[10px]"
                >
                  {word}
                </motion.span>
              )
            )}
          </motion.h2>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className="w-full px-0 lg:px-8"
        >
          <motion.div
            variants={containerVariants}
            className="max-w-[768px] mx-auto flex flex-col"
          >
            {faqData.map((item, index) => {
              const isOpen =
                openIndex === index;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="w-full"
                >
                  {index !== 0 && (
                    <div className="w-full h-[1px] bg-[#EEEEEE]" />
                  )}

                  <motion.button
                    whileHover={{
                      opacity: 0.96,
                    }}
                    whileTap={{
                      scale: 0.995,
                    }}
                    onClick={() =>
                      toggleFAQ(index)
                    }
                    className={`w-full cursor-pointer text-left transition-all duration-500 ${
                      isOpen
                        ? "py-0"
                        : "py-5 sm:py-6"
                    }`}
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="flex-1 flex flex-col items-start gap-2">
                        <motion.h3
                          layout
                          className={`text-[#1D3855] text-[17px] sm:text-[18px] leading-[160%] tracking-[-0.3px] font-medium pr-2 ${
                            isOpen
                              ? "mt-5 sm:mt-6"
                              : "mt-0"
                          }`}
                        >
                          {item.question}
                        </motion.h3>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                height: 0,
                                y: -10,
                              }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                                y: 0,
                              }}
                              exit={{
                                opacity: 0,
                                height: 0,
                                y: -10,
                              }}
                              transition={{
                                duration: 0.45,
                                ease: [
                                  0.22,
                                  1,
                                  0.36,
                                  1,
                                ],
                              }}
                              className="overflow-hidden"
                            >
                              <motion.p
                                initial={{
                                  opacity: 0,
                                  y: 12,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                exit={{
                                  opacity: 0,
                                  y: 8,
                                }}
                                transition={{
                                  duration: 0.45,
                                  delay: 0.05,
                                }}
                                className="text-[#73797B] text-[15px] sm:text-[16px] leading-[175%] tracking-[-0.3px] max-w-[720px] pb-5 sm:pb-6 text-pretty"
                              >
                                {item.answer}
                              </motion.p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <motion.div
                        animate={{
                          rotate: isOpen
                            ? 180
                            : 0,
                          opacity: isOpen
                            ? 1
                            : 0.9,
                        }}
                        transition={{
                          duration: 0.45,
                          ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                          ],
                        }}
                        className={`pt-[2px] shrink-0 ${
                          isOpen
                            ? "mt-5 sm:mt-6"
                            : "mt-0"
                        }`}
                      >
                        {isOpen ? (
                          <MinusCircle
                            size={24}
                            className="text-[#3B747F]"
                            strokeWidth={2}
                          />
                        ) : (
                          <PlusCircle
                            size={24}
                            className="text-[#3B747F]"
                            strokeWidth={2}
                          />
                        )}
                      </motion.div>
                    </div>
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}