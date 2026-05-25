import React from 'react'
import Rightcardcontent from './rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full overflow-hidden relative w-70 p-4 rounded-4xl'>
      
      <img
        className='h-full w-full object-cover rounded-4xl'
        src={props.img}
        alt='Image'
      />
      <Rightcardcontent id={props.id} tag={props.tag} />
    </div>
  )
}

export default Rightcard