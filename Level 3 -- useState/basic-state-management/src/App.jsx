import Count from "./components/Count";
import Onchange from "./components/Onchange";
import Checked from "./components/Checked";
import TwoStates from "./components/TwoStates";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>State Management!</h1>
      <Count />
      <Onchange />
      <Checked />
      <TwoStates />
    </div>
  );
}

export default App;
