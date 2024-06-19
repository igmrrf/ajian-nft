import { FC } from "react";
import { cn } from "@/utils/tailwind-class";
import Image, { StaticImageData } from "next/image";
import { BsArrowRight } from "react-icons/bs";

const LazyCard = () => {
  return (
    <div
      className={cn(
        "animate-pulse flex items-center flex-col hover:border-b-[#EB631D] hover:border-b-2",
      )}
    >
      <div className="relative w-[250px] h-[250px] bg-card-text">
        {/* <Image src={path} alt={description} fill className="object-cover overflow-hidden" /> */}
      </div>
      <div className="flex flex-col w-full py-2 justify-between items-center border-r-2 bg-white border-l-2 border-b-2 border-default-border ">
        <div className="w-full flex-col flex ">
          <div className="h-2 bg-card-text rounded w-2/3"></div>
          <div className="h-2 bg-card-text rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
};

export default LazyCard;
