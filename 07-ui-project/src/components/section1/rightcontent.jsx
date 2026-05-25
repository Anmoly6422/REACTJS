import React from 'react'
import Rightcard from './rightcard'

const rightcontent = (props) => {
  return (
    <div className='h-full flex flex-nowrap  w-3/4 '>
    {props.users.map(function(elem,idx){
      return <Rightcard key={idx} id={idx}img={elem.img}  tag={elem.tag}/>
    })}
    </div>
  )
}

export default rightcontent
