import React, { useState } from "react";

import "./styles.css";

const TextInput = (props) => {

  const [typedText, setTypedText] = useState(""); 

  const handleTextChange = (event) => {
    setTypedText(event.target.value);
  }
  
  return (
      <div>
        <input
          className="input"
          value={typedText}
          onChange={event => handleTextChange(event)}
          type="text"
        />
        <h2>Texte saisie : {typedText}</h2>
      </div>
    );
}

export default TextInput;
