import type { Metadata } from "next";
import ConnectPage from "./connect-page";

export const metadata: Metadata = {
  title: "Connect | NFT PrintPro",
  description: "Print and ship NFTs world wide",
};

const page = () => {
  return (
    <div className="w-full">
      <ConnectPage />
    </div>
  );
};

export default page;
