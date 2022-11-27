import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

import "./styles.css";

class NewPeopleClass extends Component {
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
        <TextField
          id="lastName"
          value={this.state.lastName}
          label="Prénom"
          margin="normal"
          onChange={e => this.handleLastNameChange(e)}
        />
        <TextField
          id="firstName"
          value={this.state.firstName}
          label="Nom"
          margin="normal"
          onChange={e => this.handleFirstNameChange(e)}
        />
        <p>
          Bonjour {this.state.firstName} {this.state.lastName}
        </p>
      </div>
    );
  }
}

export default NewPeopleClass;
