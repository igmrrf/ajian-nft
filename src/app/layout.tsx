import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={openSans.className}>
        <NavBar />
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
