import Button from '@/components/button'
import RecentlyPrinted from '@/components/cards/recently-printed';
import { BsQuestionCircle } from "react-icons/bs";
import RecentCard from "/public/images/recent/2.png"

const MintPage = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 px-5 md:px-36 pb-20 space-y-10">

      <div className="border-nav w-full border-2 md:pl-10 px-3 flex flex-col py-10 justify-start items-start space-y-5">
        <h4 className='font-black md:text-5xl text-3xl '>MINT TO PRINT </h4>
        <p className='font-thin text-md'> Get your NFT minted immediately and ready to go instantly!</p>
      </div>

      <div className='w-full flex flex-col-reverse justify-center items-start md:flex-row'>
        <div className='w-full mt-10 md:mt-0 md:w-1/2 space-y-5'>
          <div className='w-full flex justify-center items-center border-dashed border-nav border-2 py-10'>
            <input type='file' />
          </div>

          <div className='w-full'>
            <label>Enter a name* </label>
            <div className='w-full border-nav border-2 flex items-center pr-2 text-nav'>
              <input type='text' placeholder='Enter a Name for Your Placeholder' className='p-2 w-full outline-none' />
              <BsQuestionCircle size={25} />
            </div>
          </div>

          <div className='w-full'>
            <label>description </label>
            <textarea className='w-full border-nav border-2 p-2 outline-none h-[100px]' />
          </div>
          <Button name='MINT NFT ' className="bg-nav-button" />
        </div>

        <div className='w-full md:w-1/2 md:ml-5 py-10 bg-nav flex justify-center items-center'>
          <RecentlyPrinted path={RecentCard} name="COOL LOOKING" details="MAGNET" time="16H AGO" />
        </div>
      </div>
    </div>
  )
}

export default MintPage; 
