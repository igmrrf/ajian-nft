import { FC } from "react";
import { cn } from "@/utils/tailwind-class";
import Image, { StaticImageData } from "next/image";
import Button from "../button";

interface GetCreditCard {
  collection: string,
  tag: string,
  path: StaticImageData,
  price: string,
}

const GetCredit: FC<GetCreditCard> = ({ collection, tag, path, price }) => {
  return (
    <div className={cn(" flex items-center flex-col border-t-2 border-nav")}>
      <div className='relative w-[250px] h-[250px]' >
        <Image
          src={path}
          alt={tag}
          fill
          className='object-cover overflow-hidden'
        />
      </div>
      <div className='w-full  flex flex-col border-t-2 border-r-2 bg-white border-l-2 border-b-2 border-default-border'>

        <div className='flex w-full py-2 justify-between items-center '>
          <div className="textext-left pl-2 text-nav-text text-sm">
            <span className="font-black text-xl uppercase">${price}</span>
            <span className="block text-card-text font-thin text-xs">{tag}</span>
          </div>
          <div className="flex flex-col justify-center items-center pr-2">
            <span className="text-card-text text-xs font-thin"> {collection} </span>
          </div>
        </div>
        <div className="flex justify-between w-full items-center">

          <div className='w-full flex px-2  py-2'>
            <div className='w-8 h-8 border border-black rounded-full'> </div>
            <div className='w-8 h-8 z-10 -ml-2 border border-black rounded-full'> </div>
            <div className='w-8 h-8 z-20 -ml-2 border border-black rounded-full'> </div>
          </div>
          <Button name="PURCHASE" className="bg-nav-button" />
        </div>
      </div>
    </div>
  )
}

export default GetCredit;
