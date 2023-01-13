import "./Form.css";
import FormElement from "./FormElement";

function Form(props) {
  function dataLifting(newListData) {
    props.gettingNewData(newListData);
  }
  return <FormElement gettingData={dataLifting} />;
}

export default Form;
