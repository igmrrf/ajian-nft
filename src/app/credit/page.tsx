import Button from '@/components/button'
import GetCredit from '@/components/cards/credit-card'
import React from 'react'
import money from "../../../public/credit.png"

const page = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 px-36 pb-20 space-y-10">
      <div className="w-full  border-coral  border-2 px-10 flex flex-col justify-start items-start space-y-5">
        <p className='text-sm font-thin pt-5'>Overview</p>
        <div className='w-full flex justify-between py-10 items-center'>
          <h4 className='text-3xl md:text-4xl font-black'>$245 Available credits </h4>
          <div className='flex gap-5'>
            <Button name='Get Credits' className='bg-coral' />
            <Button name='Redeem Credits' className='bg-nav-button' />
          </div>
        </div>
      </div>


      <div className='flex flex-row'>
        <GetCredit collection='MAGNET' tag='hello' price='250 Credits' path={money} />
      </div>
    </div>
  )
}

export default page
