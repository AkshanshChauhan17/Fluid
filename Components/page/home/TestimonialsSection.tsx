"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Schaefer",
    company: "Universal Dentistry",
    image: "/testimonial-user.png",
    review:
      "Before switching, we were dealing with inconsistent funding and too many manual processes. Since moving over to MED Pay, everything is streamlined, from patient payments to reporting. We’re saving over $108,000 annually, which has had a major impact on our bottom line. On top of that, the added security and fraud controls give us real confidence handling patient data. It’s taken a lot of stress off our team.",
    highlight: "$108,000 annually",
  },

  {
    id: 2,
    name: "Dr. Jordan Stewart",
    company: "Timonium Foot and Ankle",
    image: "/testimonial-user2.png",
    review:
      "In a medical practice, reliability and compliance matter. The transition was smooth, and we were up and running quickly. We’re saving about 95% on our processing costs, which is significant. What really stands out is the MED Pay security, it gives us peace of mind knowing patient data and transactions are handled with the highest level of protection. It’s a solution that truly fits how a practice operates.",
    highlight: "saving about 95%",
  },

  {
    id: 3,
    name: "Dan Macintosh",
    company: "Inspired By Giving",
    image: "/testimonial-user3.png",
    review:
      "We needed a platform that could handle recurring donations and event-based giving without complications. The setup was straightforward, and the flexibility has been huge for us. What really separates them is the unmatched customer support, anytime we need something, their team is responsive, knowledgeable, and gets it done. It’s made managing contributions simple and reliable, especially during peak fundraising periods.",
    highlight:
      "The setup was straightforward, and the flexibility has been huge for us.",
  },

  {
    id: 4,
    name: "Matt Oliver",
    company: "Apex AF LLC",
    image: "/testimonial-user4.png",
    review:
      "What stood out immediately was how quickly everything came together. From onboarding to going live, we were set up and processing in a very short time frame with zero friction. The communication was clear, the process was efficient, and we were able to start running transactions almost immediately. That kind of speed makes a real difference.",
    highlight:
      "very short time frame with zero friction.",
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
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.98,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    filter: "blur(10px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headingWords = [
  "Customers",
  "say",
  "we're",
  "awesome!",
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0
        ? testimonials.length - 1
        : prev - 1
    );
  };

  const activeTestimonial =
    testimonials[current];

  return (
    <section className="w-full bg-white py-[72px] sm:py-[90px] lg:py-[96px] px-5 sm:px-8 lg:px-20 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="max-w-7xl mx-auto flex flex-col gap-[44px] sm:gap-[56px] lg:gap-[60px]"
      >
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 sm:gap-10">
          <motion.div
            variants={containerVariants}
            className="flex flex-col gap-2 flex-1"
          >
            <motion.span
              variants={fadeUpVariants}
              className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[13px] sm:text-[16px] leading-6 font-normal"
            >
              Testimonials
            </motion.span>

            <motion.h2
              variants={containerVariants}
              className="text-[#1D3855] text-[34px] sm:text-[44px] leading-[115%] sm:leading-[56px] tracking-[-0.04em] font-medium text-balance"
            >
              {headingWords.map(
                (word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="inline-block mr-[10px]"
                  >
                    {word}
                  </motion.span>
                )
              )}
            </motion.h2>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="flex items-center gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{
                y: -2,
                borderColor: "#3B747F",
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={prevSlide}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-[#EEEEEE] bg-white flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft
                size={22}
                className="text-[#3B747F]"
                strokeWidth={2}
              />
            </motion.button>

            <motion.button
              whileHover={{
                y: -2,
                borderColor: "#3B747F",
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={nextSlide}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-[#EEEEEE] bg-white flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight
                size={22}
                className="text-[#3B747F]"
                strokeWidth={2}
              />
            </motion.button>
          </motion.div>
        </div>

        <div className="relative w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <div className="flex flex-col lg:flex-row items-stretch gap-5 sm:gap-[30px]">
                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  className="flex-1 bg-[#F8FAFD] rounded-[20px] p-6 sm:p-10 flex flex-col justify-center gap-4 min-h-[280px] sm:min-h-[260px]"
                >
                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.1,
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-[#5DA7CF] text-[15px] sm:text-[16px] leading-6 tracking-[-0.3px] font-medium"
                  >
                    {activeTestimonial.name},{" "}
                    {activeTestimonial.company}
                  </motion.h3>

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 24,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.18,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-[#1D3855] text-[16px] sm:text-[18px] leading-[175%] tracking-[-0.3px] text-pretty"
                  >
                    “
                    {
                      activeTestimonial.review.split(
                        activeTestimonial.highlight
                      )[0]
                    }
                    <span className="font-semibold">
                      {
                        activeTestimonial.highlight
                      }
                    </span>
                    {
                      activeTestimonial.review.split(
                        activeTestimonial.highlight
                      )[1]
                    }
                    ”
                  </motion.p>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="relative w-full lg:w-[300px] h-[300px] sm:h-[360px] lg:h-auto lg:min-h-[300px] shrink-0 rounded-[20px] overflow-hidden"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${activeTestimonial.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          variants={fadeUpVariants}
          className="flex items-center justify-center gap-3"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-500 rounded-full ${
                current === index
                  ? "w-8 h-2 bg-[#3B747F]"
                  : "w-2 h-2 bg-[#D0D5DD]"
              }`}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}