import "./App.css";
import Footer from './components/Footer'
import Header from "./components/Header";
import Signup from "./components/Signup";

// import Signup from "./pages/account_open";

function App() {
  return (
    <div>
      <Header />
      <br/>
      <Signup />
      <br/>
      <Footer />
    </div>
  );
}

export default App;