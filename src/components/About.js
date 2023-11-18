import React from 'react'

export default function About(props) {
  // const [myStyle,setMyStyle]=useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })
  let myStyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(36,74,104)':'white',
  }
  return (
    <div className="container" >
        <h1 className="my-3"style={{color:props.mode==='dark'?'#de7575':'rgb(97 241 220)'}} >About Us</h1>
      <div className="accordion" id="accordionExample" >
            <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyse Your Text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
      TextInspect gives you a way to analyse your text quickly and efficiently. Be it work count, character count, Changing Letter cases and many more.
      </div>
    </div>
  </div>
            <div className="accordion-item"style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body"style={myStyle}>
                    TextInspect is a free character counter tool that provide instant character count and word count statistics for a given text. TextInspect reports the number of words and charcters. Thus it is suitable for writing text with word/charcter limit.
                    </div>
                </div>
                </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body"style={myStyle}>
                   This word counter software works in any Web Browsers such as Chrome, Firefox, Internet Explorer, Brave, Microsoft Edge, Safari or Opera. It suits to count charcters in facebook, blog, books, excel Document, PDF, etc.
                    </div>
                </div>
        </div>
        </div>
    </div>
  )
}
