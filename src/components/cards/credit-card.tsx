'use client'
import { FC, useState } from "react";
import { cn } from "@/utils/tailwind-class";
import Image, { StaticImageData } from "next/image";
import { BsFillPlusSquareFill, BsFillDashSquareFill, BsTrash3 } from "react-icons/bs";


interface GetCreditCard {
  collection: string,
  name: string,
  path: StaticImageData,
  price: string,
}

const GetCredit: FC<GetCreditCard> = ({ collection, name, path, price }) => {

  let [counter, setCounter] = useState(1);
  const addCounter = () => { setCounter(counter + 1) }
  const redCounter = () => { setCounter(counter - 1) }

  return (
    <div className={cn("w-full flex items-center flex-col md:flex-row border-2 border-nav")}>

      <div className="w-full flex justify-center items-center p-1 ">
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
          <p className="text-card-text font-bold text-xl"> {collection}</p>
        </div>
      </div>
      {/* buttons and bin */}
      <div className="flex w-full justify-end pr-10 space-x-5 text-card-text">
        <div className="flex border-r-2 h-[50px] border-nav pr-10 items-center space-x-2">
          <span onClick={addCounter}> <BsFillPlusSquareFill size={25} /> </span>
          <span className="bg-nav px-3 py-1 text-coral font-bold rounded">{counter} </span>
          <span onClick={redCounter}> <BsFillDashSquareFill size={25} /></span>
        </div>
        <div className=" flex items-center">
          <span className="border-nav border p-2"> <BsTrash3 size={25} /></span>
        </div>
      </div>
    </div>
  )
}

export default GetCredit;
