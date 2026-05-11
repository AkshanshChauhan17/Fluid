"use client";

import Image from "next/image";

import {
  motion,
  Variants,
} from "framer-motion";

const features = [
  { img: "/sandc1.png" },
  { img: "/sandc2.png" },
  { img: "/sandc3.png" },
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
    scale: 0.96,
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

export default function ImageSection() {
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
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-5
            sm:gap-6
          "
        >
          {features.map((item, index) => (
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
                relative
                w-full
                max-w-[260px]
                h-[240px]
                sm:w-[250px]
                sm:h-[250px]
                rounded-[24px]
                border
                border-[#EEEEEE]
                bg-white
                overflow-hidden
                shadow-sm
                hover:shadow-[0px_18px_50px_rgba(0,71,141,0.08)]
              "
            >
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src={item.img}
                  alt={`feature-${index}`}
                  fill
                  className="object-contain bg-white p-5"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}