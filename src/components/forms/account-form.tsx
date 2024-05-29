import Button from '@/components/button'
import { BsQuestionCircle } from "react-icons/bs";


const AccountForm = () => {
  return (
    <form className='w-full flex flex-col-reverse justify-center items-start md:flex-row'>
      <div className='w-full mt-10 md:mt-0  space-y-5'>
        <div className='w-full flex md:flex-row flex-col gap-5'>
          <div className='w-full md:w-1/2'>
            <label className='text-coral font-bold'> Upload avatar</label>
            <div className='w-full  flex justify-center items-center border-dashed border-nav border-2 py-10'>
              <div className='w-full flex items-center justify-center flex-col'>
                <span className="font-thin px-2 py-1 bg-nav rounded"> Add files</span>
                <label htmlFor='file' className="text-card-text">Accepts .gif .jpg and .png</label>
              </div>
              <input id='file' className="hidden" type='file' />
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <label className='text-coral font-bold'> Upload cover</label>
            <div className='w-full  flex justify-center items-center border-dashed border-nav border-2 py-10'>
              <div className='w-full flex items-center justify-center flex-col'>
                <span className="font-thin px-2 py-1 bg-nav rounded"> Add files</span>
                <label htmlFor='file' className="text-card-text">Accepts .gif .jpg and .png</label>
              </div>
              <input id='file' className="hidden" type='file' />
            </div>
          </div>
        </div>
        <div className='w-full space-y-5'>
          <h4 className='font-black text-coral'> Your Profile</h4>
          <div className='w-full flex flex-col md:flex-row gap-5'>

            <div className='w-full md:w-1/2 '>
              <label className='font-bold text-coral'>Enter a name* </label>
              <div className='w-full border-nav border-2 flex items-center pr-2 text-nav'>
                <input type='text' placeholder='Enter a Name for Your Placeholder' className='p-2 w-full outline-none' />
                <BsQuestionCircle size={25} />
              </div>
            </div>
            <div className='w-full md:w-1/2'>
              <label className='font-bold text-coral'>Enter a name* </label>
              <div className='w-full border-nav border-2 flex items-center pr-2 text-nav'>
                <input type='text' placeholder='Enter a Name for Your Placeholder' className='p-2 w-full outline-none' />
                <BsQuestionCircle size={25} />
              </div>
            </div>
          </div>
          <div className='space-y-3'>
            <p className='text-coral font-bold'> Wallet ID</p>
            <p className='text-coral font-black text-sm md:text-xl'> 0x634566Ac61f8B5448f92f9E812350978824aAf2DDDD</p>
            <div className='flex space-x-2 items-center mb-5'>
              <input type='checkbox' className='px-2' />
              <p className='text-coral md:text-xl'> I want to receive email for Order notifications</p>
            </div>
            <Button name='UPLOAD INFO ' className="bg-nav-button text-coral font-black" />

          </div>
        </div>


        <div className='w-full space-y-5'>
          <h4 className='font-black text-coral'> Shipping details</h4>
          <div className='w-full flex flex-col md:flex-row gap-5'>

            <div className='w-full md:w-1/2 '>
              <label className='font-bold text-coral'>Enter a name* </label>
              <div className='w-full border-nav border-2 flex items-center pr-2 text-nav'>
                <input type='text' placeholder='Enter a Name for Your Placeholder' className='p-2 w-full outline-none' />
                <BsQuestionCircle size={25} />
              </div>
            </div>
            <div className='w-full md:w-1/2'>
              <label className='font-bold text-coral'>Enter a name* </label>
              <div className='w-full border-nav border-2 flex items-center pr-2 text-nav'>
                <input type='text' placeholder='Enter a Name for Your Placeholder' className='p-2 w-full outline-none' />
                <BsQuestionCircle size={25} />
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col md:flex-row gap-5'>

            <div className='w-full md:w-1/2 '>
              <label className='font-bold text-coral'>Enter a name* </label>
              <div className='w-full border-nav border-2 flex items-center pr-2 text-nav'>
                <input type='text' placeholder='Enter a Name for Your Placeholder' className='p-2 w-full outline-none' />
                <BsQuestionCircle size={25} />
              </div>
            </div>
            <div className='w-full md:w-1/2'>
              <label className='font-bold text-coral'>Enter a name* </label>
              <div className='w-full border-nav border-2 flex items-center pr-2 text-nav'>
                <input type='text' placeholder='Enter a Name for Your Placeholder' className='p-2 w-full outline-none' />
                <BsQuestionCircle size={25} />
              </div>
            </div>
          </div>

          <Button name='UPDATE INFO ' className="bg-nav-button font-bold text-coral" />
        </div>


        <div className='w-full space-y-5'>
          <h4 className='uppercase font-bold text-coral'> Social media</h4>
          <div className='w-full space-y-3'>
            <div className='w-full'>
              <label>Enter a name* </label>
              <div className='w-full border-nav border-2 flex items-center pr-2 text-nav'>
                <input type='text' placeholder='Enter a Name for Your Placeholder' className='p-2 w-full outline-none' />
                <BsQuestionCircle size={25} />
              </div>
            </div>
            <div className='w-full'>
              <label>Enter a name* </label>
              <div className='w-full border-nav border-2 flex items-center pr-2 text-nav'>
                <input type='text' placeholder='Enter a Name for Your Placeholder' className='p-2 w-full outline-none' />
                <BsQuestionCircle size={25} />
              </div>
            </div>
            <div className='w-full'>
              <label>Enter a name* </label>
              <div className='w-full border-nav border-2 flex items-center pr-2 text-nav'>
                <input type='text' placeholder='Enter a Name for Your Placeholder' className='p-2 w-full outline-none' />
                <BsQuestionCircle size={25} />
              </div>
            </div>
          </div>
          <Button name='UPDATE INFO' className="bg-nav-button font-bold text-coral" />
        </div>

      </div>

    </form>
  )
}

export default AccountForm
