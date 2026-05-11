"use client";

import Image from "next/image";

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

export default function SuccessSection() {
  return (
    <section className="w-full px-4 sm:px-0 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.12,
        }}
        className="
          max-w-7xl
          mx-auto
          bg-[#0F2133]
          rounded-[24px]
          px-[24px]
          sm:px-[64px]
          py-[40px]
          sm:py-[64px]
          relative
          overflow-hidden
        "
      >
        <motion.div
          animate={{
            opacity: [0.12, 0.22, 0.12],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -top-[120px]
            -left-[120px]
            w-[320px]
            h-[320px]
            bg-[#1A3D5A]
            rounded-full
            blur-[120px]
          "
        />

        <div
          className="
            relative
            z-10
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-[40px]
            lg:gap-[80px]
          "
        >
          <motion.div
            variants={fadeUpVariants}
            whileHover={{
              y: -4,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              relative
              w-full
              max-w-[524px]
              h-[260px]
              sm:h-[407px]
              rounded-[16px]
              overflow-hidden
              shrink-0
            "
          >
            <Image
              src="/success.png"
              alt="Success"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="
              w-full
              max-w-[504px]
              flex
              flex-col
              items-start
              gap-[32px]
              sm:gap-[60px]
            "
          >
            <div className="flex flex-col items-start gap-[8px]">
              <motion.p
                variants={fadeUpVariants}
                className="
                  max-w-[394px]
                  text-[#5DA7CF]
                  text-[14px]
                  sm:text-[16px]
                  leading-[150%]
                  tracking-[0.1em]
                  uppercase
                  font-normal
                "
              >
                Eliminate fees. Strengthen compliance. Scale smarter.
              </motion.p>

              <motion.h2
                variants={fadeUpVariants}
                className="
                  max-w-[368px]
                  text-white
                  text-[32px]
                  sm:text-[44px]
                  leading-[120%]
                  sm:leading-[56px]
                  tracking-[-0.04em]
                  font-medium
                "
              >
                One Platform.
                <br />
                Total Control.
              </motion.h2>
            </div>

            <motion.p
              variants={fadeUpVariants}
              className="
                max-w-[462px]
                text-[#D0D5DD]
                text-[15px]
                sm:text-[16px]
                leading-[24px]
                tracking-[-0.3px]
                font-normal
              "
            >
              Fluid Financial delivers a HIPAA compliant, Ai-optimized,
              no cost payment processing platform built to protect data,
              reduce expenses, and unlock scalable revenue.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}