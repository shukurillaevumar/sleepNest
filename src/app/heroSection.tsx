import Image from "next/image";
import img from "../../public/mainPicture/img.png";
import Cards from "@/components/heroSectionCards";
import BedSection from "@/components/bedSection";

import verticalBed from "../../public/mainPicture/vertical_Bed (1).png";

export default function HeroSection() {
  return (
    <div className="container mx-auto mt-5">
      <div className="bg-[#f5efe6] rounded-4xl relative h-150 flex justify-end">
        <Image src={img} alt="img" className="absolute -top-20 -left-40" />
        <div className="flex flex-col items-end p-5 gap-10">
          <p className="text-2xl text-[#a17f4a] font-semibold">Ekologik</p>
          <p className="text-6xl text-[#a17f4a]">Toza Uyqu</p>
          <p className="text-8xl text-[#a17f4a]">Mahsulotlari</p>
        </div>
      </div>
      <Cards />
      <BedSection img={verticalBed} bgColor="bg-[#464351]" />
    </div>
  );
}
