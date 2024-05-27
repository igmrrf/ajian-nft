import type { Metadata } from 'next'
import MintPage from './mint-page'

export const metadata: Metadata = {
  title: 'Mint | NFT PrintPro',
  description: 'Print and ship NFTs world wide',
}

const page = () => {
  return (
    <div className="w-full">
      <MintPage />
    </div>
  )
}

export default page
