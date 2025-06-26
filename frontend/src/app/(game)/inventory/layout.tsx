import type { Metadata } from "next";
import "../../globals.css";
import FoliageBackground from "@/components/foliageBackground/foliageBackground";

export const metadata: Metadata = {
  title: "Inventory"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FoliageBackground>
      {children}
    </FoliageBackground>
  );
}
