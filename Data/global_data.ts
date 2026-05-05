import { Shield, FileCheck, Activity } from "lucide-react";
import { DarkStripItem } from "@/Components/global/dark_strip";

export const healthcare_payment_processing: DarkStripItem[] = [
  {
    icon: Shield,
    title: "Dual-Layer Security",
    description:
      "General gateways aren’t built to handle the strict separation of PHI and financial data.",
  },
  {
    icon: FileCheck,
    title: "Guaranteed Compliance",
    description:
      "We provide comprehensive Business Associate Agreements standard with every account.",
  },
  {
    icon: Activity,
    title: "EHR Integration",
    description:
      "Our API securely communicates with leading Electronic Health Records automatically.",
  },
];