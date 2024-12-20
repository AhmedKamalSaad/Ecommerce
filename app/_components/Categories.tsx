'use client'
import {motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  const array = [
    { img: "/laptop (2).svg", category: "Laptops" },
    { img: "/mobile (2).svg", category: "Mobiles" },
    { img: "/tablet (2).svg", category: "Tablets" },
  ];
  return (
    <section className="container max-w-screen-xl py-16 relative mx-auto md:px-5 ">
      <div className="flex flex-col mx-auto w-full items-center gap-16">
        <h1 className="text-4xl font-medium tracking-wider text-engOrange">Categories</h1>
        <Link href={'/'} className="flex flex-nowrap flex-col md:flex-row gap-3 justify-between w-full ">
          {array.map((a, i) => (
            <motion.div
            viewport={{once:true}}
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{ease:'easeIn',duration:0.9,delay:i*0.2}}
              key={i}
              className="flex flex-col gap-4 items-center justify-center"
            >
              <Image width={200} height={200} alt="category" src={a.img} className=" hover:animate-spin" />
              <h2 className="text-2xl font-light tracking-wide">{a.category}</h2>
            </motion.div>
          ))}
        </Link>
      </div>
    </section>
  );
};

export default Categories;
