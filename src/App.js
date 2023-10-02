import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';
import About from './component/About';
import React, { useState } from 'react';
import Alert from './component/Alert';
// import About from './component/About';

function App() {
  const [mode, setmode] = useState('dark');
  const [btn, setbtn] = useState('enable dark mode')
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      tpe: type
    })

    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'dark') {
      setmode('light');
      setbtn('enable dark mode')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled","success");
    }
    else {

      setmode('dark');
      setbtn('enable light mode')
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode is enabled", "success");
    }
    


  }
  return (
    <>
      {/* <Navbar title="TextUtil" link="about"/> */}
      <Navbar togglemode={togglemode} mode={mode} btn={btn} />
      <Alert alert={alert} />
      <div className="container">
        <About mode={mode} />
        <Textarea  showAlert={showAlert}heading="Enter Details" mode={mode} />
      </div>
    </>

  );
}

export default App;
