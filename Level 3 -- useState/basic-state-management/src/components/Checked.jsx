import "./Checked.css";
import { useState } from "react";
function Checked() {
  const [check, setCheck] = useState(false);

  function checkHandler(e) {
    // console.log(e.target.checked); //true or false -- toggle
    setCheck(e.target.checked);
  }
  return (
    <div className="checked__container">
      3.
      <input type="checkbox" onChange={checkHandler} />
      <p>You {check ? "checked" : "unchecked"} this!</p>
    </div>
  );
}

export default Checked;
