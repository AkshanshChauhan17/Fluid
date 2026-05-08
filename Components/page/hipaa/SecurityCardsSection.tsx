import {
  ShieldCheck,
  Workflow,
  ArrowLeftRight,
  Boxes,
} from "lucide-react";

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

export default function SecurityCardsSection() {
  return (
    <section className="w-full py-0 px-8 sm:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-[10px] py-[24px] px-[20px] min-h-[178px] transition-all duration-300 shadow-[0px_20px_40px] shadow-[#00478d10]"
            >
              {/* ICON */}
              <div className="w-[48px] h-[48px] rounded-[8px] bg-[#f0f7ff] flex items-center justify-center">
                <Icon
                  size={24}
                  strokeWidth={2}
                  className="text-[#5da7cf]"
                />
              </div>

              {/* TITLE */}
              <h3 className="mt-[12px] text-[#1D3855] text-[20px] leading-[24px] tracking-[-0.3px] font-medium">
                {card.title.split("\n")[0]}
                <br />
                {card.title.split("\n")[1]}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-[8px] text-[13px] leading-[18px] text-[#73797B] font-normal">
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}