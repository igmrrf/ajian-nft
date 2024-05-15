import ShopCard from "@/components/cards/shop-cards"
import ghost1 from "/public/images/get_your_own/2.png"

const page = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 px-36 space-y-10">
      <div className="flex  flex-wrap gap-2">

        <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
        <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
        <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
        <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
        <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
        <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
        <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
        <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
        <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
        <ShopCard collection="RICH GHOST" tag="MAGNET" price="225" path={ghost1} />
      </div>
    </div>
  )
}

export default page
