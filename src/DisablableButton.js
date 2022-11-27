import React, { useState } from "react";

import "./styles.css";

const DisablableButton = (props) => {
  
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
  }

  return (
      <button
        disabled={isDisabled}
        className="pure-material-button"
        onClick={() => handleClick()}
      >
        {props.text}
      </button>
    );
};

export default DisablableButton;
