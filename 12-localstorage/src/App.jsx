import React from 'react'

const App = () => {

  localStorage.setItem('age','21')
  const age = localStorage.getItem('age')
  console.log(age);
  localStorage.removeItem('age')
  const user={
    username:'Anmol',
    age:21,
    city:'kanpur'
  }
  localStorage.setItem('user',JSON.stringify(user))

  return (
    <div>
      App
    </div>
  )
}

export default App
