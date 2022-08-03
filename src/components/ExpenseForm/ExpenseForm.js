import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmounnt, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
    console.log(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
    console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
