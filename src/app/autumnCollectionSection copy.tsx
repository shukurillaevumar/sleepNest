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

import Link from "next/link";

import bedImg from "../../public/mainPicture/vertical_Bed (3).png";

export default function AutumnCollectionSection() {
  const cards = [
    { img: img1, title: "Safari", id: 1 },
    { img: img2, title: "Ko'p rangli ametist", id: 2 },
    { img: img3, title: "Shivali bezak", id: 3 },
    { img: img4, title: "Zumrad (AB)", id: 4 },
    { img: img5, title: "Malaxit qutisi", id: 5 },
    { img: img6, title: "Bahorning hidlari", id: 6 },
    { img: img7, title: "Kuzgi barglar tushishi (AB)", id: 7 },
    { img: img8, title: "Moviy shabada", id: 8 },
    { img: img9, title: "Moviy suv", id: 9 },
    { img: img10, title: "Plaid", id: 10 },
  ];
  return (
    <div className="container mx-auto mt-30">
      <SectionHead
        title="Kuz kolleksiyasi"
        desc="Ekologik Toza Uyqu Mahsulotlari"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10 mb-40">
        {cards.map((item, index) => (
          <Link key={item.id} href={`/product/${item.id}`}>
            <div className="flex flex-col gap-4 relative rounded-xl transition-transform duration-300 hover:scale-105 hover:text-red-500 cursor-pointer">
              <Image src={item.img} alt={item.title} className="rounded-t-xl" />
              <p className="px-4 pb-4">{item.title}</p>
              <div className="absolute top-2 right-12 bg-gray-300 p-2 rounded-full cursor-pointer text-red-500 max-2xl:right-2">
                <Heart />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <BedSection img={bedImg} bgColor="bg-[#236f48]" />
    </div>
  );
}
