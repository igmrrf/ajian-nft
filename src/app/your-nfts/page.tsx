import YourNftsPage from "./your-nfts"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your NFTS | NFT PrintPro',
  description: 'Print and ship NFTs world wide',
}


const page = () => {
  return (
    <div className="w-full">
      <YourNftsPage />
    </div>
  )
}

export default page 
