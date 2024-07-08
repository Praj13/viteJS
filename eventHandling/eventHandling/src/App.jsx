import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("Prajwol")
  const [form, setForm] = useState({email:'',phone:''})
  const handleEvent=()=>{
    alert("button is clicked");
  }

  const mouseover=()=>{
    alert(" mouse was hovered over red button");
  }

  const changeName=(e)=>{
setname(e.target.value)  }

const handleChange=(e)=>{
  setForm({...form,[e.target.name]:e.target.value})

}
  return (
    <>
     <button onClick={handleEvent}>click me</button>
     <button className='red' onMouseOver={mouseover}>hover me</button>
     <input type="text" value={name} style={{backgroundColor:'green',marginLeft:'5px'}} onChange={changeName} name="" id="" />
     

     <input type="text" name="email" value={form.email} onChange={handleChange} />
     <input type="text" name="phone" value={form.phone} onChange={handleChange}/>


    </>
  )
}

export default App
