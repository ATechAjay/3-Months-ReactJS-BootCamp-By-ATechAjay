import "./TodoListItem.css";
import TodoListDate from "./TodoListDate";
import Card from "../CardContainer/Card";
function TodoListItem(props) {
  return (
    <Card className="todo__list">
      <TodoListDate dateProps={props.date} />
      <div className="todo__list--info">
        <h2>{props.title}</h2>
        <div className="todo__list--price">₹{props.price}</div>
      </div>
    </Card>
  );
}

export default TodoListItem;
