import Image from "next/image";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import main from "/public/images/collectables/0.png"
import second from "/public/images/collectables/1.png"
import first from "/public/images/collectables/2.png"
import Button from "@/components/button";
import ShopCard from "@/components/cards/shop-cards";
import ghost1 from "/public/images/get_your_own/2.png"
import CollectablesHistory from "@/components/cards/collectables/history-card";
import placeholder from "/public/images/cart/1.png"

const pages = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 md:px-36 px-5 pb-20 space-y-10">
      <div className="flex flex-col justify-center items-start space-y-10 py-10 px-8 w-full border-nav border-2">
        <div className="flex justify-start">
          <p className="flex font-light"> <span> <BsArrowLeft size={25} /></span> Prev page </p>
        </div>
        <div className="flex justify-between w-full"> <h4 className="text-4xl font-black uppercase"> $255 | Crystal head </h4>
          <div className='pt-2 flex space-x-2 text-black'>
            {/* icons */}
            <p> share on media </p>
            <a href='#'><FaDiscord size={20} /> </a>
            <a href='#'><FaFacebook size={20} /> </a>
            <a href='#'><FaInstagram size={20} /> </a>
            <a href='#'> <FaSquareXTwitter size={20} /></a>
          </div>
        </div>
      </div>
      {/* Image showcase */}
      <div className="w-full flex flex-col md:flex-row gap-5 h-[500px]">
        <div className="w-full md:w-3/4 h-full relative">
          <Image src={main} alt="main" fill
            className="object-cover" />
        </div>
        <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-5 h-[500px]">
          <div className="w-full relative md:h-1/2">
            <Image src={second} alt="second" fill
              className="object-cover" />
          </div>
          <div className="w-full relative md:h-1/2">
            <Image src={first} alt="second" fill
              className="object-cover" />
          </div>
        </div>
      </div>
      <div className="w-full flex-col flex space-y-4">
        <div > <h4 className="font-black text-coral text-2xl">CHOOSE A PRINT TYPE</h4></div>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-row space-x-4 justify-start items-center">
            <select className="font-bold text-coral px-5 py-2 border-2 border-nav bg-white">
              <option> 4 X 4 magnet</option>
              <option> 4 X 4 magnet</option>
              <option> 4 X 4 magnet</option>
              <option> 4 X 4 magnet</option>
            </select>
            <p className="uppercase font-bold"> + add print type </p>
          </div>
          <Button name='print now' className='font-semibold bg-nav-button ml-5' />
        </div>
        <div className="w-full flex flex-col space-y-4 py-5 px-10 border-2 border-nav">
          <div > <h4 className="font-black text-coral text-2xl">CHOOSE A PRINT TYPE</h4></div>
          <p className="text-md font-light">Turn your NFT into a beautiful physical art frame. The smooth texture intensifies the image's natural look and feel. </p>
        </div>
      </div>
      <div className="w-full">
        <div>
          <h4 className="font-black text-coral text-2xl uppercase">more prints you can get</h4>
        </div>
        <div className="flex justify-between w-full flex-wrap gap-2">

          <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
          <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
          <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
          <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
          <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
        </div>
      </div>
      <CollectablesHistory collection="magnet" name="my" path={placeholder} price="24" date="12/august/2024" />

      <div className="flex space-x-10 w-full justify-end">
        <p className="flex font-light"> <span className="text-card-text"> <BsArrowLeft size={25} /></span> </p>
        <p className="flex">  more prints <span> <BsArrowRight size={25} /></span></p>
      </div>
    </div>
  )
}

export default pages
