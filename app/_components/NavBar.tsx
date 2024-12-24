"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import {
  Grid3X3,
  HomeIcon,
  Laptop,
  LucideSmartphone,
  TabletSmartphoneIcon,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import SheetCart from "./SheetCart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 50);
      lastYRef.current = y;
    }
  });
  return (
    <motion.div
      whileHover={"visible"}
      onFocusCapture={() => setIsHidden(false)}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3 }}
      variants={{
        hidden: { y: "-90%" },
        visible: {
          y: "0%",
        },
      }}
      className="fixed top-0 pt-3 z-10 w-full flex justify-center px-4"
    >
      <nav className="max-w-[450px]  w-full flex flex-wrap justify-evenly shadow-2xl text-paleBeige *:py-1 *:px-2  rounded-3xl  bg-tealBlue py-4 *:border *:rounded-xl *:transition-colors *:duration-300 hover:*:bg-paleBeige hover:*:text-deepCrimson   focus-visible:*:bg-gray-200 focus-visible:*:outline-none focus-visible:*:text-deepCrimson">
        <Link href={"/"} title="Home" className=" flex items-end gap-2">
          <HomeIcon />
          <p className="hidden text-sm font-semibold sm:block">Home</p>
          <span className="sr-only">Home</span>
        </Link>
        <ProductMenu />
        <SheetCart />
      </nav>
    </motion.div>
  );
};

export default NavBar;

const ProductMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div title="Products" className=" flex items-end gap-2">
          <Grid3X3 />
          <span className="sr-only">Products</span>
          <p className="hidden text-sm font-semibold sm:block">Products</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-tealBlue">
        <DropdownMenuItem>
          <Link
            href={"/mobiles"}
            title="Mobiles"
            className=" flex items-end gap-2"
          >
            <LucideSmartphone />
            <span className="sr-only">Mobiles</span>
            <p className="hidden text-sm font-semibold sm:block">Mobiles</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-red-200">
          <Link
            href={"/tablets"}
            title="Tablets"
            className=" flex items-end gap-2"
          >
            <TabletSmartphoneIcon />
            <span className="sr-only">Tablets</span>
            <p className="hidden text-sm font-semibold sm:block">Tablets</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href={"/laptops"}
            title="Laptops"
            className=" flex items-end gap-2"
          >
            <Laptop />
            <span className="sr-only">Laptops</span>
            <p className="hidden text-sm font-semibold sm:block">Laptops</p>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
