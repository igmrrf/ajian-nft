import { FC } from "react";
import { cn } from "@/utils/tailwind-class";
import Image, { StaticImageData } from "next/image";
import Button from "../button";
import pfp from "/public/images/profile_images/1.png";

interface GetCreditCard {
  collection: string;
  tag: string;
  path: StaticImageData;
  price: string;
}

const GetCredit: FC<GetCreditCard> = ({ collection, tag, path, price }) => {
  return (
    <div className={cn(" flex items-center flex-col border-t-2 border-nav")}>
      <div className="relative w-full h-[250px]">
        <Image src={path} alt={tag} fill className="object-cover overflow-hidden" />
      </div>
      <div className="w-full  flex flex-col border-t-2 border-r-2 bg-white border-l-2 border-b-2 border-default-border">
        <div className="flex w-full py-2 justify-between items-center ">
          <div className="textext-left pl-2 text-nav-text text-sm">
            <span className="font-black text-xl uppercase">{price}</span>
            <span className="block text-card-text font-normal text-sm">{tag}</span>
          </div>
          <div className="flex flex-col justify-center items-center pr-2">
            <span className="text-card-text text-sm font-normal"> ${collection} </span>
          </div>
        </div>
        <div className="flex justify-center w-full items-center px-2">
          <div className="w-full flex pr-2  py-2">
            <div className="w-8 h-8 rounded-full relative">
              <Image fill src={pfp} alt="M" className="overflow-hidden object-cover" />
            </div>
            <div className="w-8 h-8 z-10 -ml-2  rounded-full relative">
              <Image fill src={pfp} alt="M" className="overflow-hidden object-cover" />
            </div>
            <div className="w-8 h-8 z-20 -ml-2 rounded-full relative">
              <Image fill src={pfp} alt="M" className="overflow-hidden object-cover" />
            </div>
          </div>
          <p className="text-card-text  pr-2"> +3</p>
          <Button name="PURCHASE" className="bg-nav-button text-sm font-bold" />
        </div>
      </div>
    </div>
  );
};

export default GetCredit;
