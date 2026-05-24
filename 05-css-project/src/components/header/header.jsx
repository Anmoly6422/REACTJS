import React from 'react'
import second from './header.module.css'

const header = () => {
  return (
    <div className={second.header}>
        <h3>My App</h3>
        <button className={second.btn}>Login</button>
      
    </div>
  )
}

export default header
