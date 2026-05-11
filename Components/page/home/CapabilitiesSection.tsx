"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";

const features = [
  {
    title: "Secure tokenized transactions",
    desc: "Tokenization replaces card data with secure tokens, reducing fraud.",
    image: "/cdf1.png",
  },
  {
    title: "HIPAA-aligned payment infrastructure",
    desc: "HIPAA-aligned payments protect PHI and ensure secure, compliant transactions.",
    image: "/cdf2.png",
  },
  {
    title: "Merchant onboarding and configuration",
    desc: "Enables businesses to quickly register, verify, and customize their payment setup.",
    image: "/cdf3.png",
  },
  {
    title: "Virtual POS, Mobile & Digital Payment acceptance",
    desc: "Enables merchants to accept digital payments without hardware.",
    image: "/cdf4.png",
  },
];

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
    y: 40,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.97,
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

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headingWords = [
  "Platform",
  "Capabilities",
];

export default function CapabilitiesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const cardWidth =
      window.innerWidth < 768 ? 290 : 340;

    sliderRef.current.scrollBy({
      left:
        direction === "left"
          ? -cardWidth
          : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-[72px] sm:py-[90px] lg:py-[100px] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-0 flex flex-col gap-[44px] sm:gap-[56px] lg:gap-[60px]"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 sm:gap-10">
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col gap-2"
          >
            <motion.span
              variants={fadeUpVariants}
              className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[13px] sm:text-[16px] leading-6 font-normal"
            >
              Features
            </motion.span>

            <motion.h2
              variants={containerVariants}
              className="text-[#1D3855] text-[34px] sm:text-[44px] leading-[115%] sm:leading-[56px] tracking-[-0.04em] font-medium text-balance"
            >
              {headingWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-[10px]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="hidden md:flex items-center gap-4"
          >
            <motion.button
              whileHover={{
                y: -2,
                borderColor: "#3B747F",
                opacity: 0.95,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-xl border border-[#EEEEEE] bg-white flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft
                size={24}
                className="text-[#3B747F]"
              />
            </motion.button>

            <motion.button
              whileHover={{
                y: -2,
                borderColor: "#3B747F",
                opacity: 0.95,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-xl border border-[#EEEEEE] bg-white flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight
                size={24}
                className="text-[#3B747F]"
              />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          ref={sliderRef}
          variants={containerVariants}
          className="
            flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory
            scroll-smooth pb-2
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
              }}
              className="
                relative min-w-[280px] sm:min-w-[320px]
                w-[280px] sm:w-[320px]
                h-[380px] sm:h-[400px]
                rounded-[20px] sm:rounded-2xl
                overflow-hidden group flex-shrink-0
                snap-start will-change-transform
              "
            >
              <motion.div
                animate={{
                  opacity: [1, 0.92, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 z-0"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-1000 ease-out"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/95 z-10" />

              <motion.div
                variants={containerVariants}
                className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col gap-5 sm:gap-6 z-20"
              >
                <motion.div
                  variants={containerVariants}
                  className="px-1 sm:px-2 flex flex-col gap-2"
                >
                  <motion.h3
                    variants={wordVariants}
                    className="text-white text-[16px] sm:text-[17px] leading-[145%] tracking-[-0.3px] font-semibold max-w-[240px] text-balance"
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    variants={fadeUpVariants}
                    className="text-[#D0D5DD] text-[13px] leading-[170%] tracking-[-0.3px] max-w-[260px] text-pretty"
                  >
                    {item.desc}
                  </motion.p>
                </motion.div>

                <motion.div
                  variants={fadeUpVariants}
                  className="h-[1px] w-full bg-white/10"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className="flex md:hidden items-center justify-center gap-3"
        >
          <motion.button
            whileTap={{
              scale: 0.94,
            }}
            onClick={() => scroll("left")}
            className="w-11 h-11 rounded-xl border border-[#EEEEEE] bg-white flex items-center justify-center"
          >
            <ChevronLeft
              size={22}
              className="text-[#3B747F]"
            />
          </motion.button>

          <motion.button
            whileTap={{
              scale: 0.94,
            }}
            onClick={() => scroll("right")}
            className="w-11 h-11 rounded-xl border border-[#EEEEEE] bg-white flex items-center justify-center"
          >
            <ChevronRight
              size={22}
              className="text-[#3B747F]"
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}