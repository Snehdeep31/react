import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(15)

  //let counter = 15;

  const addValue = () =>{

    // console.log("value add" , Math.floor(Math.random()*10)+1)
    //aise likho ya
    /*counter =  counter+1;
    setCounter(counter);*/

    //aise
    setCounter(counter+1);

  }

  const decvalue = ()=>{
    if(counter>=1){
      counter = counter-1;
       setCounter(counter); 
    }

  }


  return (
    
    <>
    <h1>chai or react</h1>
    <h2>counter value: {counter}</h2>

    <button onClick={addValue}>Add Value{counter}</button>
    <br></br>
    <button onClick={decvalue}>Remove Value{counter}</button>
    </>
  )
}

export default App
