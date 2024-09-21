import './App.css';
import React,{useState,useEffect} from 'react'


function App() {
  const [username,setusername]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [error,seterror]=useState({
    username:"",
    email:"",
    passwrod:""
  })
  useEffect(()=>{
    const Validate =()=>{
      if(username==""){
        error="Please Enter Username"
      }
    }
  })



  return (
    <div >
   <form>
      <h2>Form Validation</h2>
      <input type='text' placeholder='Enter Username' onChange={(e)=>setusername(e.target.value)}/>
      <br/><br/>
      {error && <span style={{ color: 'red' }}>{error}</span>}
      <br/><br/>
      <input type='text' placeholder='Enter Email' onChange={(e)=>setemail(e.target.value)}/>
      <br/><br/>
      <input type='text' placeholder='Enter Password'onChange={(e)=>setpassword(e.target.value)}/>
      <br/><br/>
      <button onClick={Validate}>Validate</button>
   </form>
    </div>
  );
}

export default App;
