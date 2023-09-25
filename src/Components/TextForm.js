import React,{useState} from "react";

export default function TextForm(props){

    const handleUpClick=()=>{
    
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleClearClick=()=>{
      let newText=("");
      setText(newText);
    }

    const handleOnChange=(event)=>{
      
        setText(event.target.value);
    }
    const [text,setText] = useState("");
    return(
      <>
    <div className="container">
    <h1>{props.heading}</h1>
  <div className="mb-3">
   
    <textarea  className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    
  </div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1"  onClick={handleClearClick}>Clear Text</button>
  </div>
 <div className="container my-3">
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters </p>
    <p>{0.008*text.split(" ").length} minutes will take to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
 </div>
  </>  
    )
}