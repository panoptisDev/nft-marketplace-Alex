import React from 'react'
import CreateCard from './CreateCard'

const Create = () => {
  return (
    <div>
        <div className='text-3xl font-bold'>
            Create a New NFT
            <div className='w-full my-3 bg-black/60 border-black/60 dark:bg-white/60 border dark:border-white/60'></div>
        </div>

        <div>
            <CreateCard />
        </div>
    </div>
  )
}

export default Create