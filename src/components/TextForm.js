import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to upper case", "success");
  };
  const handleUpClick1 = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert("Convert to lower case", "success");
  };
  const handleOnChange = (event) => {
    //for typing in text area
    // console.log("OnChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  // text="new text";//wrong way to change state
  // setText("new text");//correct way to change state

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          Convert to Upper case
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleUpClick1}
        >
          Convert to Lower case
        </button>
      </div>
      <div
        className="container"
        my-2
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
