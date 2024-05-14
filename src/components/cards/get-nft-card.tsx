import { FC } from "react";
import { cn } from "@/utils/tailwind-class";
import Image, { StaticImageData } from "next/image";
import { BsArrowRight } from "react-icons/bs";

interface GetNFTCardType {
  collection: string,
  tag: string,
  path: StaticImageData,
  price: string,
}

const GetNFTCard: FC<GetNFTCardType> = ({ collection, tag, path, price }) => {
  return (
    <div className={cn(" flex items-center flex-col -max-w-[320px] ")}>
      <div className='relative w-[200px] h-[250px]' >
        <Image
          src={path}
          alt={tag}
          // width={200}
          // height={150}
          layout="fill"
          className='object-cover overflow-hidden'
        />
      </div>
      <div className='flex w-full py-2 justify-between border-r-2 border-l-2 border-b-2 border-default-border'>
        <div className="textext-left pl-2 text-nav-text text-sm">
          <span className="font-black text-xl uppercase">${price}</span>
          <span className="block text-card-text font-thin text-wrap">{tag}</span>
        </div>
        <div className="flex flex-col justify-center items-center pr-2">
          <span className="text-card-text text-sm"> {collection} </span>
          <span className="text-card-text text-xl"> <BsArrowRight /></span>
        </div>
      </div>
    </div>
  )
}

export default GetNFTCard;
