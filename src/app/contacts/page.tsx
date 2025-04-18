"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
// Используем dynamic import, чтобы отключить SSR (react-leaflet не работает на сервере)
const DynamicMap = dynamic(() => import("../../components/Map"), {
  ssr: false,
});
import { useTranslation } from "react-i18next";
import "../../app/i18n";

export default function Contacts() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-30 max-sm:p-2">
      <motion.form
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-5"
      >
        <p className="font-semibold text-3xl">{t("Connection")}</p>
        <input
          type="email"
          placeholder={t("YourEmail")}
          className="p-4 rounded-full outline-none bg-gray-200"
        />
        <input
          type="number"
          placeholder={t("YourNumber")}
          className="p-4 rounded-full outline-none bg-gray-200"
        />
        <textarea
          className="px-4 py-4 min-h-[150px] rounded-3xl outline-none bg-gray-200 resize-none w-full placeholder:text-gray-500"
          placeholder={t("YourText")}
        />
        <button
          type="submit"
          className="p-4 bg-black text-white rounded-full hover:bg-white cursor-pointer hover:text-black border transition-all duration-200 ease-linear"
        >
          {t("Send")}
        </button>
      </motion.form>

      <div className="w-full h-[300px] md:h-auto">
        <DynamicMap />
      </div>
    </div>
  );
}
