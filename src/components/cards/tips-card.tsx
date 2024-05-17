import { FC } from "react";
import { cn } from "@/utils/tailwind-class";
import Image from "next/image";
import { capitalizeFirst } from "@/utils/cap";


interface TipsCard {
  name: string
  details: string
  path: string
}

const TipsCard: FC<TipsCard> = ({ name, details, path }) => {
  return (
    <div className={cn("border-2 border-default-border rounded py-6 px-20 flex items-center flex-col w-[320px] ")}>
      <Image
        src={path}
        alt={name}
        width={80}
        height={80}
      />
      <div className="text-center pt-5 text-nav-text text-sm">
        <span className="font-black uppercase">{name}</span>
        <span className="block text-body-text text-wrap">{capitalizeFirst(details)}</span>
      </div>
    </div>
  )
}

export default TipsCard;
