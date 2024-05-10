import { FC } from "react";
import { cn } from "@/utils/tailwind-class";
import { BsArrowRight } from "react-icons/bs";


interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  name: string
}

const Button: FC<ButtonProps> = ({ name, className, ...props }) => {
  return (
    <button {...props} className={cn("text-nav-text px-6 py-2 h-10 uppercase rounded flex items-center justify-between", className)}>{name}  <span className="ml-4"> <BsArrowRight /></span></button>
  )
}

export default Button;
