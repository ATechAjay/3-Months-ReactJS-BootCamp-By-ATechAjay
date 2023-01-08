import "./Form.css";

function Form() {
  return (
    <form action="">
      <div className="form__controls--container">
        <div className="input__container">
          <label>Title</label>
          <input type="text" placeholder="Add items..." />
        </div>
        <div className="input__container">
          <label>Amount</label>
          <input type="number" placeholder="Add amount..." />
        </div>
        <div className="input__container">
          <label>Date</label>
          <input type="date" />
        </div>
        <div className="btn__container">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
