//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

// let name = "vikash";
function App() {
const [mode,setMode] = useState('light')
const [alert,setAlert] = useState(null);

const showAlert = (message,type) =>
{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}
const toggleMode = () => {
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor='grey'
    showAlert("Dark mode enabled","success");
    document.title=('Textutils - Dark Mode');
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light mode enabled","success");
    document.title=('Textutils - Light Mode');
  }
}
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3" mode={mode}>
      <Routes>
        <Route exact path="/About" element={<About/>}/>
      </Routes>
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text" mode={mode}/>}/>
      </Routes>
        </div>
    </BrowserRouter>
      
      
    </>
  );
}

export default App;
