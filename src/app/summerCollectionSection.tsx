import SectionHead from "@/components/sectionHead";

import { Heart } from "lucide-react";

import img1 from "../../public/autumnSectionImages/img (1).png";
import img2 from "../../public/autumnSectionImages/img (2).png";
import img3 from "../../public/autumnSectionImages/img (3).png";
import img4 from "../../public/autumnSectionImages/img (4).png";
import img5 from "../../public/autumnSectionImages/img (5).png";
import img6 from "../../public/autumnSectionImages/img (6).png";
import img7 from "../../public/autumnSectionImages/img (7).png";
import img8 from "../../public/autumnSectionImages/img (8).png";
import img9 from "../../public/autumnSectionImages/img (9).png";
import img10 from "../../public/autumnSectionImages/img (10).png";
import Image from "next/image";
import BedSection from "@/components/bedSection";

import bedImg from "../../public/mainPicture/vertical_Bed (3).png";

export default function SummerCollectionSection() {
  const cards = [
    { img: img1, title: "Safari" },
    { img: img2, title: "Ko'p rangli ametist" },
    { img: img3, title: "Shivali bezak" },
    { img: img4, title: "Zumrad (AB)" },
    { img: img5, title: "Malaxit qutisi" },
    { img: img6, title: "Bahorning hidlari" },
    { img: img7, title: "Kuzgi barglar tushishi (AB)" },
    { img: img8, title: "Moviy shabada" },
    { img: img9, title: "Moviy suv" },
    { img: img10, title: "Plaid" },
  ];
  return (
    <div className="container mx-auto mt-30">
      <SectionHead
        title="Yozgi kolleksiya"
        desc="Ekologik Toza Uyqu Mahsulotlari"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
        {cards.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 relative">
            <Image src={item.img} alt="img" />
            <p>{item.title}</p>
            <div className="absolute top-2 right-12 bg-gray-300 p-2 rounded-full cursor-pointer text-red-500">
              <Heart />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
