import ShopCard from "@/components/cards/shop-cards";
import ghost1 from "/public/images/get_your_own/2.png";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import cardsMock from "@/mock-data/shop-mock";
import { StaticImageData } from "next/image";

const ShopPage = () => {
  return (
    <div className="w-full flex min-h-screen flex-col items-center py-10 md:px-36 px-5 pb-20 space-y-10">
      <div className="flex flex-col justify-center items-start space-y-10 py-10 px-8 w-full border-nav border-2">
        <p className="font-medium text-md text-nav-text w-2/3">
          Get your own cool merch with NFTs printed on them hats, t-shirts, or coffee mugs. Take
          your pick!{" "}
        </p>
        <h3 className="font-black text-3xl md:text-5xl text-nav-text">BROWSE MERCH </h3>
      </div>

      <div className="w-full flex justify-center md:justify-between items-center flex-wrap gap-2">
        {cardsMock.map((card) => (
          <ShopCard
            key={card.id}
            collection={card.collection}
            tag={card.tag}
            price={card.price}
            path={card.path}
          />
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

export default ShopPage;
