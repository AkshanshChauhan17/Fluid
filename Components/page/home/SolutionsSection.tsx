"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Lock,
  Monitor,
  CreditCard,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
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

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.97,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(6px)",
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

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headingWords = [
  "Healthcare",
  "Payment",
  "Solutions",
];

export default function SolutionsSection() {
  return (
    <section className="w-full overflow-hidden bg-[#0F2133] py-[72px] sm:py-[90px] lg:py-[100px] px-5 sm:px-8 lg:px-0">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="max-w-7xl mx-auto flex flex-col gap-[44px] sm:gap-[56px] lg:gap-[60px]"
      >
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 lg:gap-10">
          <motion.div
            variants={fadeUpVariants}
            className="max-w-[477px]"
          >
            <motion.p
              variants={fadeUpVariants}
              className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[13px] sm:text-[16px] leading-[150%] font-normal mb-2"
            >
              Platform Solutions
            </motion.p>

            <motion.h2
              variants={containerVariants}
              className="text-white text-[34px] sm:text-[44px] leading-[115%] sm:leading-[56px] tracking-[-0.04em] font-medium text-balance"
            >
              {headingWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-[10px]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </motion.div>

          <motion.p
            variants={fadeUpVariants}
            className="max-w-[588px] lg:text-right text-[#D0D5DD] text-[15px] sm:text-[16px] leading-[170%] text-pretty"
          >
            A healthcare payment system uses tokenization to replace
            sensitive data with tokens, protecting patient information and
            reducing breach risks.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -5,
            }}
            className="flex flex-col gap-[22px] sm:gap-[24px]"
          >
            <div className="bg-[#F8FAFD] rounded-[20px] sm:rounded-[24px] p-[18px] sm:p-[22px] min-h-[320px] sm:h-[300px] relative overflow-hidden flex flex-col gap-[8px]">
              <motion.div
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-[257px] h-[257px] bg-[#94B7DC] blur-[225px] top-[-173px] left-[71px]"
              />

              <motion.div
                variants={itemVariants}
                className="relative z-10 border border-[#FFBFC2] bg-[#FDEFEF] rounded-lg px-4 py-[14px] flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className="bg-[#FFBFC2] rounded-[4px] px-2 py-1 flex-shrink-0">
                    <div className="w-3 h-2 bg-[#E4000B] rounded-sm" />
                  </div>

                  <span className="text-[#E4000B] font-semibold tracking-[-1px] text-[13px] sm:text-[14px] truncate">
                    4532 •••• •••• 7829
                  </span>
                </div>

                <div className="border border-[#FFBFC2] bg-[#FEDEDE] rounded px-2 py-1 text-[8px] font-medium text-[#E4000B] whitespace-nowrap">
                  Raw data
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative z-10 flex items-center gap-2"
              >
                <div className="flex-1 h-[1px] bg-[#F0F7FF]" />

                <span className="text-[#3B747F] text-[11px] font-medium">
                  TOKENIZED
                </span>

                <ArrowRight
                  size={10}
                  className="text-[#3B747F]"
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{
                  scale: 1.01,
                }}
                className="relative z-10 bg-[#0F2133] rounded-lg p-4 flex items-center gap-4 overflow-hidden"
              >
                <div className="absolute w-[110px] h-[110px] rounded-full bg-[#1D3855] opacity-80 top-[-55px] right-[-10px]" />

                <motion.div
                  animate={{
                    opacity: [1, 0.85, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 w-[57px] h-[57px] rounded-lg bg-[#3B747F] flex items-center justify-center shadow-md flex-shrink-0"
                >
                  <Lock
                    className="text-white"
                    size={22}
                  />
                </motion.div>

                <div className="relative z-10 min-w-0">
                  <p className="text-[#5DA7CF] uppercase text-[8px] font-medium mb-2">
                    Secure Token
                  </p>

                  <p className="text-white tracking-[2px] sm:tracking-[2.8px] text-[10px] sm:text-[11px] truncate">
                    TKN · 1D38 · 55A9 · F2C4
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="relative z-10 grid grid-cols-3 gap-2 mt-auto"
              >
                {[
                  "HIPAA aligned",
                  "Zero raw data stored",
                  "AES-256 encrypted",
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={itemVariants}
                    whileHover={{
                      y: -2,
                    }}
                    className="border border-[#F0F7FF] rounded-lg bg-[#F8FAFD] min-h-[44px] flex items-center justify-center text-center px-2 py-2"
                  >
                    <span className="text-[#1D3855] text-[8px] font-medium leading-[130%]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={fadeUpVariants}
              className="px-1 text-center"
            >
              <h3 className="text-white text-[20px] font-semibold leading-6 mb-3">
                MedToken Technology
              </h3>

              <p className="text-[#D0D5DD] text-[14px] leading-6">
                Tokenized payment architecture designed for healthcare
                environments to protect sensitive payment information.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -5,
            }}
            className="flex flex-col gap-[22px] sm:gap-[24px]"
          >
            <div className="bg-[#F8FAFD] rounded-[20px] sm:rounded-[24px] p-[18px] sm:p-[22px] min-h-[320px] sm:h-[300px] relative overflow-hidden flex flex-col gap-[8px]">
              <motion.div
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-[257px] h-[257px] bg-[#94B7DC] blur-[225px] top-[-173px] left-[71px]"
              />

              <motion.div
                variants={itemVariants}
                className="relative z-10 bg-[#0F2133] rounded-lg p-4 flex justify-between items-center overflow-hidden gap-3"
              >
                <div className="absolute w-[110px] h-[110px] rounded-full bg-[#1D3855] opacity-80 top-[-55px] right-[-10px]" />

                <div className="relative z-10">
                  <p className="text-[#5DA7CF] uppercase text-[8px] font-medium mb-2">
                    Annual Recovery
                  </p>

                  <h4 className="text-white text-[13px] font-semibold tracking-[-1px]">
                    $18,000
                  </h4>

                  <p className="text-[#D0D5DD] text-[9px]">
                    on $600K revenue
                  </p>
                </div>

                <motion.div
                  animate={{
                    opacity: [1, 0.85, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 w-[57px] h-[57px] rounded-lg bg-[#3B747F] flex flex-col items-center justify-center text-white flex-shrink-0"
                >
                  <span className="text-[12px] font-semibold">
                    3%
                  </span>

                  <span className="text-[9px]">
                    saved
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="relative z-10 grid grid-cols-2 gap-2"
              >
                <motion.div
                  variants={itemVariants}
                  className="border border-[#FFBFC2] bg-[#FDEFEF] rounded-lg p-3"
                >
                  <p className="text-[#E4000B] uppercase text-[8px] font-medium mb-1">
                    Card Price
                  </p>

                  <h5 className="text-[#E4000B] text-[12px] font-semibold tracking-[-1px]">
                    $103.00
                  </h5>

                  <p className="text-[#E4000B] text-[7px]">
                    Includes processing fee
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="border border-[#F0F7FF] bg-[#F8FAFD] rounded-lg p-3"
                >
                  <p className="text-[#1D3855] uppercase text-[8px] font-medium mb-1">
                    Card Price
                  </p>

                  <h5 className="text-[#1D3855] text-[12px] font-semibold tracking-[-1px]">
                    $100.00
                  </h5>

                  <p className="text-[#73797B] text-[7px]">
                    No fee, you keep it all
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="relative z-10 flex flex-col gap-2"
              >
                {[
                  {
                    title: "With card fees",
                    width: "75%",
                    color: "bg-[#E4000B]",
                    value: "3.0%",
                    text: "#C04B4B",
                  },
                  {
                    title: "With dual pricing",
                    width: "5%",
                    color: "bg-[#00C853]",
                    value: "0%",
                    text: "#567185",
                  },
                ].map((bar) => (
                  <motion.div
                    key={bar.title}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <span className="text-[8px] text-[#567185] min-w-[90px]">
                      {bar.title}
                    </span>

                    <div className="flex-1 h-2 bg-[#EEEEEE] rounded-full overflow-hidden">
                      <motion.div
                        initial={{
                          width: 0,
                          opacity: 0,
                        }}
                        whileInView={{
                          width: bar.width,
                          opacity: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`h-full rounded-full ${bar.color}`}
                      />
                    </div>

                    <span
                      className="text-[8px] font-medium"
                      style={{ color: bar.text }}
                    >
                      {bar.value}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="relative z-10 grid grid-cols-3 gap-2 mt-auto"
              >
                {[
                  "Zero processing cost",
                  "Customer choice",
                  "Instant savings",
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={itemVariants}
                    whileHover={{
                      y: -2,
                    }}
                    className="border border-[#F0F7FF] rounded-lg bg-[#F8FAFD] min-h-[44px] flex items-center justify-center text-center px-2 py-2"
                  >
                    <span className="text-[#1D3855] text-[8px] font-medium leading-[130%]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={fadeUpVariants}
              className="px-1 text-center"
            >
              <h3 className="text-white text-[20px] font-semibold leading-6 mb-3">
                MED Pay Revenue Recovery
              </h3>

              <p className="text-[#D0D5DD] text-[14px] leading-6">
                Recover up to 3% or more of annual revenue by eliminating
                unnecessary credit card processing costs.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -5,
            }}
            className="flex flex-col gap-[22px] sm:gap-[24px]"
          >
            <div className="bg-[#F8FAFD] rounded-[20px] sm:rounded-[24px] p-[18px] sm:p-[22px] min-h-[320px] sm:h-[300px] relative overflow-hidden flex flex-col gap-[8px]">
              <motion.div
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-[257px] h-[257px] bg-[#94B7DC] blur-[225px] top-[-173px] left-[71px]"
              />

              <motion.div
                variants={itemVariants}
                className="relative z-10 bg-[#0F2133] rounded-lg p-4 flex justify-between items-center overflow-hidden gap-3"
              >
                <div className="absolute w-[110px] h-[110px] rounded-full bg-[#1D3855] opacity-80 top-[-55px] right-[-10px]" />

                <div className="relative z-10">
                  <p className="text-[#5DA7CF] uppercase text-[8px] font-medium mb-2">
                    Powered by
                  </p>

                  <h4 className="text-white text-[13px] font-semibold">
                    Payroc
                  </h4>

                  <p className="text-[#D0D5DD] text-[9px]">
                    Enterprise payment network
                  </p>
                </div>

                <motion.div
                  animate={{
                    opacity: [1, 0.85, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 w-[57px] h-[57px] rounded-lg bg-[#3B747F] flex flex-col items-center justify-center text-white flex-shrink-0"
                >
                  <span className="text-[12px] font-semibold">
                    99.9%
                  </span>

                  <span className="text-[9px]">
                    uptime
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="relative z-10 grid grid-cols-3 gap-1"
              >
                {[
                  {
                    icon: <Monitor size={12} />,
                    title: "POS terminal",
                    sub: "In-person card & NFC",
                  },
                  {
                    icon: <CreditCard size={12} />,
                    title: "Virtual POS",
                    sub: "Browser-based checkout",
                  },
                  {
                    icon: <Smartphone size={12} />,
                    title: "Digital payments",
                    sub: "Mobile & app-based",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{
                      y: -2,
                    }}
                    className="border border-[#D8E3EF] rounded-lg bg-[#F8FAFD] py-2 px-2 sm:px-3 flex flex-col items-center text-center gap-2"
                  >
                    <div className="w-5 h-5 rounded bg-[#0F2133] flex items-center justify-center text-[#5DA7CF] flex-shrink-0">
                      {item.icon}
                    </div>

                    <div>
                      <h5 className="text-[#1D3855] text-[10px] sm:text-[11px] font-semibold">
                        {item.title}
                      </h5>

                      <p className="text-[#73797B] text-[7px] sm:text-[8px] leading-[10px] mt-1">
                        {item.sub}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative z-10 border border-[#D8E3EF] rounded-lg bg-[#F8FAFD] py-2 px-3 flex justify-between items-center gap-3"
              >
                <div>
                  <h5 className="text-[#1D3855] text-[12px] font-semibold">
                    Enterprise connectivity
                  </h5>

                  <p className="text-[#73797B] text-[9px]">
                    All channels unified
                  </p>
                </div>

                <motion.div
                  animate={{
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-1 bg-[#E1F1F3] border border-[#B3D3D8] rounded px-2 py-1 flex-shrink-0"
                >
                  <div className="w-1 h-1 rounded-full bg-[#3F7C84]" />

                  <span className="text-[#3F7C84] text-[8px] font-medium whitespace-nowrap">
                    All systems live
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="relative z-10 grid grid-cols-3 gap-1 mt-auto"
              >
                {[
                  "Multi-channel payments",
                  "Real-time processing",
                  "PCI-DSS compliant",
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={itemVariants}
                    whileHover={{
                      y: -2,
                    }}
                    className="border border-[#D8E3EF] rounded-lg bg-[#F8FAFD] min-h-[44px] flex items-center justify-center text-center px-2 py-2"
                  >
                    <span className="text-[#1D3855] text-[8px] font-medium leading-[130%]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={fadeUpVariants}
              className="px-1 text-center"
            >
              <h3 className="text-white text-[20px] font-semibold leading-6 mb-3">
                Traditional Processing Infrastructure
              </h3>

              <p className="text-[#D0D5DD] text-[14px] leading-6">
                Enterprise payment connectivity powered by Payroc with
                modern POS, virtual POS, and digital payment tools.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}