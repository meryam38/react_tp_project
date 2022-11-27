import React from "react";

import "./styles.css";

const CustomButton = props => {
  return (
    <button className="pure-material-button" onClick={() => props.action()}>
      {props.text}
    </button>
  );
};

export default CustomButton;
