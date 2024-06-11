import CollectablesHistory from "@/components/cards/collectables/history-card";
import cool from "/public/images/cart/2.png";

const History = () => {
  return (
    <div className="w-full  flex flex-col justify-center items-center space-y-2">
      {/* Filter  */}
      <div className="w-full border-nav border flex px-5 py-3 mb-2 items-center justify-between">
        <p className="text-coral font-black"> YOUR PREVIOUS PURCHASES</p>
        <div className="flex space-x-2">
          <div
            className="w-full overflow-hidden items-center  rounded-md 
block relative after:content-['\25BC'] after:absolute after:right-4 after:text-white
after:pointer-events-none"
          >
            <select className="bg-card-text py-2 pl-2 pr-8 w-full outline-none text-white appearance-none">
              <option selected>Filter 1</option>
              <option>Thrila rocks</option>
            </select>
          </div>

          <div
            className="w-full overflow-hidden items-center  rounded-md 
block relative after:content-['\25BC'] after:absolute after:right-4 after:text-white
after:pointer-events-none"
          >
            <select className="bg-card-text py-2 pl-2 pr-8 w-full outline-none text-white appearance-none">
              <option selected>Filter 1</option>
              <option>Thrila rocks</option>
            </select>
          </div>
        </div>
      </div>
      {/* Cards  */}
      <CollectablesHistory
        name="BB3 - BEEP3R #72 (ETHSF EDITION)"
        collection="4 x 4 MAGNET"
        date="24/12/2022"
        path={cool}
        price="50"
      />
      <CollectablesHistory
        name="BB3 - BEEP3R #72 (ETHSF EDITION)"
        collection="4 x 4 MAGNET"
        date="24/12/2022"
        path={cool}
        price="50"
      />
      <CollectablesHistory
        name="BB3 - BEEP3R #72 (ETHSF EDITION)"
        collection="4 x 4 MAGNET"
        date="24/12/2022"
        path={cool}
        price="50"
      />
    </div>
  );
};

export default History;
