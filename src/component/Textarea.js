
import React,{useState} from 'react'

export default function Textarea(props) {
    const handleUpClick=()=>{
    // console.log("uppercase was clicked!")
    let newtext=text.toUpperCase();
    setText(newtext);
    }
    const handledownpClick=()=>{
    // console.log("uppercase was clicked!")
    let newtext=text.toLowerCase();
    setText(newtext);
    }
    const handleOnChange=(event)=>{
    // console.log("onchange was clicked!")
    setText(event.target.value);
}
                                                                  //text="new text"  ---->wrong way to change the state
                                                              //setText("new text")  ---->right way to change the state
const[text,setText]=useState('enter text here!');

    return (
        <>   
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="txt_area" value={text} onChange={handleOnChange}  rows="8"></textarea>
</div>
<button type="buton" className='btn btn-primary' onClick={handleUpClick}>uppar_case</button>

<button type="buton" className='btn btn-primary'  onClick={handledownpClick}>lower_case</button>
      
    </>
  )
}
