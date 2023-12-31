import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked "+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!!","success")
  }
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
   props.showAlert("Converted to LowerCase","success") }
  const handleClearClick=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text is Cleared","success")
  }

  const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value);
    
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied!!","success")
  }
  const handleExtraSpace=()=>{
let newText=text.split(/[ ]+/);
setText(newText.join(" "))
props.showAlert("Extra Spaces is Erased!!","success")
  }
  const [text, setText]= useState('');
  // setText("new Text");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1 className='mb-2' style={{color:props.mode==='dark'?'#de7575':'rgb(97 241 220)'}}>{props.heading} </h1>
      <h3 className='mb-2'> {props.desc}</h3>
        <div className="mb-3">
        <textarea className="form-control" value={text} placeholder="Enter text here "onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1 style={{color:props.mode==='dark'?'#de7575':'rgb(97 241 220)'}}>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>    

      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
      <h1 style={{color:props.mode==='dark'?'#de7575':'rgb(97 241 220)'}}>Preview</h1>
      <p>{text.length>0?text:"Enter something in the textbox above to preview here."}</p>
    </div>
    </>
  )
}
