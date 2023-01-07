import "./ExpenseDate.css";
function ExpenseDate(props) {
  //   console.log(props.dateProps);

  const month = props.dateProps.toLocaleString("en-US", { month: "long" });
  const day = props.dateProps.toLocaleString("en-US", { day: "2-digit" });

  const year = props.dateProps.getFullYear();
  //   console.log(year);
  //   console.log(day);
  //   console.log(month)
  return (
    <div className="expense__date">
      <div className="expense__date--month">{month}</div>
      <div className="expense__date--year">{year}</div>
      <div className="expense__date--day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
