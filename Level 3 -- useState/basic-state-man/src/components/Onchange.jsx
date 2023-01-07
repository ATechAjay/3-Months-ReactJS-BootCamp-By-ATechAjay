import "./Onchange.css";
import { useState } from "react";
function Onchange() {
  const [text, setText] = useState("");

  function changeHandler(e) {
    setText(e.target.value);
  }

  function clickHandler() {
    setText("");
  }

  return (
    <div className="onchange__container">
      <h2>2. Type here</h2>
      <input
        value={text}
        onChange={changeHandler}
        type="text"
        placeholder="Start Typing..."
      />
      <h3 className="output">{text}</h3>
      <button onClick={clickHandler}>Reset</button>
    </div>
  );
}

export default Onchange;
