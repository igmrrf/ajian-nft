import TipsCard from "@/components/cards/tips-card"
import RecentlyPrinted from "@/components/cards/recently-printed"
import GetNFTCard from "@/components/cards/get-nft-card"
import Button from "@/components/button"
import PrintInstantlyCard from "@/components/cards/print-instantly"
import well from '../../public/Group 2944.svg'
import RecentCard from "../../public/images/recent/2.png"
import gmGreen from "../../public/images/recent/0.png"
import diamondBody from "../../public/images/recent/1.png"
import sneakerHead from "../../public/images/recent/3.png"
import ghost from "../../public/images/get_your_own/1.png"
import ghost1 from "../../public/images/get_your_own/2.png"
import ghost2 from "../../public/images/get_your_own/3.png"
import ghost3 from "../../public/images/get_your_own/4.png"
import { BsArrowRight } from "react-icons/bs";


export default function Home() {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 md:px-36 px-5 space-y-10">
      <PrintInstantlyCard />
      <div className="w-full">
        <h3 className="text-nav-text text-xl md:text-3xl text-left font-extrabold"> NFTS RECENTLY PRINTED </h3>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-5">
        <RecentlyPrinted path={RecentCard} name="COOL LOOKING" details="MAGNET" time="16H AGO" inStock={true} />
        <RecentlyPrinted path={gmGreen} name="GMBACK GREEN" details="MAGNET" time="16H AGO" inStock={false} />
        <RecentlyPrinted path={diamondBody} name="DIAMOND BODY" details="MAGNET" time="12MIN" inStock={true} />
        <RecentlyPrinted path={sneakerHead} name="SNEAKER HEAD" details="MAGNET" time="1D 12H" inStock={true} />
      </div>
      {/* util cards */}
      <div className="flex flex-wrap gap-2">
        <TipsCard name='Secure' details='Less than a week, you will recieve your print of your NFT at home.' path={well} />
        <TipsCard name='Trusted' details='hello world i am writing' path={well} />
        <TipsCard name='wow' details='We Ship To Every Country In The World For A Flat Fee' path={well} />
      </div>

      <div className="w-full flex justify-between items-center">
        <h3 className="text-nav-text md:text-3xl text-md w-2/3  font-extrabold block"> GET YOUR OWN NFT PRINTED </h3>
        <p className="items-center"> SEE ALL <BsArrowRight className="inline-block" /> </p>
      </div>
      <div className="flex justify-between items-center flex-col md:flex-row flex-wrap gap-5">
        <GetNFTCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost} />
        <GetNFTCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
        <GetNFTCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost2} />
        <GetNFTCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost3} />
      </div>

      {/* MINT THEN PRINT */}
      <div className="w-full flex flex-col-reverse items-center justify-around md:flex-row md:h-[500px] bg-coral">
        <div className="flex flex-col items-center space-y-4 py-10 md:h-[480px] justify-between">

          <div className="flex-col justify-start items-center space-y-4 ">
            <h4 className="text-white text-2xl md:text-4xl font-bold "> MINT THEN PRINT</h4>
            <Button name="PRINT NFT" className="bg-mail" />
          </div>
          <p className="w-2/3 text-left text-white">Choose the product that you want to print your NFT art on and select a size you want. </p>
        </div>
        <div className="flex flex-col md:flex-row py-5 space-y-4 gap-5 md:mr-10">

          <RecentlyPrinted path={diamondBody} name="DIAMOND BODY" details="MAGNET" time="12MIN" inStock={true} />
          <div className="-mt-10">
            <RecentlyPrinted path={sneakerHead} name="SNEAKER HEAD" details="MAGNET" time="1D 12H" inStock={false} />
          </div>
        </div>
      </div>



      {/* util cards */}
      <div className="w-full flex space-y-4 md:space-y-0 flex-wrap justify-between">
        <TipsCard name='Connect your Wallet' details='hello world i am writing' path={well} />
        <TipsCard name='Pick a Physical Product' details='hello world i am writing' path={well} />
        <TipsCard name='Quick doorstep Delivery' details='We Ship To Every Country In The World For A Flat Fee' path={well} />
      </div>

      <div className=" border-4 border-black flex flex-col ">
        <div className="md:px-24 px-10 py-6 space-y-10"> <h4 className="text-nav-text text-4xl md:text-6xl font-black"> Refer a friend, get 10% off</h4>
          <p className="text-card-text font-thin text-md md:text-xl">Simply refer a friend and get 10% discount on your next print, and a free print on anyone that signs up through your link </p>

          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <div className=" border-2 border-black w-[250px] py-1 ">
              <input
                className="outline-0 w-full text-md pl-2 placeholder-text-black"
                placeholder="Enter email address"
                type="email"
              />
            </div>
            <Button name="Get mail" className="bg-mail text-white text-center" />
          </div>
        </div>
      </div>

    </div>
  );
}
