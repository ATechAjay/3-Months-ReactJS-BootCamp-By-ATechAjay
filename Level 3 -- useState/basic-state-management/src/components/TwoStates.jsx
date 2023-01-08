import "./TwoStates.css";
import { useState } from "react";
function TwoStates() {
  const [count, setCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  function clickHandler() {
    setCount(count + 1);
  }

  function changeHandler(e) {
    setCharCount(e.target.value.length);
  }
  return (
    <div className="two-states__container">
          <h2>4. Two independent state.</h2>
      <input
        type="text"
        onChange={changeHandler}
        placeholder="Start Typing..."
      />
      <p>{"Length: " + charCount}</p>
      <button onClick={clickHandler}>{count} Independent state</button>
    </div>
  );
}

export default TwoStates;
