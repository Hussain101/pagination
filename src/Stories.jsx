import React,{ useEffect,useState } from 'react'

import Loader from './Loader';

import { useGlobalContext } from './context';
import Pagination from './Pagination';
const Stories = () => {
  const {query,loading,hits,nbPages,removePost,SearchPost} =useGlobalContext();
 
    return (

    <div>
      
      <div>
        <input 
        type="text"
        value={query}
        onChange={(e) => SearchPost(e.target.value)}
        />
      </div>
      <Pagination />
      {
        loading === true ? <Loader /> :<div>{
          hits.map((items) =>{
            return(
              <div key={items.objectID} style={{display:"flex",border:"2px solid black", margin:"12px", padding:"2px"}}>
                <p>{items.title}</p>
                <button onClick={() => removePost(items.objectID)}>Remove</button>
              </div>
            )
          })
          } </div>
      }
    </div>
  )
}

export default Stories