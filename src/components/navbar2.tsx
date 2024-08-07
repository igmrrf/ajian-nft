"use client";
import Link from "next/link";
import { useState } from "react";
import { nav } from "@/utils/nav";
import { usePathname } from "next/navigation";
import Image from "next/image";
import whiteLogo from "../../public/logos/logo_black.svg";
import Button from "./button";
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { cn } from "@/utils/tailwind-class";

const NavBar = () => {
  const currentPath = usePathname();
  const [clicked, setClicked] = useState(false);
  const handleClick = (): void => setClicked(!clicked);

  return (
    <header className="flex flex-col z-50 sticky top-0 left-0 font-sans">
      <nav className=" flex justify-between items-center bg-nav py-5 px-10 text-md w-full">
        <div className="flex space-x-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={whiteLogo}
              alt="nft pro"
              width={100}
              height={180}
              className="object-cover"
            />
          </Link>
          {/* nav items */}
          <ul className="space-x-5 hidden md:block">
            {nav.map((item) => (
              <Link
                className={` ${item.link == currentPath ? "text-card-text" : "text-nav-text"} hover:text-card-text transition-colors font-normal `}
                key={item.name}
                href={item.link}
              >
                {" "}
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        {/* shop & print now */}
        <div className=" items-center text-nav-text hidden md:flex">
          <Link href="cart">
            <FaShoppingCart className="hover:text-[#4B54A1]" size={25} />
          </Link>
          <Button
            name="print now"
            className="font-semibold bg-nav-button ml-5 hover:text-nav-button hover:bg-coral"
          />
        </div>
        <div
          className="block md:hidden"
          onClick={handleClick}
          tabIndex={0}
          role="button"
          aria-label="Toggle Navigation"
        >
          {" "}
          {clicked ? <RxCross2 size={25} /> : <RxHamburgerMenu size={25} />}
        </div>
      </nav>

      {/* nav items */}
      <ul
        className={cn(
          `flex flex-col space-y-10 justify-center items-center h-svh bg-nav md:hidden ${clicked ? "flex" : "hidden"}`,
        )}
      >
        {nav.map((item) => (
          <Link
            onClick={handleClick}
            className={` ${item.link == currentPath ? "text-card-text" : "text-nav-text"} hover:text-sky-800 transition-colors font-bold `}
            key={item.name}
            href={item.link}
          >
            {" "}
            {item.name}
          </Link>
        ))}
        <Button
          name="print now"
          className="font-semibold bg-nav-button ml-5 hover:cursor-pointer hover:text-nav-button hover:bg-coral"
        />
      </ul>
    </header>
  );
};

export default NavBar;
