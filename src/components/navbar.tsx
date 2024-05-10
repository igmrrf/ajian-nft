'use client'
import Link from 'next/link'
import React from 'react'
import { nav } from '@/utils/nav'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import whiteLogo from '../../public/logos/logo_black.svg'
import Button from './button'
import { FaShoppingCart } from "react-icons/fa";



const NavBar = () => {
  const currentPath = usePathname();
  return (
    <nav className="z-50 sticky top-0 flex justify-between items-center bg-nav py-5 px-10 text-md">

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
        <ul className='space-x-5'>
          {nav.map((item) => (
            <Link className={` ${item.link == currentPath ? 'text-zinc-900' : 'text-nav-text'} hover:text-sky-800 transition-colors font-bold `} key={item.name} href={item.link}> {item.name}</Link>
          ))}
        </ul>
      </div>
      {/* shop & print now */}
      <div className='flex items-center text-nav-text'>
        <FaShoppingCart size={25} />
        <Button name='print now' className='font-semibold bg-nav-button ml-5' />
      </div>
    </nav>
  )
}

export default NavBar
