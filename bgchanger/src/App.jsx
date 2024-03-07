import { useState } from "react";

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className="w-full h-screen duration-500 " style={{backgroundColor:color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 "> 

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
            <button onClick ={()=> setColor("red")} className="outine-none px-4 rounded-full text-white hadow-lg border-2 border-black"
             style={{backgroundColor: "red"}}>RED</button>
            <button onClick ={()=> setColor("green")} className="outine-none px-4 rounded-full text-white hadow-lg border-2 border-black"
             style={{backgroundColor: "green"}}>green</button>
            <button onClick ={()=> setColor("yellow")} className="outine-none px-4 rounded-full text-black hadow-lg border-2 border-black"
             style={{backgroundColor: "yellow"}}>yellow</button>
            <button onClick ={()=> setColor("blue")} className="outine-none px-4 rounded-full text-white hadow-lg border-2 border-black"
             style={{backgroundColor: "blue"}}>blue</button>
            <button onClick ={()=> setColor("purple")} className="outine-none px-4 rounded-full text-white hadow-lg border-2 border-black"
             style={{backgroundColor: "brown"}}>brown</button>
            <button onClick ={()=> setColor("pink")} className="outine-none px-4 rounded-full text-black hadow-lg border-2 border-black"
             style={{backgroundColor: "pink"}}>pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
