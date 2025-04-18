import { Truck, BadgeCheck, Headset, Wallet } from "lucide-react";

import { useTranslation } from "react-i18next";
import "../app/i18n";
export default function Cards() {
  const { t, i18n } = useTranslation();
  const cards = [
    {
      icon: Truck,
      title: t("FreeShipping"),
      desc: t("FreeShippingDesc"),
    },
    {
      icon: BadgeCheck,
      title: t("ReturnGuarantee"),
      desc: t("ReturnGuaranteeDesc"),
    },
    {
      icon: Headset,
      title: t("24/7Support"),
      desc: t("24/7SupportDesc"),
    },
    {
      icon: Wallet,
      title: t("SecurePayment"),
      desc: t("SecurePaymentDesc"),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
      {cards.map((item, index) => {
        const Icon = item.icon; // <- создаем компонент иконки
        return (
          <div key={index} className="flex flex-col items-center text-center">
            <Icon className="w-14 h-14 text-red-500 mb-2" />{" "}
            {/* <- рендерим иконку */}
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
