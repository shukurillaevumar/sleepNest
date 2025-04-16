"use client";

import { useState } from "react";

import Image from "next/image";
import Logo from "../../public/Logo.png";

import { usePathname } from "next/navigation";

import { useTranslation } from "react-i18next";
import "./i18n";

import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";

import {
  Instagram,
  Send,
  Menu as MenuIcon,
  X as CloseIcon,
} from "lucide-react";

export default function Menu() {
  const pathname = usePathname();

  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  // Смена языка
  const languageChanger = (lng: string) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false);
  };

  const languages = [
    { label: "UZ", code: "uz" },
    { label: "ENG", code: "en" },
    { label: "RU", code: "ru" },
  ];
  return (
    <div className="p-2 shadow-md sticky top-0 z-9999 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <Image src={Logo} alt="Logo" />
        </Link>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        <div className="hidden md:flex items-center gap-6 text-[#a17f4a]">
          <ul className="flex gap-4 text-lg">
            {[
              { name: `${t("Home")}`, path: "/" },
              { name: `${t("Collection")}`, path: "/collection" },
              { name: `${t("AboutUs")}`, path: "/about" },
              { name: `${t("Contacts")}`, path: "/contacts" },
            ].map(({ name, path }) => (
              <Link key={path} href={path}>
                <li
                  className={`${
                    pathname === path
                      ? "text-[#a17f4a] font-semibold"
                      : "text-black"
                  } transition duration-200 hover:text-[#a17f4a]`}
                >
                  {name}
                </li>
              </Link>
            ))}
          </ul>

          <ul className="flex gap-4 items-center">
            {languages.map(({ label, code }) => (
              <li
                key={code}
                onClick={() => languageChanger(code)}
                className={`cursor-pointer transition-all duration-50 ease-in box-border hover:translate-y-[-2px] ${
                  i18n.language === code
                    ? "border-b-2 border-white font-bold"
                    : "hover:border-b-2 hover:border-white"
                }`}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden md:hidden mt-4 font-semibold flex justify-center items-center flex-col"
          >
            <ul className="flex flex-col gap-2">
              {[
                { name: `${t("Home")}`, path: "/" },
                { name: `${t("Collection")}`, path: "/collection" },
                { name: `${t("AboutUs")}`, path: "/about" },
                { name: `${t("Contacts")}`, path: "/contacts" },
              ].map(({ name, path }) => (
                <li key={path} className="text-center">
                  <Link href={path} onClick={() => setMenuOpen(false)}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-2 mt-4">
              {languages.map(({ label, code }) => (
                <li
                  key={code}
                  onClick={() => languageChanger(code)}
                  className={`cursor-pointer py-1 text-center ${
                    i18n.language === code
                      ? "border-b-2 border-white font-bold"
                      : "hover:border-b hover:border-white"
                  }`}
                >
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
