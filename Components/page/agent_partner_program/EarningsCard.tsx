"use client";

import {
  motion,
  Variants,
} from "framer-motion";

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
    y: 34,
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
    y: 36,
    scale: 0.97,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function EarningsCard() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      className="relative w-full max-w-[450px] rounded-[20px] overflow-hidden shrink-0"
    >
      <motion.div
        variants={cardVariants}
        whileHover={{
          y: -4,
        }}
        className="relative w-full rounded-[20px] bg-[#f7f7f7] p-5 sm:p-[32px] overflow-hidden"
      >
        <motion.div
          animate={{
            opacity: [0.3, 0.45, 0.3],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[100px] -right-[100px] w-[220px] h-[220px] rounded-full bg-[#5DA7CF]/10 blur-[80px]"
        />

        <div className="relative z-10">
          <motion.p
            variants={fadeUpVariants}
            className="text-[#1d3855] text-[13px] sm:text-[14px] leading-[20px] tracking-[-0.3px] font-normal"
          >
            Interactive Example
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="mt-[28px] sm:mt-[32px]"
          >
            <motion.div
              variants={fadeUpVariants}
              whileHover={{
                x: 2,
              }}
              className="flex items-start justify-between gap-[16px] sm:gap-[100px] pb-[20px] border-b border-[#eeeeee]"
            >
              <div>
                <p className="text-[#73797b] text-[12px] sm:text-[14px] leading-[20px] tracking-[0.7px] uppercase font-medium">
                  Practice Processes
                </p>

                <p className="text-[#73797b] text-[12px] sm:text-[14px] leading-[20px] tracking-[0.7px] uppercase font-medium">
                  (Annually)
                </p>
              </div>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 40,
                  filter: "blur(10px)",
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
                  duration: 1,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[#1d3855] text-[28px] sm:text-[30px] leading-[36px] tracking-[-1px] font-semibold shrink-0"
              >
                $2M
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              whileHover={{
                x: 2,
              }}
              className="flex items-center justify-between gap-[16px] py-[20px] border-b border-[#eeeeee]"
            >
              <div>
                <p className="text-[#73797b] text-[12px] sm:text-[14px] leading-[20px] tracking-[0.7px] uppercase font-medium">
                  Platform Revenue
                </p>
              </div>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 40,
                  filter: "blur(10px)",
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
                  duration: 1,
                  delay: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[#1d3855] text-[28px] sm:text-[30px] leading-[36px] tracking-[-1px] font-semibold shrink-0"
              >
                $20K
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -3,
              scale: 1.01,
            }}
            className="mt-[28px] sm:mt-[32px] rounded-[16px] bg-[#3b747f] px-5 sm:px-[24px] py-5 sm:py-[24px] flex items-center justify-between gap-4"
          >
            <div>
              <p className="text-white text-[12px] sm:text-[14px] leading-[20px] tracking-[0.7px] uppercase font-normal">
                Agent Earns
              </p>

              <p className="text-white/80 text-[12px] sm:text-[14px] leading-[20px] tracking-[0.7px] font-light">
                (recurring annually)
              </p>
            </div>

            <motion.p
              initial={{
                opacity: 0,
                y: 40,
                filter: "blur(10px)",
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
                duration: 1,
                delay: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              animate={{
                opacity: [1, 0.88, 1],
              }}
              className="text-white text-[28px] sm:text-[30px] leading-[36px] tracking-[-1px] font-semibold shrink-0"
            >
              $4K
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}