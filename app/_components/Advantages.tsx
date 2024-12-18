'use client'
import { motion } from "framer-motion";
import { CarIcon, DollarSign, LockKeyhole, PhoneCall } from "lucide-react";
import { ReactNode } from "react";

const Advantages = () => {
  const array: { h: string; p: string; icon: ReactNode }[] = [
    { h: "Free Shipping", p: "Order above $200", icon: <CarIcon size={50} /> },
    { h: "Money-back", p: "30 days guarantee", icon: <DollarSign size={50} /> },
    {
      h: "Secure Payments",
      p: "Secured by Stripe",
      icon: <LockKeyhole size={50} />,
    },
    {
      h: "24/7 Support",
      p: "Phone and Email support",
      icon: <PhoneCall size={50} />,
    },
  ];
  return (
    <section className="max-w-screen-xl grid grid-cols-2 md:grid-cols-4 gap-2  px-4 md:px-2 mx-auto items-center my-4 md:my-9  ">
  {array.map((a,i)=>(
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1, delay: i * 0.1 ,ease:'easeOut'}}
    viewport={{ once: true }}
     key={i} className="bg-slate-200 text-black flex flex-col items-start justify-center gap-3 p-4 h-[200px]">
    {a.icon}
    <h1 className="font-semibold text-2xl">{a.h}</h1>
    <p className="text-slate-500 text-sm">{a.p}</p>
  </motion.div>
  ))}
     
    </section>
  );
};

export default Advantages;
