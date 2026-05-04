import Image from "next/image";
import { Shield, CreditCard, TrendingDown, LineChart } from "lucide-react";

export default function BookADemoGrid() {
  return (
    <section className="w-full bg-white py-0">
      <div className="max-w-7xl sm:px-0 px-4">

        <div className="grid grid-cols-8 grid-rows-3 gap-[4px] h-[460px]">

          <div className="col-span-4 row-span-1 bg-[#5f97b6] rounded-xl p-6 flex items-center">
            <div className="text-white h-full flex flex-col">
              <TrendingDown strokeWidth={1} className="mb-auto w-[40px] h-[40px]" />
              <p className={"text-[12px] sm:text-[16px] font-[300]"}>Reduce credit card processing costs</p>
            </div>
          </div>

          <div className="col-span-2 row-span-1 relative rounded-xl overflow-hidden">
            <Image
              src="/badg1.png"
              alt="doctor"
              fill
              className="object-cover"
            />
          </div>

          <div className="col-span-2 row-span-1 relative rounded-xl overflow-hidden">
            <Image
              src="/badg2.png"
              alt="doctor"
              fill
              className="object-cover"
            />
          </div>

          <div className="col-span-2 row-span-1 relative rounded-xl overflow-hidden">
            <Image
              src="/badg3.png"
              alt="doctor"
              fill
              className="object-cover"
            />
          </div>

          <div className="col-span-4 row-span-1 bg-[#3B747F] rounded-xl p-6 flex items-center">
            <div className="text-white h-full flex flex-col">
              <CreditCard strokeWidth={1} className="mb-auto w-[40px] h-[40px]" />
              <p className={"text-[12px] sm:text-[16px] font-[300]"}>Modernize healthcare payment infrastructure</p>
            </div>
          </div>

          <div className="col-span-2 row-span-1 relative rounded-xl overflow-hidden">
            <Image
              src="/badg4.png"
              alt="doctor"
              fill
              className="object-cover"
            />
          </div>

          <div className="col-span-4 row-span-1 bg-[#1D3855] rounded-xl p-6 flex items-center">
            <div className="text-white h-full flex flex-col">
              <Shield strokeWidth={1} className="mb-auto w-[40px] h-[40px]" />
              <p className={"text-[12px] sm:text-[16px] font-[300]"}>Strengthen payment security</p>
            </div>
          </div>

          <div className="col-span-4 row-span-1 bg-[#0F2133] rounded-xl p-6 flex items-center">
            <div className="text-white h-full flex flex-col">
              <LineChart strokeWidth={1} className="mb-auto w-[40px] h-[40px]" />
              <p className={"text-[12px] sm:text-[16px] font-[300]"}>Improve financial reporting</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}