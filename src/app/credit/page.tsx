import type { Metadata } from 'next'
import CreditPage from './credit-page'

export const metadata: Metadata = {
  title: 'Credit | NFT PrintPro',
  description: 'Print and ship NFTs world wide',
}

const page = () => {
  return (
    <div className="w-full">
      <CreditPage />
    </div>
  )
}

export default page
