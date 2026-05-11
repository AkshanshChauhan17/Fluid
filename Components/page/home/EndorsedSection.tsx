"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
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

const logoVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.94,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const titleWords = [
  "Fluid",
  "Financials",
  "Endorsed",
  "by",
];

export default function EndorsedSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="w-full max-w-7xl m-auto bg-white rounded-[8px] px-5 sm:px-8 lg:px-[100px] py-[64px] sm:py-[72px] lg:py-[80px] flex flex-col items-center justify-center gap-[32px] sm:gap-[40px] overflow-hidden"
    >
      <motion.p
        variants={containerVariants}
        className="text-center text-[#73797B] text-[14px] sm:text-[16px] leading-[22px] tracking-[1px] font-medium flex flex-wrap items-center justify-center"
      >
        {titleWords.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block mr-[6px]"
          >
            {word}
          </motion.span>
        ))}
      </motion.p>

      <motion.div
        variants={fadeUpVariants}
        className="relative w-full overflow-hidden"
      >
        <div className="absolute left-0 top-0 z-10 h-full w-[60px] sm:w-[90px] lg:w-[120px] bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />

        <div className="absolute right-0 top-0 z-10 h-full w-[60px] sm:w-[90px] lg:w-[120px] bg-[linear-gradient(270deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />

        <div className="flex items-center gap-[28px] sm:gap-[40px] min-w-max animate-[premiumScroll_24s_linear_infinite] will-change-transform">
          {[...logos, ...logos].map((logo, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              whileHover={{
                opacity: 0.9,
                y: -2,
              }}
              className="relative h-[42px] sm:h-[50px] flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={180}
                height={50}
                className="h-[34px] sm:h-[42px] lg:h-[50px] w-auto object-contain select-none"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes premiumScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }

          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </motion.section>
  );
}