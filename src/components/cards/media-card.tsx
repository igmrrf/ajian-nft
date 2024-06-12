import { FC } from "react";
import { cn } from "@/utils/tailwind-class";
import Image, { StaticImageData } from "next/image";
import { BsArrowRight } from "react-icons/bs";

interface GetMediaNft{
  name: string;
  date: string;
  path: StaticImageData;
  tag: string[];
  description:string;
}

const MediaCard: FC<GetMediaNft> = ({ name, tag, path, date , description}) => {
  return (
    <div className={cn(" flex items-center flex-col hover:border-b-[#EB631D] hover:border-b-2")}>
      <div className="relative w-[250px] h-[250px]">
        <Image src={path} alt={description} fill className="object-cover overflow-hidden" />
      </div>
      <div className="flex flex-row w-full py-2 justify-between items-center border-r-2 bg-white border-l-2 border-b-2 border-default-border ">
<div className="w-full flex-col flex ">
          <p className="text-2xl font-bold">{name}</p>
          <p className="text-card-text font-bold">{date}</p>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          {tag.map((item,index)=> (
          <p key={index} className="bg-nav-text text-white">{item}</p>
          ))}

          <p className="bg-nav-text text-white">wow</p>
            <BsArrowRight size={25} className="hover:text-[#EB631D] text-bold" />
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
