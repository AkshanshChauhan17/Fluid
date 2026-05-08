import Image from "next/image";
import { TrendingDown } from "lucide-react";

interface Props {
  image: string;
  savings?: string;
  show_card?: boolean;
}

export default function RightImage({
  image,
  savings = "22%",
  show_card = true,
}: Props) {
  return (
    <section className="w-full sm:w-[60%] px-8 md:px-0 py-0 bg-white">
      <div className="relative max-w-7xl mx-auto">

        {/* Main Image */}
        <div className="relative w-full h-[400px] md:h-[400px] rounded-[28px] overflow-hidden">
          <Image
            src={image}
            alt="Healthcare"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Floating Card */}
        {show_card && <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-4 border border-gray-200">

          {/* Icon */}
          <div className="w-[40px] h-[40px] rounded-full bg-[#D0FAE5CC] flex items-center justify-center">
            <TrendingDown className="w-5 h-5 text-[#00C853]" />
          </div>

          {/* Text */}
          <div className="leading-tight">
            <p className="text-[10px] font-[300] text-gray-500 uppercase tracking-wide">
              Avg. Savings
            </p>
            <p className="text-[18px] font-[600] text-gray-900">
              {savings}
            </p>
          </div>
        </div>}

      </div>
    </section>
  );
}