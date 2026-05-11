"use client";

import Image from "next/image";
import { DollarSign } from "lucide-react";
import {
  motion,
  Variants,
  animate,
  useInView,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
} from "react";

const stats = [
  {
    value: 650,
    prefix: "$",
    suffix: "M+",
    decimals: 0,
    label: "annual payment processing volume",
  },
  {
    value: 99.97,
    prefix: "",
    suffix: "%",
    decimals: 2,
    label: "platform uptime",
  },
  {
    value: 3,
    prefix: "",
    suffix: "%+",
    decimals: 0,
    label: "Average revenue recovery for clients",
  },
  {
    value: 19000,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "of healthcare transactions processed daily",
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
    y: 32,
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
  "Trusted",
  "by",
  "Healthcare",
  "Organizations",
  "Nationwide",
];

function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [displayValue, setDisplayValue] =
    useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        setDisplayValue(latest);
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export default function SocialProofSection() {
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
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-0"
      >
        <motion.div
          variants={cardVariants}
          className="bg-[#0F2133] rounded-[20px] sm:rounded-[24px] px-5 sm:px-[40px] py-[40px] sm:py-[64px] relative"
        >
          <div className="flex flex-col lg:flex-row items-center gap-[44px] sm:gap-[60px] lg:gap-[80px]">
            <motion.div
              variants={fadeUpVariants}
              className="relative w-full lg:w-[544px] h-[320px] sm:h-[420px] lg:h-[578px] rounded-[20px] sm:rounded-[24px] shrink-0"
            >
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [1, 0.96, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/healthcare-proof.png"
                  alt="Healthcare payment"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                }}
                className="absolute right-3 sm:right-[-10%] bottom-[40px] sm:bottom-[110px] bg-white border border-[#0F2133] rounded-xl p-3 w-[150px] sm:w-[170px] h-fit shadow-lg"
              >
                <div className="w-full h-20 bg-[#E7FFE8] rounded-lg flex items-center justify-center">
                  <motion.div
                    animate={{
                      opacity: [1, 0.75, 1],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                  >
                    <DollarSign
                      size={24}
                      className="text-[#00C853]"
                      strokeWidth={2}
                    />
                  </motion.div>
                </div>

                <div className="mt-3 flex flex-col gap-1">
                  <span className="text-[8px] leading-2 text-center text-[#73797B] tracking-[-0.3px]">
                    Transaction Processed Successfully
                  </span>

                  <span className="text-[#1D3855] text-center text-[22px] sm:text-[24px] leading-[29px] tracking-[-1px] font-semibold">
                    $250.12
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="w-full max-w-[504px] flex flex-col gap-[44px] sm:gap-20"
            >
              <motion.div
                variants={containerVariants}
                className="flex flex-col gap-2"
              >
                <motion.span
                  variants={fadeUpVariants}
                  className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[13px] sm:text-[16px] leading-6 font-normal"
                >
                  Social Proof
                </motion.span>

                <motion.h2
                  variants={containerVariants}
                  className="text-white text-[34px] sm:text-[44px] leading-[115%] sm:leading-[56px] tracking-[-0.04em] font-medium text-balance"
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
                variants={containerVariants}
                className="flex flex-col gap-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6">
                  {stats.slice(0, 2).map(
                    (item, index) => (
                      <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                          y: -4,
                        }}
                        className="flex flex-col gap-2 pr-0 sm:pr-5"
                      >
                        <h3 className="text-white text-[32px] sm:text-[36px] leading-[125%] tracking-[-1px] font-medium">
                          <Counter
                            value={item.value}
                            prefix={item.prefix}
                            suffix={item.suffix}
                            decimals={item.decimals}
                          />
                        </h3>

                        <p className="text-[#D0D5DD] text-[15px] sm:text-[16px] leading-[170%] tracking-[-0.3px] text-pretty">
                          {item.label}
                        </p>
                      </motion.div>
                    )
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6">
                  {stats.slice(2, 4).map(
                    (item, index) => (
                      <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                          y: -4,
                        }}
                        className="flex flex-col gap-2 pr-0 sm:pr-5"
                      >
                        <h3 className="text-white text-[32px] sm:text-[36px] leading-[125%] tracking-[-1px] font-medium">
                          <Counter
                            value={item.value}
                            prefix={item.prefix}
                            suffix={item.suffix}
                            decimals={item.decimals}
                          />
                        </h3>

                        <p className="text-[#D0D5DD] text-[15px] sm:text-[16px] leading-[170%] tracking-[-0.3px] text-pretty">
                          {item.label}
                        </p>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}