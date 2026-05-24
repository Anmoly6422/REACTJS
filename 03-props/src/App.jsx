import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className="parent">
   <div><Card user='Anmol Yadav' age={25} img='https://images.unsplash.com/photo-1775656926048-16743f9a6c7a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/></div>
    <div><Card user='John Doe' age={30} img='https://plus.unsplash.com/premium_photo-1778409605410-10210b8c2dcd?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/></div>
    </div>
  )
  
}

export default App
