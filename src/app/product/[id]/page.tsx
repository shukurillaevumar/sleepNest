import { products } from "../../data/products";
import ProductDetails from "./ProductDetails";

interface ProductProps {
  params: { id: string }; // ✅ без Promise
}

export default async function ProductPage(props: any) {
  const id = (await props?.params)?.id;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-10">Mahsulot topilmadi</div>;
  }

  return <ProductDetails product={product} />;
}
