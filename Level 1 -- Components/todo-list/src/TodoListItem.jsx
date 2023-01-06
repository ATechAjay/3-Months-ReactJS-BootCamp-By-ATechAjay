import "./TodoListItem.css";
import TodoListDate from "./components/TodoListDate";
function TodoListItem() {
  return (
    <div className="todo__list">
      <TodoListDate/>
      <div className="todo__list--info">
        <h2>Room rent.</h2>
        <div className="todo__list--price">$423.43</div>
      </div>
    </div>
  );
}

export default TodoListItem;
