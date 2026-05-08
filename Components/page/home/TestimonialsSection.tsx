"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    highlight: "The setup was straightforward, and the flexibility has been huge for us.",
  },

  {
    id: 4,
    name: "Matt Oliver",
    company: "Apex AF LLC",
    image: "/testimonial-user4.png",
    review:
      "“What stood out immediately was how quickly everything came together. From onboarding to going live, we were set up and processing in a very short time frame with zero friction. The communication was clear, the process was efficient, and we were able to start running transactions almost immediately. That kind of speed makes a real difference.”",
    highlight: "very short time frame with zero friction.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-white py-[96px] px-8 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-[60px]">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-10">
          {/* HEADING */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[16px] leading-6 font-normal">
              Testimonials
            </span>

            <h2 className="text-[#1D3855] text-[44px] leading-[56px] tracking-[-0.04em] font-medium">
              Customers say we're awesome!
            </h2>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-lg border border-[#EEEEEE] bg-white flex items-center justify-center transition-all duration-300 hover:border-[#3B747F]"
            >
              <ChevronLeft
                size={24}
                className="text-[#3B747F]"
                strokeWidth={2}
              />
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-lg border border-[#EEEEEE] bg-white flex items-center justify-center transition-all duration-300 hover:border-[#3B747F]"
            >
              <ChevronRight
                size={24}
                className="text-[#3B747F]"
                strokeWidth={2}
              />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div key={item.id} className="w-full shrink-0 snap-center">
                <div className="flex flex-col lg:flex-row items-stretch gap-[30px]">
                  {/* CONTENT */}
                  <div className="flex-1 bg-[#F8FAFD] rounded-[20px] p-10 flex flex-col justify-center gap-4 min-h-[260px]">
                    <h3 className="text-[#5DA7CF] text-[16px] leading-6 tracking-[-0.3px] font-medium">
                      {item.name}, {item.company}
                    </h3>

                    <p className="text-[#1D3855] text-[18px] leading-[160%] tracking-[-0.3px]">
                      “{item.review.split(item.highlight)[0]}
                      <span className="font-semibold">{item.highlight}</span>
                      {item.review.split(item.highlight)[1]}”
                    </p>
                  </div>

                  {/* IMAGE */}
                  <div className="relative w-[300px] h-[300px] shrink-0 bg-red-400 bg-cover rounded-[20px]" style={{backgroundImage: `url(${item.image})`}}>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex items-center justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "w-8 h-2 bg-[#3B747F]"
                  : "w-2 h-2 bg-[#D0D5DD]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
