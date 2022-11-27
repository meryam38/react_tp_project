import React, { Component } from "react";

import TextInputEx6 from "./TextInputEx6_class";

import "./styles.css";

class NewPeople2Class extends Component {
  state = {
    firstName: "",
    lastName: ""
  };

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  render() {
    return (
      <div>
        <TextInputEx6
          id="lastName"
          value={this.state.lastName}
          onChange={e => this.handleLastNameChange(e)}
        />
        <TextInputEx6
          id="firstName"
          value={this.state.firstName}
          onChange={e => this.handleFirstNameChange(e)}
        />
        <p>
          Bonjour {this.state.firstName} {this.state.lastName}
        </p>
      </div>
    );
  }
}

export default NewPeople2Class;
