import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";

// const App = () => {
//   const expenses = [
//     {
//       id: "e1",
//       title: "Perfume",
//       amount: 100.23,
//       date: new Date(2022, 4, 12),
//       LocationOfExpenditure: "Punjagutta",
//     },
//     {
//       id: "e2",
//       title: "Chpati roller",
//       amount: 129,
//       date: new Date(2022, 5, 10),
//       LocationOfExpenditure: "Ameerpet",
//     },
//     {
//       id: "e3",
//       title: "Chicken party",
//       amount: 259.69,
//       date: new Date(2022, 6, 22),
//       LocationOfExpenditure: "Banjara hills",
//     },
//     {
//       id: "e4",
//       title: "Agarbatti",
//       amount: 20.23,
//       date: new Date(2022, 7, 19),
//       LocationOfExpenditure: "Jublee hills",
//     },
//   ];

//   return (
//     <div>
//       {/* <h2>let's get started!</h2> */}
//       <Expenses item={expenses} />
//     </div>
//   );
// };



const App = () => {
  const deleteHandler = (amount) => {
    console.log(amount);
    expenses = data.filter((item) => item.amount !== amount);
    setData(expenses);
    console.log(expenses);
  };

  let expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [data, setData] = useState(expenses);
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={data} deleteHandler={deleteHandler} />
    </div>
  );
};

export default App;
