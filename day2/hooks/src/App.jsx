import {useState} from 'react'
import './App.css'

function App() {

  const [counter,setCounter] =useState(15)

  // let counter = 15

  function addValue(){
   if(counter<=19)setCounter( counter+1);
    else{
      setCounter(0);
    }
   
    
  }
  function removeValue(){
    
    if(counter>=1)setCounter( counter-1);
   
    
  }
  
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove Value{counter}</button>
      <p>footer </p>
    </>
  )
}

export default App
