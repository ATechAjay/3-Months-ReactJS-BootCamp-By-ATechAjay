import "./App.css";
import AllList from "./components/AllList";
function App() {
  const API__DATA = [
    {
      id: "111",
      title: "Groceries",
      amount: 76.69,
      date: new Date(2020, 8, 11),
    },
    { id: "222", title: "Phone", amount: 399.5, date: new Date(2021, 2, 18) },
    {
      id: "333",
      title: "Petrol",
      amount: 563.99,
      date: new Date(2021, 11, 16),
    },
    {
      id: "444",
      title: "Books",
      amount: 360,
      date: new Date(2021, 5, 25),
    },
    {
      id: "555",
      title: "Laptop",
      amount: 900,
      date: new Date(2023, 0, 10),
    },
  ];
  return (
    <>
      <h1>Todo List Items</h1>
      <AllList list={API__DATA} />
    </>
  );
}

export default App;
