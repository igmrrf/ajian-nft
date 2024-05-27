"use client"
import React, { useState } from "react"
import UserCard from "@/components/cards/collectables/user-card"
import banner from "/public/banner.png"
import ghost1 from "/public/images/get_your_own/2.png"
import Image from "next/image"
import Media from "./media"
import MyArt from "./my-art"
import History from "./history"
import Collectables from "./collectables-sec"


const CollectablesPage = () => {
  const [activeContent, setActiveContent] = useState('art')
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 md:px-36 px-5 pb-20 space-y-10">
      <div className="w-full relative h-[100px] md:h-[300px]">
        <Image src={banner} fill alt="banner" className="object-cover" />
      </div>

      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="md:w-1/4 w-full">
          <UserCard name="ETHPEROR" address="1ExAmpLe0FaBiT...sSV5tsGaMF6hd" path={ghost1} facebook="#" discord="#" mail="#" />
        </div>
        <div className="md:w-3/4 w-full ">
          <div className="w-full space-x-2 flex md:space-x-5 uppercase text-sm py-3 md:px-5 font-black  md:text-md">
            <p className="hover:text-body-text" onClick={() => setActiveContent('art')}>my art</p>
            <p className="hover:text-body-text" onClick={() => setActiveContent('collectables')}>collectables</p>
            <p className="hover:text-body-text" onClick={() => setActiveContent('media')}>media</p>
            <p className="hover:text-body-text" onClick={() => setActiveContent('history')}>history </p>
          </div>
          <div className="w-full  flex md:flex-row flex-col md:justify-evenly justify-center items-center md:items-start  flex-wrap ">
            {activeContent === "art" && <MyArt />}
            {activeContent === "collectables" && <Collectables />}
            {activeContent === "media" && <Media />}
            {activeContent === "history" && <History />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectablesPage
