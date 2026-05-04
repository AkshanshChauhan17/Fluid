import { Shield, Lock, Activity, Database } from "lucide-react";

const features = [
  {
    icon: Database,
    text: "Secure tokenized payment architecture",
  },
  {
    icon: Lock,
    text: "Encrypted transaction processing",
  },
  {
    icon: Shield,
    text: "Healthcare-aligned data protection standards",
  },
  {
    icon: Activity,
    text: "Continuous monitoring of payment infrastructure",
  },
];

export default function CardSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[16px]">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-[#F0F7FF] rounded-[12px] p-5 flex flex-col gap-3"
              >
                <Icon strokeWidth={1} className="text-[#5DA7CF] w-[36px] h-[36px]" />
                <p className="text-[15px] text-[#1D3855] leading-snug">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-400 text-[16px] mt-[40px] mx-auto">
          Our platform is designed to help healthcare organizations strengthen
          their compliance posture while delivering a modern payment experience.
        </p>

      </div>
    </section>
  );
}