import CollectablesHistory from "@/components/cards/collectables/history-card"
import cool from "/public/images/cart/2.png"


const History = () => {
  return (
    <div className="w-full  flex flex-col justify-center items-center space-y-2">
      <div className="w-full border-nav border flex px-5 py-3 mb-2 items-center justify-between">
        <p className="text-coral font-black"> YOUR PREVIOUS PURCHASES</p>
        <div className="flex space-x-2">
          <div className='w-full flex items-center '>
            <select className='bg-card-text py-2 px-6 w-full outline-none text-white' >
              <option>FILTER 1</option>
            </select>
          </div>

          <div className='w-full flex items-center '>
            <select className='bg-card-text py-2 px-6 w-full outline-none text-white' >
              <option>FILTER 1</option>
            </select>
          </div>
        </div>
      </div>
      <CollectablesHistory name="BB3 - BEEP3R #72 (ETHSF EDITION)" collection="4 x 4 MAGNET" date="24/12/2022" path={cool} price="50" />
      <CollectablesHistory name="BB3 - BEEP3R #72 (ETHSF EDITION)" collection="4 x 4 MAGNET" date="24/12/2022" path={cool} price="50" />
      <CollectablesHistory name="BB3 - BEEP3R #72 (ETHSF EDITION)" collection="4 x 4 MAGNET" date="24/12/2022" path={cool} price="50" />
    </div>
  )
}

export default History; 
