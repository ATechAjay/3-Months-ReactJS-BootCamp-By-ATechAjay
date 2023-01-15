import "./Output.css";
// import { useState } from "react";
const Output = (props) => {
  const data = props.beingDisplay;
  return (
    <div className="output__container">
      {data.map((item) => (
        <h3 className="output__container--output" key={item.id}>
          {`I'm ${item.enteredName}, and ${item.enteredAge} years old!`}
        </h3>
      ))}
    </div>
  );
};

export default Output;
