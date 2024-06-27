import cool from "/public/images/recent/0.png";
import CollectionsCard from "@/components/cards/collectables/collectables-card";

const Collectables = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
      <CollectionsCard name="Cool looking" details="magnet" path={cool} />
      <CollectionsCard name="Cool looking" details="magnet" path={cool} />
      <CollectionsCard name="Cool looking" details="magnet" path={cool} />
      <CollectionsCard name="Cool looking" details="magnet" path={cool} />
      <CollectionsCard name="Cool looking" details="magnet" path={cool} />
    </div>
  );
};

export default Collectables;
