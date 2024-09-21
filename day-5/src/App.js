import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";

function App() {
  const [incre,setIncre]= useState(0);
 
  const increment= () =>{
    setIncre(incre +1)
  }
  const deincrement =() =>{
    setIncre(incre-1)
  }
  return (
    <div >
     <h1>Counter</h1>
     <p>{incre}</p>
     <br/>
     <input type="button" value="+" onClick={increment}/>
     <input type="button" value="-" onClick={deincrement}/>
     
    </div>
  );
}

export default App;



