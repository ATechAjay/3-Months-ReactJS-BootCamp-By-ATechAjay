import "./TodoListItem.css";

function TodoListItem() {
  return (
    <div className="todo-list">
      <div className="todo-list--date">January 5th 2023</div>
      <div className="todo-list-info">
        <h2>Room rent.</h2>
        <div className="todo-list--price">$423.43</div>
      </div>
    </div>
  );
}

export default TodoListItem;
