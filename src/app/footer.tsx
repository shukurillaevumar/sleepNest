"use client";

import Image from "next/image";
import Logo from "../../public/footerImages/Logo.png";
import { useState } from "react";
import Link from "next/link";

import { useTranslation } from "react-i18next";
import "./i18n";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const [inputValue, setInputValue] = useState<string>("");

  // Функция для очистки поля
  const handleClearInput = () => {
    setInputValue("");
  };

  return (
    <div className="mt-20">
      <div className="container mx-auto flex items-center justify-between max-xl:flex-wrap max-sm:p-2">
        <div className="w-[33%] max-md:w-full">
          <Image src={Logo} alt="logo" />
          <p className="text-lg mt-5 text-gray-400 max-md:text-sm max-md:mb-10">
            {t("FooterDesc")}
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          <li className="text-2xl font-semibold">{t("FooterMenu")}</li>
          <Link href={"/"}>
            <li className="hover:text-red-500 transition-all duration-150 ease-in">
              {t("Home")}
            </li>
          </Link>
          <Link href={"/collection"}>
            <li className="hover:text-red-500 transition-all duration-150 ease-in">
              {t("Collection")}
            </li>
          </Link>
          <Link href={"/about"}>
            <li className="hover:text-red-500 transition-all duration-150 ease-in">
              {t("AboutUs")}
            </li>
          </Link>
          <Link href={"/contacts"}>
            <li className="hover:text-red-500 transition-all duration-150 ease-in">
              {t("Contacts")}
            </li>
          </Link>
        </ul>

        <ul className="flex flex-col gap-3">
          <li className="text-2xl font-semibold">{t("FooterContacts")}</li>
          <li>Buxoro, st. Alpomish 80.</li>
          <li>Email: sleepnest@gmail.com</li>
          <li>Telegram: sleepnest</li>
          <li>+998 94 033 72 12</li>
        </ul>

        <form className="flex flex-col gap-4 max-xl:mt-10">
          <label className="text-xl font-semibold">
            {t("FooterEmailSubscrubtion")}
          </label>
          <div className="flex items-center border border-black rounded-full overflow-hidden">
            <input
              type="email"
              placeholder={t("FooterEmailSubscrubtion")}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-grow p-5 outline-none text-sm"
            />
            <button
              onClick={handleClearInput}
              className="bg-red-600 text-white px-5 py-3 rounded-full hover:bg-red-700 transition cursor-pointer mr-1"
            >
              {t("FooterSubscribeBtn")}
            </button>
          </div>
          <p className="text-gray-400"> {t("FooterSelectList")}</p>
        </form>
      </div>
      <div className="bg-black w-full p-5 mt-10">
        <div className="container mx-auto">
          <p className="text-gray-400">{t("FooterText")}</p>
        </div>
      </div>
    </div>
  );
}
