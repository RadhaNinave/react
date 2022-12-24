import "./App.css";

import ExpenseItem from "./component/ExpenseItem";
function App() {
  const expenses = [
    {
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      ExpenseLocation: "Home",
    },
    {
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      ExpenseLocation: "Appliences",
    },
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      ExpenseLocation: "CanvasRenderingContext2D",
    },
    {
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      ExpenseLocation: "Laptop",
    },
  ];

  return (
    <div>
      <h2> lets start </h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        ExpenseLocation={expenses[0].ExpenseLocation}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        ExpenseLocation={expenses[1].ExpenseLocation}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        ExpenseLocation={expenses[2].ExpenseLocation}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        ExpenseLocation={expenses[3].ExpenseLocation}
      ></ExpenseItem>
    </div>
  );
}

export default App;
