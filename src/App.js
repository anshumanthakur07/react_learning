import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';
import About from './component/About';
import React, { useState } from 'react';
// import About from './component/About';

function App() {
  const [mode, setmode] = useState('dark');
  const [btn, setbtn] = useState('enable dark mode')
 const togglemode=()=>{

    if(mode==='dark')
    {
      setmode('light');
      setbtn('enable dark mode')
      document.body.style.backgroundColor='white';
    }
    else{
      
      setmode('dark');
      setbtn('enable light mode')
      document.body.style.backgroundColor='grey';
    }
  }
  return (
    <>
       {/* <Navbar title="TextUtil" link="about"/> */}
       <Navbar togglemode={togglemode} mode={mode} btn={btn}/>
       <div className="container">
      <About mode={mode}/>
       <Textarea heading="Enter Details" mode={mode}/>
       

      </div>
    </>
    
  );
}

export default App;
