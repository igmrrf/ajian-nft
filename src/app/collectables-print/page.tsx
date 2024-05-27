import CollectablesPrintPage from "./collectables-print-page"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Print Collectables | NFT PrintPro',
  description: 'Print and ship NFTs world wide',
}

const page = () => {
  return (
    <div className="w-full" >
      <CollectablesPrintPage />
    </div >
  )
}

export default page
