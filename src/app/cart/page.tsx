import type { Metadata } from 'next'
import CartPage from './cart-page'

export const metadata: Metadata = {
  title: 'Cart | NFT PrintPro',
  description: 'Print and ship NFTs world wide',
}



const page = () => {
  return (
    <div className="w-full">
      <CartPage />
    </div>
  )
}

export default page
