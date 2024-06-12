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
      <div className="flex w-full py-2 justify-between items-center border-r-2 bg-white border-l-2 border-b-2 border-default-border ">
            <BsArrowRight size={25} className="hover:text-[#EB631D] text-bold" />
      </div>
    </div>
  );
};

export default MediaCard;
