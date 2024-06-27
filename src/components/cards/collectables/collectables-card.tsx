import { FC } from "react";
import { cn } from "@/utils/tailwind-class";
import Image, { StaticImageData } from "next/image";

interface CollectionsType {
  name: string;
  details: string;
  path: StaticImageData;
}

const CollectionsCard: FC<CollectionsType> = ({ name, details, path }) => {
  return (
    <div className={cn(" flex items-center flex-col mb-5")}>
      <div className="relative w-[250px] h-[250px]">
        <Image src={path} alt={name} fill className="object-cover overflow-hidden" />
      </div>
      <div className="flex flex-col w-[250px] py-2 justify-between border-r-2 border-l-2 bg-white border-b-2 border-default-border">
        <div className="text-left pl-2 text-nav-text text-sm">
          <span className="font-black text-xl uppercase">{name}</span>
          <span className="block text-card-text font-thin text-wrap">{details}</span>
        </div>
      </div>
    </div>
  );
};

export default CollectionsCard;
