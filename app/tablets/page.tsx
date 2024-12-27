import { Metadata } from "next";
import Products from "../_components/Products";
import { getProducts } from "@/lib/getProducts";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ order: string }>;
}) => {
  const order = (await searchParams).order || "asc";
  const products = await getProducts(order,'Tablets');
  return (

    <Products products={products} category="Tablets" alt="Tablet" img="/tablet-1.svg"/>
  );
};

export default page;
export const metadata: Metadata = {
  title: "Tablets Section",
  description: "Ecommerce website",
};
