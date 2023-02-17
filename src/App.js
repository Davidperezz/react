import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const dummy = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Old Desk (Wooden)',
    amount: 450.39,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const[fresh,action]=useState(dummy);
  const adding =(data)=>{
    action((exp)=>{
      return[data,...exp]
    });
  }
  return (
    <div>
      <NewExpense onReciebing={adding}/>
      <Expenses expenses={fresh} />
    </div>
  );
}

export default App;
