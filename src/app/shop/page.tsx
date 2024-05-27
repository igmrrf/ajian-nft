import type { Metadata } from 'next'
import ShopPage from './shop-page'

export const metadata: Metadata = {
  title: 'Shop | NFT PrintPro',
  description: 'Print and ship NFTs world wide',
}

const page = () => {
  return (
    <div className="w-full">
      <ShopPage />
    </div>
  )
}

export default page
