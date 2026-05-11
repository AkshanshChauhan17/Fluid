"use client";

import {
  User,
  FileText,
  Clock3,
  Plus,
  CheckCircle2,
  Shield,
  Layers3,
  CreditCard,
} from "lucide-react";

import {
  motion,
  Variants,
} from "framer-motion";

type StepItem = {
  icon: typeof User;
  label: string;
  status?: string;
  statusColor?: string;
  faded?: boolean;
};

type Step = {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  topLabel?: string;
  subtitle: string;
  heading: string;
  iconBg: string;
  icon?: typeof User;
  statusTop?: string;
  statusTopColor?: string;
  checkIcon?: boolean;
  items: StepItem[];
};

const steps: Step[] = [
  {
    id: "01",
    title: "Apply online",
    badge: "Step 1 of 3",
    badgeColor: "bg-[#F0F7FF] text-[#1D3855]",
    topLabel: "Online Application",
    subtitle: "Quick & Easy",
    heading: "Complete your application",
    iconBg: "bg-[#F0F7FF]",
    icon: FileText,
    items: [
      {
        icon: User,
        label: "Personal information",
        status: "Done",
        statusColor: "bg-[#ECFDF3] text-[#00C853]",
      },
      {
        icon: FileText,
        label: "Upload documents",
        status: "Current",
        statusColor:
          "bg-[#5DA7CF] text-white rounded",
      },
      {
        icon: Clock3,
        label: "Review & submit",
        status: "",
        faded: true,
      },
    ],
  },

  {
    id: "02",
    title:
      "Fast approval and equipment deployment",
    badge: "Step 2 of 3",
    badgeColor: "bg-[#F0F7FF] text-[#1D3855]",
    statusTop: "Approved in 24h",
    statusTopColor:
      "bg-[#ECFDF3] text-[#00C853]",
    subtitle: "Request ID: #EQ-2847",
    heading: "Deploy equipment to site",
    iconBg: "bg-[#ECFDF3]",
    checkIcon: true,
    items: [
      {
        icon: Plus,
        label: "Application submitted",
        status: "Done",
        statusColor:
          "bg-[#ECFDF3] text-[#00C853]",
      },
      {
        icon: CheckCircle2,
        label: "Approval received",
        status: "Done",
        statusColor:
          "bg-[#ECFDF3] text-[#00C853]",
      },
      {
        icon: Layers3,
        label: "Equipment deployment",
        status: "In Progress",
        statusColor:
          "bg-[#3B747F] text-white rounded",
      },
    ],
  },

  {
    id: "03",
    title:
      "Begin secure payment processing within 48 hours",
    badge: "Step 3 of 3",
    badgeColor: "bg-[#F0F7FF] text-[#1D3855]",
    statusTop: "Ready in 48h",
    statusTopColor:
      "bg-[#FEF3F2] text-[#D92D20]",
    subtitle: "Secure & Fast",
    heading: "Start accepting payments",
    iconBg: "bg-[#D1FADF]",
    icon: CreditCard,
    items: [
      {
        icon: CheckCircle2,
        label: "Account verification",
        status: "Done",
        statusColor:
          "bg-[#ECFDF3] text-[#00C853]",
      },
      {
        icon: Shield,
        label: "Security protocols",
        status: "Done",
        statusColor:
          "bg-[#ECFDF3] text-[#00C853]",
      },
      {
        icon: Layers3,
        label: "Gateway activation",
        status: "Activating",
        statusColor:
          "bg-[#3B747F] text-white rounded",
      },
    ],
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
    y: 40,
    scale: 0.96,
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

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
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

const headingWords = [
  "Three-Step",
  "Onboarding",
];

export default function ThreeStepSection() {
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
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-0 flex flex-col items-center gap-[44px] sm:gap-[56px] lg:gap-[60px]"
      >
        <motion.div
          variants={containerVariants}
          className="max-w-[766px] flex flex-col items-center gap-2 text-center"
        >
          <motion.span
            variants={fadeUpVariants}
            className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[13px] sm:text-[16px] leading-6"
          >
            How It Works
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full"
        >
          {steps.map((step, index) => {
            const MainIcon = step.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                }}
                className="bg-[#F9FAFB] border border-[#EEEEEE] rounded-[20px] sm:rounded-2xl overflow-hidden flex flex-col justify-start gap-2 min-h-full will-change-transform"
              >
                <div className="w-full h-[320px] sm:h-[350px] rounded-xl relative overflow-hidden bg-[#F3F4F6] flex items-end justify-center">
                  <motion.div
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.04, 1],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-[#DCEEFF]/40 via-transparent to-[#ECFDF3]/40"
                  />

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 40,
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
                      duration: 1,
                      delay: index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.01,
                    }}
                    className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 w-[88%] sm:w-[257px] bg-white border border-[#EEEEEE] shadow-[0px_-11px_37px_rgba(0,0,0,0.06)] rounded-2xl overflow-hidden"
                  >
                    <div className="p-4 border-b border-[#F3F4F6]">
                      <div className="flex items-center justify-between mb-4 gap-3">
                        {step.topLabel ? (
                          <span className="text-[10px] font-medium text-[#1D3855]">
                            {step.topLabel}
                          </span>
                        ) : (
                          <div
                            className={`px-2 py-1 rounded-full text-[8px] font-medium ${step.statusTopColor}`}
                          >
                            {step.statusTop}
                          </div>
                        )}

                        <div
                          className={`px-2 py-1 rounded-full text-[8px] font-medium whitespace-nowrap ${step.badgeColor}`}
                        >
                          {step.badge}
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[10px] text-[#73797B] mb-1">
                            {step.subtitle}
                          </p>

                          <h3 className="text-[12px] leading-4 font-medium text-[#1D3855] max-w-[120px]">
                            {step.heading}
                          </h3>
                        </div>

                        <motion.div
                          animate={{
                            scale: [1, 1.04, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={`w-[60px] h-[60px] rounded-full border-2 border-white shadow-sm flex items-center justify-center ${step.iconBg}`}
                        >
                          {step.checkIcon ? (
                            <div className="w-4 h-4 rounded-full bg-[#00C853] flex items-center justify-center">
                              <CheckCircle2
                                size={10}
                                className="text-white"
                              />
                            </div>
                          ) : (
                            <div className="w-4 h-4 rounded-full bg-white shadow-sm flex items-center justify-center">
                              {MainIcon && (
                                <MainIcon
                                  size={8}
                                  className="text-[#5DA7CF]"
                                />
                              )}
                            </div>
                          )}
                        </motion.div>
                      </div>
                    </div>

                    <motion.div
                      variants={containerVariants}
                      className="bg-[#EEEEEE] p-4 flex flex-col gap-3"
                    >
                      {step.items.map(
                        (item, idx) => {
                          const ItemIcon =
                            item.icon;

                          return (
                            <motion.div
                              key={idx}
                              variants={
                                itemVariants
                              }
                              whileHover={{
                                scale: 1.01,
                              }}
                              className="bg-white border border-[#EEEEEE] rounded-lg min-h-10 px-3 py-2 flex items-center justify-between gap-3"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="w-6 h-6 rounded-full border border-[#EEEEEE] flex items-center justify-center shrink-0">
                                  <ItemIcon
                                    size={11}
                                    className={`${
                                      item.faded
                                        ? "text-[#D0D5DD]"
                                        : "text-[#1D3855]"
                                    }`}
                                  />
                                </div>

                                <span
                                  className={`text-[10px] font-medium truncate ${
                                    item.faded
                                      ? "text-[#D0D5DD]"
                                      : "text-[#1D3855]"
                                  }`}
                                >
                                  {item.label}
                                </span>
                              </div>

                              {item.status && (
                                <motion.div
                                  animate={{
                                    opacity: [
                                      1,
                                      0.8,
                                      1,
                                    ],
                                  }}
                                  transition={{
                                    duration: 2.5,
                                    repeat:
                                      Infinity,
                                    ease: "easeInOut",
                                  }}
                                  className={`px-2 py-[4px] text-[8px] font-medium rounded-full whitespace-nowrap ${item.statusColor}`}
                                >
                                  {item.status}
                                </motion.div>
                              )}
                            </motion.div>
                          );
                        }
                      )}
                    </motion.div>
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F9FAFB]" />
                </div>

                <motion.div
                  variants={fadeUpVariants}
                  className="flex items-start gap-3 px-5 sm:px-[32px] pt-0 pb-[24px]"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.06,
                    }}
                    className="w-8 h-8 rounded-full bg-[#3B747F] flex items-center justify-center shrink-0 mt-1"
                  >
                    <span className="text-white text-[14px] font-semibold tracking-[-0.02em]">
                      {step.id}
                    </span>
                  </motion.div>

                  <h3 className="text-[#101010] mt-[6px] text-[18px] sm:text-[20px] leading-[150%] tracking-[-0.02em] font-medium max-w-[290px] text-balance">
                    {step.title}
                  </h3>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}