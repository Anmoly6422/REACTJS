import React ,{useState} from 'react'

const App = () => {
  const [title,setTitle]=useState('')
  const [details,setDetails]=useState('')
const [task,setTask]=useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    const copyTask=[...task];
    copyTask.push({title,details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }
  const deleteNote=(idx)=>{const copyTask=[...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }
  return (
    <div className='min-h-screen overflow-x-hidden lg:flex bg-black text-white  '>
     
      <form
       onSubmit={(e)=>{
        submitHandler(e)}}
       className='flex  gap-3 lg:w-1/2 items-start  flex-col p-10   '>
         <h1 className='text-2xl font-bold'>Add Notes</h1>
   {/*first input*/}
        <input type="text" placeholder="Enter Note Heading..."
        className='px-5  py-2 w-full font-medium border-2 outline-none rounded' 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        {/*second input*/}
       <textarea type="text" 
       className='px-5  h-40 py-2  flex w-full font-medium border-2 outline-none rounded'
       placeholder="Enter Note Details..."
       value={details}
       onChange={(e)=>{
         setDetails(e.target.value)
       }}/>
    
       <button className='bg-white text-black active:bg-gray-300 active:scale-95  px-5 py-2 w-full font-medium outline-none rounded'>
        Add Notes</button>   
     
       
         </form>
       <div className=' lg:w-1/2 border-l-2 p-10'> 
       <h1 className='text-2xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap justify-start gap-5 mt-5 h-full overflow-auto'> 
        {task.map(function(elem,idx){
          return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-42 bg-cover rounded-2xl text-black pt-7 pb-5 px-3 bg-white'>
          <div>
            <h3 className='leading-tight text-xl  font-bold'>{elem.title}</h3>
          <p className='mt-2 leading-tight h-20 m-1 text-sm font-medium text-gray-500 overflow-hidden overflow-y-auto'>{elem.details}</p>
          </div>
          <button
          onClick={()=>{
            deleteNote(idx)
          }} 
          className='w-full bg-red-400 text-white font-bold py-1 text-xs rounded-full active:scale-95'>
            Delete
          </button>
          </div>
        })}         
         
         </div>
       </div>
    </div>
  )
}

export default App
