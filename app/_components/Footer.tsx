"use client";
import { motion } from "framer-motion";
import { LucideTabletSmartphone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const longText = `Discover cutting-edge laptops, mobile devices, and tablets
   at unbeatable prices. Experience quality, innovation,
   and top-notch customer service.`;
  const lines = longText.split("\n");

  return (
    <div className="flex flex-col justify-center items-center bg-slate-200 py-10 gap-8 *:mx-auto">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-4xl text-red-700 flex items-center gap-2 font-black">
          <LucideTabletSmartphone size={40} /> Electronics
        </h1>
        <div style={{ width: "500px", textAlign: "center" }}>
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              style={{ marginBottom: "4px" }}
            >
              {line}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 text-lg tracking-widest">
        <Link
          className="hover:text-red-700 focus-visible:text-red-700 focus-visible:outline-none"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="hover:text-red-700 focus-visible:text-red-700 focus-visible:outline-none"
          href={"/"}
        >
          Labtops
        </Link>
        <Link
          className="hover:text-red-700 focus-visible:text-red-700 focus-visible:outline-none"
          href={"/"}
        >
          Tablets
        </Link>
        <Link
          className="hover:text-red-700 focus-visible:text-red-700 focus-visible:outline-none"
          href={"/"}
        >
          Mobiles
        </Link>
      </div>
    </div>
  );
};

export default Footer;
