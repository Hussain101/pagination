import React from 'react'
import { useGlobalContext } from './context'

const Pagination = () => {
    const {nbPages,page,Prevpg,Nextpg} = useGlobalContext()
  return (
    <div className='flex justify-center items-center'>
        <button className='border-2 border-black px-3 py-2 rounded-lg' onClick={Prevpg}>PREV</button>
        <p className='mx-4 text-lg'>{page+1} of {nbPages}</p>
        <button className='border-2 border-black px-3 py-2 rounded-lg' onClick={Nextpg}>NEXT</button>
    </div>
  )
}

export default Pagination