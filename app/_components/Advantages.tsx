"use client";
import { CarIcon, DollarSign, LockKeyhole, PhoneCall } from "lucide-react";
import { ReactNode } from "react";

const Advantages = () => {
  const array: { h: string; p: string; icon: ReactNode }[] = [
    { h: "Free Shipping", p: "Order above $200", icon: <CarIcon size={50} /> },
    { h: "Money-back", p: "30 days guarantee", icon: <DollarSign size={50} /> },
    {
      h: "Secure Payments",
      p: "Secured by Stripe",
      icon: <LockKeyhole size={50}  />,
    },
    {
      h: "24/7 Support",
      p: "Phone and Email support",
      icon: <PhoneCall size={50} />,
    },
  ];
  return (
    <section className=" container pb-16 relative px-2  max-w-screen-xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-7 lg:gap-14  mx-auto items-center">
      {array.map((a, i) => (
        <div
         
          key={i}
          className=" border border-black/30 shadow-lg  rounded-3xl  flex flex-col items-start justify-center gap-3 p-4 h-[200px]"
        >
          {a.icon}
          <h1 className="font-semibold text-2xl text-deepCrimson">{a.h}</h1>
          <p className="text-black text-sm">{a.p}</p>
        </div>
      ))}
    </section>
  );
};

export default Advantages;
