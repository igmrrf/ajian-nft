"use client"
import { useState } from 'react';
import RecentlyPrinted from '@/components/cards/recently-printed';
import RecentCard from "/public/images/recent/2.png"
import cart from "/public/images/cart/4.png"
import CheckoutCard from '@/components/forms/checkout-card';
import CryptoForm from '@/components/forms/crypto-form';
import OrderSummary from '@/components/cards/order-summary';

const CheckOutPage = () => {
  const [activeContent, setActiveContent] = useState('card')
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 px-5 md:px-36 pb-20 space-y-10">

      <div className="border-nav w-full border-2 md:pl-10 px-3 flex flex-col py-10 justify-start items-start space-y-5">
        <h4 className='font-black md:text-5xl text-3xl '>CHECKOUT </h4>
        <div className='flex flex-row space-x-5'>
          <p className={`${activeContent ? 'text-[#4B54A1] font-black text-md' : 'text-black'}`} onClick={() => setActiveContent('crypto')}> CRYPTO </p>
          <p className={`${activeContent ? 'text-[#4B54A1] font-black text-md' : 'text-black '}`} onClick={() => setActiveContent('card')}> CARD</p>
        </div>
      </div>

      <div className='w-full flex flex-col-reverse justify-center items-start md:flex-row'>

        {activeContent === 'card' && <CheckoutCard />}
        {activeContent === 'crypto' && <CryptoForm />}
        <div className='w-full md:w-1/2 md:ml-5 flex justify-center items-start'>
          <div className='flex-col flex space-y-5'>
            <h4 className="text-coral font-black"> Details</h4>

            <OrderSummary collection='magnet' tag='BB3 - BEEP3R #72 (ETHSF EDITION)' price='24' path={cart} />
          </div>
        </div>
      </div>
    </div >
  )
}

export default CheckOutPage;
