import NftPage from "./nft-page"
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Credit | NFT PrintPro',
  description: 'Print and ship NFTs world wide',
}

const page = () => {
  return (
    <div className="w-full">
      <NftPage />
    </div>
  )
}

export default page
