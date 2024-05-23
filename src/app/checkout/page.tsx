import Button from '@/components/button'
import RecentlyPrinted from '@/components/cards/recently-printed';
import { BsQuestionCircle } from "react-icons/bs";
import RecentCard from "/public/images/recent/2.png"
import CheckoutCard from '@/components/forms/checkout-card';
import CryptoForm from '@/components/forms/crypto-form';

const page = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 px-5 md:px-36 pb-20 space-y-10">

      <div className="border-nav w-full border-2 md:pl-10 px-3 flex flex-col py-10 justify-start items-start space-y-5">
        <h4 className='font-black md:text-5xl text-3xl '>MINT TO PRINT </h4>
        <p className='font-thin text-md'> Get your NFT minted immediately and ready to go instantly!</p>
      </div>

      <div className='w-full flex flex-col-reverse justify-center items-start md:flex-row'>

        {/* <CheckoutCard /> */}
        <CryptoForm />
        <div className='w-full md:w-1/2 md:ml-5 py-10 bg-nav flex justify-center items-center'>
          <RecentlyPrinted path={RecentCard} name="COOL LOOKING" details="MAGNET" time="16H AGO" />
        </div>
      </div>
    </div>
  )
}

export default page
