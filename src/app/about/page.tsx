"use client";
import Image from "next/image";
import Img from "../../../public/aboutImage/aboutImg-BafZ-cOo.png";
import { useTranslation } from "react-i18next";
import "../../app/i18n";
export default function About() {
  const { t, i18n } = useTranslation();
  const content = [
    { title: t("AboutTitle") },
    {
      title: t("AboutP1"),
    },
    {
      title: t("AboutP2"),
    },
    {
      title: t("AboutP3"),
    },
    {
      title: t("AboutP4"),
    },
    {
      title: t("AboutP5"),
    },
    {
      title: t("AboutP6"),
    },
    {
      title: t("AboutP7"),
    },
    {
      title: t("AboutP8"),
    },
    {
      title: t("AboutP9"),
    },
    {
      title: t("AboutP10"),
    },
    {
      title: t("AboutP11"),
    },
  ];
  return (
    <div className="container mx-auto mt-30 grid grid-cols-3 items-center max-xl:grid-cols-1 max-sm:p-2">
      <div className="flex flex-col gap-4 col-span-1">
        {content.map((item, index) => (
          <p
            key={index}
            className={index === 0 ? "font-semibold text-3xl" : "text-gray-600"}
          >
            {item.title}
          </p>
        ))}
      </div>
      <div className="max-xl:flex max-xl:items-start max-xl:mt-10 col-span-2">
        <Image
          src={Img}
          alt="img"
          className="col-span-2 justify-self-end rounded-4xl shadow-2xl max-xl:col-span-1"
        />
      </div>
    </div>
  );
}
