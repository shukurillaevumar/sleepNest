"use client";

import Image from "next/image";
import Logo from "../../public/footerImages/Logo.png";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [inputValue, setInputValue] = useState<string>("");

  // Функция для очистки поля
  const handleClearInput = () => {
    setInputValue("");
  };

  return (
    <div className="mt-20">
      <div className="container mx-auto flex items-center justify-between max-xl:flex-wrap">
        <div className="w-[33%] max-md:w-full">
          <Image src={Logo} alt="logo" />
          <p className="text-lg mt-5 text-gray-400 max-md:text-sm max-md:mb-10">
            “Ekologik Toza Uyqu Mahsulotlat” koʻp yillardan buyon butun dunyoda
            foydalanish uchun paxta matolari ishlab chiqaradigan kompaniya
            hisoblanadi.
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          <li className="text-2xl font-semibold">Menyu</li>
          <Link href={"/"}>
            <li className="hover:text-red-500 transition-all duration-150 ease-in">
              Bosh sahifa
            </li>
          </Link>
          <Link href={"/collection"}>
            <li className="hover:text-red-500 transition-all duration-150 ease-in">
              To'plam
            </li>
          </Link>
          <Link href={"/about"}>
            <li className="hover:text-red-500 transition-all duration-150 ease-in">
              Biz haqimizda
            </li>
          </Link>
          <Link href={"/contacts"}>
            <li className="hover:text-red-500 transition-all duration-150 ease-in">
              Kontaktlar
            </li>
          </Link>
        </ul>

        <ul className="flex flex-col gap-3">
          <li className="text-2xl font-semibold">Kontaktlar</li>
          <li>Buxoro, st. Alpomish 80.</li>
          <li>Email: sleepnest@gmail.com</li>
          <li>Telegram: sleepnest</li>
          <li>+998 94 033 72 12</li>
        </ul>

        <form className="flex flex-col gap-4 max-xl:mt-10">
          <label className="text-xl font-semibold">
            Elektron pochtamizga obuna bo'ling
          </label>
          <div className="flex items-center border border-black rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Elektron pochtangiz"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-grow p-5 outline-none text-sm"
            />
            <button
              onClick={handleClearInput}
              className="bg-red-600 text-white px-5 py-3 rounded-full hover:bg-red-700 transition cursor-pointer mr-1"
            >
              Obuna Bo'ling
            </button>
          </div>
          <p className="text-gray-400">Kamida bitta roʻyxatni tanlang.</p>
        </form>
      </div>
      <div className="bg-black w-full p-5 mt-10">
        <div className="container mx-auto">
          <p className="text-gray-400">
            © 2024 MChJ Ekologik Toza Uyqu Mahsulotlari Barcha huquqlar
            himoyalangan.
          </p>
        </div>
      </div>
    </div>
  );
}
