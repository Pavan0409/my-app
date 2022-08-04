import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.item.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            LocationOfExpenditure={item.LocationOfExpenditure}
          />
        ))}

        {/* <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
        LocationOfExpenditure={props.item[1].LocationOfExpenditure}
      />
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
        LocationOfExpenditure={props.item[2].LocationOfExpenditure}
      />
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
        LocationOfExpenditure={props.item[3].LocationOfExpenditure}
      /> */}
      </Card>
    </div>
  );
};

export default Expenses;
