"use client";

import { useTranslation } from "react-i18next";
import "../../i18n";
import Image from "next/image";

import type { StaticImageData } from "next/image";

interface ProductDetailsProps {
  product: {
    id: number;
    name: string;
    material: string;
    pillowcase: string;
    bedding: string;
    bed: string;
    size: string;
    manufacturer: string;
    category: string;
    image: StaticImageData | string; // ✅ вот тут
  };
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="flex flex-col items-center lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={700}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <table className="table-auto w-full border mb-4">
            <tbody className="[&>tr>td]:border [&>tr>td]:border-gray-300 [&>tr>td]:p-4">
              <tr>
                <td>{t("Material")}</td>
                <td>{product.material}</td>
              </tr>
              <tr>
                <td>{t("Pillowcase")}</td>
                <td>{product.pillowcase}</td>
              </tr>
              <tr>
                <td>{t("Bedding")}</td>
                <td>{product.bedding}</td>
              </tr>
              <tr>
                <td>{t("Bed")}</td>
                <td>{product.bed}</td>
              </tr>
              <tr>
                <td>{t("Size")}</td>
                <td>{product.size}</td>
              </tr>
              <tr>
                <td>{t("Manufacturer")}</td>
                <td>{product.manufacturer}</td>
              </tr>
            </tbody>
          </table>
          <p className="text-red-600 font-semibold">
            {t("Category")} {product.category}
          </p>
        </div>
      </div>
      <div className="flex mt-20 max-lg:flex-col">
        <div className="w-1/2 max-lg:w-full max-lg:mb-10">
          <p className="text-center text-4xl font-bold">{t("reviews")}</p>
          <p className="text-xl text-center font-semibold max-lg:mt-10">
            {t("noRating")}
          </p>
        </div>
        <div className="w-1/2 max-lg:w-full">
          <p className="text-center text-4xl font-bold">{t("leaveReview")}</p>
          <form className="flex flex-col gap-4 mt-15">
            <label htmlFor="name" className="text-gray-500">
              {t("name")}
            </label>
            <input
              type="text"
              id="name"
              className="p-4 bg-gray-200 border-none outline-none rounded-full"
            />

            <label htmlFor="name" className="text-gray-500 ">
              {t("email")}
            </label>
            <input
              type="text"
              id="email"
              className="p-4 bg-gray-200 border-none outline-none rounded-full"
            />
            <label htmlFor="name" className="text-gray-500 ">
              {t("yourReview")}
            </label>
            <textarea className="px-4 py-4 min-h-[150px] rounded-3xl outline-none bg-gray-200 resize-none w-full placeholder:text-gray-500" />
            <button
              type="submit"
              className="p-3 bg-black text-white mt-5 rounded-full hover:bg-white cursor-pointer hover:text-black border transition-all duration-200 ease-linear"
            >
              {t("reviewBtn")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
