"use client";

import {
  Shield,
  GaugeCircle,
} from "lucide-react";

import {
  motion,
  Variants,
} from "framer-motion";

import {
  useMemo,
  useState,
} from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(8px)",
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

export default function AnalysisImpactSection() {
  const [volume, setVolume] = useState(1500000);
  const [rate, setRate] = useState(3.2);

  const calculations = useMemo(() => {
    const currentCost = volume * (rate / 100);

    const optimizedRate = Math.max(rate - 0.9, 0.5);

    const optimizedCost =
      volume * (optimizedRate / 100);

    const savings =
      currentCost - optimizedCost;

    return {
      currentCost,
      optimizedCost,
      savings,
    };
  }, [volume, rate]);

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });
  };

  return (
    <section className="w-full py-0 overflow-hidden">
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
          px-5
          sm:px-8
          lg:px-0
          m-auto
          flex
          flex-col
          gap-[24px]
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          <motion.div
            variants={fadeUpVariants}
            className="
              bg-white
              border
              border-[#D0D5DD]
              rounded-[24px]
              p-[24px]
              sm:p-[32px]
              flex
              flex-col
              gap-[24px]
              min-h-[306px]
            "
          >
            <h2 className="text-[#1D3855] text-[22px] sm:text-[24px] leading-[31px] tracking-[-0.3px] font-semibold">
              Analysis Parameters
            </h2>

            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[#73797B] text-[12px] sm:text-[13px] leading-[20px] tracking-[1px] uppercase font-normal">
                    Annual Processing Volume
                  </p>

                  <motion.p
                    key={volume}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="text-[#3B747F] text-[18px] sm:text-[20px] leading-[24px] tracking-[-1px] font-medium"
                  >
                    {formatCurrency(volume)}
                  </motion.p>
                </div>

                <input
                  type="range"
                  min={100000}
                  max={5000000}
                  step={50000}
                  value={volume}
                  onChange={(e) =>
                    setVolume(Number(e.target.value))
                  }
                  className="
                    w-full
                    h-[6px]
                    appearance-none
                    rounded-full
                    bg-[#F0F7FF]
                    accent-[#5DA7CF]
                    cursor-pointer
                  "
                />

                <div className="flex items-start justify-between">
                  <span className="text-[#717786] text-[12px] leading-[16px] font-medium">
                    $100k
                  </span>

                  <span className="text-[#717786] text-[12px] leading-[16px] font-medium">
                    $5M
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[#73797B] text-[12px] sm:text-[13px] leading-[20px] tracking-[1px] uppercase font-normal">
                    Current Processing Rate
                  </p>

                  <motion.p
                    key={rate}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="text-[#3B747F] text-[18px] sm:text-[20px] leading-[24px] tracking-[-1px] font-medium"
                  >
                    {rate.toFixed(1)}%
                  </motion.p>
                </div>

                <input
                  type="range"
                  min={1}
                  max={5}
                  step={0.1}
                  value={rate}
                  onChange={(e) =>
                    setRate(Number(e.target.value))
                  }
                  className="
                    w-full
                    h-[6px]
                    appearance-none
                    rounded-full
                    bg-[#F0F7FF]
                    accent-[#5DA7CF]
                    cursor-pointer
                  "
                />

                <div className="flex items-start justify-between">
                  <span className="text-[#717786] text-[12px] leading-[16px] font-medium">
                    1.0%
                  </span>

                  <span className="text-[#717786] text-[12px] leading-[16px] font-medium">
                    5.0%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="
              bg-[#3B747F]
              rounded-[24px]
              px-[24px]
              sm:px-[32px]
              py-[32px]
              flex
              flex-col
              justify-between
              min-h-[306px]
            "
          >
            <div className="flex flex-col items-center">
              <p className="text-[#EEEEEE] opacity-90 text-[14px] leading-[20px] tracking-[2px] uppercase font-semibold text-center">
                Estimated Annual Impact
              </p>
            </div>

            <div className="flex flex-col items-center gap-[20px]">
              <div className="flex flex-col items-center gap-[8px]">
                <motion.p
                  key={calculations.currentCost}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    text-[#EEEEEE]
                    text-[18px]
                    leading-[22px]
                    tracking-[-0.3px]
                    font-medium
                    line-through
                    text-center
                  "
                >
                  {formatCurrency(
                    calculations.currentCost
                  )}
                </motion.p>

                <p className="text-[#EEEEEE] text-[13px] leading-[16px] tracking-[-0.3px] font-normal text-center">
                  Current Projected Revenue Loss
                </p>
              </div>

              <div className="w-full h-px bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0)_100%)]" />

              <div className="flex flex-col items-center gap-[8px]">
                <motion.p
                  key={calculations.savings}
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="
                    text-[#EEEEEE]
                    text-[32px]
                    sm:text-[40px]
                    leading-[110%]
                    tracking-[-1px]
                    font-semibold
                    text-center
                  "
                >
                  {formatCurrency(
                    calculations.savings
                  )}
                </motion.p>

                <p className="text-[#EEEEEE] text-[13px] leading-[16px] tracking-[-0.3px] font-normal text-center">
                  Potential Annual Savings
                </p>
              </div>
            </div>

            <p className="text-[#EEEEEE] text-[12px] leading-[20px] tracking-[-0.3px] text-center font-normal">
              Calculated using estimated optimization benchmarks and healthcare payment averages.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          <motion.div
            variants={fadeUpVariants}
            whileHover={{
              y: -3,
            }}
            className="
              bg-[#EEEEEE]
              border
              border-[#D0D5DD]
              rounded-[24px]
              p-[24px]
              flex
              flex-col
              gap-[16px]
              min-h-[146px]
            "
          >
            <div className="w-[20px] h-[20px] flex items-center justify-center">
              <Shield
                size={18}
                className="text-[#5DA7CF]"
                strokeWidth={1.8}
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[#1D3855] text-[14px] leading-[20px] tracking-[-0.3px] font-semibold">
                Encrypted Analysis
              </h3>

              <p className="text-[#73797B] text-[12px] leading-[16px] tracking-[-0.3px] font-normal max-w-[260px]">
                Your financial data is protected with bank-grade 256-bit
                encryption.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            whileHover={{
              y: -3,
            }}
            className="
              bg-[#EEEEEE]
              border
              border-[#D0D5DD]
              rounded-[24px]
              p-[24px]
              flex
              flex-col
              gap-[16px]
              min-h-[146px]
            "
          >
            <div className="w-[20px] h-[20px] flex items-center justify-center">
              <GaugeCircle
                size={18}
                className="text-[#5DA7CF]"
                strokeWidth={1.8}
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[#1D3855] text-[14px] leading-[20px] tracking-[-0.3px] font-semibold">
                Real-time Benchmarking
              </h3>

              <p className="text-[#73797B] text-[12px] leading-[16px] tracking-[-0.3px] font-normal max-w-[260px]">
                Compare your rates against 5,000+ similar sized medical
                practices.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}