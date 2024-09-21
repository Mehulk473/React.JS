import logo from './logo.svg';
import './App.css';
import Fetchapi from './component/Fetchapi';
import { GrArchlinux } from "react-icons/gr";
import { GrAction } from "react-icons/gr";
import { GrAlarm } from "react-icons/gr";
import { GrAlert } from "react-icons/gr";
import { FcDislike } from "react-icons/fc";

function App() {
  return (
    <div className="App">
     {/* < Fetchapi /> */}
     <h1>This is 1st Icon</h1>
     <GrArchlinux />
     <h1>This is 2nd icon</h1>
     <GrAction />
     <h1>This is Alarm Icons</h1>
     <GrAlarm />
     <h1>This is alert icons </h1>
     <GrAlert />
     <h1>This is colored Icons</h1>
     <FcDislike />   
    </div>
  );
}

export default App;
