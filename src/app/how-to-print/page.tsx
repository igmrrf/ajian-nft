import { BsCheck2 } from "react-icons/bs";
import placeholder from "/public/placeholder.png"
import StepsCard from "@/components/cards/steps-card";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How To Print| NFT PrintPro',
  description: 'Print and ship NFTs world wide',
}

const page = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 px-5 md:px-36 pb-20 space-y-10">
      <div className="flex flex-col justify-center items-center space-y-8 p-5 md:py-10 px-8 w-full border-nav border-2">
        <h3 className="font-black text-5xl text-center md:text-left text-nav-text">BROWSE MERCH </h3>
        <p className="font-medium text-center text-md text-nav-text w-2/3">Get your own cool merch with NFTs printed on them hats, t-shirts, or coffee mugs. Take your pick! </p>
        <div className='flex flex-row flex-wrap justify-center items-center gap-10'>
          <div className='flex items-center space-x-2 border border-black p-2'> <BsCheck2 /> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p> </div>
          <div className='flex items-center space-x-2 border border-black p-2'> <BsCheck2 /> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p> </div>
          <div className='flex items-center space-x-2 border border-black p-2'> <BsCheck2 /> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p> </div>
        </div>
      </div>
      <StepsCard number="1" className='border-b-2 border-footer' title="pick nft" path={placeholder} details="Connect your wallet by clicking the connect button at the top right of the home page." />
      <StepsCard number="1" className='border-b-2 border-footer' title="pick nft" path={placeholder} details="Connect your wallet by clicking the connect button at the top right of the home page." />
      <StepsCard number="1" className='border-b-2 border-footer' title="pick nft" path={placeholder} details="Connect your wallet by clicking the connect button at the top right of the home page." />
      <StepsCard number="1" className='border-b-2 border-footer' title="pick nft" path={placeholder} details="Connect your wallet by clicking the connect button at the top right of the home page." />
      <StepsCard number="1" className='border-b-2 border-footer' title="pick nft" path={placeholder} details="Connect your wallet by clicking the connect button at the top right of the home page." />
      <StepsCard number="1" className="" title="pick nft" path={placeholder} details="Connect your wallet by clicking the connect button at the top right of the home page." />
    </div>
  )
}

export default page
