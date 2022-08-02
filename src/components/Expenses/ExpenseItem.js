import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// const ExpenseItem = (props) => {
//   const [title, setTitle]  = useState(props.title);

//   const clickHandler = () => {
//     setTitle("Updated!");
//     console.log(title)
//   };

//   return (
//     <Card className='expense-item'>
//       <ExpenseDate date={props.date} />
//       <div className='expense-item__description'>
//         <h2>{title}</h2>
//         <div className='expense-item__price'>${props.amount}</div>
//       </div>
//       <button onClick={clickHandler}>Change title</button>
//     </Card>
//   );
// }

const ExpenseItem = (props) => {
  const clickHandler = (id) => {
    props.deleteHandler(props.amount);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Delete Expenses</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
