import UserCard from "@/components/cards/collectables/user-card"
import banner from "/public/banner.png"
import ghost1 from "/public/images/get_your_own/2.png"
import cool from "/public/images/recent/0.png"
import Image from "next/image"
import CollectionsCard from "@/components/cards/collectables/collectables-card"


const page = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 md:px-36 px-5 pb-20 space-y-10">
      <div className="w-full relative h-[100px] md:h-[300px]">
        <Image src={banner} fill alt="banner" />
      </div>

      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="md:w-1/4 w-full">
          <UserCard name="ETHPEROR" address="1ExAmpLe0FaBiT...sSV5tsGaMF6hd" path={ghost1} facebook="#" discord="#" mail="#" />
        </div>
        <div className="md:w-3/4 w-full ">
          <div className="w-full space-x-2 flex md:space-x-5 uppercase text-md py-3 md:px-5 font-black  md:text-2xl">
            <p>my art</p>
            <p>collectables</p>
            <p>media</p>
            <p>history </p>
          </div>
          <div className="w-full  flex md:flex-row flex-col md:justify-evenly justify-center items-center md:items-start  flex-wrap ">
            <CollectionsCard name="Cool looking" details="magnet" path={cool} />
            <CollectionsCard name="Cool looking" details="magnet" path={cool} />
            <CollectionsCard name="Cool looking" details="magnet" path={cool} />
            <CollectionsCard name="Cool looking" details="magnet" path={cool} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
