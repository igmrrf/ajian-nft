import { getYear } from '@/utils/getyear'
import blackLogo from '../../public/logos/logo_white.svg'
import Image from 'next/image'
import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='flex flex-col bg-footer px-10 py-10 text-footer-text w-full'>
      {/* top    */}
      <div className='flex flex-col md:items-start md:flex-row items-center mb-10'>
        {/* logo and small write up */}
        <div className='md:w-1/2 flex items-center flex-col md:flex-row md:flex md:items-start justify-between '>
          <div >
            <Image
              src={blackLogo}
              alt='nft pro'
              width={180}
              height={180}
              className='object-cover'
            />
          </div>
          <div className='text-sm md:w-1/2 mb-10 text-center md:text-start pt-7 md:pt-0'>
            <p>Do you have a problem with your delivery? Contact us: founder@nftprintpro.com
            </p>
            <p className='mt-5'> We've partnered with various printing shops to bring you the best prints the Web3 space can provide.
            </p>
          </div>
        </div>
        {/* info and menu */}
        <div className='flex justify-end space-x-9 md:w-1/2 text-sm'>
          <div className='flex-col space-y-5'>
            <h3>INFO</h3>
            <div className='space-y-2 text-white'>
              <p className=''> How to print NFTs</p>
              <p> Terms of Service</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div className='flex-col space-y-5'>
            <h3>INFO</h3>
            <div className='space-y-2 text-white'>
              <p className=''>ABOUT</p>
              <p> LEARN</p>
              <p>CONNECT</p>
            </div>
          </div>
        </div>
      </div>
      {/* copyright info */}
      <div className='flex md:flex-row flex-col border-t-2 border-white justify-between'>
        <div className='pt-2 flex space-x-2 text-white'>
          {/* icons */}
          <a href='#'><FaDiscord size={25} /> </a>
          <a href='#'><FaFacebook size={25} /> </a>
          <a href='#'><FaInstagram size={25} /> </a>
          <a href='#'> <FaSquareXTwitter size={25} /></a>
        </div>
        <div className='flex md:flex-row flex-col text-center space-x-5 pt-2'>
          <p className='text-white uppercase font-bold'>support@nftprintpro.com</p>
          <p className='text-footer-text'> &copy; {getYear()} NFT print pro.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
