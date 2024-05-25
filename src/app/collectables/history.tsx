import CollectablesHistory from "@/components/cards/collectables/history-card"
import cool from "/public/images/cart/2.png"


const History = () => {
  return (
    <div className="w-full  flex flex-col justify-center items-center space-y-2">
      <CollectablesHistory name="BB3 - BEEP3R #72 (ETHSF EDITION)" collection="4 x 4 MAGNET" date="24/12/2022" path={cool} price="50" />
      <CollectablesHistory name="BB3 - BEEP3R #72 (ETHSF EDITION)" collection="4 x 4 MAGNET" date="24/12/2022" path={cool} price="50" />
      <CollectablesHistory name="BB3 - BEEP3R #72 (ETHSF EDITION)" collection="4 x 4 MAGNET" date="24/12/2022" path={cool} price="50" />
    </div>
  )
}

export default History; 
