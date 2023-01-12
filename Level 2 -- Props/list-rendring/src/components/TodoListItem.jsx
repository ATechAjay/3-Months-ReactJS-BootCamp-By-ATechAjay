import "./TodoListItem.css";
import TodoListDate from "./TodoListDate";
function TodoListItem(props) {
  return (
    <div className="todo__list">
      <TodoListDate dateProps={props.date} />
      <div className="todo__list--info">
        <h2>{props.title}</h2>
        <div className="todo__list--price">${props.price}</div>
      </div>
    </div>
  );
}

export default TodoListItem;
