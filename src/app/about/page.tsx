import Image from "next/image";
import Img from "../../../public/aboutImage/aboutImg-BafZ-cOo.png";
export default function About() {
  const content = [
    { title: "Ecologically Clean Sleep Products" },
    {
      title:
        "Our company, which produces cotton fabrics and ecological bags, has been supplying cotton fabrics to the global market for many years.",
    },
    {
      title:
        "Our company started its activity 17 years ago and has been gaining the trust of our customers.",
    },
    {
      title:
        "The main goal of our company is to create high-quality, durable and environmentally friendly products.",
    },
    {
      title:
        "Manufacturing processes are fully environmentally friendly and environmentally friendly.",
    },
    {
      title:
        "Using modern technologies, we are able to produce various cotton products at a high level.",
    },
    {
      title:
        "Also, we act as the official representative of DongJu weaving equipment in Uzbekistan.",
    },
    {
      title:
        "Every year, more than 80 types of products are produced in our factory, as a result of which the company ensures high quality and stable production.",
    },
    {
      title:
        "More than 50 looms are operating in our enterprise based on modern technologies.",
    },
    {
      title:
        "In our production processes, we ensure the production of only high-quality and environmentally safe products.",
    },
    {
      title:
        "According to the requirements of our customers, the production of eco-friendly and modern design bags has been launched.",
    },
    {
      title:
        "Our company is always happy to provide quality products and high level of service to its customers.",
    },
  ];
  return (
    <div className="container mx-auto mt-30 grid grid-cols-3 items-center max-xl:grid-cols-1 max-sm:p-2">
      <div className="flex flex-col gap-4 col-span-1">
        {content.map((item, index) => (
          <p
            key={index}
            className={index === 0 ? "font-semibold text-3xl" : "text-gray-600"}
          >
            {item.title}
          </p>
        ))}
      </div>
      <div className="max-xl:flex max-xl:items-start max-xl:mt-10">
        <Image
          src={Img}
          alt="img"
          className="col-span-2 justify-self-end rounded-4xl shadow-2xl max-xl:col-span-1"
        />
      </div>
    </div>
  );
}
