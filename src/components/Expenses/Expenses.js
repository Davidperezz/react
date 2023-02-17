import ExpenseItem from "./ExpenseItem";
import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css'
function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    console.log('aca ando vivito',filteredYear)
    setFilteredYear(selectedYear);
  };

    return (
        <div className="exp">
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
          {props.expenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
          {/* <ExpenseItem title={expenses.expenses[0].title} amount={expenses.expenses[0].amount} date={expenses.expenses[0].date}/>
          <ExpenseItem title={expenses.expenses[1].title} amount={expenses.expenses[1].amount} date={expenses.expenses[1].date}/>
          <ExpenseItem title={expenses.expenses[2].title} amount={expenses.expenses[2].amount} date={expenses.expenses[2].date}/>
          <ExpenseItem title={expenses.expenses[3].title} amount={expenses.expenses[3].amount} date={expenses.expenses[3].date}/> */}
        </div>
      );
}
export default Expenses;
