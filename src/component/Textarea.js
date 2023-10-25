
import React, { useState } from 'react'

export default function Textarea(props) {

  const [text, setText] = useState('enter text here!');
  //text="new text"  ---->wrong way to change the state
  //setText("new text")  ---->right way to change the state

  const handleUpClick = () => {
    // console.log("uppercase was clicked!")
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to upper case","success");
    
  }
  const handledownpClick = () => {
    // console.log("lowercase was clicked!")
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to lower  case","success");
  }
  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("all text clear!!","success");
  }
  const handleColorClick = () => {
    let col=document.getElementById("txt_area");
    col.style.color="green";
    props.showAlert(`converted text color to ${col.style.color}`,"success");
  }
  const handleOnChange = (event) => {
    // console.log("onchange was clicked!")
    setText(event.target.value);
  }
  

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3" >
        <textarea className="form-control" id="txt_area" value={text} onChange={handleOnChange}  style={{background:props.mode==='dark'?'#304c4a':'white'}}  rows="8"></textarea>
      </div>
      <button type="buton" className='btn btn-primary mx-2 my-1'  onClick={handleUpClick}>upper_case</button>
      <button type="buton" className='btn btn-primary mx-2 my-1'  onClick={handledownpClick}>lower_case</button>
      <button type="buton" className='btn btn-primary mx-2  my-1' onClick={handleColorClick}>Text color</button>
      <button type="buton" className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>clear all</button>


      <div className="container">
        <h1>Your test summary</h1>
        <p> Number of words::{text.split(" ").filter((element)=>{ return element.length }).length} number of charecters ::{text.length}</p>
        <h2>preview</h2>
        <p>{text}</p>

      </div>

    </>
  )
}
