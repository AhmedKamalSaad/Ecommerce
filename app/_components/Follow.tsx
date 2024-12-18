"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow = () => {
  const images = ["/1.jpg", "/2.jpg", "/4.jpg", "/3.jpg"];
  return (
    <section className="w-full  flex flex-col   ">
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center mx-auto gap-4 py-24"
      >
        <h1 className="font-semibold text-3xl tracking-widest">FOLLOW US</h1>
        <Link
          href={"https://www.facebook.com/ahmedkamal157"}
          className=" text-xl text-red-800 hover:text-slate-950 transition-colors"
        >
          @AhmedKamal
        </Link>
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-4 px-5 items-center gap-4 justify-center">
        {images.map((m, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            key={i}
            className="w-full h-[400px] "
          >
            <Image
              key={i}
              alt="follow us"
              src={m}
              priority
              className="object-fill w-full h-full"
              width={500}
              height={500}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Follow;
