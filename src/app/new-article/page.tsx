import type { Metadata } from 'next'
import NewArticlePage from './new-article-page'

export const metadata: Metadata = {
  title: 'New Article | NFT PrintPro',
  description: 'Print and ship NFTs world wide',
}



const page = () => {
  return (
    <div className="w-full">
      <NewArticlePage />
    </div>
  )
}

export default page
