import cool from "/public/images/recent/0.png"
import CollectionsCard from "@/components/cards/collectables/collectables-card"

const Media = () => {
  return (
    <div className="w-full  flex md:flex-row flex-col md:justify-evenly justify-center items-center md:items-start  flex-wrap ">
      <CollectionsCard name="Cool looking" details="magnet" path={cool} />
      <CollectionsCard name="Cool looking" details="magnet" path={cool} />
      <CollectionsCard name="Cool looking" details="magnet" path={cool} />
      <CollectionsCard name="Cool looking" details="magnet" path={cool} />
      <CollectionsCard name="Cool looking" details="magnet" path={cool} />

    </div>
  )
}

export default Media
