import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import React from "react";

interface Props {
  category: string;
  img: string;
  alt: string;
}
const Loading = async ({ category, img, alt }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section className="container max-w-screen-xl  mx-auto  md:px-5 ">
      <div className="flex mx-auto w-full justify-center items-center gap-5 py-24 bg-tealBlue">
        <h1 className="text-4xl font-bold tracking-widest text-paleBeige">
          {category}
        </h1>
        <Image src={img} alt={alt} width={50} height={50} />
      </div>
      <div className=" w-full mx-auto flex flex-col">
        <div className="mt-4 space-y-2">
          <p className="font-medium text-sm">PRICE</p>
          <Skeleton className="w-[150px] h-[20px] " />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6">
          {skeletons.map((p, i) => (
            <Skeleton className="shadow-md max-w-[500px] h-[350px]" key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loading;
