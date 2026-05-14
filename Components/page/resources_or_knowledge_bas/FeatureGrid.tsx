"use client";

import Image from "next/image";

import {
  motion,
  Variants,
} from "framer-motion";

const cards = [
  {
    title: "Healthcare fintech innovation",
    img: "/feature_grid_1.png",
    span: "col-span-1 sm:col-span-2",
  },
  {
    title: "Healthcare payment security",
    img: "/feature_grid_2.png",
    span: "col-span-1 sm:col-span-2",
  },
  {
    title: "Reducing payment processing costs",
    img: "/feature_grid_3.png",
    span: "col-span-1 sm:col-span-2",
  },
  {
    title: "Compliance best practices",
    img: "/feature_grid_4.png",
    span: "col-span-1 sm:col-span-3",
  },
  {
    title: "Payment technology trends",
    img: "/feature_grid_1.png",
    span: "col-span-1 sm:col-span-3",
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
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FeatureGrid() {
  return (
    <section className="w-full py-0 px-5 sm:px-0 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-6
          gap-5
          sm:gap-6
        "
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: 0.35,
            }}
            className={`
              group
              bg-white
              rounded-[18px]
              overflow-hidden
              border
              border-[#EEEEEE]
              shadow-sm
              hover:shadow-[0px_18px_50px_rgba(0,71,141,0.08)]
              transition-all
              duration-300
              cursor-pointer
              ${card.span}
            `}
          >
            <div
              className="
                relative
                w-full
                h-[220px]
                sm:h-[240px]
                md:h-[260px]
                overflow-hidden
              "
            >
              <motion.div
                whileHover={{
                  scale: 1.06,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            <div
              className="
                flex
                items-center
                justify-between
                gap-4
                px-4
                sm:px-5
                py-4
                bg-white
              "
            >
              <p
                className="
                  text-[15px]
                  sm:text-[16px]
                  leading-[150%]
                  tracking-[-0.3px]
                  text-[#1D3855]
                  font-medium
                "
              >
                {card.title}
              </p>

              <motion.span
                whileHover={{
                  x: 3,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  text-[18px]
                  text-[#1D3855]
                  shrink-0
                "
              >
                ›
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}