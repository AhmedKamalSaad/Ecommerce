"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Props {
  img: string;
  className?: string;
  url: string;
  text: string;
  x?: string;
}
const Section = ({ img, className, url, text, x }: Props) => {
  return (
    <section
      className={`w-full mx-auto flex flex-col md:flex-row  h-[75vh] bg-slate-100 ${className}`}
    >
      <Image
        alt="laptops"
        src={img}
        priority
        width={1000}
        height={1000}
        className="md:w-1/2 w-full h-1/2 md:h-full object-cover"
      />
      <motion.div
        initial={{ opacity: 0 , x:x }}
        whileInView={{ opacity: 1 ,x:0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{once:true}}
        className="md:w-1/2 w-full h-1/2 md:h-full flex flex-col gap-7 items-center justify-center break-all"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide"> {text}</h1>
        <Link
          href={url}
          className="border text-white border-black bg-black hover:bg-opacity-70  p-2 text-lg md:text-2xl lg:text-3xl font-bold"
        >
          SHOP NOW
        </Link>
      </motion.div>
    </section>
  );
};
export default Section;
