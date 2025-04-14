import SectionHead from "@/components/sectionHead";

import { Heart } from "lucide-react";

import img1 from "../../public/winterSectionImages/img (1).png";
import img2 from "../../public/winterSectionImages/img (2).png";
import img3 from "../../public/winterSectionImages/img (3).png";
import img4 from "../../public/winterSectionImages/img (4).png";
import img5 from "../../public/winterSectionImages/img (5).png";
import img6 from "../../public/winterSectionImages/img (6).png";
import img7 from "../../public/winterSectionImages/img (7).png";
import img8 from "../../public/winterSectionImages/img (8).png";
import img9 from "../../public/winterSectionImages/img (9).png";
import img10 from "../../public/winterSectionImages/img (10).png";
import Image from "next/image";
import BedSection from "@/components/bedSection";

import bedImg from "../../public/mainPicture/vertical_Bed (2).png";

export default function WinterCollectionSection() {
  const cards = [
    { img: img1, title: "Kvadratchalar" },
    { img: img2, title: "Ikat" },
    { img: img3, title: "Davralar" },
    { img: img4, title: "Geometriya ko'k" },
    { img: img5, title: "Tropik barglar" },
    { img: img6, title: "Bambi" },
    { img: img7, title: "Vizantiya" },
    { img: img8, title: "Kechki bog'" },
    { img: img9, title: "Pat Markiz" },
    { img: img10, title: "Lavanda atirgullari" },
  ];
  return (
    <div className="container mx-auto mt-20">
      <SectionHead
        title="Qish kolleksiyasi"
        desc="Ekologik Toza Uyqu Mahsulotlari"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10 mb-40">
        {cards.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 relative rounded-xl transition-transform duration-300 hover:scale-105 hover:text-red-500 cursor-pointer"
          >
            <Image src={item.img} alt="img" className="rounded-t-xl" />
            <p className="px-4 pb-4">{item.title}</p>
            <div className="absolute top-2 right-12 bg-gray-300 p-2 rounded-full cursor-pointer text-red-500">
              <Heart />
            </div>
          </div>
        ))}
      </div>
      <BedSection img={bedImg} bgColor="bg-[#7f54b3]" />
    </div>
  );
}
