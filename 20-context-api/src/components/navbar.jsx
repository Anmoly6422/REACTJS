import React, { useContext } from 'react'
import Nav2 from './nav2'
import { ThemeDataContext } from '../context/themecontes'
const navbar = (props) => {
  const data = useContext(ThemeDataContext)
 
  return (
    <div className='nav'>
        <h2>{data}</h2>
        <Nav2 theme={props.theme} />

      
    </div>
  )
}

export default navbar
