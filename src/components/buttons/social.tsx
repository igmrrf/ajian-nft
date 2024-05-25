import { FC } from "react";
import { cn } from "@/utils/tailwind-class";
import { BsArrowRight } from "react-icons/bs";
import { IconType } from "react-icons";


interface ButtonProps {
  name: string,
  className: string,
  link: string,
  icon: IconType
}

const SocialButton: FC<ButtonProps> = ({ name, className, link, icon: Icon }) => {
  return (
    <a href={link} className={cn("uppercase flex w-full font-black justify-between items-center space-x-2 px-2 py-1 text-white hover:py-2 ", className)}>
      <div className="flex items-center space-x-2">
        <span><Icon size={25} /> </span>
        <p>{name}</p>
      </div>
      <span > <BsArrowRight /></span>
    </a>
  )
}

export default SocialButton;
