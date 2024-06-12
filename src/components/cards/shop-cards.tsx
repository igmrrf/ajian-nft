import { FC } from "react";
import { cn } from "@/utils/tailwind-class";
import Image, { StaticImageData } from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

interface ShopCardProp {
  collection: string;
  tag: string;
  path: StaticImageData;
  price: string;
  inStock?: boolean;
}

const ShopCard: FC<ShopCardProp> = ({ collection, tag, path, price, inStock }) => {
  return (
    <div className={cn(" flex items-center flex-col ")}>
      <div className="relative w-[200px] h-[250px]">
        {!inStock && (
          <p className="bg-[#4B54A1] text-white py-1 px-2 uppercase z-10 bottom-5 left-5 text-sm font-bold rounded absolute">
            Out of stock{" "}
          </p>
        )}
        <Image
          src={path}
          alt={tag}
          // width={200}
          // height={150}
          layout="fill"
          className="object-cover overflow-hidden"
        />
      </div>
      <div className="flex w-full py-2 justify-between items-center bg-your-nft">
        <div className="textext-left pl-2 text-nav-text text-sm">
          <span className="font-black text-xl uppercase">${price}</span>
          <span className="block text-card-text uppercase text-xs">{tag}</span>
        </div>
        <div className="flex flex-col justify-center items-center pr-2">
          <span className="text-card-text text-xs uppercase "> {collection} </span>
          <span className="text-card-text text-xl hover:font-black">
            {" "}
            <Link href="/shop/2">
              <BsArrowRight size={25} />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
