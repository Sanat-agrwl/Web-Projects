import React,{useState} from 'react'

export default function Textform() {
  const [Text, setText] = useState('');

  const handleUppercaseClick=()=>{
    console.log("uppercase clicked");
    let NewText=Text.toUpperCase();

    setText(NewText);

  }

  const handleCopy = () => {
    navigator.clipboard.writeText(Text); 
    alert("Copied");
}
  const handleLowercaseClick=()=>{
    console.log("Lowercase clicked");
    let Newtext1=Text.toLowerCase();

    setText(Newtext1);
  }

  const handleOnChange=(event)=>{
    console.log("ON change");
    setText(event.target.value)
  }

  const handleclear=()=>{
    console.log("clear text");
    setText("");
  }
  return (
    <>
<div className="mb-3">
  <textarea class="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUppercaseClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-3" onClick={handleLowercaseClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-3" onClick={handleCopy}>Copy To Clipboard</button>
<button className="btn btn-danger mx-3" onClick={handleclear}>Clear Text</button>
<div className='container my-3 px-3'>
<h2>Text Report</h2>
<p>Character count :{Text.length}</p>
<p>Minutes required to read :{0.008 * Text.length}</p>
</div>
<div className='container'>
  <h3>Preview</h3>
  <div className='container border '><p>{Text}</p></div>
 
</div>

 </>
  )
}
