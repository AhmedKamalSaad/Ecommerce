import { Metadata } from "next";
import Products from "../_components/Products";
import { getProducts } from "@/lib/getProducts";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ order: string }>;
}) => {
  const order = (await searchParams).order || "asc";
  const products = await getProducts(order,'smartphones');
  return (

    <Products products={products} category="Smartphones" img="/undraw_smartphone_9zbj.svg" alt="mobile"/>
  );
};

export default page;
export const metadata: Metadata = {
  title: "Mobiles Section",
  description: "Ecommerce website",
};
