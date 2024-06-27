import cool from "/public/images/recent/0.png";
import MediaCard from "@/components/cards/collectables/media-card";

const Media = () => {
  return (
    <div className="w-full  flex md:flex-row flex-col md:justify-evenly justify-center items-center md:items-start gap-5 ">
      <MediaCard
        name="MY STORY HOW I MADE A COOL NFT FROM SCRATCH"
        path={cool}
        date="24/12/24"
        tag={["Story", "Topic"]}
        description="Magnet"
      />
      <MediaCard
        name="MY STORY HOW I MADE A COOL NFT FROM SCRATCH"
        path={cool}
        date="24/12/24"
        tag={["Story", "Topic"]}
        description="Magnet"
      />
      <MediaCard
        name="MY STORY HOW I MADE A COOL NFT FROM SCRATCH"
        path={cool}
        date="24/12/24"
        tag={["Story", "Topic"]}
        description="Magnet"
      />
    </div>
  );
};

export default Media;
