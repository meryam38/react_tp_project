import React, { useState } from "react";

import TextInputEx6 from "./TextInputEx6";

import "./styles.css";

const NewPeople = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  return (
    <div>
      <TextInputEx6
        id="lastName"
        value={lastName}
        onChange={(e) => handleLastNameChange(e)}
      />
      <TextInputEx6
        id="firstName"
        value={firstName}
        onChange={(e) => handleFirstNameChange(e)}
      />
      <p>
        heloo! 🙌{firstName} {lastName}
      </p>
    </div>
  );
};

export default NewPeople;
