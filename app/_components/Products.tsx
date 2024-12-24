import Image from "next/image";
import Card from "./Card";
import { SelectForm } from "./SelectForm";
interface Product {
  thumbnail: string;
  price: string;
  title: string;
  id: number;
}
interface Props {
  products: Product[];
  category: string;
  img: string;
  alt: string;
}
const Products = async ({ products, category, img, alt }: Props) => {
  return (
    <section className="container max-w-screen-xl  mx-auto  md:px-5 ">
      <div className="flex mx-auto w-full justify-center items-center gap-5 py-24 bg-tealBlue">
        <h1 className="text-4xl font-bold tracking-widest text-paleBeige">
          {category}
        </h1>
        <Image src={img} alt={alt} width={50} height={50} />
      </div>
      <div className=" w-full mx-auto flex flex-col">
        <SelectForm />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6">
          {products.map((p) => (
            <Card
              id={p.id}
              img={p.thumbnail}
              price={p.price}
              title={p.title}
              key={p.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
