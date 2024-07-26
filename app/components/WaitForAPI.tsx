'use client'
import React ,{ useEffect ,useState } from 'react'


const WaitForAPI = () => {
    const [post,setPost]=useState(null)
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response=>response.json())
    .then(response=>{
    const {body}=response
   setPost(body)
  }  
  )
},[])

    return (
      <div>
        {post?post : <div className='w-full h-full'>Duke Wriothesley searching document for you</div>}
      </div>
    )
  }
  
  export default WaitForAPI
