import Expenses from "./components/Expenses.js";
import React from "react";

function App(props) {
  const expenses = [
    {
      id: "e1",
      title: "Perfume",
      amount: 100.23,
      date: new Date(2022, 4, 12),
      LocationOfExpenditure: "Punjagutta",
    },
    {
      id: "e2",
      title: "Chpati roller",
      amount: 129,
      date: new Date(2022, 5, 10),
      LocationOfExpenditure: "Ameerpet",
    },
    {
      id: "e3",
      title: "Chicken party",
      amount: 259.69,
      date: new Date(2022, 6, 22),
      LocationOfExpenditure: "Banjara hills",
    },
    {
      id: "e4",
      title: "Agarbatti",
      amount: 20.23,
      date: new Date(2022, 7, 19),
      LocationOfExpenditure: "Jublee hills",
    },
  ];

  return (
    <div>
      {/* <Expenses item={expenses} /> */}
      <div className="expenses">
      <Expenses
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
        LocationOfExpenditure={props.item[0].LocationOfExpenditure}
      />
      <Expenses
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
        LocationOfExpenditure={props.item[1].LocationOfExpenditure}
      />
      <Expenses
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
        LocationOfExpenditure={props.item[2].LocationOfExpenditure}
      />
      <Expenses
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
        LocationOfExpenditure={props.item[3].LocationOfExpenditure}
      />
    </div>
    </div>
  );
}

export default App;
