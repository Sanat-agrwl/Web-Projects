
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,Switch,Route,Link
} from "react-router-dom"
// import {a,b,c} from './'

function App() {
  return (
   <>
   <Navbar title="sanat" />   
   <Textform heading="Enter text here"/>
   {/* <About/> */}
   
   
   </>
  );
}

export default App;


