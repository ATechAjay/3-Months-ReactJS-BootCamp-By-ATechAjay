import "./Form.css";
import { useState } from "react";
function Form() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  function titleHandler(event) {
    // console.log(event.target.value);
    setTitle(event.target.value);
  }
  function priceHandler(event) {
    // console.log(event.target.value);
    setPrice(event.target.value);
  }
  function dateHandler(event) {
    // console.log(event.target.value);
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const filledData = {
      title: title,
      price: price,
      date: date,
      // date: new Date(date),
    };

    alert(`
  FILLED DATA BY YOU:

    Title: ${filledData.title}
    Price: ${filledData.price}
    Date: ${filledData.date}
    `);

    // Resetting input field with an empty string("") and set this data as the value of the input field.

    setTitle("");
    setPrice("");
    setDate("");
  }
  return (
    <form action="" onSubmit={submitHandler}>
      <div className="form__controls--container">
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
          <input type="date" onChange={dateHandler} value={date} />
        </div>
        <div className="btn__container">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
