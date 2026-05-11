"use client";

import Image from "next/image";

import {
  AlertTriangle,
  LockIcon,
  RotateCcw,
  TrendingUp,
} from "lucide-react";

import {
  motion,
  Variants,
} from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
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

export default function RiskCardsSection() {
  return (
    <section className="w-full bg-[#F8FAFD] py-0 px-5 sm:px-8 lg:px-0 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.95fr_0.92fr] gap-[20px]">
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -4,
            }}
            className="bg-[#FFFFFF] rounded-[18px] p-[24px] sm:p-[32px] shadow-[0px_1px_2px] shadow-[#00000010]"
          >
            <h2 className="text-[24px] leading-[130%] sm:leading-[36px] tracking-[-0.3px] font-medium text-[#1D3855] max-w-[540px] text-balance">
              Patient payment data exposure
            </h2>

            <p className="mt-[8px] text-[14px] leading-[24px] text-[#5DA7CF] max-w-[620px]">
              Our proprietary AI engine processes
              routine claims in under 60 seconds,
              ensuring your liquidity is never
              compromised by health needs.
            </p>

            <motion.div
              whileHover={{
                scale: 1.015,
              }}
              transition={{
                duration: 0.45,
              }}
              className="relative mt-5 w-full h-[220px] sm:h-[260px] rounded-[16px] overflow-hidden"
            >
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/risk-payment-image.png"
                  alt="payment exposure"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -4,
            }}
            className="bg-[#417b84] rounded-[18px] p-[24px] sm:p-[32px] flex flex-col justify-between min-h-full shadow-[0px_1px_2px] shadow-[#00000010]"
          >
            <div>
              <motion.div
                animate={{
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-[32px] h-[32px] rounded-full flex items-center justify-center"
              >
                <RotateCcw
                  className="text-white"
                  strokeWidth={2}
                />
              </motion.div>

              <h3 className="mt-[12px] text-[24px] leading-[130%] sm:leading-[36px] tracking-[-0.3px] font-light text-[#FFFFFF] text-balance">
                Outdated retail payment
                infrastructure
              </h3>

              <p className="mt-[8px] text-[14px] leading-[24px] font-light text-[#D0D5DD]">
                End-to-end encryption for your
                medical data with zero-knowledge
                proof architecture.
              </p>
            </div>

            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-10 bg-white rounded-full min-h-[34px] px-4 py-2 flex items-center gap-2 w-full"
            >
              <AlertTriangle
                size={14}
                className="text-[#ff4c4c]"
                strokeWidth={2}
              />

              <span className="text-[14px] font-normal text-[#ff4c4c]">
                Critical Risk Factor
              </span>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[20px]">
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -4,
            }}
            className="bg-[#EEEEEE] rounded-[18px] p-[24px] sm:p-[32px] min-h-[132px] shadow-[0px_1px_2px] shadow-[#00000010]"
          >
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[32px] h-[32px] flex items-center justify-center"
            >
              <TrendingUp
                className="text-[#4ea5ff]"
                strokeWidth={2}
              />
            </motion.div>

            <h3 className="mt-[12px] text-[22px] sm:text-[24px] leading-[130%] sm:leading-[36px] tracking-[-0.3px] font-medium text-[#1D3855] text-balance">
              Increasing privacy regulation
              enforcement
            </h3>

            <p className="mt-[8px] text-[14px] leading-[24px] text-[#73797B]">
              Automated HSA/FSA reinvestment
              strategies.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -4,
            }}
            className="bg-[#FFFFFF] rounded-[18px] p-[24px] sm:p-[32px] min-h-[132px] shadow-[0px_1px_2px] shadow-[#00000010]"
          >
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[32px] h-[32px] flex items-center justify-center"
            >
              <LockIcon
                className="text-[#4ea5ff]"
                strokeWidth={2}
              />
            </motion.div>

            <h3 className="mt-[12px] text-[22px] sm:text-[24px] leading-[130%] sm:leading-[36px] tracking-[-0.3px] font-medium text-[#1D3855] text-balance">
              Financial liability from
              healthcare data breaches
            </h3>

            <p className="mt-[8px] text-[14px] leading-[24px] text-[#73797B]">
              Live support from
              financial-medical hybrid experts.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}