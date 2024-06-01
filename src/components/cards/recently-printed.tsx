import { FC } from "react";
import { cn } from "@/utils/tailwind-class";
import Image, { StaticImageData } from "next/image";
// import { capitalizeFirst } from "@/utils/cap";

interface RecentCard {
  name: string;
  details: string;
  path: StaticImageData;
  time: string;
  inStock: boolean;
}

const RecentlyPrinted: FC<RecentCard> = ({ name, details, path, time, inStock }) => {
  return (
    <div className={cn(" flex items-center flex-col")}>
      <div className="relative w-[250px] h-[250px]">
        {!inStock && (
          <p className="bg-[#4B54A1] text-white py-1 px-2 uppercase z-10 top-5 left-5 text-sm font-bold rounded absolute">
            Out of stock{" "}
          </p>
        )}
        <Image src={path} alt={name} fill className="object-cover overflow-hidden" />
      </div>
      <div className="flex w-full py-2 justify-between border-r-2 border-l-2 bg-white border-b-2 border-default-border">
        <div className="text-left pl-2 text-nav-text text-sm">
          <span className="font-black text-xl uppercase">{name}</span>
          <span className="block text-card-text font-thin text-wrap">{details}</span>
        </div>
        <div className="flex justify-center items-center pr-2">
          <span className="text-card-text font-thin text-xs"> {time} </span>
        </div>
      </div>
    </div>
  );
};

export default RecentlyPrinted;
