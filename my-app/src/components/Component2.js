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
    let repStr = text.replace("CU", "TU");
    setText(repStr);
  }
  const handleOnClear = () => {
    let newtext = " ";
    setText(newtext);

  }
  const submitval = () => {
    if (text.length < 2) {
      alert("please fill the text box");
    }
    else {
      alert("text box is filled");
    }
    handleOnClear();
  }
  const slice = () => {
    let newSlice = text.slice(7, 15);
    setText(newSlice);
  }
  const concat = () => {
    var text1 = "helloguys";
    let newCon = text.concat(" ", text1);
    setText(newCon);

  }
  //let myStyle = {
    //color:"white",
    //backgroundColor: "black",

 // }
  const[myStyle,setMyStyle]= useState({
    color:"white",
    backgroundColor:"black"
})
  const toggleStyle=()=>{
    if(myStyle.color=="white"){
      setMyStyle({
        color:"blue",
        backgroundColor:"pink"
      })
    }
  }



  return (
    <>
    <div className='container my-3'>
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

      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h1 style={myStyle}>Discussion of Accordian</h1>
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={myStyle}>
              Section 1
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" style={myStyle}>
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={myStyle}>
              Section 2
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" style={myStyle}>
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={myStyle}>
              Section 3
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample" style={myStyle}>
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary mx-3" onClick={toggleStyle}>Mode</button>
      </div>
    </>
  )
}
