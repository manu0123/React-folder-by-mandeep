import React , { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode] =useState('light')
  const [alert,setAlert]=useState(null);

  const showAlert = (message, type) => {
    setAlert({
    message: message,
        type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
}

  function toggleMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'navy';
     showAlert("Dark mode enable ","success")
     document.title = "texttutils-dark mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enable ","success")
     document.title = "texttutils-light mode"

    
    
    }
 
    // In the above case, we have called the showAlert function to display our alert message while interchanging the light 
  }
  return (
    <>  
      <Router>
<Navbar title ="TextTutils" mode =  {mode}  toggleMode = {toggleMode} aboutText ="About" />
<Alert alert = {alert}/>
{/* <Navbar/> */}
<div className="container my-3">

<Switch>
          <Route exact path="/about">
            <About />
          </Route>
         
          <Route exact path="/">
          <Textform showAlert ={showAlert} heading = "Enter the text form analyze below" mode = {mode} />

          </Route>
        </Switch>
</div>
  </Router>

 
  
</>

  );

}
export default App;
