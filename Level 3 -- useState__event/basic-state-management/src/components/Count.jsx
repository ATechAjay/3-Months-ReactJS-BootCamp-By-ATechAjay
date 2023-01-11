import "./Count.css";
import { useState } from "react";
function Count() {
  const [count, setCount] = useState(0);

  function clickHandler() {
    setCount(count + 1);
  }
  return (
    <div className="btn__container">
      <h2>1. Click on this button</h2>
      <button onClick={clickHandler}>{count} times clicked!!</button>
    </div>
  );
}
export default Count;
