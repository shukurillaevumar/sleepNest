import { products } from "../../data/products";
import ProductDetails from "./ProductDetails"; // Клиентский компонент

interface ProductProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductProps) {
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-10">Mahsulot topilmadi</div>;
  }

  return <ProductDetails product={product} />;
}
