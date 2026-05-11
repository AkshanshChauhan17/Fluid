"use client";

import {
  ShieldCheck,
  Workflow,
  ArrowLeftRight,
  Boxes,
} from "lucide-react";

import {
  motion,
  Variants,
} from "framer-motion";

const cards = [
  {
    icon: Boxes,
    title: "MedToken\ntokenization",
    desc: "Use non-reversible identifiers instead of card data.",
  },
  {
    icon: Workflow,
    title: "Secure payment\narchitecture",
    desc: "Security protocols separate financial metadata from PHI records.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-aligned payment\ninfrastructure",
    desc: "Every touchpoint is designed with HIPAA Security Rule as the main constraint.",
  },
  {
    icon: ArrowLeftRight,
    title: "Compliance-focused\nworkflows",
    desc: "Automated audit logs and encrypted receipts for healthcare administrators.",
  },
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

const cardVariants: Variants = {
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

export default function SecurityCardsSection() {
  return (
    <section className="w-full py-0 px-5 sm:px-8 lg:px-0">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -4,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                bg-white
                rounded-[10px]
                py-[24px]
                px-[20px]
                min-h-[178px]
                transition-all
                duration-300
                shadow-[0px_20px_40px]
                shadow-[#00478d10]
              "
            >
              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  w-[48px]
                  h-[48px]
                  rounded-[8px]
                  bg-[#f0f7ff]
                  flex
                  items-center
                  justify-center
                "
              >
                <Icon
                  size={24}
                  strokeWidth={2}
                  className="text-[#5da7cf]"
                />
              </motion.div>

              <h3 className="mt-[12px] text-[#1D3855] text-[20px] leading-[24px] tracking-[-0.3px] font-medium">
                {card.title.split("\n")[0]}
                <br />
                {card.title.split("\n")[1]}
              </h3>

              <p className="mt-[8px] text-[13px] leading-[18px] text-[#73797B] font-normal">
                {card.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}