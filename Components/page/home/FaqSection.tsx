"use client";

import { useState } from "react";
import { MinusCircle, PlusCircle } from "lucide-react";

const faqData = [
  {
    question: "What is MedToken technology?",
    answer:
      "MedToken is a secure payment architecture designed to protect sensitive payment information and support modern healthcare payment infrastructure.",
  },

  {
    question: "How much can practices save?",
    answer:
      "Healthcare practices can reduce processing expenses and recover up to 3% or more annually through optimized payment workflows and dual pricing solutions.",
  },

  {
    question: "Will this disrupt our workflow?",
    answer:
      "No. MED Pay integrates smoothly into existing workflows with minimal disruption, helping teams transition quickly and efficiently.",
  },

  {
    question: "Is the system designed for healthcare?",
    answer:
      "Yes. MED Pay is specifically built for healthcare organizations with HIPAA-aligned infrastructure, tokenization, and secure patient payment tools.",
  },

  {
    question: "How do we get started?",
    answer:
      "Simply submit an online application, complete onboarding, and your organization can begin processing secure payments within 48 hours.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-[#F8FAFD] py-[100px] px-0 lg:px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-[60px]">
        
        {/* HEADER */}
        <div className="flex flex-col items-center gap-2 text-center">
          
          <span className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[16px] leading-6 font-normal">
            Frequently Asked Questions
          </span>

          <h2 className="text-[#1D3855] text-[44px] leading-[56px] tracking-[-0.04em] font-medium capitalize">
            Got Any Questions?
          </h2>
        </div>

        {/* FAQ CONTAINER */}
        <div className="w-full px-0 lg:px-8">
          
          <div className="max-w-[768px] mx-auto flex flex-col gap-0">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="w-full"
                >
                  
                  {/* DIVIDER */}
                  {index !== 0 && (
                    <div className="w-full h-[1px] bg-[#EEEEEE]" />
                  )}

                  {/* ITEM */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full text-left transition-all duration-300 ${
                      isOpen
                        ? "py-0"
                        : "py-6"
                    }`}
                  >
                    
                    <div className="flex items-start gap-6">
                      
                      {/* TEXT */}
                      <div className="flex-1 flex flex-col items-start gap-2">
                        
                        <h3 className={`text-[#1D3855] text-[18px] leading-7 tracking-[-0.3px] font-medium ${isOpen ? "mt-6" : "mt-0"}`}>
                          {item.question}
                        </h3>

                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100 pb-6"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-[#73797B] text-[16px] leading-6 tracking-[-0.3px] max-w-[720px]">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* ICON */}
                      <div className={`pt-[2px] shrink-0 ${isOpen ? "mt-6" : "mt-0"}`}>
                        {isOpen ? (
                          <MinusCircle
                            size={24}
                            className="text-[#3B747F]"
                            strokeWidth={2}
                          />
                        ) : (
                          <PlusCircle
                            size={24}
                            className="text-[#3B747F]"
                            strokeWidth={2}
                          />
                        )}
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}