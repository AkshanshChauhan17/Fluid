"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Info,
  ShieldCheck,
  ShieldPlus,
  BadgeDollarSign,
  CheckCircle2,
  LoaderCircle,
  Hourglass,
  BarChart3,
  Upload,
  ChevronDown,
} from "lucide-react";
import SuccessMessage from "@/Components/global/success_message";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
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
    y: 28,
    scale: 0.97,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const wordVariants: Variants = {
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
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headingWords = [
  "Instantly",
  "See",
  "Your",
  "Potential",
  "Savings",
];

const features = [
  {
    icon: ShieldCheck,
    text: "HIPAA Aligned Payment Infrastructure",
  },
  {
    icon: ShieldPlus,
    text: "Built For Healthcare Practices",
  },
  {
    icon: BadgeDollarSign,
    text: "No Cost To Practice Options Available",
  },
];

const loadingSteps = [
  {
    icon: CheckCircle2,
    text: "Data ingestion complete",
    completed: true,
  },
  {
    icon: LoaderCircle,
    text: "Running 142 audit risk protocols...",
    loading: true,
  },
  {
    icon: Hourglass,
    text: "Generating recovery roadmap",
  },
];

type SavingsResult = {
  effective_rate: string | number;
  monthly_savings: string | number;
  yearly_savings: string | number;
  risk_score: string | number;
};

export default function SavingsCalculator() {

  // =========================================
  // STATES
  // =========================================

  const [showLoading, setShowLoading] =
    useState(false);

  const [showFinalStep, setShowFinalStep] =
    useState(false);

  const [monthlyVolume, setMonthlyVolume] =
    useState("");

  const [statementFees, setStatementFees] =
    useState("");

  const [provider, setProvider] =
    useState("");

  const [practiceType, setPracticeType] =
    useState("");

  const [contact, setContact] =
    useState("");

  const [result, setResult] =
    useState<SavingsResult | null>(null);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [fileName, setFileName] =
    useState("");

  const fileInputRef =
    useRef<HTMLInputElement>(null);

  const [lastRes, setLastRes] = useState(false);

  // =========================================
  // STEP 1 SUBMIT
  // =========================================

  const handleReveal = async () => {

    try {

      setShowLoading(true);

      const form = new FormData();

      form.append(
        "monthly_volume",
        monthlyVolume
      );

      form.append(
        "statement_fees",
        statementFees
      );

      // TEMP VALUES
      form.append(
        "current_provider",
        "Pending"
      );

      form.append(
        "practice_type",
        "Pending"
      );

      form.append(
        "contact",
        "Pending"
      );

      const response = await fetch(
        "https://fluid.free.nf/hc.php",
        {
          method: "POST",
          body: form,
        }
      );

      const data =
        await response.json();

      console.log(data);

      if (data.success) {

        setResult(data.results);

        setShowLoading(false);

        setShowFinalStep(true);

      } else {

        setShowLoading(false);

        alert(
          data.message ||
          "Calculation failed"
        );

      }

    } catch (error) {

      console.log(error);

      setShowLoading(false);

      alert(
        "Something went wrong"
      );

    }

  };

  // =========================================
  // FINAL SUBMIT
  // =========================================

  const handleFinalSubmit = async () => {

    try {

      setIsSubmitting(true);

      const form = new FormData();

      form.append(
        "monthly_volume",
        monthlyVolume
      );

      form.append(
        "statement_fees",
        statementFees
      );

      form.append(
        "current_provider",
        provider
      );

      form.append(
        "practice_type",
        practiceType
      );

      form.append(
        "contact",
        contact
      );

      const file =
        fileInputRef.current?.files?.[0];

      if (file) {
        form.append("file", file);
      }

      const response = await fetch(
        "https://fluid.free.nf/hc.php",
        {
          method: "POST",
          body: form,
        }
      );

      const data =
        await response.json();

      if (data.success) {

        setResult(data.results);
        setLastRes(true);
      } else {
        setLastRes(false);
      }

    } catch (error) {

      console.log(error);

      alert(
        "Something went wrong"
      );

    } finally {

      setIsSubmitting(false);

    }

  };

  return (
    <section className="w-full overflow-hidden bg-[#F8FAFD] px-5 sm:px-6 lg:px-[100px] py-[72px] sm:py-[90px] lg:py-[100px] flex flex-col items-center gap-[44px] sm:gap-[56px] lg:gap-[60px]">

      {/* HEADING */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="flex flex-col items-center gap-[10px] text-center"
      >

        <motion.span
          variants={fadeUpVariants}
          className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[13px] sm:text-[16px]"
        >
          Savings Calculator
        </motion.span>

        <motion.h2
          variants={containerVariants}
          className="text-[#1D3855] text-[34px] sm:text-[44px] leading-[118%] tracking-[-0.04em] font-medium max-w-[766px]"
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

      {/* MAIN CARD */}

      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="w-full max-w-[828px] bg-white border border-[#EEEEEE] rounded-[24px] overflow-hidden shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
      >

        {/* TOP BAR */}

        <div className="w-full h-[45px] bg-[#F0F7FF] border-b border-[#EEEEEE] px-[18px] sm:px-[32px] flex items-center justify-between">

          <span className="text-[#1D3855] text-[12px] font-semibold">

            {showLoading
              ? "Step 2 of 2"
              : showFinalStep
                ? "Step 2 of 2"
                : "Step 1 of 2"}

          </span>

          <div className="w-[128px] h-[8px] bg-[#EEEEEE] rounded-full overflow-hidden">

            <motion.div
              animate={{
                width:
                  showFinalStep || showLoading
                    ? "100%"
                    : "50%",
              }}
              transition={{
                duration: 1,
              }}
              className="h-full bg-[#5DA7CF] rounded-full"
            />

          </div>

        </div>

        <AnimatePresence mode="wait">

          {/* ===================================== */}
          {/* STEP 1 */}
          {/* ===================================== */}

          {!showLoading &&
            !showFinalStep && (

            <motion.div
              key="step1"
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -40,
              }}
              transition={{
                duration: 0.6,
              }}
              className="w-full"
            >

              <div className="w-full flex flex-col items-center gap-[28px] px-5 sm:px-[32px] py-[40px] sm:py-[48px]">

                <div className="w-full max-w-[506px] flex flex-col gap-[10px]">

                  <h3 className="text-[#1D3855] text-[20px] font-semibold">
                    See How Much You’re Overpaying in 60 Seconds
                  </h3>

                  <p className="text-[#1D3855] text-[14px]">
                    Free savings and compliance audit for healthcare practices
                  </p>

                </div>

                <div className="w-full max-w-[506px] flex flex-col gap-[24px]">

                  {/* MONTHLY VOLUME */}

                  <div className="flex flex-col gap-[6px]">

                    <label className="text-[#0F2133] text-[14px]">
                      Monthly Volume
                    </label>

                    <div className="flex flex-col gap-[8px]">

                      <div className="w-full h-[52px] border border-[#D0D5DD] rounded-[10px] px-[16px] flex items-center gap-[8px] bg-white">

                        <span className="text-[#1D3855] text-[16px]">
                          $
                        </span>

                        <input
                          type="text"
                          value={monthlyVolume}
                          onChange={(e) =>
                            setMonthlyVolume(
                              e.target.value
                            )
                          }
                          placeholder="0.00"
                          className="flex-1 outline-none bg-transparent text-[16px] text-black placeholder:text-[#73797B]"
                        />

                      </div>

                      <div className="flex items-start gap-[5px]">

                        <Info
                          size={13}
                          className="text-[#73797B] mt-[3px]"
                        />

                        <span className="text-[#73797B] text-[13px]">
                          Approximate monthly card volume
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* FEES */}

                  <div className="flex flex-col gap-[6px]">

                    <label className="text-[#0F2133] text-[14px]">
                      Last Statement Fees
                    </label>

                    <div className="flex flex-col gap-[8px]">

                      <div className="w-full h-[52px] border border-[#D0D5DD] rounded-[10px] px-[16px] flex items-center gap-[8px] bg-white">

                        <span className="text-[#1D3855] text-[16px]">
                          $
                        </span>

                        <input
                          type="text"
                          value={statementFees}
                          onChange={(e) =>
                            setStatementFees(
                              e.target.value
                            )
                          }
                          placeholder="0.00"
                          className="flex-1 outline-none bg-transparent text-[16px] text-black placeholder:text-[#73797B]"
                        />

                      </div>

                      <div className="flex items-start gap-[5px]">

                        <Info
                          size={13}
                          className="text-[#73797B] mt-[3px]"
                        />

                        <span className="text-[#73797B] text-[13px]">
                          From your most recent statement. Estimate is fine.
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* BUTTON */}

                  <motion.button
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.985,
                    }}
                    onClick={handleReveal}
                    className="w-full h-[54px] bg-[#3B747F] rounded-[10px] flex items-center justify-center"
                  >

                    <span className="text-white text-[16px] font-semibold">
                      Reveal My Savings
                    </span>

                  </motion.button>

                </div>

              </div>

            </motion.div>

          )}

          {/* ===================================== */}
          {/* LOADING */}
          {/* ===================================== */}

          {showLoading && (

            <motion.div
              key="loading"
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -40,
              }}
              transition={{
                duration: 0.6,
              }}
              className="w-full"
            >

              <div className="w-full flex flex-col items-center px-5 sm:px-[32px] py-[50px]">

                {/* ICON */}

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="relative mb-[30px]"
                >

                  <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-[#BFE7F8]" />

                  <div className="absolute bottom-0 -left-5 w-3 h-3 rounded-full bg-[#D9EEF9]" />

                  <div className="w-[92px] h-[92px] rounded-full bg-white border border-[#E9EEF3] shadow-[0px_12px_35px_rgba(0,0,0,0.08)] flex items-center justify-center">

                    <div className="w-[52px] h-[52px] rounded-2xl bg-[#3B747F] flex items-center justify-center">

                      <BarChart3
                        size={26}
                        className="text-white"
                      />

                    </div>

                  </div>

                </motion.div>

                <div className="max-w-[520px] text-center">

                  <h3 className="text-[#1D3855] text-[28px] font-semibold">
                    Calculating your potential savings...
                  </h3>

                  <p className="mt-[12px] text-[#73797B] text-[15px] leading-[170%]">
                    Our HIPAA-compliant engine is cross-referencing your billing data against institutional benchmarks and recovery protocols.
                  </p>

                </div>

                {/* PROGRESS */}

                <div className="w-full max-w-[360px] mt-[30px]">

                  <div className="w-full h-[8px] bg-[#EEEEEE] rounded-full overflow-hidden">

                    <motion.div
                      animate={{
                        width: [
                          "10%",
                          "40%",
                          "70%",
                          "100%",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="h-full bg-[#5DA7CF]"
                    />

                  </div>

                </div>

                {/* ITEMS */}

                <div className="w-full max-w-[430px] flex flex-col gap-[12px] mt-[30px]">

                  {loadingSteps.map(
                    (item, index) => {

                      const Icon =
                        item.icon;

                      return (

                        <div
                          key={index}
                          className={`w-full min-h-[54px] rounded-[12px] border px-[16px] flex items-center gap-[12px]
                          ${
                            item.completed ||
                            item.loading
                              ? "bg-white border-[#E3EAF2]"
                              : "bg-[#F7F9FC] border-[#EEF2F6] opacity-50"
                          }`}
                        >

                          {item.loading ? (

                            <motion.div
                              animate={{
                                rotate: 360,
                              }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >

                              <Icon
                                size={18}
                                className="text-[#3B747F]"
                              />

                            </motion.div>

                          ) : (

                            <Icon
                              size={18}
                              className={
                                item.completed
                                  ? "text-[#22C55E]"
                                  : "text-[#A0A8B5]"
                              }
                            />

                          )}

                          <span className="text-[14px] text-[#1D3855]">
                            {item.text}
                          </span>

                        </div>

                      );

                    }
                  )}

                </div>

              </div>

            </motion.div>

          )}

          {/* ===================================== */}
          {/* FINAL STEP */}
          {/* ===================================== */}

          {showFinalStep && (

            <motion.div
              key="final"
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="w-full"
            >

              <div className="w-full flex flex-col items-center px-5 sm:px-[32px] py-[40px] sm:py-[48px]">
                {/* HEADING */}
                {!lastRes ? <div>
                <div className="w-full max-w-[506px] flex flex-col gap-[10px]">

                  <h3 className="text-[#1D3855] text-[20px] font-semibold">
                    You may be overpaying by thousands per year
                  </h3>

                  <p className="text-[#1D3855] text-[14px]">
                    Complete your custom savings and compliance report
                  </p>

                </div>

                {/* FORM */}

                <div className="w-full max-w-[506px] flex flex-col gap-[20px] mt-[24px]">

                  {/* PROVIDER */}

                  <motion.div
                    whileFocus={{
                      scale: 1.01,
                    }}
                    className="flex flex-col gap-[8px]"
                  >

                    <label className="text-[14px] text-[#0F2133]">
                      Current Payment Provider
                    </label>

                    <input
                      type="text"
                      value={provider}
                      onChange={(e) =>
                        setProvider(
                          e.target.value
                        )
                      }
                      placeholder="Stripe, Square, Clover, etc."
                      className="w-full h-[52px] border border-[#D0D5DD] rounded-[10px] px-[16px] outline-none bg-white text-black placeholder:text-[#73797B] transition-all duration-300 focus:border-[#5DA7CF]"
                    />

                  </motion.div>

                  {/* PRACTICE */}

                  <motion.div
                    whileFocus={{
                      scale: 1.01,
                    }}
                    className="flex flex-col gap-[8px]"
                  >

                    <label className="text-[14px] text-[#0F2133]">
                      Practice Type
                    </label>

                    <div className="relative">

                      <select
                        value={practiceType}
                        onChange={(e) =>
                          setPracticeType(
                            e.target.value
                          )
                        }
                        className="w-full h-[52px] border border-[#D0D5DD] rounded-[10px] px-[16px] appearance-none outline-none bg-white text-black transition-all duration-300 focus:border-[#5DA7CF]"
                      >

                        <option value="">
                          Select Practice Type
                        </option>

                        <option value="Dental">
                          Dental
                        </option>

                        <option value="Medical">
                          Medical
                        </option>

                        <option value="Med Spa">
                          Med Spa
                        </option>

                        <option value="Wellness">
                          Wellness
                        </option>

                        <option value="Chiropractic">
                          Chiropractic
                        </option>

                        <option value="Physical Therapy">
                          Physical Therapy
                        </option>

                        <option value="Other">
                          Other
                        </option>

                      </select>

                      <ChevronDown
                        size={18}
                        className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#73797B] pointer-events-none"
                      />

                    </div>

                  </motion.div>

                  {/* CONTACT */}

                  <motion.div
                    whileFocus={{
                      scale: 1.01,
                    }}
                    className="flex flex-col gap-[8px]"
                  >

                    <label className="text-[14px] text-[#0F2133]">
                      Best Contact
                    </label>

                    <input
                      type="text"
                      value={contact}
                      onChange={(e) =>
                        setContact(
                          e.target.value
                        )
                      }
                      placeholder="Email or mobile number"
                      className="w-full h-[52px] border border-[#D0D5DD] rounded-[10px] px-[16px] outline-none bg-white text-black placeholder:text-[#73797B] transition-all duration-300 focus:border-[#5DA7CF]"
                    />

                  </motion.div>

                  {/* FILE */}

                  <motion.label
                    whileHover={{
                      scale: 1.01,
                    }}
                    className="w-full border-2 border-dashed border-[#D5D9DF] rounded-[16px] bg-[#F8F8F8] py-[44px] flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:border-[#5DA7CF]"
                  >

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={(e) => {

                        const file =
                          e.target
                            .files?.[0];

                        if (file) {
                          setFileName(
                            file.name
                          );
                        }

                      }}
                    />

                    <Upload
                      size={28}
                      className="text-[#73797B]"
                    />

                    <p className="mt-[14px] text-[#1D3855] text-[14px] font-semibold">

                      {fileName
                        ? fileName
                        : "Upload a statement (optional)"}

                    </p>

                    <span className="mt-[6px] text-[#8A8F98] text-[12px]">
                      PDF, JPG or PNG (Max 10MB)
                    </span>

                  </motion.label>

                  {/* BUTTON */}

                  <motion.button
                    whileHover={{
                      y: -2,
                      opacity: 0.95,
                    }}
                    whileTap={{
                      scale: 0.985,
                    }}
                    onClick={handleFinalSubmit}
                    className="w-full h-[54px] bg-[#3B747F] rounded-[10px] flex items-center justify-center transition-all duration-300"
                  >

                    <span className="text-white text-[16px] font-semibold">

                      {isSubmitting
                        ? "Submitting..."
                        : "Get My Free Audit"}

                    </span>

                  </motion.button>

                  {/* INFO */}

                  <div className="w-full flex justify-center">

                    <div className="bg-[#F8FAFD] rounded-[10px] px-[14px] py-[14px] text-center">

                      <p className="text-[#73797B] text-[12px] leading-[20px]">

                        Audits have identified{" "}

                        <span className="text-[#1D3855] font-semibold">
                          substantial annual savings opportunities
                        </span>{" "}

                        for qualified practices

                      </p>

                    </div>

                  </div>

                </div>
                </div> : <SuccessMessage data={result && <div className="w-full my-4 bg-[#F0F7FF] border border-[#D9EAF7] rounded-[18px] p-2 sm:p-[24px] mb-[24px]">

                    <h3 className="text-[#1D3855] text-[24px] font-semibold">
                      Estimated Savings Report
                    </h3>

                    <div className="mt-[18px] flex flex-col gap-[12px]">

                      <div className="flex justify-between">
                        <span className="text-[#73797B]">
                          Effective Rate
                        </span>

                        <strong className="text-[#1D3855]">
                          {result.effective_rate}%
                        </strong>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-[#73797B]">
                          Monthly Savings
                        </span>

                        <strong className="text-[#1D3855]">
                          ${result.monthly_savings}
                        </strong>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-[#73797B]">
                          Yearly Savings
                        </span>

                        <strong className="text-[#1D3855]">
                          ${result.yearly_savings}
                        </strong>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-[#73797B]">
                          Risk Score
                        </span>

                        <strong className="text-[#1D3855]">
                          {result.risk_score}%
                        </strong>
                      </div>

                    </div>

                  </div>}/>}

              </div>

            </motion.div>

          )}

        </AnimatePresence>

        {/* FOOTER */}

        <div className="w-full border-t border-[#EEEEEE] px-5 sm:px-[32px] py-[24px]">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px]">

            {features.map(
              (item, index) => {

                const Icon =
                  item.icon;

                return (

                  <motion.div
                    key={index}
                    whileHover={{
                      y: -4,
                    }}
                    className="flex flex-col items-center gap-[12px] text-center"
                  >

                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F0F7FF]">

                      <Icon
                        size={22}
                        className="text-[#5DA7CF]"
                        strokeWidth={1.5}
                      />

                    </div>

                    <p className="text-[#1D3855] uppercase text-[10px] leading-[16px] font-semibold tracking-wide max-w-[220px]">
                      {item.text}
                    </p>

                  </motion.div>

                );

              }
            )}

          </div>

        </div>

      </motion.div>

    </section>
  );
}