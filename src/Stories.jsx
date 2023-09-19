import React,{ useEffect } from 'react'
import axios from "axios";
const Stories = () => {
    const fetchapi = () =>{
        const res = axios.get("http://hn.algolia.com/api/v1/search?query=html").then
        ((res) =>{
            const data = res.json();
            console.log("🚀 ~ file: Stories.jsx:8 ~ fetchapi ~ data:", data)
        }).catch((err) =>{
            console.log(err,"erropr");
        }) 
    }
    useEffect(() => {
      fetchapi();
    
      
    }, [])
    
    return (
    <div>Stories</div>
  )
}

export default Stories