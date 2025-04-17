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
      className={`${bgColor} mt-30 rounded-4xl flex items-center justify-between text-white p-20 relative max-xl:flex-col max-xl:p-5 max-xl:gap-5`}
      whileHover={{
        boxShadow: "0px 0px 50px rgba(255, 0, 0, 0.6)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="absolute -top-28 left-80 max-xl:left-1/2 max-xl:-translate-x-1/2 max-xl:transform max-xl:w-140 max-2xl:left-40 max-sm:w-93 max-sm:-top-15">
        <Image src={img} alt="img" className="max-2xl:w-180 overflow-hidden" />
      </div>

      <div className="flex flex-col gap-10 max-xl:text-center max-xl:gap-5 max-xl:mt-65">
        <p className="text-8xl font-bold max-2xl:text-7xl">100%</p>
        <p className="text-xl max-2xl:text-lg">Material sifati</p>
      </div>
      <div className="w-120 flex flex-col gap-5 items-start z-10 max-xl:text-center max-sm:w-auto">
        <p className="text-3xl max-2xl:text-2xl">
          "Ekologik Toza Uyqu Mahsulotlari"
        </p>
        <p>
          ko'p yillar davomida butun dunyoda foydalanish uchun paxta matolarini
          ishlab chiqaradigan kompaniya bo'lib kelgan
        </p>
        <button className="bg-white py-3 px-8 cursor-pointer text-black rounded-2xl max-xl:mx-auto">
          Toplam
        </button>
      </div>
    </motion.div>
  );
}
