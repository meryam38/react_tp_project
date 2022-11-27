import React, { Component } from "react";

import "./styles.css";

class TextInputClass extends Component {
  state = {
    typedText: ""
  };

  handleTextChange(event) {
    this.setState({ typedText: event.target.value });
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
        <h2>Texte saisie : {this.state.typedText}</h2>
      </div>
    );
  }
}

export default TextInputClass;
