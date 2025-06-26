import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DialogueProvider from "@/contexts/dialogue";
import ItemProvider from "@/contexts/items";
import MainHeader from "@/components/headers/main-header";
import PopupProvider from "@/contexts/popup";
import UserProvider from "@/contexts/user";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false
});

export const metadata: Metadata = {
  title: "Maze",
  description: "A shallow look into a vibrant reality.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        <PopupProvider>
          <UserProvider>
            <DialogueProvider>
              <ItemProvider>
                <MainHeader/>
                  <div className="pt-30 h-full">
                    {children}
                  </div>
              </ItemProvider>
            </DialogueProvider>
          </UserProvider>
        </PopupProvider>
      </body>
    </html>
  );
}
