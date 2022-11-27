import React, { Component } from "react";

import "./styles.css";

class DisablableButtonClass extends Component {
  state = {
    isDisabled: false
  };

  handleClick() {
    this.setState({ isDisabled: true });
  }

  enable() {
    this.setState({ isDisabled: false });
  }

  render() {
    return (
      <button
        disabled={this.state.isDisabled}
        className="pure-material-button"
        onClick={() => this.handleClick()}
      >
        {this.props.text}
      </button>
    );
  }
}

export default DisablableButtonClass;
