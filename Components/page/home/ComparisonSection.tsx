"use client";

import { motion, Variants } from "framer-motion";
import {
  Check,
  X,
  CheckCheck,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
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
    y: 30,
    scale: 0.97,
    filter: "blur(8px)",
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
    x: -16,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
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
  "The",
  "Hidden",
  "Cost",
  "of",
  "Traditional",
  "Payment",
  "Processing",
];

const leftItems = [
  "Not HIPAA compliant",
  "High Credit Card Processing Fees",
  "Generic Retail Payment Processors",
  "Complex Compliance Requirements",
];

const rightItems = [
  "Need to add HIPAA Compliant",
  "MedToken Tokenized Payment Architecture",
  "Healthcare-Focused Payment Infrastructure",
  "Built-in Compliance Protections",
];

export default function ComparisonSection() {
  return (
    <section className="w-full overflow-hidden bg-white px-5 sm:px-6 lg:px-[100px] py-[72px] sm:py-[90px] lg:py-[100px] flex flex-col items-center gap-[44px] sm:gap-[56px] lg:gap-[60px]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="max-w-[652px] flex flex-col items-center gap-[10px] text-center"
      >
        <motion.span
          variants={fadeUpVariants}
          className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[13px] sm:text-[16px] leading-[20px] sm:leading-[24px]"
        >
          Comparision
        </motion.span>

        <motion.h2
          variants={containerVariants}
          className="text-[#1D3855] text-[34px] sm:text-[44px] leading-[118%] sm:leading-[56px] tracking-[-0.04em] font-medium text-balance"
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="w-full max-w-[1240px] flex flex-col lg:flex-row items-stretch justify-center gap-[20px] sm:gap-[28px] lg:gap-[60px]"
      >
        <motion.div
          variants={cardVariants}
          whileHover={{
            y: -4,
          }}
          className="w-full max-w-full lg:max-w-[441px] bg-white border border-[#EEEEEE] rounded-[20px] sm:rounded-[24px] px-5 sm:px-8 lg:px-[60px] py-[32px] sm:py-[40px] flex flex-col items-start gap-[28px] sm:gap-[32px] shadow-[0px_8px_30px_rgba(0,0,0,0.04)]"
        >
          <motion.h3
            variants={fadeUpVariants}
            className="text-[#3B747F] text-[22px] sm:text-[24px] leading-[130%] tracking-[-1px] font-medium text-balance"
          >
            Common Payment Challenges
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="flex flex-col items-start gap-[16px] w-full"
          >
            {leftItems.slice(0, 2).map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-[12px]"
              >
                <div className="mt-[2px] flex-shrink-0">
                  <X
                    size={16}
                    className="text-[#73797B]"
                    strokeWidth={1.5}
                  />
                </div>

                <span className="text-[#73797B] text-[15px] sm:text-[16px] leading-[150%] tracking-[-0.3px]">
                  {item}
                </span>
              </motion.div>
            ))}

            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.01,
              }}
              className="flex items-start sm:items-center gap-[10px] px-[14px] sm:px-[16px] py-[10px] rounded-[18px] border border-[rgba(148,148,148,0.3)] bg-[#F9F9F9] w-full sm:w-auto"
            >
              <div className="mt-[2px] sm:mt-0 flex-shrink-0">
                <X
                  size={22}
                  className="text-[#E4000B]"
                  strokeWidth={1.7}
                />
              </div>

              <span className="text-[#101010] text-[14px] sm:text-[16px] leading-[145%] tracking-[-0.3px]">
                Patient Payment Data Exposure
              </span>
            </motion.div>

            {leftItems.slice(2).map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-[12px]"
              >
                <div className="mt-[2px] flex-shrink-0">
                  <X
                    size={16}
                    className="text-[#73797B]"
                    strokeWidth={1.5}
                  />
                </div>

                <span className="text-[#73797B] text-[15px] sm:text-[16px] leading-[150%] tracking-[-0.3px]">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className="flex lg:hidden items-center justify-center gap-[14px] py-[2px] w-full"
        >
          <div className="flex-1 h-px bg-[#D0D5DD]" />

          <span className="text-[#101010] text-[14px] uppercase font-bold tracking-[0.08em]">
            VS
          </span>

          <div className="flex-1 h-px bg-[#D0D5DD]" />
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className="hidden lg:flex flex-col items-center h-[257px]"
        >
          <div className="flex-1 border-l border-[#D0D5DD]" />

          <span className="py-[16px] text-[#101010] text-[16px] leading-[19px] uppercase font-bold">
            VS
          </span>

          <div className="flex-1 border-l border-[#D0D5DD]" />
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{
            y: -4,
          }}
          className="w-full max-w-full lg:max-w-[468px] bg-white border border-[#EEEEEE] rounded-[20px] sm:rounded-[24px] px-5 sm:px-8 lg:px-[60px] py-[32px] sm:py-[40px] flex flex-col items-start gap-[28px] sm:gap-[32px] shadow-[0px_8px_30px_rgba(0,0,0,0.04)]"
        >
          <motion.h3
            variants={fadeUpVariants}
            className="text-[#3B747F] text-[22px] sm:text-[24px] leading-[130%] tracking-[-1px] font-medium text-balance"
          >
            Fluid Financial Solutions
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="flex flex-col items-start gap-[16px] w-full"
          >
            {rightItems.slice(0, 2).map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-[12px]"
              >
                <div className="mt-[2px] flex-shrink-0">
                  <Check
                    size={16}
                    className="text-[#73797B]"
                    strokeWidth={1.5}
                  />
                </div>

                <span className="text-[#73797B] text-[15px] sm:text-[16px] leading-[150%] tracking-[-0.3px]">
                  {item}
                </span>
              </motion.div>
            ))}

            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.01,
              }}
              className="flex items-start sm:items-center gap-[10px] px-[14px] sm:px-[16px] py-[10px] rounded-[18px] border border-[rgba(148,148,148,0.3)] bg-[#F9F9F9] w-full sm:w-auto"
            >
              <div className="mt-[2px] sm:mt-0 flex-shrink-0">
                <CheckCheck
                  size={22}
                  className="text-[#00C853]"
                  strokeWidth={1.7}
                />
              </div>

              <span className="text-[#101010] text-[14px] sm:text-[16px] leading-[145%] tracking-[-0.3px]">
                Dual Pricing Revenue Recovery
              </span>
            </motion.div>

            {rightItems.slice(2).map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-[12px]"
              >
                <div className="mt-[2px] flex-shrink-0">
                  <Check
                    size={16}
                    className="text-[#73797B]"
                    strokeWidth={1.5}
                  />
                </div>

                <span className="text-[#73797B] text-[15px] sm:text-[16px] leading-[150%] tracking-[-0.3px]">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}