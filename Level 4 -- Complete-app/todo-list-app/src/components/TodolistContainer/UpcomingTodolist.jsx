import Card from "../CardContainer/Card";
import TodoListItem from "../TodoList/TodoListItem";
import "./UpcomingTodolist.css";
import Filter from "../FilterYear/Filter";
import { useState } from "react";

function UpcomingTodolist(props) {
  const [filterYear, setFilterYear] = useState(2023);

  function filterYearHandler(filterYear) {
    setFilterYear(filterYear);
  }

  const filteredArray = props.passNewData.filter((item) => {
    return item.date.getFullYear() === +filterYear;
  });

  // console.log(filteredArray.length);

  // console.log(props.passNewData[0].date.getFullYear());
  // console.log(typeof props.passNewData[0].date.getFullYear());
  // console.log(filterYear);
  // console.log(typeof +filterYear);
  return (
    <Card className="todolist__container">
      <Filter filteredYearValue={filterYear} onFilterYear={filterYearHandler} />

      {/* conditional rendring */}
      {filteredArray.length === 0 ? (
        <p className="item_not__Found">The item was not found :(</p>
      ) : (
        filteredArray.map((item) => (
          <TodoListItem
            key={item.id}
            title={item.title}
            price={item.amount}
            date={item.date}
          />
        ))
      )}
    </Card>
  );
}

export default UpcomingTodolist;
