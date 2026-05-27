import React from 'react'
import {Link} from 'react-router-dom'

const navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-8  bg-pink-300'>
      <h2 className='text-xl font-bold'>Trail Website</h2>
      <div className=' flex gap-8'>
        <Link className='text-lg font-bold'  to='/'>Home</Link>
          <Link className='text-lg font-bold'  to='/about'>About</Link>
            <Link className='text-lg font-bold'  to='/product'>Product</Link>
            <Link className='text-lg font-bold'  to='/courses'>Courses</Link>
      
        </div>
    </div>
  )
}

export default navbar
