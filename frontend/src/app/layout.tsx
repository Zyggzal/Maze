import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DialogueProvider, { DialogueContext } from "@/contexts/dialogue";
import ItemProvider from "@/contexts/items";
import MainHeader from "@/components/headers/main-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maze",
  description: "A shallow look into a vibrant reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        <DialogueProvider>
          <ItemProvider>
            <MainHeader/>
            <div className="pt-30">
              {children}
            </div>
          </ItemProvider>
        </DialogueProvider>
      </body>
    </html>
  );
}
