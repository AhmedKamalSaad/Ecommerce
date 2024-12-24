import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import React from "react";
import Cart from "./Cart";

const SheetCart = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div title="Cart" className=" flex items-end gap-2">
          <ShoppingCart />
          <p className="hidden text-sm font-semibold sm:block">Cart</p>
          <span className="sr-only">Cart</span>
        </div>
      </SheetTrigger>
      <SheetContent className="bg-paleBeige overflow-y-scroll">
        <SheetHeader>
          <SheetTitle className="text-center text-2xl font-black">
            Cart
          </SheetTitle>
        </SheetHeader>
        <Cart />
      </SheetContent>
    </Sheet>
  );
};

export default SheetCart;
