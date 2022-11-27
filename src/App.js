import React from "react";
import Button from "@material-ui/core/Button";

import CustomButton from "./CustomButton";
import TextInput from "./TextInput";
import DisablableButton from "./DisablableButton";
import NewPeople from "./NewPeople";
import NewPeopleEx6 from "./NewPeopleEx6";
import image from "./images/hacking.jpg";

import "./styles.css";

const App = (props) => {
  return (
    <div className="App">
      <img src={image} height={200} />
      <h1>Exercice 1</h1>
      <CustomButton
        text="Click-here !"
        action={function (e) {
          alert("succesfuly clicked");
        }}
      />

      <h1>Exercice 2</h1>
      <button>confirme</button>
      <TextInput type="text" placeholder="put your text here" />

      <h1>Exercice 3</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => console.log("has been clicked")}
      >
        primary
      </Button>

      <h1>Exercice 4</h1>
      <DisablableButton text="hello 1" color="danger" />
      <DisablableButton text="hello 2" />
      <DisablableButton text="hello 3" />

      <h1>Exercice 5</h1>
      <NewPeople />

      <h1>Exercice 6</h1>
      <NewPeopleEx6 />
    </div>
  );
};

export default App;
