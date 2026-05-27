import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useSyncExternalStore } from 'react'

const App = () => {
  const [userData, setuserData] = useState([])
 const[Index,setIndex]=useState(1)
  const getData = async() => {
  const response= await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=10`)
 setuserData(response.data)
  }

  useEffect(function(){
    getData()
  },[Index])
  let printUserData=<h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2  -translate-x-1 -translate-y-1'>Loading</h3>
  if(userData.length>0){
    printUserData=userData.map(function(elem,idx){
      return <div key={idx}>
        <a href={elem.url}>
           <div className='h-40 w-44 overflow-hidden  rounded-xl'>
        <img className='h-full w-full object-cover'src={elem.download_url} alt=""/></div>
        <h2 className='font-bold text-lg'>{elem.author}</h2>
          </a>
      </div>
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen text-white'>
     
       <div className='flex flex-wrap gap-4 p-4' >{printUserData} </div>
       <div className='flex justify-center gap-6 items-center p-4'>
        <button className='bg-red-600 text-white  rounded active:scale-95 px-4 py-2 font-semibold' 
        onclick={()=>{
           if(Index>1){setIndex(Index-1)}
           setuserData([])
        }}>prev</button>
        <h4>Page{Index}</h4>
        <button className='bg-red-600 text-white rounded active:scale-95 px-4 py-2 font-semibold' 
        onClick={()=>{
         setuserData([])
          setIndex(Index+1)
        }}>next</button>
       </div>
    </div>
  )
}

export default App
