import React from "react";

const TermsOfService = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 md:px-36 px-5 space-y-10">
      <div className="border-nav w-full border-2 md:pl-10 px-3 flex flex-col py-10 justify-start items-start space-y-5">
        <h4 className="font-black md:text-5xl text-3xl uppercase">Terms of Service</h4>
        <p className="font-thin text-md"> Our Terms of Service</p>
      </div>
      <div className="w-full space-y-5">
        <p className="font-thin text-left">
          {" "}
          <span className="font-black">Last Updated: </span> 2024-06-04
        </p>
        <div className="w-full">
          <p className="w-full">
            {" "}
            We know that you care how information about you is used and shared, and we appreciate
            your trust that we will do so carefully and sensibly. This Privacy Notice describes how
            NFTPRO.com and its affiliates (collectively "NFTPRO") collect and process your personal
            information through NFTPRO websites, devices, products, services, online and physical
            stores, and applications that reference this Privacy Notice (together "NFTPRO "). By
            using NFTPRO Services, you are consenting to the practices described in this Privacy
            Notice. Please read our Additional State-Specific Privacy Disclosures and Consumer
            Health Data Privacy Disclosure for additional information about the processing of your
            personal data and your rights under applicable U.S. state data privacy laws.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
