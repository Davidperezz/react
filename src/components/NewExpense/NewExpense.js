import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
function NewExpense(props) {
  const SaveData=(data)=>{
    const savedData ={
      ...data,
      id: Math.random().toString(),
    }
    console.log(savedData);
    props.onReciebing(savedData)
  }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveData={SaveData}/>
    </div>
  );
}
export default NewExpense;
