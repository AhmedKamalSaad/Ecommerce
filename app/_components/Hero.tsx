"use client";
import { motion } from "framer-motion";
import { ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-screen-2xl mx-auto flex  items-center justify-center h-screen text-white overflow-hidden">
      <div className="mx-auto flex items-center justify-center flex-col gap-7 mt-36">
        <motion.div
          initial={{ scale: "0.2", opacity: 0 }}
          animate={{ scale: "1", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col gap-1 items-center"
        >
          <h1 className="text-7xl tracking-widest font-black text-center">
            Bold & <span className="inline-block text-red-700">Modern</span>
          </h1>
          <h3 className=" text-slate-200 text-xl">
          Your One-Stop Tech Shop meaning
          </h3>
        </motion.div>
        <motion.div
          initial={{ y: "100vh", scale: 8 }}
          animate={{ y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut"
          }}
        
        >
          <Link
            href={"/"}
            className="flex bg-slate-950 p-2 rounded-xl gap-2 text-2xl place-items-center hover:bg-opacity-75"
          >
            Shop Now
            <ShoppingBagIcon className="text-red-700" size={25} />
          </Link>
        </motion.div>
      </div>
      <Image
        alt="Hero"
        className="-z-20 relative"
        src={"/dlxmedia-hu-uaJqyUVIpmM-unsplash.jpg"}
        priority
        fill
      />
      <div className="absolute -z-10 backdrop-blur-sm inset-0 "></div>
    </section>
  );
};

export default Hero;
