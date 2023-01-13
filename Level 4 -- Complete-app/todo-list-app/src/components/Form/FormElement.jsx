import Card from "../CardContainer/Card";
import "./FormElement.css";
import { useState } from "react";
function FormElement(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  function titleHandler(event) {
    setTitle(event.target.value);
  }

  function priceHandler(event) {
    setPrice(event.target.value);
  }

  function dateHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const newListItem = {
      id: Math.random(),
      title: title,
      amount: +price,
      date: new Date(date),
    };

    // console.log(newListItem);

    props.gettingData(newListItem);
    //For resetting input field after submitted! and put their data as the 'value' property of the input field.
    setTitle("");
    setPrice("");
    setDate("");
  }

  return (
    <form action="" onSubmit={submitHandler}>
      <Card className="form__controls--container">
        <div className="input__container">
          <label>Title</label>
          <input
            type="text"
            placeholder="Add items..."
            onChange={titleHandler}
            value={title}
          />
        </div>
        <div className="input__container">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Add amount..."
            onChange={priceHandler}
            value={price}
          />
        </div>
        <div className="input__container">
          <label>Date</label>
          <input
            type="date"
            placeholder="dd-mm-yyyy"
            onChange={dateHandler}
            value={date}
          />
        </div>
        <div className="btn__container">
          <button type="submit">Submit</button>
        </div>
      </Card>
    </form>
  );
}

export default FormElement;
