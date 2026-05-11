"use client";

import { motion, Variants } from "framer-motion";
import {
  Info,
  ShieldCheck,
  ShieldPlus,
  BadgeDollarSign,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
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
    y: 28,
    scale: 0.97,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
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
    y: 24,
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
  "Instantly",
  "See",
  "Your",
  "Potential",
  "Savings",
];

const features = [
  {
    icon: ShieldCheck,
    text: "HIPAA Aligned Payment Infrastructure",
  },
  {
    icon: ShieldPlus,
    text: "Built For Healthcare Practices",
  },
  {
    icon: BadgeDollarSign,
    text: "No Cost To Practice Options Available",
  },
];

export default function SavingsCalculator() {
  return (
    <section className="w-full overflow-hidden bg-[#F8FAFD] px-5 sm:px-6 lg:px-[100px] py-[72px] sm:py-[90px] lg:py-[100px] flex flex-col items-center gap-[44px] sm:gap-[56px] lg:gap-[60px]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="flex flex-col items-center gap-[10px] text-center"
      >
        <motion.span
          variants={fadeUpVariants}
          className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[13px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-normal"
        >
          Savings Calculator
        </motion.span>

        <motion.h2
          variants={containerVariants}
          className="text-[#1D3855] text-[34px] sm:text-[44px] leading-[118%] sm:leading-[56px] tracking-[-0.04em] font-medium max-w-[766px] text-balance"
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
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.18,
        }}
        className="w-full max-w-[828px] bg-white border border-[#EEEEEE] rounded-[20px] sm:rounded-[24px] overflow-hidden flex flex-col items-center shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
      >
        <div className="w-full h-[45px] bg-[#F0F7FF] border-b border-[#EEEEEE] px-[18px] sm:px-[32px] flex items-center justify-between">
          <span className="text-[#1D3855] text-[11px] sm:text-[12px] leading-[12px] tracking-[-0.3px] font-semibold">
            Step 1 of 2
          </span>

          <div className="w-[100px] sm:w-[128px] h-[8px] bg-[#EEEEEE] rounded-full overflow-hidden">
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              whileInView={{
                width: "50%",
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full bg-[#5DA7CF] rounded-full"
            />
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="w-full flex flex-col items-center gap-[28px] sm:gap-[32px] px-5 sm:px-[32px] py-[36px] sm:py-[48px]"
        >
          <motion.div
            variants={fadeUpVariants}
            className="w-full max-w-[506px] flex flex-col items-start gap-[10px] sm:gap-[12px]"
          >
            <h3 className="text-[#1D3855] text-[18px] sm:text-[20px] leading-[130%] tracking-[-0.3px] font-semibold text-balance">
              See How Much You’re Overpaying in 60 Seconds
            </h3>

            <p className="text-[#1D3855] text-[13px] sm:text-[14px] leading-[160%] tracking-[-0.3px]">
              Free savings and compliance audit for healthcare practices
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="w-full max-w-[506px] flex flex-col gap-[22px] sm:gap-[24px]"
          >
            <motion.div
              variants={cardVariants}
              className="flex flex-col gap-[6px]"
            >
              <label className="text-[#0F2133] text-[14px] leading-[20px] tracking-[-0.03em]">
                Monthly Volume
              </label>

              <div className="flex flex-col gap-[8px]">
                <motion.div
                  whileFocus={{
                    scale: 1.01,
                    borderColor: "#5DA7CF",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="w-full min-h-[52px] sm:h-[48px] border border-[#D0D5DD] rounded-[10px] px-[16px] flex items-center gap-[8px] bg-white transition-all duration-300"
                >
                  <span className="text-[#1D3855] text-[16px]">$</span>

                  <input
                    type="text"
                    placeholder="0.00"
                    className="flex-1 outline-none bg-transparent text-[16px] text-[#0F2133] placeholder:text-[#73797B]"
                  />
                </motion.div>

                <div className="flex items-start gap-[5px]">
                  <Info
                    size={13}
                    className="text-[#73797B] mt-[3px] flex-shrink-0"
                  />

                  <span className="text-[#73797B] text-[12px] sm:text-[13px] leading-[20px] sm:leading-[21px]">
                    Approximate monthly card volume
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="flex flex-col gap-[6px]"
            >
              <label className="text-[#0F2133] text-[14px] leading-[20px] tracking-[-0.03em]">
                Last Statement Fees
              </label>

              <div className="flex flex-col gap-[8px]">
                <motion.div
                  whileFocus={{
                    scale: 1.01,
                    borderColor: "#5DA7CF",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="w-full min-h-[52px] sm:h-[48px] border border-[#D0D5DD] rounded-[10px] px-[16px] flex items-center gap-[8px] bg-white transition-all duration-300"
                >
                  <span className="text-[#1D3855] text-[16px]">$</span>

                  <input
                    type="text"
                    placeholder="0.00"
                    className="flex-1 outline-none bg-transparent text-[16px] text-[#0F2133] placeholder:text-[#73797B]"
                  />
                </motion.div>

                <div className="flex items-start gap-[5px]">
                  <Info
                    size={13}
                    className="text-[#73797B] mt-[3px] flex-shrink-0"
                  />

                  <span className="text-[#73797B] text-[12px] sm:text-[13px] leading-[20px] sm:leading-[21px]">
                    From your most recent statement. Estimate is fine.
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.button
              variants={cardVariants}
              whileHover={{
                y: -2,
                opacity: 0.95,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="w-full min-h-[54px] sm:h-[48px] bg-[#3B747F] rounded-[10px] flex items-center justify-center transition-all duration-300 will-change-transform"
            >
              <span className="text-white text-[15px] sm:text-[16px] leading-[24px] font-semibold">
                Reveal My Savings
              </span>
            </motion.button>

            <motion.div
              variants={fadeUpVariants}
              className="w-full flex justify-center"
            >
              <div className="bg-[#F8FAFD] rounded-[10px] px-[14px] sm:px-[16px] py-[14px] text-center">
                <p className="text-[#73797B] text-[12px] sm:text-[13px] leading-[20px] tracking-[-0.3px] text-pretty">
                  Audits have identified{" "}
                  <span className="text-[#1D3855] font-semibold">
                    substantial annual savings opportunities
                  </span>{" "}
                  for qualified practices
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className="w-full border-t border-[#EEEEEE] px-5 sm:px-[32px] py-[24px]"
        >
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-[24px]"
          >
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -4,
                    opacity: 0.92,
                  }}
                  className="flex flex-col items-center gap-[12px] text-center will-change-transform"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F0F7FF]">
                    <Icon
                      size={22}
                      className="text-[#5DA7CF]"
                      strokeWidth={1.5}
                    />
                  </div>

                  <p className="text-[#1D3855] uppercase text-[10px] leading-[16px] font-semibold tracking-wide max-w-[220px]">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}