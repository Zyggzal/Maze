import type { Metadata } from "next";
import "../../globals.css";
import "./style.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Inventory"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" h-full">
        <div className="relative z-1 px-40">
            {children}
        </div>
        <Image
          className="fixed bottom-0 left-0"
          src={'/images/backgrounds/basic/BorderBasicBottom.png'}
          alt="Bottom Border"
          width={500}
          height={500}
          />
          <Image
            className="fixed top-30 right-0"
            src={'/images/backgrounds/basic/BorderBasicTop.png'}
            alt="Bottom Border"
            width={500}
            height={500}
          />
    </div>
  );
}
