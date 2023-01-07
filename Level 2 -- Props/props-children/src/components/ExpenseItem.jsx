import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

import Card from "./Card";
function ExpenseItem(props) {
  return (
    // Sending "expense__item" class as a props to the 'Card' component.
    <Card className="expense__item">
      {/* Again sending date object to the another component */}
      <ExpenseDate dateProps={props.date} />
      <div className="expense__item--detail">
        <h2>{props.title}</h2>
        <div className="expense__item--price">${props.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
