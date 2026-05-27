import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

  const getdata = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    )

    setData(response.data)
  }

  return (
    <div>
      <button onClick={getdata}>Get Data</button>

      {data.map((elem) => (
        <div key={elem.id}>
          <h1>{elem.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default App