"use client";

import {
  Shield,
  Lock,
  Activity,
  Database,
} from "lucide-react";

import {
  motion,
  Variants,
} from "framer-motion";

const features = [
  {
    icon: Database,
    text: "Secure tokenized payment architecture",
  },
  {
    icon: Lock,
    text: "Encrypted transaction processing",
  },
  {
    icon: Shield,
    text: "Healthcare-aligned data protection standards",
  },
  {
    icon: Activity,
    text: "Continuous monitoring of payment infrastructure",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
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
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CardSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="max-w-7xl mx-auto px-4 sm:px-0"
      >
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-4
            gap-[16px]
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  group
                  bg-[#F0F7FF]
                  rounded-[16px]
                  p-5
                  flex
                  flex-col
                  gap-4
                  border
                  border-[#E3EEF9]
                  hover:shadow-[0px_18px_50px_rgba(0,71,141,0.08)]
                  transition-all
                  duration-300
                "
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    w-[52px]
                    h-[52px]
                    rounded-[14px]
                    bg-white
                    flex
                    items-center
                    justify-center
                    shadow-sm
                  "
                >
                  <Icon
                    strokeWidth={1.4}
                    className="text-[#5DA7CF] w-[28px] h-[28px]"
                  />
                </motion.div>

                <p
                  className="
                    text-[15px]
                    sm:text-[16px]
                    text-[#1D3855]
                    leading-[160%]
                    tracking-[-0.2px]
                    font-medium
                  "
                >
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
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
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
          className="
            text-center
            text-[#98A2B3]
            text-[15px]
            sm:text-[16px]
            leading-[170%]
            mt-[32px]
            sm:mt-[40px]
            max-w-[780px]
            mx-auto
          "
        >
          Our platform is designed to help healthcare organizations strengthen
          their compliance posture while delivering a modern payment experience.
        </motion.p>
      </motion.div>
    </section>
  );
}