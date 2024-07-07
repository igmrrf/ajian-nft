import type { Metadata } from "next";
import LocalFont from "next/font/local";
import NavBar from "@/components/navbar2";
import Footer from "@/components/footer";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Toaster } from "react-hot-toast";

const testFont = LocalFont({
  src: "./OpenSans-VariableFont_wdth,wght.ttf",
  display: "swap",
  variable: "--font-open-sans",
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
    <StoreProvider>
      <html lang="en" className={testFont.variable}>
        <body>
          <NavBar />
          <Toaster
            position="top-center"
            toastOptions={{
              // Define default options
              className: "",
              duration: 5000,
              style: {
                background: "#76F63A",
                color: "#00000",
              },
              success: {
                duration: 1500,
              },
            }}
          />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
