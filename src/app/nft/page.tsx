import Image from "next/image";
import ShopCard from "@/components/cards/shop-cards"
import ghost1 from "/public/images/get_your_own/2.png"
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import PrintNftShirt from "../../../public/print.png";
import ButtonNoArrow from "@/components/buttons/button-no-arrow";



import Button from "@/components/button";

const page = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 px-36 pb-20 space-y-10">
      <div className="flex flex-col justify-center items-start space-y-10 py-10 px-8 w-full border-nav border-2">
        <div className="flex justify-start">
          <p className="flex font-light"> <span> <BsArrowLeft size={25} /></span> Prev page </p>
        </div>
        <div className="flex justify-between w-full"> <h4 className="text-4xl font-black"> $255 | NFT PRINT PRO SHIRT </h4>
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

      {/* select nft info */}
      <div className="w-full gap-5 flex">
        <div className="w-2/3 h-[400px] relative">
          <Image
            src={PrintNftShirt}
            alt="two men wearing our shirts"
            fill
            className="object-cover" />
        </div>
        <div className="w-1/3 space-y-3">
          <div className="border-nav border p-5 space-y-5">
            <h5 className="font-bold">ITEM DESCRIPTION </h5>
            <p className="text-sm">Turn your NFT into a beautiful physical art frame. The smooth texture intensifies the image's natural look and feel. </p>
          </div>
          <div>
            <h5 className="font-bold pb-2">Select Size</h5>
            <div className='flex space-x-5'>
              <div className='py-2 px-4 border flex justify-center items-center'><p>xs </p> </div>
              <div className='py-2 px-4 border flex justify-center items-center'><p>xs </p> </div>
              <div className='py-2 px-4 border flex justify-center items-center'><p>xs </p> </div>
              <div className='py-2 px-4 border flex justify-center items-center'><p>xs </p> </div>
            </div>
          </div>

          <div>
            <h5 className="font-bold pb-2">Select Color</h5>
            <div className='flex space-x-5'>
              <div className='py-5 px-7 border flex bg-black'></div>
              <div className='py-5 px-7 border flex bg-black'></div>
              <div className='py-5 px-7 border flex bg-black'></div>
              <div className='py-5 px-7 border flex bg-black'></div>
            </div>
          </div>
          <Button name="ADD TO CART" className="bg-mail text-black font-bold text-center" />
        </div>
      </div>


      <div className="w-full">
        <h3 className="text-nav-text text-3xl text-left font-extrabold block"> MORE MERCH </h3>
      </div>
      <div className="flex justify-between w-full flex-wrap gap-2">
        <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
        <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
        <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
        <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
        <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
      </div>
      <div className="flex space-x-10 w-full justify-end">
        <p className="flex font-light"> <span> <BsArrowLeft size={25} /></span> Prev page </p>
        <p className="flex">  Next page <span> <BsArrowRight size={25} /></span></p>
      </div>
    </div>
  )
}

export default page
