import React,{useState} from 'react'

export default function Textform(props) {
  const handleOnClick=()=>{
    // console.log("upper case was clicked"+text);
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleoffClick=()=>{
    // console.log("upper case was clicked"+text);
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const handleclear=()=>{
    // console.log("upper case was clicked"+text);
    let newtext = ("");
    setText(newtext);
  }
  const onChangeHandler=(event)=>{
    // console.log("onChangle");
    setText(event.target.value);
  }
  const [text, setText] = useState(" ");

// text = "new text" this is wrong way to change state
// setText("new text");correct way
  return (<>  
  <div className="container " style ={{color :props.mode === 'dark'?'white':'black'}}>
  
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value ={text} onChange = {onChangeHandler} style ={{backgroundColor :props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'black'}}id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleOnClick}> Convert to Upper case</button>
<button className="btn btn-primary mx-3" onClick={handleoffClick}> Convert to Upper case</button>
<button className="btn btn-primary mx-3" onClick={handleclear}> Clear text</button>

    </div>
    </div>
    <div className="container my-3"  style ={{color :props.mode === 'dark'?'white':'black'}}>
    <h2>Your text summry</h2>
    <p> Words {text.split(" ").length} Characters {text.length}</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>

  )
}


