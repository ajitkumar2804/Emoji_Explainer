import "./styles.css";
import React, { useState } from "react";
import emojidict from "./emojipedia";

var emojilist = Object.keys(emojidict);

export default function App() {
  var [meaning, setmeaning] = useState("");
  function emojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojidict[userInput];
    if (meaning === undefined) {
      meaning = "We Dont have this in our database ";
    }
    setmeaning(meaning);
  }
  function emojiclickHandler(emoji) {
    var meaning = emojidict[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emoji Explainer</h1>
      <input
        onChange={emojiHandler}
        placeholder="Enter Emoji Here.....!! "
      ></input>
      <h2>{meaning}</h2>

      <h3>Checkout Few Emoji 👇</h3>
      {emojilist.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
