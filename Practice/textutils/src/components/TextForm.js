import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Entre the text");
  // setText();

  // to UpperCase
  const handleUpClick = () => {
    let upper = text.toUpperCase();
    setText(upper);
    props.showAlert("Converted to UpperCase!", "Success");
  };

  // to lowerCase
  const handleLwClick = () => {
    let lower = text.toLowerCase();
    setText(lower);
    props.showAlert("Converted to LowerCase!", "Success");

  };
  // Clear Text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text!", "Success");
  };

  //copy
  const handleCopy = () => {
    var text = document.getElementById("comment");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy!", "Success");
  };

  //Remove Extra Spaces
  const handleExtraSpace = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Remove Extra space!", "Success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container"  style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            rows="8"
            id="comment"
            name="text"
            style={{backgroundColor: props.mode ==='dark'?'#042743':'white', color:  props.mode ==='dark'?'white':'#042743'}}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleUpClick}
        >
          Change to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleLwClick}
        >
          Change to LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleCopy}
        >
          Copy text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>

      <div className="container my-3"  style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h3>Your text Summary</h3>
        <p>
          {text.split(" ").length - 1} words and {text.length} Characters in the
          summary
        </p>
        <p>{0.008 * text.split(" ").length - 0.008} need to read this sumary</p>

        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
