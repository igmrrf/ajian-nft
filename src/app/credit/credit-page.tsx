import Button from "@/components/button";
import GetCredit from "@/components/cards/credit-card";
import React from "react";
import money from "../../../public/credit.png";

const CreditPage = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 md:px-36 px-5 pb-20 space-y-10">
      <div className="w-full  border-coral  border-2 px-10 flex flex-col justify-start items-start space-y-5">
        <p className="text-sm font-thin pt-5">Overview</p>
        <div className="w-full flex-col space-y-5 flex md:flex-row justify-between py-10 items-center">
          <h4 className="text-3xl md:text-4xl font-black">$245 Available credits </h4>
          <div className="flex  flex-col md:flex-row gap-5">
            <Button name="Get Credits" className="bg-[#9594C8] text-footer font-black " />
            <Button name="Redeem Credits" className="bg-nav-button font-black" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row justify-between flex-wrap">
        <GetCredit collection="1,500" tag="15% DISCOUNT" price="250 Credits" path={money} />
        <GetCredit collection="1,500" tag="15% DISCOUNT" price="500 Credits" path={money} />
        <GetCredit collection="1,500" tag="15% DISCOUNT" price="1000 Credits" path={money} />
      </div>
    </div>
  );
};

export default CreditPage;
