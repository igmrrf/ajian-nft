import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-open-sans'
});

export const metadata: Metadata = {
  title: "Home | NTF Print Pro",
  description: "Instantly print your NFT and have it delivered in a week",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="font-sans">
        <NavBar />
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
