import Image from "next/image";

const cards = [
  {
    title: "Healthcare fintech innovation",
    img: "/feature_grid_1.png",
    span: "col-span-1 sm:col-span-2",
  },
  {
    title: "Healthcare payment security",
    img: "/feature_grid_2.png",
    span: "col-span-1 sm:col-span-2",
  },
  {
    title: "Reducing payment processing costs",
    img: "/feature_grid_3.png",
    span: "col-span-1 sm:col-span-2",
  },
  {
    title: "Compliance best practices",
    img: "/feature_grid_4.png",
    span: "col-span-1 sm:col-span-3",
  },
  {
    title: "Payment technology trends",
    img: "/feature_grid_1.png",
    span: "col-span-1 sm:col-span-3",
  },
];

export default function FeatureGrid() {
  return (
    <section className="w-full py-0 px-8 sm:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-6 gap-6">
        
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition ${card.span}`}
          >

            <div className="relative w-full h-48 md:h-62">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center justify-between px-4 py-3 text-[16px] text-gray-700">
              <p>{card.title}</p>
              <span className="text-[16px]">›</span>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}