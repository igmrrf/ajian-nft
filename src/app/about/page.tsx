import type { Metadata } from "next";
import About from "./about-page";

export const metadata: Metadata = {
  title: "About | NFT PrintPro",
  description: "Print and ship NFTs world wide",
};

const page = () => {
  return (
    <div className="w-full">
      <About />
    </div>
  );
};

export default page;
