import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black
      p-3 rounded-xl mb-5'>TailWind test</h1>

    <Card username = "Sneh Deep" btnText= "visit me" />
    <Card username = "Mehta" />

    </>
  )
}

export default App
