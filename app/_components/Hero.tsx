"use client";
import { motion } from "framer-motion";
import { ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full bg-tealBlue mx-auto overflow-hidden">
      <div className="container max-w-screen-xl flex flex-col-reverse md:flex-row items-center gap-10 md:gap-0 md:justify-between pb-10 pt-24 md:pt-40  md:pb-24 md:px-5 mx-auto">
        <div className=" md:w-1/2 text-center md:text-left h-full flex-grow">
          <motion.div
            initial={{ scale: "0.2", opacity: 0 }}
            animate={{ scale: "1", opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-3 text-paleBeige sm:text-nowrap">
              Bold & Modern
            </h1>
            <h3 className=" text-pastelGreen text-base mb-12 mx-auto md:mx-0 w-[70%]  md:w-[85%] lg:w-[80%]">
              Shop the latest models and get unbeatable deals on mobile phones,
              laptops, and tablets. Discover cutting-edge technology at your
              fingertips!
            </h3>
          </motion.div>
          <motion.div
            initial={{ y: "100vh", scale: 8 }}
            animate={{ y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay:0.2,
              ease: "easeInOut",
            }}
          >
            <Link
              href={"/"}
              className="inline-flex bg-deepCrimson p-2 rounded-xl gap-2 text-xl md:text-2xl place-items-center text-paleBeige hover:text-sage transition-colors"
            >
              Shop Now
              <ShoppingBagIcon size={25} />
            </Link>
          </motion.div>
        </div>
        <div className="md:w-1/2 ">
          <Image
            src={"/devices1.svg"}
            alt="svg"
            width={600}
            height={300}
            className="mx-auto md:ml-auto w-full h-full"
            priority
          />
        </div>
      </div>

      {/* <Image
        alt="Hero"
        className="-z-20 relative"
        src={"/logan-gutierrez-2c7udssDpMI-unsplash.jpg"}
        priority
        fill
        quality={75}
      /> */}
      {/* <div className="absolute -z-10 backdrop-blur-sm inset-0 "></div> */}
    </section>
  );
};

export default Hero;
