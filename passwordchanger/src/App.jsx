import { useState,useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
 
  const [length,setLength] = useState(8);//length of password
  const [numberallowed, setNumberallowed] = useState(false);//number allowed hai ya nhi wala variable h
  const [charallowed, setcharallowed] = useState(false);// special character allow h ya nhi
  const [password, setPassword] = useState("");//password variable to store and change it

  const passwordgenerator = useCallback(()=>{
    let pass=""; 
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcsdefghijklmnopqrstuvwxyz";

    if(numberallowed) str+="0123456789";
    if(charallowed)  str+="@#$%&*";
  
    for(let i=0;i<length;i++){
      let n = Math.floor(Math.random() * str.length + 1);//generate a random no.
      pass += str.charAt(n);
      
    }
    
  setPassword(pass);//change the value of password by using setpassowrd method of usestate


  } , [length,numberallowed,charallowed,setPassword]);//ye jo dependency le rha hai wo optimize krne ke liye cache memory me le rha hai


//ab me chahata hu ki ek baar mera pswd generate ho jaaye jb me pswdgen() method ko call kru to uske liye useEffect use kiya gya h

  useEffect(()=>{
    passwordgenerator()
  },[length,numberallowed,charallowed,passwordgenerator]);//but ye jo dependency lega wo whi hogi jo isse related hai aur jb bhi inme change hoga ye rerender hoga


  // now problem ye hai ki ab copy kaise krenge, uske liye useRef hook use krenge ab mujhe passowrd ka reference lekr use copy krna hai

  const copypassword = useCallback(()=>{
    passowordref.current?.select();//this is used for selecting while clicking on copy button yha passwordref to reference hai hi password ka
    window.navigator.clipboard.writeText(password);//this code is for copying the text in clipboard for password variable
  },[password])

  const passowordref = useRef(null);//here we are taking reference of password kyuki input me humne iska use kiya hai dekho jaake
  
  //usecallback hooks: function  ko memorize krta hai apni cache memory me optimize krne ke liye iska mtlb har jagah usecallback mt kr dena
  // useEffect hooks: ka kaam sirf ek baar chalna hai declare hone pr aur tb tb chlega jb uski dependency se chedchad hogi jaise ki upr length wagera de rkha hai humne

 

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text" value={password} className="outline-none  w-full py-1 px-3"
            placeholder="Password" readOnly
          ref={passowordref}//ye passwordref se connect hai
          />
        <button className='box' onClick={copypassword}>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
    <input 
    type="range"
    min={8}
    max={100}
    value={length}
    className=' cursor-pointer'
    onChange={(e)=>{setLength(e.target.value)}}
    />
  <label > Length:{length}</label>

<input type="checkbox" 
 defaultChecked={numberallowed}
 id='numberInput'
 onChange={()=>{
  setNumberallowed((prev)=>!prev)
 }}
/>
 <label>Numbers</label>
 
<input type="checkbox" 
 defaultChecked={charallowed}
 id='numberInput'
 onChange={()=>{
  setcharallowed((prev)=>!prev)
 }}
/>
 <label>Characters</label>
 </div>
 </div>
    </div>

    </>
  )
}

export default App