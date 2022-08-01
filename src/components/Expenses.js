import "./Expenses.css"
import "./ExpenseItem.css";

function Expenses(props) {

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      {/* <ExpenseDate date={props.date} /> */}
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>

      <div>
        <h1>{props.title}</h1>
        <div>
          <h1>{props.LocationOfExpenditure}</h1>
        </div>
      </div>
      <div className="expense-item__description">
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
    </div>
  );
}

export default Expenses;
