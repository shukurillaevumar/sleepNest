"use client";

import SectionHead from "@/components/sectionHead";

import img1 from "../../public/newsSectionImgaes/img (1).png";
import img2 from "../../public/newsSectionImgaes/img (2).png";
import img3 from "../../public/newsSectionImgaes/img (3).png";

import Image from "next/image";

import { useTranslation } from "react-i18next";
import "./i18n";

export default function NewsSection() {
  const { t, i18n } = useTranslation();
  const cards = [
    {
      img: img1,
      date: "10/05/2024",
      author: t("NewsCardAdmin"),
      title: t("NewsCardTitle1"),
      desc: t("NewsCardDesc1"),
    },
    {
      img: img2,
      date: "10/05/2024",
      author: t("NewsCardAdmin"),
      title: t("NewsCardTitle2"),
      desc: t("NewsCardDesc2"),
    },
    {
      img: img3,
      date: "10/05/2024",
      author: t("NewsCardAdmin"),
      title: t("NewsCardTitle3"),
      desc: t("NewsCardDesc3"),
    },
  ];
  return (
    <div className="container mx-auto mt-20">
      <SectionHead title={t("News")} desc={t("CollectionDesc")} />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {cards.map((item, index) => (
          <div className="flex flex-col gap-5" key={index}>
            <Image src={item.img} alt="img" />
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
