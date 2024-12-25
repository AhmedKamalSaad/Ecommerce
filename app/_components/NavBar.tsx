"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import classNames from "classnames";

import {
  Grid3X3,
  HomeIcon,
  Laptop,
  LucideSmartphone,
  TabletSmartphoneIcon,
} from "lucide-react";
import Link from "next/link";
import { ReactNode, useRef, useState } from "react";
import SheetCart from "./SheetCart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

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
  const path = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`${
          (path.includes("/mobiles") ||
            path.includes("/tablets") ||
            path.includes("/laptops")) &&
          "bg-paleBeige text-deepCrimson"
        }`}
      >
        <div title="Products" className=" flex items-end gap-2">
          <Grid3X3 />
          <span className="sr-only">Products</span>
          <p className="hidden text-sm font-semibold sm:block">Products</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-tealBlue">
        <ActiveLink
          href="/mobiles"
          title="Mobiles"
          icon={<LucideSmartphone />}
        />
        <ActiveLink
          href="/tablets"
          title="Tablets"
          icon={<TabletSmartphoneIcon />}
        />
        <ActiveLink href="/laptops" title="Laptops" icon={<Laptop />} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const ActiveLink = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: ReactNode;
}) => {
  const path = usePathname();

  const isActive = path === href;

  return (
    // <Link
    //   href={href}
    //   title={title}
    //   className={classNames({
    //     "flex items-end gap-2 w-full": true,
    //     "bg-paleBeige text-deepCrimson": isActive,
    //   })}
    // >
    //   {icon}
    //   <span className="sr-only">{title}</span>
    //   <p className="hidden text-sm font-semibold sm:block">{title}</p>
    // </Link>
    <DropdownMenuItem
      className={classNames({
        "bg-paleBeige text-deepCrimson": isActive,
      })}
    >
      <Link href={href} title={title} className="flex items-end gap-2 w-full">
        {icon}
        <span className="sr-only">{title}</span>
        <p className="hidden text-sm font-semibold sm:block">{title}</p>
      </Link>
    </DropdownMenuItem>
  );
};
