import type { Metadata } from "next";
import LearnPage from "./learn-page";

export const metadata: Metadata = {
  title: "Learn | NFT PrintPro",
  description: "Print and ship NFTs world wide",
};

const page = () => {
  return (
    <div className="w-full">
      <LearnPage />
    </div>
  );
};

export default page;
