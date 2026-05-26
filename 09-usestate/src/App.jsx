 //import React ,{useState, useSyncExternalStore} from 'react'

// const App = () => {
//   const [num,setNum] = useState(10)
//   const [username,setUsername] = useState('Anmol')
//   const [user,setUser] = useState([10,20,30,40])
//   function changeNum(){
//     setNum(30);
//     setUsername('Anmol Yadav');
//     setUser([50,60,70,80]);
//   }
//   return (
//     <div>
//       <h1>value of a is: {num}</h1>
//       <h1>username is: {username} <br/> user is:{user}</h1>
//       <button onClick={changeNum}>Click me</button>
//     </div>
//   )
// }

// export default App
import React,{useState} from 'react'

const App = () => {
  const [num,setNum] = useState(0);
  function increaseNum(){
    setNum(num+1);
   
  }
    function decreaseNum(){
      setNum(num-1);
    }
    function jump(){
      setNum(num+5);
    }
  return (
    <div >
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jump}>Jump by 5</button>
    </div>
  );
}
export default App

