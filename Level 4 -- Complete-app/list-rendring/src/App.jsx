import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";
import { useState } from "react";
function App() {
  const existingData = [
    { id: Math.random(), enteredName: "Ajay", enteredAge: "23" },
  ];
  const [output, setOutput] = useState(existingData);
  function gettingData(data) {
    setOutput([data, ...output]);
  }

  return (
    <>
      <Input sendingData={gettingData} />
      <Output beingDisplay={output} />
    </>
  );
}

export default App;
