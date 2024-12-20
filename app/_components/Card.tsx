import Image from "next/image";
import React from "react";
interface Props {
  img: string;
  title: string;
  price: string;
}
const Card =  ({ img, price, title }: Props) => {
  return (
    <div className="shadow-md max-w-[500px] h-[400px] flex flex-col justify-between border ">
      <div className="h-[85%] w-full">
        <Image
          alt="product"
          src={img}
          width={500}
          height={500}
          className="w-full h-full object-fill "
        />
      </div>
      <div className="text-left pt-2 flex flex-col gap-1 ml-2 mb-2">
        <p className="font-bold text-lg text-deepCrimson">{title}</p>
        <p className="font-normal text-sm">{price} $</p>
      </div>
    </div>
  );
};

export default Card;
