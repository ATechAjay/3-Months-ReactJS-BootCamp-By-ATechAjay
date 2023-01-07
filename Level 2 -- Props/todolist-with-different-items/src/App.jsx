import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: "exp1",
      title: "Grains",
      amount: 254.12,
      date: new Date(2023, 0, 15),
    },
    {
      id: "exp2",
      title: "Phone recharge",
      amount: 730,
      date: new Date(2020, 10, 30),
    },
    {
      id: "exp3",
      title: "Bike Insurance",
      amount: 2000.55,
      date: new Date(2025, 8, 25),
    },
    {
      id: "exp4",
      title: "Desk set-up",
      amount: 10500,
      date: new Date(2023, 11, 12),
    },
  ];
  return (
    <div className="expense__item--container">
      {/* Sending data as a props to the expense item */}
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        price={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
