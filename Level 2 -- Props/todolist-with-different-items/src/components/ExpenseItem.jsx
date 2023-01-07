import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div className="expense__item">
      {/* Again sending date object to the another component */}
      <ExpenseDate dateProps={props.date} />
      <div className="expense__item--detail">
        <h2>{props.title}</h2>
        <div className="expense__item--price">${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
