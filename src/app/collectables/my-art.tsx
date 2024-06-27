import cool from "/public/images/recent/0.png";
import CollectionsCard from "@/components/cards/collectables/collectables-card";

const MyArt = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
      <CollectionsCard name="Cool looking" details="magnet" path={cool} />
      <CollectionsCard name="Cool looking" details="magnet" path={cool} />
      <CollectionsCard name="Cool looking" details="magnet" path={cool} />
      <CollectionsCard name="Cool looking" details="magnet" path={cool} />
      <CollectionsCard name="Cool looking" details="magnet" path={cool} />
      <CollectionsCard name="Cool looking" details="magnet" path={cool} />
    </div>
  );
};

// <div className="w-full  flex md:flex-row flex-col md:justify-evenly justify-center items-center md:items-start  flex-wrap ">
export default MyArt;
