import CheckOutPage from "./checkout-page"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Checkout | NFT PrintPro',
  description: 'Print and ship NFTs world wide',
}

const page = () => {
  return (
    <div className="w-full">
      <CheckOutPage />
    </div >
  )
}

export default page
