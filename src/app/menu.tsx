"use client";

import { useState } from "react";

import Image from "next/image";
import Logo from "../../public/Logo.png";

import { useTranslation } from "react-i18next";
import "./i18n";

import { motion, AnimatePresence } from "framer-motion";

import {
  Instagram,
  Send,
  Menu as MenuIcon,
  X as CloseIcon,
} from "lucide-react";

export default function Menu() {
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
    <div className="p-2 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <Image src={Logo} alt="Logo" />
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        <div className="hidden md:flex items-center gap-6 text-[#a17f4a] font-semibold">
          <ul className="flex gap-4">
            {[
              { name: "Bosh sahifa", id: "home" },
              { name: "To'plam", id: "about" },
              { name: "Biz haqimizda", id: "tours" },
              { name: "Kontaktlar", id: "contacts" },
            ].map(({ name, id }) => (
              <li key={id}>{name}</li>
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
                { name: t("Home"), id: "home" },
                { name: t("About"), id: "about" },
                { name: t("Tours"), id: "tours" },
                { name: t("Contacts"), id: "contacts" },
              ].map(({ name, id }) => (
                <li key={id} className="text-center">
                  {name}
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
              <div className="flex gap-4 mt-2">
                <Instagram className="cursor-pointer" />
                <Send className="cursor-pointer" />
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
