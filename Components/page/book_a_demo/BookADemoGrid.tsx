"use client";

import Image from "next/image";

import {
  Shield,
  CreditCard,
  TrendingDown,
  LineChart,
} from "lucide-react";

import {
  motion,
  Variants,
} from "framer-motion";

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

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.06,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function BookADemoGrid() {
  return (
    <section className="w-full bg-white py-0 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-0"
      >
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-8
            auto-rows-[170px]
            lg:grid-rows-3
            gap-[4px]
            lg:h-[460px]
          "
        >
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -4,
            }}
            className="
              sm:col-span-2
              lg:col-span-4
              lg:row-span-1
              bg-[#5f97b6]
              rounded-[18px]
              sm:rounded-xl
              p-5
              sm:p-6
              flex
              items-center
              relative
              overflow-hidden
            "
          >
            <motion.div
              animate={{
                opacity: [0.25, 0.45, 0.25],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-[70px] -top-[70px] w-[180px] h-[180px] rounded-full bg-white/10 blur-[70px]"
            />

            <div className="text-white h-full flex flex-col relative z-10">
              <TrendingDown
                strokeWidth={1}
                className="mb-auto w-[34px] h-[34px] sm:w-[40px] sm:h-[40px]"
              />

              <p className="text-[16px] sm:text-[18px] leading-[150%] font-[300] max-w-[260px] text-balance">
                Reduce credit card processing
                costs
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            whileHover={{
              y: -4,
            }}
            className="
              relative
              sm:col-span-1
              lg:col-span-2
              lg:row-span-1
              rounded-[18px]
              sm:rounded-xl
              overflow-hidden
              group
            "
          >
            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              <Image
                src="/badg1.png"
                alt="doctor"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            whileHover={{
              y: -4,
            }}
            className="
              relative
              sm:col-span-1
              lg:col-span-2
              lg:row-span-1
              rounded-[18px]
              sm:rounded-xl
              overflow-hidden
              group
            "
          >
            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              <Image
                src="/badg2.png"
                alt="doctor"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            whileHover={{
              y: -4,
            }}
            className="
              relative
              sm:col-span-1
              lg:col-span-2
              lg:row-span-1
              rounded-[18px]
              sm:rounded-xl
              overflow-hidden
              group
            "
          >
            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              <Image
                src="/badg3.png"
                alt="doctor"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -4,
            }}
            className="
              sm:col-span-1
              lg:col-span-4
              lg:row-span-1
              bg-[#3B747F]
              rounded-[18px]
              sm:rounded-xl
              p-5
              sm:p-6
              flex
              items-center
              relative
              overflow-hidden
            "
          >
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-[80px] -bottom-[80px] w-[220px] h-[220px] rounded-full bg-white/10 blur-[90px]"
            />

            <div className="text-white h-full flex flex-col relative z-10">
              <CreditCard
                strokeWidth={1}
                className="mb-auto w-[34px] h-[34px] sm:w-[40px] sm:h-[40px]"
              />

              <p className="text-[16px] sm:text-[18px] leading-[150%] font-[300] max-w-[280px] text-balance">
                Modernize healthcare payment
                infrastructure
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            whileHover={{
              y: -4,
            }}
            className="
              relative
              sm:col-span-2
              lg:col-span-2
              lg:row-span-1
              rounded-[18px]
              sm:rounded-xl
              overflow-hidden
              group
            "
          >
            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              <Image
                src="/badg4.png"
                alt="doctor"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -4,
            }}
            className="
              sm:col-span-1
              lg:col-span-4
              lg:row-span-1
              bg-[#1D3855]
              rounded-[18px]
              sm:rounded-xl
              p-5
              sm:p-6
              flex
              items-center
              relative
              overflow-hidden
            "
          >
            <motion.div
              animate={{
                opacity: [0.2, 0.35, 0.2],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[-70px] top-[-70px] w-[180px] h-[180px] rounded-full bg-white/10 blur-[70px]"
            />

            <div className="text-white h-full flex flex-col relative z-10">
              <Shield
                strokeWidth={1}
                className="mb-auto w-[34px] h-[34px] sm:w-[40px] sm:h-[40px]"
              />

              <p className="text-[16px] sm:text-[18px] leading-[150%] font-[300] max-w-[240px] text-balance">
                Strengthen payment security
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -4,
            }}
            className="
              sm:col-span-1
              lg:col-span-4
              lg:row-span-1
              bg-[#0F2133]
              rounded-[18px]
              sm:rounded-xl
              p-5
              sm:p-6
              flex
              items-center
              relative
              overflow-hidden
            "
          >
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[-70px] bottom-[-70px] w-[200px] h-[200px] rounded-full bg-white/10 blur-[80px]"
            />

            <div className="text-white h-full flex flex-col relative z-10">
              <LineChart
                strokeWidth={1}
                className="mb-auto w-[34px] h-[34px] sm:w-[40px] sm:h-[40px]"
              />

              <p className="text-[16px] sm:text-[18px] leading-[150%] font-[300] max-w-[240px] text-balance">
                Improve financial reporting
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}