'use client'
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/useCartStore";
import { HeartCrack, X } from "lucide-react";
import Image from "next/image";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
    useCartStore();

  return (
    <div>
      {items.length === 0 ? (
        <p className="mt-5">Your cart is empty.... <HeartCrack className="inline-block text-red-900"/></p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className=" mb-5 w-full border-tealBlue p-3 flex gap-4 justify-between">
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={100}
                height={100}
                className="object-cover w-[75px]"
                
              />
              <div className="flex flex-col w-[100px] ">
                <div className="flex flex-col ">
                  <h3 className="font-bold">{item.title}</h3>
                  <p>{item.price} $</p>
                </div>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                  min="1"
                  className="bg-transparent pl-1 w-[90px] border border-tealBlue"
                />
              </div>
              <button onClick={() => removeFromCart(item.id)}><X className=" hover:text-red-500 text-deepCrimson" /></button>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
            <Button onClick={clearCart} className="bg-deepCrimson" variant={'destructive'}>Clear Cart</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
