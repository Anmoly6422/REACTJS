import React from 'react'
import {useParams} from 'react-router-dom'

const coursedetail = () => {
    const param=useParams()
   
  return (
    <div>
      <h1>{param.id} Course details</h1>
    </div>
  )
}

export default coursedetail
