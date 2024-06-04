import type { Metadata } from "next";
import TermsOfServicePage from "./terms-of-service-page";

export const metadata: Metadata = {
  title: "Terms of Service | NFT PrintPro",
  description: "Print and ship NFTs world wide",
};

const page = () => {
  return (
    <div className="w-full">
      <TermsOfServicePage />
    </div>
  );
};

export default page;
