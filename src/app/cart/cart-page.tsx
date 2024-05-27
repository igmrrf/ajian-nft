import CartCard from '@/components/cards/cart'
import React from 'react'
import one from '/public/images/cart/1.png'
import Button from '@/components/button'



const CartPage = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 px-5 md:px-36 pb-20 space-y-10">
      {/* banner */}
      <div className="border-nav w-full border-2 md:pl-10 px-3 flex py-4 justify-between items-start space-y-5">
        <p> Back to top</p>
        <h4 className='font-black md:text-5xl text-3xl'>CART</h4>
      </div>

      <div className='w-full space-y-5'>
        <h3 className='text-3xl md:text-5xl font-black'> YOUR SHOPPING CART </h3>
        <div className='w-full flex flex-col md:flex-row gap-5'>
          <div className='w-full md:w-3/4 flex flex-col gap-4'>
            <CartCard name='BB3 - BEEP3R #72 (ETHSF EDITION)' collection='4 x 4 MAGNET' price='25' path={one} />
            <CartCard name='BB3 - BEEP3R #72 (ETHSF EDITION)' collection='4 x 4 MAGNET' price='25' path={one} />
          </div>
          <div className='w-full md:w-[300px] h-[300px] border-nav border'>
            <div className='border-b border-nav w-full flex py-3 px-5 text-card-text items-center justify-between'>
              <p>Subtotal </p>
              <p>$25 </p>
            </div>
            <div className='h-full px-4 flex flex-col justify-between'>

              <div className='flex py-3 text-coral font-bold items-center justify-between'>
                <p>Subtotal </p>
                <p>$25 </p>
              </div>
              <Button name='CHECKOUT NOW!' className='bg-nav-button font-black' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage 
