"use client";

import Image from "next/image";
import {
  FileText,
  Download,
} from "lucide-react";

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
    y: 32,
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

export default function DownloadResourceSection() {
  return (
    <section className="w-full bg-white py-0 px-5 sm:px-8 lg:px-0 overflow-hidden">
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
        <motion.div
          variants={fadeUpVariants}
          className="
            relative
            overflow-hidden
            rounded-[20px]
            sm:rounded-[24px]
            px-5
            sm:px-8
            lg:px-[100px]
            py-[44px]
            sm:py-[64px]
            bg-[linear-gradient(72deg,#0d2134,#10344b)]
          "
        >
          <motion.div
            animate={{
              opacity: [0.45, 0.7, 0.45],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[-120px]
              top-[-80px]
              w-[320px]
              h-[320px]
              bg-[#081f39]
              opacity-60
              blur-[90px]
            "
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
            <motion.div
              variants={fadeUpVariants}
              whileHover={{
                y: -4,
              }}
              className="
                relative
                w-full
                max-w-[500px]
                h-[240px]
                sm:h-[280px]
                rounded-[18px]
                overflow-hidden
                shrink-0
              "
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
                  src="/Border.png"
                  alt="Healthcare Payment Compliance Checklist"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-[#0E213450]" />

              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  top-5
                  left-5
                  w-9
                  h-9
                  rounded-[10px]
                  bg-white/10
                  backdrop-blur-md
                  flex
                  items-center
                  justify-center
                  border
                  border-white/10
                "
              >
                <FileText
                  size={18}
                  className="text-white"
                  strokeWidth={1.8}
                />
              </motion.div>

              <div className="absolute bottom-5 left-5 pr-5">
                <p className="text-white text-[18px] sm:text-[20px] leading-[130%] tracking-[-1px] font-normal">
                  Healthcare Payment Compliance Checklist
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="flex-1 w-full"
            >
              <motion.h2
                variants={fadeUpVariants}
                className="
                  text-white
                  text-[34px]
                  sm:text-[44px]
                  leading-[115%]
                  sm:leading-[56px]
                  tracking-[-0.04em]
                  font-normal
                "
              >
                Downloadable Resource
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                className="
                  mt-[16px]
                  text-[#d0d5dd]
                  text-[15px]
                  sm:text-[16px]
                  max-w-[480px]
                  font-light
                  tracking-[-0.3px]
                  leading-[170%]
                "
              >
                Get the definitive 'Healthcare Payment Compliance Checklist'
                to audit your current vendor today.
              </motion.p>

              <motion.button
                variants={fadeUpVariants}
                whileHover={{
                  y: -2,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  mt-[28px]
                  sm:mt-[32px]
                  px-[20px]
                  py-[12px]
                  rounded-[8px]
                  bg-[#3b747f]
                  hover:bg-[#5a9ca4]
                  transition-colors
                  duration-300
                  flex
                  items-center
                  gap-3
                  text-white
                  text-[16px]
                  tracking-[0%]
                  leading-[24px]
                  font-medium
                "
              >
                <motion.div
                  animate={{
                    y: [0, 2, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Download
                    size={16}
                    strokeWidth={2}
                  />
                </motion.div>

                Download Checklist
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}