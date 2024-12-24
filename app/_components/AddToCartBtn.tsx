"use client";
import { useToast } from "@/hooks/use-toast";
import { CartItem, useCartStore } from "@/lib/useCartStore";
import { ShoppingCart } from "lucide-react";

const AddToCartBtn = ({ product }: { product: CartItem }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const { toast } = useToast();

  return (
    <button
      onClick={() => {
        addToCart(product);
        toast({
          description: <p className="text-base"><span className="font-bold text-deepCrimson">{product.title}</span>  has been added to your cart</p>,
        });
      }}
      className="bg-tealBlue text-paleBeige px-4 py-2 rounded hover:opacity-70"
    >
      Add to Cart <ShoppingCart className="inline-block w-4" />
    </button>
  );
};

export default AddToCartBtn;
