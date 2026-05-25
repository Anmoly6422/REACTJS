import React from 'react'

const App = () => {
  return (
    <div>
      <div onMouseMove={(elem) => {
        console.log(elem.clientY);
      }} className="box"></div>
    </div> 
  )
}

export default App
