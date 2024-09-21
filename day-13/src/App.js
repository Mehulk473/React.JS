import './App.css';
import React ,{useState,useEffect} from 'react'

function App() {
  
    const [count,setCount]=useState(0)
    const [logMessages,setLogMessages]= useState([])
    
    // useEffect(()=>{
    //   updateLog('Component Mounted');
    // return()=>{updateLog('Component will Unmouted');}
    // },[])
    useEffect(()=>{
      updateLog(`Count CHanged to :${count}`)
    },[count])
  
  const updateLog =(message) =>{ setLogMessages(prevMessages =>[...prevMessages,message]);  };
 return(
  <div>
    <div>
      <h2>Log Messages</h2>
      <ul>
        {logMessages.map((message,index)=>(
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
    <p>Count :{count}</p>
    <button onClick={()=>setCount(count+1)}>Increase Count</button>
  </div>
 )
}

export default App;
