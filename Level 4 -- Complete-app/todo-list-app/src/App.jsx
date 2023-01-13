import "./App.css";
import Form from "./components/Form/Form";
import UpcomingTodolist from "./components/TodolistContainer/UpcomingTodolist";
import { useState } from "react";

const EXISTING__DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Laptop",
    amount: 900,
    date: new Date(2023, 0, 10),
  },
];

function App() {
  const [list, setList] = useState(EXISTING__DATA);
  function dataLifting(newListData) {
    setList([newListData, ...list]);
  }
  return (
    <div>
      <Form gettingNewData={dataLifting} />
      <UpcomingTodolist existingData={EXISTING__DATA} passNewData={list} />
    </div>
  );
}

export default App;
