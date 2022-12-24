import "./ExpenseItem.css";
function ExpenseItem(props) {
    /*const ExpenseDate=new Date(2021,2,24);
    const ExpenseDes='Car Insurance';
    const ExpensePrice=287.54;
    const ExpenseLocation="Car Service"*/
  return (
    <div className="expense-item">
       <h2>{props.date.toISOString()}</h2>
      <div className="expense-item__description">
      <div>{props.title}</div>
     
        <div className="expense-item__description">
        {props.ExpenseLocation}
        </div>
        <div className="expensre-item__price">
        <h2>{props.amount}</h2></div>
      </div>
    </div>
  );
}
export default ExpenseItem;
