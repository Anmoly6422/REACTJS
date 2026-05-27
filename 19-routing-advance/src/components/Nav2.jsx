import React from 'react'
import {useNavigate} from 'react-router-dom'

const Nav2 = () => {
    const navigate = useNavigate()
       
  return (
    <div className='py-3 px-5 bg-gray-700'>
      <button onClick={()=>{
            navigate(-1)
         }}
          className='bg-red-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Back</button>
        <button onClick={()=>{
            navigate('/')
        }} className='bg-red-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Return To Home Page</button>
     
    </div>
  )
}

export default Nav2
