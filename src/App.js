import Expenses from "./components/Expenses";

function App() {
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
      {/* <h2>let's get started!</h2> */}
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
