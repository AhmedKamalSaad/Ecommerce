import Image from "next/image";
import React from "react";
import AddToCartBtn from "./AddToCartBtn";
interface Props {
  id:number
  img: string;
  title: string;
  price: string;
}
const Card =  ({id, img, price, title }: Props) => {
  const product = {
    id,
    thumbnail: img,
    price,
    title,
    quantity:1
  };
  return (
    <div className="shadow-md max-w-[500px] h-[500px] flex flex-col justify-between border ">
      <div className="h-[85%] w-full">
        <Image
          alt="product"
          src={img}
          width={500}
          height={500}
          className="w-full h-full object-fill "
        />
      </div>
      <div className="text-left pt-2 flex flex-col justify-between gap-1 ml-2 mb-2 ">
        <p className="font-bold text-lg text-deepCrimson line-clamp-1">{title}</p>
        <p className="font-normal text-sm">{price} $</p>
        <AddToCartBtn product={product} />
      </div>
    </div>
  );
};

export default Card;
