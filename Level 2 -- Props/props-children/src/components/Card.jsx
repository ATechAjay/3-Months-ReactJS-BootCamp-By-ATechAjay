import "./Card.css";

function Card(props) {
  // "props.className" is the class name of the custome component i.e. "expense__item"
  const customCompoClass = "card " + props.className;

  console.log(customCompoClass); // card expense__item
  // props.children is the all children inside the 'Card' custom component(Have a look inside ExpenseItem).
  return <div className={customCompoClass}>{props.children}</div>;
}

export default Card;
