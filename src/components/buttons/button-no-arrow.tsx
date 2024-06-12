import { FC } from "react";
import { cn } from "@/utils/tailwind-class";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  name: string;
}

const ButtonNoArrow: FC<ButtonProps> = ({ name, className, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        "max-w-[150px] cursor-pointer text-nav-text font-black px-4 py-2  uppercase ",
        className,
      )}
    >
      {name}
    </button>
  );
};

export default ButtonNoArrow;
