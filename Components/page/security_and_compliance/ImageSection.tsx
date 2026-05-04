import Image from "next/image";

const features = [
  { img: "/sandc1.png" },
  { img: "/sandc2.png" },
  { img: "/sandc3.png" },
];

export default function ImageSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex justify-center">
          {features.map((item, index) => (
            <div key={index} className="relative w-[250px] h-[250px]">
              <Image
                src={item.img}
                alt={`feature-${index}`}
                fill
                className="object-contain bg-white"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}