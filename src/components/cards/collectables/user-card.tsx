'use client'
import { FC } from "react";
import { cn } from "@/utils/tailwind-class";
import Image, { StaticImageData } from "next/image";
import { BsCopy } from "react-icons/bs";
import SocialButton from "@/components/buttons/social";
import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


interface UserCardTypes {
  name: string,
  address: string,
  path: StaticImageData,
  facebook: string
  discord: string
  mail: string
}

const UserCard: FC<UserCardTypes> = ({ name, address, path, facebook, discord, mail }) => {
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(address)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={cn(" flex items-center flex-col border-nav border-2")}>
      {/* Image */}
      <div className='relative w-[250px] h-[250px] m-2' >
        <Image
          src={path}
          alt={name}
          fill
          className='object-cover overflow-hidden'
        />
      </div>
      <div className='flex flex-col w-full py-2 justify-between bg-white space-y-4'>
        <div className="text-left pl-2 text-nav-text text-sm">
          <span className="font-black text-xl uppercase">{name}</span>
          <div className="flex space-x-2 text-card-text font-bold">
            <span className="block text-card-text font-thin text-xs  ">{address}</span>
            <span onClick={handleCopy} className="hover:cursor-copy"> <BsCopy /></span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-1 px-2">
          <SocialButton name="discord" link="#" className="bg-[#1DA1F2]" icon={FaDiscord} />
          <SocialButton name="X" link="#" className="bg-[#7289DA]" icon={FaSquareXTwitter} />
          <SocialButton name="Instagram" link="#" className="bg-[#8D8E9C]" icon={FaInstagram} />
        </div>
      </div>
    </div>
  )
}

export default UserCard;
