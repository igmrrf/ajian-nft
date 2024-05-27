import YourNftCard from "@/components/cards/your-nft-card"
import ghost1 from "/public/images/get_your_own/2.png"

const YourNftsPage = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 md:px-36 px-5 pb-20 space-y-10">
      {/* Hero section  */}
      <div className="flex flex-col justify-center items-start space-y-5 md:space-y-10 py-5 md:py-10 px-8 w-full border-nav border-2 bg-white">
        <p className="font-medium text-md text-nav-text w-2/3">Instantly print your NFT and receive it at your home in less than a week. High quality only. </p>
        <h3 className="font-black md:text-5xl text-2xl text-nav-text">YOUR NFTS</h3>
      </div>
      <YourNftCard name="DIAMOND BODY" path={ghost1} />


    </div>
  )
}

export default YourNftsPage; 
