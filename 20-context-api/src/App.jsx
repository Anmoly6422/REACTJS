import React from 'react'
import Navbar from './components/navbar';
import { useState } from 'react';

const App = () => {
  const[theme,Settheme]=useState('light')
  return (
    <div>
      <Navbar theme={theme}/>
    </div>
  )
}

export default App
