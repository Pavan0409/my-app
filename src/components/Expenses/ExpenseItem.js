import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setAmount("100");
    console.log(amount + 100);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h4>{props.LocationOfExpenditure}</h4>
        <h1>{props.title}</h1>
      </div>
      <div className="expense-item__price">₹{amount}</div>
      <button onClick={clickHandler}>Change amount</button>
    </Card>
  );
};

export default ExpenseItem;
