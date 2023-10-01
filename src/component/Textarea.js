
import React, { useState } from 'react'

export default function Textarea(props) {

  const [text, setText] = useState('enter text here!');
  //text="new text"  ---->wrong way to change the state
  //setText("new text")  ---->right way to change the state

  const handleUpClick = () => {
    // console.log("uppercase was clicked!")
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handledownpClick = () => {
    // console.log("lowercase was clicked!")
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
  }
  const handleColorClick = () => {
    let col=document.getElementById("txt_area");
    col.style.color="green";
  }
  const handleOnChange = (event) => {
    // console.log("onchange was clicked!")
    setText(event.target.value);
  }
  

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="txt_area" value={text} onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button type="buton" className='btn btn-primary mx-2' onClick={handleUpClick}>uppar_case</button>
      <button type="buton" className='btn btn-primary mx-2' onClick={handledownpClick}>lower_case</button>
      <button type="buton" className='btn btn-primary mx-2' onClick={handleColorClick}>Text color</button>
      <button type="buton" className='btn btn-primary mx-2' onClick={handleClearClick}>clear all</button>


      <div className="container">
        <h1>Your test summary</h1>
        <p> Number of words::{text.split(" ").length} number of charevters ::{text.length}</p>
        <h2>preview</h2>
        <p>{text}</p>

      </div>

    </>
  )
}
