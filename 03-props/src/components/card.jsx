import React from 'react'

const card = (props) => {
   
  return (
    <div>
    <div className="card">
        <img src= {props.img}alt="Sample" />
        <h1>{props.user},{props.age},</h1>
        <p >Ohh this is the sample paragraph</p>
        <button>Try Me</button>
      </div>
      </div>
  )
}

export default card
