import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div>
        <h1>{props.title}</h1>
        <div>
          <h1>{props.LocationOfExpenditure}</h1>
        </div>
      </div>
      <div className="expense-item__description">
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;