import { getProducts } from "@/lib/getProducts";
import React from "react";
import Card from "./Card";

const Products = async () => {
  const products = await getProducts();
  return (
    <section className="container max-w-screen-xl py-16 relative mx-auto md:px-5 ">
      <h1 className="text-4xl font-medium tracking-wider text-engOrange text-center mb-20">
        Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mx-auto gap-6">
        {products.map((p) => (
          <Card img={p.thumbnail} price={p.price} title={p.title} key={p.id} />
        ))}
      </div>
    </section>
  );
};

export default Products;
