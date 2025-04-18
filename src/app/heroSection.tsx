"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import img from "../../public/mainPicture/img.png";
import Cards from "@/components/heroSectionCards";
import BedSection from "@/components/bedSection";
import verticalBed from "../../public/mainPicture/vertical_Bed (1).png";

import { useTranslation } from "react-i18next";
import "./i18n";

const bgColors = ["#f5efe6", "#e0d7c5", "#d2b48c", "#a17f4a", "#f5efe6"];

const textColors = ["#a17f4a", "#8c6e3f", "#6b4f29", "#fff", "#a17f4a"];

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container mx-auto mt-5">
      <motion.div
        className="rounded-4xl relative h-150 flex justify-end max-xl:h-100 max-sm:h-80"
        animate={{ backgroundColor: bgColors }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Image
          src={img}
          alt="img"
          className="
    absolute 
    -top-20 -left-40

    max-2xl:w-250 
    max-2xl:top-10 

    max-xl:w-300 
    max-xl:-top-18 

    max-lg:-top-10 

    max-md:left-1/2 
    max-md:top-1/6
    max-md:-translate-x-1/2 
    max-md:transform
  "
        />

        <div className="flex flex-col items-end p-5 gap-10 max-md:z-10">
          <motion.p
            className="text-2xl font-semibold max-xl:text-xl"
            animate={{ color: textColors }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {t("Enviromental")}
          </motion.p>
          <motion.p
            className="text-6xl max-xl:text-3xl"
            animate={{ color: textColors }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {t("CleanSleep")}
          </motion.p>
          <motion.p
            className="text-8xl max-xl:text-5xl max-sm:text-4xl"
            animate={{ color: textColors }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {t("Products")}
          </motion.p>
        </div>
      </motion.div>

      <Cards />
      <BedSection img={verticalBed} bgColor="bg-[#464351]" />
    </div>
  );
}
