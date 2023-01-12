import "./AllList.css";
import TodoListItem from "./TodoListItem";
function AllList(props) {

  const listArr = props.list;
  return (
    <div>
      {listArr.map((item) => (
        <TodoListItem
          key={item.id}
          title={item.title}
          price={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
}

export default AllList;
