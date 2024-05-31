import type { Metadata } from "next";
import LocalFont from "next/font/local"
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const testFont = LocalFont({
  src: './OpenSans-VariableFont_wdth,wght.ttf',
  display: 'swap',
  variable: '--font-open-sans',
})


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
    <html lang="en" className={testFont.variable}>
      <body>
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
