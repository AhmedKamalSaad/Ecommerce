import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";
import { Toaster } from "@/components/ui/toaster";

const fontRoboto = Roboto({
  variable: "--font-Roboto",
  subsets: ["latin"],
  weight: ["100" , "300" , "400" , "500" , "700" , "900"]
});


export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Ecommerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-y-scroll">
      <body
        className={`${fontRoboto.className} antialiased overflow-x-hidden w-full bg-pastelGreen`}
      >
        <NavBar/>

        {children}

        <Footer/>
        <Toaster />

      </body>
    </html>
  );
}
