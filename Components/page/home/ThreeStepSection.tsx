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
        statusColor: "bg-[#5DA7CF] text-white rounded",
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
    title: "Fast approval and equipment deployment",
    badge: "Step 2 of 3",
    badgeColor: "bg-[#F0F7FF] text-[#1D3855]",
    statusTop: "Approved in 24h",
    statusTopColor: "bg-[#ECFDF3] text-[#00C853]",
    subtitle: "Request ID: #EQ-2847",
    heading: "Deploy equipment to site",
    iconBg: "bg-[#ECFDF3]",
    checkIcon: true,
    items: [
      {
        icon: Plus,
        label: "Application submitted",
        status: "Done",
        statusColor: "bg-[#ECFDF3] text-[#00C853]",
      },
      {
        icon: CheckCircle2,
        label: "Approval received",
        status: "Done",
        statusColor: "bg-[#ECFDF3] text-[#00C853]",
      },
      {
        icon: Layers3,
        label: "Equipment deployment",
        status: "In Progress",
        statusColor: "bg-[#3B747F] text-white rounded",
      },
    ],
  },

  {
    id: "03",
    title: "Begin secure payment processing within 48 hours",
    badge: "Step 3 of 3",
    badgeColor: "bg-[#F0F7FF] text-[#1D3855]",
    statusTop: "Ready in 48h",
    statusTopColor: "bg-[#FEF3F2] text-[#D92D20]",
    subtitle: "Secure & Fast",
    heading: "Start accepting payments",
    iconBg: "bg-[#D1FADF]",
    icon: CreditCard,
    items: [
      {
        icon: CheckCircle2,
        label: "Account verification",
        status: "Done",
        statusColor: "bg-[#ECFDF3] text-[#00C853]",
      },
      {
        icon: Shield,
        label: "Security protocols",
        status: "Done",
        statusColor: "bg-[#ECFDF3] text-[#00C853]",
      },
      {
        icon: Layers3,
        label: "Gateway activation",
        status: "Activating",
        statusColor: "bg-[#3B747F] text-white rounded",
      },
    ],
  },
];

export default function ThreeStepSection() {
  return (
    <section className="w-full bg-[#F8FAFD] py-[100px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-0 flex flex-col items-center gap-[60px]">
        
        {/* HEADER */}
        <div className="max-w-[766px] flex flex-col items-center gap-2 text-center">
          <span className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[16px] leading-6">
            How It Works
          </span>

          <h2 className="text-[#1D3855] text-[44px] leading-[56px] tracking-[-0.04em] font-medium">
            Three-Step Onboarding
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
          {steps.map((step, index) => {
            const MainIcon = step.icon;

            return (
              <div
                key={index}
                className="bg-[#F9FAFB] border border-[#EEEEEE] rounded-2xl p-0 flex flex-col justify-start gap-2 min-h-full"
              >
                
                {/* ILLUSTRATION */}
                <div className="w-full h-[350px] rounded-xl relative overflow-hidden bg-[#F3F4F6] flex items-end justify-center">
                  
                  {/* FLOATING APP */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[257px] bg-white border border-[#EEEEEE] shadow-[0px_-11px_37px_rgba(0,0,0,0.06)] rounded-2xl overflow-hidden">
                    
                    {/* TOP */}
                    <div className="p-4 border-b border-[#F3F4F6]">
                      
                      <div className="flex items-center justify-between mb-4">
                        
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
                          className={`px-2 py-1 rounded-full text-[8px] font-medium ${step.badgeColor}`}
                        >
                          {step.badge}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        
                        <div>
                          <p className="text-[10px] text-[#73797B] mb-1">
                            {step.subtitle}
                          </p>

                          <h3 className="text-[12px] leading-4 font-medium text-[#1D3855] max-w-[120px]">
                            {step.heading}
                          </h3>
                        </div>

                        {/* STATUS ICON */}
                        <div
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
                        </div>
                      </div>
                    </div>

                    {/* ITEMS */}
                    <div className="bg-[#EEEEEE] p-4 flex flex-col gap-3">
                      {step.items.map((item, idx) => {
                        const ItemIcon = item.icon;

                        return (
                          <div
                            key={idx}
                            className="bg-white border border-[#EEEEEE] rounded-lg h-10 px-3 flex items-center justify-between"
                          >
                            
                            <div className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full border border-[#EEEEEE] flex items-center justify-center">
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
                                className={`text-[10px] font-medium ${
                                  item.faded
                                    ? "text-[#D0D5DD]"
                                    : "text-[#1D3855]"
                                }`}
                              >
                                {item.label}
                              </span>
                            </div>

                            {item.status && (
                              <div
                                className={`px-2 py-[4px] text-[8px] font-medium rounded-full ${item.statusColor}`}
                              >
                                {item.status}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* FADE */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F9FAFB]" />
                </div>

                {/* BOTTOM TEXT */}
                <div className="flex items-start gap-3 px-[32px] pt-0 pb-[24px]">
                  
                  <div className="w-8 h-8 rounded-full bg-[#3B747F] flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white text-[14px] font-semibold tracking-[-0.02em]">
                      {step.id}
                    </span>
                  </div>

                  <h3 className="text-[#101010] mt-[6px] text-[20px] leading-7 tracking-[-0.02em] font-medium max-w-[290px]">
                    {step.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}