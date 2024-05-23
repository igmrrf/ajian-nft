import AccountForm from "@/components/forms/account-form"

const page = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 px-5 md:px-36 pb-20 space-y-10">
      {/* hero */}
      <div className="border-nav w-full border-2 md:pl-10 px-3 flex flex-col py-10 justify-start items-start space-y-5">
        <h4 className='font-black md:text-5xl text-3xl '>MINT TO PRINT </h4>
        <p className='font-thin text-md'> Get your NFT minted immediately and ready to go instantly!</p>
      </div>
      {/* forms */}
      <AccountForm />
    </div >
  )
}

export default page
