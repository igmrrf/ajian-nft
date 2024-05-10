'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { nav } from '@/utils/nav'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import whiteLogo from '../../public/logos/logo_black.svg'
import Button from './button'
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { cn } from '@/utils/tailwind-class'




const NavBar = () => {
  const currentPath = usePathname();
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    return setClicked(!clicked)
  }
  return (
    <header className='flex flex-col'>
      <nav className="z-50 sticky top-0 flex justify-between items-center bg-nav py-5 px-10 text-md w-full">

        <div className='flex space-x-16 items-center'>
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <Image
              src={whiteLogo}
              alt='nft pro'
              width={100}
              height={180}
              className='object-cover'
            />
          </Link>
          {/* nav items */}
          <ul className='space-x-5 hidden md:block'>
            {nav.map((item) => (
              <Link className={` ${item.link == currentPath ? 'text-zinc-900' : 'text-nav-text'} hover:text-sky-800 transition-colors font-bold `} key={item.name} href={item.link}> {item.name}</Link>
            ))}
          </ul>
        </div>
        {/* shop & print now */}
        <div className=' items-center text-nav-text hidden md:flex'>
          <FaShoppingCart size={25} />
          <Button name='print now' className='font-semibold bg-nav-button ml-5' />
        </div>
        <div className='block md:hidden' onClick={handleClick}> {clicked ? <RxCross2 size={25} /> : <RxHamburgerMenu size={25} />}</div>

      </nav>

      {/* nav items */}
      <ul className={cn(`flex flex-col space-y-10 justify-center items-center h-svh bg-nav md:hidden ${clicked ? "flex" : "hidden"}`)} >
        {nav.map((item) => (
          <Link className={` ${item.link == currentPath ? 'text-zinc-900' : 'text-nav-text'} hover:text-sky-800 transition-colors font-bold `} key={item.name} href={item.link}> {item.name}</Link>
        ))}
        <Button name='print now' className='font-semibold bg-nav-button ml-5' />
      </ul>
    </header>
  )
}

export default NavBar
