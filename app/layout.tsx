import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <header className='bg-[#355872] text-center py-8'>
        <p>この表示は仮headerタグに記載したテキストです。</p>
        
        </header>
        {children}
        <footer className='bg-[#355872] text-center py-8'>
          <p>この表示は仮footerタグに記載したテキストです。</p>
        </footer>
      </body>
    </html>
  );
}
