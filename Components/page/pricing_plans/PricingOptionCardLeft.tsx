"use client";

import {
  BadgeDollarSign,
  TrendingUp,
  ShieldCheck,
  Monitor,
  CheckCircle2,
} from "lucide-react";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const benefits = [
  {
    icon: BadgeDollarSign,
    title: "0% effective cost",
  },
  {
    icon: TrendingUp,
    title: "Margin improvement",
  },
  {
    icon: ShieldCheck,
    title: "Fully compliant",
  },
  {
    icon: Monitor,
    title: "Omnichannel ready",
  },
];

const tags = [
  "Medical practices",
  "Wellness clinics",
  "High-ticket services",
  "Large avg transactions",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const fadeUpVariants: Variants = {
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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function PricingOptionCardLeft() {
  return (
    <section className="py-0 px-5 sm:px-0 flex-1 flex justify-center overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        whileHover={{
          y: -4,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          relative
          w-full
          flex
          flex-col
          rounded-[24px]
          sm:rounded-[32px]
          border
          border-[#E6EDF5]
          bg-white
          p-[24px]
          sm:p-[32px]
          overflow-hidden
          shadow-[0px_20px_50px_rgba(0,71,141,0.06)]
        "
      >
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-[-120px]
            right-[-120px]
            w-[260px]
            h-[260px]
            rounded-full
            bg-[#5DA7CF]/10
            blur-[80px]
          "
        />

        <motion.div
          variants={fadeUpVariants}
          className="
            absolute
            top-0
            right-0
            bg-[#edf5ff]
            px-4
            sm:px-5
            py-2
            rounded-bl-[8px]
          "
        >
          <span className="text-[10px] font-normal tracking-[0px] leading-[15px] text-[#5da7cf] uppercase">
            Most Popular
          </span>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className="
            inline-flex
            max-w-fit
            items-center
            rounded-full
            bg-[#1d3855]
            px-[12px]
            py-[8px]
            mt-8 sm:mt-0
          "
        >
          <span className="text-[#f0f7ff] text-[11px] sm:text-[12px] leading-[16px] sm:leading-[12px] font-medium tracking-[0.6px]">
            Option 1: Zero-Cost Processing (Cash Discount / Dual Pricing)
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUpVariants}
          className="
            mt-[16px]
            text-[#1d3855]
            text-[30px]
            sm:text-[36px]
            leading-[120%]
            tracking-[-0.36px]
            font-medium
            max-w-[560px]
          "
        >
          Eliminate up to 100% of your processing fees
        </motion.h2>

        <motion.p
          variants={fadeUpVariants}
          className="
            mt-[16px]
            text-[#73797b]
            text-[14px]
            leading-[21px]
            tracking-[0px]
            max-w-[560px]
          "
        >
          Merchant receives the full invoice amount for every transaction.
        </motion.p>

        <motion.div variants={fadeUpVariants} className="mt-[32px]">
          <h3 className="text-[#1D3855] text-[18px] font-medium leading-[27px] tracking-[0px]">
            How it works
          </h3>

          <div className="mt-[16px] space-y-[16px]">
            {[
              "Pricing is adjusted at the point of sale to include a service fee for card payments",
              "Customers can avoid the fee by paying with debit, HSA/FSA, or cash",
              "The merchant receives the full invoice amount with no processing cost",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                whileHover={{
                  x: 4,
                }}
                className="flex items-start gap-[10px]"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  <CheckCircle2
                    size={16}
                    className="text-[#00C853] shrink-0 mt-[2px]"
                    strokeWidth={2}
                  />
                </motion.div>

                <p className="text-[#73797b] text-[14px] leading-[20px] tracking-[0px]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUpVariants} className="mt-[32px]">
          <h3 className="text-[#1D3855] text-[18px] font-medium leading-[27px] tracking-[0px]">
            Benefits
          </h3>

          <div className="mt-[16px] grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  className="
                    rounded-[12px]
                    bg-[#f0f7ff]
                    p-[14px]
                    min-h-[76px]
                    border
                    border-[#e6edf5]
                  "
                >
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="
                      w-[42px]
                      h-[42px]
                      rounded-[10px]
                      bg-white
                      flex
                      items-center
                      justify-center
                      shadow-sm
                    "
                  >
                    <Icon
                      size={20}
                      className="text-[#5da7cf]"
                      strokeWidth={1.7}
                    />
                  </motion.div>

                  <p className="mt-[10px] text-[#1D3855] text-[15px] sm:text-[16px] leading-[24px] tracking-[0px] font-medium">
                    {item.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className="mt-[32px] border-t border-t-[#EEEEEE] pt-[24px]"
        >
          <h3 className="text-[#1D3855] text-[18px] font-medium leading-[27px] tracking-[0px]">
            Best for
          </h3>

          <div className="mt-[16px] mb-[32px] flex flex-wrap gap-[8px]">
            {tags.map((tag, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                whileHover={{
                  y: -2,
                  scale: 1.03,
                }}
                className="
                  px-[12px]
                  py-[6px]
                  rounded-full
                  bg-[#f0f7ff]
                  text-[#1D3855]
                  text-[12px]
                  font-medium
                  leading-[16px]
                  tracking-[0px]
                  border
                  border-[#E6EDF5]
                "
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Link href="/agent_application/">
          <motion.button
            variants={fadeUpVariants}
            whileHover={{
              scale: 1.01,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
            mt-auto
            w-full
            h-[48px]
            rounded-[8px]
            bg-[#3b747f]
            hover:bg-[#4c8a92]
            transition-colors
            duration-300
            text-white
            text-[16px]
            leading-[24px]
            font-semibold
            tracking-[0%]
            cursor-pointer
          "
          >
            Get Started
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
