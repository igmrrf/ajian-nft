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
  const handleClick = () => setClicked(!clicked);

  return (
    <header className="sticky top-0 left-0 z-50 bg-nav">
      <nav className="flex justify-between items-center py-5 px-10 text-md">
        <div className="flex items-center space-x-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center">
              <Image
                src={whiteLogo}
                alt="nft pro"
                width={100}
                height={180}
                className="object-cover"
              />
            </a>
          </Link>
          {/* Navigation links */}
          <ul className="hidden md:flex space-x-5">
            {nav.map((item) => (
              <li key={item.name}>
                <Link href={item.link}>
                  <a
                    className={`text-nav-text hover:text-card-text transition-colors ${item.link === currentPath ? "text-card-text" : ""}`}
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Actions (cart and print now) */}
        <div className="flex items-center space-x-5 md:hidden">
          <Link href="cart">
            <a>
              <FaShoppingCart className="text-nav-text hover:text-[#4B54A1]" size={25} />
            </a>
          </Link>
          <Button
            name="print now"
            className="font-semibold bg-nav-button hover:text-nav-button hover:bg-coral"
          />
        </div>
        {/* Hamburger menu */}
        <div
          className="block md:hidden"
          onClick={handleClick}
          tabIndex={0}
          role="button"
          aria-label="Toggle Navigation"
        >
          {clicked ? <RxCross2 size={25} /> : <RxHamburgerMenu size={25} />}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <ul
        className={cn(
          `flex flex-col justify-center items-center space-y-5 py-5 md:hidden ${clicked ? "block" : "hidden"}`,
        )}
      >
        {nav.map((item) => (
          <li key={item.name}>
            <Link href={item.link}>
              <a
                onClick={handleClick}
                className={`text-nav-text hover:text-sky-800 transition-colors ${item.link === currentPath ? "text-card-text" : ""}`}
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
        <Button
          name="print now"
          className="font-semibold bg-nav-button hover:text-nav-button hover:bg-coral"
        />
      </ul>
    </header>
  );
};

export default NavBar;
