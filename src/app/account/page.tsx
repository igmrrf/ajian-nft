import AccountPage from "./account-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Settings | NFT PrintPro",
  description: "Print and ship NFTs world wide",
};

const page = () => {
  return (
    <div className="w-full">
      <AccountPage />
    </div>
  );
};

export default page;
