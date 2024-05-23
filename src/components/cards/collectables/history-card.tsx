'use client'
import { FC, useState } from "react";
import { cn } from "@/utils/tailwind-class";
import Image, { StaticImageData } from "next/image";


interface CollectablesHistoryTypes {
  collection: string,
  name: string,
  path: StaticImageData,
  price: string,
  date: string,
}

const CollectablesHistory: FC<CollectablesHistoryTypes> = ({ collection, name, path, price, date }) => {


  return (
    <div className={cn("w-full flex items-center justify-between flex-row border-2 border-nav")}>

      <div className=" flex justify-center items-center p-1 ">
        {/* Image */}
        <div className="relative w-[150px] h-[120px] mr-5">
          <Image
            src={path}
            alt={name}
            fill
            className="object-cover" />
        </div>
        <div className="flex-col flex items-start justify-center space-y-2">
          <span className="bg-card-text px-3 py-[1px] font-bold  text-coral"> ${price}.00</span>
          <p className="font-black text-coral text-md">{name} </p>
          <p className="text-card-text font-bold text-md md:text-xl"> {collection}</p>
        </div>
      </div>
      {/* buttons and bin */}
      <div className="flex flex-col w-full justify-between md:justify-end px-5 md:px-0 md:pr-10 space-x-5 text-card-text">
        <p className="font-bold text-card-text"> Publish Date</p>
        <p className="text-xl font-bold">{date}</p>
      </div>
    </div>
  )
}

export default CollectablesHistory;
