
import './App.css';
import React,{useState} from 'react'



  const App = () => {
    const [bud,setBudget]= useState(0)
    const [cur,setCur]= useState(0)
    const [sum,setSum]= useState(0)
    
    const show = () =>{
      const dynamicDiv= document.getElementById('dynamic')
      const newDiv=  dynamicDiv.cloneNode(true) //Clone Making
      dynamicDiv.parentNode.appendChild(newDiv)
      
      const newInput = newDiv.querySelector('.sum')
      if(newInput){
        newInput.value=""
        newInput.addEventListener('keyup',sumCalc) //used to add new event(clone)
      }  
      const newInput1 = newDiv.querySelector('.title')
      if(newInput1){
        newInput1.value="";
      }
     
    }
    const sumCalc = () => {
      let total =0;
      const amtElement= document.getElementsByClassName('sum')
      for(let i=0;i<amtElement.length;i++){
       let value =parseFloat(amtElement[i].value) ||0
       total += value
      }
       setSum(bud-total)
      setCur(total)
  
    }
  return (
    <div >
      <h1 style={{textAlign:"Centre", color:'green' , margintop:"20px", fontweight:'bold', fontStyle:'italic',textDecoration:'underline'}}>Budget Management</h1>
      Approved <input style={{width:"60px"}} type ="text" placeholder='Final Amt' id='fin_amt' onChange={(e)=>setBudget(e.target.value)}/>
      <button onClick={show} >+</button>  
      <p style={{textAlign:'right',marginRight:'100px'}}>
        {sum!==0 ?sum:'0'}
        Current Sum {cur}
        <div id='dynamic'>
          <input  type='text' className='title' style={{marginTop:"20px",width:"100px",marginRight:"50px"}} placeholder='Expense Name' />
          <input  type='text' onChange={sumCalc} style={{width:"100px"}} placeholder='Amount' className='sum'/>
        </div>
        </p>  

    </div>
  );
  }


export default App;
