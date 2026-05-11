"use client";

import Image from "next/image";

import {
  Shield,
  Lock,
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
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
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

export default function PricingBottom() {
  return (
    <section className="w-full bg-white py-0 px-5 sm:px-0 overflow-hidden">
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
            rounded-[24px]
            px-[24px]
            sm:px-[40px]
            lg:px-[64px]
            py-[40px]
            sm:py-[56px]
            lg:py-[64px]
            bg-[linear-gradient(72deg,#081c2d,#0d2940)]
          "
        >
          <motion.div
            animate={{
              opacity: [0.35, 0.6, 0.35],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 9,
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

          <motion.div
            animate={{
              opacity: [0.12, 0.22, 0.12],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[-120px]
              bottom-[-120px]
              w-[320px]
              h-[320px]
              rounded-full
              bg-[#5DA7CF]
              blur-[120px]
            "
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-[36px] sm:gap-[48px]">
            <motion.div
              variants={fadeUpVariants}
              className="
                relative
                w-full
                max-w-[600px]
                h-[280px]
                sm:h-[380px]
                lg:h-[450px]
                rounded-[14px]
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
                  src="/pricing.png"
                  alt="Security Payment"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#081c2d80] via-transparent to-transparent" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="flex-1 w-full"
            >
              <motion.h2
                variants={fadeUpVariants}
                className="
                  text-white
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[44px]
                  leading-[118%]
                  sm:leading-[56px]
                  tracking-[-0.04em]
                  font-normal
                  max-w-[560px]
                "
              >
                Unrivaled security for every transaction
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                className="
                  mt-[20px]
                  sm:mt-[24px]
                  text-[#d0d5dd]
                  text-[15px]
                  sm:text-[16px]
                  leading-[170%]
                  tracking-[-0.3px]
                  font-light
                  max-w-[560px]
                "
              >
                All Velocity Pay processing models include enterprise-grade
                security features and 24/7 dedicated merchant support as
                standard.
              </motion.p>

              <motion.div
                variants={containerVariants}
                className="
                  mt-[24px]
                  flex
                  flex-col
                  gap-[14px]
                  sm:gap-[16px]
                "
              >
                <motion.div
                  variants={fadeUpVariants}
                  whileHover={{
                    x: 4,
                  }}
                  className="
                    flex
                    items-center
                    gap-[12px]
                    rounded-[14px]
                    bg-white/5
                    border
                    border-white/10
                    backdrop-blur-sm
                    px-[16px]
                    py-[14px]
                  "
                >
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      w-[40px]
                      h-[40px]
                      rounded-full
                      bg-white/10
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Lock
                      size={20}
                      className="text-[#5da7cf]"
                      strokeWidth={1.8}
                    />
                  </motion.div>

                  <p className="text-white text-[15px] sm:text-[16px] leading-[24px] tracking-[0px] font-light">
                    Level 1 PCI-DSS Compliant
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUpVariants}
                  whileHover={{
                    x: 4,
                  }}
                  className="
                    flex
                    items-center
                    gap-[12px]
                    rounded-[14px]
                    bg-white/5
                    border
                    border-white/10
                    backdrop-blur-sm
                    px-[16px]
                    py-[14px]
                  "
                >
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      w-[40px]
                      h-[40px]
                      rounded-full
                      bg-white/10
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Shield
                      size={20}
                      className="text-[#5da7cf]"
                      strokeWidth={1.8}
                    />
                  </motion.div>

                  <p className="text-white text-[15px] sm:text-[16px] leading-[24px] tracking-[0px] font-light">
                    Real-time Fraud Detection
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}