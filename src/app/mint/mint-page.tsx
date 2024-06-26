import Button from "@/components/button";
import RecentlyPrinted from "@/components/cards/recently-printed";
import { BsQuestionCircle } from "react-icons/bs";
import RecentCard from "/public/images/recent/2.png";

const MintPage = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 px-5 md:px-36 pb-20 space-y-10">
      <div className="border-nav w-full border-2 md:pl-10 px-3 flex flex-col py-10 justify-start items-start space-y-5">
        <h4 className="font-black md:text-5xl text-3xl ">MINT TO PRINT </h4>
        <p className="font-thin text-md">
          {" "}
          Get your NFT minted immediately and ready to go instantly!
        </p>
      </div>

      <div className="w-full flex flex-col-reverse justify-center items-start md:flex-row">
        <div className="w-full mt-10 md:mt-0 md:w-1/2 space-y-5">
          <div className="w-full flex justify-center items-center border-dashed border-nav border-2 py-10">
            <div className="w-full flex items-center justify-center flex-col">
              <span className="font-thin px-2 py-1 bg-nav rounded"> Add files</span>
              <label htmlFor="file" className="text-card-text">
                Accepts .gif .jpg and .png
              </label>
            </div>
            <input id="file" className="hidden" type="file" />
          </div>

          <div className="w-full">
            <label>Enter a name* </label>
            <div className="w-full border-nav border-2 flex items-center pr-2 text-nav">
              <input
                type="text"
                placeholder="Enter a Name for Your Placeholder"
                className="p-2 w-full outline-none focus:border-none border-none ring-0 focus:ring-0"
              />
              <BsQuestionCircle size={25} />
            </div>
          </div>

          <div className="w-full">
            <label>description </label>
            <textarea className="w-full border-nav border-2 p-2 outline-none h-[100px] focus:border-nav ring-0 focus:ring-0" />
          </div>
          <Button name="MINT NFT" className="bg-nav-button font-bold" />
        </div>

        <div className="w-full md:w-1/2 md:ml-5 py-10 bg-your-nft flex justify-center items-center">
          <RecentlyPrinted
            path={RecentCard}
            name="COOL LOOKING"
            details="MAGNET"
            time="16H AGO"
            inStock={true}
          />
        </div>
      </div>
    </div>
  );
};

export default MintPage;
