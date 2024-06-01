import { FC } from "react";
import { cn } from "@/utils/tailwind-class";
import Image, { StaticImageData } from "next/image";
import { BsArrowRight } from "react-icons/bs";

interface OrderSummaryType {
  collection: string;
  tag: string;
  path: StaticImageData;
  price: string;
}

const OrderSummary: FC<OrderSummaryType> = ({ collection, tag, path, price }) => {
  return (
    <div className={cn("flex items-center flex-col border-2 border-nav")}>
      <div className="m-2 flex flex-row">
        {/* Image */}
        <div className="relative w-[150px] h-[120px] mr-5">
          <Image src={path} alt={tag} fill className="object-cover" />
        </div>
        {/* order info */}
        <div className="flex-col flex items-start justify-center space-y-2 pt-3">
          <span className="bg-card-text px-3 py-[1px] font-bold  text-coral"> ${price}.00</span>
          <p className="font-black text-coral text-xl">{tag} </p>
          <p className="text-card-text font-bold text-md md:text-xl uppercase"> {collection}</p>
          <p className="text-card-text font-bold text-md md:text-xl uppercase">QTY: 1</p>
        </div>
      </div>
      <div className=" w-full border-t-2  border-nav flex flex-row items-start justify-between py-3 font-black text-coral px-5">
        <p> TOTAL</p>
        <p> $25</p>
      </div>
    </div>
  );
};

export default OrderSummary;
