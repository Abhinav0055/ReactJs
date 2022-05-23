import React, { useState } from 'react';

export default function Component2() {
  const [text, setText] = useState("In CU,hello guys the text will be converted on clicking !");
  const handleOnClick = () => {
    //console.log("you clicked on the button");
    let newText = text.toUpperCase();
    setText(newText);
    console.log(newText);
  }
  const handleOnChange = (event) => {
    console.log("text is inputed");
    setText(event.target.value);
  }

  const replaceStr = () => {
    let repStr=text.replace("CU","TU");
    setText(repStr);
  }
  const handleOnClear = () =>{
    let newtext=" ";
    setText(newtext);

  }
  const submitval=()=>{
    if (text.length<2){
      alert("please fill the text box");
    }
    else{
      alert("text box is filled");
    }
  handleOnClear();
  }
  const slice=()=>{
    let newSlice=text.slice(7,15);
    setText(newSlice);
  }
  const concat=()=>{
    var text1="helloguys";
    let newCon=text.concat(" ",text1);
    setText(newCon);

  }


  
  return (
    <>
      <div>
        <textarea className="form-control my-3" id="txtbox" rows="10" onChange={handleOnChange} value={text}></textarea><br></br>
        <button className="btn btn-primary mx-2" onClick={handleOnClick}>Change</button>
        <button className="btn btn-primary mx-3" onClick={replaceStr}>Replace</button>
        <button className="btn btn-primary mx-3" onClick={handleOnClear}>Clear</button>
        <button className="btn btn-primary mx-3" onClick={submitval}>Submit</button>
        <button className="btn btn-primary mx-3" onClick={slice}>Slice</button>
        <button className="btn btn-primary mx-3" onClick={concat}>Concat</button>
      </div>
      <div className='container my-3'>
        <h2>Summary</h2>
        <p>Total number of words: {text.split("").length}</p>
        <p>Total number of characters: {text.length}</p>

      </div>
    </>
  )
}
