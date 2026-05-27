import react, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)
  useEffect(function(){
    console.log('useEffect called')
    },[num])
      return (
    <div>
      <h1>value of num: {num}</h1>
      <h2>value of num: {num2}</h2>
      <button onClick={()=>{
        setNum(num+1)
        setNum2(num2+10)
      }}>click</button>
    </div>
  )
}

export default App
