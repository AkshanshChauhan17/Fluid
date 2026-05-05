import { ChevronRight } from "lucide-react";

const features = [
  "End-to-end encrypted transactions",
  "Fully compliant network infrastructure",
  "Strict adherence to payment standards",
];

export default function LeftText() {
  return (
    <section className="w-full bg-white px-8 py-0 sm:px-4">
      <div className="max-w-xl">

        <ul className="space-y-[20px]">
          {features.map((item, index) => (
            <li key={index} className="flex items-center gap-3">

              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50">
                <ChevronRight className="w-4 h-4 text-blue-500" />
              </span>

              <span className="text-[16px] text-[#1D3855] text-center sm:text-left">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-[20px] text-[14px] text-[#73797B] leading-relaxed text-center sm:text-left">
          Additional compliance disclosures may apply depending on merchant
          classification and payment services selected.
        </p>

      </div>
    </section>
  );
}