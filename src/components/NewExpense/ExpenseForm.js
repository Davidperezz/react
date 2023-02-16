import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm() {
  const[oldTitle, titleSet]=useState('')
  const[oldAmount, AmountSet]=useState('')
  const[oldDate, DateSet]=useState('')
  /* const[userInput, setUserInput] = useState({
    oldTitle:'',
    oldAmount:'',
    oldDate:'',
  }); */
  
  const titleHandler=(event)=>{
    console.log(event.target.value)
    titleSet(event.target.value)
    /* setUserInput((prevState)=>{
      return{...prevState, oldTitle:event.target.value}
    }) */

  }
  const amountHandler=(event)=>{
    console.log(event.target.value)
    AmountSet(event.target.value)
  }
  const dateHandler=(event)=>{
    console.log(event.target.value)
    DateSet(event.target.value)
  }
  const submitHsndler =(event)=>{
    event.preventDefault();
    const oldInfoNew={
      title: oldTitle,
      amount: oldAmount,
      date: new Date(oldDate),
    }
    console.log(oldInfoNew);
    titleSet('')
    AmountSet('')
    DateSet('')
  }
  return (
    <form onSubmit={submitHsndler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={oldTitle} onChange={titleHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={oldAmount} onChange={amountHandler} min="0.01" step="0.01"></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={oldDate} onChange={dateHandler} min="2020-01-01" max="2024-01-01"></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
