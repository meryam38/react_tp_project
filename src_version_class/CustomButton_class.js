import React, { Component } from "react";

import "./styles.css";

class CustomButtonClass extends Component {
  render() {
    return (
      <button className="pure-material-button" onClick={this.props.action}>
        {this.props.text}
      </button>
    );
  }
}

export default CustomButtonClass;
