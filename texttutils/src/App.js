import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
function App() {
  const [mode,setMode] =useState('light')
  const [alert,setAlert] =useState(null)
  const showAlert = (message,type)=>{
    setAlert = ({
      message :message,
      type:type
    })
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'navy';
     showAlert("dark mode has been enable, success")
    }

    else{
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enable, success")
      
    }
  }
  return (
    <>  
<Navbar title ="TextTutils" mode =  {mode}  toggleMode = {toggleMode} aboutText ="About" />
  <Alert alert ={alert}/>
{/* <Navbar/> */}
<div className="container my-3">
  <Textform heading = "Enter the text form analyze below" mode = {mode} />
  {/* <About/> */}

  </div>
  
</>

  );

}
export default App;
