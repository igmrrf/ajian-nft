import { FC } from "react";
import { cn } from "@/utils/tailwind-class";
import Image, { StaticImageData } from "next/image";
// import { capitalizeFirst } from "@/utils/cap";


interface RecentCard {
  name: string,
  details: string,
  path: StaticImageData,
  time: string
}

const RecentlyPrinted: FC<RecentCard> = ({ name, details, path, time }) => {
  return (
    <div className={cn(" flex items-center flex-col  ")}>
      <div className='relative w-[200px] h-[250px]' >
        <Image
          src={path}
          alt={name}
          // width={200}
          // height={150}
          fill
          className='object-cover overflow-hidden'
        />
      </div>
      <div className='flex md:w-full py-2 justify-between border-r-2 border-l-2 border-b-2 border-default-border'>
        <div className="text-left pl-2 text-nav-text text-sm">
          <span className="font-black text-xl uppercase">{name}</span>
          <span className="block text-card-text font-thin text-wrap">{details}</span>
        </div>
        <div className="flex justify-center items-center pr-2">
          <span className="text-card-text text-sm"> {time} </span>
        </div>
      </div>
    </div>
  )
}

export default RecentlyPrinted;
