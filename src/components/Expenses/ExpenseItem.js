import ExpenseDate from './ExpenseDate';
import Card from '../UI/Cards';
import { useState } from 'react';
import "./ExpenseItem.css";
function ExpenseItem(props) {

  const [title, newTitle] = useState(props.title);

  const botonTitleHandler = () =>{
    newTitle('Updated!');
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expemse-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={botonTitleHandler}>video 64</button>
    </Card>
  );
}
export default ExpenseItem;
