"use client";

import {
  motion,
  Variants,
} from "framer-motion";

const steps = [
  "Apply to become an agent",
  "Receive approval",
  "Obtain unique referral link",
  "Refer businesses and earn recurring commissions",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const lineVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "42px",
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AgentSteps() {
  return (
    <section className="pt-5 px-5 sm:py-0 sm:px-8 lg:px-0 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="max-w-fit"
      >
        <div className="flex flex-col gap-[14px] sm:gap-[10px]">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                x: 4,
              }}
              className="flex items-start gap-[14px] sm:gap-[16px]"
            >
              <div className="flex flex-col items-center shrink-0">
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-[#5DA7CF] text-[22px] sm:text-[24px] leading-[120%] tracking-[0px] font-medium"
                >
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </motion.span>

                {index !==
                  steps.length - 1 && (
                  <motion.div
                    variants={lineVariants}
                    className="mt-[6px] w-px bg-[#5DA7CF]"
                  />
                )}
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                  filter: "blur(8px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.85,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col justify-center pt-[2px]"
              >
                <p className="text-[#1D3855] text-[18px] sm:text-[20px] leading-[155%] tracking-[-0.3px] font-medium max-w-[320px] sm:max-w-none text-balance">
                  {step}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}