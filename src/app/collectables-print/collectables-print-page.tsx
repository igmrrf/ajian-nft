import Image from "next/image";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import main from "/public/images/collectables/0.png";
import second from "/public/images/collectables/1.png";
import first from "/public/images/collectables/2.png";
import Button from "@/components/button";
import ShopCard from "@/components/cards/shop-cards";
import ghost1 from "/public/images/get_your_own/2.png";
import placeholder from "/public/images/cart/1.png";
import Link from "next/link";

const CollectablesPrintPage = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 md:px-36 px-5 pb-20 space-y-10">
      <div className="flex flex-col justify-center items-start space-y-10 py-10 px-8 w-full border-nav border-2">
        <div className="flex justify-start">
          <Link href="/shop" className="flex font-light">
            {" "}
            <span>
              {" "}
              <BsArrowLeft size={25} />
            </span>{" "}
            Prev page{" "}
          </Link>
        </div>
        <div className="flex justify-between w-full">
          {" "}
          <h4 className="md:text-4xl text-xl font-black">
            {" "}
            $255 <span className="font-thin">|</span> NFT PRINT PRO SHIRT{" "}
          </h4>
          <div className="pt-2 flex flex-col items-center md:flex-row md:space-x-3 text-black">
            <div>
              {/* TODO: remove this  */}
              <p className="font-bold text-sm md:text-xl"> share on media </p>
            </div>
            {/* icons */}

            <div className="flex space-x-2 ">
              <a href="#">
                <FaDiscord size={20} />{" "}
              </a>
              <a href="#">
                <FaFacebook size={20} />{" "}
              </a>
              <a href="#">
                <FaInstagram size={20} />{" "}
              </a>
              <a href="#">
                {" "}
                <FaSquareXTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Image showcase */}
      <div className="w-full flex flex-col md:flex-row gap-5 h-[500px]">
        <div className="w-full md:w-3/4 h-full relative">
          <Image src={main} alt="main" fill className="object-cover" />
        </div>
        <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-5 h-[500px]">
          <div className="w-full relative md:h-1/2">
            <Image src={second} alt="second" fill className="object-cover" />
          </div>
          <div className="w-full relative md:h-1/2">
            <Image src={first} alt="second" fill className="object-cover" />
          </div>
        </div>
      </div>
      <div className="w-full flex-col flex space-y-4">
        <div>
          {" "}
          <h4 className="font-black text-coral text-2xl">CHOOSE A PRINT TYPE</h4>
        </div>
        <div className="w-full flex flex-col md:flex-row space-y-3 md:space-y-0 justify-between md:items-center items-start">
          <div className="flex flex-row space-x-4 justify-start items-center">
            <select className="font-bold text-coral px-8 py-2 border-2 border-nav bg-white">
              <option> 4 X 4 magnet</option>
              <option> 4 X 4 magnet</option>
              <option> 4 X 4 magnet</option>
              <option> 4 X 4 magnet</option>
            </select>
            <p className="uppercase font-bold"> + add print type </p>
          </div>
          <Button name="print now" className="font-semibold bg-nav-button md:ml-5" />
        </div>
        <div className="w-full flex flex-col space-y-4 py-5 px-10 border-2 border-nav">
          <div>
            {" "}
            <h4 className="font-black text-coral text-2xl">CHOOSE A PRINT TYPE</h4>
          </div>
          <p className="text-md font-light">
            Turn your NFT into a beautiful physical art frame. The smooth texture intensifies the
            image&apos;s natural look and feel.{" "}
          </p>
        </div>
      </div>
      <div className="w-full">
        <div>
          <h4 className="font-black text-coral text-2xl uppercase">more prints you can get</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 w-full gap-5">
          <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
          <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
          <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
          <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
          <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
        </div>
      </div>

      <div className="flex space-x-10 w-full justify-end">
        <p className="flex font-light">
          {" "}
          <span className="text-card-text">
            {" "}
            <BsArrowLeft size={25} />
          </span>{" "}
        </p>
        <p className="flex">
          {" "}
          more prints{" "}
          <span>
            {" "}
            <BsArrowRight size={25} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default CollectablesPrintPage;
