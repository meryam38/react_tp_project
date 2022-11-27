import React, { useState } from "react";

import "./styles.css";

const TextInput = (props) => {
  const [typedText, setTypedText] = useState("");

  const handleTextChange = (event) => {
    setTypedText(event.target.value);
    props.onChange(event);
  };

  return (
    <div>
      <input
        className="input"
        value={typedText}
        onChange={(event) => handleTextChange(event)}
        type="text"
      />
    </div>
  );
};

export default TextInput;
