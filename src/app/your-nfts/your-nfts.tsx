import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import YourNftCard from "@/components/cards/your-nft-card";
import { yourNfts } from "@/mock-data/your-nfts-mock";

const YourNftsPage = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 md:px-36 px-5 pb-20 space-y-10">
      {/* Hero section  */}
      <div className="flex flex-col justify-center items-start space-y-5 md:space-y-10 py-5 md:py-10 px-8 w-full border-nav border-2 bg-white">
        <p className="font-medium text-md text-nav-text w-2/3">
          Instantly print your NFT and receive it at your home in less than a week. High quality
          only.{" "}
        </p>
        <h3 className="font-black md:text-5xl text-2xl text-nav-text">YOUR NFTS</h3>
      </div>
      <div className="w-full flex flex-col md:flex-row py-3 mb-2 items-center justify-between">
        <p className="text-card-text">
          {" "}
          Home /<span className="text-footer">Magnets</span>
        </p>
        <div className="flex space-x-2">
          <div className="w-full">
            <select className="bg-card-text py-2 px-4 w-full outline-none text-white font-bold appearance-none border-none focus:border-none focus:ring-0">
              <option selected>Filter 1</option>
              <option>Thrila rocks</option>
            </select>
          </div>

          <div className="w-full">
            <select className="bg-card-text py-2 px-4 w-full outline-none text-white font-bold appearance-none border-none focus:border-none focus:ring-0">
              <option selected>Filter 2</option>
              <option>Thrila rocks again</option>
            </select>
          </div>
          <div className="text-footer px-6 w-full py-2 ">
            {" "}
            <p className="inline-block">Reset Filters</p>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2">
        {yourNfts.map((nft) => (
          <YourNftCard name={nft.name} path={nft.path} key={nft.id} />
        ))}
      </div>
      <div className="flex space-x-10 w-full justify-end">
        <p className="flex font-light">
          {" "}
          <span>
            {" "}
            <BsArrowLeft size={25} />
          </span>{" "}
          Prev page{" "}
        </p>
        <p className="flex">
          {" "}
          Next page{" "}
          <span>
            {" "}
            <BsArrowRight size={25} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default YourNftsPage;
