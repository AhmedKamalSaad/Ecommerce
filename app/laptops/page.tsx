import Products from "../_components/Products";
import { getProducts } from "@/lib/getProducts";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ order: string }>;
}) => {
  const order = (await searchParams).order || "asc";
  const products = await getProducts(order,'laptops');
  return (

    <Products products={products} category="Laptops" img="/laptop-(1).svg" alt="laptop"/>
  );
};

export default page;
