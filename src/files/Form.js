import React, {useState} from 'react'


export default function Form(props) {
  const touchupclick = ()=>{
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const touchupchange = (event)=>{
    console.log("Uppercase was clicked");
    setText(event.target.value);
  }
  const Touchonclick = ()=>{
    console.log("lowercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const Touchonchange = (event)=>{
    console.log("lowercase was clicked");
    setText(event.target.value)
  }
  const Touchforclick = ()=>{
    console.log(text);
    let newText = '';
    setText(newText)
  }
  const handleclick = ()=>{
    var text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const spaceoutclick = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
 
  const [text,setText] = useState('Enter the text here');
  return (
    <div>
      <h1>{props.heading}</h1>
      <form>
      <div className="mb-3">
 
  <textarea className="form-control" id="myText" value={text} onChange={touchupchange} rows="10" onChange1={Touchonchange} ></textarea>
</div>
  
  </form>
  <button className="btn btn-primary mx-1" onClick={touchupclick}>Convert To Uppercase</button>
  <button className="btn btn-secondary mx-1" onClick={Touchonclick} >Convert To Lowercase</button>
  <button className="btn btn-primary mx-1" onClick={handleclick}>Copy Text</button>
  <button className="btn btn-secondary mx-1" onClick={spaceoutclick} >Remove Extra Space</button>
  <button className="btn btn-danger mx-1" onClick={Touchforclick} >Clear Text</button>
  
  
  <div className='container my-3'>
    <h1> Text Summary</h1>
    <p> {text.split(' ').length} words and {text.length} characters</p>
    <p> {0.008 *text.split("").length } Minutes read</p>
    <h2>Preview</h2>
    <p> {text}</p>
  </div>
  </div>
  
  )
}
