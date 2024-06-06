import React from 'react'

const loading = () => {
  return (
    <div className="w-full flex min-h-screen flex-col items-center py-10 md:px-36 px-5 pb-20 space-y-10">
      <p className='inline-block h-5 animate-pulse'>
        loading ...
      </p>
    </div>
  )
}

export default loading
