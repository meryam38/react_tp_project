import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import CustomButton from "./CustomButton_class";
import TextInput from "./TextInput_class";
import DisablableButton from "./DisablableButton_class";
import NewPeople from "./NewPeople_class";
import NewPeopleEx6 from "./NewPeopleEx6_class";

import "./styles.css";

class AppClass extends Component {
  constructor(props) {
    super(props);
    this.btn1 = React.createRef();
    this.btn2 = React.createRef();
    this.btn3 = React.createRef();
  }

  reactiveButtons() {
    this.btn1.current.enable();
    this.btn2.current.enable();
    this.btn3.current.enable();
  }

  render() {
    return (
      <div className="App">
        <h1>Exercice 1</h1>
        <CustomButton
          text="Click-me !"
          action={function(e) {
            alert('has been clicked')
          }}
        />

        <h1>Exercice 2</h1>
        <TextInput />

        <h1>Exercice 3</h1>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => console.log('has been clicked')}
        >
          Secondary
        </Button>

        <h1>Exercice 4</h1>
        <DisablableButton ref={this.btn1} text="hello 1" />
        <DisablableButton ref={this.btn2} text="hello 2" />
        <DisablableButton ref={this.btn3} text="hello 3" />

        <h1>Exercice 5</h1>
        <NewPeople />

        <h1>Exercice 6</h1>
        <NewPeopleEx6 />

        <h1>Exercice 7</h1>
        <CustomButton
          action={() => this.reactiveButtons()}
          text="Réactive all"
        />
      </div>
    );
  }
}

export default AppClass;
