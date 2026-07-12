import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from './_components/Footer'
import Header from './_components/Header'
import {auth} from "@/lib/auth";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnowMap",
  description: "SnowManの聖地巡礼マップ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen">
        <Header session={session}/>
        <div className="flex-grow bg-gray-100">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
