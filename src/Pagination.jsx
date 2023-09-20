import React from 'react'
import { useGlobalContext } from './context'

const Pagination = () => {
    const {nbPages,page} = useGlobalContext()
  return (
    <div style={{display:"flex"}}>
        <button>PREV</button>
        <p>{page+1} of {nbPages}</p>
        <button>NEXT</button>
    </div>
  )
}

export default Pagination