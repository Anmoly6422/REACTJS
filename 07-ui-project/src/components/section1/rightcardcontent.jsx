import React from 'react'

const rightcardcontent = (props) => {
  return (
    <div>
       <div className='absolute inset-4 rounded-4xl p-6 flex flex-col justify-between'>
      <h2 className='bg-white text-xl font-bold  rounded-full h-10 w-10 flex justify-center items-center'>
        {props.id + 1}
      </h2>
      <p className='text-sm leading-normal text-white mb-1'>lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem ducimus quos iure! Numquam, deleniti  autem?</p>
       <div className='flex justify-between'>
        <button className='bg-blue-600 text-white font-semibold px-6 py-2 rounded-full'>{props.tag}</button>
        <button className='bg-blue-600 text-white font-semibold px-4 py-2 rounded-full'>→</button> 
       </div>
       </div>
    </div>
  )
}

export default rightcardcontent
