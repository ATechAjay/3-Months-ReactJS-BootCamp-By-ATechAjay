import "./TodoListDate.css";
function TodoListDate(props) {

  const month = props.dateProps.toLocaleString("en-US", { month: "long" });

  const day = props.dateProps.toLocaleString("en-US", { day: "2-digit" });

  const year = props.dateProps.getFullYear();

  return (
    <div className="todo__list--date">
      <div className="todo__list--month">{month}</div>
      <div className="todo__list--year"> {year}</div>
      <div className="todo__list--day">{day}</div>
    </div>
  );
}

export default TodoListDate;
