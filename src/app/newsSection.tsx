import SectionHead from "@/components/sectionHead";

import img1 from "../../public/newsSectionImgaes/img (1).png";
import img2 from "../../public/newsSectionImgaes/img (2).png";
import img3 from "../../public/newsSectionImgaes/img (3).png";

import Image from "next/image";

export default function NewsSection() {
  const cards = [
    {
      img: img1,
      date: "10/05/2024",
      author: "admin tomonidan",
      title: "Qanday qilib mukammal gadjetlarni tanlash mumkin",
      desc: "Go'zal vodiyning bug' bilan to'lganda va meridian quyoshi tepalikka urilganda...",
    },
    {
      img: img2,
      date: "10/05/2024",
      author: "admin tomonidan",
      title: "Zamonaviy texnologiyalardan qanday foydalanish kerak",
      desc: "Texnologiyalar hayotimizni qanday o'zgartirishi haqida qiziqarli hikoyalar...",
    },
    {
      img: img3,
      date: "10/05/2024",
      author: "admin tomonidan",
      title: "Kreativ g'oyalarni amalga oshirish yo'llari",
      desc: "Ko'plab yangi kashfiyotlar yaratish jarayonida qanday qiyinchiliklarga duch kelinadi...",
    },
  ];
  return (
    <div className="container mx-auto mt-20">
      <SectionHead title="Yangiliklar" desc="Ekologik Toza Uyqu Mahsulotlari" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {cards.map((item, index) => (
          <div className="flex flex-col gap-5" key={index}>
            <Image src={item.img} alt="img" className="w-full object-cover" />
            <div className="flex gap-5 items-center">
              <p>{item.date}</p>
              <p className="text-gray-400">{item.author}</p>
            </div>
            <p className="font-semibold text-xl">{item.title}</p>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
