import './App.css';
import Accordian1 from './views/Accordian1'
// import Dummy from "./views/dummy"

function App() {
  return (
    <div className="App" style={{fontWeight:600}}>
   <h1 style={{padding:"20px",fontWeight:"700",fontSize:"30px",color: '#002441',lineHeight:'36px'}}>Frequently Asked Questions</h1>
   <Accordian1/>
<br/>
{/* <Dummy/> */}
    </div>
  );
}

export default App;
