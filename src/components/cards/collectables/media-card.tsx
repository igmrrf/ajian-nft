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
      <div className="relative w-[270px] h-[250px]">
        <Image src={path} alt={description} fill className="object-cover overflow-hidden" />
      </div>
      <div className="flex flex-col w-[270px] px-2 py-2 justify-between items-center border-r-2 bg-white border-l-2 border-b-2 border-default-border space-y-5 ">
<div className="w-full flex flex-col ">
<p className="text-md font-bold">{name}</p>
<p className="text-card-text text-sm font-bold ">{date}</p>
        </div>
        <div className="w-full flex justify-between items-center flex-row">
          <div className="flex gap-2">
            {tag.map((item,index)=> (
          <span key={index} className="px-2 py-[1px] bg-default-border rounded-sm text-card-text font-bold">{item}</span>
            ))}
          </div>
            <BsArrowRight size={25} className="text-card-text text-bold" />
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
