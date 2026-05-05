"use client";

import { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface DarkStripItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Props {
  data: DarkStripItem[];
}

export default function DarkStrip({ data }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className="w-full bg-[#0F2133] py-12 md:py-14 px-8 md:px-0">
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
      >
        {data.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`border border-dashed border-blue-400/40 rounded-xl 
              p-5 md:p-6 text-white
              transition-all duration-700 ease-out
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="mb-[8px] md:mb-[9px]">
                <Icon className="min-w-[22px] min-h-[22px] md:min-w-[24px] md:min-h-[24px] text-blue-300" />
              </div>

              {/* Title */}
              <h3 className="text-[16px] md:text-[18px] font-[500] mb-[8px] md:mb-[9px]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] md:text-[14px] text-[#D0D5DD] leading-relaxed font-[300]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}