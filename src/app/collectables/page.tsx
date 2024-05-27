import CollectablesPage from "./collectables-page"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collectables | NFT PrintPro',
  description: 'Print and ship NFTs world wide',
}

const page = () => {
  return (
    <div className="w-full">
      <CollectablesPage />
    </div>
  )
}

export default page
