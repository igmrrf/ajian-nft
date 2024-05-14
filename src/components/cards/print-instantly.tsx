import Image from "next/image"
import nft1 from '../../../public/images/pages-images/print_your_own.png'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import ButtonNoArrow from "@/components/buttons/button-no-arrow";

const PrintInstantlyCard = () => {
  return (
    <div>

      <div className=" flex flex-col border-default-border border-2 md:my-5 md:mx-10 md:flex-row">
        <div className='relative w-[300px] h-[300px]'>
          {/* <Image */}
          {/*   src={nft1} */}
          {/*   height={250} */}
          {/*   width={300} */}
          {/*   alt="Home image" */}
          {/*   sizes="(max-width: 768px) 300px, (max-width: 1200px) 50vw, 33vw" */}
          {/*   style={{ objectFit: "contain" }} */}
          {/*   className='hidden md:block' */}
          {/* /> */}

          <Image
            src={nft1}
            fill
            alt="Home image"
          // sizes="(max-width: 768px) 300px, (max-width: 1200px) 50vw, 33vw"
          // style={{ objectFit: "contain" }}
          // className='md:hidden'
          />
        </div>
        <div className="px-5 md:px-10 py-5">
          <div className="flex py-5 md:py-0 space-x-5">
            <BsArrowLeft size={25} className="text-body-text" />
            <BsArrowRight size={25} />
          </div>
          <div className='flex-col flex space-y-5 md:w-[450px] '>
            <p className='block text-xl text-body-text'> Instantly print your NFT and receive it at your home in less than a week. High quality only. </p>
            <h1 className='block md:text-5xl text-3xl font-extrabold'>Print your own NFT instantly </h1>
            <ButtonNoArrow name="print nft" className="bg-nav-button" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrintInstantlyCard
