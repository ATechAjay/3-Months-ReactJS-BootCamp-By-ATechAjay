import "./App.css";
import Form from "./components/Form";

function App() {
  function gettingDataHandler(childData) {
    console.log("In APP components");
    console.log(childData);
    // 'childData' is commig from the child components.
  }
  return <Form gettingDataFromChild={gettingDataHandler} />;
}

export default App;
