import NftPage from "./nft-page"
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Credit | NFT PrintPro',
  description: 'Print and ship NFTs world wide',
}

const page = ({params}:{params: {nft:string}}) => {
  return (
    <div className="w-full">
      <NftPage item={params}/>
    </div>
  )
}

export default page
