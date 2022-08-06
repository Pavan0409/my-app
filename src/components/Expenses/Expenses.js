import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expenseContent = <h1>No expenses found</h1>;
  // if(filteredExpenses.length >0){
  //   expenseContent =  filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ))  
  // };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses = {filteredExpenses}></ExpensesChart>
        
        {/* {expenseContent } */}
        {filteredExpenses.length === 0 && <h1>No expenses found</h1>} 
        {filteredExpenses.length === 1 && <h2>Only single Expense here. Please add more...</h2>}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;