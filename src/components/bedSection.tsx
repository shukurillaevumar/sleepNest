import Image from "next/image";

interface BedSectionProps {
  img: any;
  bgColor: string;
}
export default function BedSection({ img, bgColor }: BedSectionProps) {
  return (
    <div
      className={`${bgColor} mt-20 rounded-4xl flex items-center justify-between text-white p-20 relative`}
    >
      <div className="flex flex-col gap-10">
        <p className="text-8xl font-bold">100%</p>
        <p className="text-xl">Material sifati</p>
      </div>
      <div className="absolute left-80 -top-28">
        <Image src={img} alt="img" />
      </div>
      <div className="w-120 flex flex-col gap-5 items-start z-10">
        <p className="text-3xl">"Ekologik Toza Uyqu Mahsulotlari"</p>
        <p>
          ko'p yillar davomida butun dunyoda foydalanish uchun paxta matolarini
          ishlab chiqaradigan kompaniya bo'lib kelgan
        </p>
        <button className="bg-white py-3 px-8 cursor-pointer text-black rounded-2xl">
          Toplam
        </button>
      </div>
    </div>
  );
}
