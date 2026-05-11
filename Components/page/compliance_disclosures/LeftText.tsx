"use client";

import { ChevronRight } from "lucide-react";

import {
  motion,
  Variants,
} from "framer-motion";

const features = [
  "End-to-end encrypted transactions",
  "Fully compliant network infrastructure",
  "Strict adherence to payment standards",
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

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    filter: "blur(8px)",
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

export default function LeftText() {
  return (
    <section className="w-full bg-white px-5 sm:px-8 lg:px-0 py-0 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="max-w-xl"
      >
        <motion.ul
          variants={containerVariants}
          className="space-y-[18px] sm:space-y-[20px]"
        >
          {features.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover={{
                x: 4,
              }}
              className="
                group
                flex
                items-start
                sm:items-center
                gap-3
              "
            >
              <motion.span
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  mt-[2px]
                  sm:mt-0
                  flex
                  items-center
                  justify-center
                  w-7
                  h-7
                  rounded-full
                  bg-blue-50
                  shrink-0
                "
              >
                <ChevronRight className="w-4 h-4 text-blue-500" />
              </motion.span>

              <span
                className="
                  text-[15px]
                  sm:text-[16px]
                  leading-[165%]
                  text-[#1D3855]
                  text-left
                  text-pretty
                "
              >
                {item}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          variants={itemVariants}
          className="
            mt-[20px]
            text-[13px]
            sm:text-[14px]
            text-[#73797B]
            leading-[175%]
            text-left
            text-pretty
            max-w-[520px]
          "
        >
          Additional compliance disclosures may apply depending on merchant
          classification and payment services selected.
        </motion.p>
      </motion.div>
    </section>
  );
}