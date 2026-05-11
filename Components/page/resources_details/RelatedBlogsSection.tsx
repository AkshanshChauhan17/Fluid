"use client";

import Image from "next/image";

import { ChevronRight } from "lucide-react";

import {
  motion,
  Variants,
} from "framer-motion";

const blogCards = [
  {
    title: "Healthcare payment security",
    image: "/blog-sec-1.png",
  },
  {
    title: "Reducing payment processing costs",
    image: "/blog-sec-2.png",
  },
  {
    title: "Compliance best practices",
    image: "/blog-sec-3.png",
  },
  {
    title: "Payment technology trends",
    image: "/blog-sec-4.png",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function RelatedBlogsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 sm:px-0 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="flex flex-col gap-[20px] sm:gap-[24px]"
      >
        <div className="w-full flex flex-col lg:flex-row gap-[20px] sm:gap-[24px]">
          {blogCards.slice(0, 2).map((item, index) => (
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
                w-full
                lg:w-1/2
                bg-white
                border
                border-[#EEEEEE]
                rounded-[20px]
                overflow-hidden
              "
            >
              <div className="relative w-full h-[240px] sm:h-[300px] overflow-hidden">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              <div
                className="
                  min-h-[72px]
                  px-[18px]
                  sm:px-[20px]
                  py-[16px]
                  flex
                  items-center
                  justify-between
                  gap-[16px]
                  bg-white
                "
              >
                <h3
                  className="
                    text-[#1D3855]
                    text-[15px]
                    sm:text-[16px]
                    leading-[24px]
                    tracking-[-0.3px]
                    font-medium
                  "
                >
                  {item.title}
                </h3>

                <motion.div
                  whileHover={{
                    x: 3,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="shrink-0"
                >
                  <ChevronRight
                    size={16}
                    className="text-[#1D3855]"
                    strokeWidth={2.5}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-[20px] sm:gap-[24px]">
          {blogCards.slice(2, 4).map((item, index) => (
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
                w-full
                lg:w-1/2
                bg-white
                border
                border-[#EEEEEE]
                rounded-[20px]
                overflow-hidden
              "
            >
              <div className="relative w-full h-[240px] sm:h-[300px] overflow-hidden">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              <div
                className="
                  min-h-[72px]
                  px-[18px]
                  sm:px-[20px]
                  py-[16px]
                  flex
                  items-center
                  justify-between
                  gap-[16px]
                  bg-white
                "
              >
                <h3
                  className="
                    text-[#1D3855]
                    text-[15px]
                    sm:text-[16px]
                    leading-[24px]
                    tracking-[-0.3px]
                    font-medium
                  "
                >
                  {item.title}
                </h3>

                <motion.div
                  whileHover={{
                    x: 3,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="shrink-0"
                >
                  <ChevronRight
                    size={16}
                    className="text-[#1D3855]"
                    strokeWidth={2.5}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}