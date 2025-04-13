import { Truck, BadgeCheck, Headset, Wallet } from "lucide-react";

export default function Cards() {
  const cards = [
    {
      icon: Truck,
      title: "Yetkazib berish bepul",
      desc: "Barcha buyurtmalar uchun bepul yetkazib berish",
    },
    {
      icon: BadgeCheck,
      title: "Qaytish kafolati",
      desc: "30 kunlik pulni qaytarish",
    },
    {
      icon: Headset,
      title: "24/7 onlayn qo'llab-quvvatlash",
      desc: "24/7 texnik yordam",
    },
    {
      icon: Wallet,
      title: "Xavfsiz to'lov",
      desc: "Barcha to'lov usullari qabul qilinadi",
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
