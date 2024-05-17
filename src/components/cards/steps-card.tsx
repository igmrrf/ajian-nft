import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/utils/tailwind-class";


interface TipsCard {
  title: string
  details: string
  number: string
  path: StaticImageData
  className: string
}

const StepsCard: FC<TipsCard> = ({ title, details, path, number, className }) => {
  return (
    <div className={cn("flex py-5 flex-col md:flex-row space-y-5 justify-between bg-white w-full", className)}>
      <div className="flex flex-col items-start px-10 justify-start space-y-5 w-full md:w-[500px]">
        <span className="p-1 bg-footer  text-white rounded">Step#{number} </span>
        <h4 className="text-5xl font-black ">{title} </h4>
        <p className="text-md block md:pr-10"> {details} </p>
      </div>
      <div className="relative  h-[300px] md:w-[350px] w-full">
        <Image
          src={path}
          fill
          alt={title} />
      </div>
    </div>
  )
}

export default StepsCard;
