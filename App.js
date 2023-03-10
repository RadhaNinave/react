import NewExpense from "./component/NewExpenses/NewExpense";
//import ExpenseItem from "./component/Expenses/ExpenseItem";
import Expenses from "./component/Expenses/Expenses";
import { useState } from "react";
//import Expenses from "./component/Expenses/Expenses";
function App() {
  const DUMMY_EXPENSES=[
    {
      
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {  title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  
    const[expenses,setExpenses]=useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = expense =>{
    console.log('in app.js');
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
    });
  };
  return (
   /* <div>
      
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
      */
     <div>
    <div>

      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  
   
   </div>
  )
}
export default App;