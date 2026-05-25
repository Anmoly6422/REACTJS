import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'
const page1content = (props) => {
  return (
    <div className='py-10 flex justify-between gap-10 h-[90vh]  px-12'>
      <Leftcontent />
      <Rightcontent users={props.users} />
    </div>
  )
}

export default page1content
