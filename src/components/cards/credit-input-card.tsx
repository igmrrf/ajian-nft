import { BsQuestionCircle } from "react-icons/bs";
import { FC } from "react";
import { cn } from "@/utils/tailwind-class";
import Image, { StaticImageData } from "next/image";
import Button from "../button";
import pfp from "/public/images/profile_images/1.png";

interface CreditInputT{
  path: StaticImageData;
  price: string;
}

const CreditInput: FC<CreditInputT> = ({  path, price }) => {
  return (
    <div className={cn(" flex items-center flex-col border-t-2 border-nav")}>
      <div className="relative w-full h-[250px]">
        <Image src={path} alt={price} fill className="object-cover overflow-hidden" />
      </div>
      <div className="w-full  flex px-3 flex-col space-y-5 py-3 border-t-2 border-r-2 bg-white border-l-2 border-b-2 border-default-border">
            <div className="w-full  ">
              <div className="w-full border-nav border-2 flex items-center pr-2 text-nav">
                <input
                  type="text"
                  placeholder="Enter number"
                  className="p-[2px] w-full outline-none focus:border-none border-none ring-0 focus:ring-0"
                />
                <BsQuestionCircle size={25} />
              </div>
            </div>
        <div className="flex justify-between w-full items-center">
          <Button name="PURCHASE" className="bg-nav-button text-sm font-black" />
          <p className="text-footer font-bold">${price} </p>
        </div>
      </div>
    </div>
  );
};

export default CreditInput;
