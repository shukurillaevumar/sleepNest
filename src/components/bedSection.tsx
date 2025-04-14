"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BedSectionProps {
  img: any;
  bgColor: string;
}

export default function BedSection({ img, bgColor }: BedSectionProps) {
  return (
    <motion.div
      className={`${bgColor} mt-20 rounded-4xl flex items-center justify-between text-white p-20 relative`}
      whileHover={{
        boxShadow: "0px 0px 50px rgba(255, 0, 0, 0.6)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="flex flex-col gap-10">
        <p className="text-8xl font-bold">100%</p>
        <p className="text-xl">Material sifati</p>
      </div>
      <div className="absolute left-80 -top-28">
        <Image src={img} alt="img" />
      </div>
      <div className="w-120 flex flex-col gap-5 items-start z-10">
        <p className="text-3xl">"Ekologik Toza Uyqu Mahsulotlari"</p>
        <p>
          ko'p yillar davomida butun dunyoda foydalanish uchun paxta matolarini
          ishlab chiqaradigan kompaniya bo'lib kelgan
        </p>
        <button className="bg-white py-3 px-8 cursor-pointer text-black rounded-2xl">
          Toplam
        </button>
      </div>
    </motion.div>
  );
}
