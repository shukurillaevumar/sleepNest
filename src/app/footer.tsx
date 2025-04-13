import Image from "next/image";
import Logo from "../../public/footerImages/Logo.png";

export default function Footer() {
  return (
    <div className="mt-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-[33%]">
          <Image src={Logo} alt="logo" />
          <p className="text-lg mt-5 text-gray-400">
            “Ekologik Toza Uyqu Mahsulotlat” koʻp yillardan buyon butun dunyoda
            foydalanish uchun paxta matolari ishlab chiqaradigan kompaniya
            hisoblanadi.
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          <li className="text-2xl font-semibold">Menyu</li>
          <li>Bosh sahifa</li>
          <li>To'plam</li>
          <li>Biz haqimizda</li>
          <li>Kontaktlar</li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li className="text-2xl font-semibold">Kontaktlar</li>
          <li>Buxoro, st. Alpomish 80.</li>
          <li>Email: sleepnest@gmail.com</li>
          <li>Telegram: sleepnest</li>
          <li>+998 94 033 72 12</li>
        </ul>

        <form className="flex flex-col gap-4">
          <label className="text-xl font-semibold">
            Elektron pochtamizga obuna bo'ling
          </label>
          <div className="flex items-center border border-black rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Elektron pochtangiz"
              className="flex-grow p-5 outline-none text-sm"
            />
            <button className="bg-red-600 text-white px-5 py-3 rounded-full hover:bg-red-700 transition cursor-pointer mr-1">
              Obuna Bo'ling
            </button>
          </div>
          <p className="text-gray-400">Kamida bitta roʻyxatni tanlang.</p>
        </form>
      </div>
    </div>
  );
}
