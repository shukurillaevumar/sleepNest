import Image from "next/image";
import { products } from "../../data/products";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return <div className="p-10">Mahsulot topilmadi</div>;
  }

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="flex flex-col items-center lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={700}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <table className="table-auto w-full border mb-4">
            <tbody className="[&>tr>td]:border [&>tr>td]:border-gray-300 [&>tr>td]:p-4">
              <tr>
                <td>Material:</td>
                <td>{product.material}</td>
              </tr>
              <tr>
                <td>Pillowcase:</td>
                <td>{product.pillowcase}</td>
              </tr>
              <tr>
                <td>Bedding:</td>
                <td>{product.bedding}</td>
              </tr>
              <tr>
                <td>Bed:</td>
                <td>{product.bed}</td>
              </tr>
              <tr>
                <td>Size:</td>
                <td>{product.size}</td>
              </tr>
              <tr>
                <td>Manufacturer:</td>
                <td>{product.manufacturer}</td>
              </tr>
            </tbody>
          </table>
          <p className="text-red-600 font-semibold">
            Category: {product.category}
          </p>
        </div>
      </div>
      <div className="flex mt-20 max-lg:flex-col">
        <div className="w-1/2 max-lg:w-full max-lg:mb-10">
          <p className="text-center text-4xl font-bold">Product Reviews</p>
          <p className="text-xl text-center font-semibold max-lg:mt-10">
            Hozircha sharhlar yo'q.
          </p>
        </div>
        <div className="w-1/2  max-lg:w-full">
          <p className="text-center text-4xl font-bold">Leave your review</p>
          <form className="flex flex-col gap-4 mt-15">
            <label htmlFor="name" className="text-gray-500">
              Name*
            </label>
            <input
              type="text"
              id="name"
              className="p-4 bg-gray-200 border-none outline-none rounded-full"
            />

            <label htmlFor="name" className="text-gray-500 ">
              Email*
            </label>
            <input
              type="text"
              id="email"
              className="p-4 bg-gray-200 border-none outline-none rounded-full"
            />
            <label htmlFor="name" className="text-gray-500 ">
              Your review*
            </label>
            <textarea className="px-4 py-4 min-h-[150px] rounded-3xl outline-none bg-gray-200 resize-none w-full placeholder:text-gray-500" />
            <button
              type="submit"
              className="p-3 bg-black text-white mt-5 rounded-full hover:bg-white cursor-pointer hover:text-black border transition-all duration-200 ease-linear"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
