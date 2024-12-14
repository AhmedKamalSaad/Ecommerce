"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow = () => {
  return (
    <section className="w-full bg-slate-100 flex flex-col  ">
      <motion.div
        initial={{ opacity: 0, x: '-100%' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center mx-auto gap-4 py-14"
      >
        <h1 className="font-semibold text-3xl tracking-widest">FOLLOW US</h1>
        <Link
          href={"https://www.facebook.com/ahmedkamal157"}
          className=" text-xl text-red-800 hover:text-slate-950 transition-colors"
        >
          @AhmedKamal
        </Link>
      </motion.div>

      <Image
        alt="follow us"
        src={"/follow.jpg"}
        priority
        className="w-full h-[400px] object-cover"
        width={1000}
        height={500}
      />
    </section>
  );
};

export default Follow;
