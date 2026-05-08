import Image from "next/image";
import { ChevronRight } from "lucide-react";

const blogCards = [
  {
    title: "Healthcare payment security",
    image: "/blog-sec-1.png",
  },
  {
    title: "Reducing payment processing costs",
    image: "/blog-sec-2.png",
  },
  {
    title: "Compliance best practices",
    image: "/blog-sec-3.png",
  },
  {
    title: "Payment technology trends",
    image: "/blog-sec-4.png",
  },
];

export default function RelatedBlogsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 sm:px-0 flex flex-col gap-[24px]">
      
      {/* ROW 1 */}
      <div className="w-full flex flex-col lg:flex-row gap-[24px]">
        {blogCards.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-1/2 h-[356px] bg-white border border-[#EEEEEE] rounded-[20px] overflow-hidden"
          >
            {/* IMAGE */}
            <div className="relative w-full h-[300px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* BOTTOM */}
            <div className="h-[56px] px-[20px] py-[16px] flex items-center justify-between bg-white">
              <h3 className="text-[#1D3855] text-[16px] leading-[24px] tracking-[-0.3px] font-medium">
                {item.title}
              </h3>

              <ChevronRight
                size={16}
                className="text-[#1D3855]"
                strokeWidth={2.5}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ROW 2 */}
      <div className="w-full flex flex-col lg:flex-row gap-[24px]">
        {blogCards.slice(2, 4).map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-1/2 h-[356px] bg-white border border-[#EEEEEE] rounded-[20px] overflow-hidden"
          >
            {/* IMAGE */}
            <div className="relative w-full h-[300px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* BOTTOM */}
            <div className="h-[56px] px-[20px] py-[16px] flex items-center justify-between bg-white">
              <h3 className="text-[#1D3855] text-[16px] leading-[24px] tracking-[-0.3px] font-medium">
                {item.title}
              </h3>

              <ChevronRight
                size={16}
                className="text-[#1D3855]"
                strokeWidth={2.5}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}