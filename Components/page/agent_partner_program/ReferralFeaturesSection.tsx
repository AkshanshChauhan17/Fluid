"use client";

import {
  motion,
  Variants,
} from "framer-motion";

const features = [
  {
    number: "01",
    title: "Referral Tracking",
    description:
      "End-to-end visibility of every business onboarding step.",
  },
  {
    number: "02",
    title: "Conversion Analytics",
    description:
      "Data-driven insights on referral performance and funnel health.",
  },
  {
    number: "03",
    title: "Commission Reporting",
    description:
      "Detailed ledger breakdown of every dollar earned and processed.",
  },
  {
    number: "04",
    title: "Marketing Resources",
    description:
      "Pre-approved assets, whitepapers, and brand guidelines for scaling.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
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

const fadeUpVariants: Variants = {
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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ReferralFeaturesSection() {
  return (
    <section className="w-full py-0 px-5 sm:px-8 lg:px-0 overflow-hidden">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-[24px]">
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
              }}
              className="
                relative
                min-h-[220px]
                sm:min-h-[228px]
                pl-5
                sm:pl-[24px]
                pr-4
                pt-5
                sm:pt-[24px]
                pb-5
                border-l
                border-[#eeeeee]
                flex
                flex-col
                overflow-hidden
                group
              "
            >
              <motion.div
                animate={{
                  opacity: [0.2, 0.35, 0.2],
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.4,
                }}
                className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] rounded-full bg-[#5DA7CF]/10 blur-[70px]"
              />

              <motion.span
                variants={fadeUpVariants}
                className="
                  relative
                  z-10
                  text-[#d0d5dd]
                  opacity-[30%]
                  text-[48px]
                  sm:text-[60px]
                  leading-none
                  tracking-[0px]
                  font-medium
                  transition-all
                  duration-500
                  group-hover:opacity-50
                "
              >
                {item.number}
              </motion.span>

              <motion.h3
                variants={fadeUpVariants}
                className="
                  relative
                  z-10
                  mt-[14px]
                  sm:mt-[16px]
                  text-[#1D3855]
                  text-[18px]
                  sm:text-[20px]
                  leading-[150%]
                  tracking-[-0.3px]
                  font-medium
                  text-balance
                "
              >
                {item.title}
              </motion.h3>

              <motion.p
                variants={fadeUpVariants}
                className="
                  relative
                  z-10
                  mt-[34px]
                  sm:mt-[60px]
                  text-[#73797b]
                  text-[14px]
                  sm:text-[13px]
                  leading-[165%]
                  sm:leading-[140%]
                  tracking-[0px]
                  font-normal
                  text-pretty
                  max-w-[260px]
                "
              >
                {item.description}
              </motion.p>

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-full
                  origin-left
                  bg-gradient-to-r
                  from-[#5DA7CF]
                  to-transparent
                  opacity-60
                "
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}