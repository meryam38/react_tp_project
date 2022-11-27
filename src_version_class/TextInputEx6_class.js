import React, { Component } from "react";

import "./styles.css";

class TextInputEx6Class extends Component {
  state = {
    typedText: ""
  };

  handleTextChange(event) {
    this.setState({ typedText: event.target.value });
    this.props.onChange(event);
  }

  render() {
    return (
      <div>
        <input
          className="input"
          value={this.state.typedText}
          onChange={event => this.handleTextChange(event)}
          type="text"
        />
      </div>
    );
  }
}

export default TextInputEx6Class;
