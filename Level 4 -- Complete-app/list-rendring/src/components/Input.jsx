import "./Input.css";
import { useState } from "react";
const Input = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function nameHandler(event) {
    setName(event.target.value);
  }
  function ageHandler(event) {
    setAge(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    // Preventing from invalid input.
    if (name.trim().length === 0 || age.trim().length === 0) {
      return;
    }

    if (age < 1) {
      return;
    }
    //Creating new variable and send it to the other component.

    const enteredValue = {
      id: Math.random(),
      enteredName: name,
      enteredAge: age,
    };
    //Sending data to the parent container!
    props.sendingData(enteredValue);

    // Clearing the input fields
    setName("");
    setAge("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="input__container">
        <div className="input__container--item">
          <label>Name</label>
          <input
            onChange={nameHandler}
            type="text"
            placeholder="Enter your name..."
            value={name}
          />
        </div>
        <div className="input__container--item">
          <label>Age (Year)</label>
          <input
            onChange={ageHandler}
            type="number"
            placeholder="Enter your age..."
            value={age}
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Input;
