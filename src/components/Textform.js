import React,{useState} from 'react'



export default function Textform(props) {
  
  
  const [text,setText]=useState("");
  const handleUPclick= ()=>{
    let newText=text.toUpperCase();
    setText(newText);

  }

  const handleLowclick =()=>{
    setText(text.toLowerCase());
  }
  const handleCLear =()=>{
   
    setText("");
  }
  const handleOnchange= (event)=>{
     setText(event.target.value);
  }
  
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
    <textarea className="my-3 form-control"  id="floatingTextarea2"  onChange={handleOnchange} row ="8" value={text}></textarea>
    <button className=" my-3 btn btn-primary" onClick={handleUPclick}>convert Uppercase</button>
    <button className=" my-3 mx-3 btn btn-primary" onClick={handleLowclick}>convert lowercase</button>
    <button className=" my-3 mx-3 btn btn-primary" onClick={handleCLear}>Clear</button>
  </div>

  <div className="container my-3">
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length-1} Words And {text.length} Characters</p>
    <h2>Preview:</h2>
    <h3>{text}</h3>
  </div>
  </>
    
  )
}


