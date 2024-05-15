import { FC } from "react";
import { cn } from "@/utils/tailwind-class";
import Image, { StaticImageData } from "next/image";
import { BsArrowRight } from "react-icons/bs";

interface ShopCardProp {
  collection: string,
  tag: string,
  path: StaticImageData,
  price: string,
}

const ShopCard: FC<ShopCardProp> = ({ collection, tag, path, price }) => {
  return (
    <div className={cn(" flex items-center flex-col ")}>
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
      <div className='flex w-full py-2 justify-between items-center border-r-2 bg-white border-l-2 border-b-2 border-default-border'>
        <div className="textext-left pl-2 text-nav-text text-sm">
          <span className="font-black text-xl uppercase">${price}</span>
          <span className="block text-card-text font-thin text-xs">{tag}</span>
        </div>
        <div className="flex flex-col justify-center items-center pr-2">
          <span className="text-card-text text-xs font-thin"> {collection} </span>
          <span className="text-card-text text-xl"> <BsArrowRight size={25} /></span>
        </div>
      </div>
    </div>
  )
}

export default ShopCard;
