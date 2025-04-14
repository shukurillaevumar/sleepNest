"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import img from "../../public/mainPicture/img.png";
import Cards from "@/components/heroSectionCards";
import BedSection from "@/components/bedSection";
import verticalBed from "../../public/mainPicture/vertical_Bed (1).png";

const bgColors = ["#f5efe6", "#e0d7c5", "#d2b48c", "#a17f4a", "#f5efe6"];

const textColors = ["#a17f4a", "#8c6e3f", "#6b4f29", "#fff", "#a17f4a"];

export default function HeroSection() {
  return (
    <div className="container mx-auto mt-5">
      <motion.div
        className="rounded-4xl relative h-150 flex justify-end"
        animate={{ backgroundColor: bgColors }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Image src={img} alt="img" className="absolute -top-20 -left-40" />
        <div className="flex flex-col items-end p-5 gap-10">
          <motion.p
            className="text-2xl font-semibold"
            animate={{ color: textColors }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            Ekologik
          </motion.p>
          <motion.p
            className="text-6xl"
            animate={{ color: textColors }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            Toza Uyqu
          </motion.p>
          <motion.p
            className="text-8xl"
            animate={{ color: textColors }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            Mahsulotlari
          </motion.p>
        </div>
      </motion.div>

      <Cards />
      <BedSection img={verticalBed} bgColor="bg-[#464351]" />
    </div>
  );
}
