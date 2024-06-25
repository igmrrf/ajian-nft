import { FC } from "react";
import { cn } from "@/utils/tailwind-class";
import Image, { StaticImageData } from "next/image";
import Button from "../button";

interface YourNFTCardType {
  name: string;
  path: StaticImageData;
}

const YourNftCard: FC<YourNFTCardType> = ({ name, path }) => {
  return (
    <div className={cn(" flex items-center flex-col mb-5")}>
      <div className="relative w-[250px] h-[250px]">
        <Image src={path} alt={name} fill className="object-cover overflow-hidden" />
      </div>
      <div className="flex flex-col w-[250px]  py-2 justify-between border-r-2 border-l-2 border-b-2 border-your-nft bg-your-nft">
        <div className="text-left pl-2 text-nav-text text-sm">
          <span className="font-black flex flex-col text-xl uppercase">{name}</span>
          {/* <span className="block text-card-text font-thin text-wrap">{details}</span> */}
          <Button name="Print Now" className="text-card-text font-black" />
        </div>
      </div>
    </div>
  );
};

export default YourNftCard;
