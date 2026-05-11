"use client";

import {
  motion,
  Variants,
} from "framer-motion";

import EarningsCard from "./EarningsCard";

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

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
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
  "Agent",
  "earns",
  "20%",
  "of",
  "1%",
  "processing",
  "revenue",
];

export default function InteractiveExample() {
  return (
    <section className="w-full bg-white py-0 px-5 sm:px-8 lg:px-0 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          variants={fadeUpVariants}
          className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] px-5 sm:px-8 lg:px-[100px] py-[40px] sm:py-[56px] lg:py-[64px] bg-[linear-gradient(72deg,#081c2d,#0d2940)]"
        >
          <motion.div
            animate={{
              opacity: [0.35, 0.5, 0.35],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-[120px] top-[-120px] w-[320px] h-[320px] rounded-full bg-[#5DA7CF]/20 blur-[120px]"
          />

          <motion.div
            animate={{
              opacity: [0.25, 0.45, 0.25],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[-120px] bottom-[-120px] w-[320px] h-[320px] rounded-full bg-[#3B747F]/20 blur-[120px]"
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-[44px] sm:gap-[60px] lg:gap-[100px]">
            <motion.div
              variants={fadeUpVariants}
              whileHover={{
                y: -4,
              }}
              className="w-full lg:w-auto"
            >
              <EarningsCard />
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="flex-1 w-full"
            >
              <motion.p
                variants={fadeUpVariants}
                className="text-[#5da7cf] text-[13px] sm:text-[16px] leading-[150%] tracking-[0.12em] font-normal uppercase"
              >
                Commission structure
              </motion.p>

              <motion.h2
                variants={containerVariants}
                className="text-white mt-[10px] text-[34px] sm:text-[44px] leading-[115%] sm:leading-[56px] tracking-[-0.04em] font-normal max-w-[640px] text-balance"
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
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}