"use client";

import { motion, Variants } from "framer-motion";
import {
  Shield,
  FileCheck2,
  Lock,
  Activity,
  Eye,
  type LucideIcon,
} from "lucide-react";

const topCompliance = [
  {
    icon: Shield,
    title: "HIPAA privacy rule",
    desc: "MED Pay operates within healthcare compliance, ensuring HIPAA governs patient data handling, storage, and transmission.",
  },
  {
    icon: FileCheck2,
    title: "HIPAA security rule",
    desc: "Most payment systems handle PCI, not HIPAA. MED Pay secures patient data with encryption and tokenization, audits, and reduces costs.",
  },
];

const bottomCompliance = [
  {
    icon: Lock,
    title: "HITECH Act",
    desc: "MED Pay isn’t just payment processing, it operates in a regulated environment governed by HIPAA and HITECH.",
  },
  {
    icon: Activity,
    title: "CURES Act interoperability requirements",
    desc: "MED Pay offers secure, HIPAA-compliant digital payments, letting patients access and pay balances easily.",
  },
  {
    icon: Eye,
    title: "State privacy regulations",
    desc: "HIPAA sets the baseline; state laws ensure accountability. MED Pay limits data, secures transactions, and manages access.",
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
  "Built",
  "for",
  "Healthcare",
  "Compliance",
];

function ComplianceCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -5,
      }}
      className="border-l border-[#EEEEEE] pl-5 sm:pl-6 flex flex-col justify-center gap-4 min-h-[220px] sm:min-h-[224px] will-change-transform"
    >
      <motion.div
        whileHover={{
          scale: 1.04,
          opacity: 0.95,
        }}
        transition={{
          duration: 0.3,
        }}
        className="w-12 h-12 rounded-xl border border-[#EEEEEE] bg-white shadow-[0px_2px_2px_rgba(72,80,88,0.08)] flex items-center justify-center"
      >
        <Icon
          size={24}
          className="text-[#3B747F]"
          strokeWidth={2}
        />
      </motion.div>

      <motion.h3
        variants={fadeUpVariants}
        className="text-[#101010] text-[20px] leading-[130%] tracking-[-1px] font-medium max-w-[374px] text-balance"
      >
        {title}
      </motion.h3>

      <motion.p
        variants={fadeUpVariants}
        className="text-[#73797B] text-[15px] sm:text-[16px] leading-[165%] tracking-[0.003em] max-w-[374px] text-pretty"
      >
        {desc}
      </motion.p>
    </motion.div>
  );
}

export default function ComplianceSection() {
  return (
    <section className="w-full bg-[#F8FAFD] py-[72px] sm:py-[90px] lg:py-[100px] overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-[389px_1fr] gap-[40px] sm:gap-[50px] lg:gap-[60px] items-start lg:items-center">
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col gap-2"
          >
            <motion.span
              variants={fadeUpVariants}
              className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[13px] sm:text-[16px] leading-6 font-normal"
            >
              Compliance Authority
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
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6"
          >
            {topCompliance.map((item, index) => (
              <ComplianceCard
                key={index}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6"
        >
          {bottomCompliance.map((item, index) => (
            <ComplianceCard
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}