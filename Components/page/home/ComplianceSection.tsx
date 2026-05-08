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
    <div className="border-l border-[#EEEEEE] pl-6 flex flex-col justify-center gap-4 min-h-[224px]">
      
      {/* ICON */}
      <div className="w-12 h-12 rounded-lg border border-[#EEEEEE] bg-white shadow-[0px_2px_2px_rgba(72,80,88,0.08)] flex items-center justify-center">
        <Icon
          size={24}
          className="text-[#3B747F]"
          strokeWidth={2}
        />
      </div>

      {/* TITLE */}
      <h3 className="text-[#101010] text-[20px] leading-6 tracking-[-1px] font-medium max-w-[374px]">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[#73797B] text-[16px] leading-[150%] tracking-[0.003em] max-w-[374px]">
        {desc}
      </p>
    </div>
  );
}

export default function ComplianceSection() {
  return (
    <section className="w-full bg-[#F8FAFD] py-[100px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-0 flex flex-col gap-[60px]">
        
        {/* TOP ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-[389px_1fr] gap-[60px] items-center">
          
          {/* LEFT TITLE */}
          <div className="flex flex-col gap-2">
            <span className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[16px] leading-6 font-normal">
              Compliance Authority
            </span>

            <h2 className="text-[#1D3855] text-[44px] leading-[56px] tracking-[-0.04em] font-medium">
              Built for Healthcare Compliance
            </h2>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topCompliance.map((item, index) => (
              <ComplianceCard
                key={index}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bottomCompliance.map((item, index) => (
            <ComplianceCard
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}