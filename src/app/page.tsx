import TipsCard from "@/components/cards/tips-card"
import well from '../../public/Group 2944.svg'
import RecentCard from "../../public/images/recent/2.png"
// import PrintInstantlyCard from "@/components/cards/print-instantly"
import RecentlyPrinted from "@/components/cards/recently-printed"
import GetNFTCard from "@/components/cards/get-nft-card"
import Button from "@/components/button"
import PrintInstantlyCard from "@/components/cards/print-instantly"

export default function Home() {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 px-36 space-y-10">

      <PrintInstantlyCard />

      <GetNFTCard collection="sol" tag="col" price="10" path={RecentCard} />
      <div className="flex flex-wrap gap-2 pb-10">
        <RecentlyPrinted path={RecentCard} name="he" details="wow" time="12" />
        <RecentlyPrinted path={RecentCard} name="he" details="wow" time="12" />
        <RecentlyPrinted path={RecentCard} name="he" details="wow" time="12" />
        <RecentlyPrinted path={RecentCard} name="he" details="wow" time="12" />
        <RecentlyPrinted path={RecentCard} name="he" details="wow" time="12" />
      </div>
      {/* util cards */}
      <div className="flex flex-wrap gap-2">
        <TipsCard name='Secure' details='hello world i am writing' path={well} />
        <TipsCard name='Trusted' details='hello world i am writing' path={well} />
        <TipsCard name='wow' details='We Ship To Every Country In The World For A Flat Fee' path={well} />
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
