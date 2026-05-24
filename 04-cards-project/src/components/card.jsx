import React from 'react'

const card = (props) => {
  return (
    <div>
      <div className='cards'>
      <div className='top'>
      <img src={props.brandLogo} alt={props.companyName} />
      <button>Click Me</button>
      </div>
      <div className='center'>
        <h3>{props.companyName}<span>{props.datePosted}</span></h3>
        <div className='tag'><h4>{props.tag1}</h4>
        <h4 >{props.tag2}</h4></div>
      </div>
      <div className='bottom'>
        <div className='bot'>
          <div><h3>{props.pay}</h3>
          <p>{props.location}</p></div>
          <button>Apply Now</button>
        </div>
        
      </div>
     </div>
    </div>
  )
}

export default card
