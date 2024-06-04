import type { Metadata } from "next";
import PrivacyPolicyPage from "./privacy-policy-page";

export const metadata: Metadata = {
  title: "Privacy & Policy | NFT PrintPro",
  description: "Print and ship NFTs world wide",
};

const page = () => {
  return (
    <div className="w-full">
      <PrivacyPolicyPage />
    </div>
  );
};

export default page;
